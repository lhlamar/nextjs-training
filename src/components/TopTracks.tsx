import { topTracks } from "@/app/api/spotifyStats/spotify"
import SongCard from "@/components/SongCard";

export default async function TopTracks() {

   const tracks = await topTracks();

    return (
        <div className="min-h-screen container mx-auto p-6">
            {/* Top Tracks Section */}
            <div>
                <h2 className="mt-8 text-2xl font-bold mb-6 text-center">Top 5 Tracks</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {tracks.slice(0, 3).map((track, index) => (
                        <SongCard key={index} {...track} />
                    ))}
                </div>
                <div className="grid grid-cols-2 gap-6 justify-center mt-6">
                    {tracks.slice(3).map((artist, index) => (
                        <SongCard key={index} {...artist} />
                    ))}
                </div>
            </div>
        </div>
    );
}
