import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { getOpportunityBySlug, projectMatches } from "@/data/mockData";
import { FavoriteButton } from "@/components/FavoriteButton";
import { PortfolioMatchFlow } from "@/components/PortfolioMatchFlow";

export const metadata = {
  title: "我的匹配 | Residency Lab 驻留实验室",
};

export default function MatchesPage() {
  return (
    <div>
      <section className="bg-[var(--color-clay)]">
        <div className="editorial-band-inner">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-700">Match Review</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">我的驻留匹配</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-700">
            匹配分不是只看作品风格，而是同时评估媒介、主题、艺术家阶段、预算、语言、住宿、截止日期和申请材料可行性。
          </p>
        </div>
      </section>

      <PortfolioMatchFlow />

      <section id="match-recommendations" className="scroll-mt-28 bg-[var(--tone-clay-soft)]">
        <div className="editorial-band-inner">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-600">Recommended matches</p>
          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">匹配推荐</h2>
          <div className="mt-12 grid gap-x-10 gap-y-12 xl:grid-cols-2">
            {projectMatches.map((match) => {
              const opportunity = getOpportunityBySlug(match.opportunitySlug);

              if (!opportunity) {
                return null;
              }

              return (
                <article key={match.opportunitySlug} className="relative border-t border-black/25 py-7">
                  <div className="grid gap-5 pr-14 sm:grid-cols-[minmax(0,1fr)_auto]">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-zinc-500">基于你的匹配资料</p>
                      <h3 className="mt-3 text-2xl font-bold">{opportunity.title}</h3>
                      <p className="mt-3 text-sm text-zinc-600">{opportunity.location} · {opportunity.type} · {opportunity.costLevel}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-zinc-500">匹配度</p>
                      <p className="mt-1 text-5xl font-bold tracking-tight">{match.score}%</p>
                    </div>
                  </div>
                  <FavoriteButton slug={opportunity.slug} title={opportunity.title} className="absolute right-0 top-5" />

                  <div className="mt-7 grid md:grid-cols-2">
                    {match.reasons.map((reason) => (
                      <p key={reason} className="flex gap-2 border-t border-black/15 py-4 pr-5 text-sm leading-6 text-zinc-700">
                        <CheckCircle2 className="mt-1 size-4 shrink-0" />
                        {reason}
                      </p>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-y-1">
                    {opportunity.trustTags.slice(0, 4).map((tag) => (
                      <span key={tag} className="bg-[var(--color-sage)] px-3 py-1 text-xs font-bold text-zinc-800">{tag}</span>
                    ))}
                  </div>

                  <Link href={`/opportunities/${opportunity.slug}`} className="text-arrow-action mt-6 text-zinc-950">
                    查看匹配详情
                    <ArrowRight className="size-4" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
