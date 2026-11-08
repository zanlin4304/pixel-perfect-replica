import { useState } from "react";
import { createFileRoute, Link, redirect, useNavigate } from "@tanstack/react-router";

import { AuthCard } from "@/components/AuthCard";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/signup")({
  ssr: false,
  beforeLoad: async () => {
    const { data } = await supabase.auth.getSession();
    if (data.session) throw redirect({ to: "/app" });
  },
  head: () => ({
    meta: [
      { title: "Sign up / 註冊 — Flight Price Notifier" },
      {
        name: "description",
        content: "Create a Flight Price Notifier account and get emailed when fares from Taipei drop.",
      },
      { property: "og:title", content: "Sign up — Flight Price Notifier" },
      { property: "og:description", content: "Create an account to start watching flight fares." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: SignUpPage,
});

function SignUpPage() {
  const navigate = useNavigate();
  const [notice, setNotice] = useState<string | null>(null);

  return (
    <AuthCard
      title="Sign up / 註冊"
      subtitle="Create your account in seconds. 幾秒鐘就能建立帳號。"
      submitLabel="Create account / 建立帳號"
      passwordAutoComplete="new-password"
      notice={notice}
      onSubmit={async (email, password) => {
        setNotice(null);
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: window.location.origin },
        });
        if (error) return error.message;
        if (data.session) {
          navigate({ to: "/app", replace: true });
        } else {
          setNotice("請到信箱確認你的 email，再回來登入。Check your email to confirm your account.");
        }
        return null;
      }}
      footer={
        <>
          已經有帳號？{" "}
          <Link to="/auth" className="font-medium text-primary-glow hover:underline">
            Sign in / 登入
          </Link>
        </>
      }
    />
  );
}
