// 内容真实性体系（方案第四章）
// 每个事实都必须携带来源与确认状态，这是本站与竞品 mortalshell2.org 的核心差异。

// 4.2 确认状态标签体系
export type ConfidenceStatus =
  | 'official' // ✅ 开发商在官网/Steam/Discord 正式公布
  | 'beta' // 🔬 在 Beta 版本中亲自验证
  | 'community' // 💬 汇总公开 Steam 玩家反馈，不等同于官方确认
  | 'trailer' // 👁️ 预告片中出现但系统细节未知
  | 'prequel' // 📖 基于 Mortal Shell 一代系统推测
  | 'unconfirmed'; // ❓ 论坛流传但无官方来源（不作页面主体）

export interface StatusMeta {
  label: string;
  icon: string;
  // 用于徽章配色（Tailwind class 片段）
  classes: string;
  description: string;
}

export const STATUS_META: Record<ConfidenceStatus, StatusMeta> = {
  official: {
    label: 'Official',
    icon: '✅',
    classes: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    description: 'Confirmed by the developer via official website, Steam, or Discord.',
  },
  beta: {
    label: 'Beta-tested',
    icon: '🔬',
    classes: 'bg-sky-500/15 text-sky-300 border-sky-500/30',
    description: 'Personally verified in a Beta build. Version and test date noted.',
  },
  community: {
    label: 'Community reports',
    icon: '💬',
    classes: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
    description: 'Aggregated from public Steam player reports and guides; not developer-confirmed.',
  },
  trailer: {
    label: 'Trailer',
    icon: '👁️',
    classes: 'bg-violet-500/15 text-violet-300 border-violet-500/30',
    description: 'Seen in a trailer, but system details are still unknown.',
  },
  prequel: {
    label: 'Prequel-based',
    icon: '📖',
    classes: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
    description: 'Inferred from Mortal Shell (2020). To be verified after launch.',
  },
  unconfirmed: {
    label: 'Unconfirmed',
    icon: '❓',
    classes: 'bg-ash-600/40 text-ash-300 border-ash-500/40',
    description: 'Circulating on forums without an official source. Not used as primary content.',
  },
};

// 4.1 每个事实必须记录的溯源信息
export interface SourceRef {
  status: ConfidenceStatus;
  // 来源 URL（官网 / Steam 新闻 / 官方 Discord / 官方 Twitter）
  sourceUrl?: string;
  // 来源内容的发布日期
  sourceDate?: string;
  // 游戏版本（Beta 版本号 / Demo / 预告片名称）
  gameVersion?: string;
  // 最后人工核对日期
  lastChecked: string;
  // 备注（例如「Trailer 1:42 处」）
  note?: string;
}
