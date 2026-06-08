import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { FavoritesContext } from "./FavoriteContext";
import type { Gif } from "../interfaces/gif";

interface Props {
  children: ReactNode;
}

export const FavoritesProvider = ({ children }: Props) => {
  const [favorites, setFavorites] = useState<Gif[]>(() => {
    const localData = localStorage.getItem("favorites-gifs");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites-gifs", JSON.stringify(favorites));
  }, [favorites]);

  const isFavorite = (id: string) => favorites.some((fav) => fav.id === id);

  const toggleFavorite = (gif: Gif) => {
    if (isFavorite(gif.id)) {
      setFavorites(favorites.filter((fav) => fav.id !== gif.id));
    } else {
      setFavorites([...favorites, gif]);
    }
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

