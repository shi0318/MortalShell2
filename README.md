# Mortal Shell II Wiki

按执行手册搭建的攻略 Wiki，技术栈：Astro（静态输出）+ Tailwind CSS v4 + 自动 sitemap。
核心差异化：每条信息带**确认状态徽章**（✅Official / 🔬Beta / 👁️Trailer / 📖前作 / ❓未确认）+ 来源核对表。

## 本地运行

```bash
npm install      # 首次
npm run dev      # 开发服务器 → http://localhost:4321
npm run build    # 构建到 dist/
npm run preview  # 本地预览构建产物
```

## 目录结构

```
src/
├── data/                  # 结构化数据（驱动聚合页表格）
│   ├── site.ts            # 站点常量、导航、发售日
│   ├── sources.ts         # 确认状态体系 + 来源类型
│   ├── shells.ts          # Shell 列表
│   ├── weapons.ts         # 武器列表
│   └── bosses.ts          # Boss 列表
├── content/guides/        # ★ 攻略文章（.md）—— 加文章就在这里丢文件
├── components/            # StatusBadge / SourceTable / Breadcrumb / Schema 等
├── layouts/               # Layout（基础）/ GuideLayout（文章）
└── pages/                 # 路由（首页、聚合页、合规页、catch-all）
public/                    # robots.txt / favicon.svg
```

## 加一篇攻略（无需碰代码）

在 `src/content/guides/` 下丢一个 `.md` 文件。文件路径 = URL：

| 文件 | 生成的 URL |
|---|---|
| `gloom.md` | `/gloom/` |
| `bosses/cathedral-guardian.md` | `/bosses/cathedral-guardian/` |
| `walkthrough/chapter-1.md` | `/walkthrough/chapter-1/` |

frontmatter 模板（把手册第四章溯源体系变成填空）：

```markdown
---
title: "页面标题 — Mortal Shell II Wiki"   # <title>，60 字符内
heading: "页面 H1"                          # 可选，H1 与 title 不必完全相同
description: "150-160 字符的 meta 描述。"    # 必填
category: bosses                            # guide/shells/weapons/bosses/mechanics/walkthrough/news
status: beta                                # 整篇主导确认状态
preRelease: true                            # 发售后改 false，去掉 Pre-release 提示
updatedAt: 2026-08-20                       # 最后核对日期（日期不用加引号）
sources:                                    # 逐条来源 → 渲染成底部核对表
  - status: official
    sourceUrl: https://store.steampowered.com/...
    sourceDate: 2026-08-20
    gameVersion: "1.0"
    lastChecked: 2026-08-20
    note: "Steam 商店页描述"
---

正文用 Markdown 写。H2/H3 自然分布关键词，不堆砌。
```

改完 `git push` → Cloudflare 自动重新构建上线。

## 部署到 Cloudflare

站点是纯静态输出（`output: "static"`），部署最简单：
1. Cloudflare Pages → 连接 GitHub 仓库
2. 构建命令 `npm run build`，输出目录 `dist`
3. 无需 Workers 适配器（`@astrojs/cloudflare` 已装，留给未来动态路由用）

## 环境变量

| 变量 | 用途 |
|---|---|
| `PUBLIC_GA4_ID` | GA4 测量 ID（如 `G-XXXXXXX`）。未配置则不加载分析脚本 |

在 Cloudflare Pages 项目设置里加环境变量即可。

## 上线前检查（手册第六章）

- [ ] `astro.config.mjs` 里的 `site` 改成真实域名
- [ ] 补 `public/og-default.jpg`（1200×630 社交分享图）
- [ ] GA4 ID 配好
- [ ] 提交 Google Search Console：DNS 验证 + 提交 `sitemap-index.xml` + 请求索引首页
- [ ] 确认 HTTPS、robots.txt 正常
