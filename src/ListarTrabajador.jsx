import { Link } from 'react-router-dom';
import './css/ListarTrabajador.css';
import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig/';

function ListarTrabajador() {

  const [trabajadores, setTrabajadores] = useState([]);

  useEffect(() => {
    axios.get('/usuarios')
      .then(response => {
        setTrabajadores(response.data);
      })
      .catch(error => {
        console.error("Hubo un error al obtener los trabajadores!", error);
      });
    }, []);

    return (
        <>
       
        <nav
          className="navbar navbar-light"
          style={{ backgroundColor: "#8FC1E3" }}
          data-mdb-theme="light"
        >
          <img src="/Icons/envelope-svgrepo-com.svg" alt="Icon" className="Icon" />
          <div className="Rol-Usuario">@USUARIO</div>
          <div className="logOut">
            <a href="/Icons/sign-out-svgrepo-com.svg">
              <img
                src="/Icons/sign-out-svgrepo-com.svg"
                alt="Log out"
                className="Log-Out"
              />
            </a>
          </div>
        </nav>
        <h1 className="Titulo">Listar Trabajador</h1>
        <br />
        <div className="BotonesFiltrar">
          <div className="dropdown">
            <button
              className="btn btn-primary btn-lg dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ marginRight: 20 }}
            >
              Sexo
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
            <button
              className="btn btn-primary btn-lg dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ marginRight: 20 }}
            >
              Cargo
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
            <button
              className="btn btn-primary btn-lg dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ marginRight: 20 }}
            >
              Departamento
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
            <div className="BotonFiltrar">
              <button type="button" className="btn btn-success btn-lg">
                Filtrar
              </button>
            </div>
          </div>
        </div>
        <div className="content-box">
          <div className="Tabla">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">Nombres</th>
                  <th scope="col">Apellidos</th>
                  <th scope="col">Rut</th>
                  <th scope="col">Dirección</th>
                  <th scope="col">Teléfono</th>
                  <th scope="col">Cargo</th>
                  <th scope="col">Departamento</th>
                  <th scope="col">Fecha de ingreso</th>
                </tr>
              </thead>
              <tbody>
                 {trabajadores.map(trabajador => (
                <tr key={trabajador.user_id}>
                  <td>{trabajador.trabajador.nombres}</td>
                  <td>{trabajador.trabajador.apellido_paterno} {trabajador.trabajador.apellido_materno}</td>
                  <td>{trabajador.trabajador.rut}-{trabajador.trabajador.dv}</td>
                  <td>{trabajador.trabajador.direccion}</td>
                  <td>{trabajador.trabajador.telefono}</td>
                  <td>{trabajador.trabajador.datosLaborales?.cargo?.descripcion || 'N/A'}</td>
                  <td>{trabajador.trabajador.datosLaborales?.area?.descripcion || 'N/A'}</td>
                  <td>{trabajador.trabajador.datosLaborales?.fecha_ingreso || 'N/A'}</td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
          {/* botones */}
          <div className="BotonesFuncionarios">
            <button type="button" className="btn btn-primary btn-lg custom-btn">
              Exportar
            </button>
            <Link to="/users" className="btn btn-primary btn-lg  custom-btn">
                  Volver
                </Link>
          </div>
        </div>
      </>
      
    );
}

export default ListarTrabajador;
