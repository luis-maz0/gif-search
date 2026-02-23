import { mockGifs } from "./mock/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchInput } from "./shared/components/SearchInput";
import { HistoryTags } from "./gifs/components/HistoryTags";
import { GifGrid } from "./gifs/components/GifGrid";

const GifApp = () => {
  return (
    <>
      <CustomHeader
        title="Search gif app"
        description="Discover awesome gif and share with everybody"
      />
      <SearchInput />
      <HistoryTags  previousSearches={['Breaking bad', 'Game of thrones']} />
      <GifGrid gifs={mockGifs} />
    </>
  );
};

export default GifApp;
