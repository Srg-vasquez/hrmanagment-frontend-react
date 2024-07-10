
import './css/camposUsuario.css'
import { Link } from 'react-router-dom';

function IngresarTrabajador() {


    return (<>
        
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
        <h1 className="Titulo">Ingresar Trabajador</h1>
        <div className="content-box">
          <div className="row">
            {/* formulario lado izquiero */}
            <div className="col-md-6">
              <form>
                {/* 2 column grid layout with text inputs for the first and last names */}
                <div className="h2Titulo">
                  <h3>Datos Trabajador</h3>
                </div>
                <div className="row mb-4">
                  <div className="col">
                    <div data-mdb-input-init="" className="form-outline">
                      <input
                        placeholder="Ingrese nombre trabajador..."
                        type="text"
                        id="form6Example1"
                        className="form-control"
                      />
                      <label
                        className="form-label"
                        htmlFor="form6Example1"
                        placeholder="Nombre Trabajador..."
                      >
                        Nombre 
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div data-mdb-input-init="" className="form-outline">
                      <input
                        placeholder="Ingrese apellido..."
                        type="text"
                        id="form6Example2"
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form6Example2">
                        Apellido
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col">
                    <div data-mdb-input-init="" className="form-outline">
                      <input
                        placeholder="Ingrese rut..."
                        type="text"
                        id="form6Example1"
                        className="form-control"
                      />
                      <label
                        className="form-label"
                        htmlFor="form6Example1"
                        placeholder="Nombre Trabajador..."
                      >
                        Rut 
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div data-mdb-input-init="" className="form-outline">
                      <input
                        placeholder={+569}
                        type="text"
                        id="form6Example2"
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form6Example2">
                        Telefono
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col">
                    <div data-mdb-input-init="" className="form-outline">
                      <input
                        placeholder="Ingrese direccion..."
                        type="text"
                        id="form6Example1"
                        className="form-control"
                      />
                      <label
                        className="form-label"
                        htmlFor="form6Example1"
                        placeholder="Nombre Trabajador..."
                      >
                        Direccion
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    {/* espacio select  */}
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected="">Elija una opción...</option>
                      <option value={1}>Masculino</option>
                      <option value={2}>Femenino</option>
                    </select>
                    Sexo
                  </div>
                </div>
                <div className="row mb-4">
                <div className="col">
                  <div data-mdb-input-init="" className="form-outline">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    
                  >
                    <option selected="">Elija una opción...</option>
                    <option value={1}>Administrativo</option>
                    <option value={2}>Jefe de recursos humanos</option>
                    <option value={3}>Analista programador</option>
                    <option value={4}>Soporte TI</option>
                    <option value={5}>Encargado de Ventas</option>
                    <option value={6}>Encargado de Logística</option>
                    
                  </select >
                  Cargo del trabajador
                  </div>
                </div>
                  <div className="col">
                    <div data-mdb-input-init="" className="form-outline">
                      <input
                        type="date"
                        id="form6Example2"
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form6Example2">
                        Fecha ingreso compañia
                      </label>
                    </div>
                  </div>
                </div>
                <div className='row mb-4'>
          <div className="col">
              <div data-mdb-input-init="" className="form-outline inputCargo">
              <select
                className="form-select"
                aria-label="Default select example"
               
              >
                <option selected="">Elija una opción...</option>
                <option value={1}>Recursos Humanos</option>
                <option value={2}>Soporte TI</option>
                <option value={3}>Finanzas</option>
                <option value={4}>Jurídicas</option>
                <option value={5}>Ventas</option>
                <option value={6}>Logística</option>
              
                
              </select >
              Área
              </div>
            </div>
          </div>
                <div className="row mb-4">
                  <div className="col">
                    <div data-mdb-input-init="" className="form-outline">
                      <input
                        placeholder="Ingrese nueva contraseña..."
                        type="text"
                        id="form6Example1"
                        className="form-control"
                      />
                      <label
                        className="form-label"
                        htmlFor="form6Example1"
                        placeholder="Nombre Trabajador..."
                      >
                        Cambiar contraseña
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div data-mdb-input-init="" className="form-outline">
                      <input
                        type="text"
                        id="form6Example2"
                        className="form-control"
                        placeholder="repita contraseña"
                      />
                      <label className="form-label" htmlFor="form6Example2" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            {/* formulario lado derecho */}
            <div className="col-md-6">
              <form>
                {/* 2 column grid layout with text inputs for the first and last names */}
                <div className="h2Titulo">
                  <h3>Contacto de emergencia</h3>
                </div>
                <div className="row mb-4">
                  <div className="col">
                    <div data-mdb-input-init="" className="form-outline">
                      <input
                        placeholder="Nombre Completo..."
                        type="text"
                        id="form6Example1"
                        className="form-control"
                      />
                      <label
                        className="form-label"
                        htmlFor="form6Example1"
                        placeholder="Nombre Trabajador..."
                      >
                        Nombre contacto de emergencia
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div data-mdb-input-init="" className="form-outline">
                      <input
                        placeholder="Relación..."
                        type="text"
                        id="form6Example2"
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form6Example2">
                        Relación
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col">
                    <div data-mdb-input-init="" className="form-outline">
                      <input
                        placeholder={+569}
                        type="text"
                        id="form6Example1"
                        className="form-control"
                      />
                      <label
                        className="form-label"
                        htmlFor="form6Example1"
                        placeholder="Nombre Trabajador..."
                      >
                        Telefono de emergencia
                      </label>
                    </div>
                  </div>
                  <div>
                    <h3 className="CargaFamiliar">Cargas familiares</h3>
                  </div>
                  <div className="row mb-4">
                    <div className="col">
                      <div data-mdb-input-init="" className="form-outline">
                        <input
                          placeholder="Nombre de su carga familiar..."
                          type="text"
                          id="form6Example1"
                          className="form-control"
                        />
                        <label
                          className="form-label"
                          htmlFor="form6Example1"
                          placeholder="Nombre Trabajador..."
                        >
                          Nombre
                        </label>
                      </div>
                    </div>
                    <div className="col">
                      <div data-mdb-input-init="" className="form-outline">
                        <input
                          placeholder="Ingrese apellido..."
                          type="text"
                          id="form6Example2"
                          className="form-control"
                        />
                        <label className="form-label" htmlFor="form6Example2">
                          Apellido
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="row mb-4">
                      <div className="col">
                        <div data-mdb-input-init="" className="form-outline">
                          <input
                            placeholder="Ingrese Parentesco"
                            type="text"
                            id="form6Example1"
                            className="form-control"
                          />
                          <label className="form-label" htmlFor="form6Example1">
                            Parentesco
                          </label>
                        </div>
                      </div>
                      <div className="col">
                        {/* espacio select  */}
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option selected="">Elija una opción...</option>
                          <option value={1}>Masculino</option>
                          <option value={2}>Femenino</option>
                        </select>
                        Sexo
                      </div>
                    </div>
                    
                  </div>
                </div>
              </form>
              <div className="Botones">
                      <button type="button" className="btn btn-success btn-lg custom-btn">
                        Crear Registro
                      </button>
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

export default IngresarTrabajador;
