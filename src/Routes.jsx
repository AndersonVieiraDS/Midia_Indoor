import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Usuarios from "./pages/usuarios/Usuarios";
import Salas from "./pages/salas/Salas";
import Clientes from "./pages/clientes/Clientes";
import Midias from "./pages/midias/Midias";
import TipoTela from "./pages/home/TipoTela";
import Cad_pessoaJuridica from "./pages/clientes/Cad_pessoaJuridica";
import Cad_midias from "./pages/midias/Cad_midias";
import Cad_salas from "./pages/salas/Cad_salas";
import Cad_usuarios from "./pages/usuarios/Cad_usuarios";
import Carousel from "./pages/Carousel/carousel";
import Login from "./pages/login/Login";
import Painel from './pages/painel/Painel'
import Cad_pessoaFisica from "./pages/clientes/Cad_pessoaFisica";
import Telas from "./pages/telas/Telas";
import Equipamentos from "./pages/equipamentos/Equipamentos"
import EditMedia from './pages/midias/EditMedia';
import ConfigMidias from "./pages/midias/ConfigMidias";
import EditarUsuario from "./pages/usuarios/Edit_usuarios";

function Rotas() {
  return (
    <div className="Routes">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<TipoTela />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/salas" element={<Salas />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/midias" element={<Midias />} />
        <Route path="/midias/edit/:id" element={<EditMedia />} />
        <Route path="/midias/config" element={<ConfigMidias />} />
        <Route path="/clientes/pessoajuridica" element={<Cad_pessoaJuridica />} />
        <Route path="/clientes/pessoafisica" element={<Cad_pessoaFisica />} />
        <Route path="/midias/cadastromidias" element={<Cad_midias />} />
        <Route path="/salas/cadastrosalas" element={<Cad_salas />} />
        <Route path="/usuarios/cadastro" element={<Cad_usuarios />} />
        <Route path="/telas/monitoramento" element={<Telas />} />
        <Route path="/telas/Recepcao" element={<Painel />} />
        <Route path="/telas/monitoramento/exibicao" element={<Carousel />} />
        <Route path="/equipamentos" element={<Equipamentos />} />
        <Route path="/usuarios/editar/:id" element={<EditarUsuario />} />

      </Routes>
    </div>
  );
}

export default Rotas;
