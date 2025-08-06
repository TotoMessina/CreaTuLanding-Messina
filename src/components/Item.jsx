import { Link } from 'react-router-dom';

function Item({ id, nombre, precio }) {
  return (
    <div className="product-card">
      <h3>{nombre}</h3>
      <p>${precio}</p>
      <Link to={`/item/${id}`}>Ver detalle</Link>
    </div>
  );
}

export default Item;
