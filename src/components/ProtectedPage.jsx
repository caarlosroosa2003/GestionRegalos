import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router';

const ProtectedPage = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="container">
      <h1>Página Protegida</h1>
      <p>Esta es una página solo accesible para usuarios autenticados.</p>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
};

export default ProtectedPage;
