import Cabecalho from "components/Cabecalho";
import CabecalhoLinks from "components/CabecalhoLinks";
import Contato from "components/Contato";
import Rodape from "components/Rodape";
import { Outlet } from "react-router-dom";

function CorpoPagina() {
    return (
        <main>
            <Cabecalho />
            <CabecalhoLinks />
            <Outlet /> 
            <Contato />
            <Rodape />
        </main>
    )
}

export default CorpoPagina;