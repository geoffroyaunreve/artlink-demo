import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { Artist } from "@/data/mockData";

type ArtistCardProps = {
  artist: Artist;
};

export function ArtistCard({ artist }: ArtistCardProps) {
  return (
    <article className="rounded-xl border border-zinc-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-sm">
      <div className="flex items-start gap-4">
        <Link href={`/artists/${artist.slug}`} className="relative block size-16 shrink-0 overflow-hidden rounded-full bg-zinc-100">
          <Image
            src={artist.avatar}
            alt={artist.name}
            fill
            sizes="64px"
            className="object-cover grayscale-[20%]"
          />
        </Link>
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <Link
              href={`/artists/${artist.slug}`}
              className="truncate text-base font-semibold text-zinc-950 hover:underline"
            >
              {artist.name}
            </Link>
            <span className="rounded-full bg-zinc-100 px-2 py-1 text-[11px] text-zinc-500">
              {artist.availability}
            </span>
          </div>
          <p className="mt-1 text-sm text-zinc-600">{artist.discipline}</p>
          <p className="mt-1 flex items-center gap-1 text-sm text-zinc-500">
            <MapPin className="size-3.5" />
            {artist.location}
          </p>
        </div>
      </div>

      <p className="mt-4 line-clamp-2 min-h-12 text-sm leading-6 text-zinc-500">
        {artist.statement}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {artist.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-zinc-200 px-2.5 py-1 text-xs text-zinc-500"
          >
            {tag}
          </span>
        ))}
      </div>

      <Link
        href={`/artists/${artist.slug}`}
        className="mt-4 inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-zinc-100 text-sm font-medium text-zinc-800 transition hover:bg-zinc-200"
      >
        查看作品
        <ArrowUpRight className="size-4" />
      </Link>
    </article>
  );
}
