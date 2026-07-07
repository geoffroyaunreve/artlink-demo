"use client";

import { useMemo, useState } from "react";
import { ChevronDown, Filter, Search, SlidersHorizontal } from "lucide-react";
import type { CostLevel, Opportunity } from "@/data/mockData";
import { opportunities } from "@/data/mockData";
import { OpportunityCard } from "@/components/OpportunityCard";
import { cn, searchText } from "@/lib/utils";

const allLabel = "全部";

const types = [allLabel, ...Array.from(new Set(opportunities.map((item) => item.type)))];
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

const continentOptions = [
  { key: "Asia", label: "亚洲" },
  { key: "Europe", label: "欧洲" },
  { key: "North America", label: "北美" },
  { key: "South America", label: "南美" },
  { key: "Oceania", label: "大洋洲" },
] as const;

type RegionKey = (typeof continentOptions)[number]["key"];
type RegionFilter = RegionKey | typeof allLabel;
type QuickFilter = (typeof quickFilters)[number]["key"];

const regionLabels: Record<RegionKey, string> = {
  Asia: "亚洲",
  Europe: "欧洲",
  "North America": "北美",
  "South America": "南美",
  Oceania: "大洋洲",
};

const countryRegionFallback: Record<string, RegionKey> = {
  中国: "Asia",
  中国台湾: "Asia",
  日本: "Asia",
  韩国: "Asia",
  泰国: "Asia",
  印度尼西亚: "Asia",
  印度: "Asia",
  新加坡: "Asia",
  马来西亚: "Asia",
  芬兰: "Europe",
  德国: "Europe",
  荷兰: "Europe",
  葡萄牙: "Europe",
  捷克: "Europe",
  西班牙: "Europe",
  奥地利: "Europe",
  爱沙尼亚: "Europe",
  英国: "Europe",
  希腊: "Europe",
  瑞士: "Europe",
  丹麦: "Europe",
  法国: "Europe",
  爱尔兰: "Europe",
  加拿大: "North America",
  美国: "North America",
  墨西哥: "North America",
  巴西: "South America",
  阿根廷: "South America",
  智利: "South America",
  哥伦比亚: "South America",
  秘鲁: "South America",
  澳大利亚: "Oceania",
  新西兰: "Oceania",
};

function getOpportunityRegion(
  opportunity: Pick<Opportunity, "country" | "region">,
): RegionKey | undefined {
  if (
    opportunity.region &&
    continentOptions.some((option) => option.key === opportunity.region)
  ) {
    return opportunity.region as RegionKey;
  }

  return countryRegionFallback[opportunity.country];
}

const countriesByRegion: Record<RegionKey, string[]> = continentOptions.reduce(
  (result, option) => {
    result[option.key] = Array.from(
      new Set(
        opportunities
          .filter((opportunity) => getOpportunityRegion(opportunity) === option.key)
          .map((opportunity) => opportunity.country),
      ),
    ).sort((first, second) => first.localeCompare(second, "zh-Hans-CN"));

    return result;
  },
  {} as Record<RegionKey, string[]>,
);

