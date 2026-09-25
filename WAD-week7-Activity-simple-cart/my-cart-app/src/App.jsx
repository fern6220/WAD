import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import ProductsPage from './ProductsPage';
import CartPage from './CartPage';

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/products" replace />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}