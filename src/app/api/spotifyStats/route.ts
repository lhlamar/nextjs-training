// /app/api/spotifyApi/route.ts
// /src/app/api/spotifyStats/stats/tracks.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { topTracks } from './spotify';
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

// /src/app/api/spotifyStats/lib/spotify.ts

const getAccessToken = async (): Promise<{ access_token: string }> => {
    const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN as string;
  
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
        ).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token,
      }),
    });
  
    if (!response.ok) {
      throw new Error(`Failed to fetch access token: ${response.statusText}`);
    }
  
    return response.json();
  };
  
export default getAccessToken;