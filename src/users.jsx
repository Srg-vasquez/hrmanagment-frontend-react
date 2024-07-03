
import './CSS/InformacionPersonal.css'

function InformacionPersonal() {





    return (
      
            <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="../CSS/camposUsuario.css" />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
    crossOrigin="anonymous"/>
  <title>Usuario</title>


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
  <div className="content-box">
    <div className="row">
      <div className="col-md-6">
        <h3>Bienvenid@ </h3>
        <div className="button">
          <button
            type="button"
            className="btn btn-primary btn-lg btn-block botonUsuario"
            onclick="location.href='personal_info.html'"
          >
            <img
              src="../Icons/usericons/user-alt-1-svgrepo-com.svg"
              alt="userIcon"
              className="userIcon"
            />
            Ver informacion personal
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg btn-block botonUsuario"
            onclick="location.href='list_funcionario.html'"
          >
            <img
              src="../Icons/usericons/clipboard-list-svgrepo-com.svg"
              alt="userIcon"
              className="listIcon"
            />
            Ver Lista funcionario
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg btn-block botonUsuario"
            onclick="location.href='manage_funcionario.html'"
          >
            <img
              src="../Icons/usericons/search-alt-2-svgrepo-com.svg"
              alt="userIcon"
              className="searchIcon"
            />
            Gestionar funcionario
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg btn-block botonUsuario"
            onclick="location.href='add_funcionario.html'">
                
            <img
              src="../Icons/usericons/adduser.svg"
              alt="userIcon"
              className="addUser"
            />
            Ingresar funcionario
          </button>
        </div>
      </div>
      <div className="col-md-6 ">
        <div className="card">
          <button
            type="button"
            className="botonImagen"
            onclick="document.getElementById('fileInput').click();"
          >
            <img
              src="/Icons/Edit-Image.svg"
              alt="EditImage"
              className="EditImage"
            />
          </button>
          <input
            type="file"
            id="fileInput"
            className="hidden-file-input"
            accept="image/*"
            onchange="handleFileSelect(event)"
          />
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
            alt="IconProfile"
            style={{ width: "90%", textAlign: "center" }}
          />
          <br />
          <h3>
            <b>Nombre Persona</b>
          </h3>
          <p className="title">Cargo Trabajador</p>
          <p>Departamento</p>
          <div style={{ margin: "24px 0" }}>
            <a href="https://www.linkedin.com/in/md-abu-talha/" target="_blank">
              <i className="fa fa-linkedin" />
            </a>
            <a href="https://www.facebook.com/talha.sust.cse" target="_blank">
              <i className="fa fa-facebook" />
            </a>
            <a href="https://github.com/talha08" target="_blank">
              <i className="fa fa-github" />
            </a>
            <a href="https://medium.com/@talhaqc" target="_blank">
              <i className="fa fa-medium" />
            </a>
          </div>
          <p>
            <a href="talha08.github.io" className="buttonProfile">
              perfil
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</>

        
    );
}

export default InformacionPersonal;
