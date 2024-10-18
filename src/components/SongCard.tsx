type SongProps = {
    title: string;
    artist: string;
    url: string;
    coverImage: {
      url: string;
      width: number;
      height: number;
    };
  };
  
  const SongCard: React.FC<SongProps> = ({ title, artist, url, coverImage }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={coverImage.url}
          alt={title}
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-600">{artist}</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-indigo-500 hover:text-indigo-600"
          >
            Listen on Spotify
          </a>
        </div>
      </div>
    );
  };
  
  export default SongCard;
  