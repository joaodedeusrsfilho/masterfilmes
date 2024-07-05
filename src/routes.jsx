import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";
import Erro from "./pages/Erro";
import Filme from "./pages/Filme";
import Header from "./Components/Header";


function routes(){

    return(
        <div>
            <BrowserRouter>
                <Header></Header>
                <Routes>
                    <Route path="/" element={<Home></Home>}/>
                    <Route path="/favoritos" element={<Favoritos/>}/>
                    <Route path='/filme/:id' element={<Filme></Filme>}></Route>
                    <Route path="/favoritos" element={<Favoritos></Favoritos>}></Route>
                    
                    <Route path="*" element={<Erro/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default routes