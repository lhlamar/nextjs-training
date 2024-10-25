import { Track } from '@/types/spotifyTypes'

  const SongCard: React.FC<Track> = ({ title, artist, url, coverImage }) => {
    return (
      <div className="bg-darker shadow-lg rounded-lg overflow-hidden">
        <img
          src={coverImage.url}
          alt={title}
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className="text-mid">{artist}</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-mid hover:text-foreground"
          >
            Listen on Spotify
          </a>
        </div>
      </div>
    );
  };
  
  export default SongCard;
  