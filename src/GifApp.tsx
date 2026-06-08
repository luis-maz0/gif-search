import { useState, useEffect, useContext } from "react";
import { FavoritesPage } from "./pages/FavoritesPage";
import { SearchPage } from "./pages/SearchPage";
import { FavoritesContext } from "./context/FavoriteContext";

const navigate = (path: string) => {
  window.history.pushState({}, "", path);
  
  const navigationEvent = new Event("pushstate");
  window.dispatchEvent(navigationEvent);
};

export const GifApp = () => {

  const { favorites } = useContext(FavoritesContext);

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

      {paginaActual === "/" && <SearchPage ></SearchPage>}
      {paginaActual === "/favoritos" && <FavoritesPage></FavoritesPage>}
    </>
  );
};