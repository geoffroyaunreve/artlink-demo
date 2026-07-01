"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { artists } from "@/data/mockData";
import { ArtistCard } from "@/components/ArtistCard";
import { cn, searchText } from "@/lib/utils";

const allLabel = "全部";

const disciplines = [
  allLabel,
  ...Array.from(new Set(artists.map((artist) => artist.discipline))),
];

const locations = [
  allLabel,
  ...Array.from(new Set(artists.map((artist) => artist.location))),
];

const tags = [allLabel, ...Array.from(new Set(artists.flatMap((artist) => artist.tags)))];

export function ArtistExplorer() {
  const [query, setQuery] = useState("");
  const [discipline, setDiscipline] = useState(allLabel);
  const [location, setLocation] = useState(allLabel);
  const [tag, setTag] = useState(allLabel);

  const filtered = useMemo(() => {
    const normalizedQuery = searchText(query);

    return artists.filter((artist) => {
      const searchable = searchText(
        [
          artist.name,
          artist.location,
          artist.discipline,
          artist.tags.join(" "),
          artist.statement,
          artist.bio,
        ].join(" "),
      );

      return (
        (!normalizedQuery || searchable.includes(normalizedQuery)) &&
        (discipline === allLabel || artist.discipline === discipline) &&
        (location === allLabel || artist.location === location) &&
        (tag === allLabel || artist.tags.includes(tag))
      );
    });
  }, [discipline, location, query, tag]);

  return (
    <div className="space-y-5">
      <section className="rounded-2xl border border-zinc-200 bg-white p-5">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center">
          <div>
            <p className="flex items-center gap-2 text-sm font-medium text-zinc-500">
              <SlidersHorizontal className="size-4" />
              艺术家筛选
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight">
              浏览作品集主页
            </h1>
          </div>

          <label className="relative ml-auto block w-full xl:max-w-md">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-400" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="h-11 w-full rounded-full border border-zinc-200 bg-zinc-50 pl-10 pr-4 text-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-950 focus:bg-white"
              placeholder="搜索艺术家、媒介、城市或驻留方向"
            />
          </label>
        </div>

        <div className="mt-5 grid gap-3 lg:grid-cols-[1fr_190px_190px]">
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 10).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setTag(item)}
                className={cn(
                  "h-10 rounded-full border px-4 text-sm transition",
                  tag === item
                    ? "border-zinc-950 bg-zinc-950 text-white"
                    : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-400",
                )}
              >
                {item}
              </button>
            ))}
          </div>

          <select
            value={discipline}
            onChange={(event) => setDiscipline(event.target.value)}
            className="h-10 rounded-full border border-zinc-200 bg-white px-4 text-sm text-zinc-600 outline-none focus:border-zinc-950"
          >
            {disciplines.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>

          <select
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            className="h-10 rounded-full border border-zinc-200 bg-white px-4 text-sm text-zinc-600 outline-none focus:border-zinc-950"
          >
            {locations.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
      </section>

      <div className="flex items-center justify-between">
        <p className="text-sm text-zinc-500">共 {filtered.length} 位艺术家</p>
        <p className="text-sm text-zinc-400">按媒介、阶段和驻留申请方向匹配</p>
      </div>

      {filtered.length ? (
        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((artist) => (
            <ArtistCard key={artist.slug} artist={artist} />
          ))}
        </section>
      ) : (
        <section className="rounded-2xl border border-dashed border-zinc-300 bg-white p-10 text-center">
          <p className="text-lg font-semibold">暂时没有符合条件的艺术家</p>
          <p className="mt-2 text-sm text-zinc-500">调整筛选条件后再试一次。</p>
        </section>
      )}
    </div>
  );
}
