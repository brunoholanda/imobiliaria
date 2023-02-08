import CorpoPagina from "pages/CorpoPagina";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CorpoPagina />}>
                      
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;