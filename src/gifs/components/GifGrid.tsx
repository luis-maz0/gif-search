import type { Gif } from "../../mock/gifs.mock";

interface Props {
  gifs: Gif[];
}

export const GifGrid = ({ gifs }: Props) => {
  return (
    <section className="gif-grid">
      {gifs.map((gif) => {
        return (
          <div className="gif-card" key={gif.id}>
            <img src={gif.url} alt={gif.title} />
            <h3>{gif.title}</h3>
            <p>
              {gif.width}x{gif.height}
            </p>
          </div>
        );
      })}
    </section>
  );
};
