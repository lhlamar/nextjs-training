import { topTracks, topArtists } from './spotify'; // Import the new functions
import { NextResponse } from 'next/server';

type Track = {
  name: string;
  artists: { name: string }[];
  external_urls: { spotify: string };
  album: {
    images: { url: string; width: number; height: number }[];
  };
};

type Artist = {
  name: string;
  external_urls?: { spotify: string };
  images?: { url: string; width: number; height: number }[];
};

export async function GET() {
  try {
    const topTracksResponse = await topTracks();
    const topArtistsResponse = await topArtists();


    const { items: topTrackItems } = await topTracksResponse.json();
    const { items: topArtistItems } = await topArtistsResponse.json();

    // Format and return response
    const tracks = topTrackItems.slice(0, 5).map((track: Track) => ({
      title: track.name,
      artist: track.artists.map((artist: Artist) => artist.name).join(", "),
      url: track.external_urls.spotify,
      coverImage: track.album.images[1],
    }));

    const artists = topArtistItems.slice(0, 5).map((artist: Artist) => ({
      name: artist.name,
      url: artist.external_urls?.spotify ?? `couldn't find`,
      image: artist.images?.[1] ?? { url: "default-image-url.jpg", width: 0, height: 0 }, // Fallback to a default image
    }));

    return NextResponse.json({
      topTracks: tracks,
      topArtists: artists,
    });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: `${error}` }, { status: 500 });
  }
}

