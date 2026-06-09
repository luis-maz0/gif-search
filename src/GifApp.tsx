import { useContext } from "react";
import { Link, Routes, Route, useLocation } from "react-router";
import { FavoritesPage } from "./pages/FavoritesPage";
import { SearchPage } from "./pages/SearchPage";
import { FavoritesContext } from "./context/FavoriteContext";

export const GifApp = () => {
  const { favorites } = useContext(FavoritesContext);
  const { pathname } = useLocation();

  return (
    <>
      <nav className="nav-container">
        <Link
          to="/"
          className={`nav-btn ${pathname === "/" ? "active" : ""}`}
        >
          🔍 Buscar GIFs
        </Link>
        <Link
          to="/favoritos"
          className={`nav-btn ${pathname === "/favoritos" ? "active" : ""}`}
        >
          ❤️ Mis Favoritos ({favorites.length})
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/favoritos" element={<FavoritesPage />} />
      </Routes>
    </>
  );
};