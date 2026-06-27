"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";
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
        "inline-flex h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-medium transition",
        variant === "dark"
          ? "bg-zinc-950 text-white hover:bg-zinc-800"
          : "border border-zinc-200 bg-white text-zinc-950 hover:border-zinc-300 hover:bg-zinc-50",
        className,
      )}
    >
      {done ? <Check className="size-4" /> : null}
      {done ? successLabel : label}
    </button>
  );
}
