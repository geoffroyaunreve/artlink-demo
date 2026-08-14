"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { CSSProperties, ReactNode } from "react";
import { ChevronRight, UserRound } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  href: string;
};

const topNav: NavItem[] = [
  { label: "首页", href: "/" },
  { label: "驻留机会", href: "/opportunities" },
  { label: "申请清单", href: "/applications" },
];

const extraNav: NavItem[] = [
  { label: "我的匹配", href: "/matches" },
  { label: "材料助手", href: "/materials" },
  { label: "驻留指南", href: "/guide" },
  { label: "关于Residency Lab", href: "/about" },
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

  if (pathname.startsWith("/about")) {
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
    "/about",
  ].some((route) => route === "/" ? pathname === route : pathname.startsWith(route));
}

function Logo({ dark }: { dark: boolean }) {
  return (
    <Link
      href="/"
      className="flex min-w-0 items-center gap-2"
      aria-label="Residency Lab 首页"
    >
      <span
        className={cn(
          "size-6 shrink-0 rounded-full sm:size-8 xl:size-9",
          dark ? "bg-[var(--color-paper)]" : "bg-[var(--color-ink)]",
        )}
        aria-hidden="true"
      />
      <span className="whitespace-nowrap text-[1.75rem] font-bold leading-none tracking-[-0.035em] sm:text-[2.125rem] xl:text-[2.375rem]">
        Residency Lab
      </span>
    </Link>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredMenuHref, setHoveredMenuHref] = useState<string | null>(null);
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

            <nav className="hidden items-center gap-7 text-2xl font-semibold xl:flex">
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

            <div className="ml-auto flex items-center gap-2">
              <Link
                href="/profile"
                className={cn(
                  "flex size-12 items-center justify-center transition-opacity hover:opacity-60",
                  shellTheme.dark
                    ? "text-[var(--color-paper)]"
                    : "text-[var(--color-ink)]",
                )}
                aria-label="个人主页"
                title="个人主页"
              >
                <UserRound className="size-8 stroke-[1.75]" aria-hidden="true" />
              </Link>
              <button
                type="button"
                onClick={() => {
                  setMenuOpen((open) => !open);
                  setHoveredMenuHref(null);
                }}
                className={cn(
                  "group inline-flex size-12 items-center justify-center rounded-full border border-transparent transition",
                  shellTheme.dark
                    ? "text-[var(--color-paper)] hover:border-white/20 hover:bg-white/10"
                    : "text-[var(--color-ink)] hover:border-black/15 hover:bg-black/5",
                )}
                aria-expanded={menuOpen}
                aria-label={menuOpen ? "收起导航菜单" : "展开更多导航"}
              >
                <span className="relative flex size-7 items-center justify-center" aria-hidden="true">
                  <span
                    className={cn(
                      "absolute h-0.5 w-7 rounded-full bg-current transition-transform duration-300 ease-out",
                      menuOpen ? "translate-y-0 rotate-45" : "-translate-y-2 rotate-0",
                    )}
                  />
                  <span
                    className={cn(
                      "absolute h-0.5 w-7 rounded-full bg-current transition-all duration-200 ease-out",
                      menuOpen ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100",
                    )}
                  />
                  <span
                    className={cn(
                      "absolute h-0.5 w-7 rounded-full bg-current transition-transform duration-300 ease-out",
                      menuOpen ? "translate-y-0 -rotate-45" : "translate-y-2 rotate-0",
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
              <div className="flex w-full flex-col">
                {menuNav.map((item, index) => {
                  const active = isActive(pathname, item.href);
                  const showTriangle = hoveredMenuHref === item.href || (hoveredMenuHref === null && active);

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => {
                        setMenuOpen(false);
                        setHoveredMenuHref(null);
                      }}
                      onMouseEnter={() => setHoveredMenuHref(item.href)}
                      onMouseLeave={() => setHoveredMenuHref(null)}
                      tabIndex={menuOpen ? 0 : -1}
                      className={cn(
                        "flex h-14 w-full items-center justify-between px-0 text-[1.375rem] font-medium leading-none transition sm:text-[1.5rem]",
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
                      <span className="flex min-w-0 items-center gap-3">
                        <span
                          className={cn(
                            "relative flex size-[1.375rem] shrink-0 items-center justify-center transition-opacity duration-150 sm:size-6",
                            showTriangle ? "opacity-100" : "opacity-0",
                          )}
                          aria-hidden="true"
                        >
                          <span className="absolute h-[1em] w-[1.1547em] bg-current [clip-path:polygon(50%_0,100%_100%,0_100%)]" />
                        </span>
                        {item.label}
                      </span>
                      <ChevronRight className="size-6" />
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
