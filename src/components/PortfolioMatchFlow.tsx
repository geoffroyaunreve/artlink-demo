"use client";

import { useRef, useState } from "react";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  FileText,
  Loader2,
  Sparkles,
  Upload,
} from "lucide-react";
import { cn } from "@/lib/utils";

type ArtistProfile = {
  artistSummary: string;
  disciplines: string[];
  mediums: string[];
  themes: string[];
  careerStage: string;
  preferredRegions: string[];
  budgetSensitivity: string;
  languages: string[];
  applicationStrengths: string[];
  possibleRisks: string[];
};

const maxFileSize = 10 * 1024 * 1024;

const sampleProfile: ArtistProfile = {
  artistSummary:
    "Emerging experimental artist working with installation, video, AI-assisted image systems, urban memory, and participatory research.",
  disciplines: [
    "experimental art",
    "new media art",
    "installation",
    "research-based practice",
  ],
  mediums: ["video", "installation", "AI", "sound", "interactive media"],
  themes: ["urban memory", "technology", "identity", "public space", "participation"],
  careerStage: "emerging",
  preferredRegions: ["Europe", "Asia"],
  budgetSensitivity: "high",
  languages: ["English", "Chinese"],
  applicationStrengths: [
    "Strong conceptual research direction",
    "Cross-media practice",
    "Clear connection between technology and social space",
  ],
  possibleRisks: [
    "May need a more concise artist statement",
    "Some residencies may require stronger exhibition history",
    "Budget and travel support should be checked carefully",
  ],
};

function formatFileSize(size: number) {
  return `${(size / 1024 / 1024).toFixed(1)} MB`;
}

function isPdf(file: File) {
  return file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf");
}

