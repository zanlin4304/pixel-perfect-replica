import { createFileRoute } from "@tanstack/react-router";
import { Plane } from "lucide-react";

import { BrandMark } from "@/components/BrandMark";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { useSignOut } from "@/hooks/useSignOut";

export const Route = createFileRoute("/_authenticated/app")({
  head: () => ({
    meta: [
      { title: "Dashboard — Flight Price Notifier" },
      { name: "description", content: "Your Flight Price Notifier route-tracking dashboard." },
      { property: "og:title", content: "Dashboard — Flight Price Notifier" },
      { property: "og:description", content: "Your route-tracking dashboard." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AppDashboard,
});

function AppDashboard() {
  const { user } = Route.useRouteContext();
  const signOut = useSignOut();

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <BrandMark />
          <Button variant="glass" size="sm" onClick={signOut}>
            Sign out / 登出
          </Button>
        </div>
      </header>

      <main className="relative flex-1 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-hero" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-5 py-20">
          <Reveal>
            <h1 className="break-all text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Hi {user.email}
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10 rounded-2xl border border-dashed border-primary/40 bg-card-surface p-8 shadow-card">
              <span className="grid size-11 place-items-center rounded-xl bg-primary/15 text-primary-glow">
                <Plane className="size-5 -rotate-45" aria-hidden="true" />
              </span>
              <p className="mt-5 text-lg font-medium text-foreground">
                你的航線追蹤儀表板即將上線 — 下一個里程碑會加上訂閱航線的功能。
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Your dashboard is coming soon. Route-subscription will be added in the next
                milestone.
              </p>
            </div>
          </Reveal>
        </div>
      </main>
    </div>
  );
}
