import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/index.css';
import BuscarFuncionario from './BuscarFuncionario.jsx';
import GesionarFuncionario from './GestionarFuncionario.jsx';
import InformacionPersonal from './InformacionPersonal.jsx';
import IngresarTrabajador from './IngresarTrabajador.jsx';
import ListarTrabajador from './ListarTrabajador.jsx';
import LogIn from './Log-In.jsx';
import UsersPage from './users.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/buscar_funcionario" element={<BuscarFuncionario />} />
        <Route path="/gestionar_funcionario" element={<GesionarFuncionario />} />
        <Route path="/informacion_personal" element={<InformacionPersonal />} />
        <Route path="/ingresar_trabajador" element={<IngresarTrabajador />} />
        <Route path="/listar_trabajador" element={<ListarTrabajador />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
