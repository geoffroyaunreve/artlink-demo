import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { getArtistBySlug, getOpportunityBySlug, projectMatches } from "@/data/mockData";

export const metadata = {
  title: "我的匹配 | ART LINK",
};

export default function MatchesPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-zinc-500">
          Match Review
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">
          我的驻留匹配
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-500">
          匹配分不是只看作品风格，而是同时评估媒介、主题、艺术家阶段、预算、语言、住宿、截止日期和申请材料可行性。
        </p>
      </section>

      <section className="grid gap-5 xl:grid-cols-2">
        {projectMatches.map((match) => {
          const artist = getArtistBySlug(match.artistSlug);
          const opportunity = getOpportunityBySlug(match.opportunitySlug);

          if (!artist || !opportunity) {
            return null;
          }

          return (
            <article
              key={`${match.artistSlug}-${match.opportunitySlug}`}
              className="rounded-2xl border border-zinc-200 bg-white p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-zinc-500">
                    推荐给 {artist.name} · {artist.discipline}
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold">{opportunity.title}</h2>
                  <p className="mt-2 text-sm text-zinc-500">
                    {opportunity.location} · {opportunity.type} · {opportunity.costLevel}
                  </p>
                </div>
                <div className="rounded-xl bg-zinc-950 px-4 py-3 text-center text-white">
                  <p className="text-3xl font-semibold">{match.score}%</p>
                  <p className="text-xs text-zinc-300">匹配度</p>
                </div>
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {match.reasons.map((reason) => (
                  <p
                    key={reason}
                    className="flex gap-2 rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-sm leading-6 text-emerald-800"
                  >
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0" />
                    {reason}
                  </p>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {opportunity.trustTags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href={`/opportunities/${opportunity.slug}`}
                className="mt-5 inline-flex h-10 items-center gap-2 rounded-lg bg-zinc-950 px-4 text-sm font-medium text-white"
              >
                查看匹配详情
                <ArrowRight className="size-4" />
              </Link>
            </article>
          );
        })}
      </section>
    </div>
  );
}
