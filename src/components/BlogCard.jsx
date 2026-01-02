// src/components/BlogCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import formatDate from '../utils/formatDate';

const BlogCard = ({ post }) => {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
      {/* Image Container */}
      <div className="relative overflow-hidden h-64">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
            post.category === 'home-decor' ? 'bg-amber-100 text-amber-800' :
            post.category === 'kitchen' ? 'bg-orange-100 text-orange-800' :
            'bg-green-100 text-green-800'
          }`}>
            {post.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-600">
            {formatDate(post.date)}
          </span>
          <span className="text-sm text-amber-600 font-medium">
            {post.readTime} read
          </span>
        </div>
        
        <h3 className="text-xl font-serif font-bold text-amber-900 mb-3 group-hover:text-amber-700 transition-colors line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        {/* Author Info */}
        <div className="flex items-center justify-between border-t border-amber-100 pt-4">
          <div className="flex items-center gap-3">
            <img 
              src={post.author.avatar} 
              alt={post.author.name}
              className="w-10 h-10 rounded-full border-2 border-amber-100"
            />
            <div>
              <p className="font-medium text-gray-800">{post.author.name}</p>
              <p className="text-sm text-gray-500">Author</p>
            </div>
          </div>
          
          <Link 
            to={`/blog/${post.slug}`}
            className="text-amber-600 hover:text-amber-800 font-semibold flex items-center gap-2 group/link"
          >
            Read More
            <span className="group-hover/link:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
        
        {/* Comments Count */}
        <div className="mt-4 pt-4 border-t border-amber-50">
          <div className="flex items-center gap-2 text-gray-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span>{post.comments.length} comments</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;