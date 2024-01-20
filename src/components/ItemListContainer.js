// src/components/ItemListContainer.js
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const { id } = useParams();

  useEffect(() => {
    // Lógica para cargar productos basados en el id de la categoría
    console.log('Cargando productos para la categoría:', id);
  }, [id]);

  return <div>ItemListContainer</div>;
};

export default ItemListContainer;
