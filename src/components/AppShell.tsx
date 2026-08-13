"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { CSSProperties, ReactNode } from "react";
import {
  Bell,
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
  { label: "材料助手", href: "/materials", icon: WandSparkles },
  { label: "驻留指南", href: "/guide", icon: MessageCircle },
];

const menuNav: NavItem[] = [...topNav, ...extraNav];

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === href;
  }

  return pathname.startsWith(href.replace("/#", "/"));
}

function getShellTheme(pathname: string) {
  if (pathname === "/") {
    return { background: "var(--color-sage)", dark: false };
  }

  if (pathname.startsWith("/opportunities")) {
    return { background: "var(--color-paper)", dark: false };
  }

  if (pathname.startsWith("/applications") || pathname.startsWith("/notifications")) {
    return { background: "var(--color-mist)", dark: false };
  }

  if (pathname.startsWith("/matches") || pathname.startsWith("/profile")) {
    return { background: "var(--color-clay)", dark: false };
  }

  if (pathname.startsWith("/materials")) {
    return { background: "var(--color-sage)", dark: false };
  }

  if (pathname.startsWith("/guide")) {
    return { background: "var(--color-paper)", dark: false };
  }

  if (pathname.startsWith("/artist-entry")) {
    return { background: "var(--color-charcoal)", dark: true };
  }

  return { background: "#ffffff", dark: false };
}

function isEditorialPath(pathname: string) {
  return [
    "/",
    "/opportunities",
    "/applications",
    "/matches",
    "/materials",
    "/guide",
    "/notifications",
    "/profile",
    "/artist-entry",
  ].some((route) => route === "/" ? pathname === route : pathname.startsWith(route));
}

function Logo({ dark }: { dark: boolean }) {
  return (
    <Link
      href="/"
      className="flex min-w-0 items-center gap-3"
      aria-label="Residency Lab 驻留实验室首页"
    >
      <span
        className={cn(
          "size-7 shrink-0 rounded-full",
          dark ? "bg-[var(--color-paper)]" : "bg-[var(--color-ink)]",
        )}
        aria-hidden="true"
      />
      <span className="whitespace-nowrap text-[1.375rem] font-bold leading-7 tracking-[-0.025em]">
        Residency Lab
        <span className="hidden sm:inline"> 驻留实验室</span>
      </span>
    </Link>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const isEditorialRoute = isEditorialPath(pathname);
  const shellTheme = getShellTheme(pathname);

  return (
    <div className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)]">
      <div>
        <header
          className={cn(
            "sticky top-0 z-30 border-b transition-colors duration-200",
            shellTheme.dark
              ? "border-white/20 text-[var(--color-paper)]"
              : "border-black/20 text-[var(--color-ink)]",
          )}
          style={{ backgroundColor: shellTheme.background }}
          data-shell-background={shellTheme.background}
          data-shell-tone={shellTheme.dark ? "dark" : "light"}
        >
          <div className="flex min-h-20 items-center gap-4 px-4 sm:px-6 xl:px-8">
            <Logo dark={shellTheme.dark} />

            <nav className="hidden items-center gap-7 text-sm font-semibold xl:flex">
              {topNav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "border-b py-2 transition",
                    isActive(pathname, item.href)
                      ? shellTheme.dark
                        ? "border-[var(--color-paper)] text-[var(--color-paper)]"
                        : "border-[var(--color-ink)] text-[var(--color-ink)]"
                      : shellTheme.dark
                        ? "border-transparent text-white/65 hover:border-white/50 hover:text-[var(--color-paper)]"
                        : "border-transparent text-black/55 hover:border-black/40 hover:text-[var(--color-ink)]",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div
              className={cn(
                "ml-auto hidden h-10 w-10 items-center justify-center border-b px-0 transition-all md:flex xl:w-64 xl:justify-start",
                shellTheme.dark ? "border-white/30" : "border-black/25",
              )}
            >
              <Search className={cn("size-4", shellTheme.dark ? "text-white/65" : "text-black/55")} />
              <input
                className={cn(
                  "hidden h-full min-w-0 flex-1 bg-transparent px-3 text-sm outline-none xl:block",
                  shellTheme.dark
                    ? "text-[var(--color-paper)] placeholder:text-white/45"
                    : "text-[var(--color-ink)] placeholder:text-black/45",
                )}
                placeholder="搜索驻留项目、国家、机构、媒介..."
              />
            </div>

            <div className="ml-auto flex items-center gap-2 md:ml-0">
              <Link
                href="/notifications"
                title="通知"
                className={cn(
                  "flex size-10 items-center justify-center rounded-full border border-transparent transition",
                  shellTheme.dark
                    ? "text-[var(--color-paper)] hover:border-white/20 hover:bg-white/10"
                    : "text-[var(--color-ink)] hover:border-black/15 hover:bg-black/5",
                )}
                aria-label="消息通知"
              >
                <Bell className="size-5" />
              </Link>
              <Link
                href="/profile"
                className={cn(
                  "flex size-10 items-center justify-center rounded-full border border-transparent text-sm font-medium transition",
                  shellTheme.dark
                    ? "text-[var(--color-paper)] hover:border-white/20 hover:bg-white/10"
                    : "text-[var(--color-ink)] hover:border-black/15 hover:bg-black/5",
                )}
                aria-label="个人主页"
              >
                <span
                  className={cn(
                    "flex size-8 items-center justify-center rounded-full border",
                    shellTheme.dark
                      ? "border-white/35 bg-white/10 text-[var(--color-paper)]"
                      : "border-black/30 bg-white/30 text-[var(--color-ink)]",
                  )}
                >
                  A
                </span>
              </Link>
              <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                className={cn(
                  "group inline-flex size-10 items-center justify-center rounded-full border border-transparent transition",
                  shellTheme.dark
                    ? "text-[var(--color-paper)] hover:border-white/20 hover:bg-white/10"
                    : "text-[var(--color-ink)] hover:border-black/15 hover:bg-black/5",
                )}
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
              "absolute left-0 right-0 top-full overflow-hidden border-y px-4 transition-all duration-300 ease-out sm:px-6 xl:px-8",
              shellTheme.dark ? "border-white/20" : "border-black/15",
              menuOpen
                ? "pointer-events-auto max-h-[80vh] translate-y-0 opacity-100"
                : "pointer-events-none max-h-0 -translate-y-3 opacity-0",
            )}
            style={{
              backgroundColor: shellTheme.background,
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
                          ? shellTheme.dark
                            ? "text-[var(--color-paper)]"
                            : "text-[var(--color-ink)]"
                          : shellTheme.dark
                            ? "text-white/65 hover:text-[var(--color-paper)]"
                            : "text-black/55 hover:text-[var(--color-ink)]",
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

        <main className={isEditorialRoute ? "" : "px-4 py-8 sm:px-6 xl:px-8"}>
          {children}
        </main>
      </div>
    </div>
  );
}
