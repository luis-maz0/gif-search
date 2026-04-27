import { useState } from 'react';
import { getGifsByQuery } from '../gifs/actions/get-gifs-by-query.action';
import type { Gif } from '../gifs/interfaces/gif';

// empieza con use
export const useGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);

  const getGifs = async (query: string) => {
    const gifsResult = await getGifsByQuery(query);
    setGifs(gifsResult);
  };

  // Retornamos lo que un componente va a necesitar de este hook
  return { gifs, getGifs };
};