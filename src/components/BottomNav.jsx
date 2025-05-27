import { Link } from 'react-router-dom';

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 w-full bg-white border-t flex justify-around p-2 text-sm">
      <Link to="/">Aleatorio</Link>
      <Link to="/detalle">Detalle</Link>
      <Link to="/favoritos">Favoritos</Link>
      <Link to="/filtros">Filtros</Link>
      <Link to="/usuario">Usuario</Link>
      <Link to="/original">Original</Link>
    </nav>
  );
}