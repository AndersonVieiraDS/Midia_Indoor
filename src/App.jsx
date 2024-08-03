import { Route, Routes  } from 'react-router-dom';
import Usuarios from './pages/usuarios/Usuarios';
import Cad_usuarios from './pages/usuarios/Cad_usuarios';
import EditarUsuario from './pages/usuarios/Edit_usuarios';
import Clientes from './pages/clientes/Clientes';
import Cad_clientes from './pages/clientes/CadClient';
import EditarClientes from './pages/clientes/EditClient';
import Midias from './pages/midias/Midias';
import Cad_Midia from './pages/midias/Cad_midias';
import EditarMidia from './pages/midias/EditMedia';

function App() {
  return (
    <Routes>
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/cadastrar-usuario" element={<Cad_usuarios />} />
        <Route path="/editar-usuario/:id" element={<EditarUsuario />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/cadastrar-cliente" element={<Cad_clientes />} />
        <Route path="/editar-cliente/:id" element={<EditarClientes />} />
        <Route path="/midias" element={<Midias />} />
        <Route path="/cadastrar-midia" element={<Cad_Midia />} />
        <Route path="/editar-midia/:id" element={<EditarMidia />} />
        {/* Outras rotas */}
    </Routes>
  );
}

export default App;