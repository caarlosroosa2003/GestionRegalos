import React, { createContext, useState } from 'react';

export const GiftContext = createContext();

export const GiftProvider = ({ children }) => {
  const [gifts, setGifts] = useState([]);

  const addGift = (gift) => {
    // Asignamos un id incrementando la longitud actual de la lista
    setGifts((prevGifts) => [...prevGifts, { id: prevGifts.length + 1, ...gift }]);
  };

  return (
    <GiftContext.Provider value={{ gifts, addGift }}>
      {children}
    </GiftContext.Provider>
  );
};
