import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Languages, MapPin, Sparkles } from "lucide-react";
import {
  artists,
  getArtistBySlug,
  getOpportunityBySlug,
} from "@/data/mockData";
import { ActionButton } from "@/components/ActionButton";
import { OpportunityCard } from "@/components/OpportunityCard";

type ArtistDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return artists.map((artist) => ({ slug: artist.slug }));
}

export async function generateMetadata({ params }: ArtistDetailPageProps) {
  const { slug } = await params;
  const artist = getArtistBySlug(slug);

  return {
    title: artist ? `${artist.name} 作品集 | ART LINK` : "作品集主页 | ART LINK",
  };
}

export default async function ArtistDetailPage({ params }: ArtistDetailPageProps) {
  const { slug } = await params;
  const artist = getArtistBySlug(slug);

  if (!artist) {
    notFound();
  }

  const matchedOpportunities = artist.matchOpportunitySlugs
    .map((opportunitySlug) => getOpportunityBySlug(opportunitySlug))
    .filter(Boolean);

  return (
    <div className="space-y-6">
      <Link
        href="/artists"
        className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-950"
      >
        <ArrowLeft className="size-4" />
        返回作品集主页
      </Link>

      <section className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
        <div className="relative h-[320px] bg-zinc-100">
          <Image
            src={artist.cover}
            alt={`${artist.name} 作品封面`}
            fill
            priority
            sizes="100vw"
            className="object-cover grayscale-[10%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-5 p-6 text-white sm:flex-row sm:items-end sm:p-8">
            <div className="relative size-24 overflow-hidden rounded-full border-4 border-white bg-zinc-100">
              <Image
                src={artist.avatar}
                alt={artist.name}
                fill
                sizes="96px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="mb-3 inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-medium">
                {artist.availability}
              </p>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
                {artist.name}
              </h1>
              <p className="mt-3 text-base text-zinc-100">{artist.discipline}</p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 p-6 lg:grid-cols-[minmax(0,1fr)_340px] sm:p-8">
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold">驻留申请陈述</h2>
              <p className="mt-4 text-base leading-8 text-zinc-600">
                {artist.statement}
              </p>
              <p className="mt-4 text-base leading-8 text-zinc-600">{artist.bio}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold">代表作品</h2>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {artist.featuredWorks.map((work) => (
                  <article
                    key={work.title}
                    className="overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50"
                  >
                    <div className="relative h-56 bg-zinc-100">
                      <Image
                        src={work.image}
                        alt={work.title}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <p className="font-semibold">{work.title}</p>
                      <p className="mt-1 text-sm text-zinc-500">{work.year}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-5">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-sm text-zinc-500">驻留申请条件</p>
              <div className="mt-5 space-y-4">
                <p className="flex items-center gap-3 text-sm text-zinc-600">
                  <MapPin className="size-4 text-zinc-400" />
                  {artist.location}
                </p>
                <p className="flex items-center gap-3 text-sm text-zinc-600">
                  <Sparkles className="size-4 text-zinc-400" />
                  {artist.discipline}
                </p>
                <p className="flex items-center gap-3 text-sm text-zinc-600">
                  <Sparkles className="size-4 text-zinc-400" />
                  {artist.careerStage} · {artist.budgetRange}
                </p>
                <p className="flex items-center gap-3 text-sm text-zinc-600">
                  <Languages className="size-4 text-zinc-400" />
                  {artist.languages.join(" / ")}
                </p>
              </div>
              <div className="mt-5 flex flex-col gap-3">
                <ActionButton label="联系艺术家" successLabel="联系请求已发送" />
                <ActionButton
                  label="收藏作品集"
                  successLabel="已加入收藏"
                  variant="light"
                />
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-5">
              <p className="text-sm text-zinc-500">关键词</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {artist.tags.map((tag) => (
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
            <h2 className="text-xl font-semibold">适合的驻留机会</h2>
            <p className="mt-1 text-sm text-zinc-500">
              根据媒介、阶段、预算、语言和项目条件生成的推荐。
            </p>
          </div>
          <Link
            href="/opportunities"
            className="text-sm text-zinc-500 hover:text-zinc-950"
          >
            查看全部
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {matchedOpportunities.map((opportunity) => {
            if (!opportunity) {
              return null;
            }

            return (
              <OpportunityCard
                key={opportunity.slug}
                opportunity={opportunity}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}
