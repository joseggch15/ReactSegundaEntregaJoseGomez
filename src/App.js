// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Register from './components/Register';
import Footer from './components/footer';  // Cambiado a minúsculas
import Home from './components/Home';  // Asumiendo que tienes el componente Home creado



const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/src/components/Home.js" element={<Home />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/register" element={<Register />} />
      
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

