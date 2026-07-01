"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  Bookmark,
  Building2,
  ClipboardList,
  Home,
  Mail,
  MessageCircle,
  Plus,
  Search,
  Send,
  Sparkles,
  UserRound,
  WandSparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

const primaryNav: NavItem[] = [
  { label: "首页", href: "/", icon: Home },
  { label: "驻留机会", href: "/opportunities", icon: Search },
  { label: "我的匹配", href: "/matches", icon: Sparkles },
  { label: "申请进度", href: "/applications", icon: ClipboardList },
  { label: "作品集主页", href: "/artists", icon: UserRound },
  { label: "材料助手", href: "/materials", icon: WandSparkles },
  { label: "收藏驻留", href: "/opportunities#bookmarks", icon: Bookmark },
  { label: "机构后台", href: "/institution-entry", icon: Building2 },
  { label: "消息中心", href: "/#community", icon: MessageCircle },
];

const topNav = [
  { label: "首页", href: "/" },
  { label: "驻留机会", href: "/opportunities" },
  { label: "我的匹配", href: "/matches" },
  { label: "申请清单", href: "/applications" },
  { label: "材料助手", href: "/materials" },
  { label: "驻留指南", href: "/guide" },
  { label: "机构发布", href: "/institution-entry" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === href;
  }

  return pathname.startsWith(href.replace("/#", "/"));
}

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="ART LINK 首页">
      <span className="relative block size-9">
        <span className="absolute left-1 top-1 h-7 w-1.5 -skew-x-12 bg-zinc-950" />
        <span className="absolute bottom-1 left-3 h-1.5 w-6 bg-zinc-950" />
        <span className="absolute right-0 top-3 h-5 w-1.5 bg-zinc-950" />
      </span>
      <span className="text-lg font-semibold tracking-tight">ART LINK</span>
    </Link>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#f6f6f3] text-zinc-950">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[280px] flex-col border-r border-zinc-200 bg-white/92 px-6 py-7 backdrop-blur lg:flex">
        <Logo />

        <Link
          href="/institution-entry"
          className="mt-10 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-zinc-950 px-4 text-sm font-medium text-white transition hover:bg-zinc-800"
        >
          <Plus className="size-4" />
          发布驻留项目
        </Link>

        <nav className="mt-7 space-y-1">
          {primaryNav.map((item) => {
            const Icon = item.icon;
            const active = isActive(pathname, item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "flex h-12 items-center gap-3 rounded-xl px-4 text-sm transition",
                  active
                    ? "bg-zinc-100 font-medium text-zinc-950"
                    : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-950",
                )}
              >
                <Icon className="size-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto rounded-2xl bg-[linear-gradient(135deg,#e2e5ff_0%,#ffe1d8_100%)] p-5">
          <p className="text-lg font-semibold">升级为会员</p>
          <p className="mt-3 text-sm leading-6 text-zinc-700">
            解锁驻留匹配评分、材料提醒和申请进度追踪。
          </p>
          <Link
            href="/artist-entry"
            className="mt-5 inline-flex h-10 items-center gap-2 rounded-lg bg-zinc-950 px-4 text-sm font-medium text-white"
          >
            开始匹配
            <Send className="size-4" />
          </Link>
        </div>

        <footer className="mt-10 text-xs leading-6 text-zinc-400">
          <p>© 2026 ART LINK</p>
          <p>关于我们 · 帮助中心 · 条款隐私</p>
        </footer>
      </aside>

      <div className="lg:pl-[280px]">
        <header className="sticky top-0 z-30 border-b border-zinc-200 bg-white/88 backdrop-blur">
          <div className="flex min-h-20 items-center gap-4 px-4 sm:px-6 xl:px-8">
            <div className="lg:hidden">
              <Logo />
            </div>

            <nav className="hidden items-center gap-8 text-sm font-medium xl:flex">
              {topNav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "border-b-2 py-7 transition",
                    isActive(pathname, item.href)
                      ? "border-zinc-950 text-zinc-950"
                      : "border-transparent text-zinc-500 hover:text-zinc-950",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="ml-auto hidden h-10 w-full max-w-[520px] items-center rounded-full border border-zinc-200 bg-zinc-50 px-4 sm:flex">
              <Search className="size-4 text-zinc-400" />
              <input
                className="h-full flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-zinc-400"
                placeholder="搜索驻留项目、国家、机构、媒介..."
              />
              <Search className="size-4 text-zinc-400" />
            </div>

            <div className="ml-auto flex items-center gap-2 sm:ml-0">
              <button
                type="button"
                title="通知"
                className="hidden size-10 items-center justify-center rounded-full border border-transparent text-zinc-600 transition hover:border-zinc-200 hover:bg-white sm:flex"
              >
                <Bell className="size-5" />
              </button>
              <button
                type="button"
                title="消息"
                className="hidden size-10 items-center justify-center rounded-full border border-transparent text-zinc-600 transition hover:border-zinc-200 hover:bg-white sm:flex"
              >
                <Mail className="size-5" />
              </button>
              <Link
                href="/artist-entry"
                className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white py-1 pl-1 pr-3 text-sm font-medium"
              >
                <span className="flex size-8 items-center justify-center rounded-full bg-zinc-950 text-white">
                  A
                </span>
                <span className="hidden sm:inline">Aria</span>
              </Link>
            </div>
          </div>

          <div className="flex gap-2 overflow-x-auto px-4 pb-3 sm:px-6 xl:hidden">
            {topNav.slice(0, 5).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "whitespace-nowrap rounded-full px-4 py-2 text-sm",
                  isActive(pathname, item.href)
                    ? "bg-zinc-950 text-white"
                    : "bg-white text-zinc-600",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </header>

        <main className="px-4 py-5 sm:px-6 xl:px-8">{children}</main>
      </div>

      <Link
        href="/institution-entry"
        className="fixed bottom-5 right-5 z-40 inline-flex size-12 items-center justify-center rounded-full bg-zinc-950 text-white shadow-xl shadow-zinc-950/20 lg:hidden"
        aria-label="发布驻留项目"
      >
        <Plus className="size-5" />
      </Link>
    </div>
  );
}
