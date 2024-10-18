type ArtistProps = {
    name: string;
    url: string;
    image: {
      url: string;
      width: number;
      height: number;
    };
  };
  
  const ArtistCard: React.FC<ArtistProps> = ({ name, url, image }) => {
    return (
      <div className="bg-darker shadow-lg rounded-lg overflow-hidden">
        <img
          src={image.url}
          alt={name}
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-foreground">{name}</h3>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-mid hover:text-foreground"
          >
            View on Spotify
          </a>
        </div>
      </div>
    );
  };
  
  export default ArtistCard;
  