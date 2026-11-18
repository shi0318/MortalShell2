/** Read-only post-build route verification. Run: node scripts/verify-site.mjs
 * Optional production checks: node scripts/verify-site.mjs --live
 * Uses native fetch; run with environment proxy support where required.
 */
import { readFile, readdir, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const dist = path.join(root, 'dist');
const domain = 'https://mortalshell2.wiki';
const failures = [];
const assert = (ok, message) => { if (!ok) failures.push(message); };
async function files(dir) {
  const result = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) result.push(...await files(full));
    else result.push(full);
  }
  return result;
}
const decode = (s) => s.replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"');
const attr = (tag, name) => decode(tag.match(new RegExp(`\\b${name}\\s*=\\s*["']([^"']*)["']`, 'i'))?.[1] ?? '');
const route = (file) => '/' + path.relative(dist, file).split(path.sep).join('/').replace(/index\.html$/, '');
const all = await files(dist);
const pages = new Map();
for (const file of all.filter((f) => f.endsWith('.html'))) {
  const html = await readFile(file, 'utf8');
  pages.set(route(file), {
    html,
    canonical: attr((html.match(/<link\b[^>]*rel=["']canonical["'][^>]*>/i) ?? [])[0] ?? '', 'href'),
    ids: new Set([...html.matchAll(/\bid\s*=\s*["']([^"']+)["']/g)].map((m) => decode(m[1]))),
    links: [...html.matchAll(/<a\b[^>]*>/gi)].map((m) => attr(m[0], 'href')),
    noindex: /<meta\b[^>]*name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(html),
    refresh: /http-equiv=["']refresh/i.test(html),
  });
}
const redirects = new Map();
for (const raw of (await readFile(path.join(dist, '_redirects'), 'utf8')).split(/\r?\n/)) {
  const line = raw.trim();
  if (!line || line.startsWith('#')) continue;
  const [from, to, status = '302'] = line.split(/\s+/);
  assert(!redirects.has(from), `duplicate redirect source ${from}`);
  redirects.set(from, { to, status });
}
// The content map is the canonical source shared by build redirects and QA.
// Do not maintain a second list of old URLs in tests.
const contentRedirects = JSON.parse(await readFile(path.join(root, 'src/data/content-redirects.json'), 'utf8'));
for (const [from, to] of Object.entries(contentRedirects)) {
  assert(redirects.get(from)?.to === to && redirects.get(from)?.status === '301', `${from}: generated redirect differs from content map`);
}
const legacyBaseline = JSON.parse(await readFile(path.join(root, 'docs/legacy-redirect-baseline.json'), 'utf8'));
for (const from of legacyBaseline.requiredLegacySources) {
  assert(Object.hasOwn(contentRedirects, from), `${from}: previously live redirect lost during consolidation`);
}
const sitemap = (await Promise.all(all.filter((f) => /sitemap[^/\\]*\.xml$/.test(f)).map((f) => readFile(f, 'utf8')))).join('');
const urls = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => decode(m[1])));
assert(redirects.size === Object.keys(contentRedirects).length, 'generated redirect count differs from single source map');
for (const from of redirects.keys()) assert(Object.hasOwn(contentRedirects, from), `${from}: generated rule absent from source map`);
for (const [from, { to, status }] of redirects) {
  assert(status === '301', `${from}: expected permanent 301, got ${status}`);
  assert(!pages.has(from), `${from}: redirect source still emits HTML (may return 200 instead of 301)`);
  assert(!urls.has(domain + from), `${from}: merged URL remains in sitemap`);
  const target = new URL(to, domain);
  assert(target.origin === domain, `${from}: unexpected external target ${to}`);
  assert(!redirects.has(target.pathname), `${from}: redirect chain via ${target.pathname}`);
  const page = pages.get(decodeURIComponent(target.pathname));
  assert(!!page && !page.refresh, `${from}: target missing or soft redirect: ${to}`);
  if (target.hash) assert(page?.ids.has(decodeURIComponent(target.hash.slice(1))), `${from}: missing target anchor ${to}`);
  assert(page?.canonical === domain + target.pathname, `${from}: target is not canonical ${to}`);
}
const graph = new Map();
for (const [from, page] of pages) {
  if (from === '/404.html') continue;
  assert(!page.refresh, `${from}: soft redirect HTML is not a permanent HTTP redirect`);
  assert(page.canonical === domain + from, `${from}: non-self canonical ${page.canonical}`);
  assert((page.html.match(/<h1(?:\s|>)/gi) ?? []).length === 1, `${from}: expected one H1`);
  assert(/<title>[^<]+<\/title>/i.test(page.html), `${from}: missing title`);
  assert(/<meta\b[^>]*name=["']description["'][^>]*content=["'][^"']+/i.test(page.html), `${from}: missing description`);
  if (!page.noindex) assert(urls.has(domain + from), `${from}: indexable page missing sitemap`);
  const outgoing = new Set();
  for (const href of page.links) {
    if (!href || /^(mailto:|tel:|javascript:|data:)/i.test(href)) continue;
    const target = new URL(href, domain + from);
    if (target.origin !== domain) continue;
    const targetPath = decodeURIComponent(target.pathname);
    assert(!redirects.has(targetPath), `${from}: internal link goes through redirect ${href}`);
    const targetPage = pages.get(targetPath);
    if (!targetPage) {
      const file = path.join(dist, targetPath);
      const exists = await stat(file).then((s) => s.isFile()).catch(() => false);
      assert(exists, `${from}: broken internal URL ${href}`);
      continue;
    }
    assert(targetPage.canonical === domain + targetPath, `${from}: link target is noncanonical ${href}`);
    if (target.hash) assert(targetPage.ids.has(decodeURIComponent(target.hash.slice(1))), `${from}: broken anchor ${href}`);
    outgoing.add(targetPath);
  }
  graph.set(from, outgoing);
}
const discovered = new Set(['/']);
const queue = ['/'];
while (queue.length) {
  for (const target of graph.get(queue.shift()) ?? []) {
    if (!discovered.has(target)) { discovered.add(target); queue.push(target); }
  }
}
for (const [url] of pages) if (url !== '/404.html') assert(discovered.has(url), `${url}: orphan, unreachable from home`);

if (process.argv.includes('--live')) {
  // Manual redirects are essential: following a 200 soft page would hide a failure.
  for (const [from, rule] of redirects) {
    const res = await fetch(domain + from, { redirect: 'manual' });
    assert(res.status === 301, `LIVE ${from}: expected HTTP 301, got ${res.status}`);
    const location = new URL(res.headers.get('location') || '/', domain + from).href;
    assert(location === new URL(rule.to, domain + from).href, `LIVE ${from}: unexpected Location ${location}`);
  }
  const missing = '/__qa_missing_20261118_ms2_9a1e__/';
  const res = await fetch(domain + missing, { redirect: 'manual' });
  assert(res.status === 404, `LIVE ${missing}: expected 404, got ${res.status}`);
}
if (failures.length) {
  console.error(failures.join('\n'));
  console.error(`FAIL: ${failures.length} issues in ${pages.size} generated HTML / ${redirects.size} redirects`);
  process.exitCode = 1;
} else console.log(`PASS: ${pages.size} HTML; ${redirects.size} redirects; canonical links, anchors, sitemap and discovery checked`);
