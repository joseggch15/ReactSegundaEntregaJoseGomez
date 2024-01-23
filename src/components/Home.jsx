// src/pages/Home.js
import React from 'react';
import '../App.css'; // Asegúrate de ajustar la ruta según tu estructura de carpetas
import FeaturedProducts from './FeaturedProducts';
import Testimonials from './Testimonials';
import NewsletterSignup from './NewsletterSignup';
import Footer from './footer'; // Importa el componente Footer

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Bienvenido a Nuestra Tienda</h1>
          <p>Descubre la mejor selección de productos para tus necesidades</p>
          <a href="/category/destacados" className="cta-button">
            Explora Productos Destacados
          </a>
        </div>
      </section>

      <section className="featured-products-section">
        <h2>Productos Destacados</h2>
        <FeaturedProducts />
      </section>

      <section className="testimonials-section">
        <h2>Lo que dicen nuestros clientes</h2>
        <Testimonials />
      </section>

      <section className="newsletter-section">
        <h2>Únete a Nuestro Boletín</h2>
        <NewsletterSignup />
      </section>
    </div>
  );
};






export default Home;
