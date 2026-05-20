import { CustomHeader } from "../components/CustomHeader"
import { FavoriteGrid } from "../components/FavoriteGrid"
import type { Gif } from "../interfaces/gif"

interface Props {
    favorites: Gif[],
    toggleFavorite: (gif:Gif) => void,
    isFavorite: (id:string) => boolean
}

export const FavoritesPage = ({favorites, isFavorite, toggleFavorite}: Props) => {
    return (
        <>
            <CustomHeader titulo="Gif app: Pagina de Favoritos" descripcion="Aca se guardan tus gifs favoritos" />
            <FavoriteGrid favorites={favorites} isFavorite={isFavorite} toggleFavorite={toggleFavorite}></FavoriteGrid>
        </>
    )
}