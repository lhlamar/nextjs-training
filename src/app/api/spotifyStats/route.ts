// /app/api/spotifyApi/route.ts
// /src/app/api/spotifyStats/stats/tracks.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { topTracks, getAccessToken } from './spotify';
import { NextResponse } from 'next/server'


type Track = {
  title: string;
  artist: string;
  url: string;
  coverImage: {
    url: string;
    width: number;
    height: number;
  };
};

export async function GET() {
  try {
    const response = await topTracks();
    const { items } = await response.json();

    const tracks: Track[] = items.slice(0, 5).map((track: any) => ({
      title: track.name,
      artist: track.artists.map((artist: any) => artist.name).join(", "),
      url: track.external_urls.spotify,
      coverImage: track.album.images[1],  // Assuming this image object has a url, width, and height
    }));

    return NextResponse.json(tracks, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=43200",
      },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch tracks' }, { status: 500 });
  }
}
  
export default getAccessToken;