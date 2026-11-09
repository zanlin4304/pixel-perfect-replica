import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthCard } from "@/components/AuthCard";
import { usePageMeta } from "@/hooks/usePageMeta";
import { supabase } from "@/integrations/supabase/client";

export default function SignUpPage() {
  const navigate = useNavigate();
  usePageMeta({
    title: "Sign up / 註冊 — Flight Price Notifier",
    description:
      "Create a Flight Price Notifier account and get emailed when fares from Taipei drop.",
    ogTitle: "Sign up — Flight Price Notifier",
    ogDescription: "Create an account to start watching flight fares.",
    twitterCard: "summary",
  });
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
          navigate("/app", { replace: true });
        } else {
          setNotice(
            "請到信箱確認你的 email，再回來登入。Check your email to confirm your account.",
          );
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
