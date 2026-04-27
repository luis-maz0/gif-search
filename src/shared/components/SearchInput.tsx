import { useEffect, useState } from "react";

interface Props {
  onSearch: (query: string) => void;
}

export const SearchInput = ({ onSearch }: Props) => {
  const [query, setQuery] = useState("");
  
  useEffect(() => {
    const timeoutID = setTimeout(() => {
      if (query !== "") {
        onSearch(query);
        console.log("buscando " + query);
      }
    }, 800);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [query, onSearch]);

  const handleSearch = () => {
    onSearch(query);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <section className="search-container">
      <input
        type="text"
        placeholder="search gif"
        id="search-input"
        name="search-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="btn-search" onClick={handleSearch}>
        search
      </button>
    </section>
  );
};
