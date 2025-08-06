function ItemDetail({ nombre, descripcion, precio }) {
  return (
    <div className="product-detail">
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
      <p>Precio: ${precio}</p>
      <button>Agregar al carrito</button>
    </div>
  );
}

export default ItemDetail;
