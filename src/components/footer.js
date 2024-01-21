// src/components/Footer.js
import React from 'react';
import '../App.css'; // Asegúrate de ajustar la ruta según tu estructura de carpetas

const Footer = () => {
  return (
    <footer className="footer-container" style={{ backgroundColor: 'black', color: 'white' }}>
      <div className="footer-content">
        <p>&copy; 2024 Tu Tienda - Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