function PillList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm text-zinc-600"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export function PortfolioMatchFlow() {
  const [profile, setProfile] = useState<ArtistProfile | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState("");
  const [sourceLabel, setSourceLabel] = useState("");
  const timerRef = useRef<number | null>(null);

  function startAnalysis(label: string) {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
    }

    setError("");
    setSourceLabel(label);
    setProfile(null);
    setIsAnalyzing(true);

    timerRef.current = window.setTimeout(() => {
      setProfile(sampleProfile);
      setIsAnalyzing(false);
    }, 900);
  }

  function handleFile(file: File | undefined) {
    if (!file) {
      return;
    }

    if (!isPdf(file)) {
      setProfile(null);
      setSourceLabel("");
      setError("请上传 PDF 格式的作品集文件。");
      return;
    }

    if (file.size > maxFileSize) {
      setProfile(null);
      setSourceLabel("");
      setError("文件大小不能超过 10MB。");
      return;
    }

    startAnalysis(`${file.name} · ${formatFileSize(file.size)}`);
  }

  return (
    <section className="rounded-3xl border border-zinc-200 bg-white p-5 sm:p-8">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.16em] text-emerald-700 [text-shadow:0_0_18px_rgba(4,120,87,0.5)]">
            <Sparkles className="size-4" />
            Portfolio matching
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            上传作品集，生成匹配画像
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-500">
            当前为前端演示：不会上传文件到服务器，也不会调用真实 AI。系统会模拟从作品集里提取媒介、主题、阶段、预算敏感度和申请风险。
          </p>

          <label className="mt-6 flex min-h-48 cursor-pointer flex-col items-center justify-center rounded-3xl border border-dashed border-zinc-300 bg-zinc-50 p-6 text-center transition hover:border-zinc-500 hover:bg-white">
            <Upload className="size-8 text-zinc-500" />
            <span className="mt-4 text-base font-semibold text-zinc-950">
              上传 Portfolio PDF
            </span>
            <span className="mt-2 text-sm leading-6 text-zinc-500">
              仅支持 PDF，最大 10MB。用于演示解析流程。
            </span>
            <input
              type="file"
              accept="application/pdf,.pdf"
              className="sr-only"
              onChange={(event) => handleFile(event.target.files?.[0])}
            />
          </label>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => startAnalysis("Sample portfolio · demo PDF")}
              className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-200 bg-white px-5 text-sm font-medium text-zinc-950 transition hover:border-zinc-300 hover:bg-zinc-50"
            >
              Try with sample portfolio
            </button>
            {profile ? (
              <a
                href="#match-recommendations"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-zinc-950 px-5 text-sm font-medium text-white transition hover:bg-zinc-800"
              >
                Find my matches
                <ArrowRight className="size-4" />
              </a>
            ) : null}
          </div>

          {error ? (
            <p
              className="mt-4 flex items-center gap-2 rounded-2xl border border-red-200 bg-red-50 p-3 text-sm text-red-700"
              role="alert"
            >
              <AlertCircle className="size-4 shrink-0" />
              {error}
            </p>
          ) : null}

          {sourceLabel ? (
            <p className="mt-4 flex items-center gap-2 text-sm text-zinc-500">
              <FileText className="size-4" />
              {sourceLabel}
            </p>
          ) : null}
        </div>

        <div
          className={cn(
            "rounded-3xl border p-5 sm:p-6",
            profile
              ? "border-zinc-200 bg-[#fbfaf6]"
              : "border-zinc-200 bg-zinc-50",
          )}
          aria-live="polite"
        >
          {isAnalyzing ? (
            <div className="flex min-h-96 flex-col items-center justify-center text-center">
              <Loader2 className="size-9 animate-spin text-zinc-950" />
              <p className="mt-5 text-lg font-semibold">正在解析作品集</p>
              <p className="mt-2 max-w-sm text-sm leading-6 text-zinc-500">
                正在模拟识别媒介、主题、申请阶段、语言能力与预算风险。
              </p>
            </div>
          ) : profile ? (
            <div>
              <div className="flex items-start gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-zinc-950 text-white">
                  <CheckCircle2 className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-medium text-zinc-500">
                    Mock Artist Profile
                  </p>
                  <h3 className="mt-1 text-2xl font-semibold tracking-tight">
                    作品集画像已生成
                  </h3>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-zinc-600">
                {profile.artistSummary}
              </p>

              <div className="mt-6 grid gap-4">
                <div>
                  <p className="mb-2 text-sm font-semibold text-zinc-950">Disciplines</p>
                  <PillList items={profile.disciplines} />
                </div>
                <div>
                  <p className="mb-2 text-sm font-semibold text-zinc-950">Mediums</p>
                  <PillList items={profile.mediums} />
                </div>
                <div>
                  <p className="mb-2 text-sm font-semibold text-zinc-950">Themes</p>
                  <PillList items={profile.themes} />
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-zinc-200 bg-white p-4">
                  <p className="text-sm text-zinc-500">Career stage</p>
                  <p className="mt-2 font-semibold">{profile.careerStage}</p>
                </div>
                <div className="rounded-2xl border border-zinc-200 bg-white p-4">
                  <p className="text-sm text-zinc-500">Budget sensitivity</p>
                  <p className="mt-2 font-semibold">{profile.budgetSensitivity}</p>
                </div>
                <div className="rounded-2xl border border-zinc-200 bg-white p-4">
                  <p className="text-sm text-zinc-500">Preferred regions</p>
                  <p className="mt-2 font-semibold">
                    {profile.preferredRegions.join(" / ")}
                  </p>
                </div>
                <div className="rounded-2xl border border-zinc-200 bg-white p-4">
                  <p className="text-sm text-zinc-500">Languages</p>
                  <p className="mt-2 font-semibold">{profile.languages.join(" / ")}</p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                  <p className="font-semibold text-emerald-900">Application strengths</p>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-emerald-800">
                    {profile.applicationStrengths.map((item) => (
                      <li key={item} className="flex gap-2">
                        <CheckCircle2 className="mt-1 size-4 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                  <p className="font-semibold text-amber-900">Possible risks</p>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-amber-800">
                    {profile.possibleRisks.map((item) => (
                      <li key={item} className="flex gap-2">
                        <AlertCircle className="mt-1 size-4 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex min-h-96 flex-col items-center justify-center text-center">
              <FileText className="size-10 text-zinc-400" />
              <p className="mt-5 text-lg font-semibold">等待作品集</p>
              <p className="mt-2 max-w-sm text-sm leading-6 text-zinc-500">
                上传 PDF 或使用样例作品集后，这里会显示模拟提取出的艺术家画像。
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
