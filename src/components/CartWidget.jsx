import React, { useState, useEffect } from 'react';

const CartWidget = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const randomCount = Math.floor(Math.random() * 10);
    setCartCount(randomCount);
  }, []);

  return (
    <div className="cart-widget">
      <span role="img" aria-label="carrito" style={{ fontSize: '1.5rem' }}>🛒</span>
      <span style={{ marginLeft: '0.3rem' }}>{cartCount}</span>
    </div>
  );
};

export default CartWidget;
