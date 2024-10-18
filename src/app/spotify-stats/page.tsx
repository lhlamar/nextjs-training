'use client';

import { useEffect, useState } from 'react';
import SongCard from '@/components/SongCard'; // Adjust the path to your SongCard component

type Song = {
  title: string;
  artist: string;
  url: string;
  coverImage: {
    url: string;
    width: number;
    height: number;
  };
};

export default function SpotifyStats() {
  const [songs, setSongs] = useState<Song[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/spotifyStats');
        const result = await response.json();
        setSongs(result.topTracks); // Assuming the response contains topTracks
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p className="text-center text-lg">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Top 5 Tracks</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {songs.map((song, index) => (
          <SongCard key={index} {...song} />
        ))}
      </div>
    </div>
  );
}
