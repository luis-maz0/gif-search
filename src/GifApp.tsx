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
    setPreviousSearches([...previousSearches, query]);
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
