import { topArtists } from "@/app/api/spotifyStats/spotify";
import ArtistCard from "@/components/ArtistCard";

export default async function TopArtists() {

    const artists = await topArtists();

    return (
        <div className="min-h-screen container mx-auto p-6">
            <div>
                <h2 className="mt-12 text-2xl font-bold mb-6 text-center">Top 5 Artists</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {artists.slice(0, 3).map((artist, index) => (
                        <ArtistCard key={index} {...artist} />
                    ))}
                </div>
                <div className="grid grid-cols-2 gap-6 justify-center mt-6">
                    {artists.slice(3).map((artist, index) => (
                        <ArtistCard key={index} {...artist} />
                    ))}
                </div>
            </div>

        </div>
    );
}   
