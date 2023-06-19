import { createContext, useState } from "react";
import { PONTOS, TEMPO_EM_MS } from "../constants/configuracoes";
import { buscarCartas } from "../services/buscarCartas";

export const LogicaJogoDaMemoriaContext = createContext();

export const LogicaJogoDaMemoriaProvider = ({ children }) => {
  const [cartas, setCartas] = useState([]);
  const [idsDosParesEncontrados, setIdsDosParesEncontrados] = useState([]);
  const [idsDasCartasViradas, setIdsDasCartasViradas] = useState([]);

  const [quantidadeDeCartasViradas, setQuantidadeDeCartasViradas] =
    useState(0);
  const [quantidadeDePontos, setQuantidadeDePontos] = useState(0);

  const iniciarJogo = async () => {
    setIdsDosParesEncontrados([]);
    setIdsDasCartasViradas([]);

    setQuantidadeDeCartasViradas(0);

    const cartas = await buscarCartas();
    setCartas(cartas);
  };

  const novaRodada = () => {
    setIdsDasCartasViradas([]);
  };

  const contarCartaVirada = () =>
    setQuantidadeDeCartasViradas((quantidade) => quantidade + 1);

  const marcarPonto = () =>
    setQuantidadeDePontos((pontos) => pontos + PONTOS.PAR_ENCONTRADO);

  const registrarParEncontrado = (idDoPar) =>
    setIdsDosParesEncontrados((ids) => [...ids, idDoPar]);

  const compararCartasPorIds = ([primeiroId, segundoId]) => {
    const idPar1 = cartas.find(({ id }) => id === primeiroId)?.idDoPar;
    const idPar2 = cartas.find(({ id }) => id === segundoId)?.idDoPar;
    return idPar1 === idPar2;
  };

  const virarCarta = ({ id, idDoPar }) => {
    contarCartaVirada();

    if (idsDasCartasViradas.length === 0) {
      return setIdsDasCartasViradas([id]);
    }

    const primeiroId = idsDasCartasViradas[0];
    const segundoId = id;
    const ids = [primeiroId, segundoId];
    setIdsDasCartasViradas(ids);

    const cartasIguais = compararCartasPorIds(ids);
    if (cartasIguais) {
      marcarPonto();
      registrarParEncontrado(idDoPar);
    }

    const tempo = cartasIguais ? 0 : TEMPO_EM_MS.VIRAR_CARTA;
    setTimeout(novaRodada, tempo);
  };

  const valor = {
    cartas,
    idsDosParesEncontrados,
    idsDasCartasViradas,

    quantidadeDeCartasViradas,
    quantidadeDePontos,

    iniciarJogo,
    virarCarta,
  };

  return (
    <LogicaJogoDaMemoriaContext.Provider value={valor}>
      {children}
    </LogicaJogoDaMemoriaContext.Provider>
  );
};