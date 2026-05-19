import { useEffect } from "react";
import { CustomHeader } from "./components/CustomHeader";
import { GifGrid } from "./components/GifGrid";
import { InputSearch } from "./components/InputSearch";
import { TagHistory } from "./components/TagHistory";
import { useGifs } from "./hooks/useGifs";
import { FavoriteGrid } from "./components/FavoriteGrid";
import { useHistory } from "./hooks/useHistory";

export const GifApp = () => {

  const{gifs, fetchGifs} = useGifs()

  const {busquedasPrevias, addToHistory} = useHistory([
    "Breaking bad",
    "Prison Break",
    "The sopranos",
  ]);


  const handleInputSearch = async (query: string) => {
    addToHistory(query);
    fetchGifs(query)
  };

  useEffect( ()=> {
    if(busquedasPrevias.length > 0) {
      fetchGifs(busquedasPrevias[0])
    }
  }, [])

  return (
    <>
      <CustomHeader titulo="Gif app" descripcion="App para buscar gifs" />

      {/* Input */}
      <InputSearch onQuery={handleInputSearch} />

      {/* History Tag */}
      <TagHistory busquedasPrevias={busquedasPrevias} onTagClick={fetchGifs}/>

      {/* GrifGrid */}
      <GifGrid gifsMock={gifs} />

      <FavoriteGrid />
    </>
  );
};
