import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <header className="navbar">
      <div className="navbar__logo">
        <Link to="/"><h1>Tienda</h1></Link>
      </div>
      <nav className="navbar__links">
        <Link to="/categoria/remeras">Remeras</Link>
        <Link to="/categoria/pantalones">Pantalones</Link>
        <Link to="/categoria/accesorios">Accesorios</Link>
      </nav>
      <CartWidget />
    </header>
  );
}

export default NavBar;
