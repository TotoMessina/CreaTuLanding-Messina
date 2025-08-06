import { useState } from 'react';

function ItemCount({ stock, initial }) {
  const [cantidad, setCantidad] = useState(initial);

  const aumentar = () => {
    if (cantidad < stock) setCantidad(cantidad + 1);
  };

  const disminuir = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  return (
    <div>
      <button onClick={disminuir}>-</button>
      <span>{cantidad}</span>
      <button onClick={aumentar}>+</button>
      <button>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;
