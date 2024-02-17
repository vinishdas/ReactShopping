 // Product.js
import React from 'react';
import './Product.css';
const Product = ({ product, addToCart }) => {
  const { title, price, image } = product;

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="item-card">
      <h3>{title}</h3>
      <img src={image} alt={title}  />
      <p>Price: ${price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
