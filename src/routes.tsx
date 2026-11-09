import { Navigate, redirect, type RouteObject } from "react-router-dom";

import { RootLayout, RootErrorBoundary, NotFound } from "@/layouts/RootLayout";
import { supabase } from "@/integrations/supabase/client";
import Dashboard from "@/pages/Dashboard";
import Index from "@/pages/Index";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";

// Session lives in browser storage, so every gate runs client-side in a route loader.
async function requireUser() {
  const { data, error } = await supabase.auth.getUser();
  if (error || !data.user) throw redirect("/auth");
  return { user: data.user };
}

async function redirectIfSignedIn() {
  const { data } = await supabase.auth.getSession();
  if (data.session) throw redirect("/app");
  return null;
}

export const routes: RouteObject[] = [
  {
    id: "root",
    element: <RootLayout />,
    errorElement: <RootErrorBoundary />,
    children: [
      { id: "index", path: "/", element: <Index /> },
      { id: "auth", path: "/auth", loader: redirectIfSignedIn, element: <SignIn /> },
      { id: "signup", path: "/signup", loader: redirectIfSignedIn, element: <SignUp /> },
      // Friendly aliases for the sign-in and sign-up pages.
      { id: "sign-in-alias", path: "/sign-in", element: <Navigate to="/auth" replace /> },
      { id: "sign-up-alias", path: "/sign-up", element: <Navigate to="/signup" replace /> },
      { id: "app", path: "/app", loader: requireUser, element: <Dashboard /> },
      { id: "not-found", path: "*", element: <NotFound /> },
    ],
  },
];
