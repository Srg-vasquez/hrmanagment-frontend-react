import { useState, useEffect } from 'react';
import axios from '../axiosConfig';
import './css/InformacionPersonal.css';
import { Link } from 'react-router-dom';

function InformacionPersonal() {
  const [formData, setFormData] = useState({
    nombres: '',
    apellido_paterno: '',
    apellido_materno: '',
    rut: '',
    dv: '',
    direccion: '',
    telefono: '',
    id_sexo: '',
    id_cargo: '',
    fecha_ingreso: '',
    nombre_contacto: '',
    id_relacion_contacto: '',
    telefono_contacto: '',
    nombre_carga: '',
    apellido_carga: '',
    rut_carga: '',
    dv_carga: '',
    id_sexo_carga: '',
    id_relacion_carga: '',
    id_area: '',
    id_perfil: '',
  });

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

  const relaciones = [
    { id_relacion: 1, descripcion: 'Esposo/a' },
    { id_relacion: 2, descripcion: 'Hijo/a' },
    { id_relacion: 3, descripcion: 'Padre/Madre' },
    { id_relacion: 4, descripcion: 'Hermano/a' },
    { id_relacion: 5, descripcion: 'Tío/a' },
    { id_relacion: 6, descripcion: 'Abuelo/a' },
    { id_relacion: 7, descripcion: 'Amigo/a' },
    { id_relacion: 8, descripcion: 'Sin relación' }
  ];

  const perfiles = [
    { id_perfil: 1, descripcion: 'Administrador' },
    { id_perfil: 2, descripcion: 'Visualizador' },
    { id_perfil: 3, descripcion: 'Usuario' }
  ];

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setFormData({
        nombres: storedUser.trabajador.nombres || '',
        apellido_paterno: storedUser.trabajador.apellido_paterno || '',
        apellido_materno: storedUser.trabajador.apellido_materno || '',
        rut: storedUser.trabajador.rut ? storedUser.trabajador.rut.toString() : '',
        dv: storedUser.trabajador.dv || '',
        direccion: storedUser.trabajador.direccion || '',
        telefono: storedUser.trabajador.telefono ? storedUser.trabajador.telefono.toString() : '',
        id_sexo: storedUser.trabajador.sexo?.id_sexo || '',
        id_cargo: storedUser.trabajador.datosLaborales?.cargo?.id_cargo || '',
        fecha_ingreso: storedUser.trabajador.datosLaborales?.fecha_ingreso ? new Date(storedUser.trabajador.datosLaborales.fecha_ingreso).toISOString().split('T')[0] : '',
        nombre_contacto: storedUser.trabajador.contactoEmergencia?.nombre_completo || '',
        id_relacion_contacto: storedUser.trabajador.contactoEmergencia?.relacion?.id_relacion || '',
        telefono_contacto: storedUser.trabajador.contactoEmergencia?.telefono ? storedUser.trabajador.contactoEmergencia.telefono.toString() : '',
        nombre_carga: storedUser.trabajador.cargaFamiliar?.nombre_completo.split(' ')[0] || '',
        apellido_carga: storedUser.trabajador.cargaFamiliar?.nombre_completo.split(' ')[1] || '',
        rut_carga: storedUser.trabajador.cargaFamiliar?.rut ? storedUser.trabajador.cargaFamiliar.rut.toString() : '',
        dv_carga: storedUser.trabajador.cargaFamiliar?.dv || '',
        id_sexo_carga: storedUser.trabajador.cargaFamiliar?.sexo?.id_sexo || '',
        id_relacion_carga: storedUser.trabajador.cargaFamiliar?.relacion?.id_relacion || '',
        id_area: storedUser.trabajador.datosLaborales?.area?.id_area || '',
        id_perfil: storedUser.perfil.id_perfil || ''
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      id_sexo: parseInt(formData.id_sexo, 10),
      id_cargo: parseInt(formData.id_cargo, 10),
      id_area: parseInt(formData.id_area, 10),
      id_perfil: parseInt(formData.id_perfil, 10),
      id_relacion_contacto: parseInt(formData.id_relacion_contacto, 10),
      id_sexo_carga: parseInt(formData.id_sexo_carga, 10),
      id_relacion_carga: parseInt(formData.id_relacion_carga, 10),
    };
    try {
      await axios.put(`/usuarios/${formData.rut}`, payload);
      alert('Información actualizada correctamente!');
    } catch (error) {
      console.error('Hubo un error al actualizar la información!', error);
      alert('Hubo un error al actualizar la información!');
    }
  };

  return (
    <>
      <nav className="navbar navbar-light" style={{ backgroundColor: "#8FC1E3" }} data-mdb-theme="light">
        <img src="/Icons/envelope-svgrepo-com.svg" alt="Icon" className="Icon" />
        <div className="user-info">
          <div className="user-name">{formData.nombres} {formData.apellido_paterno} {formData.apellido_materno}</div>
        </div>
        <div className="logOut">
          <Link to="/">
            <img src="/Icons/sign-out-svgrepo-com.svg" alt="Log out" className="Log-Out" />
          </Link>
        </div>
      </nav>
      <h1 className="Titulo">Información Personal</h1>
      <div className="content-box">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="h2Titulo"><h3>Datos Trabajador</h3></div>
              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline">
                    <input type="text" id="nombres" name="nombres" className="form-control" value={formData.nombres} onChange={handleChange} disabled />
                    <label className="form-label" htmlFor="nombres">Nombre Trabajador</label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-outline">
                    <input type="text" id="apellido_paterno" name="apellido_paterno" className="form-control" value={formData.apellido_paterno} onChange={handleChange} disabled />
                    <label className="form-label" htmlFor="apellido_paterno">Apellido Paterno</label>
                  </div>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline">
                    <input type="text" id="apellido_materno" name="apellido_materno" className="form-control" value={formData.apellido_materno} onChange={handleChange} disabled />
                    <label className="form-label" htmlFor="apellido_materno">Apellido Materno</label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-outline">
                    <input type="text" id="rut" name="rut" className="form-control" value={formData.rut} onChange={handleChange} disabled />
                    <label className="form-label" htmlFor="rut">Rut Trabajador</label>
                  </div>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline">
                    <input type="text" id="direccion" name="direccion" className="form-control" value={formData.direccion} onChange={handleChange} />
                    <label className="form-label" htmlFor="direccion">Dirección</label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-outline">
                    <input type="text" id="telefono" name="telefono" className="form-control" value={formData.telefono} onChange={handleChange} />
                    <label className="form-label" htmlFor="telefono">Teléfono</label>
                  </div>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col">
                  <select className="form-select" id="id_sexo" name="id_sexo" value={formData.id_sexo} onChange={handleChange}>
                    {sexos.map((sexo) => (
                      <option key={sexo.id_sexo} value={sexo.id_sexo}>{sexo.descripcion}</option>
                    ))}
                  </select>
                  <label className="form-label" htmlFor="id_sexo">Sexo</label>
                </div>
                <div className="col">
                  <select className="form-select" id="id_cargo" name="id_cargo" value={formData.id_cargo} onChange={handleChange}>
                    {cargos.map((cargo) => (
                      <option key={cargo.id_cargo} value={cargo.id_cargo}>{cargo.descripcion}</option>
                    ))}
                  </select>
                  <label className="form-label" htmlFor="id_cargo">Cargo del trabajador</label>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline">
                    <input type="date" id="fecha_ingreso" name="fecha_ingreso" className="form-control" value={formData.fecha_ingreso} onChange={handleChange} />
                    <label className="form-label" htmlFor="fecha_ingreso">Fecha ingreso compañía</label>
                  </div>
                </div>
                <div className="col">
                  <select className="form-select" id="id_area" name="id_area" value={formData.id_area} onChange={handleChange}>
                    {areas.map((area) => (
                      <option key={area.id_area} value={area.id_area}>{area.descripcion}</option>
                    ))}
                  </select>
                  <label className="form-label" htmlFor="id_area">Área del trabajador</label>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col">
                  <select className="form-select" id="id_perfil" name="id_perfil" value={formData.id_perfil} onChange={handleChange} disabled>
                    {perfiles.map((perfil) => (
                      <option key={perfil.id_perfil} value={perfil.id_perfil}>{perfil.descripcion}</option>
                    ))}
                  </select>
                  <label className="form-label" htmlFor="id_perfil">Perfil</label>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline">
                    <input type="password" id="contrasena" name="contrasena" className="form-control" placeholder="Ingrese nueva contraseña..." value={formData.contrasena} onChange={handleChange} />
                    <label className="form-label" htmlFor="contrasena">Cambiar contraseña</label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-outline">
                    <input type="password" id="confirmar_contrasena" name="confirmar_contrasena" className="form-control" placeholder="Repita contraseña" value={formData.confirmar_contrasena} onChange={handleChange} />
                    <label className="form-label" htmlFor="confirmar_contrasena">Confirmar contraseña</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="h2Titulo"><h3>Contacto de emergencia</h3></div>
              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline">
                    <input type="text" id="nombre_contacto" name="nombre_contacto" className="form-control" value={formData.nombre_contacto} onChange={handleChange} />
                    <label className="form-label" htmlFor="nombre_contacto">Nombre contacto de emergencia</label>
                  </div>
                </div>
                <div className="col">
                  <select className="form-select" id="id_relacion_contacto" name="id_relacion_contacto" value={formData.id_relacion_contacto} onChange={handleChange}>
                    {relaciones.map((relacion) => (
                      <option key={relacion.id_relacion} value={relacion.id_relacion}>{relacion.descripcion}</option>
                    ))}
                  </select>
                  <label className="form-label" htmlFor="id_relacion_contacto">Relación</label>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline">
                    <input type="text" id="telefono_contacto" name="telefono_contacto" className="form-control" value={formData.telefono_contacto} onChange={handleChange} />
                    <label className="form-label" htmlFor="telefono_contacto">Teléfono de emergencia</label>
                  </div>
                </div>
              </div>
              <h3 className="CargaFamiliar">Cargas familiares</h3>
              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline">
                    <input type="text" id="nombre_carga" name="nombre_carga" className="form-control" value={formData.nombre_carga} onChange={handleChange} />
                    <label className="form-label" htmlFor="nombre_carga">Nombre Carga Familiar</label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-outline">
                    <input type="text" id="apellido_carga" name="apellido_carga" className="form-control" value={formData.apellido_carga} onChange={handleChange} />
                    <label className="form-label" htmlFor="apellido_carga">Apellido</label>
                  </div>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline">
                    <input type="text" id="rut_carga" name="rut_carga" className="form-control" value={formData.rut_carga} onChange={handleChange} />
                    <label className="form-label" htmlFor="rut_carga">RUT</label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-outline">
                    <input type="text" id="dv_carga" name="dv_carga" className="form-control" value={formData.dv_carga} onChange={handleChange} />
                    <label className="form-label" htmlFor="dv_carga">DV</label>
                  </div>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col">
                  <select className="form-select" id="id_relacion_carga" name="id_relacion_carga" value={formData.id_relacion_carga} onChange={handleChange}>
                    {relaciones.map((relacion) => (
                      <option key={relacion.id_relacion} value={relacion.id_relacion}>{relacion.descripcion}</option>
                    ))}
                  </select>
                  <label className="form-label" htmlFor="id_relacion_carga">Parentesco</label>
                </div>
                <div className="col">
                  <select className="form-select" id="id_sexo_carga" name="id_sexo_carga" value={formData.id_sexo_carga} onChange={handleChange}>
                    {sexos.map((sexo) => (
                      <option key={sexo.id_sexo} value={sexo.id_sexo}>{sexo.descripcion}</option>
                    ))}
                  </select>
                  <label className="form-label" htmlFor="id_sexo_carga">Sexo</label>
                </div>
              </div>
              <div className="Botones">
                <button type="submit" className="btn btn-success btn-lg custom-btn">Guardar</button>
                <Link to="/users" className="btn btn-primary btn-lg custom-btn">Volver</Link>
                

              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default InformacionPersonal;
