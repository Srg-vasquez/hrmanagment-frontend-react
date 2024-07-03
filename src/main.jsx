import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import BuscarFuncionario from './BuscarFuncionario.jsx'
import './CSS/index.css'
import GesionarFuncionario from './GestionarFuncionario.jsx'
import InformacionPersonal from './InformacionPersonal.jsx'
import IngresarTrabajador from './IngresarTrabajador.jsx'
import ListarTrabajador from './ListarTrabajador.jsx'
import LogIn from './Log-In.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
   <BuscarFuncionario/>
   <GesionarFuncionario/>
   <InformacionPersonal/>
   <IngresarTrabajador/>
   <ListarTrabajador/>
   <LogIn/>

  </React.StrictMode>
  
)

