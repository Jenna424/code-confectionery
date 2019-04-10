import React from 'react';

const CakeMenuItem = ({ name, flavorCombination, price }) => {
  return (
    <div>
      <p>CAKE NAME: {name}</p>
      <p>CAKE FLAVOR COMBO: {flavorCombination}</p>
      <p>CAKE PRICE: ${price.toFixed(2)}</p>
    </div>
  )
}

export default CakeMenuItem;