namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string
    // Vercel
    VERCEL_ACCESS_TOKEN: string
    VERCEL_PROJECT_ID: string
    VERCEL_WHOOP_REFRESH_TOKEN_ENV_VARIABLE_ID: string
    // Notion
    NOTION_SECRET: string
    CHANGELOG_DATABASE_ID: string
    QUOTES_DATABASE_ID: string
    READINGS_DATABASE_ID: string
    TWIL_DATABASE_ID: string
    // Spotify
    SPOTIFY_REFRESH_TOKEN: string
    SPOTIFY_BASE64_ENCODED: string
    // Whoop
    WHOOP_CLIENT_ID: string
    WHOOP_CLIENT_SECRET: string
    WHOOP_AUTHORIZATION_URL: string
    WHOOP_TOKEN_URL: string
    WHOOP_ACCESS_TOKEN: string
    WHOOP_REFRESH_TOKEN: string
  }
}
