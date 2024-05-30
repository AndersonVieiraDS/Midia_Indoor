import { Route, Routes } from "react-router-dom";
import Usuarios from "./pages/usuarios/Usuarios";
import Salas from "./pages/salas/Salas";
import Empresas from "./pages/empresas/Empresas";
import Midias from "./pages/midias/Midias";
import Home from "./pages/home/Home";
import Cad_empresas from "./pages/empresas/Cad_empresas";
import Cad_midias from "./pages/midias/Cad_midias";
import Cad_salas from "./pages/salas/Cad_salas";
import Cad_usuarios from "./pages/usuarios/Cad_usuarios";
import TipoTela from "./pages/Carousel/TipoTela";
import Carousel from "./pages/Carousel/carousel";
import Login from "./pages/login/Login";
import HomeOperador from './pages/home/HomeOperador';
import Painel from './pages/painel/Painel'

function Rotas() {
  return (
    <div className="Routes">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/salas" element={<Salas />} />
        <Route path="/empresas" element={<Empresas />} />
        <Route path="/midias" element={<Midias />} />
        <Route path="/empresas/cadastroempresas" element={<Cad_empresas />} />
        <Route path="/midias/cadastromidias" element={<Cad_midias />} />
        <Route path="/salas/cadastrosalas" element={<Cad_salas />} />
        <Route path="/usuarios/cadastrousuarios" element={<Cad_usuarios />} />
        <Route path="/telas" element={<TipoTela />} />
        <Route path="/telas/tvTorre" element={<Carousel />} />
        <Route path="/telas/tvRecepcao" element={<Painel />} />
        <Route path="/homeOperador" element={<HomeOperador />} />


      </Routes>
    </div>
  );
}

export default Rotas;
