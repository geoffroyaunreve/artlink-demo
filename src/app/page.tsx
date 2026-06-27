import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import {
  artists,
  communityPosts,
  heroImage,
  opportunities,
  platformStats,
  projectMatches,
  getArtistBySlug,
  getOpportunityBySlug,
} from "@/data/mockData";
import { ArtistCard } from "@/components/ArtistCard";
import { OpportunityCard } from "@/components/OpportunityCard";
import { StatusBadge } from "@/components/StatusBadge";
import { WaitlistForm } from "@/components/WaitlistForm";

export default function Home() {
  const latestOpportunities = opportunities.slice(0, 4);
  const featuredArtists = artists.slice(0, 4);
  const recommended = opportunities.slice(0, 4);
  const topMatches = projectMatches.slice(0, 3);

  return (
    <div className="grid gap-6 2xl:grid-cols-[minmax(0,1fr)_390px]">
      <div className="space-y-6">
        <section className="relative min-h-[360px] overflow-hidden rounded-2xl border border-zinc-200 bg-white">
          <Image
            src={heroImage}
            alt="白色当代艺术展厅"
            fill
            priority
            sizes="(min-width: 1536px) 920px, 100vw"
            className="object-cover opacity-35 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/30" />

          <div className="relative grid min-h-[360px] gap-8 p-7 sm:p-10 xl:grid-cols-[1fr_220px] xl:items-center">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
                ART LINK Prototype
              </p>
              <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-zinc-950 sm:text-6xl">
                连接艺术创作者
                <br />
                与优质项目机会
              </h1>
              <p className="mt-5 max-w-xl text-base leading-8 text-zinc-600">
                发现更多展览、驻留、征集与合作机会。让艺术家和机构在同一套资料、需求与匹配线索中高效沟通。
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/opportunities"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-zinc-950 px-6 text-sm font-medium text-white transition hover:bg-zinc-800"
                >
                  发现机会
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/institution-entry"
                  className="inline-flex h-11 items-center justify-center rounded-lg border border-zinc-200 bg-white/80 px-6 text-sm font-medium text-zinc-950 transition hover:border-zinc-300 hover:bg-white"
                >
                  发布项目
                </Link>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-3 xl:grid-cols-1">
              {platformStats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-semibold tracking-tight text-zinc-950">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-zinc-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-zinc-200 bg-white p-5">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <h2 className="text-xl font-semibold">最新机会</h2>
              <div className="hidden gap-5 text-sm text-zinc-500 sm:flex">
                {["全部", "展览", "驻留", "征集", "扶持计划", "合作"].map(
                  (item, index) => (
                    <span
                      key={item}
                      className={index === 0 ? "font-medium text-zinc-950" : ""}
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>
            <Link
              href="/opportunities"
              className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-950"
            >
              查看更多
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {latestOpportunities.map((opportunity) => (
              <OpportunityCard
                key={opportunity.slug}
                opportunity={opportunity}
                compact
              />
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-zinc-200 bg-white p-5">
          <div className="mb-5 flex items-center justify-between gap-4">
            <h2 className="text-xl font-semibold">精选艺术家</h2>
            <Link
              href="/artists"
              className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-950"
            >
              查看更多
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {featuredArtists.map((artist) => (
              <ArtistCard key={artist.slug} artist={artist} />
            ))}
          </div>
        </section>

        <section className="grid gap-5 xl:grid-cols-[1fr_360px]">
          <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <h2 className="text-xl font-semibold">项目匹配雷达</h2>
            <div className="mt-5 space-y-4">
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
                    className="grid gap-4 rounded-xl border border-zinc-200 p-4 transition hover:border-zinc-300 hover:bg-zinc-50 md:grid-cols-[120px_1fr_auto]"
                  >
                    <div className="relative h-24 overflow-hidden rounded-lg bg-zinc-100">
                      <Image
                        src={opportunity.image}
                        alt={opportunity.title}
                        fill
                        sizes="120px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{opportunity.title}</p>
                      <p className="mt-1 text-sm text-zinc-500">
                        推荐给 {artist.name} · {artist.discipline}
                      </p>
                      <p className="mt-3 text-sm text-zinc-500">
                        {match.reasons.join(" / ")}
                      </p>
                    </div>
                    <div className="flex items-center md:block md:text-right">
                      <p className="text-3xl font-semibold">{match.score}</p>
                      <p className="ml-2 text-sm text-zinc-500 md:ml-0">匹配分</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <h2 className="text-xl font-semibold">加入内测</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-500">
              留下角色与方向，获取艺术家档案、机构项目发布和智能匹配功能的优先体验资格。
            </p>
            <div className="mt-5">
              <WaitlistForm compact />
            </div>
          </div>
        </section>
      </div>

      <aside className="space-y-6">
        <section className="rounded-2xl border border-zinc-200 bg-white p-5">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-semibold">为你推荐的机会</h2>
            <Link
              href="/opportunities"
              className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-950"
            >
              查看更多
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="space-y-4">
            {recommended.map((opportunity) => (
              <Link
                key={opportunity.slug}
                href={`/opportunities/${opportunity.slug}`}
                className="grid grid-cols-[76px_1fr] gap-4 border-b border-zinc-100 pb-4 last:border-b-0 last:pb-0"
              >
                <div className="relative h-16 overflow-hidden rounded-lg bg-zinc-100">
                  <Image
                    src={opportunity.image}
                    alt={opportunity.title}
                    fill
                    sizes="76px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <p className="line-clamp-1 text-sm font-semibold">
                      {opportunity.title}
                    </p>
                    <StatusBadge
                      status={opportunity.status}
                      label={opportunity.statusLabel}
                      className="shrink-0"
                    />
                  </div>
                  <p className="mt-1 text-sm text-zinc-500">
                    {opportunity.institution}
                  </p>
                  <p className="mt-1 text-sm text-zinc-400">
                    {opportunity.location} · {opportunity.category}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section
          id="community"
          className="rounded-2xl border border-zinc-200 bg-white p-5"
        >
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-semibold">社区讨论</h2>
            <Link
              href="/artist-entry"
              className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-950"
            >
              查看更多
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="space-y-5">
            {communityPosts.map((post) => (
              <article
                key={post.title}
                className="grid grid-cols-[40px_1fr_auto] gap-3 border-b border-zinc-100 pb-5 last:border-b-0 last:pb-0"
              >
                <div className="relative size-10 overflow-hidden rounded-full bg-zinc-100">
                  <Image
                    src={post.avatar}
                    alt={post.author}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium">{post.title}</p>
                  <p className="mt-1 text-sm text-zinc-400">
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
      </aside>
    </div>
  );
}
