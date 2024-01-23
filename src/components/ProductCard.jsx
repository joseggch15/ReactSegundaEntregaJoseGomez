// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ nombre, descripcion, costo, imagen }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '200px' }}>
      {/* Mostrar la imagen */}
      <img src={imagen} alt={nombre} style={{ maxWidth: '100%', height: 'auto' }} />
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <p>Costo: ${costo}</p>
    </div>
  );
};

export default ProductCard;
