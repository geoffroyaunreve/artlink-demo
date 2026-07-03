"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { CSSProperties, ReactNode } from "react";
import {
  Bell,
  Building2,
  ChevronRight,
  ClipboardList,
  Home,
  MessageCircle,
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

const topNav: NavItem[] = [
  { label: "首页", href: "/", icon: Home },
  { label: "驻留机会", href: "/opportunities", icon: Search },
  { label: "申请清单", href: "/applications", icon: ClipboardList },
];

const extraNav: NavItem[] = [
  { label: "我的匹配", href: "/matches", icon: Sparkles },
  { label: "作品集主页", href: "/artists", icon: Home },
  { label: "材料助手", href: "/materials", icon: WandSparkles },
  { label: "驻留指南", href: "/guide", icon: MessageCircle },
  { label: "机构发布", href: "/institution-entry", icon: Building2 },
];

const menuNav: NavItem[] = [...topNav, ...extraNav];

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

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f7f4ee] text-zinc-950">
      <div>
        <header className="sticky top-0 z-30 border-b border-white/10 bg-black/70 text-white shadow-sm shadow-black/20 backdrop-blur-2xl">
          <div className="flex min-h-20 items-center gap-4 px-4 sm:px-6 xl:px-8">
            <Logo />

            <nav className="hidden items-center gap-3 text-sm font-medium xl:flex">
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

            <div className="ml-auto hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 px-0 backdrop-blur-xl transition-all md:flex xl:w-64 xl:justify-start xl:px-4">
              <Search className="size-4 text-zinc-500" />
              <input
                className="hidden h-full min-w-0 flex-1 bg-transparent px-3 text-sm text-zinc-100 outline-none placeholder:text-zinc-500 xl:block"
                placeholder="搜索驻留项目、国家、机构、媒介..."
              />
            </div>

            <div className="ml-auto flex items-center gap-2 md:ml-0">
              <Link
                href="/notifications"
                title="通知"
                className="flex size-10 items-center justify-center rounded-full border border-transparent text-zinc-400 transition hover:border-zinc-800 hover:bg-zinc-900 hover:text-white"
                aria-label="消息通知"
              >
                <Bell className="size-5" />
              </Link>
              <Link
                href="/profile"
                className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-sm font-medium text-zinc-200 backdrop-blur-xl"
                aria-label="个人主页"
              >
                <span className="flex size-8 items-center justify-center rounded-full bg-white text-zinc-950">
                  A
                </span>
              </Link>
              <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                className="group inline-flex size-10 items-center justify-center rounded-full border border-transparent text-white transition hover:border-zinc-800 hover:bg-zinc-900"
                aria-expanded={menuOpen}
                aria-label={menuOpen ? "收起导航菜单" : "展开更多导航"}
              >
                <span className="relative flex size-5 items-center justify-center" aria-hidden="true">
                  <span
                    className={cn(
                      "absolute h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ease-out",
                      menuOpen ? "translate-y-0 rotate-45" : "-translate-y-1.5 rotate-0",
                    )}
                  />
                  <span
                    className={cn(
                      "absolute h-0.5 w-5 rounded-full bg-current transition-all duration-200 ease-out",
                      menuOpen ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100",
                    )}
                  />
                  <span
                    className={cn(
                      "absolute h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ease-out",
                      menuOpen ? "translate-y-0 -rotate-45" : "translate-y-1.5 rotate-0",
                    )}
                  />
                </span>
              </button>
            </div>
          </div>

          <div
            data-menu-panel="true"
            className={cn(
              "frosted-menu-panel absolute left-0 right-0 top-full overflow-hidden border-t border-white/10 px-4 shadow-[0_24px_70px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-300 ease-out [backdrop-filter:blur(80px)_saturate(150%)] sm:px-6 xl:px-8",
              menuOpen
                ? "pointer-events-auto max-h-[80vh] translate-y-0 opacity-100"
                : "pointer-events-none max-h-0 -translate-y-3 opacity-0",
            )}
            style={{
              backdropFilter: "blur(80px) saturate(150%)",
              WebkitBackdropFilter: "blur(80px) saturate(150%)",
              background: "rgba(0, 0, 0, 0.7)",
            }}
            aria-hidden={!menuOpen}
          >
            <div className="relative py-5">
              <div className="mx-auto flex max-w-3xl flex-col">
                {menuNav.map((item, index) => {
                  const Icon = item.icon;
                  const active = isActive(pathname, item.href);

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      tabIndex={menuOpen ? 0 : -1}
                      className={cn(
                        "flex min-h-14 items-center justify-between px-1 text-lg font-medium transition sm:text-xl",
                        menuOpen ? "menu-panel-item" : "opacity-0",
                        active
                          ? "text-white"
                          : "text-zinc-400 hover:text-white",
                      )}
                      style={{ "--menu-index": index } as CSSProperties}
                    >
                      <span className="flex items-center gap-3">
                        <Icon className="size-5" />
                        {item.label}
                      </span>
                      <ChevronRight className="size-5" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </header>

        <main className="px-4 py-8 sm:px-6 xl:px-8">{children}</main>
      </div>
    </div>
  );
}
