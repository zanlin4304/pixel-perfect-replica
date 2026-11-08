import { createFileRoute, Link, redirect, useNavigate } from "@tanstack/react-router";

import { AuthCard } from "@/components/AuthCard";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/auth")({
  ssr: false,
  beforeLoad: async () => {
    const { data } = await supabase.auth.getSession();
    if (data.session) throw redirect({ to: "/app" });
  },
  head: () => ({
    meta: [
      { title: "Sign in / 登入 — Flight Price Notifier" },
      { name: "description", content: "Sign in to Flight Price Notifier to manage your fare alerts." },
      { property: "og:title", content: "Sign in — Flight Price Notifier" },
      { property: "og:description", content: "Sign in to manage your flight fare alerts." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: SignInPage,
});

function SignInPage() {
  const navigate = useNavigate();

  return (
    <AuthCard
      title="Sign in / 登入"
      subtitle="Welcome back. 歡迎回來。"
      submitLabel="Sign in / 登入"
      passwordAutoComplete="current-password"
      onSubmit={async (email, password) => {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) return error.message;
        navigate({ to: "/app", replace: true });
        return null;
      }}
      footer={
        <>
          還沒有帳號？{" "}
          <Link to="/signup" className="font-medium text-primary-glow hover:underline">
            Sign up / 註冊
          </Link>
        </>
      }
    />
  );
}
