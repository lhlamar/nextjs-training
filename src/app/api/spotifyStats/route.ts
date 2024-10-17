// /app/api/spotifyApi/route.ts
import { NextResponse } from 'next/server';

// Replace with your actual Spotify credentials from environment variables
const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;
const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

async function getAccessToken() {
  const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${basicAuth}`,
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken as string,
    }),
  });
  const data = await tokenResponse.json();
  return data.access_token;
}

export async function GET() {
  const accessToken = await getAccessToken();

  // Example: Fetch Spotify user profile data
  const spotifyResponse = await fetch('https://api.spotify.com/v1/me', {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
  });

  const spotifyData = await spotifyResponse.json();
  return NextResponse.json(spotifyData);
}
