"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

type WaitlistFormProps = {
  compact?: boolean;
};

export function WaitlistForm({
  compact = false,
}: WaitlistFormProps) {
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
      <div className="border-t border-emerald-900/30 bg-[var(--color-sage)] p-5 text-emerald-950">
        <Check className="mb-4 size-6" />
        <p className="text-base font-semibold">已加入候补名单</p>
        <p className="mt-2 text-sm leading-6 text-emerald-950/75">
          我们记录了你的信息。正式开放测试时，会优先发送邀请。
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("space-y-4", compact ? "" : "border-t border-black/25 bg-white p-5")}
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className={cn("mb-2 block text-xs font-medium uppercase tracking-[0.14em]", compact ? "text-zinc-400" : "text-zinc-500")}>
            姓名
          </span>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="h-11 w-full rounded-md border border-black/25 bg-white px-3 text-sm text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-zinc-950"
            placeholder="你的姓名"
          />
        </label>
        <label className="block">
          <span className={cn("mb-2 block text-xs font-medium uppercase tracking-[0.14em]", compact ? "text-zinc-400" : "text-zinc-500")}>
            邮箱
          </span>
          <input
            value={email}
            type="email"
            onChange={(event) => setEmail(event.target.value)}
            className="h-11 w-full rounded-md border border-black/25 bg-white px-3 text-sm text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-zinc-950"
            placeholder="name@example.com"
          />
        </label>
      </div>

      <label className="block">
        <span className={cn("mb-2 block text-xs font-medium uppercase tracking-[0.14em]", compact ? "text-zinc-400" : "text-zinc-500")}>
          关注方向
        </span>
        <textarea
          value={note}
          onChange={(event) => setNote(event.target.value)}
          className="min-h-24 w-full rounded-md border border-black/25 bg-white px-3 py-3 text-sm text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-zinc-950"
          placeholder="例如：寻找低成本海外驻留、准备英文 Artist Statement"
        />
      </label>

      {error ? <p className="bg-[var(--color-clay)] px-3 py-2 text-sm text-red-950">{error}</p> : null}

      <button
        type="submit"
        className="text-arrow-action"
      >
        加入 Waitlist
        <ArrowRight className="size-4" />
      </button>
    </form>
  );
}
