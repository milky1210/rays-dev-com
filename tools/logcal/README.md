# logCalDojo教材の移管

Source: https://github.com/milky1210/logCalDojo
Imported commit: e11d793 (main, 2026-11-08)

元の問題生成Pythonスクリプトをこのディレクトリに保存。
公開・編集する問題JSONの管理元は `public/learn/logcal/data/`。
`core.js` のコース定義で使用する教材を選択する。
`geo_v1.json` と `iso3_to_jpname.json` は元の地理教材データとして保持しているが、クイズには使わない。

元のリポジトリやローカルフォルダを編集しても自動同期しない。
生成スクリプトは作業用ディレクトリで実行し、検証後にJSONを管理元へコピーする。
元教材の正答は数そのものではなく常用対数。人口データは2024年時点。
「何分の1」の問題では分母の常用対数を回答する。