export function OpportunityExplorer() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState(allLabel);
  const [region, setRegion] = useState<RegionFilter>(allLabel);
  const [country, setCountry] = useState(allLabel);
  const [isRegionOpen, setIsRegionOpen] = useState(false);
  const [costLevel, setCostLevel] = useState<CostLevel | typeof allLabel>(allLabel);
  const [activeQuickFilters, setActiveQuickFilters] = useState<QuickFilter[]>([]);

  const regionCountries = region === allLabel ? [] : countriesByRegion[region];
  const regionButtonLabel =
    country !== allLabel
      ? `${region === allLabel ? "" : `${regionLabels[region]} / `}${country}`
      : region === allLabel
        ? allLabel
        : regionLabels[region];

  const filtered = useMemo(() => {
    const normalizedQuery = searchText(query);

    return opportunities.filter((opportunity) => {
      const opportunityRegion = getOpportunityRegion(opportunity);
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
        (region === allLabel || opportunityRegion === region) &&
        (country === allLabel || opportunity.country === country) &&
        (costLevel === allLabel || opportunity.costLevel === costLevel) &&
        matchesQuickFilters
      );
    });
  }, [activeQuickFilters, costLevel, country, query, region, type]);

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

        <div className="mt-5 space-y-4">
          <div className="grid gap-3 lg:grid-cols-[110px_minmax(0,1fr)_220px_180px] lg:items-start">
            <p className="pt-2 text-sm font-medium text-zinc-500">
              按项目类别：
            </p>
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

            <div className="relative">
              <button
                type="button"
                onClick={() => setIsRegionOpen((current) => !current)}
                className={cn(
                  "flex h-10 w-full items-center gap-2 rounded-full border bg-white px-4 text-sm text-zinc-600 transition",
                  isRegionOpen ? "border-zinc-950" : "border-zinc-200 hover:border-zinc-400",
                )}
                aria-expanded={isRegionOpen}
              >
                <span className="shrink-0 text-xs font-medium text-zinc-500">地区</span>
                <span className="min-w-0 flex-1 truncate text-left">{regionButtonLabel}</span>
                <ChevronDown
                  className={cn(
                    "size-4 shrink-0 transition",
                    isRegionOpen ? "rotate-180" : "",
                  )}
                />
              </button>

              {isRegionOpen ? (
                <div className="absolute right-0 z-30 mt-2 w-[min(24rem,calc(100vw-3rem))] rounded-3xl border border-zinc-200 bg-white p-4 shadow-[0_18px_45px_rgba(0,0,0,0.12)]">
                  <p className="text-xs font-medium text-zinc-400">先按大洲</p>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setRegion(allLabel);
                        setCountry(allLabel);
                      }}
                      className={cn(
                        "h-9 rounded-full border px-3 text-sm transition",
                        region === allLabel
                          ? "border-zinc-950 bg-zinc-950 text-white"
                          : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-400",
                      )}
                    >
                      全部地区
                    </button>
                    {continentOptions.map((option) => (
                      <button
                        key={option.key}
                        type="button"
                        onClick={() => {
                          setRegion(option.key);
                          setCountry(allLabel);
                        }}
                        className={cn(
                          "h-9 rounded-full border px-3 text-sm transition",
                          region === option.key
                            ? "border-zinc-950 bg-zinc-950 text-white"
                            : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-400",
                        )}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>

                  {region !== allLabel ? (
                    <div className="mt-4 border-t border-zinc-100 pt-4">
                      <p className="text-xs font-medium text-zinc-400">
                        {regionLabels[region]}已有项目国家
                      </p>
                      <div className="mt-2 flex max-h-40 flex-wrap gap-2 overflow-y-auto pr-1">
                        <button
                          type="button"
                          onClick={() => {
                            setCountry(allLabel);
                            setIsRegionOpen(false);
                          }}
                          className={cn(
                            "h-9 rounded-full border px-3 text-sm transition",
                            country === allLabel
                              ? "border-zinc-950 bg-zinc-950 text-white"
                              : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-400",
                          )}
                        >
                          该大洲全部
                        </button>
                        {regionCountries.map((item) => (
                          <button
                            key={item}
                            type="button"
                            onClick={() => {
                              setCountry(item);
                              setIsRegionOpen(false);
                            }}
                            className={cn(
                              "h-9 rounded-full border px-3 text-sm transition",
                              country === item
                                ? "border-zinc-950 bg-zinc-950 text-white"
                                : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-400",
                            )}
                          >
                            {item}
                          </button>
                        ))}
                        {!regionCountries.length ? (
                          <p className="text-sm text-zinc-400">
                            当前数据里暂时没有该大洲的项目。
                          </p>
                        ) : null}
                      </div>
                    </div>
                  ) : null}
                </div>
              ) : null}
            </div>

            <label className="flex h-10 items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 text-sm text-zinc-600 transition focus-within:border-zinc-950">
              <span className="shrink-0 text-xs font-medium text-zinc-500">成本</span>
              <select
                value={costLevel}
                onChange={(event) =>
                  setCostLevel(event.target.value as CostLevel | typeof allLabel)
                }
                className="min-w-0 flex-1 bg-transparent text-sm outline-none"
              >
                {costLevels.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
          </div>

          <div className="grid gap-3 lg:grid-cols-[110px_minmax(0,1fr)] lg:items-start">
            <p className="pt-1.5 text-sm font-medium text-zinc-500">
              按其他条件：
            </p>
            <div className="flex flex-wrap gap-2">
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
          </div>
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
        <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((opportunity) => (
            <OpportunityCard
              key={opportunity.slug}
              opportunity={opportunity}
              compact
              className="h-[520px]"
            />
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
