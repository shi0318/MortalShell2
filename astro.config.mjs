import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

// 站点最终域名（方案首选 mortalshell2.wiki，注册后可替换）
const SITE = 'https://mortalshell2.wiki';

const ROOT = dirname(fileURLToPath(import.meta.url));
// 构建时刻，作为无 git 记录时的兜底（等同于旧行为，绝不比原来差）
const BUILD_TIME = new Date().toISOString();

// 把一个 sitemap URL 映射到它的源文件，返回该文件「最后一次 git 提交时间」。
// 静态页（src/pages/*.astro）与内容集合（src/content/guides/*.md）都覆盖。
// 好处：只改了某个页面，就只有那个页面的 lastmod 变化 —— 给 Google 可信信号。
// 若源文件找不到或不在 git 历史里（如 CI 浅克隆），退回构建时间。
function lastmodFor(url) {
  let pathname;
  try {
    pathname = new URL(url).pathname;
  } catch {
    return BUILD_TIME;
  }
  const slug = pathname.replace(/^\/+|\/+$/g, ''); // 去首尾斜杠
  const candidates =
    slug === ''
      ? ['src/pages/index.astro']
      : [
          `src/pages/${slug}.astro`,
          `src/pages/${slug}/index.astro`,
          `src/content/guides/${slug}.md`,
          `src/content/guides/${slug}.mdx`,
        ];
  const file = candidates.find((rel) => existsSync(join(ROOT, rel)));
  if (!file) return BUILD_TIME;
  try {
    const out = execFileSync('git', ['log', '-1', '--format=%cI', '--', file], {
      cwd: ROOT,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    return out ? new Date(out).toISOString() : BUILD_TIME;
  } catch {
    return BUILD_TIME;
  }
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
        return {
          ...item,
          lastmod: lastmodFor(item.url),
        };
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
