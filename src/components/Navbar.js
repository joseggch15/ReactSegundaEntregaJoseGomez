// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Importa los estilos

const Navbar = () => {
  return (
    <nav>
      <Link to="/src/components/Home.js">Home</Link>
      <Link to="/category/vehiculos">Inmuebles</Link>
      <Link to="/about-us">Acerca de nosotros</Link>
      <Link to="/register">Registro</Link>
    </nav>
  );
};

export default Navbar;
