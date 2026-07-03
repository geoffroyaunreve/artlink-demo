import Image from "next/image";
import Link from "next/link";
import { BedDouble, CalendarDays, Globe2, MapPin, WalletCards } from "lucide-react";
import type { Opportunity } from "@/data/mockData";
import { ActionButton } from "@/components/ActionButton";
import { StatusBadge } from "@/components/StatusBadge";
import { cn } from "@/lib/utils";

type OpportunityCardProps = {
  opportunity: Opportunity;
  compact?: boolean;
  className?: string;
};

export function OpportunityCard({
  opportunity,
  compact = false,
  className,
}: OpportunityCardProps) {
  const facts = [
    `${opportunity.country} / ${opportunity.city}`,
    opportunity.duration,
    `截止 ${opportunity.deadline}`,
    opportunity.costLevel,
  ];

  return (
    <article
      className={cn(
        "overflow-hidden rounded-3xl border border-zinc-200 bg-white transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-sm",
        compact ? "flex h-full flex-col" : "",
        className,
      )}
    >
      <Link href={`/opportunities/${opportunity.slug}`} className="block">
        <div className={cn("relative bg-zinc-100", compact ? "h-28" : "h-40")}>
          <Image
            src={opportunity.image}
            alt={opportunity.title}
            fill
            sizes="(min-width: 1280px) 320px, (min-width: 768px) 50vw, 100vw"
            className="object-cover grayscale-[10%]"
          />
          <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-zinc-950">
            匹配度 {opportunity.matchScore}%
          </div>
        </div>
      </Link>

      <div
        className={cn(
          compact
            ? "min-h-0 flex-1 space-y-3 overflow-hidden p-3"
            : "space-y-4 p-4",
        )}
      >
        <div className={cn("flex items-start justify-between", compact ? "gap-2" : "gap-3")}>
          <Link
            href={`/opportunities/${opportunity.slug}`}
            className={cn(
              "line-clamp-2 font-semibold text-zinc-950 hover:underline",
              compact ? "text-sm leading-5" : "text-base leading-6",
            )}
          >
            {opportunity.title}
          </Link>
          <StatusBadge
            status={opportunity.status}
            label={opportunity.statusLabel}
            className="shrink-0"
          />
        </div>

        <div>
          <p className={cn("text-zinc-600", compact ? "text-xs" : "text-sm")}>
            {opportunity.institution}
          </p>
          <p
            className={cn(
              "mt-2 flex items-center gap-1 text-zinc-500",
              compact ? "text-xs leading-5" : "text-sm",
            )}
          >
            <MapPin className="size-3.5" />
            {facts.join(" · ")}
          </p>
        </div>

        <div
          className={cn(
            "grid text-zinc-600",
            compact ? "grid-cols-1 gap-1.5 text-[11px] leading-4" : "gap-2 text-xs sm:grid-cols-2",
          )}
        >
          <p className={cn("flex items-center gap-2 rounded-lg bg-zinc-50", compact ? "px-2 py-1.5" : "px-3 py-2")}>
            <WalletCards className="size-3.5" />
            {opportunity.costs.applicationFee} / {opportunity.costs.programFee}
          </p>
          <p className={cn("flex items-center gap-2 rounded-lg bg-zinc-50", compact ? "px-2 py-1.5" : "px-3 py-2")}>
            <BedDouble className="size-3.5" />
            {opportunity.costs.accommodation}
          </p>
          <p className={cn("flex items-center gap-2 rounded-lg bg-zinc-50", compact ? "px-2 py-1.5" : "px-3 py-2")}>
            <CalendarDays className="size-3.5" />
            {opportunity.costs.stipend}
          </p>
          <p className={cn("flex items-center gap-2 rounded-lg bg-zinc-50", compact ? "px-2 py-1.5" : "px-3 py-2")}>
            <Globe2 className="size-3.5" />
            {opportunity.languages.join(" / ")}
          </p>
        </div>

        <div className={cn("flex flex-wrap", compact ? "gap-1.5" : "gap-2")}>
          {opportunity.trustTags.slice(0, compact ? 3 : 5).map((tag) => (
            <span
              key={tag}
              className={cn(
                "rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700",
                compact ? "px-2 py-0.5 text-[11px]" : "px-2.5 py-1 text-xs",
              )}
            >
              {tag}
            </span>
          ))}
          {opportunity.riskTags.slice(0, compact ? 1 : 3).map((tag) => (
            <span
              key={tag}
              className={cn(
                "rounded-full border border-amber-200 bg-amber-50 text-amber-700",
                compact ? "px-2 py-0.5 text-[11px]" : "px-2.5 py-1 text-xs",
              )}
            >
              {tag}
            </span>
          ))}
        </div>

        <p className={cn("line-clamp-3 text-zinc-500", compact ? "text-xs leading-5" : "text-sm leading-6")}>
          {opportunity.recommendation}
        </p>

        {!compact ? (
          <div className="flex flex-col gap-2 sm:flex-row">
            <Link
              href={`/opportunities/${opportunity.slug}`}
              className="inline-flex h-10 flex-1 items-center justify-center rounded-full bg-zinc-950 px-4 text-sm font-medium text-white transition hover:bg-zinc-800"
            >
              查看详情
            </Link>
            <ActionButton
              label="加入申请清单"
              successLabel="已加入清单"
              variant="light"
              className="h-10 flex-1 px-4"
            />
            <ActionButton
              label="开始准备材料"
              successLabel="已创建材料任务"
              variant="light"
              className="h-10 flex-1 px-4"
            />
          </div>
        ) : null}
      </div>
    </article>
  );
}
