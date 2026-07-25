import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// 站点最终域名（方案首选 mortalshell2.wiki，注册后可替换）
const SITE = 'https://mortalshell2.wiki';

// 与 GuideLayout 的 noindex 策略保持一致：trailer/prequel/unconfirmed 臆测页不进 sitemap。
// 目前仅 /gloom/（status: trailer）。新增臆测页时在此登记，正式发售核实后移除。
const NOINDEX_URLS = ['/gloom/'];
const isNoindexUrl = (page) => {
  const path = new URL(page).pathname;
  return NOINDEX_URLS.includes(path);
};

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
          lastmod: new Date().toISOString(),
        };
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
