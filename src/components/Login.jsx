import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router';

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const handleLogin = () => {
    login();
    navigate('/protected');
  };
  
  return (
    <div className="container">
      <h1>Login</h1>
      <p>Haz clic para iniciar sesión</p>
      <button onClick={handleLogin}>Iniciar sesión</button>
    </div>
  );
};

export default Login;
