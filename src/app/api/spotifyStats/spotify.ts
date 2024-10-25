import { Artist, Track } from '@/types/spotifyTypes'

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export const getAccessToken = async (): Promise<{ access_token: string }> => {
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
      throw new Error(`${response.statusText}`);
    }
  
    const data = await response.json();

    return data.access_token;
};

export const topArtists = async(): Promise<Artist[]> => {
  const access_token = await getAccessToken();

  const response = await fetch("https://api.spotify.com/v1/me/top/artists", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch top tracks: ${response.statusText}`);
  }

  const { items: topArtistItems } = await response.json();

  const artists = topArtistItems.slice(0, 5).map((artist: Artist) => ({
    name: artist.name,
    url: artist.external_urls?.spotify ?? `couldn't find`,
    image: artist.images?.[1] ?? { url: "default-image-url.jpg", width: 0, height: 0 }, // Fallback to a default image
  }));

  return artists;
}

  

export const topTracks = async (): Promise<Track[]> => {
  const access_token = await getAccessToken();

  const response = await fetch("https://api.spotify.com/v1/me/top/tracks", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch top tracks: ${response.statusText}`);
  }


  const { items: topTrackItems } = await response.json();

  // Format and return response
  const tracks = topTrackItems.slice(0, 5).map((track: Track) => ({
    title: track.name,
    artist: track.artists.map((artist: Artist) => artist.name).join(", "),
    url: track.external_urls.spotify,
    coverImage: track.album.images[1],
  }));


  return tracks;
};
