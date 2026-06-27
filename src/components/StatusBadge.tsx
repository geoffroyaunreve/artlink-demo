import type { OpportunityStatus } from "@/data/mockData";
import { cn } from "@/lib/utils";

const statusStyles: Record<OpportunityStatus, string> = {
  open: "border-emerald-200 bg-emerald-50 text-emerald-700",
  closing: "border-red-200 bg-red-50 text-red-600",
  ongoing: "border-sky-200 bg-sky-50 text-sky-700",
};

type StatusBadgeProps = {
  status: OpportunityStatus;
  label: string;
  className?: string;
};

export function StatusBadge({ status, label, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex h-6 items-center rounded-md border px-2 text-xs font-medium",
        statusStyles[status],
        className,
      )}
    >
      {label}
    </span>
  );
}
