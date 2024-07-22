// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/index.css';
import BuscarFuncionario from './BuscarFuncionario.jsx';
import GestionarFuncionario from './GestionarFuncionario.jsx';
import InformacionPersonal from './InformacionPersonal.jsx';
import IngresarTrabajador from './IngresarTrabajador.jsx';
import ListarTrabajador from './ListarTrabajador.jsx';
import LogIn from './Log-In.jsx';
import UsersPage from './users.jsx';
import { AuthProvider } from './contexts/AuthContext'; // Importa el AuthProvider
import PrivateRoute from './components/PrivateRoute'; // Importa el componente de ruta privada

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route 
            path="/buscar_funcionario" 
            element={<PrivateRoute><BuscarFuncionario /></PrivateRoute>} 
          />
          <Route 
            path="/gestionar_funcionario" 
            element={<PrivateRoute><GestionarFuncionario /></PrivateRoute>} 
          />
          <Route 
            path="/informacion_personal" 
            element={<PrivateRoute><InformacionPersonal /></PrivateRoute>} 
          />
          <Route 
            path="/ingresar_trabajador" 
            element={<PrivateRoute><IngresarTrabajador /></PrivateRoute>} 
          />
          <Route 
            path="/listar_trabajador" 
            element={<PrivateRoute><ListarTrabajador /></PrivateRoute>} 
          />
          <Route 
            path="/users" 
            element={<PrivateRoute><UsersPage /></PrivateRoute>} 
          />
        </Routes>
      </Router>
    </AuthProvider>
  </React.StrictMode>
);
