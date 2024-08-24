import React, { useState } from "react";
import Slider from "react-slick";
import "./HomePage.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  // (Your products array as before)
];

const sliderItems = [
  {
    id: 1,
    image: "slider_image_1_url",
    title: "Summer Collection",
    description: "Discover our new summer collection",
  },
  {
    id: 2,
    image: "slider_image_2_url",
    title: "Best Sellers",
    description: "Check out our best-selling products",
  },
  {
    id: 3,
    image: "slider_image_3_url",
    title: "Limited Edition",
    description: "Shop our limited edition items",
  },
  // Add more slider items as needed
];

const Homepage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortOption, setSortOption] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 4;

  const handleSearch = () => {
    const query = searchQuery.toLowerCase();
    const results = products.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
    );
    setFilteredProducts(results);
    setCurrentPage(1);
  };

  const handleSort = (option) => {
    setSortOption(option);
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      if (option === "price") return a.price - b.price;
      if (option === "rating") return b.rating - a.rating;
      return 0;
    });
    setFilteredProducts(sortedProducts);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * resultsPerPage,
    currentPage * resultsPerPage
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="homepage">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products, brands, categories..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <Slider {...sliderSettings} className="slider">
        {sliderItems.map((item) => (
          <div key={item.id} className="slider-item">
            <img src={item.image} alt={item.title} />
            <div className="slider-content">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>

      <div className="sort-options">
        <button onClick={() => handleSort("price")}>Sort by Price</button>
        <button onClick={() => handleSort("rating")}>Sort by Rating</button>
      </div>

      <div className="products-grid">
        {paginatedProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Brand: {product.brand}</p>
            <p>Price: ₹{product.price}</p>
            <p>Rating: ⭐{product.rating}</p>
          </div>
        ))}
      </div>

      <div className="pagination">
        {Array.from(
          { length: Math.ceil(filteredProducts.length / resultsPerPage) },
          (_, i) => (
            <button
              key={i + 1}
              className={currentPage === i + 1 ? "active" : ""}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Homepage;
