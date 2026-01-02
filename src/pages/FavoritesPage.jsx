// src/pages/FavoritesPage.jsx
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import ProductCard from '../components/ProductCard';
import { favoriteProducts } from '../data/products';
import { FaHeart, FaFilter, FaStar, FaFire, FaTag, FaSortAmountDown, FaShoppingBag } from 'react-icons/fa';

const FavoritesPage = () => {
  const [sortBy, setSortBy] = useState('popular');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products', icon: '⭐' },
    { id: 'home-decor', name: 'Home Decor', icon: '🏠' },
    { id: 'kitchen', name: 'Kitchen', icon: '🍳' },
    { id: 'bedding', name: 'Bedding', icon: '🛏️' },
    { id: 'lighting', name: 'Lighting', icon: '💡' },
  ];

  const sortOptions = [
    { id: 'popular', name: 'Most Popular' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'rating', name: 'Highest Rated' },
    { id: 'new', name: 'Newest' },
  ];

  const filteredProducts = favoriteProducts.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative px-4 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-pink-200 to-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-amber-200 to-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full mb-8">
              <FaHeart className="text-pink-500 animate-pulse" />
              <span className="font-semibold text-pink-700">Community Favorites</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-500 to-red-400">
                Shop Our Favorites
              </span>
            </h1>
            
            <p className="text-xl text-amber-800/90 mb-8">
              Handpicked products loved by thousands. Each item is carefully selected 
              for quality, comfort, and style.
            </p>
            
            <div className="flex items-center justify-center gap-4 text-sm text-amber-700">
              <div className="flex items-center gap-2">
                <FaFire className="text-orange-500" />
                <span>500+ Happy Customers</span>
              </div>
              <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
              <div className="flex items-center gap-2">
                <FaStar className="text-amber-500" />
                <span>4.9 Average Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="px-4 pb-12">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              <div>
                <h3 className="text-xl font-bold text-amber-900 mb-2 flex items-center gap-3">
                  <FaFilter className="text-amber-500" />
                  Filter & Sort
                </h3>
                <p className="text-amber-600">Find your perfect cozy companion</p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                {/* Category Filter */}
                <div className="relative group">
                  <button className="flex items-center gap-3 px-4 py-3 bg-amber-50 rounded-xl hover:bg-amber-100 transition-colors">
                    <span>🏠</span>
                    <span className="font-medium text-amber-800">{categories.find(c => c.id === selectedCategory)?.name || 'All Categories'}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute hidden group-hover:block top-full mt-2 bg-white shadow-2xl rounded-xl p-2 min-w-[200px] z-10">
                    {categories.map(category => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg transition-colors ${
                          selectedCategory === category.id 
                            ? 'bg-gradient-to-r from-pink-50 to-rose-50 text-pink-700' 
                            : 'hover:bg-amber-50 text-amber-800'
                        }`}
                      >
                        <span>{category.icon}</span>
                        <span>{category.name}</span>
                        {selectedCategory === category.id && (
                          <FaHeart className="ml-auto text-pink-500" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Sort Options */}
                <div className="relative group">
                  <button className="flex items-center gap-3 px-4 py-3 bg-amber-50 rounded-xl hover:bg-amber-100 transition-colors">
                    <FaSortAmountDown className="text-amber-500" />
                    <span className="font-medium text-amber-800">{sortOptions.find(s => s.id === sortBy)?.name || 'Sort By'}</span>
                  </button>
                  <div className="absolute hidden group-hover:block top-full mt-2 bg-white shadow-2xl rounded-xl p-2 min-w-[200px] z-10">
                    {sortOptions.map(option => (
                      <button
                        key={option.id}
                        onClick={() => setSortBy(option.id)}
                        className={`flex items-center justify-between w-full px-4 py-3 rounded-lg transition-colors ${
                          sortBy === option.id 
                            ? 'bg-gradient-to-r from-amber-50 to-orange-50 text-amber-700' 
                            : 'hover:bg-amber-50 text-amber-800'
                        }`}
                      >
                        <span>{option.name}</span>
                        {sortBy === option.id && (
                          <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Active Filters */}
            <div className="flex flex-wrap gap-3 mt-6">
              {selectedCategory !== 'all' && (
                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full">
                  <span>{categories.find(c => c.id === selectedCategory)?.icon}</span>
                  <span className="font-medium text-pink-700">{categories.find(c => c.id === selectedCategory)?.name}</span>
                  <button 
                    onClick={() => setSelectedCategory('all')}
                    className="ml-2 text-pink-500 hover:text-pink-700"
                  >
                    ×
                  </button>
                </div>
              )}
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full">
                <FaTag className="text-amber-600" />
                <span className="font-medium text-amber-700">{sortOptions.find(s => s.id === sortBy)?.name}</span>
                <button 
                  onClick={() => setSortBy('popular')}
                  className="ml-2 text-amber-500 hover:text-amber-700"
                >
                  ×
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-4 pb-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto bg-gradient-to-r from-amber-100 to-orange-100 rounded-full flex items-center justify-center mb-6">
                <FaHeart className="text-3xl text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold text-amber-900 mb-3">No products found</h3>
              <p className="text-amber-600 mb-8">Try changing your filters to see more products</p>
              <button 
                onClick={() => setSelectedCategory('all')}
                className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full hover:from-amber-600 hover:to-orange-600 transition-all font-semibold"
              >
                Clear All Filters
              </button>
            </div>
          )}
          
          {/* Promo Banner */}
          <div className="mt-16 bg-gradient-to-r from-pink-500 via-rose-500 to-red-400 rounded-3xl p-8 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div>
                  <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/20 rounded-full mb-6">
                    <FaHeart className="animate-pulse" />
                    <span className="font-semibold">Special Offer</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-3">Get 20% Off Your First Favorite!</h3>
                  <p className="text-pink-100">Use code: COZYFAV20 at checkout</p>
                </div>
                <button className="px-8 py-4 bg-white text-pink-600 rounded-full hover:bg-pink-50 transition-colors font-bold text-lg shadow-xl">
                  Shop Now & Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gradient-to-b from-amber-900 to-amber-950 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-800 to-orange-800 rounded-full mb-8">
            <FaShoppingBag />
            <span className="font-semibold">Happy Shopping!</span>
          </div>
          <p className="text-amber-200 mb-6">
            Every product is backed by our 100% satisfaction guarantee
          </p>
          <div className="flex justify-center gap-6">
            <button className="text-amber-300 hover:text-white transition-colors">Shipping Info</button>
            <button className="text-amber-300 hover:text-white transition-colors">Returns</button>
            <button className="text-amber-300 hover:text-white transition-colors">Contact Us</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FavoritesPage;