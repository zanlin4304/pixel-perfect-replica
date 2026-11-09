# Pixel Perfect Replica

Implement exactly the screenshot and nothing else

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/da77caba-c9d5-437b-b502-af0b647a9b7c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

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
