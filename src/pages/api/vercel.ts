import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const updateVercelEnvVariable = await fetch(
    `https://api.vercel.com/v9/projects/${process.env.VERCEL_PROJECT_ID}/env/${process.env.VERCEL_WHOOP_REFRESH_TOKEN_ENV_VARIABLE_ID}`,
    {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${process.env.VERCEL_ACCESS_TOKEN}`,
      },
      body: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error `value` is accepted by the Vercel API
        value: req.body.refreshToken,
      },
    }
  )

  await updateVercelEnvVariable.json()

  res.status(200).json({ status: 'OK' })
}
