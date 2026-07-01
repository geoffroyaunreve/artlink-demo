import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { costFactors, guideSections, matchDimensions } from "@/data/mockData";

export const metadata = {
  title: "驻留指南 | ART LINK",
};

export default function GuidePage() {
  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-zinc-500">
          Residency Guide
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">
          用中文语境理解驻留申请
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-500">
          驻留不是只看地点和名气。更重要的是判断项目类型、成本结构、语言要求、申请材料和自己的创作阶段是否匹配。
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        {guideSections.map((section) => (
          <article key={section.title} className="rounded-2xl border border-zinc-200 bg-white p-5">
            <h2 className="text-xl font-semibold">{section.title}</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-500">{section.text}</p>
          </article>
        ))}
      </section>

      <section className="rounded-2xl border border-zinc-200 bg-white p-5">
        <h2 className="text-xl font-semibold">匹配前需要先问自己的 5 个问题</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-5">
          {matchDimensions.map((dimension) => (
            <div key={dimension.title} className="rounded-xl bg-zinc-50 p-4">
              <CheckCircle2 className="size-5 text-zinc-950" />
              <h3 className="mt-3 font-semibold">{dimension.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-500">{dimension.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-zinc-200 bg-white p-5">
        <h2 className="text-xl font-semibold">真实成本检查清单</h2>
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
      </section>

      <Link
        href="/opportunities"
        className="inline-flex h-11 items-center gap-2 rounded-lg bg-zinc-950 px-5 text-sm font-medium text-white"
      >
        浏览驻留机会
        <ArrowRight className="size-4" />
      </Link>
    </div>
  );
}
