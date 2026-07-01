import Link from "next/link";
import { ArrowRight, WandSparkles } from "lucide-react";
import { getOpportunityBySlug, materialGuides } from "@/data/mockData";

export const metadata = {
  title: "材料助手 | ART LINK",
};

const exampleOpportunity = getOpportunityBySlug("shoreline-asian-young-artists");

export default function MaterialsPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-zinc-500">
          Material Assistant
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">
          驻留申请材料助手
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-500">
          根据不同驻留项目的要求，提示你如何准备作品集、艺术家陈述、CV、项目计划、预算和推荐信。
        </p>
      </section>

      {exampleOpportunity ? (
        <section className="rounded-2xl border border-zinc-200 bg-zinc-950 p-6 text-white">
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-full bg-white text-zinc-950">
              <WandSparkles className="size-5" />
            </span>
            <div>
              <p className="font-semibold">{exampleOpportunity.title}</p>
              <p className="text-sm text-zinc-300">
                系统根据项目类型和材料要求生成准备建议
              </p>
            </div>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            <p className="rounded-xl bg-white/10 p-4 text-sm leading-6">
              该项目偏生态与研究型驻留，请在 project proposal 中强调研究问题、方法和当地语境。
            </p>
            <p className="rounded-xl bg-white/10 p-4 text-sm leading-6">
              该项目要求公共分享，请补充过往公共项目、工作坊或社区协作经验。
            </p>
            <p className="rounded-xl bg-white/10 p-4 text-sm leading-6">
              该项目要求英文材料，请检查 artist statement 和 CV 的英文版本。
            </p>
          </div>
        </section>
      ) : null}

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {materialGuides.map((guide) => (
          <article key={guide.key} className="rounded-2xl border border-zinc-200 bg-white p-5">
            <p className="text-sm text-zinc-500">{guide.englishTitle}</p>
            <h2 className="mt-2 text-2xl font-semibold">{guide.title}</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-500">{guide.description}</p>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-600">
              {guide.tips.map((tip) => (
                <li key={tip}>· {tip}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <Link
        href="/applications"
        className="inline-flex h-11 items-center gap-2 rounded-lg bg-zinc-950 px-5 text-sm font-medium text-white"
      >
        回到申请清单
        <ArrowRight className="size-4" />
      </Link>
    </div>
  );
}
