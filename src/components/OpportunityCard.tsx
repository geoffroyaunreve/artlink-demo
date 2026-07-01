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
};

export function OpportunityCard({
  opportunity,
  compact = false,
}: OpportunityCardProps) {
  const facts = [
    `${opportunity.country} / ${opportunity.city}`,
    opportunity.duration,
    `截止 ${opportunity.deadline}`,
    opportunity.costLevel,
  ];

  return (
    <article className="overflow-hidden rounded-xl border border-zinc-200 bg-white transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-sm">
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

      <div className="space-y-4 p-4">
        <div className="flex items-start justify-between gap-3">
          <Link
            href={`/opportunities/${opportunity.slug}`}
            className="line-clamp-2 text-base font-semibold leading-6 text-zinc-950 hover:underline"
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
          <p className="text-sm text-zinc-600">{opportunity.institution}</p>
          <p className="mt-2 flex items-center gap-1 text-sm text-zinc-500">
            <MapPin className="size-3.5" />
            {facts.join(" · ")}
          </p>
        </div>

        <div className="grid gap-2 text-xs text-zinc-600 sm:grid-cols-2">
          <p className="flex items-center gap-2 rounded-lg bg-zinc-50 px-3 py-2">
            <WalletCards className="size-3.5" />
            {opportunity.costs.applicationFee} / {opportunity.costs.programFee}
          </p>
          <p className="flex items-center gap-2 rounded-lg bg-zinc-50 px-3 py-2">
            <BedDouble className="size-3.5" />
            {opportunity.costs.accommodation}
          </p>
          <p className="flex items-center gap-2 rounded-lg bg-zinc-50 px-3 py-2">
            <CalendarDays className="size-3.5" />
            {opportunity.costs.stipend}
          </p>
          <p className="flex items-center gap-2 rounded-lg bg-zinc-50 px-3 py-2">
            <Globe2 className="size-3.5" />
            {opportunity.languages.join(" / ")}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {opportunity.trustTags.slice(0, compact ? 3 : 5).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs text-emerald-700"
            >
              {tag}
            </span>
          ))}
          {opportunity.riskTags.slice(0, compact ? 1 : 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs text-amber-700"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="line-clamp-2 text-sm leading-6 text-zinc-500">
          {opportunity.recommendation}
        </p>

        {!compact ? (
          <div className="flex flex-col gap-2 sm:flex-row">
            <Link
              href={`/opportunities/${opportunity.slug}`}
              className="inline-flex h-10 flex-1 items-center justify-center rounded-lg bg-zinc-950 px-4 text-sm font-medium text-white transition hover:bg-zinc-800"
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
