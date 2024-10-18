'use client';

import { useEffect, useState } from 'react';
import SongCard from '@/components/SongCard';
import ArtistCard from '@/components/ArtistCard';

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

type Artist = {
  name: string;
  url: string;
  image: {
    url: string;
    width: number;
    height: number;
  };
};


export default function SpotifyStats() {
  const [topTracks, setTopTracks] = useState<Song[]>([]);
  const [topArtists, setTopArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/spotifyStats');
        const result = await response.json();
        setTopTracks(result.topTracks);
        setTopArtists(result.topArtists);
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
      <div id="top-tracks">
          <div className="min-h-screen container mx-auto p-6">
            {/* Top Tracks Section */}
            <div>
              <h2 className="mt-8 text-2xl font-bold mb-6 text-center">Top 5 Tracks</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {topTracks.slice(0, 3).map((track, index) => (
                  <SongCard key={index} {...track} />
                  ))}
              </div>
              <div className="grid grid-cols-2 gap-6 justify-center mt-6">
                  {topTracks.slice(3).map((artist, index) => (
                  <SongCard key={index} {...artist} />
                  ))}
              </div>
            </div>
          </div>
      
            <hr id="top-artists" className="boarder-t boarder-gray-300"></hr>
        
          <div className="min-h-screen container mx-auto p-6">
            {/* Top Artists Section */}
            <div>
              <h2 className="mt-12 text-2xl font-bold mb-6 text-center">Top 5 Artists</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {topArtists.slice(0, 3).map((artist, index) => (
                  <ArtistCard key={index} {...artist} />
                  ))}
              </div>
              <div className="grid grid-cols-2 gap-6 justify-center mt-6">
                  {topArtists.slice(3).map((artist, index) => (
                  <ArtistCard key={index} {...artist} />
                  ))}
              </div>
            </div>
          
            </div>
          </div>
        );
  
}
