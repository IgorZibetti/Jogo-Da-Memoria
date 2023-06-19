const Resultado = () => {
    return (  
        <div className="resultado">
            <div className="resultado__box">
                <p>Seu nivel de memoria é </p>
                <h1>Bom</h1>
                <img src="/bom.jpg" alt="Image referente ao nivel de moria" height={150} />
            </div>
            <p>
                <strong>Taxa de acertos:</strong>
                <span>60%</span>
            </p>
            <button className="button">
                Nova Partida
            </button>
            <p>
                <small>
                    * Essa analise e inlustrativa e nao possui base cientifica
                </small>
            </p>
        </div>
       );
}
 
export default Resultado;