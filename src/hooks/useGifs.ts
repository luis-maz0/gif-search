import { useState } from "react"
import type { Gif } from "../interfaces/gif"
import { getGifs } from "../services/gifService"

export const useGifs = () => {
    const [gifs, setGifs] = useState<Gif[]>([])

    const fetchGifs = async (query: string) => {
        const buesquedaGifs = await getGifs(query)
        setGifs(buesquedaGifs)
    }

    return {
        gifs,
        fetchGifs,
    }
}