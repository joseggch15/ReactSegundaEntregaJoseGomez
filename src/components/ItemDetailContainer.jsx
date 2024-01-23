// src/components/ItemDetailContainer.js
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const { id } = useParams();

  useEffect(() => {
    // Lógica para cargar detalles del producto basado en el id del ítem
    console.log('Cargando detalles del producto con id:', id);
  }, [id]);

  return <div>ItemDetailContainer</div>;
};

export default ItemDetailContainer;
