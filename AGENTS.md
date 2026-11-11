## Project rules

- React component files use PascalCase (`SiteHeader.tsx`); hooks/utils keep camelCase (`useAuthSession.ts`). Why: one naming convention keeps components findable (shadcn `components/ui` files are exempt).
- This is a plain Vite + React SPA (no SSR). Routes are declared in `src/routes.tsx` with React Router and pages live in `src/pages/`. Signed-in pages use a client-side loader gate that redirects to `/auth`. Why: the session is in browser storage, so the server cannot gate. `vercel.json` rewrites every path to `index.html` so deep links resolve client-side.
- The backend is used for authentication only; do not add tables, RPCs or `supabase.from()` queries. Why: application data lives in an external AWS store reached through its own API.
