import { ImageResponse } from '@vercel/og'
import type { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge',
}

async function handler(req: NextRequest): Promise<ImageResponse> {
  try {
    const { searchParams } = new URL(req.url)
    const title = searchParams.get('title')

    if (!title) {
      return new Response(`Missing "title" parameter`, { status: 400 })
    }

    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            letterSpacing: '-.02em',
            fontWeight: 700,
            background: '#16181c',
          }}
        >
          <div
            style={{
              left: 42,
              top: 42,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                width: 24,
                height: 24,

                background: '#81ACEC',
              }}
            />
            <span
              style={{
                marginLeft: 8,
                fontSize: 20,
                color: '#fff',
              }}
            >
              enaut.dev
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              borderRadius: '8px',
              padding: '20px 50px',
              margin: '0 42px',
              fontSize: 60,
              width: 'auto',
              textAlign: 'center',
              backgroundColor: '#282c35',
              color: 'white',
              lineHeight: 1.4,
            }}
          >
            {title}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch {
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}

export default handler
