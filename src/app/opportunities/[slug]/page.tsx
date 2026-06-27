import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, MapPin, Sparkles } from "lucide-react";
import {
  getArtistBySlug,
  getInstitutionBySlug,
  getOpportunityBySlug,
  opportunities,
  projectMatches,
} from "@/data/mockData";
import { ActionButton } from "@/components/ActionButton";
import { ArtistCard } from "@/components/ArtistCard";
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
    title: opportunity ? `${opportunity.title} | ART LINK` : "项目详情 | ART LINK",
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

  return (
    <div className="space-y-6">
      <Link
        href="/opportunities"
        className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-950"
      >
        <ArrowLeft className="size-4" />
        返回机会列表
      </Link>

      <section className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
        <div className="relative h-[320px] bg-zinc-100">
          <Image
            src={opportunity.image}
            alt={opportunity.title}
            fill
            priority
            sizes="100vw"
            className="object-cover grayscale-[10%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
            <StatusBadge
              status={opportunity.status}
              label={opportunity.statusLabel}
              className="mb-4 bg-white/90"
            />
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              {opportunity.title}
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-100 sm:text-base">
              {opportunity.summary}
            </p>
          </div>
        </div>

        <div className="grid gap-8 p-6 lg:grid-cols-[minmax(0,1fr)_340px] sm:p-8">
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold">项目说明</h2>
              <p className="mt-4 text-base leading-8 text-zinc-600">
                {opportunity.description}
              </p>
            </section>

            <section className="grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
                <CalendarDays className="size-5 text-zinc-500" />
                <p className="mt-3 text-sm text-zinc-500">项目周期</p>
                <p className="mt-1 font-semibold">{opportunity.duration}</p>
              </div>
              <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
                <MapPin className="size-5 text-zinc-500" />
                <p className="mt-3 text-sm text-zinc-500">地点</p>
                <p className="mt-1 font-semibold">
                  {opportunity.location} · {opportunity.country}
                </p>
              </div>
              <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
                <Sparkles className="size-5 text-zinc-500" />
                <p className="mt-3 text-sm text-zinc-500">支持内容</p>
                <p className="mt-1 font-semibold">{opportunity.support}</p>
              </div>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
              <div>
                <h2 className="text-xl font-semibold">申请要求</h2>
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
                <ActionButton label="申请项目" successLabel="申请已记录" />
                <ActionButton
                  label="联系机构"
                  successLabel="联系请求已发送"
                  variant="light"
                />
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-5">
              <p className="text-sm text-zinc-500">项目标签</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[...opportunity.disciplines, ...opportunity.tags].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-500"
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
            <h2 className="text-xl font-semibold">匹配艺术家</h2>
            <p className="mt-1 text-sm text-zinc-500">
              根据媒介、主题和项目需求生成的候选方向。
            </p>
          </div>
          <Link
            href="/artists"
            className="text-sm text-zinc-500 hover:text-zinc-950"
          >
            查看全部
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {matchedArtists.map((artist) => {
            if (!artist) {
              return null;
            }

            const match = projectMatches.find(
              (item) =>
                item.artistSlug === artist.slug &&
                item.opportunitySlug === opportunity.slug,
            );

            return (
              <div key={artist.slug} className="space-y-3">
                {match ? (
                  <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
                    <p className="text-sm text-zinc-500">匹配分</p>
                    <p className="mt-1 text-3xl font-semibold">{match.score}</p>
                  </div>
                ) : null}
                <ArtistCard artist={artist} />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
