import { CustomHeader } from "../components/CustomHeader"
import { FavoriteGrid } from "../components/FavoriteGrid"

export const FavoritesPage = () => {
    return (
        <>
            <CustomHeader titulo="Gif app: Pagina de Favoritos" descripcion="Aca se guardan tus gifs favoritos" />
            <FavoriteGrid ></FavoriteGrid>
        </>
    )
}