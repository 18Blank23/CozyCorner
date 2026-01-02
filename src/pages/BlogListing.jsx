// src/pages/BlogListing.jsx
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data/blogPosts';
import { categories } from '../data/categories';

const BlogListing = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <>
      <Navigation />
      
      <div className="container mx-auto max-w-6xl px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-serif font-bold text-amber-900 mb-4">
            Our Blog
          </h1>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto">
            Tips, inspiration, and stories to make your home and life cozier
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-2 rounded-full transition-all ${selectedCategory === 'all' 
              ? 'bg-amber-600 text-white' 
              : 'bg-amber-100 text-amber-800 hover:bg-amber-200'}`}
          >
            All Posts
          </button>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.slug)}
              className={`px-6 py-2 rounded-full transition-all ${selectedCategory === category.slug 
                ? 'bg-amber-600 text-white' 
                : 'bg-amber-100 text-amber-800 hover:bg-amber-200'}`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredPosts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-serif font-bold mb-4">
            Get Cozy Updates
          </h3>
          <p className="mb-6 text-amber-100">
            Subscribe to our newsletter for the latest blog posts and exclusive offers
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-300"
            />
            <button className="px-6 py-3 bg-white text-amber-600 rounded-full font-semibold hover:bg-amber-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogListing;