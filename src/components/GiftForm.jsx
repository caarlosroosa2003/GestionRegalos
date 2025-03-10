import React, { useState, useContext } from 'react';
import { GiftContext } from '../context/GiftContext';
import { useNavigate } from 'react-router-dom';

const GiftForm = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const { addGift } = useContext(GiftContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim() === '' || descripcion.trim() === '') {
      return;
    }
    addGift({ nombre, descripcion });
    setNombre('');
    setDescripcion('');
    navigate('/lista');
  };

  return (
    <div className="container">
      <h1>Agregar Nuevo Regalo</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label>Descripción:</label>
          <input
            type="text"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default GiftForm;
