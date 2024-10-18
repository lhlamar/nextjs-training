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
  external_urls: { spotify: string };
  images: { url: string; width: number; height: number }[];
};

export async function GET() {
  try {
    const topTracksResponse = await topTracks();
    const topArtistsResponse = await topArtists();

    // Type the API response explicitly
    const { items: topTrackItems }: { items: Track[] } = await topTracksResponse.json();
    const { items: topArtistItems }: { items: Artist[] } = await topArtistsResponse.json();

    console.log({
      topTrackItems,
      topArtistItems,
    }); // Log the data returned by the Spotify API

    // Format and return response
    const tracks = topTrackItems.slice(0, 5).map((track: Track) => ({
      title: track.name,
      artist: track.artists.map((artist) => artist.name).join(", "),
      url: track.external_urls.spotify,
      coverImage: track.album.images[1]?.url || '', // Safely access coverImage
    }));

    const artists = topArtistItems.slice(0, 5).map((artist: Artist) => ({
      name: artist.name,
      url: artist.external_urls.spotify,
      image: artist.images[1]?.url || '', // Safely access image
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
