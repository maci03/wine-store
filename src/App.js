import React, { useState } from 'react';
import './App.css';
import Cart from './Components/Cart';
import Logo from "./assets/images/wine-store-logo.png";

const wines = [
  { id: 1, name: 'Cabernet Sauvignon', price: 25.99,
   info:"Cabernet sauvignon is the most popular red wine in the world. Though it originated in France, cabernet is now produced in virtually every major winemaking region on the globe, from Chile to California, Washington State, and western Australia"},
  { id: 2, name: 'Chardonnay', price: 18.99,
  info:"Chardonnay has a wide-ranging reputation for relative ease of cultivation and ability to adapt to different conditions"
},
  { id: 3, name: 'Merlot', price: 24.99,
  info:"Merlot is a dark blue–colored wine grape variety, that is used as both a blending grape and for varietal wines."
},
  { id: 3, name: 'Pinot', price: 35.99,
  info:"Pinot noir is a red-wine grape variety of the species Vitis vinifera. The name may also refer to wines created predominantly from pinot noir grapes."
},
  { id: 3, name: 'Aetos', price: 205.99,
  info:"A Red wine from Maipo Valley, Central Valley, Chile. This wine has 59 mentions of oaky notes (oak, vanilla). See reviews and pricing for this wine."
},
  { id: 3, name: 'Nodus', price: 20.99, 
  info:"Nodus has one of the most complete ranges on the market. Nodus wines are found on the most exclusive wine lists and in boutique stores."
}
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
          <div className="logo">
            <img src={Logo}  alt="Wine Store Logo" />
            <h1 className='wine-store-txt'>Wine Store</h1>
          </div>
          
        </div>
        
          <nav className='menu'>
            <ul>
            <li><a href="#home">Home</a></li>
              <li><a href="#sales">Sales</a></li>
              <li><a href="#collection">Collection</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
      </header>
      <div className="container">
        <section id="home">
        
        </section>
        <section id="sales">
       
        </section>
        <section id="collection">
        
        </section>
        <section id="about">
        
        </section>
        <section id="contact">
        
        </section>
        
      </div>
        <div className="container">
          <div className="wine-list">
            {wines.map(wine => (
              <div className="wine-card" key={wine.id}>
                <h3>{wine.name}</h3>
                <p>${wine.price}</p>
                <p>{wine.info}</p>
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