# RAYS portfolio

Public URL: https://rays-dev.com/

## Build and deploy

```sh
npm ci
npm run build
npm run deploy
```

Production uses the existing Cloudflare Workers application `rays-dev` and
`wrangler.production.jsonc`. Authenticate with `wrangler login` when needed.
The root domain's existing custom domain and DNS configuration are retained.
The Sites build configuration remains in `wrangler.jsonc` and `.openai/hosting.json`.

## Small applications

Static applications live in `public/apps/<slug>/` and are published with the
portfolio. Use relative asset paths so each application works below its own
directory. Link to `/apps/<slug>/` from `app/page.tsx`; no per-application DNS
record is needed.

### Select cheaper

- URL: https://rays-dev.com/apps/select-cheaper/
- Source: https://github.com/milky1210/select_cheaper
- Imported commit: `258a280cac3760c64cce388caa55637c424c2e2d`

To update it, test and build that source repository, then copy its `dist/`
contents into `public/apps/select-cheaper/` and update the imported commit above.
Run the portfolio build and deploy again.
