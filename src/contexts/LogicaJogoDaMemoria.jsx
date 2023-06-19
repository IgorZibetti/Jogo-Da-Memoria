import { createContext, useState } from "react";

export const LogicaJogoDaMemoriaContext = createContext();

export const LogicaJogoDaMemoriaProvider = ({ children }) => {
    const [cartas, setCartas] = useState([])
    const [idsDosParesEncontrados, setIdsDosParesEncontrados] = useState([])
    const [idsDasCartasViradas, setIdsDasCartasViradas] = useState([])

    const [quantidadeDeCartasViradas, setQuantidadeDeCartasViradas] = useState(0)
    const [quantidadePontos, setQuantidadePontos] = useState(0)

    const incrementarQuantidadeDeCartasViradas = () => {
        setQuantidadeDeCartasViradas((quantidade) => quantidade + 1)
    }

    const virarCarta = ({id, idDoPar}) => {
        incrementarQuantidadeDeCartasViradas()
        setIdsDasCartasViradas(ids => [...ids, id]);
    }
    const valor = {
        cartas,
        quantidadeDeCartasViradas,
        quantidadePontos,
        virarCarta,
        idsDasCartasViradas,
    }
    
    return (
        <LogicaJogoDaMemoriaContext.Provider value={valor}>
            {children}
        </LogicaJogoDaMemoriaContext.Provider>
    )
}