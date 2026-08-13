import Link from "next/link";
import { ArrowRight, WandSparkles } from "lucide-react";
import { getOpportunityBySlug, materialGuides } from "@/data/mockData";

export const metadata = {
  title: "材料助手 | Residency Lab 驻留实验室",
};

const exampleOpportunity = getOpportunityBySlug("shoreline-asian-young-artists");

export default function MaterialsPage() {
  return (
    <div>
      <section className="bg-[var(--color-sage)]">
        <div className="editorial-band-inner">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-700">Material Assistant</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">驻留申请材料助手</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-700">
            根据不同驻留项目的要求，提示你如何准备作品集、艺术家陈述、CV、项目计划、预算和推荐信。
          </p>
        </div>
      </section>

      {exampleOpportunity ? (
        <section className="bg-[var(--color-mist)] text-[var(--color-ink)]">
          <div className="editorial-band-inner">
            <div className="flex items-start gap-4">
              <WandSparkles className="mt-1 size-6 shrink-0" />
              <div>
                <p className="text-2xl font-bold">{exampleOpportunity.title}</p>
                <p className="mt-2 text-sm text-zinc-700">系统根据项目类型和材料要求生成准备建议</p>
              </div>
            </div>
            <div className="mt-10 grid border-t border-black/25 md:grid-cols-3">
              {[
                "该项目偏生态与研究型驻留，请在 project proposal 中强调研究问题、方法和当地语境。",
                "该项目要求公共分享，请补充过往公共项目、工作坊或社区协作经验。",
                "该项目要求英文材料，请检查 artist statement 和 CV 的英文版本。",
              ].map((advice, index) => (
                <p key={advice} className="border-b border-black/15 py-6 text-sm leading-7 text-zinc-700 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0">
                  <span className="mb-4 block text-xs font-bold text-zinc-600">0{index + 1}</span>
                  {advice}
                </p>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-[var(--color-paper)]">
        <div className="editorial-band-inner">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-600">Material library</p>
          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">材料准备指南</h2>
          <div className="mt-12 grid gap-x-8 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
            {materialGuides.map((guide) => (
              <article key={guide.key} className="border-t border-black/25 py-6">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-zinc-500">{guide.englishTitle}</p>
                <h3 className="mt-4 text-2xl font-bold">{guide.title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-600">{guide.description}</p>
                <ul className="mt-6 text-sm leading-6 text-zinc-700">
                  {guide.tips.map((tip) => (
                    <li key={tip} className="border-t border-black/15 py-3">{tip}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <Link href="/applications" className="text-arrow-action mt-12 text-zinc-950">
            回到申请清单
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
