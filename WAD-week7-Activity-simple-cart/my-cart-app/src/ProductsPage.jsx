import { useCart } from './CartContext';

const sampleProducts = [
  { id: 1, name: 'Notebook', price: 50 },
  { id: 2, name: 'Ballpen', price: 15 },
  { id: 3, name: 'Marker', price: 35 },
];

export default function ProductsPage() {
  const { addToCart } = useCart();

  return (
    <div style={{ padding: '0 20px' }}>
      <h2>Products</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {sampleProducts.map((product) => (
          <li key={product.id} style={{ marginBottom: '10px' }}>
            <strong>{product.name}</strong> - ₱{product.price}{' '}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}