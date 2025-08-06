import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductos } from '../data/data';
import ItemList from './ItemList';

function ItemListContainer({ mensaje }) {
  const { idCategoria } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos().then((res) => {
      if (idCategoria) {
        setProductos(res.filter((prod) => prod.categoria === idCategoria));
      } else {
        setProductos(res);
      }
    });
  }, [idCategoria]);

  return (
    <main className="main-content">
      {mensaje && <h2>{mensaje}</h2>}
      <ItemList productos={productos} />
    </main>
  );
}

export default ItemListContainer;
