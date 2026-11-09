import { Link, useNavigate } from "react-router-dom";

import { AuthCard } from "@/components/AuthCard";
import { usePageMeta } from "@/hooks/usePageMeta";
import { supabase } from "@/integrations/supabase/client";

export default function SignInPage() {
  const navigate = useNavigate();
  usePageMeta({
    title: "Sign in / 登入 — Flight Price Notifier",
    description: "Sign in to Flight Price Notifier to manage your fare alerts.",
    ogTitle: "Sign in — Flight Price Notifier",
    ogDescription: "Sign in to manage your flight fare alerts.",
    twitterCard: "summary",
  });

  return (
    <AuthCard
      title="Sign in / 登入"
      subtitle="Welcome back. 歡迎回來。"
      submitLabel="Sign in / 登入"
      passwordAutoComplete="current-password"
      onSubmit={async (email, password) => {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) return error.message;
        navigate("/app", { replace: true });
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
