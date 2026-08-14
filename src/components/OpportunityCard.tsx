import Link from "next/link";
import { ArrowRight, BadgeCheck, BedDouble, CalendarDays, Globe2, MapPin, WalletCards } from "lucide-react";
import type { Opportunity } from "@/data/mockData";
import { ActionButton } from "@/components/ActionButton";
import { FavoriteButton } from "@/components/FavoriteButton";
import { ResidencyArtwork } from "@/components/ResidencyArtwork";
import { cn } from "@/lib/utils";

type OpportunityCardProps = {
  opportunity: Opportunity;
  compact?: boolean;
  appearance?: "surface" | "editorial";
  className?: string;
};

const advantagePriority = [
  "适合首次驻留",
  "适合青年艺术家",
  "接受学生申请",
  "接受中国申请者",
  "接受国际申请者",
];

function selectConditionTag(opportunity: Opportunity) {
  if (
    opportunity.costs.applicationFee.includes("无申请费") ||
    opportunity.trustTags.includes("无申请费")
  ) {
    return "无申请费";
  }

  const accommodationTag = opportunity.trustTags.find((tag) =>
    tag.includes("住宿补贴"),
  );
  if (accommodationTag || opportunity.costs.accommodation.includes("住宿补贴")) {
    return accommodationTag ?? "提供住宿补贴";
  }

  if (
    opportunity.trustTags.some((tag) => tag.includes("提供住宿")) ||
    (opportunity.costs.accommodation.includes("提供") &&
      !opportunity.costs.accommodation.includes("自理") &&
      !opportunity.costs.accommodation.includes("未说明"))
  ) {
    return "提供住宿";
  }

  if (
    opportunity.trustTags.some((tag) => tag.includes("提供工作室")) ||
    opportunity.costs.studio.includes("提供")
  ) {
    return "提供工作室";
  }

  return opportunity.trustTags.includes("费用透明") ? "费用透明" : undefined;
}

function selectAdvantageTag(opportunity: Opportunity) {
  return advantagePriority.find((tag) => opportunity.trustTags.includes(tag));
}

function selectRiskTag(opportunity: Opportunity) {
  if (
    opportunity.costLevel === "高成本" ||
    opportunity.riskTags.some((tag) => tag.includes("项目费较高"))
  ) {
    return "项目费较高";
  }

  const riskPriority = [
    /住宿需自理|住宿未说明|住宿需确认/,
    /无生活补贴|生活补贴未说明|仅提供住宿补贴/,
    /需自理机票|需自理交通|交通需自理/,
    /需自备/,
    /需英文材料/,
  ];

  for (const pattern of riskPriority) {
    const match = opportunity.riskTags.find((tag) => pattern.test(tag));
    if (match) {
      return match;
    }
  }

  return opportunity.riskTags[0];
}

