import { paresDeCartas } from "../constants/cartas";
import { LogicaJogoDaMemoriaProvider } from "../contexts/LogicaJogoDaMemoria";
import Cartas from "./Cartas";
import Placar from "./Placar";
import Resultado from "./Resultados";

const JogoDaMemoria = () => {
    return ( 
        <LogicaJogoDaMemoriaProvider>
            <JogoDaMemoriaCounteudo/>
        </LogicaJogoDaMemoriaProvider>
     );
}
 
export default JogoDaMemoria;

export const JogoDaMemoriaCounteudo = () => {
    return (
        <>
        <div className="jogo-da-memoria">
            <div className="jogo-da-memoria__conteudo">
            <h1>Jogo da Memoria</h1>
                <Placar/>
                <div className="jogo-da-memoria__cartas">
                    {paresDeCartas.map((carta) => (
                    <Cartas key={carta.id} {...carta}/>
                    ))}
                </div>
            </div>
            <Resultado/>
        </div>
        </>
    )
}