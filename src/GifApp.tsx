import { mockGifs } from "./mock/gifs.mock";

const GifApp = () => {
  return (
    <>
      <header>
        <h1>Search gif app</h1>
        <p>Discover awesome gif and share with everybody</p>
      </header>

      <div className="search-container">
        <input type="text" placeholder="search gif" />
        <button className="btn-search">search</button>
      </div>

      <div className="history-container">
        <h2>Previous searches</h2>
        <ul className="history-tags">
          <li className="tag">Breaking bad</li>
          <li className="tag">Game of thrones</li>
        </ul>
      </div>

      <div className="gif-grid">
        {mockGifs.map((gif) => {
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
      </div>
    </>
  );
};

export default GifApp;
