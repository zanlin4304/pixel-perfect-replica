import { Link } from "react-router-dom";
import { BellRing, CalendarX2, Radar } from "lucide-react";

import { FarePreviewCard } from "@/components/FarePreviewCard";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/hooks/usePageMeta";

const features = [
  {
    icon: Radar,
    title: "盯緊熱門航線",
    en: "Always-on route watching",
    body: "持續監控台北出發的熱門航線（東京、首爾），自動抓最低票價。",
  },
  {
    icon: BellRing,
    title: "達標自動通知",
    en: "Target-price email alerts",
    body: "低於你設定的目標價，就寄 email 提醒你，附上立即訂購連結。",
  },
  {
    icon: CalendarX2,
    title: "隨時取消",
    en: "Cancel anytime",
    body: "月訂閱制，不想用隨時停，沒有綁約。",
  },
];

export default function Index() {
  usePageMeta({
    title: "Flight Price Notifier — 機票降價通知",
    description:
      "設定航線與目標價，機票降價就通知你。Set a route and a target price — we email you when the fare from Taipei drops.",
    ogTitle: "Flight Price Notifier — 機票降價通知",
    ogDescription: "Set a route and a target price — we email you when the fare drops.",
    twitterCard: "summary_large_image",
  });

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-hero" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden="true" />

          <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-24 pt-20 md:pt-28 lg:grid-cols-[1.1fr_1fr]">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-foreground/5 px-3 py-1 text-xs text-muted-foreground">
                <span className="size-1.5 rounded-full bg-success" aria-hidden="true" />
                機票降價通知 · Taipei departures
              </span>
              <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight text-gradient sm:text-6xl">
                Flight Price Notifier
              </h1>
              <p className="mt-6 text-xl font-medium text-foreground sm:text-2xl">
                設定航線與目標價，機票降價就通知你
              </p>
              <p className="mt-3 max-w-lg text-base text-muted-foreground">
                Set a route and a target price — we email you when the fare drops.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild variant="hero" size="lg">
                  <Link to="/signup">免費開始 · Get started</Link>
                </Button>
                <Button asChild variant="glass" size="lg">
                  <Link to="/auth">Sign in / 登入</Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={150} className="flex justify-center lg:justify-end">
              <FarePreviewCard />
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-24">
          <Reveal className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary-glow">
              Features
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              不用一直刷票價，讓我們幫你盯
            </h2>
            <p className="mt-3 text-muted-foreground">
              For travelers who don’t mind when they fly — only that it’s under budget.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.en} delay={i * 100}>
                <article className="group h-full rounded-2xl border border-border bg-card-surface p-6 shadow-card transition-colors hover:border-primary/40">
                  <span className="grid size-11 place-items-center rounded-xl bg-primary/15 text-primary-glow transition-colors group-hover:bg-primary/25">
                    <f.icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{f.title}</h3>
                  <p className="text-sm text-primary-glow">{f.en}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
