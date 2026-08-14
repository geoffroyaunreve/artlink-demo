"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ActionButtonProps = {
  label: string;
  successLabel: string;
  variant?: "dark" | "light";
  className?: string;
};

export function ActionButton({
  label,
  successLabel,
  variant = "dark",
  className,
}: ActionButtonProps) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!done) {
      return;
    }

    const timer = window.setTimeout(() => setDone(false), 2200);
    return () => window.clearTimeout(timer);
  }, [done]);

  return (
    <button
      type="button"
      aria-live="polite"
      onClick={() => setDone(true)}
      className={cn(
        "text-arrow-action group",
        variant === "dark"
          ? "text-zinc-950"
          : "text-zinc-700",
        className,
      )}
    >
      {done ? successLabel : label}
      <ArrowRight className="size-4" />
    </button>
  );
}
