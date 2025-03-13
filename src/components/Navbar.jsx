// src/components/Navbar.jsx
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { GiftContext } from '../context/GiftContext';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { gifts } = useContext(GiftContext);
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Inicio</NavLink>
        </li>
        {gifts.length > 0 && (
          <li>
            <NavLink to="/lista" className={({ isActive }) => isActive ? 'active' : ''}>
              Lista de destinatarios
            </NavLink>
          </li>
        )}
        <li>
          <NavLink to="/agregar" className={({ isActive }) => isActive ? 'active' : ''}>Agregar regalo</NavLink>
        </li>
        {isAuthenticated ? (
          <li>
            <NavLink to="/protected" className={({ isActive }) => isActive ? 'active' : ''}>
              Área Protegida
            </NavLink>
          </li>
        ) : (
          <li>
            <NavLink to="/login" className={({ isActive }) => isActive ? 'active' : ''}>
              Login
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
