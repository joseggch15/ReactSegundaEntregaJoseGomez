// src/components/ItemListContainer.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';

const ItemListContainer = () => {
  const { id } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Convertir la categoría a minúsculas antes de la llamada a la API
    const categoriaMinusculas = id.toLowerCase();

    // Lógica para cargar productos basados en el id de la categoría
    fetch(`https://fakestoreapi.com/products?category=${categoriaMinusculas}`)
      .then(res => res.json())
      .then(data => setProductos(data))
      .catch(error => console.error('Error al cargar productos:', error));
  }, [id]);

  return (
    <div>
      <h2>Productos ON SALE</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {productos.map(producto => (
          <ProductCard
            key={producto.id}
            nombre={producto.title}
            descripcion={producto.description}
            costo={producto.price}
            // Pasa la URL de la imagen
            imagen={producto.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
