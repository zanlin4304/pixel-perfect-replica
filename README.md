# Pixel Perfect Replica

Implement exactly the screenshot and nothing else

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Build & deploy

This is a static Vite + React single-page app using React Router.

```sh
npm run build   # outputs static files to dist/
npm run preview # serve dist/ locally
```

Deploy `dist/` to any static host. On Vercel, `vercel.json` sets the output directory and a
catch-all rewrite to `index.html`, so deep links such as `/app` resolve client-side. Set
`VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` in the host's environment variables.
