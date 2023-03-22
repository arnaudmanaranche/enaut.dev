import type { NextApiRequest, NextApiResponse } from 'next'

import { getNowPlaying } from '@/libs/spotify'

export interface NowPlayingType {
  artist: string
  songUrl: string
  title: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<NowPlayingType>
): Promise<void> {
  const response = await getNowPlaying()

  if (response.status === 204 || response.status > 400) {
    return res.json({ artist: '', songUrl: '', title: '' })
  }

  const song = await response.json()

  if (song.item === null) {
    return res.json({ artist: '', songUrl: '', title: '' })
  }

  const title = song.item.name
  const artist = song.item.artists
    .map((_artist: { name: string }) => _artist.name)
    .join(', ')
  const songUrl = song.item.external_urls.spotify

  res.json({
    artist,
    songUrl,
    title,
  })
}
