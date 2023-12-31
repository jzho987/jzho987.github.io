
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import DetailedPortfolioPage from "../DetailedPortfolioPage/DetailedPortfolioPage";

export default function Routing() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"/Home"} element={<HomePage/>}/>
                <Route path={"/Portfolio"} element={<DetailedPortfolioPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
