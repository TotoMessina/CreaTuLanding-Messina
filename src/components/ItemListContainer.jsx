import React, { useState, useEffect } from 'react';

const ItemListContainer = ({ greeting }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="item-container">
      {loading ? <p>Cargando productos...</p> : (
        <>
          <h1>{greeting}</h1>
          <p>Descubrí los mejores productos a los mejores precios.</p>
          <button onClick={() => alert('¡Pronto podrás ver nuestros productos!')}>
            Ver catálogo
          </button>
        </>
      )}
    </div>
  );
};

export default ItemListContainer;
