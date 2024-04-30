import React, { useState } from 'react';
import './POS.css';

// Sample food data

const foodCategories = [
  {
    id: 1,
    name: 'Burgers',
    image: 'https://via.placeholder.com/100', // Sample image URL
  },
  {
    id: 2,
    name: 'Pizzas',
    image: 'https://via.placeholder.com/50', // Sample image URL
  },
  
  
  // Add more food categories as needed
];

const App = () => {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Function to add item to cart
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // Function to handle search query change
 
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="app-container">
      <h1>Point of Sale (POS)</h1>
      <div className="top-section">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-bar"
        />
      
        <button className="category-button">Category</button>
        <button className="brand-button">Brands</button>
      </div>
      <div className="main-content">
        <div className="food-categories">
          {foodCategories.map((category) => (
            <div key={category.id} className="food-category">
              <img src={category.image} alt={category.name} />
              <h3>{category.name}</h3>
              <button onClick={() => addToCart(category)}>Add to Cart</button>
            </div>
          ))}
        </div>
        <div className="cart-section">
          <h2>Cart</h2>
          <div className="cart-items">
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>${item.price}</p>
              </div>
            ))}
          </div>
          <div className="billing">
            <h3>Total: ${cart.reduce((acc, item) => acc + item.price, 0)}</h3>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
