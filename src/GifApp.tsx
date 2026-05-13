import { useEffect, useState } from "react";
import { CustomHeader } from "./components/CustomHeader";
import { GifGrid } from "./components/GifGrid";
import { InputSearch } from "./components/InputSearch";
import { TagHistory } from "./components/TagHistory";
import { useGifs } from "./hooks/useGifs";
import { FavoriteGrid } from "./components/FavoriteGrid";

export const GifApp = () => {

  const{gifs, fetchGifs} = useGifs()

  const [busquedasPrevias, setBusquedasPrevias] = useState([
    "Breaking bad",
    "Prison Break",
    "The sopranos",
  ]);


  const handleInputSearch = async (query: string) => {
    query = query.trim().toLocaleLowerCase();
    if (query.length === 0) return;
    if (busquedasPrevias.includes(query)) return;

    const busquedasActuales = busquedasPrevias.slice(0, 8);
    busquedasActuales.unshift(query);
    setBusquedasPrevias(busquedasActuales);
    fetchGifs(query)
  };

  useEffect( ()=> {
      fetchGifs(busquedasPrevias[0])
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
