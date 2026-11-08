import { BellRing, TrendingDown } from "lucide-react";

/** Illustrative fare-watch card for the landing hero (sample numbers, not live data). */
export function FarePreviewCard() {
  return (
    <div className="relative w-full max-w-md rounded-2xl border border-border bg-card-surface p-6 shadow-card">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Watching</p>
          <p className="mt-1 text-lg font-semibold text-foreground">TPE → NRT</p>
          <p className="text-xs text-muted-foreground">台北 → 東京成田</p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-success/15 px-2.5 py-1 text-xs font-medium text-success">
          <TrendingDown className="size-3.5" aria-hidden="true" />
          −12%
        </span>
      </div>

      <svg viewBox="0 0 320 110" className="mt-6 h-28 w-full" aria-hidden="true">
        <defs>
          <linearGradient id="fare-fill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line
          x1="0"
          x2="320"
          y1="70"
          y2="70"
          stroke="var(--success)"
          strokeWidth="1.5"
          className="animate-route"
        />
        <path
          d="M0 28 L40 34 L80 22 L120 40 L160 36 L200 52 L240 48 L280 76 L320 82 L320 110 L0 110 Z"
          fill="url(#fare-fill)"
        />
        <path
          d="M0 28 L40 34 L80 22 L120 40 L160 36 L200 52 L240 48 L280 76 L320 82"
          fill="none"
          stroke="var(--primary-glow)"
          strokeWidth="2.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <circle cx="280" cy="76" r="5" fill="var(--primary-glow)" />
      </svg>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-border bg-background/40 p-3">
          <p className="text-xs text-muted-foreground">目標價 Target</p>
          <p className="mt-1 text-base font-semibold text-foreground">NT$ 8,000</p>
        </div>
        <div className="rounded-xl border border-primary/40 bg-primary/10 p-3">
          <p className="text-xs text-muted-foreground">最低價 Lowest</p>
          <p className="mt-1 text-base font-semibold text-foreground">NT$ 7,480</p>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3 rounded-xl border border-border bg-background/40 p-3">
        <span className="grid size-8 place-items-center rounded-lg bg-gradient-primary">
          <BellRing className="size-4 text-primary-foreground" aria-hidden="true" />
        </span>
        <div className="text-xs">
          <p className="font-medium text-foreground">已達標，Email 已寄出</p>
          <p className="text-muted-foreground">Fare hit your target — alert sent.</p>
        </div>
      </div>
    </div>
  );
}
