import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>ELECTROMAGIC</h1>
      <nav className="navigation">
        <a href="#productos">Productos</a>
        <a href="#carrito">Carrito</a>
      </nav>
    </header>
  );
};

export default Header;
