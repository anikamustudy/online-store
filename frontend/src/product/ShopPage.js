import React, { useState } from "react";
import "./ShopPage.css";

const products = [
  {
    id: 1,
    name: "Casual T-Shirt",
    price: "₹500",
    category: "T-Shirts",
    image: "tshirt_image_url",
  },
  {
    id: 2,
    name: "Denim Jeans",
    price: "₹1500",
    category: "Jeans",
    image: "jeans_image_url",
  },
  {
    id: 3,
    name: "Formal Shirt",
    price: "₹800",
    category: "Shirts",
    image: "shirt_image_url",
  },
  {
    id: 4,
    name: "Summer Dress",
    price: "₹1200",
    category: "Dresses",
    image: "dress_image_url",
  },
  // Add more products here
];

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="shop-page">
      <div className="filter-section">
        <h2>Filters</h2>
        <button onClick={() => handleCategoryChange("All")}>All</button>
        <button onClick={() => handleCategoryChange("T-Shirts")}>
          T-Shirts
        </button>
        <button onClick={() => handleCategoryChange("Jeans")}>Jeans</button>
        <button onClick={() => handleCategoryChange("Shirts")}>Shirts</button>
        <button onClick={() => handleCategoryChange("Dresses")}>Dresses</button>
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            <button className="buy-now">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
