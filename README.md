# RAYS platform — Single Source of Truth

Public URL: https://rays-dev.com/

このフォルダ `C:\Users\mituk\hobby\rays-platform` と
https://github.com/milky1210/rays-dev-com の `main` を管理元とする。
旧Codex作業フォルダ、旧logCalDojoリポジトリ、Cloudflare画面上の直接編集は自動同期されない。
変更はこのプロジェクトで行い、検証後にpushする。

## 日常の更新

```sh
npm ci
npm run check
git add .
git commit -m "Describe the change"
git push origin main
```

`.github/workflows/deploy.yml` がテスト・ビルド・公開ファイル確認を実施する。
PRでは検証のみ、mainへのpushでは検証済みの同じ成果物を既存Cloudflare Worker `rays-dev` へ公開する。
失敗時は以前の本番デプロイが維持される。手動の再実行はGitHub Actionsのworkflow_dispatchから可能。

### CI用認証の初回設定

CloudflareのユーザーAPIトークンを作成し、対象アカウントを
`8b28fa88750c1aa6dd53f5537a849eb5` に限定して Workers Scripts: Edit を付与する。
この構成は既存Workerと既存カスタムドメインを使用するので、新規DNSの編集権限は不要。
GitHubリポジトリのActions Secret `CLOUDFLARE_API_TOKEN` として登録する。

```sh
gh secret set CLOUDFLARE_API_TOKEN --repo milky1210/rays-dev-com
gh workflow run deploy.yml --repo milky1210/rays-dev-com
```

`gh secret set` の対話入力にトークンを入力する。ソース、チャット、コマンド引数に値を書かない。
ローカルの `wrangler login` は短期OAuth認証なので、Actions用Secretには流用しない。
未登録の場合もCI検証は実行されるが、公開ジョブは明示的なエラーで停止する。

公式手順: https://developers.cloudflare.com/workers/ci-cd/external-cicd/github-actions/

## Build and deploy

```sh
npm ci
npm run check
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

## ログ算道場

- 公開URL: https://rays-dev.com/learn/logcal/
- UIと学習ロジック: `public/learn/logcal/`
- 教材JSON: `public/learn/logcal/data/`
- 元教材の生成スクリプト: `tools/logcal/`
- 移管元: https://github.com/milky1210/logCalDojo (e11d793)
- iOS版 `logCal` は別アプリとして保持し、このWeb版には取り込まない。

独立した静的ページなのでポートフォリオと一緒にビルド・公開される。
1回最大10問、常用対数で回答し誤差±0.1以内を正解とする。
「何分の1」は分母の対数。人口コースは元教材の2024年時点の数値を使用する。
記録はlocalStorageに保存され、サーバーアカウントや同期は不要。

## 移管時に保持した公開済み変更

GitHubの元HEAD `b63abf4` に加え、旧ローカル作業フォルダの公開済みコミット
`d67f898`（select-cheaperのパス公開とWorker設定）を履歴ごと取り込んでいる。
既存のカスタムドメインや他のWorkerはこのプロジェクトから変更しない。

## キャラクターとブランド素材

デザイン資料、生成プロンプト、画像の保存先は `docs/brand/README.md` に記録する。
共通アイコンは `public/favicon.svg`。キャラクターの案内・思案・笑顔の3ポーズは
`public/assets/rays-welcome.png`、`rays-thinking.png`、`rays-celebrate.png`。
SNS共有画像は `public/og-rays.png` を使用する。
