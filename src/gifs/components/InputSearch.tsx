import { useState } from "react";

interface Props {
  placeHolder: string;
  onQuery: (query: string) => void;
}

export const InputSearch = ({ placeHolder, onQuery }: Props) => {
  const [query, setQuery] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onQuery(query);
      setQuery("");
    }
  };
  const handleInputSearch = () => {
    onQuery(query);
    setQuery("");
  };

  return (
    <section className="search-container">
      <input
        type="text"
        placeholder={placeHolder}
        id="search-input"
        name="search-input"
        value={query}
        onChange={(e) => {
          console.log(e.target.value);
          setQuery(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleInputSearch} className="btn-search">
        Buscar
      </button>
    </section>
  );
};
