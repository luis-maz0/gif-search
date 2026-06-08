import { useContext } from "react";
import { FavoritesContext } from "../context/FavoriteContext";

export const FavoriteGrid = () => {

    const { favorites, toggleFavorite, isFavorite } = useContext(FavoritesContext);

    if (favorites.length === 0) return null;

    return (
        <section className="favorites-section">
            <h2 style={{margin: "2 rem 0 1rem 0", fontSize: "1.4"}}>Mis Favoritos</h2>
            {favorites.map((gif) => {
                return (
                    <div className="gif-card" key={gif.id}>
                        <img src={gif.url} alt="" />
                        <h3>{gif.title}</h3>
                        <p>
                            {gif.width} x {gif.height}
                        </p>
                        <button className="btn-favorite" onClick={() => toggleFavorite(gif)}>
                            {isFavorite(gif.id) ? "❤️ Quitar" : "🤍 Guardar"}
                        </button>
                    </div>
                );
            })}
        </section>
    )
}