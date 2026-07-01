import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  Brush,
  Check,
  ClipboardCheck,
  Compass,
  FileText,
  GraduationCap,
  ListChecks,
  MessageCircle,
  Sparkles,
  Target,
  Users,
  WalletCards,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  applicationItems,
  artists,
  communityPosts,
  getArtistBySlug,
  getOpportunityBySlug,
  heroImage,
  matchDimensions,
  opportunities,
  platformStats,
  projectMatches,
} from "@/data/mockData";
import { ArtistCard } from "@/components/ArtistCard";
import { OpportunityCard } from "@/components/OpportunityCard";
import { WaitlistForm } from "@/components/WaitlistForm";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  icon: LucideIcon;
  action?: ReactNode;
};

function SectionHeading({
  eyebrow,
  title,
  description,
  icon: Icon,
  action,
}: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-4xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-emerald-700">
          {eyebrow}
        </p>
        <div className="flex items-start gap-4">
          <span className="mt-1 flex size-12 shrink-0 items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 text-emerald-700">
            <Icon className="size-5" />
          </span>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              {title}
            </h2>
            {description ? (
              <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-500">
                {description}
              </p>
            ) : null}
          </div>
        </div>
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

export default function Home() {
  const featuredResidencies = opportunities.slice(0, 4);
  const featuredArtists = artists.slice(0, 4);
  const topMatches = projectMatches.slice(0, 3);
  const activeApplication = applicationItems[0];
  const activeOpportunity = activeApplication
    ? getOpportunityBySlug(activeApplication.opportunitySlug)
    : null;
  const applicationFlow = [
    "发现驻留",
    "查看匹配理由",
    "加入申请清单",
    "准备材料",
    "提交申请",
    "跟进状态",
    "复盘结果",
  ];
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
    <div className="mx-auto max-w-[1500px] space-y-20 lg:space-y-24">
      <section className="relative min-h-[520px] overflow-hidden rounded-[32px]">
        <Image
          src={heroImage}
          alt="驻留工作室中的当代艺术装置"
          fill
          priority
          sizes="(min-width: 1536px) 1400px, 100vw"
          className="object-cover opacity-25 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#fbfaf6] via-[#fbfaf6]/92 to-[#fbfaf6]/35" />

        <div className="relative grid min-h-[520px] gap-10 p-7 sm:p-10 xl:grid-cols-[minmax(0,1fr)_300px] xl:items-center">
          <div>
            <p className="mb-6 inline-flex rounded-full border border-zinc-200 bg-white/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
              Residency Application Assistant
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-zinc-950 sm:text-6xl">
              为青年艺术家匹配可信驻留机会
            </h1>
            <p className="mt-6 max-w-4xl text-base leading-8 text-zinc-600">
              聚合并审核国内外艺术驻留、研究型项目与创作支持计划，结合艺术家的作品集、媒介、创作阶段、预算、语言能力和申请条件，推荐真正适合的驻留项目，并帮助完成申请管理。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/opportunities"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-zinc-950 px-6 text-sm font-medium text-white transition hover:bg-zinc-800"
              >
                浏览驻留机会
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/matches"
                className="inline-flex h-11 items-center justify-center rounded-lg border border-zinc-200 bg-white/80 px-6 text-sm font-medium text-zinc-950 transition hover:border-zinc-300 hover:bg-white"
              >
                开始匹配
              </Link>
              <Link
                href="/institution-entry"
                className="inline-flex h-11 items-center justify-center rounded-lg border border-zinc-200 bg-white/80 px-6 text-sm font-medium text-zinc-950 transition hover:border-zinc-300 hover:bg-white"
              >
                发布驻留项目
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
            {platformStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/80 bg-white/75 p-5 shadow-sm shadow-zinc-200/50 backdrop-blur"
              >
                <p className="text-4xl font-semibold tracking-tight text-zinc-950">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-zinc-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Curated residencies"
          title="精选驻留机会"
          description="每个项目都标注成本、住宿、语言和申请资格，先看清条件，再决定是否投入申请时间。"
          icon={Compass}
          action={
            <Link
              href="/opportunities"
              className="inline-flex h-10 items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 text-sm font-medium text-zinc-600 transition hover:border-zinc-300 hover:text-zinc-950"
            >
              查看更多
              <ArrowRight className="size-4" />
            </Link>
          }
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featuredResidencies.map((opportunity) => (
            <OpportunityCard
              key={opportunity.slug}
              opportunity={opportunity}
              compact
            />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Application workflow"
          title="从发现驻留，到完成申请"
          description="把项目理解、匹配理由、材料准备、提交状态和结果复盘放在同一条申请线里，减少错过截止日期和临时补材料的风险。"
          icon={ListChecks}
          action={
            <Link
              href="/applications"
              className="inline-flex h-10 items-center gap-2 rounded-full bg-zinc-950 px-4 text-sm font-medium text-white transition hover:bg-zinc-800"
            >
              查看申请清单
              <ArrowRight className="size-4" />
            </Link>
          }
        />
        <div className="grid gap-3 md:grid-cols-7">
          {applicationFlow.map((step, index) => (
            <div
              key={step}
              className="rounded-2xl border border-zinc-200 bg-white p-4"
            >
              <span className="mb-4 block text-xs font-medium text-zinc-400">
                0{index + 1}
              </span>
              <p className="text-sm font-semibold text-zinc-900">{step}</p>
            </div>
          ))}
        </div>

        {activeOpportunity ? (
          <div className="rounded-3xl border border-zinc-200 bg-white p-5 sm:p-6">
            <div className="max-w-3xl">
              <p className="text-sm font-medium text-zinc-500">当前申请示例</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950">
                {activeOpportunity.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-500">
                {activeOpportunity.location} · {activeOpportunity.deadline} 截止 ·{" "}
                {activeOpportunity.costLevel}
              </p>
              <p className="mt-5 text-sm leading-7 text-zinc-600">
                下一步：{activeApplication.nextAction}
              </p>
            </div>

            <div className="mt-6 grid gap-5 xl:grid-cols-[360px_minmax(0,1fr)]">
              <div className="rounded-3xl border border-zinc-200 bg-[#fbfaf6] p-6">
                <p className="text-sm text-zinc-500">清单状态</p>
                <p className="mt-2 text-4xl font-semibold text-zinc-950">
                  {activeApplication.status}
                </p>
                <div className="mt-7 space-y-4 text-sm text-zinc-600">
                  <p>匹配度：{activeOpportunity.matchScore}%</p>
                  <p>申请语言：{activeOpportunity.languages.join(" / ")}</p>
                  <p>项目周期：{activeOpportunity.duration}</p>
                  <p>现实成本：{activeOpportunity.costLevel}</p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {activeApplication.materialProgress.map((material) => (
                  <div
                    key={material.name}
                    className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm shadow-zinc-200/40"
                  >
                    <div className="mb-2 flex justify-between gap-3 text-xs text-zinc-500">
                      <span>{material.name}</span>
                      <span>{material.progress ? `${material.progress}%` : "未准备"}</span>
                    </div>
                    <div className="h-2 rounded-full bg-zinc-100">
                      <div
                        className="h-2 rounded-full bg-zinc-950"
                        style={{ width: `${material.progress}%` }}
                      />
                    </div>
                    <p className="mt-3 text-xs leading-5 text-zinc-500">
                      {material.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Personal matches"
          title="我的匹配"
          description="先看为什么适合，再决定是否加入申请清单。匹配结果会同时考虑作品媒介、创作阶段、预算、语言和申请条件。"
          icon={Sparkles}
          action={
            <Link
              href="/matches"
              className="inline-flex h-10 items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 text-sm font-medium text-zinc-600 transition hover:border-zinc-300 hover:text-zinc-950"
            >
              查看全部
              <ArrowRight className="size-4" />
            </Link>
          }
        />
        <div className="grid gap-4 xl:grid-cols-3">
          {topMatches.map((match) => {
            const artist = getArtistBySlug(match.artistSlug);
            const opportunity = getOpportunityBySlug(match.opportunitySlug);

            if (!artist || !opportunity) {
              return null;
            }

            return (
              <Link
                key={`${match.artistSlug}-${match.opportunitySlug}`}
                href={`/opportunities/${opportunity.slug}`}
                className="block rounded-3xl border border-zinc-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="line-clamp-2 text-base font-semibold text-zinc-950">
                      {opportunity.title}
                    </p>
                    <p className="mt-2 text-sm text-zinc-500">
                      推荐给 {artist.name}
                    </p>
                  </div>
                  <p className="text-3xl font-semibold text-zinc-950">
                    {match.score}%
                  </p>
                </div>
                <p className="mt-5 text-sm leading-7 text-zinc-500">
                  {match.reasons.join(" / ")}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      <div className="h-px w-full bg-zinc-300/80" aria-hidden="true" />

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Matching logic"
          title="我们不是简单推荐驻留，而是判断它是否真的适合你"
          description="平台不是只看作品风格，而是综合作品、履历、预算、语言、时间和项目条件进行匹配。"
          icon={Target}
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {matchDimensions.map((dimension, index) => {
            const Icon = matchIcons[index] ?? ClipboardCheck;

            return (
              <details
                key={dimension.title}
                className="group rounded-3xl border border-zinc-200 bg-white p-5 transition open:border-zinc-300 open:shadow-sm"
              >
                <summary className="cursor-pointer list-none">
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-zinc-950 text-white">
                      <Icon className="size-5" />
                    </span>
                    <span className="text-xs text-zinc-400">0{index + 1}</span>
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold tracking-tight text-zinc-950">
                    {dimension.title}
                  </h3>
                </summary>
                <p className="mt-5 border-t border-zinc-200 pt-5 text-sm leading-7 text-zinc-500">
                  {dimension.text}
                </p>
              </details>
            );
          })}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Cost transparency"
          title="看清驻留背后的真实成本"
          description="申请前先判断费用、住宿、交通、签证、保险、制作材料和公共分享要求，避免在提交后才发现不适合自己的现实条件。"
          icon={WalletCards}
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {costGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-3xl border border-zinc-200 bg-white p-5"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl border-2 border-emerald-500 bg-emerald-50 text-emerald-700">
                  <Check className="size-5" />
                </span>
                <h3 className="text-lg font-semibold text-zinc-950">
                  {group.title}
                </h3>
              </div>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-zinc-600">
                {group.items.map((item) => (
                  <li key={item} className="rounded-xl bg-zinc-50 px-3 py-2">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <div className="h-px w-full bg-zinc-300/80" aria-hidden="true" />

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Portfolio home"
          title="作品集主页"
          description="作品集主页用于驻留申请材料、匹配判断和机构端作品集预览，不再是泛艺术家社区入口。"
          icon={Users}
          action={
            <Link
              href="/artists"
              className="inline-flex h-10 items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 text-sm font-medium text-zinc-600 transition hover:border-zinc-300 hover:text-zinc-950"
            >
              查看更多
              <ArrowRight className="size-4" />
            </Link>
          }
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featuredArtists.map((artist) => (
            <ArtistCard key={artist.slug} artist={artist} />
          ))}
        </div>
      </section>

      <section id="community" className="space-y-6">
        <SectionHeading
          eyebrow="Residency guide"
          title="驻留指南讨论"
          description="围绕可信项目、费用、语言、签证、时间线和首次驻留准备，沉淀更适合中文语境的申请经验。"
          icon={MessageCircle}
          action={
            <Link
              href="/guide"
              className="inline-flex h-10 items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 text-sm font-medium text-zinc-600 transition hover:border-zinc-300 hover:text-zinc-950"
            >
              查看更多
              <ArrowRight className="size-4" />
            </Link>
          }
        />
        <div className="grid gap-4 lg:grid-cols-2">
          {communityPosts.map((post) => (
            <article
              key={post.title}
              className="grid grid-cols-[48px_1fr_auto] gap-4 rounded-3xl border border-zinc-200 bg-white p-5"
            >
              <div className="relative size-12 overflow-hidden rounded-full bg-zinc-100">
                <Image
                  src={post.avatar}
                  alt={post.author}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-zinc-950">{post.title}</p>
                <p className="mt-2 text-sm text-zinc-400">
                  {post.author} · {post.time}
                </p>
              </div>
              <p className="flex items-center gap-1 text-sm text-zinc-500">
                <MessageCircle className="size-4" />
                {post.comments}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="!mt-32 rounded-[32px] bg-zinc-950 p-6 text-white sm:p-8 lg:!mt-40 lg:p-10">
        <div className="max-w-4xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-emerald-300">
            Private beta
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            加入内测
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-300">
            留下角色与方向，优先体验驻留匹配、材料提醒和申请进度追踪。我们会优先邀请正在准备驻留申请的青年艺术家与驻留项目方。
          </p>
        </div>
        <div className="mt-8 grid gap-8 xl:grid-cols-[minmax(0,0.85fr)_minmax(360px,1fr)] xl:items-start">
          <div className="rounded-3xl border border-white/10 bg-white/10 p-6">
            <p className="text-sm font-medium text-zinc-300">适合加入的人</p>
            <div className="mt-5 grid gap-3 text-sm text-zinc-200">
              <p className="rounded-2xl bg-white/10 px-4 py-3">正在准备第一次驻留申请的青年艺术家</p>
              <p className="rounded-2xl bg-white/10 px-4 py-3">需要中文解释、成本判断与材料提醒的艺术学生</p>
              <p className="rounded-2xl bg-white/10 px-4 py-3">希望统一收集作品集和申请材料的驻留项目方</p>
            </div>
          </div>
          <WaitlistForm />
        </div>
      </section>
    </div>
  );
}
