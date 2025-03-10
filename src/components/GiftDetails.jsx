import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { GiftContext } from '../context/GiftContext';

const GiftDetails = () => {
  const { id } = useParams();
  const { gifts } = useContext(GiftContext);
  const navigate = useNavigate();

  const gift = gifts.find((g) => g.id === parseInt(id));

  if (!gift) {
    return <p>Regalo no encontrado.</p>;
  }

  return (
    <div className="container">
      <h1>Detalles del Regalo</h1>
      <p>
        <strong>Nombre:</strong> {gift.nombre}
      </p>
      <p>
        <strong>Descripción:</strong> {gift.descripcion}
      </p>
      <button onClick={() => navigate('/lista')}>Volver</button>
    </div>
  );
};

export default GiftDetails;
