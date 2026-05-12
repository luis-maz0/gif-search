import { useState } from "react";
import { CustomHeader } from "./components/CustomHeader";
import { GifGrid } from "./components/GifGrid";
import { InputSearch } from "./components/InputSearch";
import { TagHistory } from "./components/TagHistory";
import { getGifs } from "./services/gifService";
import type { Gif } from "./interfaces/gif";

export const GifApp = () => {

  const [gifs, setGifs] = useState<Gif[]>([])

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
    const resultadosBusqueda = await getGifs(query)
    setGifs(resultadosBusqueda)
  };

  return (
    <>
      <CustomHeader titulo="Gif app" descripcion="App para buscar gifs" />

      {/* Input */}
      <InputSearch onQuery={handleInputSearch} />

      {/* History Tag */}
      <TagHistory busquedasPrevias={busquedasPrevias} />

      {/* GrifGrid */}
      <GifGrid gifsMock={gifs} />
    </>
  );
};
