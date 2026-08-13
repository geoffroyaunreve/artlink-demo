import Link from "next/link";
import { ArrowRight, Bell, ClipboardList, Languages, MapPin, UserRound } from "lucide-react";
import { applicationItems, getOpportunityBySlug } from "@/data/mockData";
import { ProfileFavorites } from "@/components/ProfileFavorites";

export const metadata = {
  title: "我的申请资料 | Residency Lab 驻留实验室",
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
    <div>
      <section className="bg-[var(--color-clay)]">
        <div className="editorial-band-inner">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-700">My residency profile</p>
          <div className="mt-7 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex size-20 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-3xl font-bold text-white">
                A
              </div>
              <div>
                <h1 className="text-5xl font-bold tracking-tight text-zinc-950 sm:text-6xl">{profile.name}</h1>
                <p className="mt-4 flex items-center gap-2 text-sm text-zinc-600">
                  <MapPin className="size-4" />
                  {profile.location} · {profile.stage}
                </p>
              </div>
            </div>
            <Link
              href="/artist-entry"
              className="text-arrow-action text-zinc-950"
            >
              完善匹配资料
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="mt-12 grid border-t border-black/25 md:grid-cols-3">
            <div className="border-b border-black/20 py-6 pr-5 md:border-r">
              <UserRound className="size-5 text-zinc-500" />
              <p className="mt-4 text-sm text-zinc-500">创作阶段</p>
              <p className="mt-1 font-semibold text-zinc-950">{profile.stage}</p>
            </div>
            <div className="border-b border-black/20 py-6 md:border-r md:px-5">
              <Languages className="size-5 text-zinc-500" />
              <p className="mt-4 text-sm text-zinc-500">申请语言</p>
              <p className="mt-1 font-semibold text-zinc-950">{profile.languages}</p>
            </div>
            <div className="border-b border-black/20 py-6 md:pl-5">
              <ClipboardList className="size-5 text-zinc-500" />
              <p className="mt-4 text-sm text-zinc-500">材料状态</p>
              <p className="mt-1 font-semibold text-zinc-950">{profile.portfolio}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-mist)] text-[var(--color-ink)]">
        <div className="editorial-band-inner grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <Bell className="size-6 text-zinc-700" />
            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">今日提醒</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-700">
            2 个材料任务需要更新，1 个驻留项目距离截止日期不足两周。
            </p>
          </div>
          <Link href="/notifications" className="text-arrow-action">
            查看通知
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <section className="bg-[var(--tone-mist-soft)]">
        <div className="editorial-band-inner">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-600">Application snapshot</p>
              <h2 className="mt-5 text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl">申请进度</h2>
            </div>
            <Link href="/applications" className="text-arrow-action hidden text-zinc-950 sm:inline-flex">
              查看申请清单
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-x-8 gap-y-10 xl:grid-cols-3">
            {activeApplications.map((entry) => {
              if (!entry) {
                return null;
              }

              return (
                <Link key={entry.opportunity.slug} href={`/opportunities/${entry.opportunity.slug}`} className="border-t border-black/25 py-6">
                  <div className="flex items-start justify-between gap-4">
                    <span className="bg-[var(--color-charcoal)] px-2.5 py-1 text-xs font-bold text-[var(--color-paper)]">{entry.item.status}</span>
                    <div className="text-right">
                      <p className="text-[10px] font-bold text-zinc-500">匹配度</p>
                      <p className="mt-1 text-3xl font-bold">{entry.opportunity.matchScore}%</p>
                    </div>
                  </div>
                  <p className="mt-5 line-clamp-2 font-bold text-zinc-950">{entry.opportunity.title}</p>
                  <p className="mt-3 text-sm text-zinc-600">{entry.opportunity.location} · 截止 {entry.opportunity.deadline}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <ProfileFavorites />
    </div>
  );
}
