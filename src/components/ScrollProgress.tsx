"use client";

import { useEffect, useState } from "react";

type ScrollProgressProps = {
  targetId: string;
};

export function ScrollProgress({ targetId }: ScrollProgressProps) {
  const [progress, setProgress] = useState(0);
  const [thumbWidth, setThumbWidth] = useState(36);

  useEffect(() => {
    const element = document.getElementById(targetId);

    if (!element) {
      return;
    }

    const scrollTarget = element;

    function updateProgress() {
      const maxScroll = scrollTarget.scrollWidth - scrollTarget.clientWidth;

      if (maxScroll <= 0) {
        setProgress(0);
        setThumbWidth(100);
        return;
      }

      const visibleRatio = scrollTarget.clientWidth / scrollTarget.scrollWidth;
      setProgress(scrollTarget.scrollLeft / maxScroll);
      setThumbWidth(Math.min(58, Math.max(24, visibleRatio * 100)));
    }

    updateProgress();
    scrollTarget.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      scrollTarget.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [targetId]);

  const offset = progress * (100 - thumbWidth);

  return (
    <div
      className="mx-auto mt-4 h-1 w-28 overflow-hidden rounded-full bg-zinc-200"
      aria-hidden="true"
    >
      <div
        className="h-full rounded-full bg-zinc-950 transition-[left,width] duration-150 ease-out"
        style={{
          left: `${offset}%`,
          position: "relative",
          width: `${thumbWidth}%`,
        }}
      />
    </div>
  );
}
