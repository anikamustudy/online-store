import React, { useState } from 'react';
import './ProductPage.css';

const ProductPage = () => {
  const [selectedColor, setSelectedColor] = useState('Orange and Black');
  const [inStock, setInStock] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <div className="product-page">
      <nav className="breadcrumb">
        <a href="#">Home</a> &gt; 
        <a href="#">Bags, Wallets and Luggage</a> &gt; 
        <a href="#">Bags & Backpacks</a> &gt; 
        <a href="#">Backpacks</a> &gt; 
        <a href="#">Casual Backpacks</a>
      </nav>

      <div className="product-container">
        <div className="product-image">
          <img src="image_url" alt="Product" />
        </div>

        <div className="product-details">
          <h1>GEAR Orange and Black Casual Eco Backpack</h1>
          <p className="price">Price: ₹ 1,098.00</p>

          <div className="product-specifications">
            <h3>Specifications:</h3>
            <ul>
              <li>Material: Polyester</li>
              <li>Water Resistance: Water Resistant</li>
              <li>Dimensions: 45 x 32 x 13 cm</li>
              <li>Capacity: 22 L</li>
            </ul>
          </div>

          <div className="product-reviews">
            <h3>Reviews:</h3>
            <p>⭐⭐⭐⭐☆ (2 reviews)</p>
          </div>

          <div className="product-options">
            <h3>Color Options:</h3>
            <button onClick={() => handleColorChange('Orange and Black')}>
              Orange and Black
            </button>
            <button onClick={() => handleColorChange('Blue and Black')}>
              Blue and Black
            </button>
            <p>Selected Color: {selectedColor}</p>
          </div>

          <div className="checkout-options">
            <h3>Checkout:</h3>
            <label>Quantity: 
              <input 
                type="number" 
                value={quantity} 
                onChange={handleQuantityChange} 
                min="1" 
                max="10" 
              />
            </label>
            <button className="add-to-cart">Add to Cart</button>
            <button className="buy-now">Buy Now</button>
          </div>

          <div className="delivery-options">
            <h3>Delivery Options:</h3>
            <p>Cash on Delivery available</p>
            <p>Delivered in 2-4 business days</p>
          </div>

          <div className="stock-info">
            {inStock ? (
              <p className="in-stock">In Stock</p>
            ) : (
              <p className="out-of-stock">Out of Stock</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
