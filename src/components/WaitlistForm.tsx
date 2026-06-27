"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

type WaitlistFormProps = {
  defaultRole?: Role;
  compact?: boolean;
};

const roleLabels = {
  artist: "艺术家",
  institution: "艺术机构",
  curator: "策展人与合作方",
};

type Role = keyof typeof roleLabels;

export function WaitlistForm({
  defaultRole = "artist",
  compact = false,
}: WaitlistFormProps) {
  const [role, setRole] = useState<Role>(defaultRole);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name.trim() || !email.trim()) {
      setError("请填写姓名和邮箱。");
      return;
    }

    if (!email.includes("@")) {
      setError("请填写有效邮箱。");
      return;
    }

    setError("");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-emerald-900">
        <div className="mb-3 flex size-10 items-center justify-center rounded-full bg-white">
          <Check className="size-5" />
        </div>
        <p className="text-base font-semibold">已加入候补名单</p>
        <p className="mt-2 text-sm leading-6 text-emerald-800">
          我们记录了你的信息。正式开放测试时，会优先发送邀请。
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("space-y-4", compact ? "" : "rounded-2xl border border-zinc-200 bg-white p-5")}
    >
      <div className="grid gap-3 sm:grid-cols-3">
        {Object.entries(roleLabels).map(([value, label]) => (
          <button
            key={value}
            type="button"
            onClick={() => setRole(value as Role)}
            className={cn(
              "h-10 rounded-lg border px-3 text-sm transition",
              role === value
                ? "border-zinc-950 bg-zinc-950 text-white"
                : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-400",
            )}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-zinc-500">
            姓名
          </span>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="h-11 w-full rounded-lg border border-zinc-200 bg-white px-3 text-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-950"
            placeholder="你的姓名"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-zinc-500">
            邮箱
          </span>
          <input
            value={email}
            type="email"
            onChange={(event) => setEmail(event.target.value)}
            className="h-11 w-full rounded-lg border border-zinc-200 bg-white px-3 text-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-950"
            placeholder="name@example.com"
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-zinc-500">
          关注方向
        </span>
        <textarea
          value={note}
          onChange={(event) => setNote(event.target.value)}
          className="min-h-24 w-full rounded-lg border border-zinc-200 bg-white px-3 py-3 text-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-950"
          placeholder="例如：寻找海外驻留、发布展览征集、匹配影像艺术家"
        />
      </label>

      {error ? <p className="text-sm text-red-600">{error}</p> : null}

      <button
        type="submit"
        className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-zinc-950 px-5 text-sm font-medium text-white transition hover:bg-zinc-800 sm:w-auto"
      >
        加入 Waitlist
        <ArrowRight className="size-4" />
      </button>
    </form>
  );
}
