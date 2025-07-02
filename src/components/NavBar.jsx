import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#eee' }}>
      <div>
        <img src="https://via.placeholder.com/50" alt="Logo Tienda" />
      </div>
      <div>
        <a href="#">Inicio</a> | 
        <a href="#">Productos</a> | 
        <a href="#">Contacto</a>
      </div>
      <div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
