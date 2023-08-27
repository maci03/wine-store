import React, { useState } from 'react';
import './App.css';

const wines = [
  { id: 1, name: 'Cabernet Sauvignon', price: 25.99 },
  { id: 2, name: 'Chardonnay', price: 18.99 },
  { id: 3, name: 'Merlot', price: 20.99 },
];

function App() {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = wine => {
    setCartItems ([...cartItems, wine]);
  };


  return (
    <div className="App">
      <h1>Wine Store</h1>
      <div className="wine-list">
        <h2>Wine List</h2>
        <ul>
        {wines.map(wine => (
            <li key={wine.id}>
              {wine.name} - ${wine.price}
              <button onClick={() => addToCart(wine)}>Add to Cart</button>
            </li>
          ))};
        </ul>
      </div>
    </div>
  );
}

export default App;
