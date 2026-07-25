// 内容集合定义 —— 让你以后加文章只需在 src/content/guides/ 丢一个 .md 文件。
// frontmatter 把方案第四章的溯源体系变成"填空题"：状态 + 来源 + 版本 + 核对日期。
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { toDateString } from './utils/dates';

// 确认状态枚举 —— 与 src/data/sources.ts 的 ConfidenceStatus 保持一致
const confidenceStatus = z.enum(['official', 'beta', 'trailer', 'prequel', 'unconfirmed']);

// YAML bare dates become Date objects; always normalize to YYYY-MM-DD strings.
const dateString = z.preprocess((value) => toDateString(value as string | Date | null | undefined), z.string().min(1));

// 单条来源引用（方案 4.1：每个事实必须记录）
const sourceRef = z.object({
  status: confidenceStatus,
  sourceUrl: z.string().url().optional(),
  sourceDate: dateString.optional(),
  gameVersion: z.string().optional(),
  lastChecked: dateString,
  note: z.string().optional(),
});

// 攻略文章集合：/gloom/、/beacons/、/pc-settings/、Boss 详情、流程章节等长文页面
const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    // H1（与 title 匹配但不完全相同，见方案 5.3 强制检查项）
    heading: z.string().optional(),
    description: z.string().min(50).max(170),
    // 页面所属分类（决定 Breadcrumb 与 CollectionPage 归属）
    category: z.enum(['guide', 'shells', 'weapons', 'bosses', 'mechanics', 'walkthrough', 'news']),
    // 整篇文章的整体确认状态（多数事实的主导状态）
    status: confidenceStatus,
    // 逐条来源清单，渲染成页面底部"来源与核对"表
    sources: z.array(sourceRef).default([]),
    // 发售前标记：为 true 时页面顶部显示 "Pre-release" 提示
    preRelease: z.boolean().default(true),
    // 排序与发布控制
    order: z.number().default(100),
    draft: z.boolean().default(false),
    // optional card thumbnail for list pages
    cover: z.string().optional(),
    updatedAt: dateString,
  }),
});

export const collections = { guides };
