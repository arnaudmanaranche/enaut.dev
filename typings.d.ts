namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string
    // Vercel
    VERCEL_ACCESS_TOKEN: string
    VERCEL_PROJECT_ID: string
    VERCEL_WHOOP_REFRESH_TOKEN_ENV_VARIABLE_ID: string
    // Notion
    NOTION_SECRET: string
    BLOG_DATABASE_ID: string
    // Whoop
    WHOOP_CLIENT_ID: string
    WHOOP_CLIENT_SECRET: string
    WHOOP_TOKEN_URL: string
    WHOOP_REFRESH_TOKEN: string
  }
}
