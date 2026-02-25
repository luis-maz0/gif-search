import { mockGifs } from "./mock/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchInput } from "./shared/components/SearchInput";
import { HistoryTags } from "./gifs/components/HistoryTags";
import { GifGrid } from "./gifs/components/GifGrid";
import { useState } from "react";

const GifApp = () => {
  const [previousSearches, setPreviousSearches] = useState([
    "Breaking bad",
    "Game of thrones",
  ]);

  const handleTagClick = (search: string) => {
    console.log({ search });
  };

  const handleInputSearch = (query: string) => {
    //[ ]: Refactorizar utilizando 'Guard Clauses' o 'Early return'
    const MAX_SEARCHES = 8;
    console.log("handleInputSearch ejecutandose");
    const cleanQuery = query.trim().toLowerCase();
    if (!previousSearches.includes(cleanQuery) && cleanQuery !== "") {
      setPreviousSearches(
        [cleanQuery, ...previousSearches].splice(0, MAX_SEARCHES),
      );
      console.log("Busqueda terminada con exito");
    }
  };

  return (
    <>
      <CustomHeader
        title="Search gif app"
        description="Discover awesome gif and share with everybody"
      />
      <SearchInput onSearch={handleInputSearch} />
      <HistoryTags
        previousSearches={previousSearches}
        onTagClick={(search) => handleTagClick(search)}
      />
      <GifGrid gifs={mockGifs} />
    </>
  );
};

export default GifApp;
