import { LogicaJogoDaMemoriaContext } from "../contexts/LogicaJogoDaMemoria";
import { useContext } from "react";	

const useJogoDaMemoria = () => {
    const context = useContext(LogicaJogoDaMemoriaContext);
    return context;
}
 
export default useJogoDaMemoria;