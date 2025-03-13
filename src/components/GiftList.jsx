import React, { useContext, useState } from 'react';
import { GiftContext } from '../context/GiftContext';
import { Link } from 'react-router';

const GiftList = () => {
  const { gifts, deleteGift } = useContext(GiftContext);
  const [searchTerm, setSearchTerm] = useState('');

  // Filtramos los regalos según el término de búsqueda (sin distinguir mayúsculas/minúsculas)
  const filteredGifts = gifts.filter((gift) =>
    gift.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Lista de Destinatarios</h1>
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Buscar destinatario..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '0.5rem', width: '100%', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </div>
      {filteredGifts.length === 0 ? (
        <p>No hay regalos pendientes.</p>
      ) : (
        <ul>
          {filteredGifts.map((gift) => (
            <li key={gift.id} style={{ marginBottom: '0.5rem' }}>
              <Link to={`/detalle/${gift.id}`}>{gift.name}</Link> — Urgencia: {gift.urgency}
              <button onClick={() => deleteGift(gift.id)} style={{ marginLeft: '10px' }}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GiftList;
