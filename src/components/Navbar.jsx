import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
    <ul>
      <li>
        <Link to="/">Inicio</Link>
      </li>
      <li>
        <Link to="/lista">Lista de destinatarios</Link>
      </li>
      <li>
        <Link to="/agregar">Agregar regalo</Link>
      </li>
    </ul>
  </nav>
  );
};

export default Navbar;
