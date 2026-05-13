import { useState, useEffect } from "react";
import type { Gif } from "../interfaces/gif";

export const useFavorites = () => {

    /*
    Un estado que empiea con un valor que lo determina una funcion: 
    si hay algo en el item "favorites-gifs" inicia el estado con eso
    sino, con un array vacio
    */
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

    // Retorno a modo de objeto cada funcionalidad
    return {
        favorites,
        toggleFavorite,
        isFavorite,
    };
};