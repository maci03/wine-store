import React, { useState } from 'react';
import './App.css';
import Cart from './Components/Cart';

const wines = [
  { id: 1, name: 'Cabernet Sauvignon', price: 25.99 },
  { id: 2, name: 'Chardonnay', price: 18.99 },
  { id: 3, name: 'Merlot', price: 20.99 },
];




function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = wine => {
    setCartItems([...cartItems, wine]);
  };

  const removeFromCart = itemId => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
  };
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <h1>Wine Store</h1>
        </div>
      </header>
        <div className="container">
          <div className="wine-list">
            {wines.map(wine => (
              <div className="wine-card" key={wine.id}>
                <h3>{wine.name}</h3>
                <p>${wine.price}</p>
                <button onClick={() => addToCart(wine)}>Add to Cart</button>
              </div>
            ))}
          </div>
          <div className="cart">
            <h2>Cart</h2>
            <ul className="cart-list">
              {cartItems.map(item => (
                <li className="cart-item" key={item.id}>
                  <span>{item.name}</span>
                  <span>${item.price}</span>
                </li>
              ))}
            </ul>
          </div>
          <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
}

export default App;
