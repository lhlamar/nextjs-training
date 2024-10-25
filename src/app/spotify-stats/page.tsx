

import TopTracks from '@/components/TopTracks';
import TopArtists from '@/components/TopArtists';
import { Suspense } from 'react';

export default function SpotifyStats() {

  return (
    <div id="top-tracks-nav">
      <Suspense fallback={<div>Loading Top Tracks...</div>}>
        <TopTracks/>
      </Suspense>
      <hr id="top-artists-nav" className="boarder-t boarder-gray-300"></hr>
      <Suspense fallback={<div>Loading Top Artists...</div>}>
        <TopArtists/>
      </Suspense>
    </div>
  );

}
