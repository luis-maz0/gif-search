import { createContext } from "react";
import type { Gif } from "../interfaces/gif";

interface FavoritesContextProps {
  favorites: Gif[];
  toggleFavorite: (gif: Gif) => void;
  isFavorite: (id: string) => boolean;
}

// Creamos el contexto
export const FavoritesContext = createContext<FavoritesContextProps>({} as FavoritesContextProps);