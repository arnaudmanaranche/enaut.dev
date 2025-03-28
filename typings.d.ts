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
    PROJECTS_DATABASE_ID: string
  }
}
