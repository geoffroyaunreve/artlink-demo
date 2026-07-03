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
    <section className="rounded-3xl border border-zinc-200 bg-white p-5 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500">
            <Star className="size-4" />
            Saved residencies
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950">
            收藏驻留
          </h2>
          <p className="mt-2 text-sm leading-6 text-zinc-500">
            点击项目右上角的五角星后，会保存在这里，方便继续比较费用、截止日期和材料要求。
          </p>
        </div>
        <Link
          href="/opportunities"
          className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-zinc-950 px-5 text-sm font-medium text-white transition hover:bg-zinc-800"
        >
          浏览更多
          <ArrowRight className="size-4" />
        </Link>
      </div>

      {favoriteOpportunities.length ? (
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {favoriteOpportunities.map((opportunity) => (
            <OpportunityCard
              key={opportunity.slug}
              opportunity={opportunity}
              compact
              className="h-[545px]"
            />
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-3xl border border-dashed border-zinc-300 bg-[#fbfaf6] p-8 text-center">
          <p className="text-lg font-semibold text-zinc-950">还没有收藏驻留项目</p>
          <p className="mt-2 text-sm leading-6 text-zinc-500">
            去驻留机会页点亮项目卡片右上角的五角星，这里会自动出现你的收藏列表。
          </p>
        </div>
      )}
    </section>
  );
}
