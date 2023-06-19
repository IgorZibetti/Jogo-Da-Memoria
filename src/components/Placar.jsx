import useJogoDaMemoria from "../hooks/useJogoDaMemoria";

const Placar = () => {

    const {quantidadeDeCartasViradas, quantidadePontos} = useJogoDaMemoria();

    return ( 
        <div className="placar">
            <Pontos titulo='Pontos' valor={quantidadePontos}/>
            <Pontos titulo='Cartas viradas' valor={quantidadeDeCartasViradas}/>
        </div>
     );
}
 
export default Placar;

const Pontos = ({titulo, valor}) => {
    return (
        <div className="pontos">
                <strong className="pontos__titulo">{titulo}:</strong>
                <span className="pontos__valor">{valor}</span>
        </div>
    )
}