import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para la navegación programática
import './css/Login.css';

function LogIn() {
  const navigate = useNavigate(); // Obtén la función de navegación

  // Función para manejar el inicio de sesión y la redirección
  const handleLogin = () => {
    // Aquí iría tu lógica de validación de usuario y contraseña

    // Simulación de inicio de sesión exitoso
    const loginSuccessful = true;

    if (loginSuccessful) {
      // Redirige al usuario a UsersPage
      navigate('/users');
    } else {
      // Maneja la lógica para mostrar un mensaje de error o similar
    }
  };

  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#8FC1E3" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card contenedorlogin" style={{ borderRadius: "1rem" }}>
                <div className="row g-0 contenedorCentral">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="/Images/2143367.jpg"
                      alt="login form"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i
                            className="fas fa-cubes fa-2x me-3"
                            style={{ color: "#000000" }}
                          />
                          <span className="h1 fw-bold mb-0">Logo</span>
                        </div>
                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: 1 }}
                        >
                          Ingrese con su usuario
                        </h5>
                        <div
                          data-mdb-input-init=""
                          className="form-outline mb-4"
                        >
                          <input
                            type="email"
                            id="form2Example17"
                            className="form-control form-control-lg"
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example17"
                          >
                            Ingrese su rut
                          </label>
                        </div>
                        <div
                          data-mdb-input-init=""
                          className="form-outline mb-4"
                        >
                          <input
                            type="password"
                            id="form2Example27"
                            className="form-control form-control-lg"
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example27"
                          >
                            contraseña
                          </label>
                        </div>
                        <div className="pt-1 mb-4">
                          <button
                            data-mdb-button-init=""
                            data-mdb-ripple-init=""
                            className="btn btn-success"
                            type="button"
                            onClick={handleLogin} // Llama a handleLogin al hacer clic
                          >
                            Ingresar
                          </button>
                        </div>
                        <a
                          className="small text-muted"
                          href="#!"
                          data-bs-toggle="modal"
                          data-bs-target="#forgotPasswordModal"
                        >
                          olvidaste tu contraseña?
                        </a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="modal fade"
        id="forgotPasswordModal"
        tabIndex={-1}
        aria-labelledby="forgotPasswordModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="forgotPasswordModalLabel">
                <i className="fas fa-exclamation-triangle me-2" /> Alerta
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <p>
                Para volver a entrar en su cuenta, deberá comunicarse con{" "}
                <b>Recursos Humanos</b> y restablecer su contraseña.
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Volver
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogIn;
