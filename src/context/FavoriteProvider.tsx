import { useEffect, useState, type ReactNode } from "react";
import { FavoritesContext } from "./FavoriteContext";
import type { Gif } from "../interfaces/gif";

interface Props {
    children: ReactNode;
}

export const FavoriteProvider = ({children}: Props) => {
    const [favorites, setFavorites] = useState<Gif[]>(() => {
        const localData = localStorage.getItem("favorites-gifs");
            return localData ? JSON.parse(localData) : [];
        });
    
        // cada vez que cambia favorites, lo pone en el local storage
        useEffect(() => {
            localStorage.setItem("favorites-gifs", JSON.stringify(favorites));
        }, [favorites]);
    
        // Funcion auxiliar para saber si es fav
        const isFavorite = (id: string) => {
            return favorites.some((fav) => fav.id === id);
        };
    
        // FUncion auxiliar para cambiar si es o no fav
        const toggleFavorite = (gif: Gif) => {
            if (isFavorite(gif.id)) {
                setFavorites(favorites.filter((fav) => fav.id !== gif.id));
            } else {
                setFavorites([...favorites, gif]);
            }
        };

    return (
        <FavoritesContext.Provider value={{favorites, isFavorite, toggleFavorite}}>
            {children}
        </FavoritesContext.Provider>
    )
}