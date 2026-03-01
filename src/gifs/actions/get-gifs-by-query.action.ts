import type { Gif } from "../interfaces/gif";
import type { GiphyResponse } from "../interfaces/giphy.response";

//[ ] Refactor: Implementar axios con objeto configurable y variables de entorno para API_KEY. 
const API_KEY = "qV9jCsCJC76RQgSDFsJPe7IxNWhvjwXz";

export const getGifsByQuery = async (query: string): Promise<Gif[]> => {
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=10&rating=g&lang=en`;
  const response = await fetch(URL);
  const data: GiphyResponse = await response.json();
  return data.data.map((gif) => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images.original.url,
      width: Number(gif.images.original.width),
      height: Number(gif.images.original.height),
    };
  });
};
