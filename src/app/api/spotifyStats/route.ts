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


    const { items: topTrackItems } = await topTracksResponse.json();
    const { items: topArtistItems } = await topArtistsResponse.json();


    console.log({
      topTrackItems,
      topArtistItems,
    }); // Log the data returned by the Spotify API

    // Format and return response
    const tracks = topTrackItems.slice(0, 5).map((track: any) => ({
      title: track.name,
      artist: track.artists.map((artist: any) => artist.name).join(", "),
      url: track.external_urls.spotify,
      coverImage: track.album.images[1],
    }));

    const artists = topArtistItems.slice(0, 5).map((artist: any) => ({
      name: artist.name,
      url: artist.external_urls.spotify,
      image: artist.images[1],
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

