import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { WaitlistForm } from "@/components/WaitlistForm";

export const metadata = {
  title: "开始匹配 | ART LINK",
};

const benefits = [
  "建立面向驻留申请的作品集主页，清楚展示媒介、主题、阶段和语言能力。",
  "根据预算、住宿、申请费、签证、语言和截止日期判断驻留是否真的适合。",
  "把 Portfolio、Artist Statement、CV 和 Project Proposal 拆成可追踪的准备任务。",
];

export default function ArtistEntryPage() {
  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_420px]">
      <section className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-zinc-500">
          Artist Residency Access
        </p>
        <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          中国青年艺术家的驻留申请助手
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-600">
          从发现驻留，到完成申请。ART LINK 帮助你理解项目条件、判断真实成本、准备申请材料，并跟进每一个截止日期。
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {benefits.map((benefit) => (
            <article
              key={benefit}
              className="rounded-xl border border-zinc-200 bg-zinc-50 p-5"
            >
              <CheckCircle2 className="size-5 text-zinc-950" />
              <p className="mt-4 text-sm leading-6 text-zinc-600">{benefit}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-zinc-950 p-6 text-white">
          <p className="text-xl font-semibold">适合正在准备驻留申请的创作者</p>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-300">
            包括艺术学生、刚毕业创作者、青年艺术家和第一次申请海外驻留的人。重点不是收集更多链接，而是判断哪些驻留真正适合自己。
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/opportunities"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-white px-5 text-sm font-medium text-zinc-950"
            >
              浏览驻留机会
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/materials"
              className="inline-flex h-11 items-center rounded-lg border border-white/20 px-5 text-sm font-medium text-white"
            >
              准备申请材料
            </Link>
          </div>
        </div>
      </section>

      <aside className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8">
        <h2 className="text-2xl font-semibold">加入驻留匹配内测</h2>
        <p className="mt-3 text-sm leading-6 text-zinc-500">
          留下你的媒介、预算和语言情况，优先体验驻留匹配评分、成本判断和材料提醒。
        </p>
        <div className="mt-6">
          <WaitlistForm defaultRole="artist" compact />
        </div>
      </aside>
    </div>
  );
}
