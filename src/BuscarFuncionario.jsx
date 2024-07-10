import { useState } from 'react';
import './css/BuscarFuncionario.css'
import { Link } from 'react-router-dom';
import axios from '../axiosConfig';

function BuscarFuncionario() {
    
    const [rut, setRut] = useState('');
    const [funcionario, setFuncionario] = useState(null);
    const [error, setError] = useState('');
  
    const handleSearch = () => {
      axios.get(`/usuarios/${rut}`)
        .then(response => {
          setFuncionario(response.data);
          setError('');
        })
        .catch(error => {
          console.error("Hubo un error al buscar el funcionario!", error);
          setError('Funcionario no encontrado');
          setFuncionario(null);
    });
};

    return (
        <>
       
            
            <div id='BuscarFuncionario'>
                <nav className="navbar navbar-light" style={{ backgroundColor: '#8FC1E3' }} data-mdb-theme="light">
                    <img src='/Icons/envelope-svgrepo-com.svg'alt="Icon" className="Icon" />
                    <div className="Rol-Usuario">@USUARIO</div>
                    <div className="logOut">
                        <a href="referancia que hare para salir al login">
                            <img src='/Icons/sign-out-svgrepo-com.svg' alt="Log out" className="Log-Out" />
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
                                    <img src='/Images/FindPerson.jpg'alt="FindPerson" className="FindPerson" />

                                   

                                    
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
                                                {funcionario ? (
                                    <tr>
                                    <td>{funcionario.trabajador.nombres}</td>
                                    <td>{funcionario.trabajador.apellido_paterno} {funcionario.trabajador.apellido_materno}</td>
                                    <td>{funcionario.trabajador.rut}-{funcionario.trabajador.dv}</td>
                                    <td>{funcionario.trabajador.datosLaborales?.cargo?.descripcion || 'N/A'}</td>
                                    <td>{funcionario.trabajador.datosLaborales?.area?.descripcion || 'N/A'}</td>
                                    <td><Link to="/gestionar_funcionario" className="btn btn-warning botonUsuario">
                                                
                                                </Link>
                                    </td>
                                    </tr>
                                ) : (
                                    <tr>
                                    <td colSpan="6">{error || 'Ingrese un RUT y presione Buscar'}</td>
                                    </tr>
                                )}
                             </tbody>
                            </table>
                        </div>
                        <div className="Botones d-flex justify-content-end mt-4">
                                <button type="button" className="btn btn-primary btn-lg custom-btn" onClick={() => { setRut(''); setFuncionario(null); setError(''); }}>Limpiar</button>
                                <button type="button" className="btn btn-success btn-lg custom-btn" onClick={handleSearch}>Buscar</button>
                                <Link to="/users" className="btn btn-primary btn-lg  custom-btn">
                                    Volver
                                </Link>
                        </div>
                    </div>
                </div>
            </div>
       
        </>
    );
}

export default BuscarFuncionario;
