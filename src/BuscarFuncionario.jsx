import { useState, useEffect } from 'react';
import './css/BuscarFuncionario.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../axiosConfig';

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

function BuscarFuncionario() {
  const [rut, setRut] = useState('');
  const [idSexo, setIdSexo] = useState('');
  const [idCargo, setIdCargo] = useState('');
  const [idArea, setIdArea] = useState('');
  const [funcionarios, setFuncionarios] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [rut, idSexo, idCargo, idArea]);

  const fetchData = () => {
    let queryParams = '';
    if (rut) queryParams += `rut=${rut}&`;
    if (idSexo) queryParams += `id_sexo=${idSexo}&`;
    if (idCargo) queryParams += `id_cargo=${idCargo}&`;
    if (idArea) queryParams += `id_area=${idArea}&`;

    axios.get(`/usuarios?${queryParams}`)
      .then(response => {
        setFuncionarios(response.data);
        setError('');
      })
      .catch(error => {
        console.error("Hubo un error al buscar los funcionarios!", error);
        setError('Funcionario no encontrado');
        setFuncionarios([]);
      });
  };

  const handleEdit = (funcionario) => {
    navigate('/gestionar_funcionario', { state: { funcionario } });
  };

  return (
    <>
      <div id="BuscarFuncionario">
        <nav className="navbar navbar-light" style={{ backgroundColor: '#8FC1E3' }} data-mdb-theme="light">
          <img src="/Icons/envelope-svgrepo-com.svg" alt="Icon" className="Icon" />
          <div className="Rol-Usuario">@USUARIO</div>
          <div className="logOut">
            <a href="/">
              <img src="/Icons/sign-out-svgrepo-com.svg" alt="Log out" className="Log-Out" />
            </a>
          </div>
        </nav>
        <h1 className="Titulo">Buscar funcionario</h1>

        <div className="container">
          <div className="row content-box">
            <div className="col-md-6">
              <div className="p-3 bg-light rounded fromright">
                <form>
                  <label className="form-label" htmlFor="form6Example3">
                    Ingrese rut funcionario
                  </label>
                  <div className="row mb-4">
                    <div className="col">
                      <div className="form-outline">
                        <input
                          placeholder="Ingrese rut (sin puntos ni DV)"
                          type="text"
                          id="form6Example3"
                          className="form-control"
                          value={rut}
                          onChange={(e) => setRut(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <label className="form-label" htmlFor="id_sexo">
                    Selecciona el Sexo
                  </label>
                  <div className="row mb-4">
                    <div className="col">
                      <select
                        className="form-select"
                        id="id_sexo"
                        name="id_sexo"
                        value={idSexo}
                        onChange={(e) => setIdSexo(e.target.value)}
                      >
                        <option value="">Todos</option>
                        {sexos.map((sexo) => (
                          <option key={sexo.id_sexo} value={sexo.id_sexo}>{sexo.descripcion}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <label className="form-label" htmlFor="id_cargo">
                    Selecciona el Cargo
                  </label>
                  <div className="row mb-4">
                    <div className="col">
                      <select
                        className="form-select"
                        id="id_cargo"
                        name="id_cargo"
                        value={idCargo}
                        onChange={(e) => setIdCargo(e.target.value)}
                      >
                        <option value="">Todos</option>
                        {cargos.map((cargo) => (
                          <option key={cargo.id_cargo} value={cargo.id_cargo}>{cargo.descripcion}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <label className="form-label" htmlFor="id_area">
                    Selecciona el Área
                  </label>
                  <div className="row mb-4">
                    <div className="col">
                      <select
                        className="form-select"
                        id="id_area"
                        name="id_area"
                        value={idArea}
                        onChange={(e) => setIdArea(e.target.value)}
                      >
                        <option value="">Todos</option>
                        {areas.map((area) => (
                          <option key={area.id_area} value={area.id_area}>{area.descripcion}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-md-6">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Rut</th>
                    <th scope="col">Cargo</th>
                    <th scope="col">Departamento</th>
                    <th scope="col">Editar</th>
                  </tr>
                </thead>
                <tbody>
                  {funcionarios.length > 0 ? (
                    funcionarios.map((funcionario) => (
                      <tr key={funcionario.trabajador.rut}>
                        <td>{funcionario.trabajador.nombres}</td>
                        <td>{funcionario.trabajador.apellido_paterno} {funcionario.trabajador.apellido_materno}</td>
                        <td>{funcionario.trabajador.rut}-{funcionario.trabajador.dv}</td>
                        <td>{funcionario.trabajador.datosLaborales?.cargo?.descripcion || 'N/A'}</td>
                        <td>{funcionario.trabajador.datosLaborales?.area?.descripcion || 'N/A'}</td>
                        <td>
                          <button onClick={() => handleEdit(funcionario)} className="btn btn-warning botonWrng">Editar</button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6">{error || 'Ingrese un RUT y presione Buscar'}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="Botones d-flex justify-content-end mt-4">
              <button type="button" className="btn btn-primary btn-lg custom-btn" onClick={() => { setRut(''); setIdSexo(''); setIdCargo(''); setIdArea(''); setFuncionarios([]); setError(''); }}>Limpiar</button>
              <Link to="/users" className="btn btn-primary btn-lg custom-btn">Volver</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BuscarFuncionario;
