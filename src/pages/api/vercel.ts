import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const updateVercelEnvVariable = await fetch(
      `https://api.vercel.com/v9/projects/${process.env.VERCEL_PROJECT_ID}/env/${process.env.VERCEL_WHOOP_REFRESH_TOKEN_ENV_VARIABLE_ID}`,
      {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${process.env.VERCEL_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({
          value: req.body.refreshToken,
          comment: `updated on ${new Date().toISOString()}`,
        }),
      }
    )

    await updateVercelEnvVariable.json()

    res.status(200).json({ status: 'OK' })
  } catch (error) {
    console.log(error)

    res.status(500).json({ status: 'NOK' })
  }
}
