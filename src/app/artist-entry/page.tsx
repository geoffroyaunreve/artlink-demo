import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { WaitlistForm } from "@/components/WaitlistForm";

export const metadata = {
  title: "开始匹配 | Residency Lab 驻留实验室",
};

const benefits = [
  "完善个人匹配资料，记录媒介、主题、阶段和语言能力。",
  "根据预算、住宿、申请费、签证、语言和截止日期判断驻留是否真的适合。",
  "把 Portfolio、Artist Statement、CV 和 Project Proposal 拆成可追踪的准备任务。",
];

export default function ArtistEntryPage() {
  return (
    <div>
      <section className="bg-[var(--color-charcoal)] text-white">
        <div className="editorial-band-inner">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-400">Artist Residency Access</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">中国青年艺术家的驻留申请助手</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-300">
            从发现驻留，到完成申请。Residency Lab 驻留实验室帮助你理解项目条件、判断真实成本、准备申请材料，并跟进每一个截止日期。
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-sage)]">
        <div className="editorial-band-inner">
          <div className="grid border-t border-black/25 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <article key={benefit} className="border-b border-black/20 py-6 pr-6 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-bold text-zinc-500">0{index + 1}</span>
                  <CheckCircle2 className="size-5" />
                </div>
                <p className="mt-6 text-sm leading-7 text-zinc-700">{benefit}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-charcoal)] text-white">
        <div className="editorial-band-inner">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">适合正在准备驻留申请的创作者</h2>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-300">
            包括艺术学生、刚毕业创作者、青年艺术家和第一次申请海外驻留的人。重点不是收集更多链接，而是判断哪些驻留真正适合自己。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-10">
            <Link href="/opportunities" className="text-arrow-action">浏览驻留机会<ArrowRight className="size-4" /></Link>
            <Link href="/materials" className="text-arrow-action">准备申请材料<ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </section>

      <section className="bg-[var(--tone-charcoal-raised)] text-white">
        <div className="editorial-band-inner grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-400">Private beta</p>
            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">加入驻留匹配内测</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-300">
              留下你的媒介、预算和语言情况，优先体验驻留匹配评分、成本判断和材料提醒。
            </p>
          </div>
          <div className="border-t border-white/25 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <WaitlistForm compact />
          </div>
        </div>
      </section>
    </div>
  );
}
