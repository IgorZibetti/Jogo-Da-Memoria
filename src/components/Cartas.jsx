import classNames from "classnames";
import useJogoDaMemoria from "../hooks/useJogoDaMemoria";

const Cartas = ({id, idDoPar, imagem}) => {
    const {virarCarta, idsDasCartasViradas} = useJogoDaMemoria();
    const controlarCliques = () => {
        virarCarta({id, idDoPar})
    }
    
    const cartaVirada = idsDasCartasViradas.includes(id)

    const cn = classNames('carta', {
        'carta--virada': cartaVirada,
    })

    return ( 
        <button id={id} className={cn} onClick={controlarCliques}>
            <div className="carta__conteudo">
                <div className="carta__frente"/>
                <div className="carta__costas">
                    <img src={imagem} alt={`Carta ${id}`} width={300} />
                </div>
            </div>
        </button>
     );
}
 
export default Cartas;