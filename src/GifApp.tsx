import { useState } from "react";
import { useFavorites } from "./hooks/useFavorites";
import { FavoritesPage } from "./pages/FavoritesPage";
import { SearchPage } from "./pages/SearchPage";
import { CustomHeader } from "./components/CustomHeader";

export const GifApp = () => {

  const {favorites, isFavorite, toggleFavorite} = useFavorites()

  const [paginaActual, setPaginaActual] = useState<"busqueda" | "favoritos">("favoritos")

  return (
    <>
      {
        paginaActual === "busqueda" ? 
          <SearchPage isFavorite={isFavorite} toggleFavorite={toggleFavorite}></SearchPage>
        : (<FavoritesPage favorites={favorites} isFavorite={isFavorite} toggleFavorite={toggleFavorite}></FavoritesPage>
        )
      }
    </>
  );
};
