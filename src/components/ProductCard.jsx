// src/components/ProductCard.jsx
import React, { useState } from 'react';
import { FaHeart, FaStar, FaShoppingCart, FaEye, FaFire, FaLeaf } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(product.isFavorite);
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    // Add to cart logic here
    console.log('Added to cart:', product.name);
  };

  const handleFavorite = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    // Update favorite status in backend
  };

  return (
    <div 
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {product.isNew && (
          <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full">
            NEW
          </span>
        )}
        {product.isBestSeller && (
          <span className="px-3 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
            <FaFire className="text-xs" /> Best Seller
          </span>
        )}
        {product.discount && (
          <span className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-green-500 text-white text-xs font-bold rounded-full">
            -{product.discount}%
          </span>
        )}
      </div>

      {/* Favorite Button */}
      <button
        onClick={handleFavorite}
        className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 group/fav"
      >
        <FaHeart className={`text-lg ${isFavorite ? 'text-pink-500 fill-pink-500' : 'text-gray-400 group-hover/fav:text-pink-400'}`} />
      </button>

      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        
        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
        
        {/* Quick Actions on Hover */}
        <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <button 
            onClick={handleAddToCart}
            className="px-4 py-2 bg-white text-amber-600 rounded-full font-semibold text-sm hover:bg-amber-50 transition-colors flex items-center gap-2 shadow-lg"
          >
            <FaShoppingCart /> Add to Cart
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full font-semibold text-sm hover:from-amber-600 hover:to-orange-600 transition-all flex items-center gap-2 shadow-lg">
            <FaEye /> Quick View
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded-full">
            {product.category}
          </span>
          {product.isEcoFriendly && (
            <FaLeaf className="text-emerald-500" title="Eco-friendly" />
          )}
        </div>

        <h3 className="font-bold text-amber-900 mb-2 group-hover:text-amber-700 transition-colors line-clamp-1">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className={i < product.rating ? 'fill-amber-400' : 'text-gray-300'} />
            ))}
          </div>
          <span className="text-sm text-gray-500">({product.reviewCount})</span>
        </div>

        {/* Price and Actions */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-amber-900">${product.price}</span>
              {product.originalPrice && (
                <span className="text-gray-400 line-through text-sm">${product.originalPrice}</span>
              )}
            </div>
            {product.shipping && (
              <span className="text-xs text-emerald-600">{product.shipping}</span>
            )}
          </div>
          
          <button 
            onClick={handleAddToCart}
            className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full hover:from-amber-600 hover:to-orange-600 transition-all flex items-center gap-2 text-sm font-semibold shadow-md hover:shadow-lg"
          >
            <FaShoppingCart /> Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;