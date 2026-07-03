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
  title: "消息通知 | ART LINK",
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
    title: "驻留机构已查看你的作品集主页",
    description: "机构端正在筛选影像、新媒体和城市研究方向的申请者。",
    time: "7 月 1 日",
    type: "机构消息",
    icon: MessageCircle,
  },
];

export default function NotificationsPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <section className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8">
        <p className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.16em] text-emerald-700">
          <Bell className="size-4" />
          Notifications
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
          消息通知
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-500">
          集中查看截止日期、材料准备、机构沟通和驻留项目更新，避免重要申请节点被淹没。
        </p>
      </section>

      <section className="space-y-4">
        {notifications.map((notification) => {
          const Icon = notification.icon;

          return (
            <article
              key={notification.title}
              className="rounded-3xl border border-zinc-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-sm"
            >
              <div className="flex gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-zinc-950 text-white">
                  <Icon className="size-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-zinc-200 bg-[#fbfaf6] px-3 py-1 text-xs text-zinc-500">
                        {notification.type}
                      </span>
                      <span className="text-xs text-zinc-400">{notification.time}</span>
                    </div>
                  </div>
                  <h2 className="mt-3 text-xl font-semibold text-zinc-950">
                    {notification.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    {notification.description}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <section className="rounded-3xl border border-zinc-200 bg-zinc-950 p-6 text-white sm:p-8">
        <h2 className="text-2xl font-semibold">下一步行动</h2>
        <p className="mt-3 text-sm leading-6 text-zinc-300">
          根据当前提醒，优先处理英文材料、项目计划和即将截止的驻留申请。
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/materials"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-medium text-zinc-950"
          >
            打开材料助手
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/applications"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-white/20 bg-zinc-950 px-5 text-sm font-medium text-white"
          >
            查看申请清单
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
