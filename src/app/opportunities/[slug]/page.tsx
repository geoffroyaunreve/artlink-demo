import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Banknote,
  BedDouble,
  Building2,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  FileCheck2,
  Globe2,
  Hammer,
  MapPin,
  Plane,
  ShieldCheck,
  UsersRound,
  WalletCards,
  type LucideIcon,
} from "lucide-react";
import {
  getInstitutionBySlug,
  getOpportunityBySlug,
  opportunities,
} from "@/data/mockData";
import { ActionButton } from "@/components/ActionButton";
import { FavoriteButton } from "@/components/FavoriteButton";
import { ResidencyArtwork } from "@/components/ResidencyArtwork";
import { StatusBadge } from "@/components/StatusBadge";

type OpportunityDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return opportunities.map((opportunity) => ({ slug: opportunity.slug }));
}

export async function generateMetadata({ params }: OpportunityDetailPageProps) {
  const { slug } = await params;
  const opportunity = getOpportunityBySlug(slug);

  return {
    title: opportunity
      ? `${opportunity.title} | Residency Lab 驻留实验室`
      : "驻留详情 | Residency Lab 驻留实验室",
  };
}

export default async function OpportunityDetailPage({
  params,
}: OpportunityDetailPageProps) {
  const { slug } = await params;
  const opportunity = getOpportunityBySlug(slug);

  if (!opportunity) {
    notFound();
  }

  const institution = getInstitutionBySlug(opportunity.institutionSlug);
  const facts = [
    { label: "国家 / 城市", value: opportunity.location, icon: MapPin },
    { label: "周期 / 截止", value: `${opportunity.duration} · ${opportunity.deadline}`, icon: CalendarDays },
    { label: "成本等级", value: opportunity.costLevel, icon: WalletCards },
    { label: "语言要求", value: opportunity.languages.join(" / "), icon: Globe2 },
  ];
  const costSections: Array<{
    title: string;
    icon: LucideIcon;
    items: Array<{ label: string; value: string; icon: LucideIcon }>;
  }> = [
    {
      title: "直接费用",
      icon: WalletCards,
      items: [
        { label: "申请费用", value: opportunity.costs.applicationFee, icon: FileCheck2 },
        { label: "项目费用", value: opportunity.costs.programFee, icon: Banknote },
      ],
    },
    {
      title: "生活与空间支持",
      icon: BedDouble,
      items: [
        { label: "住宿情况", value: opportunity.costs.accommodation, icon: BedDouble },
        { label: "工作室情况", value: opportunity.costs.studio, icon: Building2 },
        { label: "生活补贴", value: opportunity.costs.stipend, icon: Banknote },
      ],
    },
    {
      title: "出行与行政成本",
      icon: Plane,
      items: [
        { label: "交通支持", value: opportunity.costs.travel, icon: Plane },
        { label: "签证提示", value: opportunity.costs.visa, icon: ClipboardList },
        { label: "保险成本", value: opportunity.costs.insurance, icon: ShieldCheck },
      ],
    },
    {
      title: "制作与公开义务",
      icon: Hammer,
      items: [
        { label: "制作费用", value: opportunity.costs.production, icon: Hammer },
        { label: "公共要求", value: opportunity.costs.publicRequirement, icon: UsersRound },
      ],
    },
  ];

  return (
    <div>
      <section className="bg-[var(--color-paper)]">
        <div className="editorial-band-inner !pt-8 lg:!pt-12">
          <Link
            href="/opportunities"
            className="text-arrow-action text-zinc-950"
            data-direction="back"
          >
            <ArrowLeft className="size-4" />
            返回驻留机会
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(380px,0.95fr)] lg:items-stretch">
            <div className="flex flex-col justify-center py-4 lg:py-10">
              <div className="flex flex-wrap gap-2">
                <StatusBadge status={opportunity.status} label={opportunity.statusLabel} className="border-black/20 bg-transparent text-zinc-950" />
                <span className="rounded-md border border-black/20 px-2 py-1 text-xs font-semibold">
                  匹配度 {opportunity.matchScore}%
                </span>
                <span className="rounded-md border border-black/20 px-2 py-1 text-xs font-semibold">
                  {opportunity.costLevel}
                </span>
              </div>
              <h1 className="mt-7 max-w-4xl text-5xl font-bold leading-[1.03] tracking-tight sm:text-6xl xl:text-7xl">
                {opportunity.title}
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-700">
                {opportunity.summary}
              </p>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                <ActionButton label="申请驻留" successLabel="申请已记录" />
                <ActionButton label="收藏驻留" successLabel="已加入收藏" variant="light" />
                <ActionButton label="联系机构" successLabel="联系请求已发送" variant="light" />
              </div>
            </div>

            <div className="relative min-h-[360px] overflow-hidden lg:min-h-[560px]">
              <ResidencyArtwork
                slug={opportunity.slug}
                category={opportunity.category}
              />
              <FavoriteButton
                slug={opportunity.slug}
                title={opportunity.title}
                className="absolute right-4 top-4 z-10 sm:right-6 sm:top-6"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--tone-paper-soft)]">
        <div className="editorial-band-inner">
          <div className="grid grid-cols-2 border-t border-black/25 lg:grid-cols-4">
            {facts.map((fact) => {
              const Icon = fact.icon;
              return (
                <div
                  key={fact.label}
                  className="border-b border-black/20 py-6 pr-4 odd:border-r lg:border-b-0 lg:border-r lg:px-6 lg:first:pl-0 lg:last:border-r-0"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-zinc-600">{fact.label}</p>
                    <Icon className="size-4 text-zinc-600" />
                  </div>
                  <p className="mt-4 text-base font-bold">{fact.value}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-600">Project overview</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight">项目介绍</h2>
              <p className="mt-6 text-base leading-8 text-zinc-700">{opportunity.description}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-600">Personal fit</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight">为什么推荐给你</h2>
              <div className="mt-6">
                {opportunity.fitReasons.map((reason) => (
                  <div key={reason} className="flex gap-3 border-t border-black/20 py-4 text-sm leading-6 text-zinc-700">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0" />
                    {reason}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-lilac)]">
        <div className="editorial-band-inner">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-700">Cost transparency</p>
          <h2 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">真实成本</h2>
          <div className="mt-14 grid gap-x-8 gap-y-12 lg:grid-cols-2">
            {costSections.map((section) => {
              const SectionIcon = section.icon;
              return (
                <article key={section.title} className="border-t border-black/25 py-6">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-2xl font-bold">{section.title}</h3>
                    <SectionIcon className="size-5" />
                  </div>
                  <div className="mt-6">
                    {section.items.map((item) => {
                      const ItemIcon = item.icon;
                      return (
                        <div key={item.label} className="grid grid-cols-[24px_110px_1fr] gap-3 border-t border-black/15 py-4 text-sm leading-6">
                          <ItemIcon className="mt-1 size-4 text-zinc-600" />
                          <p className="font-semibold text-zinc-700">{item.label}</p>
                          <p className="text-zinc-700">{item.value}</p>
                        </div>
                      );
                    })}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-mist)]">
        <div className="editorial-band-inner">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-700">Application preparation</p>
          <h2 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">申请准备</h2>
          <div className="mt-14 grid gap-12 md:grid-cols-2">
            <div className="border-t border-black/25 py-6">
              <h3 className="text-2xl font-bold">申请材料清单</h3>
              <ul className="mt-6">
                {opportunity.requirements.map((item) => (
                  <li key={item} className="flex gap-3 border-t border-black/15 py-4 text-sm leading-6 text-zinc-700">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-zinc-950" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-black/25 py-6">
              <h3 className="text-2xl font-bold">关键时间</h3>
              <ul className="mt-6">
                {opportunity.timeline.map((item) => (
                  <li key={item} className="flex gap-3 border-t border-black/15 py-4 text-sm leading-6 text-zinc-700">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-zinc-950" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-paper)]">
        <div className="editorial-band-inner">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-700">Institution and terms</p>
          <h2 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">机构与申请条件</h2>
          <div className="mt-14 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-10">
              <article className="border-t border-black/25 py-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-zinc-700">发布机构</p>
                    <h3 className="mt-2 text-3xl font-bold">{opportunity.institution}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-emerald-900">
                    <ShieldCheck className="size-4" />
                    {opportunity.institutionCertification}
                  </div>
                </div>
                <p className="mt-6 text-sm leading-7 text-zinc-700">
                  {institution?.description ?? opportunity.institutionIntro}
                </p>
              </article>

              <article className="border-t border-black/25 py-6">
                <h3 className="text-2xl font-bold">往届案例</h3>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-zinc-700">
                  {opportunity.pastCases.map((item) => <li key={item}>· {item}</li>)}
                </ul>
              </article>

              <article className="border-t border-black/25 py-6">
                <h3 className="text-2xl font-bold">版权、签证与作品使用</h3>
                <p className="mt-5 text-sm leading-7 text-zinc-700">{opportunity.copyrightNote}</p>
                <p className="mt-3 text-sm leading-7 text-zinc-700">{opportunity.visaNote}</p>
              </article>
            </div>

            <aside className="space-y-8">
              <div className="border-t border-black/25 py-6">
                <h3 className="text-xl font-bold">适合媒介</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {opportunity.disciplines.map((tag) => (
                    <span key={tag} className="rounded-md border border-black/20 px-3 py-1 text-sm text-zinc-700">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="border-t border-black/25 py-6">
                <h3 className="text-xl font-bold">申请资格</h3>
                <div className="mt-5 space-y-3 text-sm text-zinc-700">
                  <p>接受国际申请者：{opportunity.acceptsInternational ? "是" : "否"}</p>
                  <p>适合青年艺术家：{opportunity.suitableForYoungArtists ? "是" : "否"}</p>
                  <p>接受学生申请：{opportunity.acceptsStudents ? "是" : "否"}</p>
                </div>
              </div>

              <div className="border-t border-black/25 py-6">
                <h3 className="text-xl font-bold">风险提示</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {opportunity.riskTags.map((tag) => (
                    <span key={tag} className="rounded-md border border-black/20 px-3 py-1 text-sm text-zinc-700">{tag}</span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
