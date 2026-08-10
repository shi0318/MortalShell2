import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

// 站点最终域名（方案首选 mortalshell2.wiki，注册后可替换）
const SITE = 'https://mortalshell2.wiki';

const ROOT = dirname(fileURLToPath(import.meta.url));
function frontmatterDate(file) {
  const source = readFileSync(join(ROOT, file), 'utf8');
  const match = source.match(/^updatedAt:\s*["']?(\d{4}-\d{2}-\d{2})/m);
  return match?.[1];
}

// Only guide frontmatter supplies a sitemap date; static routes omit it.
function lastmodFor(url) {
  const pathname = new URL(url).pathname;
  const slug = pathname.replace(/^\/+|\/+$/g, ''); // 去首尾斜杠
  const candidates = [`src/content/guides/${slug}.md`, `src/content/guides/${slug}.mdx`];
  const file = candidates.find((rel) => existsSync(join(ROOT, rel)));
  return file ? frontmatterDate(file) : undefined;
}

// 与 GuideLayout 的 noindex 策略保持一致：trailer/prequel/unconfirmed 臆测页不进 sitemap。
// 目前仅 /gloom/（status: trailer）。新增臆测页时在此登记，正式发售核实后移除。
const NOINDEX_URLS = ['/gloom/'];
const isNoindexUrl = (page) => {
  const path = new URL(page).pathname;
  return NOINDEX_URLS.includes(path);
};

// Markdown 正文里的站外链接统一带 rel="nofollow noopener noreferrer"（.astro 页面里手写的锚点已逐个标注）。
// 站内相对链接不受影响，权重照常在站内流转。
function rehypeExternalNofollow() {
  const isExternal = (href) =>
    typeof href === 'string' && /^https?:\/\//i.test(href) && !href.startsWith(SITE);
  const walk = (node) => {
    if (node.tagName === 'a' && isExternal(node.properties?.href)) {
      node.properties.rel = ['nofollow', 'noopener', 'noreferrer'];
      node.properties.target = '_blank';
    }
    for (const child of node.children ?? []) walk(child);
  };
  return (tree) => walk(tree);
}

export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !isNoindexUrl(page),
      // Prefer lastmod over low-signal changefreq/priority defaults.
      serialize(item) {
        const lastmod = lastmodFor(item.url);
        return lastmod ? { ...item, lastmod } : item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    rehypePlugins: [rehypeExternalNofollow],
  },
});
