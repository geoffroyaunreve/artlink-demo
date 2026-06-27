import Link from "next/link";
import { ArrowRight, CheckCircle2, UploadCloud } from "lucide-react";
import { WaitlistForm } from "@/components/WaitlistForm";

export const metadata = {
  title: "机构入口 | ART LINK",
};

const benefits = [
  "发布展览、驻留、征集、扶持计划与品牌合作机会。",
  "基于媒介、地域、档期和作品方向查看高匹配艺术家。",
  "统一管理申请材料、沟通状态和候选艺术家短名单。",
];

const steps = ["发布项目", "筛选候选人", "发起联系", "沉淀项目档案"];

export default function InstitutionEntryPage() {
  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_420px]">
      <section className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-zinc-500">
          Institution Access
        </p>
        <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          为机构项目
          <br />
          找到更合适的创作者
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-600">
          从发布机会到生成候选名单，ART LINK 帮助美术馆、画廊、基金会和品牌项目更快建立专业沟通链路。
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

        <div className="mt-10 rounded-2xl border border-zinc-200 p-5">
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-full bg-zinc-950 text-white">
              <UploadCloud className="size-5" />
            </span>
            <div>
              <p className="font-semibold">项目发布流程</p>
              <p className="text-sm text-zinc-500">从公开征集到定向邀请都可以统一管理。</p>
            </div>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step}
                className="rounded-xl bg-zinc-50 p-4 text-sm font-medium text-zinc-700"
              >
                <span className="mb-3 block text-xs text-zinc-400">
                  0{index + 1}
                </span>
                {step}
              </div>
            ))}
          </div>
        </div>

        <Link
          href="/artists"
          className="mt-8 inline-flex h-11 items-center gap-2 rounded-lg bg-zinc-950 px-5 text-sm font-medium text-white transition hover:bg-zinc-800"
        >
          浏览艺术家
          <ArrowRight className="size-4" />
        </Link>
      </section>

      <aside className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8">
        <h2 className="text-2xl font-semibold">加入机构内测</h2>
        <p className="mt-3 text-sm leading-6 text-zinc-500">
          留下机构类型和项目方向，获取发布机会、匹配艺术家与协作看板的优先体验。
        </p>
        <div className="mt-6">
          <WaitlistForm defaultRole="institution" compact />
        </div>
      </aside>
    </div>
  );
}
