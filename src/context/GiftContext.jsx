import React, { createContext, useState } from 'react';

export const GiftContext = createContext();

export const GiftProvider = ({ children }) => {
  const [gifts, setGifts] = useState([]);

  const addGift = (gift) => {
    setGifts((prevGifts) => [...prevGifts, { id: prevGifts.length + 1, ...gift }]);
  };

  const deleteGift = (id) => {
    setGifts(gifts.filter(gift => gift.id !== id));
  };

  const updateGift = (updatedGift) => {
    setGifts(gifts.map(gift => gift.id === updatedGift.id ? updatedGift : gift));
  };

  return (
    <GiftContext.Provider value={{ gifts, addGift, deleteGift, updateGift }}>
      {children}
    </GiftContext.Provider>
  );
};
