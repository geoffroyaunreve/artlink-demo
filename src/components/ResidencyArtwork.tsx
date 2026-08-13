import { cn } from "@/lib/utils";

type ResidencyArtworkProps = {
  slug: string;
  category: string;
  className?: string;
};

type ArtworkPalette = {
  background: string;
  accent: string;
  secondary: string;
  ink: string;
};

const artworkPalettes: Record<string, ArtworkPalette> = {
  "生态自然型": {
    background: "var(--color-sage)",
    accent: "var(--color-clay)",
    secondary: "var(--color-paper)",
    ink: "var(--color-ink)",
  },
  "研究型": {
    background: "var(--color-mist)",
    accent: "var(--color-sand)",
    secondary: "var(--color-paper)",
    ink: "var(--color-ink)",
  },
  "技术实验型": {
    background: "var(--color-lilac)",
    accent: "var(--color-sage)",
    secondary: "var(--color-charcoal)",
    ink: "var(--color-ink)",
  },
  "生产型": {
    background: "var(--color-clay)",
    accent: "var(--color-sand)",
    secondary: "var(--color-charcoal)",
    ink: "var(--color-ink)",
  },
  "社区参与型": {
    background: "var(--color-sand)",
    accent: "var(--color-sage)",
    secondary: "var(--color-mist)",
    ink: "var(--color-ink)",
  },
  "展览成果型": {
    background: "var(--color-paper)",
    accent: "var(--color-clay)",
    secondary: "var(--color-charcoal)",
    ink: "var(--color-ink)",
  },
};

const fallbackPalette: ArtworkPalette = {
  background: "var(--color-paper)",
  accent: "var(--color-mist)",
  secondary: "var(--color-sage)",
  ink: "var(--color-ink)",
};

function hashSlug(slug: string) {
  return Array.from(slug).reduce(
    (hash, character) => (hash * 31 + character.charCodeAt(0)) >>> 0,
    17,
  );
}

function ArtworkMotif({
  category,
  palette,
  shift,
}: {
  category: string;
  palette: ArtworkPalette;
  shift: number;
}) {
  if (category === "生态自然型") {
    return (
      <>
        <div
          className="absolute -right-[9%] top-[13%] aspect-square w-[58%] rounded-full border-[3px]"
          style={{ borderColor: palette.ink, backgroundColor: palette.accent }}
        />
        <div
          className="absolute right-[20%] top-[36%] aspect-square w-[32%] rounded-full border-2"
          style={{ borderColor: palette.ink, backgroundColor: palette.secondary }}
        />
        <div
          className="absolute bottom-[23%] left-[9%] h-px w-[62%]"
          style={{ backgroundColor: palette.ink, transform: `rotate(${shift - 4}deg)` }}
        />
      </>
    );
  }

  if (category === "研究型") {
    return (
      <>
        {[18, 36, 54, 72].map((left) => (
          <div
            key={`vertical-${left}`}
            className="absolute bottom-[18%] top-[18%] w-px bg-black/35"
            style={{ left: `${left}%` }}
          />
        ))}
        {[31, 50, 69].map((top) => (
          <div
            key={`horizontal-${top}`}
            className="absolute left-[10%] right-[10%] h-px bg-black/35"
            style={{ top: `${top}%` }}
          />
        ))}
        <div
          className="absolute h-[29%] w-[31%] border-2"
          style={{
            backgroundColor: palette.accent,
            borderColor: palette.ink,
            right: `${9 + shift}%`,
            top: `${24 + shift}%`,
          }}
        />
      </>
    );
  }

  if (category === "技术实验型") {
    return (
      <>
        <div
          className="absolute left-[10%] top-[21%] h-[44%] w-[38%] border-2"
          style={{ backgroundColor: palette.secondary, borderColor: palette.ink }}
        />
        <div
          className="absolute right-[10%] top-[12%] h-[31%] w-[30%] border-2"
          style={{ backgroundColor: palette.accent, borderColor: palette.ink }}
        />
        <div
          className="absolute bottom-[21%] right-[18%] h-[22%] w-[44%] border-2"
          style={{ backgroundColor: palette.background, borderColor: palette.ink }}
        />
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className="absolute size-3 rounded-full border"
            style={{
              backgroundColor: palette.accent,
              borderColor: palette.ink,
              bottom: `${16 + index * 10}%`,
              left: `${17 + index * 10 + shift}%`,
            }}
          />
        ))}
      </>
    );
  }

  if (category === "生产型") {
    return (
      <>
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className="absolute h-[17%] border-2"
            style={{
              backgroundColor: index === 1 ? palette.secondary : palette.accent,
              borderColor: palette.ink,
              bottom: `${18 + index * 15}%`,
              left: `${11 + index * 10}%`,
              width: `${62 - index * 6}%`,
            }}
          />
        ))}
        <div
          className="absolute right-[10%] top-[14%] h-[56%] w-px"
          style={{ backgroundColor: palette.ink, transform: `rotate(${shift}deg)` }}
        />
      </>
    );
  }

  if (category === "社区参与型") {
    const nodes = [
      { left: 14 + shift, top: 25, size: 26, color: palette.accent },
      { left: 47, top: 17 + shift, size: 20, color: palette.secondary },
      { left: 57 - shift, top: 51, size: 30, color: palette.background },
    ];

    return (
      <>
        <div
          className="absolute left-[25%] top-[34%] h-px w-[43%] origin-left"
          style={{ backgroundColor: palette.ink, transform: "rotate(17deg)" }}
        />
        <div
          className="absolute left-[52%] top-[32%] h-px w-[34%] origin-left"
          style={{ backgroundColor: palette.ink, transform: "rotate(78deg)" }}
        />
        {nodes.map((node, index) => (
          <div
            key={index}
            className="absolute aspect-square rounded-full border-2"
            style={{
              backgroundColor: node.color,
              borderColor: palette.ink,
              left: `${node.left}%`,
              top: `${node.top}%`,
              width: `${node.size}%`,
            }}
          />
        ))}
      </>
    );
  }

  return (
    <>
      <div
        className="absolute inset-[11%] border-[3px]"
        style={{ borderColor: palette.ink }}
      />
      <div
        className="absolute bottom-[19%] left-[17%] h-[42%] w-[25%] border-2"
        style={{ backgroundColor: palette.accent, borderColor: palette.ink }}
      />
      <div
        className="absolute right-[15%] top-[18%] h-[48%] w-[35%] border-2"
        style={{ backgroundColor: palette.secondary, borderColor: palette.ink }}
      />
      <div className="absolute left-[12%] right-[12%] top-1/2 h-px bg-black/50" />
    </>
  );
}

export function ResidencyArtwork({
  slug,
  category,
  className,
}: ResidencyArtworkProps) {
  const hash = hashSlug(slug);
  const shift = (hash % 9) - 4;
  const palette = artworkPalettes[category] ?? fallbackPalette;

  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden border border-black/15",
        className,
      )}
      style={{ backgroundColor: palette.background, color: palette.ink }}
      aria-hidden="true"
      data-artwork-slug={slug}
    >
      <ArtworkMotif category={category} palette={palette} shift={shift} />

      <p
        className="absolute bottom-2 right-2 z-10 text-xs font-bold"
        style={{ color: palette.ink }}
      >
        {category}
      </p>
    </div>
  );
}
