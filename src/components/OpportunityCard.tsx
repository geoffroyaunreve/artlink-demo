import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import type { Opportunity } from "@/data/mockData";
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
  return (
    <article className="overflow-hidden rounded-xl border border-zinc-200 bg-white transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-sm">
      <Link href={`/opportunities/${opportunity.slug}`} className="block">
        <div className={cn("relative bg-zinc-100", compact ? "h-28" : "h-36")}>
          <Image
            src={opportunity.image}
            alt={opportunity.title}
            fill
            sizes="(min-width: 1280px) 280px, (min-width: 768px) 33vw, 100vw"
            className="object-cover grayscale-[10%]"
          />
        </div>
      </Link>
      <div className="p-4">
        <div className="mb-3 flex items-start justify-between gap-3">
          <Link
            href={`/opportunities/${opportunity.slug}`}
            className="line-clamp-2 text-sm font-semibold leading-6 text-zinc-950 hover:underline"
          >
            {opportunity.title}
          </Link>
          <StatusBadge
            status={opportunity.status}
            label={opportunity.statusLabel}
            className="shrink-0"
          />
        </div>
        <p className="text-sm text-zinc-600">{opportunity.institution}</p>
        <p className="mt-2 flex items-center gap-1 text-sm text-zinc-500">
          <MapPin className="size-3.5" />
          {opportunity.location} · {opportunity.category}
        </p>
        <p className="mt-3 text-sm text-zinc-400">{opportunity.deadline}</p>
      </div>
    </article>
  );
}
