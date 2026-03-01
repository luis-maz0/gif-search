import { useEffect, useState } from "react";

interface Props {
  onSearch: (query: string) => void;
}

export const SearchInput = ({ onSearch }: Props) => {
  const [query, setQuery] = useState("");
  //Cada vez que se oprime una tecla, la función de limpieza se ejecuta.
  //Se está desmontando el componente con cada tecla?
  //Por qué va también la función onSearch en las dependecias si solo cambia query?
  //Si se ejecuta el handleKeyDown antes de que termine el setTimeOut, se ejecuta el use effect, haciendo que la función onSearch() se ejecuta dos veces.
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
