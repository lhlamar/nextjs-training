// /src/app/api/spotifyStats/lib/spotify.ts

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
  
    return response.json();
};
  
  

export const topTracks = async (): Promise<Response> => {
  const { access_token } = await getAccessToken();

  const response = await fetch("https://api.spotify.com/v1/me/top/tracks", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch top tracks: ${response.statusText}`);
  }

  return response;
};

export const topArtists = async (): Promise<Response> => {
    const { access_token } = await getAccessToken();
  
    const response = await fetch("https://api.spotify.com/v1/me/top/artists", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  
    if (!response.ok) {
      throw new Error(`Failed to fetch top artists: ${response.statusText}`);
    }
  
    return response;
  };
  
  
