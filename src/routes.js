import ScrollToTop from "components/ScrollToTop";
import AdicionarImovel from "pages/AdicionarImovel";
import CorpoPagina from "pages/CorpoPagina";
import Inicio from "pages/Inicio";
import PaginaDeErro from "pages/PaginaDeErro";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
        <ScrollToTop />
            <Routes>
                <Route path="/" element={<CorpoPagina />}>
                    <Route index element={<Inicio />} />
                    <Route path="/adicionar" element={<AdicionarImovel />} />
                    <Route path="*" element={<PaginaDeErro />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;