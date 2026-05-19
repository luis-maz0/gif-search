import { useEffect, useState } from "react"

export const useHistory = (historialInicial: string[] = []) => {
    const [busquedasPrevias, setBusquedasPrevias] = useState<string[]>(() => {
        const busquedasIniciales = localStorage.getItem("busquedas-previas")
        return busquedasIniciales ? JSON.parse(busquedasIniciales) : historialInicial
    })

    useEffect(() => {
        localStorage.setItem("busquedas-previas", JSON.stringify(busquedasPrevias))
    }, [busquedasPrevias])

    const addToHistory = (consulta: string) => {
        const consultaNormalizada = consulta.trim().toLocaleLowerCase();
        if (consulta.length === 0 || busquedasPrevias.includes(consulta)) return;

        const busquedasActuales = [consultaNormalizada, ...busquedasPrevias.slice(0, 9)];
        setBusquedasPrevias(busquedasActuales);
    }

    return {
        busquedasPrevias,
        addToHistory
    }
}