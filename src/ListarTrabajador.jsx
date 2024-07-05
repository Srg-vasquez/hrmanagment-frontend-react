import { Link } from 'react-router-dom';
import './css/ListarTrabajador.css'

function ListarTrabajador() {



  
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
                <th scope="col">Apellido Paterno</th>
                <th scope="col">Apellido Materno</th>
                <th scope="col">RUT</th>
                <th scope="col">DV</th>
                <th scope="col">Dirección</th>
                <th scope="col">Teléfono</th>
                <th scope="col">Cargo</th>
                <th scope="col">Área</th>
                <th scope="col">Fecha de ingreso</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.user_id}>
                  <td>{user.trabajador.nombres}</td>
                  <td>{user.trabajador.apellido_paterno}</td>
                  <td>{user.trabajador.apellido_materno}</td>
                  <td>{user.trabajador.rut}</td>
                  <td>{user.trabajador.dv}</td>
                  <td>{user.trabajador.direccion}</td>
                  <td>{user.trabajador.telefono}</td>
                  <td>{user.trabajador.datosLaborales.cargo.descripcion}</td>
                  <td>{user.trabajador.datosLaborales.area.descripcion}</td>
                  <td>{new Date(user.trabajador.datosLaborales.fecha_ingreso).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* botones */}
        <div className="BotonesFuncionarios">
          <button type="button" className="btn btn-primary btn-lg">
            Exportar
          </button>
          <Link to="/users" className="btn btn-info btn-lg btn-volver">
            Volver
          </Link>
        </div>
      </div>
      </>
      
    );
}

export default ListarTrabajador;
