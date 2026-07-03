import Link from "next/link";
import { ArrowRight, Bell, ClipboardList, Languages, MapPin, UserRound } from "lucide-react";
import { applicationItems, getOpportunityBySlug } from "@/data/mockData";
import { ProfileFavorites } from "@/components/ProfileFavorites";

export const metadata = {
  title: "个人主页 | ART LINK",
};

const profile = {
  name: "Aria",
  location: "上海",
  stage: "青年艺术家 / 新媒体与影像",
  languages: "中文 / 英文",
  portfolio: "作品集完整度 82%",
};

export default function ProfilePage() {
  const activeApplications = applicationItems
    .map((item) => {
      const opportunity = getOpportunityBySlug(item.opportunitySlug);
      return opportunity ? { item, opportunity } : null;
    })
    .filter(Boolean);

  return (
    <div className="mx-auto max-w-[1500px] space-y-6">
      <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
        <div className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-emerald-700">
            Artist profile
          </p>
          <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex size-20 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-3xl font-medium text-white">
                A
              </div>
              <div>
                <h1 className="text-4xl font-semibold tracking-tight text-zinc-950">
                  {profile.name}
                </h1>
                <p className="mt-3 flex items-center gap-2 text-sm text-zinc-500">
                  <MapPin className="size-4" />
                  {profile.location} · {profile.stage}
                </p>
              </div>
            </div>
            <Link
              href="/artist-entry"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-zinc-950 px-5 text-sm font-medium text-white transition hover:bg-zinc-800"
            >
              编辑作品集主页
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-zinc-200 bg-[#fbfaf6] p-5">
              <UserRound className="size-5 text-zinc-500" />
              <p className="mt-4 text-sm text-zinc-500">创作阶段</p>
              <p className="mt-1 font-semibold text-zinc-950">{profile.stage}</p>
            </div>
            <div className="rounded-3xl border border-zinc-200 bg-[#fbfaf6] p-5">
              <Languages className="size-5 text-zinc-500" />
              <p className="mt-4 text-sm text-zinc-500">申请语言</p>
              <p className="mt-1 font-semibold text-zinc-950">{profile.languages}</p>
            </div>
            <div className="rounded-3xl border border-zinc-200 bg-[#fbfaf6] p-5">
              <ClipboardList className="size-5 text-zinc-500" />
              <p className="mt-4 text-sm text-zinc-500">材料状态</p>
              <p className="mt-1 font-semibold text-zinc-950">{profile.portfolio}</p>
            </div>
          </div>
        </div>

        <aside className="rounded-3xl border border-zinc-200 bg-zinc-950 p-6 text-white sm:p-8">
          <Bell className="size-6 text-zinc-300" />
          <h2 className="mt-5 text-2xl font-semibold">今日提醒</h2>
          <p className="mt-3 text-sm leading-6 text-zinc-300">
            2 个材料任务需要更新，1 个驻留项目距离截止日期不足两周。
          </p>
          <Link
            href="/notifications"
            className="mt-6 inline-flex h-10 items-center gap-2 rounded-full bg-white px-5 text-sm font-medium text-zinc-950"
          >
            查看通知
            <ArrowRight className="size-4" />
          </Link>
        </aside>
      </section>

      <section className="rounded-3xl border border-zinc-200 bg-white p-5 sm:p-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-zinc-500">Application snapshot</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950">
              申请进度
            </h2>
          </div>
          <Link
            href="/applications"
            className="hidden h-10 items-center gap-2 rounded-full bg-zinc-950 px-5 text-sm font-medium text-white sm:inline-flex"
          >
            查看申请清单
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-6 grid gap-4 xl:grid-cols-3">
          {activeApplications.map((entry) => {
            if (!entry) {
              return null;
            }

            return (
              <Link
                key={entry.opportunity.slug}
                href={`/opportunities/${entry.opportunity.slug}`}
                className="rounded-3xl border border-zinc-200 bg-[#fbfaf6] p-5 transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-sm"
              >
                <p className="line-clamp-2 font-semibold text-zinc-950">
                  {entry.opportunity.title}
                </p>
                <p className="mt-3 text-sm text-zinc-500">
                  {entry.opportunity.location} · 截止 {entry.opportunity.deadline}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-zinc-950 px-3 py-1 text-xs font-medium text-white">
                    {entry.item.status}
                  </span>
                  <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-500">
                    匹配度 {entry.opportunity.matchScore}%
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <ProfileFavorites />
    </div>
  );
}
