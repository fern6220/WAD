import { useCart } from './CartContext';

export default function CartPage() {
  const { cart, clearCart } = useCart();

  return (
    <div style={{ padding: '0 20px' }}>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index} style={{ marginBottom: '5px' }}>
                {item.name} - ₱{item.price}
              </li>
            ))}
          </ul>
          <button onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </div>
  );
}