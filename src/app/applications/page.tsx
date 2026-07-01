import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { applicationItems, getOpportunityBySlug } from "@/data/mockData";

export const metadata = {
  title: "申请清单 | ART LINK",
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
    <div className="space-y-6">
      <section className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-zinc-500">
          Application Tracker
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">
          从发现驻留，到完成申请
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-500">
          把驻留项目从收藏、材料准备、提交到等待结果统一管理，避免错过截止日期和关键材料。
        </p>
      </section>

      <section className="rounded-2xl border border-zinc-200 bg-white p-5">
        <div className="grid gap-3 md:grid-cols-7">
          {flow.map((step, index) => (
            <div key={step} className="rounded-xl bg-zinc-50 p-4 text-sm">
              <span className="mb-3 block text-xs text-zinc-400">0{index + 1}</span>
              <p className="font-medium text-zinc-800">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        {applicationItems.map((item) => {
          const opportunity = getOpportunityBySlug(item.opportunitySlug);

          if (!opportunity) {
            return null;
          }

          return (
            <article
              key={item.opportunitySlug}
              className="rounded-2xl border border-zinc-200 bg-white p-5"
            >
              <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold">{opportunity.title}</h2>
                  <p className="mt-2 text-sm text-zinc-500">
                    {opportunity.location} · 截止 {opportunity.deadline} · {opportunity.costLevel}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-zinc-500">
                    下一步：{item.nextAction}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-zinc-950 px-3 py-1 text-sm font-medium text-white">
                    {item.status}
                  </span>
                  <span className="rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-500">
                    匹配度 {opportunity.matchScore}%
                  </span>
                </div>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                {item.materialProgress.map((material) => (
                  <div key={material.name} className="rounded-xl bg-zinc-50 p-4">
                    <div className="mb-2 flex justify-between gap-3 text-xs text-zinc-500">
                      <span>{material.name}</span>
                      <span>{material.progress ? `${material.progress}%` : "未准备"}</span>
                    </div>
                    <div className="h-2 rounded-full bg-white">
                      <div
                        className="h-2 rounded-full bg-zinc-950"
                        style={{ width: `${material.progress}%` }}
                      />
                    </div>
                    <p className="mt-3 text-xs leading-5 text-zinc-500">{material.note}</p>
                  </div>
                ))}
              </div>

              <Link
                href={`/opportunities/${opportunity.slug}`}
                className="mt-5 inline-flex h-10 items-center gap-2 rounded-lg bg-zinc-950 px-4 text-sm font-medium text-white"
              >
                查看驻留详情
                <ArrowRight className="size-4" />
              </Link>
            </article>
          );
        })}
      </section>
    </div>
  );
}