export function OpportunityCard({
  opportunity,
  compact = false,
  appearance = "surface",
  className,
}: OpportunityCardProps) {
  const editorial = appearance === "editorial";
  const showStatus = opportunity.status === "closing" || opportunity.status === "reviewing";
  const conditionTag = selectConditionTag(opportunity);
  const advantageTag = selectAdvantageTag(opportunity);
  const riskTag = selectRiskTag(opportunity);
  const facts = [
    `${opportunity.country} / ${opportunity.city}`,
    opportunity.duration,
    `截止 ${opportunity.deadline}`,
    opportunity.costLevel,
  ];

  return (
    <article
      className={cn(
        editorial
          ? "border-t border-black/25"
          : "border border-zinc-200 transition hover:-translate-y-0.5 hover:border-zinc-300",
        compact ? "flex h-full flex-col" : "",
        className,
      )}
    >
      <div className="flex h-6 items-end">
        {showStatus ? (
          <span
            className={cn(
              "inline-flex h-6 w-[136px] items-center justify-start px-2.5 text-left text-[11px] font-bold text-[var(--color-paper)]",
              opportunity.status === "closing"
                ? "bg-[#75483A]"
                : "bg-[#365563]",
            )}
          >
            {opportunity.statusLabel}
          </span>
        ) : null}
      </div>

      <div
        className={cn(
          "relative bg-zinc-100",
          compact ? (editorial ? "h-48" : "h-28") : "h-40",
          editorial ? "overflow-hidden" : "",
        )}
      >
        <Link
          href={`/opportunities/${opportunity.slug}`}
          className="relative block h-full"
          aria-label={`查看${opportunity.title}详情`}
        >
          <ResidencyArtwork
            slug={opportunity.slug}
            category={opportunity.category}
          />
        </Link>
        <FavoriteButton
          slug={opportunity.slug}
          title={opportunity.title}
          className="absolute right-3 top-3 z-10"
        />
      </div>

      <div
        className={cn(
          "flex-1 bg-white",
          compact
            ? "space-y-3 p-4"
            : "space-y-4 p-4",
        )}
      >
        <div className={cn("flex items-start justify-between", compact ? "gap-3" : "gap-4")}>
          <Link
            href={`/opportunities/${opportunity.slug}`}
            className={cn(
              "min-w-0 line-clamp-2 font-semibold text-zinc-950 hover:underline",
              compact ? "text-sm leading-5" : "text-base leading-6",
            )}
          >
            {opportunity.title}
          </Link>
          <div className="shrink-0 text-right text-zinc-950">
            <p className="text-[10px] font-bold leading-none tracking-[0.08em] text-zinc-500">匹配度</p>
            <p className={cn("mt-1 font-bold leading-none tracking-tight", compact ? "text-[30px]" : "text-[32px]")}>
              {opportunity.matchScore}%
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-1.5">
            <p className={cn("min-w-0 truncate text-zinc-600", compact ? "text-xs" : "text-sm")}>
              {opportunity.institution}
            </p>
            {opportunity.institutionCertification === "机构已认证" ? (
              <span
                className="shrink-0 text-zinc-700"
                aria-label="已认证机构"
                title="已认证机构"
              >
                <BadgeCheck className="size-4" aria-hidden="true" />
              </span>
            ) : null}
          </div>
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
            "grid gap-0 border-y border-black/15 text-zinc-600",
            compact ? "grid-cols-1 text-[11px] leading-4" : "text-xs sm:grid-cols-2",
          )}
        >
          <p className={cn("flex items-center gap-2 border-b border-black/10 last:border-b-0", compact ? "px-2 py-1.5" : "px-3 py-2")}>
            <WalletCards className="size-3.5" />
            {opportunity.costs.applicationFee} / {opportunity.costs.programFee}
          </p>
          <p className={cn("flex items-center gap-2 border-b border-black/10 last:border-b-0", compact ? "px-2 py-1.5" : "px-3 py-2")}>
            <BedDouble className="size-3.5" />
            {opportunity.costs.accommodation}
          </p>
          <p className={cn("flex items-center gap-2 border-b border-black/10 last:border-b-0", compact ? "px-2 py-1.5" : "px-3 py-2")}>
            <CalendarDays className="size-3.5" />
            {opportunity.costs.stipend}
          </p>
          <p className={cn("flex items-center gap-2 border-b border-black/10 last:border-b-0", compact ? "px-2 py-1.5" : "px-3 py-2")}>
            <Globe2 className="size-3.5" />
            {opportunity.languages.join(" / ")}
          </p>
        </div>

        {conditionTag || advantageTag || riskTag ? (
          <div className="flex flex-wrap gap-y-1">
            {conditionTag ? (
              <span className={cn("bg-[var(--color-mist)] px-2.5 py-1 font-semibold text-[var(--color-ink)]", compact ? "text-[11px]" : "text-xs")}>
                {conditionTag}
              </span>
            ) : null}
            {advantageTag ? (
              <span className={cn("bg-[var(--color-sage)] px-2.5 py-1 font-semibold text-[var(--color-ink)]", compact ? "text-[11px]" : "text-xs")}>
                {advantageTag}
              </span>
            ) : null}
            {riskTag ? (
              <span className={cn("bg-[var(--color-clay)] px-2.5 py-1 font-semibold text-[var(--color-ink)]", compact ? "text-[11px]" : "text-xs")}>
                {riskTag}
              </span>
            ) : null}
          </div>
        ) : null}

        {!compact ? (
          <div className="flex flex-col gap-2 sm:flex-row">
            <Link
              href={`/opportunities/${opportunity.slug}`}
              className="text-arrow-action text-zinc-950"
            >
              查看详情
              <ArrowRight className="size-4" />
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
