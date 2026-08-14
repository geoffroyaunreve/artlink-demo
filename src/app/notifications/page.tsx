import Link from "next/link";
import {
  ArrowRight,
  Bell,
  CalendarClock,
  CheckCircle2,
  FileText,
  MessageCircle,
} from "lucide-react";

export const metadata = {
  title: "消息通知 | Residency Lab 驻留实验室",
};

const notifications = [
  {
    title: "海岸线亚洲青年艺术家驻留距离截止还有 12 天",
    description: "建议本周完成英文 Project Proposal，并确认保险与交通预算。",
    time: "今天 09:20",
    type: "截止提醒",
    icon: CalendarClock,
  },
  {
    title: "Artist Statement 需要英文润色",
    description: "你收藏的 2 个海外驻留项目要求英文材料，建议先统一更新英文版陈述。",
    time: "昨天 18:40",
    type: "材料提醒",
    icon: FileText,
  },
  {
    title: "River City Residency 更新了住宿补贴说明",
    description: "项目从“住宿未说明”更新为“提供 2,000 元住宿补贴”，成本等级保持中等成本。",
    time: "7 月 2 日",
    type: "项目更新",
    icon: CheckCircle2,
  },
  {
    title: "你收藏的驻留项目即将截止申请",
    description: "建议检查作品集、项目计划和预算版本，再决定是否加入申请清单。",
    time: "7 月 1 日",
    type: "截止提醒",
    icon: MessageCircle,
  },
];

export default function NotificationsPage() {
  return (
    <div>
      <section className="bg-[var(--color-mist)]">
        <div className="editorial-band-inner">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-zinc-700">
            <Bell className="size-4" /> Notifications
          </p>
          <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">消息通知</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-700">
            集中查看截止日期、材料准备、申请进度和驻留项目更新，避免重要申请节点被淹没。
          </p>
        </div>
      </section>

      <section className="bg-[var(--tone-mist-soft)]">
        <div className="editorial-band-inner">
          <div className="border-t border-black/25">
            {notifications.map((notification) => {
              const Icon = notification.icon;

              return (
                <article key={notification.title} className="grid gap-5 border-b border-black/20 py-7 sm:grid-cols-[40px_minmax(0,1fr)_auto] sm:items-start">
                  <Icon className="size-6" />
                  <div className="min-w-0">
                    <span className="inline-flex bg-[var(--color-mist)] px-2.5 py-1 text-xs font-bold text-zinc-800">{notification.type}</span>
                    <h2 className="mt-4 text-xl font-bold text-zinc-950">{notification.title}</h2>
                    <p className="mt-2 max-w-3xl text-sm leading-7 text-zinc-600">{notification.description}</p>
                  </div>
                  <time className="text-xs font-semibold text-zinc-500">{notification.time}</time>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[var(--tone-mist-deep)] text-[var(--color-ink)]">
        <div className="editorial-band-inner">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">下一步行动</h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-700">
            根据当前提醒，优先处理英文材料、项目计划和即将截止的驻留申请。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-10">
            <Link href="/materials" className="text-arrow-action">打开材料助手<ArrowRight className="size-4" /></Link>
            <Link href="/applications" className="text-arrow-action">查看申请清单<ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
