import { Link } from 'react-router-dom';
import './css/ListarTrabajador.css';
import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig/';

const sexos = [
  { id_sexo: 1, descripcion: 'Masculino' },
  { id_sexo: 2, descripcion: 'Femenino' },
  { id_sexo: 3, descripcion: 'Otro' }
];

const cargos = [
  { id_cargo: 1, descripcion: 'Administrativo' },
  { id_cargo: 2, descripcion: 'Jefe de recursos humanos' },
  { id_cargo: 3, descripcion: 'Analista programador' },
  { id_cargo: 4, descripcion: 'Soporte TI' },
  { id_cargo: 5, descripcion: 'Encargado de Ventas' },
  { id_cargo: 6, descripcion: 'Encargado de Logística' }
];

const areas = [
  { id_area: 1, descripcion: 'Recursos Humanos' },
  { id_area: 2, descripcion: 'Soporte TI' },
  { id_area: 3, descripcion: 'Finanzas' },
  { id_area: 4, descripcion: 'Jurídica' },
  { id_area: 5, descripcion: 'Ventas' },
  { id_area: 6, descripcion: 'Logística' }
];

function ListarTrabajador() {
  const [trabajadores, setTrabajadores] = useState([]);
  const [idSexo, setIdSexo] = useState('');
  const [idCargo, setIdCargo] = useState('');
  const [idArea, setIdArea] = useState('');

  useEffect(() => {
    fetchTrabajadores();
  }, [idSexo, idCargo, idArea]);

  const fetchTrabajadores = () => {
    let queryParams = '';
    if (idSexo) queryParams += `id_sexo=${idSexo}&`;
    if (idCargo) queryParams += `id_cargo=${idCargo}&`;
    if (idArea) queryParams += `id_area=${idArea}&`;

    axios.get(`/usuarios?${queryParams}`)
      .then(response => {
        setTrabajadores(response.data);
      })
      .catch(error => {
        console.error("Hubo un error al obtener los trabajadores!", error);
      });
  };

  const handleExport = async () => {
    let queryParams = '';
    if (idSexo) queryParams += `id_sexo=${idSexo}&`;
    if (idCargo) queryParams += `id_cargo=${idCargo}&`;
    if (idArea) queryParams += `id_area=${idArea}&`;

    try {
      const response = await axios.get(`/reports/pdf?${queryParams}`, { responseType: 'blob' });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'reporte_trabajadores.pdf');
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error("Hubo un error al exportar el PDF!", error);
    }
  };

  const formatFechaIngreso = (fecha) => {
    const date = new Date(fecha);
    return date.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  return (
    <>
      <nav className="navbar navbar-light" style={{ backgroundColor: "#8FC1E3" }} data-mdb-theme="light">
        <img src="/Icons/envelope-svgrepo-com.svg" alt="Icon" className="Icon" />
        <div className="Rol-Usuario">@USUARIO</div>
        <div className="logOut">
          <a href="/">
            <img src="/Icons/sign-out-svgrepo-com.svg" alt="Log out" className="Log-Out" />
          </a>
        </div>
      </nav>
      <h1 className="Titulo">Listar Trabajador</h1>
      <br />
      <div className="BotonesFiltrar">
        <div className="dropdown">
          <select
            className="btn btn-primary btn-lg"
            id="sexoDropdown"
            onChange={(e) => setIdSexo(e.target.value)}
            value={idSexo}
            style={{ marginRight: 20 }}
          >
            <option value="">Sexo</option>
            {sexos.map(sexo => (
              <option key={sexo.id_sexo} value={sexo.id_sexo}>{sexo.descripcion}</option>
            ))}
          </select>
          
          <select
            className="btn btn-primary btn-lg"
            id="cargoDropdown"
            onChange={(e) => setIdCargo(e.target.value)}
            value={idCargo}
            style={{ marginRight: 20 }}
          >
            <option value="">Cargo</option>
            {cargos.map(cargo => (
              <option key={cargo.id_cargo} value={cargo.id_cargo}>{cargo.descripcion}</option>
            ))}
          </select>

          <select
            className="btn btn-primary btn-lg"
            id="areaDropdown"
            onChange={(e) => setIdArea(e.target.value)}
            value={idArea}
            style={{ marginRight: 20 }}
          >
            <option value="">Departamento</option>
            {areas.map(area => (
              <option key={area.id_area} value={area.id_area}>{area.descripcion}</option>
            ))}
          </select>
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
                <th scope="col">Sexo</th>
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
                  <td>{sexos.find(sexo => sexo.id_sexo === trabajador.trabajador.id_sexo)?.descripcion || 'N/A'}</td>
                  <td>{trabajador.trabajador.direccion}</td>
                  <td>{trabajador.trabajador.telefono}</td>
                  <td>{trabajador.trabajador.datosLaborales?.cargo?.descripcion || 'N/A'}</td>
                  <td>{trabajador.trabajador.datosLaborales?.area?.descripcion || 'N/A'}</td>
                  <td>{trabajador.trabajador.datosLaborales?.fecha_ingreso ? formatFechaIngreso(trabajador.trabajador.datosLaborales.fecha_ingreso) : 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="BotonesFuncionarios">
          <button type="button" className="btn btn-primary btn-lg custom-btn" onClick={handleExport}>
            Exportar
          </button>
          <Link to="/users" className="btn btn-primary btn-lg custom-btn">
            Volver
          </Link>
        </div>
      </div>
    </>
  );
}

export default ListarTrabajador;
