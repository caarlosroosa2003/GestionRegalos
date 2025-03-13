// src/components/GiftDetail.jsx
import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { GiftContext } from '../context/GiftContext';

const GiftDetail = () => {
  const { id } = useParams();
  const { gifts } = useContext(GiftContext);
  const navigate = useNavigate();

  const gift = gifts.find((g) => g.id === parseInt(id));

  if (!gift) {
    return (
      <div className="container">
        <p>Regalo no encontrado.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Detalles del Regalo</h1>
      <p>
        <strong>Nombre:</strong> {gift.name}
      </p>
      <p>
        <strong>Descripción:</strong> {gift.description}
      </p>
      <p>
        <strong>Urgencia:</strong> {gift.urgency}
      </p>
      <p>
        <strong>Precio Estimado:</strong> {gift.price}
      </p>
      <p>
        <strong>Fecha del Regalo:</strong> {gift.giftDate}
      </p>
      <button onClick={() => navigate('/lista')}>Volver</button>
      <button onClick={() => navigate(`/editar/${gift.id}`)} style={{ marginLeft: '10px' }}>
        Editar
      </button>
    </div>
  );
};

export default GiftDetail;
