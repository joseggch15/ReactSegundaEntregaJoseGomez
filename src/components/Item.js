// src/components/Item.js
import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ id, name }) => {
  return (
    <div>
      <Link to={`/item/${id}`}>{name}</Link>
    </div>
  );
};

export default Item;
