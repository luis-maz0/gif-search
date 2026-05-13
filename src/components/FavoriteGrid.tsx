import { useFavorites } from "../hooks/useFavorites";

export const FavoriteGrid = () => {
    const { favorites, toggleFavorite, isFavorite } = useFavorites();

    if (favorites.length === 0) return null;

    return (
        <section className="favorites-section">
        <h2 style={{ margin: "2rem 0 1rem 0", fontSize: "1.4rem" }}>Mis Favoritos</h2>
        
        {/* Reutilizamos la clase gif-grid para mantener el aspecto */}
        <div className="gif-grid">
            {favorites.map((gif) => (
            <div className="gif-card" key={gif.id}>
                <img src={gif.url} alt={gif.title} />
                <h3>{gif.title}</h3>
                <p>{gif.width} x {gif.height}</p>
                
                {/* Botón para quitar de favoritos */}
                <button 
                    className="btn-favorite" 
                    onClick={() => toggleFavorite(gif)}
                >
                {isFavorite(gif.id) ? "❤️ Quitar" : "🤍 Guardar"}
                </button>
            </div>
            ))}
        </div>
        </section>
    );
};