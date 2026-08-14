import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import {
  ArrowRight,
  Brush,
  Check,
  ChevronDown,
  ClipboardCheck,
  FileText,
  GraduationCap,
  MessageCircle,
  Sparkles,
  WalletCards,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  applicationItems,
  communityPosts,
  getOpportunityBySlug,
  matchDimensions,
  opportunities,
  platformStats,
  projectMatches,
} from "@/data/mockData";
import { OpportunityCard } from "@/components/OpportunityCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ScrollProgress } from "@/components/ScrollProgress";
import { WaitlistForm } from "@/components/WaitlistForm";

const textAction = "text-arrow-action text-zinc-950";
const communityAvatarColors = [
  "var(--color-clay)",
  "var(--color-mist)",
  "var(--color-lilac)",
];

function revealStyle(step: number): CSSProperties {
  return { "--reveal-step": step } as CSSProperties;
}

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  icon?: LucideIcon;
  prominent?: boolean;
  compact?: boolean;
  action?: ReactNode;
};

function SectionHeading({
  eyebrow,
  title,
  description,
  icon: Icon,
  prominent = false,
  compact = false,
  action,
}: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-5xl">
        <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-zinc-700">
          {Icon ? <Icon className="size-4" /> : <span aria-hidden="true">▸</span>}
          {eyebrow}
        </p>
        <h2
          className={
            prominent
              ? "mt-5 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
              : compact
                ? "mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
                : "mt-5 text-4xl font-bold tracking-tight sm:text-5xl"
          }
        >
          {title}
        </h2>
        {description ? (
          <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-700">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

export default function Home() {
  const featuredResidencies = opportunities.slice(0, 4);
  const topMatches = projectMatches.slice(0, 3);
  const activeApplication = applicationItems[0];
  const activeOpportunity = activeApplication
    ? getOpportunityBySlug(activeApplication.opportunitySlug)
    : null;
  const matchIcons = [Brush, FileText, GraduationCap, WalletCards, ClipboardCheck];
  const costGroups = [
    {
      title: "申请与项目费用",
      items: ["申请费", "项目费", "是否需要自费制作作品"],
    },
    {
      title: "空间与生活支持",
      items: ["住宿是否包含", "工作室是否提供", "是否提供生活补贴"],
    },
    {
      title: "跨境与保险成本",
      items: ["交通是否报销", "签证与保险成本"],
    },
    {
      title: "项目义务",
      items: ["是否要求公共分享或最终展示"],
    },
  ];

  return (
    <div>
      <ScrollReveal />

      <section className="bg-[var(--color-sage)]">
        <div className="editorial-band-inner !pt-10 lg:!pt-14">
          <div className="lg:max-w-[68%]">
            <div className="flex flex-col justify-center py-4 lg:py-12">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-700">
                Residency Application Assistant
              </p>
              <h1 className="mt-6 max-w-5xl text-5xl font-bold leading-[1.03] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
                为青年艺术家匹配可信驻留机会。
              </h1>
              <p className="mt-7 max-w-3xl text-base leading-8 text-zinc-700">
                通过机器整理与人工复核双重机制，校对国内外驻留项目的费用、住宿、语言、资格与截止日期；再结合艺术家的作品集媒介、创作阶段、预算和申请条件，给出更精准、个性化的驻留匹配建议。
              </p>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                <Link href="/opportunities" className={textAction}>
                  浏览驻留机会
                  <ArrowRight className="size-4" />
                </Link>
                <Link href="/matches" className={textAction}>
                  开始匹配
                  <ArrowRight className="size-4" />
                </Link>
                <Link href="/materials" className={textAction}>
                  准备申请材料
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 border-t border-black/25 lg:grid-cols-4">
            {platformStats.map((stat, index) => (
              <div
                key={stat.label}
                className="border-b border-black/20 py-6 pr-4 odd:border-r lg:border-b-0 lg:border-r lg:px-6 lg:first:pl-0 lg:last:border-r-0"
                style={revealStyle(index)}
              >
                <p className="text-4xl font-bold tracking-tight sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-zinc-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-paper)]" data-scroll-reveal="" style={revealStyle(0)}>
        <div className="editorial-band-inner">
          <SectionHeading
            eyebrow="Curated residencies"
            title="精选驻留机会"
            description="每个项目都标注成本、住宿、语言和申请资格，先看清条件，再决定是否投入申请时间。"
            prominent
            action={
              <Link href="/opportunities" className={textAction}>
                查看更多
                <ArrowRight className="size-4" />
              </Link>
            }
          />
          <div
            id="featured-residency-rail"
            className="-mx-4 mt-12 snap-x snap-mandatory overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:-mx-6 sm:px-6 xl:-mx-8 xl:px-8 [&::-webkit-scrollbar]:hidden"
          >
            <div className="flex min-w-max gap-6">
              {featuredResidencies.map((opportunity) => (
                <div
                  key={opportunity.slug}
                  className="w-[78vw] max-w-[330px] shrink-0 snap-start sm:w-[310px] lg:w-[330px]"
                >
                  <OpportunityCard
                    opportunity={opportunity}
                    compact
                    appearance="editorial"
                    className="h-full"
                  />
                </div>
              ))}
            </div>
          </div>
          <ScrollProgress targetId="featured-residency-rail" />
        </div>
      </section>

      <section className="bg-[var(--color-mist)]" data-scroll-reveal="" style={revealStyle(1)}>
        <div className="editorial-band-inner">
          <SectionHeading
            eyebrow="Application workflow"
            title="从发现驻留，到完成申请。"
            description="把项目理解、匹配理由、材料准备、提交状态和结果复盘放在同一条申请线里，减少错过截止日期和临时补材料的风险。"
            prominent
            action={
              <Link href="/applications" className={textAction}>
                查看申请清单
                <ArrowRight className="size-4" />
              </Link>
            }
          />

          {activeOpportunity ? (
            <div className="mt-14 grid gap-10 border-t border-black/25 pt-8 xl:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-zinc-600">
                  当前申请示例
                </p>
                <h3 className="mt-3 text-3xl font-bold tracking-tight">
                  {activeOpportunity.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-700">
                  {activeOpportunity.location} · {activeOpportunity.deadline} 截止 · {activeOpportunity.costLevel}
                </p>
                <p className="mt-7 text-5xl font-bold tracking-tight">
                  {activeApplication.status}
                </p>
                <p className="mt-5 text-sm leading-7 text-zinc-700">
                  下一步：{activeApplication.nextAction}
                </p>
                <Link href="/applications" className={`${textAction} mt-6`}>
                  继续完成申请
                  <ArrowRight className="size-4" />
                </Link>
              </div>

              <div className="grid gap-x-6 md:grid-cols-2">
                {activeApplication.materialProgress.map((material) => (
                  <div key={material.name} className="border-t border-black/20 py-5">
                    <div className="flex justify-between gap-3 text-sm font-semibold">
                      <span>{material.name}</span>
                      <span>{material.progress ? `${material.progress}%` : "未准备"}</span>
                    </div>
                    <div className="mt-4 h-1 bg-black/10">
                      <div className="h-1 bg-[var(--color-ink)]" style={{ width: `${material.progress}%` }} />
                    </div>
                    <p className="mt-3 text-xs leading-5 text-zinc-700">{material.note}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <section className="bg-[var(--color-clay)]" data-scroll-reveal="" style={revealStyle(2)}>
        <div className="editorial-band-inner">
          <SectionHeading
            eyebrow="Personal matches"
            title="我的匹配"
            description="先看为什么适合，再决定是否加入申请清单。匹配结果会同时考虑作品媒介、创作阶段、预算、语言和申请条件。"
            icon={Sparkles}
            action={
              <Link href="/matches" className={textAction}>
                查看全部
                <ArrowRight className="size-4" />
              </Link>
            }
          />
          <div className="mt-12 grid gap-8 xl:grid-cols-3">
            {topMatches.map((match) => {
              const opportunity = getOpportunityBySlug(match.opportunitySlug);
              if (!opportunity) return null;

              return (
                <Link
                  key={match.opportunitySlug}
                  href={`/opportunities/${opportunity.slug}`}
                  className="group border-t border-black/25 py-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-zinc-700">
                        基于你的匹配资料
                      </p>
                      <h3 className="mt-4 text-2xl font-bold tracking-tight">
                        {opportunity.title}
                      </h3>
                    </div>
                    <p className="text-4xl font-bold tracking-tight">{match.score}%</p>
                  </div>
                  <p className="mt-6 text-sm leading-7 text-zinc-700">
                    {match.reasons.join(" / ")}
                  </p>
                  <span className="text-arrow-action mt-4">
                    查看匹配详情
                    <ArrowRight className="size-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-sand)]" data-scroll-reveal="" style={revealStyle(3)}>
        <div className="editorial-band-inner">
          <SectionHeading
            eyebrow="Matching logic"
            title="我们不是简单推荐驻留，而是判断它是否真的适合你。"
            description="平台不是只看作品风格，而是综合作品、履历、预算、语言、时间和项目条件进行匹配。"
            prominent
          />
          <div className="mt-14 grid gap-x-7 md:grid-cols-2 xl:grid-cols-5">
            {matchDimensions.map((dimension, index) => {
              const Icon = matchIcons[index] ?? ClipboardCheck;
              return (
                <details key={dimension.title} className="group border-t border-black/25 py-6">
                  <summary className="cursor-pointer list-none">
                    <div className="flex items-center justify-between">
                      <Icon className="size-5" />
                      <span className="text-xs text-zinc-600">0{index + 1}</span>
                    </div>
                    <div className="mt-8 flex items-center justify-between gap-4">
                      <h3 className="text-2xl font-bold tracking-tight">{dimension.title}</h3>
                      <ChevronDown
                        className="size-5 shrink-0 transition-transform duration-200 group-open:rotate-180"
                        aria-hidden="true"
                      />
                    </div>
                  </summary>
                  <p className="mt-5 text-sm leading-7 text-zinc-700">{dimension.text}</p>
                </details>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-lilac)]" data-scroll-reveal="" style={revealStyle(4)}>
        <div className="editorial-band-inner">
          <SectionHeading
            eyebrow="Cost transparency"
            title="看清驻留背后的真实成本"
            description="申请前先判断费用、住宿、交通、签证、保险、制作材料和公共分享要求，避免在提交后才发现不适合自己的现实条件。"
            icon={WalletCards}
          />
          <div className="mt-12 grid gap-x-7 md:grid-cols-2 xl:grid-cols-4">
            {costGroups.map((group) => (
              <article key={group.title} className="border-t border-black/25 py-6">
                <div className="flex items-center gap-3">
                  <Check className="size-5" />
                  <h3 className="text-xl font-bold">{group.title}</h3>
                </div>
                <ul className="mt-6 space-y-3 text-sm leading-6 text-zinc-700">
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="community" className="bg-[var(--color-paper)]" data-scroll-reveal="" style={revealStyle(5)}>
        <div className="editorial-band-inner">
          <SectionHeading
            eyebrow="Residency guide"
            title="驻留指南讨论"
            description="围绕可信项目、费用、语言、签证、时间线和首次驻留准备，沉淀更适合中文语境的申请经验。"
            icon={MessageCircle}
            action={
              <Link href="/guide" className={textAction}>
                查看更多
                <ArrowRight className="size-4" />
              </Link>
            }
          />
          <div className="mt-12 grid gap-x-10 lg:grid-cols-2">
            {communityPosts.map((post, index) => (
              <article key={post.title} className="grid grid-cols-[48px_1fr_auto] gap-4 border-t border-black/20 py-6">
                <div
                  className="flex size-12 items-center justify-center rounded-full border border-black/25 text-base font-bold"
                  style={{ backgroundColor: communityAvatarColors[index % communityAvatarColors.length] }}
                  aria-hidden="true"
                >
                  {post.author.slice(0, 1).toUpperCase()}
                </div>
                <div>
                  <p className="text-base font-bold">{post.title}</p>
                  <p className="mt-2 text-sm text-zinc-600">{post.author} · {post.time}</p>
                </div>
                <p className="flex items-center gap-1 text-sm text-zinc-600">
                  <MessageCircle className="size-4" />
                  {post.comments}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-charcoal)] text-white">
        <div className="editorial-band-inner">
          <div className="grid gap-12 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-400">Private beta</p>
              <h2 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">加入内测</h2>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-300">
                留下你的创作方向与申请需求，优先体验驻留匹配、材料提醒和申请进度追踪。我们会优先邀请正在准备驻留申请的创作者。
              </p>
              <div className="mt-10 space-y-0 border-t border-white/20 text-sm text-zinc-300">
                <p className="border-b border-white/15 py-4">正在准备第一次驻留申请的青年艺术家</p>
                <p className="border-b border-white/15 py-4">需要中文解释、成本判断与材料提醒的艺术学生</p>
                <p className="border-b border-white/15 py-4">需要管理多个申请截止日与材料版本的创作者</p>
              </div>
            </div>
            <WaitlistForm compact />
          </div>
        </div>
      </section>
    </div>
  );
}
