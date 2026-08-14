"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import {
  type AboutPageContent as AboutPageContentData,
  isAboutPageContent,
} from "@/data/aboutContent";

type AboutPageContentProps = {
  initialContent: AboutPageContentData;
  contentEndpoint?: string;
};

export function AboutPageContent({ initialContent, contentEndpoint }: AboutPageContentProps) {
  const [content, setContent] = useState(initialContent);

  useEffect(() => {
    if (!contentEndpoint) {
      return;
    }

    const endpoint = contentEndpoint;
    const controller = new AbortController();

    async function loadContent() {
      try {
        const response = await fetch(endpoint, { signal: controller.signal });

        if (!response.ok) {
          return;
        }

        const payload: unknown = await response.json();
        const candidate =
          payload && typeof payload === "object" && "data" in payload
            ? (payload as { data: unknown }).data
            : payload;

        if (isAboutPageContent(candidate)) {
          setContent(candidate);
        }
      } catch {
        // Keep the local content available if the configured content service is offline.
      }
    }

    void loadContent();
    return () => controller.abort();
  }, [contentEndpoint]);

  return (
    <div>
      <section className="bg-[var(--color-sage)]">
        <div className="editorial-band-inner">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-700">
            {content.project.eyebrow}
          </p>
          <h1 className="mt-5 max-w-5xl text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            {content.project.title}
          </h1>
          <p className="mt-8 max-w-3xl text-base leading-8 text-zinc-700 sm:text-lg">
            {content.project.summary}
          </p>

          <div className="mt-14 grid border-t border-black/25 md:grid-cols-3">
            {content.project.principles.map((principle) => (
              <article
                key={principle.title}
                className="border-b border-black/20 py-7 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0"
              >
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-zinc-600">
                  {principle.eyebrow}
                </p>
                <h2 className="mt-5 text-2xl font-bold">{principle.title}</h2>
                <p className="mt-4 text-sm leading-7 text-zinc-700">{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-charcoal)] text-[var(--color-paper)]">
        <div className="editorial-band-inner">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/65">
            {content.subscription.eyebrow}
          </p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <h2 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              {content.subscription.title}
            </h2>
            <div>
              <p className="text-base leading-8 text-white/75">{content.subscription.summary}</p>
              <p className="mt-4 border-l border-white/35 pl-4 text-sm leading-7 text-white/55">
                {content.subscription.note}
              </p>
            </div>
          </div>

          <div className="mt-14 grid border-t border-white/30 md:grid-cols-3">
            {content.subscription.services.map((service) => (
              <article
                key={service.title}
                className="border-b border-white/20 py-7 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0"
              >
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/55">
                  {service.eyebrow}
                </p>
                <h3 className="mt-5 text-2xl font-bold">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/70">{service.description}</p>
              </article>
            ))}
          </div>

          <Link href={content.subscription.action.href} className="text-arrow-action mt-10 text-[var(--color-paper)]">
            {content.subscription.action.label}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <section className="bg-[var(--color-mist)]">
        <div className="editorial-band-inner">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-600">
            {content.roadmap.eyebrow}
          </p>
          <div className="mt-5 grid gap-8 lg:grid-cols-2 lg:items-end">
            <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              {content.roadmap.title}
            </h2>
            <p className="max-w-xl text-base leading-8 text-zinc-700">{content.roadmap.summary}</p>
          </div>

          <div className="mt-14 grid border-t border-black/25 md:grid-cols-2">
            {content.roadmap.features.map((feature) => (
              <article
                key={feature.title}
                className="border-b border-black/20 py-8 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"
              >
                <span className="inline-block bg-[var(--color-ink)] px-2 py-1 text-xs font-bold text-[var(--color-paper)]">
                  {feature.eyebrow}
                </span>
                <h3 className="mt-7 text-3xl font-bold">{feature.title}</h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-700">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
