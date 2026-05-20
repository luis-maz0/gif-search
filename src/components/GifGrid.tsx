import type { Gif } from "../interfaces/gif";

interface Props{
    gifsMock: Gif[],
    toggleFavorite: (gif:Gif) => void,
    isFavorite: (id:string) => boolean
}
export const GifGrid = ({gifsMock, isFavorite, toggleFavorite}: Props) => {

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
