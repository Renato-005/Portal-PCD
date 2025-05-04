import { TipoBotao } from "@/types/TipoBotao";

export default function Botao({tituloBotao,corFundo}:TipoBotao){
    
    return(
        <>
            <button style={{"backgroundColor":corFundo}}>{tituloBotao}</button>
        </>
    );
}
