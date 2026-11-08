import { useState, type FormEvent, type ReactNode } from "react";

import { BrandMark } from "@/components/BrandMark";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface AuthCardProps {
  title: string;
  subtitle: string;
  submitLabel: string;
  footer: ReactNode;
  passwordAutoComplete: "current-password" | "new-password";
  onSubmit: (email: string, password: string) => Promise<string | null>;
  notice?: string | null;
}

/** Shared email + password form for the sign-in and sign-up pages. */
export function AuthCard({
  title,
  subtitle,
  submitLabel,
  footer,
  passwordAutoComplete,
  onSubmit,
  notice,
}: AuthCardProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError(null);
    setPending(true);
    const message = await onSubmit(email.trim(), password);
    setPending(false);
    if (message) setError(message);
  }

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 py-16">
      <div className="pointer-events-none absolute inset-0 bg-hero" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden="true" />

      <div className="reveal relative w-full max-w-sm" data-visible="true">
        <div className="mb-8 flex justify-center">
          <BrandMark />
        </div>
        <div className="rounded-2xl border border-border bg-card-surface p-7 shadow-card">
          <h1 className="text-xl font-semibold tracking-tight text-foreground">{title}</h1>
          <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password / 密碼</Label>
              <Input
                id="password"
                type="password"
                autoComplete={passwordAutoComplete}
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-11"
              />
            </div>

            {error && (
              <p role="alert" className="rounded-lg bg-destructive/15 px-3 py-2 text-sm text-destructive">
                {error}
              </p>
            )}
            {notice && (
              <p className="rounded-lg bg-success/15 px-3 py-2 text-sm text-success">{notice}</p>
            )}

            <Button type="submit" variant="hero" size="lg" className="w-full" disabled={pending}>
              {pending ? "Please wait…" : submitLabel}
            </Button>
          </form>
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">{footer}</p>
      </div>
    </div>
  );
}
