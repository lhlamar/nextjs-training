export type Track = {
    title : string;
    artist: string;
    url: string;
    coverImage: { height: string, width: string, url: string}
  };
  
export type Artist = {
    name: string;
    url: string;
    image: { url: string; width: number; height: number };
  };