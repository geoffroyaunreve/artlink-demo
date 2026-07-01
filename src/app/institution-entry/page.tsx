import { CheckCircle2, MessageSquare, UploadCloud } from "lucide-react";
import { institutionApplicants, institutionStats } from "@/data/mockData";
import { ActionButton } from "@/components/ActionButton";

export const metadata = {
  title: "机构发布 | ART LINK",
};

const benefits = [
  "发布驻留项目，并清楚标注费用、住宿、工作室、补贴和语言要求。",
  "统一收集作品集、Artist Statement、CV、Project Proposal 和预算说明。",
  "按媒介、主题、阶段、地区和语言筛选申请者，建立候选人短名单。",
  "管理申请状态和沟通记录，减少邮件与表格之间的反复切换。",
];

const workflow = ["发布驻留项目", "收集作品集", "筛选申请者", "建立短名单", "发起沟通", "跟进申请状态"];

export default function InstitutionEntryPage() {
  return (
    <div className="space-y-6">
      <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-zinc-500">
            Institution Dashboard
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            驻留机构发布与申请管理后台
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-600">
            面向驻留机构、青年艺术家项目方和研究型创作支持计划，统一发布项目、收集作品集、筛选申请者和管理申请状态。
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
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
        </div>

        <aside className="rounded-2xl border border-zinc-200 bg-zinc-950 p-6 text-white">
          <UploadCloud className="size-8" />
          <h2 className="mt-5 text-2xl font-semibold">发布驻留项目</h2>
          <p className="mt-3 text-sm leading-6 text-zinc-300">
            用结构化字段说明项目类型、费用、住宿、语言、申请材料和版权条款，让青年艺术家能更准确判断是否适合申请。
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <ActionButton label="创建项目草稿" successLabel="项目草稿已创建" variant="light" />
            <ActionButton label="邀请团队审核" successLabel="审核邀请已发送" variant="light" />
          </div>
        </aside>
      </section>

      <section className="rounded-2xl border border-zinc-200 bg-white p-5">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">2026 青年艺术家驻留计划</h2>
            <p className="mt-2 text-sm text-zinc-500">
              示例后台：查看申请数据、材料完整度、语言能力和沟通状态。
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-5">
            {institutionStats.map((stat) => (
              <div key={stat.label} className="rounded-xl bg-zinc-50 p-4 text-center">
                <p className="text-2xl font-semibold">{stat.value}</p>
                <p className="mt-1 text-xs text-zinc-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-zinc-200 bg-white p-5">
        <h2 className="text-xl font-semibold">申请者列表</h2>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[920px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-zinc-200 text-zinc-500">
                <th className="py-3 pr-4 font-medium">艺术家姓名</th>
                <th className="py-3 pr-4 font-medium">所在城市</th>
                <th className="py-3 pr-4 font-medium">媒介方向</th>
                <th className="py-3 pr-4 font-medium">作品集预览</th>
                <th className="py-3 pr-4 font-medium">匹配标签</th>
                <th className="py-3 pr-4 font-medium">材料完整度</th>
                <th className="py-3 pr-4 font-medium">语言能力</th>
                <th className="py-3 pr-4 font-medium">申请状态</th>
                <th className="py-3 font-medium">操作</th>
              </tr>
            </thead>
            <tbody>
              {institutionApplicants.map((applicant) => (
                <tr key={applicant.name} className="border-b border-zinc-100 last:border-b-0">
                  <td className="py-4 pr-4 font-medium">{applicant.name}</td>
                  <td className="py-4 pr-4 text-zinc-500">{applicant.city}</td>
                  <td className="py-4 pr-4 text-zinc-500">{applicant.discipline}</td>
                  <td className="py-4 pr-4 text-zinc-500">{applicant.portfolioPreview}</td>
                  <td className="py-4 pr-4">
                    <div className="flex flex-wrap gap-1">
                      {applicant.matchTags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-zinc-200 px-2 py-1 text-xs text-zinc-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 pr-4">
                    <div className="w-28">
                      <div className="mb-1 text-xs text-zinc-500">
                        {applicant.materialCompletion}%
                      </div>
                      <div className="h-2 rounded-full bg-zinc-100">
                        <div
                          className="h-2 rounded-full bg-zinc-950"
                          style={{ width: `${applicant.materialCompletion}%` }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="py-4 pr-4 text-zinc-500">{applicant.language}</td>
                  <td className="py-4 pr-4">
                    <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-600">
                      {applicant.status}
                    </span>
                  </td>
                  <td className="py-4">
                    <div className="flex gap-2">
                      <button type="button" className="rounded-lg border border-zinc-200 px-3 py-2 text-xs">
                        查看作品集
                      </button>
                      <button type="button" className="rounded-lg border border-zinc-200 px-3 py-2 text-xs">
                        加入短名单
                      </button>
                      <button type="button" className="rounded-lg bg-zinc-950 px-3 py-2 text-xs text-white">
                        发起沟通
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-2xl border border-zinc-200 bg-white p-5">
        <div className="flex items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-full bg-zinc-950 text-white">
            <MessageSquare className="size-5" />
          </span>
          <div>
            <h2 className="text-xl font-semibold">机构端流程</h2>
            <p className="text-sm text-zinc-500">从发布项目到沟通记录都集中在一个后台。</p>
          </div>
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-6">
          {workflow.map((step, index) => (
            <div key={step} className="rounded-xl bg-zinc-50 p-4 text-sm font-medium text-zinc-700">
              <span className="mb-3 block text-xs text-zinc-400">0{index + 1}</span>
              {step}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
