import { useState, useEffect } from "react";
import { useFavorites } from "./hooks/useFavorites";
import { FavoritesPage } from "./pages/FavoritesPage";
import { SearchPage } from "./pages/SearchPage";
import { CustomHeader } from "./components/CustomHeader";

const navigate = (path: string) => {
  window.history.pushState({}, "", path);
  
  const navigationEvent = new Event("pushstate");
  window.dispatchEvent(navigationEvent);
};

export const GifApp = () => {

  const {favorites, isFavorite, toggleFavorite} = useFavorites()

  const [paginaActual, setPaginaActual] = useState<string>("/")

  useEffect(() => {

    const onLocationChange = () => {
      setPaginaActual(window.location.pathname);
    };

    // evento personalizado nuestro
    window.addEventListener("pushstate", onLocationChange);

    // evento nativo del navegador (cuando el usuario toca "Atrás")
    window.addEventListener("popstate", onLocationChange);

    return () => {
      window.removeEventListener("pushstate", onLocationChange);
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);

  return (
    <>
      <nav className="nav-container">
        <button 
          onClick={() => navigate("/")} 
          className={`nav-btn ${paginaActual === "/" ? "active" : ""}`}
        >
          🔍 Buscar GIFs
        </button>
        <button 
          onClick={() => navigate("/favoritos")} 
          className={`nav-btn ${paginaActual === "/favoritos" ? "active" : ""}`}
        >
          ❤️ Mis Favoritos ({favorites.length})
        </button>
      </nav>

      {paginaActual === "/" && <SearchPage isFavorite={isFavorite} toggleFavorite={toggleFavorite}></SearchPage>}
      {paginaActual === "/favoritos" && <FavoritesPage favorites={favorites} isFavorite={isFavorite} toggleFavorite={toggleFavorite}></FavoritesPage>}
    </>
  );
};