import Image from "next/image";
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
  getArtistBySlug,
  getInstitutionBySlug,
  getOpportunityBySlug,
  opportunities,
} from "@/data/mockData";
import { ActionButton } from "@/components/ActionButton";
import { ArtistCard } from "@/components/ArtistCard";
import { FavoriteButton } from "@/components/FavoriteButton";
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
    title: opportunity ? `${opportunity.title} | ART LINK` : "驻留详情 | ART LINK",
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
  const matchedArtists = opportunity.matchArtistSlugs
    .map((artistSlug) => getArtistBySlug(artistSlug))
    .filter(Boolean);

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
    <div className="space-y-6">
      <Link
        href="/opportunities"
        className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-950"
      >
        <ArrowLeft className="size-4" />
        返回驻留机会
      </Link>

      <section className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
        <div className="relative h-[360px] bg-zinc-100">
          <Image
            src={opportunity.image}
            alt={opportunity.title}
            fill
            priority
            sizes="100vw"
            className="object-cover grayscale-[10%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
          <FavoriteButton
            slug={opportunity.slug}
            title={opportunity.title}
            className="absolute right-4 top-4 z-10 sm:right-6 sm:top-6"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
            <div className="mb-4 flex flex-wrap gap-2">
              <StatusBadge
                status={opportunity.status}
                label={opportunity.statusLabel}
                className="bg-white/90"
              />
              <span className="rounded-md bg-white/15 px-3 py-1 text-xs font-medium">
                匹配度 {opportunity.matchScore}%
              </span>
              <span className="rounded-md bg-white/15 px-3 py-1 text-xs font-medium">
                {opportunity.costLevel}
              </span>
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              {opportunity.title}
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-zinc-100 sm:text-base">
              {opportunity.summary}
            </p>
          </div>
        </div>

        <div className="grid gap-8 p-6 lg:grid-cols-[minmax(0,1fr)_360px] sm:p-8">
          <div className="space-y-8">
            <section className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
              <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-3 sm:p-4">
                <MapPin className="size-5 text-zinc-500" />
                <p className="mt-3 text-sm text-zinc-500">国家 / 城市</p>
                <p className="mt-1 font-semibold">{opportunity.location}</p>
              </div>
              <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-3 sm:p-4">
                <CalendarDays className="size-5 text-zinc-500" />
                <p className="mt-3 text-sm text-zinc-500">周期 / 截止</p>
                <p className="mt-1 font-semibold">
                  {opportunity.duration} · {opportunity.deadline}
                </p>
              </div>
              <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-3 sm:p-4">
                <WalletCards className="size-5 text-zinc-500" />
                <p className="mt-3 text-sm text-zinc-500">成本等级</p>
                <p className="mt-1 font-semibold">{opportunity.costLevel}</p>
              </div>
              <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-3 sm:p-4">
                <Globe2 className="size-5 text-zinc-500" />
                <p className="mt-3 text-sm text-zinc-500">语言要求</p>
                <p className="mt-1 font-semibold">{opportunity.languages.join(" / ")}</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold">为什么推荐给你</h2>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {opportunity.fitReasons.map((reason) => (
                  <div
                    key={reason}
                    className="flex gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-6 text-emerald-900"
                  >
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0" />
                    {reason}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold">项目介绍</h2>
              <p className="mt-4 text-base leading-8 text-zinc-600">
                {opportunity.description}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold">真实成本</h2>
              <div className="mt-4 grid gap-4">
                {costSections.map((section) => {
                  const SectionIcon = section.icon;

                  return (
                  <div
                    key={section.title}
                    className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 shadow-[0_10px_22px_rgba(0,0,0,0.04)]"
                  >
                    <div className="flex gap-3">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-zinc-950 text-white">
                        <SectionIcon className="size-5" />
                      </span>
                      <div>
                        <h3 className="text-base font-semibold text-zinc-950">
                          {section.title}
                        </h3>
                      </div>
                    </div>

                    <div className="mt-4 grid gap-3 md:grid-cols-2">
                      {section.items.map((item) => {
                        const ItemIcon = item.icon;

                        return (
                          <div
                            key={item.label}
                            className="flex gap-3 rounded-2xl border border-zinc-200 bg-white p-4"
                          >
                            <ItemIcon className="mt-0.5 size-4 shrink-0 text-zinc-500" />
                            <div>
                              <p className="text-sm text-zinc-500">{item.label}</p>
                              <p className="mt-2 text-sm font-medium leading-6 text-zinc-800">
                                {item.value}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  );
                })}
              </div>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
              <div>
                <h2 className="text-xl font-semibold">申请材料清单</h2>
                <ul className="mt-4 space-y-3">
                  {opportunity.requirements.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-zinc-600">
                      <span className="mt-2 size-1.5 rounded-full bg-zinc-950" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold">关键时间</h2>
                <ul className="mt-4 space-y-3">
                  {opportunity.timeline.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-zinc-600">
                      <span className="mt-2 size-1.5 rounded-full bg-zinc-950" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-zinc-200 bg-white p-5">
                <h2 className="text-xl font-semibold">机构介绍</h2>
                <p className="mt-4 text-sm leading-7 text-zinc-600">
                  {opportunity.institutionIntro}
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-emerald-700">
                  <ShieldCheck className="size-4" />
                  {opportunity.institutionCertification}
                </div>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white p-5">
                <h2 className="text-xl font-semibold">往届案例</h2>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-600">
                  {opportunity.pastCases.map((item) => (
                    <li key={item}>· {item}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <h2 className="text-xl font-semibold">版权与作品使用说明</h2>
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                {opportunity.copyrightNote}
              </p>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                {opportunity.visaNote}
              </p>
            </section>
          </div>

          <aside className="space-y-5">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-sm text-zinc-500">发布机构</p>
              <p className="mt-2 text-xl font-semibold">{opportunity.institution}</p>
              {institution ? (
                <p className="mt-3 text-sm leading-6 text-zinc-500">
                  {institution.description}
                </p>
              ) : null}
              <div className="mt-5 flex flex-col gap-3">
                <ActionButton label="申请驻留" successLabel="申请已记录" />
                <ActionButton
                  label="收藏驻留"
                  successLabel="已加入收藏"
                  variant="light"
                />
                <ActionButton
                  label="联系机构"
                  successLabel="联系请求已发送"
                  variant="light"
                />
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-5">
              <p className="text-sm text-zinc-500">适合媒介</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {opportunity.disciplines.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-5">
              <p className="text-sm text-zinc-500">申请资格</p>
              <div className="mt-4 space-y-3 text-sm text-zinc-600">
                <p>接受国际申请者：{opportunity.acceptsInternational ? "是" : "否"}</p>
                <p>适合青年艺术家：{opportunity.suitableForYoungArtists ? "是" : "否"}</p>
                <p>接受学生申请：{opportunity.acceptsStudents ? "是" : "否"}</p>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-5">
              <p className="text-sm text-zinc-500">风险提示</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {opportunity.riskTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm text-zinc-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="rounded-2xl border border-zinc-200 bg-white p-5">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold">可能适合的申请者</h2>
            <p className="mt-1 text-sm text-zinc-500">
              机构端可以按媒介、阶段、语言和材料完整度筛选申请者。
            </p>
          </div>
          <Link
            href="/artists"
            className="inline-flex h-10 items-center rounded-full bg-zinc-950 px-5 text-sm font-medium text-white transition hover:bg-zinc-800"
          >
            查看作品集主页
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {matchedArtists.map((artist) => {
            if (!artist) {
              return null;
            }

            return <ArtistCard key={artist.slug} artist={artist} />;
          })}
        </div>
      </section>
    </div>
  );
}
