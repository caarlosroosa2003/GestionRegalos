import React, { useState, useContext } from 'react';
import { GiftContext } from '../context/GiftContext';
import { useNavigate } from 'react-router';

const GiftForm = () => {
  const { addGift } = useContext(GiftContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [urgency, setUrgency] = useState('');
  const [price, setPrice] = useState('');
  const [giftDate, setGiftDate] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación: ningún campo debe estar vacío
    if (
      name.trim() === '' ||
      description.trim() === '' ||
      urgency.trim() === '' ||
      price.trim() === '' ||
      giftDate.trim() === ''
    ) return;
    
    addGift({ name, description, urgency, price, giftDate });
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
            placeholder="Nombre del destinatario"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Descripción:</label>
          <input
            type="text"
            placeholder="Descripción de la idea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Urgencia:</label>
          <input
            type="text"
            placeholder="Prioridad (alta, media, baja)"
            value={urgency}
            onChange={(e) => setUrgency(e.target.value)}
          />
        </div>
        <div>
          <label>Precio Estimado:</label>
          <input
            type="number"
            placeholder="Precio estimado"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label>Fecha del Regalo:</label>
          <input
            type="date"
            value={giftDate}
            onChange={(e) => setGiftDate(e.target.value)}
          />
        </div>
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default GiftForm;
