// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/category/vehiculos">Vehículos</Link>
      <Link to="/about-us">Acerca de nosotros</Link>
      <Link to="/register">Registro</Link>
    </nav>
  );
};

export default Navbar;
