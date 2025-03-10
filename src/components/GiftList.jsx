import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GiftContext } from '../context/GiftContext';

const GiftList = () => {
  const { gifts } = useContext(GiftContext);

  if (gifts.length === 0) {
    return <p>No hay regalos pendientes.</p>;
  }

  return (
    <div className="container">
      <h1>Lista de Destinatarios</h1>
      {gifts.length === 0 ? (
        <p>No hay regalos pendientes.</p>
      ) : (
        <ul>
          {gifts.map((gift) => (
            <li key={gift.id}>
              <Link to={`/detalle/${gift.id}`}>{gift.nombre}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GiftList;
