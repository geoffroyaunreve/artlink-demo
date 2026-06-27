import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { WaitlistForm } from "@/components/WaitlistForm";

export const metadata = {
  title: "艺术家入口 | ART LINK",
};

const benefits = [
  "建立结构化艺术家档案，集中展示作品、媒介、经历与合作偏好。",
  "根据媒介、城市、档期和创作主题获得机会推荐。",
  "用同一套资料快速投递展览、驻留、征集和品牌合作。",
];

export default function ArtistEntryPage() {
  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_420px]">
      <section className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-zinc-500">
          Artist Access
        </p>
        <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          让合适的项目
          <br />
          更早看见你的作品
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-600">
          ART LINK 帮助艺术家把作品、履历和合作意向整理成可被机构理解的档案，并将机会匹配从零散信息流变成清晰任务。
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
          <p className="text-xl font-semibold">适合正在寻找机会的创作者</p>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-300">
            包括青年艺术家、独立创作者、策展人与研究者。当前采用内测邀请制，优先开放给已有作品集和明确合作方向的用户。
          </p>
          <Link
            href="/opportunities"
            className="mt-6 inline-flex h-11 items-center gap-2 rounded-lg bg-white px-5 text-sm font-medium text-zinc-950"
          >
            先看看机会
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <aside className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8">
        <h2 className="text-2xl font-semibold">加入艺术家内测</h2>
        <p className="mt-3 text-sm leading-6 text-zinc-500">
          留下你的方向，后续可用于创建档案、获得匹配推荐和参与首批测试。
        </p>
        <div className="mt-6">
          <WaitlistForm defaultRole="artist" compact />
        </div>
      </aside>
    </div>
  );
}
