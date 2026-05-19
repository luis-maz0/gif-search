import { useEffect, useState } from "react";

interface Props {
  onQuery: (query: string) => void;
}

export const InputSearch = ({ onQuery }: Props) => {
  const [query, setQuery] = useState<string>("");

    useEffect(() => {
      if (query.trim() === "") return;

      const timeOutId = setTimeout(() => {
        console.log("Hola desde el efecto");
        onQuery(query);
      }, 1000);

      return () => {
        clearTimeout(timeOutId);
      };
    }, [query, onQuery]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onQuery(query);
      setQuery("");
    }
  };

  return (
    <section className="search-container">
      <input
        type="text"
        placeholder="Buscar gifs"
        id="input-search"
        name="input-search"
        value={query}
        onChange={(e) => {
          //console.log(e.target.value);
          setQuery(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={() => {
          onQuery(query);
        }}
        className="btn-search"
      >
        Buscar
      </button>
    </section>
  );
};
