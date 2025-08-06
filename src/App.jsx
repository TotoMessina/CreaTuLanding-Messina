import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer mensaje="¡Bienvenido a nuestra tienda!" />} />
        <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
        <Route path="/item/:idProducto" element={<ItemDetailContainer />} />
        <Route path="*" element={<h2 style={{ padding: '2rem' }}>404 - Página no encontrada</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
