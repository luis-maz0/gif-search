import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchInput } from "./shared/components/SearchInput";
import { HistoryTags } from "./gifs/components/HistoryTags";
import { GifGrid } from "./gifs/components/GifGrid";
import { useEffect, useState } from "react";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";
import type { Gif } from "./gifs/interfaces/gif";
import { useGifs } from "./hooks/useGifs";

const GifApp = () => {
  const { gifs, getGifs } = useGifs()
  const [previousSearches, setPreviousSearches] = useState([
    "Breaking bad",
    "Game of thrones",
  ]);

  useEffect(() => {
    getGifs("breaking bad")
  }, [])

  const handleTagClick = async (search: string) => {
    getGifs(search);
  };

  const handleInputSearch = async (query: string) => {
    //[ ]: Refactorizar utilizando 'Guard Clauses' o 'Early return'
    const MAX_SEARCHES = 8;
    console.log("handleInputSearch ejecutandose");
    const cleanQuery = query.trim().toLowerCase();
    if (!previousSearches.includes(cleanQuery) && cleanQuery !== "") {
      setPreviousSearches(
        [cleanQuery, ...previousSearches].splice(0, MAX_SEARCHES),
      );
      getGifs(query);
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
      <GifGrid gifs={gifs} />
    </>
  );
};

export default GifApp;
