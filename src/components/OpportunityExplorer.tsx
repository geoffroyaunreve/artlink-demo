"use client";

import { useMemo, useState } from "react";
import { Filter, Search, SlidersHorizontal } from "lucide-react";
import type { CostLevel } from "@/data/mockData";
import { opportunities } from "@/data/mockData";
import { OpportunityCard } from "@/components/OpportunityCard";
import { cn, searchText } from "@/lib/utils";

const allLabel = "全部";

const types = [allLabel, ...Array.from(new Set(opportunities.map((item) => item.type)))];
const locations = [
  allLabel,
  ...Array.from(new Set(opportunities.map((item) => item.location))),
];
const costLevels: Array<CostLevel | typeof allLabel> = [
  allLabel,
  "低成本",
  "中等成本",
  "高成本",
  "需进一步确认",
];

const quickFilters = [
  { key: "noFee", label: "无申请费" },
  { key: "housing", label: "提供住宿" },
  { key: "stipend", label: "提供补贴" },
  { key: "students", label: "接受学生" },
  { key: "international", label: "接受国际申请者" },
] as const;

type QuickFilter = (typeof quickFilters)[number]["key"];

export function OpportunityExplorer() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState(allLabel);
  const [location, setLocation] = useState(allLabel);
  const [costLevel, setCostLevel] = useState<CostLevel | typeof allLabel>(allLabel);
  const [activeQuickFilters, setActiveQuickFilters] = useState<QuickFilter[]>([]);

  const filtered = useMemo(() => {
    const normalizedQuery = searchText(query);

    return opportunities.filter((opportunity) => {
      const searchable = searchText(
        [
          opportunity.title,
          opportunity.institution,
          opportunity.type,
          opportunity.location,
          opportunity.disciplines.join(" "),
          opportunity.trustTags.join(" "),
          opportunity.riskTags.join(" "),
          opportunity.summary,
        ].join(" "),
      );

      const matchesQuickFilters = activeQuickFilters.every((filter) => {
        if (filter === "noFee") {
          return opportunity.costs.applicationFee.includes("无");
        }
        if (filter === "housing") {
          return opportunity.costs.accommodation.includes("提供");
        }
        if (filter === "stipend") {
          return !opportunity.costs.stipend.includes("无");
        }
        if (filter === "students") {
          return opportunity.acceptsStudents;
        }
        if (filter === "international") {
          return opportunity.acceptsInternational;
        }
        return true;
      });

      return (
        (!normalizedQuery || searchable.includes(normalizedQuery)) &&
        (type === allLabel || opportunity.type === type) &&
        (location === allLabel || opportunity.location === location) &&
        (costLevel === allLabel || opportunity.costLevel === costLevel) &&
        matchesQuickFilters
      );
    });
  }, [activeQuickFilters, costLevel, location, query, type]);

  function toggleQuickFilter(filter: QuickFilter) {
    setActiveQuickFilters((current) =>
      current.includes(filter)
        ? current.filter((item) => item !== filter)
        : [...current, filter],
    );
  }

  return (
    <div className="space-y-5">
      <section className="rounded-2xl border border-zinc-200 bg-white p-5">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center">
          <div>
            <p className="flex items-center gap-2 text-sm font-medium text-zinc-500">
              <SlidersHorizontal className="size-4" />
              驻留筛选
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight">
              找到适合你的可信驻留项目
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500">
              按媒介、成本、住宿、语言和申请资格筛选，不只看项目标题，也看现实条件是否可行。
            </p>
          </div>

          <label className="relative ml-auto block w-full xl:max-w-md">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-400" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="h-11 w-full rounded-full border border-zinc-200 bg-zinc-50 pl-10 pr-4 text-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-950 focus:bg-white"
              placeholder="搜索国家、城市、机构、媒介或费用条件"
            />
          </label>
        </div>

        <div className="mt-5 grid gap-3 lg:grid-cols-[1fr_200px_200px]">
          <div className="flex flex-wrap gap-2">
            {types.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setType(item)}
                className={cn(
                  "h-10 rounded-full border px-4 text-sm transition",
                  type === item
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
            value={costLevel}
            onChange={(event) =>
              setCostLevel(event.target.value as CostLevel | typeof allLabel)
            }
            className="h-10 rounded-full border border-zinc-200 bg-white px-4 text-sm text-zinc-600 outline-none focus:border-zinc-950"
          >
            {costLevels.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {quickFilters.map((filter) => (
            <button
              key={filter.key}
              type="button"
              onClick={() => toggleQuickFilter(filter.key)}
              className={cn(
                "h-9 rounded-full border px-3 text-sm transition",
                activeQuickFilters.includes(filter.key)
                  ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                  : "border-zinc-200 bg-white text-zinc-500 hover:border-zinc-400",
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </section>

      <div className="flex items-center justify-between">
        <p className="text-sm text-zinc-500">共 {filtered.length} 个精选驻留项目</p>
        <p className="hidden items-center gap-2 text-sm text-zinc-400 sm:flex">
          <Filter className="size-4" />
          已按现实条件筛选
        </p>
      </div>

      {filtered.length ? (
        <section className="grid gap-5 xl:grid-cols-2 2xl:grid-cols-3">
          {filtered.map((opportunity) => (
            <OpportunityCard key={opportunity.slug} opportunity={opportunity} />
          ))}
        </section>
      ) : (
        <section className="rounded-2xl border border-dashed border-zinc-300 bg-white p-10 text-center">
          <p className="text-lg font-semibold">暂时没有符合条件的驻留项目</p>
          <p className="mt-2 text-sm text-zinc-500">放宽成本、住宿或申请资格条件后再试一次。</p>
        </section>
      )}
    </div>
  );
}
