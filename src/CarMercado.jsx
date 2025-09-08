import { useState } from "react";

function CarMercado(){

      const [Itens, setItens] = useState("0");
      const [nota, setNota] = useState("");
    
      function Itens(event) {
        setName(event.target.value);
    
    }
    return(
        <>
            <h3>Carrinho de Mercado</h3>
            <p>Adicione ou Retire intens do Carrinho</p>
            <button onClick={() => setItens(Itens + 1)}>+1</button>
            <button onClick={() => setItens(Itens - 1)}>-1</button>
            <p>Valor Total do Carrinho</p>
            <p>R$50,00</p>

        
        
        
        
        </>
    )

}
export default CarMercado;