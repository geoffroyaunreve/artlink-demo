"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import type { Opportunity } from "@/data/mockData";
import { opportunities } from "@/data/mockData";
import { OpportunityCard } from "@/components/OpportunityCard";
import { FAVORITES_UPDATED_EVENT, readFavoriteSlugs } from "@/lib/favorites";

export function ProfileFavorites() {
  const [favoriteSlugs, setFavoriteSlugs] = useState<string[]>([]);

  useEffect(() => {
    function syncFavorites() {
      setFavoriteSlugs(readFavoriteSlugs());
    }

    syncFavorites();
    window.addEventListener(FAVORITES_UPDATED_EVENT, syncFavorites);
    window.addEventListener("storage", syncFavorites);

    return () => {
      window.removeEventListener(FAVORITES_UPDATED_EVENT, syncFavorites);
      window.removeEventListener("storage", syncFavorites);
    };
  }, []);

  const favoriteOpportunities = useMemo(
    () =>
      favoriteSlugs
        .map((slug) => opportunities.find((opportunity) => opportunity.slug === slug))
        .filter((opportunity): opportunity is Opportunity => Boolean(opportunity)),
    [favoriteSlugs],
  );

  return (
    <section className="bg-[var(--color-paper)]">
      <div className="editorial-band-inner">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-zinc-600">
              <Star className="size-4" /> Saved residencies
            </p>
            <h2 className="mt-5 text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl">收藏驻留</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600">
              点击项目右上角的五角星后，会保存在这里，方便继续比较费用、截止日期和材料要求。
            </p>
          </div>
          <Link href="/opportunities" className="text-arrow-action text-zinc-950">
            浏览更多
            <ArrowRight className="size-4" />
          </Link>
        </div>

        {favoriteOpportunities.length ? (
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {favoriteOpportunities.map((opportunity) => (
              <OpportunityCard key={opportunity.slug} opportunity={opportunity} compact className="h-full" />
            ))}
          </div>
        ) : (
          <div className="mt-10 border-y border-dashed border-black/30 py-12 text-center">
            <p className="text-lg font-bold text-zinc-950">还没有收藏驻留项目</p>
            <p className="mt-3 text-sm leading-7 text-zinc-600">
              去驻留机会页点亮项目卡片右上角的五角星，这里会自动出现你的收藏列表。
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
