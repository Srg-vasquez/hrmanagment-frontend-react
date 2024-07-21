import React, { useEffect, useState } from 'react';

function LoginDataViewer() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUserData(storedUser);
    }
  }, []);

  if (!userData) {
    return <div>Cargando datos del usuario...</div>;
  }

  return (
    <div>
      <h1>Datos del Usuario</h1>
      <pre>{JSON.stringify(userData, null, 2)}</pre>
    </div>
  );
}

export default LoginDataViewer;
