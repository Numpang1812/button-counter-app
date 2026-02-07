# [ENGLISH BELOW]

# 岩崎先生授業のボタンカウンターアプリプロジェクト

このアプリは、ボタンが押されるたびにカウンターの数値が 1 増えるシンプルなアプリです。  
TypeScript の使用方法および、REST API バックエンドを用いたデータベース連携の練習を目的としています。

# 開発環境のセットアップ方法

### 0. 必要なもの
次のソフトがパソコンに入っている必要があります。

- Node.js（18 以上）
- npm（Node.js と一緒に入ります）
  
### 1. リポジトリのクローン
```bash
git clone https://github.com/Numpang1812/button-counter-app.git
cd button-counter-app
```

### 2. パッケージのインストール
```bash
npm install
```

### 3. TypeScript のコンパイル（任意）
```bash
npx tsc
```
この作業は、エラーがあるか確認するためです。やらなくても大丈夫です。

### 4. Configuring the .env file:
- For Windows Users:
```bash
copy .env.example .env
```
- For MacOS/Linux Users:
```bash
cp .env.example .env
```
作成された .env ファイルに、データベース URL と認証トークンを入力してください。
（チームメンバーには Turso DB の URL とトークンを共有済みです）

.envの例：
```
TURSO_DATABASE_URL=libsql://your-database-name-xxxx.turso.io
TURSO_AUTH_TOKEN=<your-auth-token>
```

### 5. アプリの起動
```bash
npm run dev
```
ブラウザで以下にアクセスします。
http://localhost:5173

### 6. 本番ビルド（任意）
```bash
npm run build
npm run preview
```

## プロジェクト構成

このアプリは、データベース認証情報を安全に保つため、
SvelteKit の server-only パターンを使用しています。

src/database/db.server.ts
サーバー専用のデータベース接続モジュール

src/routes/api/counter/+server.ts
カウンター用 REST API エンドポイント（GET / POST）

src/utils/logic.ts
API を呼び出すクライアント側ロジック

src/routes/+page.svelte
UI コンポーネント

_______________________________________

# BUTTON-COUNTER APP FOR MR. IWASAKI CLASS

This is a simple app that will increase your counter by one every time someone presses a button. 
This project is for practicing the usage of TypeScript and DB integration with a REST API backend.

# HOW TO SETUP THE DEVELOPMENT ENVIRONMENT AND DEPENDENCIES ON YOUR COMPUTER:

### 0. Prerequisites:
Ensure that you have these prerequisites installed and set up on your computer:
- Node.js (version 18 or higher)
- Node Package Manager (npm)
  
### 1. Cloning the repository:
```bash
git clone https://github.com/Numpang1812/button-counter-app.git
cd button-counter-app
```

### 2. Installing the dependencies:
```bash
npm install
```

### 3. Compiling the TypeScript files (Optional):
```bash
npx tsc
```
It's okay if you skip this step, this is only for checking if there are any errors in the code.
We will use Step 5 to run our app on your browser.

### 4. Configuring the .env file:
- For Windows Users:
```bash
copy .env.example .env
```
- For MacOS/Linux Users:
```bash
cp .env.example .env
```
After you run the command, input your database URL and Auth Token into your `.env` file. 
(If you are my teammates, I have provided our team's Turso DB URL and Auth Token).

The file should look like this:
```
TURSO_DATABASE_URL=libsql://your-database-name-xxxx.turso.io
TURSO_AUTH_TOKEN=<your-auth-token>
```

### 5. Running the app:
```bash
npm run dev
```
After that your code should run on http://localhost:5173

### 6. Building for production (Optional):
```bash
npm run build
npm run preview
```

## Project Structure

The app uses SvelteKit with a server-only pattern to keep database credentials secure:
- `src/database/db.server.ts` — server-only database module
- `src/routes/api/counter/+server.ts` — REST API endpoints (GET/POST)
- `src/utils/logic.ts` — client-side logic that calls the API
- `src/routes/+page.svelte` — the UI component
