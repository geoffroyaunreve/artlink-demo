import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { applicationItems, getOpportunityBySlug } from "@/data/mockData";

export const metadata = {
  title: "申请清单 | Residency Lab 驻留实验室",
};

const flow = [
  "发现驻留",
  "查看匹配理由",
  "加入申请清单",
  "准备材料",
  "提交申请",
  "跟进状态",
  "复盘结果",
];

export default function ApplicationsPage() {
  return (
    <div>
      <section className="bg-[var(--color-mist)]">
        <div className="editorial-band-inner">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-700">Application Tracker</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
            从发现驻留，到完成申请
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-700">
            把驻留项目从收藏、材料准备、提交到等待结果统一管理，避免错过截止日期和关键材料。
          </p>
        </div>
      </section>

      <section className="border-t border-black/25 bg-[var(--color-mist)]">
        <div className="editorial-band-inner">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-700">Application workflow</p>
          <div className="mt-8 grid border-t border-black/25 sm:grid-cols-2 lg:grid-cols-7">
            {flow.map((step, index) => (
              <div key={step} className="border-b border-black/20 py-5 pr-4 lg:border-r lg:px-4 lg:first:pl-0 lg:last:border-r-0">
                <span className="block text-xs font-bold text-zinc-600">0{index + 1}</span>
                <p className="mt-4 text-sm font-bold">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--tone-mist-pale)]">
        <div className="editorial-band-inner">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-600">Active applications</p>
          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">申请进度</h2>

          <div className="mt-12">
            {applicationItems.map((item) => {
              const opportunity = getOpportunityBySlug(item.opportunitySlug);

              if (!opportunity) {
                return null;
              }

              return (
                <article key={item.opportunitySlug} className="border-t border-black/25 py-10">
                  <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
                    <div>
                      <span className="inline-flex bg-[var(--color-charcoal)] px-3 py-1 text-xs font-bold text-[var(--color-paper)]">
                        {item.status}
                      </span>
                      <h3 className="mt-5 text-3xl font-bold tracking-tight">{opportunity.title}</h3>
                      <p className="mt-3 text-sm text-zinc-600">
                        {opportunity.location} · 截止 {opportunity.deadline} · {opportunity.costLevel}
                      </p>
                      <p className="mt-4 text-sm leading-6 text-zinc-700">下一步：{item.nextAction}</p>
                    </div>
                    <div className="text-left lg:text-right">
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-zinc-500">匹配度</p>
                      <p className="mt-1 text-5xl font-bold tracking-tight">{opportunity.matchScore}%</p>
                    </div>
                  </div>

                  <div className="mt-8 grid border-t border-black/20 md:grid-cols-2 xl:grid-cols-5">
                    {item.materialProgress.map((material) => (
                      <div key={material.name} className="border-b border-black/15 py-5 pr-5 xl:border-r xl:px-5 xl:first:pl-0 xl:last:border-r-0">
                        <div className="flex justify-between gap-3 text-xs text-zinc-600">
                          <span className="font-bold">{material.name}</span>
                          <span>{material.progress ? `${material.progress}%` : "未准备"}</span>
                        </div>
                        <div className="mt-4 h-1 bg-black/10">
                          <div className="h-1 bg-[var(--color-ink)]" style={{ width: `${material.progress}%` }} />
                        </div>
                        <p className="mt-4 text-xs leading-5 text-zinc-600">{material.note}</p>
                      </div>
                    ))}
                  </div>

                  <Link href={`/opportunities/${opportunity.slug}`} className="text-arrow-action mt-6 text-zinc-950">
                    查看驻留详情
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
