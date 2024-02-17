// ProductList.js
import React from 'react';
import Product from './Product';
import './Product.css'

const ProductList = ({ products, addToCart }) => {
  return (
    <div>
      <h2>Products</h2>
      <div className="item-cards">
        {products.map(product => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
