import { useFavorites } from "../hooks/useFavorites";
import type { Gif } from "../interfaces/gif";

interface Props{
    gifsMock: Gif[]
}
export const GifGrid = ({gifsMock}: Props) => {
    const { toggleFavorite, isFavorite } = useFavorites();

    return (
        <section className="gif-grid">
        {gifsMock.map((gif) => {
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
    );
};
