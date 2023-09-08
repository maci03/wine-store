import React, { useState } from 'react';
import './App.css';
import Cart from './Components/Cart';
import Logo from './assets/images/wine-store-logo.png';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const wines = [
  { id: 1, name: 'Cabernet Sauvignon', price: 25.99 },
  { id: 2, name: 'Chardonnay', price: 18.99 },
  { id: 3, name: 'Merlot', price: 24.99 },
  { id: 4, name: 'Pinot', price: 35.99 },
  { id: 5, name: 'Aetos', price: 205.99 },
  { id: 6, name: 'Nodus', price: 20.99 },
];

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (wine) => {
    setCartItems([...cartItems, wine]);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  return (
    <Router>
      <div className="App">
        <header className="header">
          <div className="container">
            <div className="logo">
              <img src={Logo} alt="Wine Store Logo" />
              <h1 className="wine-store-txt">Wine Store</h1>
            </div>
          </div>
          <nav className="menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="#sales">Sales</a>
              </li>
              <li>
                <a href="#collection">Collection</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route path="/" exact>
            <div className="container">
              <section id="home">
                <h2>Welcome to Wine Store</h2>
                <p>
                  Explore our wide selection of fine wines and discover the perfect bottle for any occasion.
                </p>
                <p>
                  Whether you're a wine enthusiast or just looking for a great bottle to share, we have something for everyone.
                </p>
              </section>
              <section id="sales">
                {/* Content for the Sales section */}
              </section>
              <section id="collection">
                {/* Content for the Collection section */}
              </section>
              <section id="about">
                {/* Content for the About section */}
              </section>
              <section id="contact">
                {/* Content for the Contact section */}
              </section>
            </div>
            <div className="container">
              <div className="wine-list">
                {wines.map((wine) => (
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
                  {cartItems.map((item) => (
                    <li className="cart-item" key={item.id}>
                      <span>{item.name}</span>
                      <span>${item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
