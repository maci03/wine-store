import './App.css';
import React from 'react';

const wine = [
  {id: 1, name: "mukuzani", price: 45},
  {id: 2, name: "saperavi", price: 55},
  {id: 3, name: "kisi", price: 42}
]





function App() {
  return (
    <div className="App">
      <h1>Wine Shop</h1>
        <div className='wine-list'>
          <h2>Wine List</h2>
          <ul>
            {wines.map(wine =>(
              <li key={wine.id}>
                {wine.name} - {wine.price}
              </li>
            ))}
          </ul>
        </div>
    </div>
  );
}

export default App;
