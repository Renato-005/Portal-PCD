
import Menu from "../Menu/Menu";

type CabecalhoTipo = {
    tituloPagina:string;
    mensagem:string
}


export default function Cabecalho({tituloPagina,mensagem}:CabecalhoTipo) {

    return (
        <header className="meu-cabecalho dark">
            <h1>{tituloPagina}</h1>
            <p>{mensagem}</p>
            
            <Menu/>
        </header>
    )
    }