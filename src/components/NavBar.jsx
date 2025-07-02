import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav>
      <div className="nav-links">
        <a href="#">Inicio</a>
        <a href="#">Productos</a>
        <a href="#">Contacto</a>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
