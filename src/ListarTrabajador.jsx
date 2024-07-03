import { useState } from 'react';
import './CSS/ListarTrabajador.css'

function ListarTrabajador() {

  
    // var requestOptions = {
    //   method: 'GET',
    //   redirect: 'follow'
    // };
 
  
    
    // fetch("localhost:3000/api/v1/users", requestOptions)
    
    //   .then((response) => response.json())
    //   //recorremos json
    //   .then((json) => json.forEach(tabla_elementos)
    //   )
    //   .then(result => console.log(result))
    //   //mostramos error por consola
    //   .catch(error => console.log('error', error));

    //   function tabla_elementos(element, index, arr){
    //     //agregamos html a nuestra vista
    //   arr[index] = document.querySelector('#tbl_clientes tbody').innerHTML +=
    //   `<tr>
    //       <td>${element.id_cliente}</td>
    //       <td>${element.rut}</td>
    //       <td>${element.nombres}</td>
    //       <td>${element.apellidos}</td>
    //       <td>${element.email}</td>
    //       <td>${element.celular}</td>
    
    //       <td><button type="button" class="btn btn-warning" ><a href=actualizar_cliente.html?id=${element.id_cliente}>Actualizar</button>
    
    
    //       <button type="button" class="btn btn-danger"><a href=eliminar_cliente.html?id=${element.id_cliente}Eliminar</button></td>
          
      
          
    //   </tr>`
      
    // };

    return (
        <>
        {/* header pagina */}
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
                  <th scope="col">Fecha de ingreso</th>
                  <th scope="col">Departamento</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* botones */}
          <div className="BotonesFuncionarios">
            <button type="button" className="btn btn-primary btn-lg">
              Exportar
            </button>
            <button
              type="button"
              className="btn btn-primary btn-lg"
              style={{ marginLeft: 20 }}
            >
              Volver
            </button>
          </div>
        </div>
      </>
      
    );
}

export default ListarTrabajador;
