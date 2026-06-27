"use client";

import { useMemo, useState } from "react";
import { Filter, Search, SlidersHorizontal } from "lucide-react";
import { opportunities } from "@/data/mockData";
import { OpportunityCard } from "@/components/OpportunityCard";
import { cn, searchText } from "@/lib/utils";

const allLabel = "全部";

const categories = [
  allLabel,
  ...Array.from(new Set(opportunities.map((opportunity) => opportunity.category))),
];

const locations = [
  allLabel,
  ...Array.from(new Set(opportunities.map((opportunity) => opportunity.location))),
];

const statuses = [
  { label: allLabel, value: allLabel },
  { label: "进行中", value: "open" },
  { label: "今日截止", value: "closing" },
  { label: "长期项目", value: "ongoing" },
];

export function OpportunityExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(allLabel);
  const [location, setLocation] = useState(allLabel);
  const [status, setStatus] = useState(allLabel);

  const filtered = useMemo(() => {
    const normalizedQuery = searchText(query);

    return opportunities.filter((opportunity) => {
      const searchable = searchText(
        [
          opportunity.title,
          opportunity.institution,
          opportunity.category,
          opportunity.location,
          opportunity.tags.join(" "),
          opportunity.summary,
        ].join(" "),
      );

      return (
        (!normalizedQuery || searchable.includes(normalizedQuery)) &&
        (category === allLabel || opportunity.category === category) &&
        (location === allLabel || opportunity.location === location) &&
        (status === allLabel || opportunity.status === status)
      );
    });
  }, [category, location, query, status]);

  return (
    <div className="space-y-5">
      <section className="rounded-2xl border border-zinc-200 bg-white p-5">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center">
          <div>
            <p className="flex items-center gap-2 text-sm font-medium text-zinc-500">
              <SlidersHorizontal className="size-4" />
              机会筛选
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight">
              发现适合的艺术项目
            </h1>
          </div>

          <label className="relative ml-auto block w-full xl:max-w-md">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-400" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="h-11 w-full rounded-full border border-zinc-200 bg-zinc-50 pl-10 pr-4 text-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-950 focus:bg-white"
              placeholder="搜索机会、机构、城市或关键词"
            />
          </label>
        </div>

        <div className="mt-5 grid gap-3 lg:grid-cols-[1fr_190px_190px]">
          <div className="flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={cn(
                  "h-10 rounded-full border px-4 text-sm transition",
                  category === item
                    ? "border-zinc-950 bg-zinc-950 text-white"
                    : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-400",
                )}
              >
                {item}
              </button>
            ))}
          </div>

          <select
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            className="h-10 rounded-full border border-zinc-200 bg-white px-4 text-sm text-zinc-600 outline-none focus:border-zinc-950"
          >
            {locations.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>

          <select
            value={status}
            onChange={(event) => setStatus(event.target.value)}
            className="h-10 rounded-full border border-zinc-200 bg-white px-4 text-sm text-zinc-600 outline-none focus:border-zinc-950"
          >
            {statuses.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
      </section>

      <div className="flex items-center justify-between">
        <p className="text-sm text-zinc-500">共 {filtered.length} 个项目机会</p>
        <p className="hidden items-center gap-2 text-sm text-zinc-400 sm:flex">
          <Filter className="size-4" />
          筛选已应用
        </p>
      </div>

      {filtered.length ? (
        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((opportunity) => (
            <OpportunityCard key={opportunity.slug} opportunity={opportunity} />
          ))}
        </section>
      ) : (
        <section className="rounded-2xl border border-dashed border-zinc-300 bg-white p-10 text-center">
          <p className="text-lg font-semibold">暂时没有符合条件的机会</p>
          <p className="mt-2 text-sm text-zinc-500">调整筛选条件后再试一次。</p>
        </section>
      )}
    </div>
  );
}
