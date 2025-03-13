import React, { useState, useContext, useEffect } from 'react';
import { GiftContext } from '../context/GiftContext';
import { useParams, useNavigate } from 'react-router';

const GiftEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { gifts, updateGift } = useContext(GiftContext);
  const giftToEdit = gifts.find((gift) => gift.id === parseInt(id));

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [urgency, setUrgency] = useState('');
  const [price, setPrice] = useState('');
  const [giftDate, setGiftDate] = useState('');

  useEffect(() => {
    if (giftToEdit) {
      setName(giftToEdit.name);
      setDescription(giftToEdit.description);
      setUrgency(giftToEdit.urgency);
      setPrice(giftToEdit.price);
      setGiftDate(giftToEdit.giftDate);
    }
  }, [giftToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name.trim() === '' ||
      description.trim() === '' ||
      urgency.trim() === '' ||
      price.toString().trim() === '' ||
      giftDate.trim() === ''
    ) return;
    
    const updatedGift = {
      id: giftToEdit.id,
      name,
      description,
      urgency,
      price,
      giftDate
    };
    updateGift(updatedGift);
    navigate(`/detalle/${giftToEdit.id}`);
  };

  if (!giftToEdit) {
    return (
      <div className="container">
        <p>Regalo no encontrado.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Modificar Regalo</h1>
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
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
};

export default GiftEdit;
