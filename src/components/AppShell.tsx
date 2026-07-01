"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  Building2,
  ChevronRight,
  Home,
  Mail,
  MessageCircle,
  Menu,
  Search,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

const topNav = [
  { label: "首页", href: "/" },
  { label: "驻留机会", href: "/opportunities" },
  { label: "申请清单", href: "/applications" },
];

const extraNav: NavItem[] = [
  { label: "我的匹配", href: "/matches", icon: Sparkles },
  { label: "作品集主页", href: "/artists", icon: Home },
  { label: "材料助手", href: "/materials", icon: WandSparkles },
  { label: "驻留指南", href: "/guide", icon: MessageCircle },
  { label: "机构发布", href: "/institution-entry", icon: Building2 },
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
        <span className="absolute left-1 top-1 h-7 w-1.5 -skew-x-12 bg-white" />
        <span className="absolute bottom-1 left-3 h-1.5 w-6 bg-white" />
        <span className="absolute right-0 top-3 h-5 w-1.5 bg-white" />
      </span>
      <span className="text-lg font-semibold tracking-tight">ART LINK</span>
    </Link>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f7f4ee] text-zinc-950">
      <div>
        <header className="sticky top-0 z-30 border-b border-zinc-800 bg-black/95 text-white backdrop-blur">
          <div className="flex min-h-20 items-center gap-4 px-4 sm:px-6 xl:px-8">
            <Logo />

            <nav className="hidden items-center gap-3 text-sm font-medium md:flex">
              {topNav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "rounded-full border px-4 py-2 transition",
                    isActive(pathname, item.href)
                      ? "border-white bg-white text-zinc-950"
                      : "border-transparent text-zinc-400 hover:border-zinc-700 hover:bg-zinc-900 hover:text-white",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="ml-auto hidden h-10 w-full max-w-[420px] items-center rounded-full border border-zinc-800 bg-zinc-950 px-4 lg:flex">
              <Search className="size-4 text-zinc-500" />
              <input
                className="h-full flex-1 bg-transparent px-3 text-sm text-zinc-100 outline-none placeholder:text-zinc-500"
                placeholder="搜索驻留项目、国家、机构、媒介..."
              />
              <Search className="size-4 text-zinc-500" />
            </div>

            <div className="ml-auto flex items-center gap-2 lg:ml-0">
              <button
                type="button"
                title="通知"
                className="hidden size-10 items-center justify-center rounded-full border border-transparent text-zinc-400 transition hover:border-zinc-800 hover:bg-zinc-900 hover:text-white sm:flex"
              >
                <Bell className="size-5" />
              </button>
              <button
                type="button"
                title="消息"
                className="hidden size-10 items-center justify-center rounded-full border border-transparent text-zinc-400 transition hover:border-zinc-800 hover:bg-zinc-900 hover:text-white sm:flex"
              >
                <Mail className="size-5" />
              </button>
              <Link
                href="/artist-entry"
                className="hidden items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 py-1 pl-1 pr-3 text-sm font-medium text-zinc-200 sm:flex"
              >
                <span className="flex size-8 items-center justify-center rounded-full bg-white text-zinc-950">
                  A
                </span>
                <span className="hidden sm:inline">Aria</span>
              </Link>
              <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                className="inline-flex size-10 items-center justify-center rounded-full border border-transparent text-white transition hover:border-zinc-800 hover:bg-zinc-900"
                aria-expanded={menuOpen}
                aria-label="展开更多导航"
              >
                <Menu className="size-5" />
              </button>
            </div>
          </div>

          <div className="flex gap-2 overflow-x-auto px-4 pb-3 sm:px-6 md:hidden">
            {topNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "whitespace-nowrap rounded-full px-4 py-2 text-sm",
                  isActive(pathname, item.href)
                    ? "bg-white text-zinc-950"
                    : "border border-zinc-800 bg-zinc-950 text-zinc-400",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {menuOpen ? (
            <div className="border-t border-zinc-800 bg-black px-4 py-5 sm:px-6 xl:px-8">
              <div className="mx-auto flex max-w-3xl flex-col">
                {extraNav.map((item) => {
                  const active = isActive(pathname, item.href);

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={cn(
                        "flex min-h-14 items-center justify-between border-b border-zinc-900 px-1 text-lg font-medium transition last:border-b-0 sm:text-xl",
                        active
                          ? "text-white"
                          : "text-zinc-400 hover:text-white",
                      )}
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="size-5" />
                    </Link>
                  );
                })}
              </div>
            </div>
          ) : null}
        </header>

        <main className="px-4 py-8 sm:px-6 xl:px-8">{children}</main>
      </div>
    </div>
  );
}
