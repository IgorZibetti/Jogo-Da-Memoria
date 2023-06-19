import { paresDeCartas } from "../constants/cartas";
import Cartas from "./Cartas";
import Placar from "./Placar";

const JogoDaMemoria = () => {
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
        </div>
        </>
     );
}
 
export default JogoDaMemoria;