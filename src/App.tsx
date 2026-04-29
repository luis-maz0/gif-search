import { CustomHeader } from "./gifs/components/CustomHeader";
import { GifGrid } from "./gifs/components/GifGrid";
import { InputSearch } from "./gifs/components/InputSearch";
import { TagHistory } from "./gifs/components/TagHistory";
import { gifsMock } from "./mock/gifsMock";

export const App = () => {
  const handleSearch = (query: string) => {
    console.log(query);
  };

  return (
    <>
      {/* <header>*/}
      <CustomHeader titulo="GifApp" descripcion="app para buscar gifs" />

      {/* Input */}
      <InputSearch placeHolder="buscar gif" onQuery={handleSearch} />

      {/* tags */}
      <TagHistory busquedasPrevias={["Breaking bad", "The sopranos"]} />

      {/* Grid gifs */}
      <GifGrid gifs={gifsMock} />
    </>
  );
};
