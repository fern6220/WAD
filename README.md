# Simple Shopping Cart App

A React web application featuring multi-page navigation and shared global state for a shopping cart using React Context and React Router.

## Setup & Running Instructions

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/fern6220/WAD.git](https://github.com/fern6220/WAD.git)

##State Management Explanation

The cart state is stored centrally inside CartContext.jsx using React's useState hook and the Context API. The CartProvider wraps the entire application in main.jsx, making the global state accessible across all routes. Both the ProductsPage and CartPage consume this shared state via a custom useCart() hook to add items, view items, and clear the cart seamlessly.
