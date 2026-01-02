// src/components/ProductLink.jsx
import React from 'react';

const ProductLink = ({ product }) => {
  return (
    <a 
      href={product.link}
      className="inline-block bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 px-3 py-1 rounded-full hover:from-amber-200 hover:to-orange-200 transition-all duration-300 font-medium mx-1"
    >
      {product.name}
    </a>
  );
};

export default ProductLink;