"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import {
  FAVORITES_UPDATED_EVENT,
  readFavoriteSlugs,
  toggleFavoriteSlug,
} from "@/lib/favorites";
import { cn } from "@/lib/utils";

type FavoriteButtonProps = {
  slug: string;
  title: string;
  className?: string;
};

export function FavoriteButton({ slug, title, className }: FavoriteButtonProps) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    function syncSavedState() {
      setSaved(readFavoriteSlugs().includes(slug));
    }

    syncSavedState();
    window.addEventListener(FAVORITES_UPDATED_EVENT, syncSavedState);
    window.addEventListener("storage", syncSavedState);

    return () => {
      window.removeEventListener(FAVORITES_UPDATED_EVENT, syncSavedState);
      window.removeEventListener("storage", syncSavedState);
    };
  }, [slug]);

  return (
    <button
      type="button"
      aria-label={saved ? `取消收藏 ${title}` : `收藏 ${title}`}
      aria-pressed={saved}
      title={saved ? "取消收藏" : "收藏驻留"}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        setSaved(toggleFavoriteSlug(slug));
      }}
      className={cn(
        "inline-flex size-10 items-center justify-center rounded-full border border-white/70 bg-white/90 text-zinc-950 shadow-[0_8px_18px_rgba(24,24,27,0.14)] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white",
        saved ? "border-amber-200 bg-amber-50 text-amber-700" : "",
        className,
      )}
    >
      <Star className={cn("size-4", saved ? "fill-current" : "")} />
    </button>
  );
}
