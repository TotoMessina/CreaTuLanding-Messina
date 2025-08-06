import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductoPorId } from '../data/data';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
  const { idProducto } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    getProductoPorId(idProducto).then(setProducto);
  }, [idProducto]);

  return producto ? <ItemDetail {...producto} /> : <p>Cargando detalle...</p>;
}

export default ItemDetailContainer;
