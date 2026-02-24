import { useState } from "react";

interface Props {
  onSearch: (query: string) => void;
}

export const SearchInput = ({ onSearch }: Props) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
    setQuery("");
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
