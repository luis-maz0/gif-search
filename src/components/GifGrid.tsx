import type { Gif } from "../interfaces/gif";

interface Props{
    gifsMock: Gif[]
}
export const GifGrid = ({gifsMock}: Props) => {
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
          </div>
        );
      })}
    </section>
  );
};
