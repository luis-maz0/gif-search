import { useRef, useState } from "react";
import type { Gif } from "../interfaces/gif";
import { getGifs } from "../services/gifService";


export const useGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const gifsCache = useRef<Record<string, Gif[]>> ({})
  // miRef = { current: valorInicial }

  const fetchGifs = async (query: string) => {
    if (gifsCache.current[query]) {
      setGifs(gifsCache.current[query]);
      return;
    }
    const buesquedaGifs = await getGifs(query);
    setGifs(buesquedaGifs);

    gifsCache.current[query] = buesquedaGifs;
    console.log(gifsCache);
  };

  return {
    gifs,
    fetchGifs,
  };
};
