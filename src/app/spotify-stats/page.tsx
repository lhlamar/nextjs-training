'use client';

import { useEffect, useState } from 'react';

export default function SpotifyStats() {
  const [data, setData] = useState<string>('Loading...');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/spotifyStats');
        const result = await response.json();
        setData(JSON.stringify(result, null, 2)); // Converts JSON to a formatted string
      } catch (error) {
        setData('Error fetching data');
      }
    };

    fetchData();
  }, []);

  //what should i put on this page?
  // my top 5 artists

  return (
    <main>
      <p>
        <pre>{data}</pre> {/* Wraps the JSON data in <pre> for better formatting */}
        
      </p>
    </main>
  );
}
