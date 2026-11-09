import { Link } from "react-router-dom";

import { BrandMark } from "@/components/BrandMark";
import { Button } from "@/components/ui/button";
import { useAuthSession } from "@/hooks/useAuthSession";
import { useSignOut } from "@/hooks/useSignOut";

export function SiteHeader() {
  const { session, ready } = useAuthSession();
  const signOut = useSignOut();

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <BrandMark />
        <nav className="flex items-center gap-2">
          {ready && session ? (
            <>
              <Button asChild variant="ghost" size="sm">
                <Link to="/app">Dashboard</Link>
              </Button>
              <Button variant="glass" size="sm" onClick={signOut}>
                Sign out / 登出
              </Button>
            </>
          ) : (
            <Button asChild variant="hero" size="sm">
              <Link to="/auth">Sign in / 登入</Link>
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
}
