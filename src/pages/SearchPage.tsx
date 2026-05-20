import { useEffect } from "react";
import { CustomHeader } from "../components/CustomHeader";
import { GifGrid } from "../components/GifGrid";
import { InputSearch } from "../components/InputSearch";
import { TagHistory } from "../components/TagHistory";
import { useGifs } from "../hooks/useGifs";
import { useHistory } from "../hooks/useHistory";
import type { Gif } from "../interfaces/gif";

interface Props {
    toggleFavorite: (gif:Gif) => void,
    isFavorite: (id:string) => boolean
}

export const SearchPage = ({toggleFavorite, isFavorite}: Props) => {

    const {gifs, fetchGifs} = useGifs()

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
            <CustomHeader titulo="Gif app: Pagina de Busqueda" descripcion="App para buscar gifs" />

            {/* Input */}
            <InputSearch onQuery={handleInputSearch} />

            {/* History Tag */}
                <TagHistory busquedasPrevias={busquedasPrevias} onTagClick={fetchGifs}/>

            {/* GrifGrid */}
            <GifGrid gifsMock={gifs} isFavorite={isFavorite} toggleFavorite={toggleFavorite}/>
        </>
    );
};
