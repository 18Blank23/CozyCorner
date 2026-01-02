// src/components/CategoryGrid.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';

const CategoryGrid = () => {
  const categoryImages = {
    'home-decor': 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=800',
    'kitchen': 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w-800',
    'lifestyle': 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800',
    'wellness': 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800',
    'seasonal': 'https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?w=800'
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => (
        <Link
          key={category.id}
          to={`/category/${category.slug}`}
          className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          <div className="relative h-64 overflow-hidden">
            <img
              src={categoryImages[category.slug] || 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=800'}
              alt={category.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{category.icon}</span>
              <h3 className="text-2xl font-serif font-bold group-hover:text-amber-200 transition-colors">
                {category.name}
              </h3>
            </div>
            <p className="text-amber-100 group-hover:text-white transition-colors">
              Explore our collection of {category.name.toLowerCase()} ideas and products
            </p>
            
            <div className="mt-4 flex items-center gap-2 text-amber-200 group-hover:text-white">
              <span>Browse Category</span>
              <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-amber-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Link>
      ))}
    </div>
  );
};

export default CategoryGrid;