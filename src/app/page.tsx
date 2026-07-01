import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import {
  applicationItems,
  artists,
  communityPosts,
  costFactors,
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

export default function Home() {
  const featuredResidencies = opportunities.slice(0, 4);
  const featuredArtists = artists.slice(0, 4);
  const topMatches = projectMatches.slice(0, 3);
  const activeApplication = applicationItems[0];
  const activeOpportunity = activeApplication
    ? getOpportunityBySlug(activeApplication.opportunitySlug)
    : null;

  return (
    <div className="grid gap-6 2xl:grid-cols-[minmax(0,1fr)_390px]">
      <div className="space-y-6">
        <section className="relative min-h-[420px] overflow-hidden rounded-2xl border border-zinc-200 bg-white">
          <Image
            src={heroImage}
            alt="驻留工作室中的当代艺术装置"
            fill
            priority
            sizes="(min-width: 1536px) 920px, 100vw"
            className="object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/88 to-white/35" />

          <div className="relative grid min-h-[420px] gap-8 p-7 sm:p-10 xl:grid-cols-[1fr_240px] xl:items-center">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-zinc-200 bg-white/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
                Residency Application Assistant
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-zinc-950 sm:text-6xl">
                为青年艺术家匹配可信驻留机会
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-600">
                聚合并审核国内外艺术驻留、研究型项目与创作支持计划，结合艺术家的作品集、媒介、创作阶段、预算、语言能力和申请条件，推荐真正适合的驻留项目，并帮助完成申请管理。
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
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

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-1">
              {platformStats.map((stat) => (
                <div key={stat.label} className="rounded-xl bg-white/70 p-4">
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
            <div>
              <h2 className="text-xl font-semibold">精选驻留机会</h2>
              <p className="mt-1 text-sm text-zinc-500">
                每个项目都标注成本、住宿、语言和申请资格。
              </p>
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
            {featuredResidencies.map((opportunity) => (
              <OpportunityCard
                key={opportunity.slug}
                opportunity={opportunity}
                compact
              />
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-zinc-200 bg-white p-5">
          <div className="mb-5 max-w-3xl">
            <h2 className="text-xl font-semibold">
              我们不是简单推荐驻留，而是判断它是否真的适合你
            </h2>
            <p className="mt-2 text-sm leading-6 text-zinc-500">
              平台不是只看作品风格，而是综合作品、履历、预算、语言、时间和项目条件进行匹配。
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {matchDimensions.map((dimension, index) => (
              <article
                key={dimension.title}
                className="rounded-xl border border-zinc-200 bg-zinc-50 p-4"
              >
                <span className="text-xs text-zinc-400">0{index + 1}</span>
                <h3 className="mt-3 font-semibold">{dimension.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  {dimension.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-5 xl:grid-cols-[1fr_360px]">
          <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <h2 className="text-xl font-semibold">看清驻留背后的真实成本</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-500">
              申请前先判断费用、住宿、交通、签证、保险、制作材料和公共分享要求。
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {costFactors.map((factor) => (
                <div
                  key={factor}
                  className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-600"
                >
                  {factor}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <h2 className="text-xl font-semibold">从发现驻留，到完成申请</h2>
            {activeOpportunity ? (
              <div className="mt-5">
                <p className="font-semibold">{activeOpportunity.title}</p>
                <p className="mt-1 text-sm text-zinc-500">
                  {activeOpportunity.location} · {activeOpportunity.deadline} 截止
                </p>
                <div className="mt-4 space-y-3">
                  {activeApplication.materialProgress.slice(0, 4).map((material) => (
                    <div key={material.name}>
                      <div className="mb-1 flex justify-between text-xs text-zinc-500">
                        <span>{material.name}</span>
                        <span>{material.progress}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-zinc-100">
                        <div
                          className="h-2 rounded-full bg-zinc-950"
                          style={{ width: `${material.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  href="/applications"
                  className="mt-5 inline-flex h-10 items-center gap-2 rounded-lg bg-zinc-950 px-4 text-sm font-medium text-white"
                >
                  查看申请清单
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            ) : null}
          </div>
        </section>

        <section className="rounded-2xl border border-zinc-200 bg-white p-5">
          <h2 className="text-xl font-semibold">我们做的是驻留申请的最后一公里</h2>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-zinc-500">
            Res Artis 更像全球驻留机构网络，TransArtists 更像驻留信息百科。我们不试图替代它们，而是面向中国青年艺术家，提供中文语境下的驻留理解、适配判断、成本透明、材料准备和申请管理工具。
          </p>
        </section>

        <section className="rounded-2xl border border-zinc-200 bg-white p-5">
          <div className="mb-5 flex items-center justify-between gap-4">
            <h2 className="text-xl font-semibold">作品集主页</h2>
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
      </div>

      <aside className="space-y-6">
        <section className="rounded-2xl border border-zinc-200 bg-white p-5">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-semibold">我的匹配</h2>
            <Link
              href="/matches"
              className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-950"
            >
              查看全部
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="space-y-4">
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
                  className="block rounded-xl border border-zinc-200 p-4 transition hover:border-zinc-300 hover:bg-zinc-50"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="line-clamp-1 text-sm font-semibold">
                        {opportunity.title}
                      </p>
                      <p className="mt-1 text-sm text-zinc-500">
                        推荐给 {artist.name}
                      </p>
                    </div>
                    <p className="text-2xl font-semibold">{match.score}%</p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-zinc-500">
                    {match.reasons.join(" / ")}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="rounded-2xl border border-zinc-200 bg-white p-5">
          <h2 className="text-xl font-semibold">加入内测</h2>
          <p className="mt-3 text-sm leading-6 text-zinc-500">
            留下角色与方向，优先体验驻留匹配、材料提醒和申请进度追踪。
          </p>
          <div className="mt-5">
            <WaitlistForm compact />
          </div>
        </section>

        <section
          id="community"
          className="rounded-2xl border border-zinc-200 bg-white p-5"
        >
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-semibold">驻留指南讨论</h2>
            <Link
              href="/guide"
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
