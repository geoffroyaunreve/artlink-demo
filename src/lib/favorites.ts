export const FAVORITES_STORAGE_KEY = "artlink.favoriteResidencies";
export const FAVORITES_UPDATED_EVENT = "artlink:favorites-updated";

export function readFavoriteSlugs() {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(FAVORITES_STORAGE_KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : [];

    return Array.isArray(parsed)
      ? parsed.filter((item): item is string => typeof item === "string")
      : [];
  } catch {
    return [];
  }
}

export function writeFavoriteSlugs(slugs: string[]) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(slugs));
  window.dispatchEvent(new CustomEvent(FAVORITES_UPDATED_EVENT, { detail: slugs }));
}

export function toggleFavoriteSlug(slug: string) {
  const current = readFavoriteSlugs();
  const next = current.includes(slug)
    ? current.filter((item) => item !== slug)
    : [...current, slug];

  writeFavoriteSlugs(next);
  return next.includes(slug);
}
