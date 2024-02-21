# nextjs

### next プロジェクト作成

npx create-next-app@latest

### next 開発環境起動

pnpm dev


package.json の scripts に以下を追加することで pnpm でのみインストール可能にする

"preinstall": "npx only-allow pnpm"
