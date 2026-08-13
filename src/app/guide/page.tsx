import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { costFactors, guideSections, matchDimensions } from "@/data/mockData";

export const metadata = {
  title: "驻留指南 | Residency Lab 驻留实验室",
};

export default function GuidePage() {
  return (
    <div>
      <section className="bg-[var(--color-paper)]">
        <div className="editorial-band-inner">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-700">Residency Guide</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">用中文语境理解驻留申请</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-700">
            驻留不是只看地点和名气。更重要的是判断项目类型、成本结构、语言要求、申请材料和自己的创作阶段是否匹配。
          </p>
        </div>
      </section>

      <section className="bg-[var(--tone-paper-soft)]">
        <div className="editorial-band-inner">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-600">Before applying</p>
          <div className="mt-8 grid gap-x-10 gap-y-10 md:grid-cols-2">
            {guideSections.map((section) => (
              <article key={section.title} className="border-t border-black/25 py-6">
                <h2 className="text-2xl font-bold">{section.title}</h2>
                <p className="mt-4 text-sm leading-7 text-zinc-600">{section.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-sand)]">
        <div className="editorial-band-inner">
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">匹配前需要先问自己的 5 个问题</h2>
          <div className="mt-12 grid border-t border-black/25 sm:grid-cols-2 lg:grid-cols-5">
            {matchDimensions.map((dimension, index) => (
              <div key={dimension.title} className="border-b border-black/20 py-6 pr-5 lg:border-r lg:px-5 lg:first:pl-0 lg:last:border-r-0">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-bold text-zinc-600">0{index + 1}</span>
                  <CheckCircle2 className="size-4" />
                </div>
                <h3 className="mt-6 text-lg font-bold">{dimension.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">{dimension.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-lilac)]">
        <div className="editorial-band-inner">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">真实成本检查清单</h2>
          <div className="mt-10 grid border-t border-black/25 sm:grid-cols-2 lg:grid-cols-3">
            {costFactors.map((factor) => (
              <div key={factor} className="border-b border-black/20 py-4 pr-5 text-sm text-zinc-700 lg:border-r lg:px-5 lg:first:pl-0 lg:nth-[3n]:border-r-0">
                {factor}
              </div>
            ))}
          </div>
          <Link href="/opportunities" className="text-arrow-action mt-10 text-zinc-950">
            浏览驻留机会
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
