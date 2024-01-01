interface RefreshTokenResponse {
  access_token: string
  expires_in: number
  refresh_token: string
  scope: string
  token_type: string
}

const SCOPES = 'offline read:sleep read:workout'

const getRefreshTokens = async (): Promise<RefreshTokenResponse> => {
  const whoopStoredRefreshToken = await fetch(
    `https://api.vercel.com/v1/projects/${process.env.VERCEL_PROJECT_ID}/env/${process.env.VERCEL_WHOOP_REFRESH_TOKEN_ENV_VARIABLE_ID}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.VERCEL_ACCESS_TOKEN}`,
      },
    }
  )

  const refreshToken = await whoopStoredRefreshToken.json()

  const refreshTokensReponse = await fetch(`${process.env.WHOOP_TOKEN_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken.value,
      client_id: `${process.env.WHOOP_CLIENT_ID}`,
      client_secret: `${process.env.WHOOP_CLIENT_SECRET}`,
      scope: SCOPES,
      redirect_uri: 'https://oauth.pstmn.io/v1/callback',
    }),
  })

  const response = await refreshTokensReponse.json()

  return response
}

export const getSleepData = async () => {
  const { access_token, refresh_token: refreshToken } = await getRefreshTokens()

  // To be run only on production
  await fetch('https://enaut.dev/api/vercel', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ refreshToken }),
  })

  const sleepData = await fetch(
    // To be added as env variable
    'https://api.prod.whoop.com/developer/v1/activity/sleep',
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  )

  return sleepData.json()
}
