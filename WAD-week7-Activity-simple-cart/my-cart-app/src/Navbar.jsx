import { NavLink } from 'react-router-dom';
import { useCart } from './CartContext';

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav style={{ display: 'flex', gap: '20px', padding: '15px', background: '#e2e8f0', marginBottom: '20px' }}>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/cart">Cart ({cart.length})</NavLink>
    </nav>
  );
}