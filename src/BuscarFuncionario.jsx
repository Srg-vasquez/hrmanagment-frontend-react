import { useState } from 'react';
import './css/BuscarFuncionario.css'
import { Link } from 'react-router-dom';

function BuscarFuncionario() {
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
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="Botones d-flex justify-content-end mt-4">
                            <button type="button" className="btn btn-primary btn-lg custom-btn">Limpiar</button>
                            <button type="button" className="btn btn-success btn-lg custom-btn">Buscar</button>
                            <Link to="/users" className="btn btn-info btn-lg btn-volver">
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
