// src/pages/BlogPost.jsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import CommentSection from '../components/CommentSection';
import CommentForm from '../components/CommentForm';
import ProductLink from '../components/ProductLink';
import { blogPosts } from '../data/blogPosts';
import { products } from '../data/products';

const BlogPost = () => {
  const { slug } = useParams();
  const [comments, setComments] = useState([]);
  
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <>
        <Navigation />
        <div className="container mx-auto max-w-4xl px-4 py-16 text-center">
          <h1 className="text-4xl font-serif text-amber-900 mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-amber-600 hover:text-amber-800">
            ← Back to Blog
          </Link>
        </div>
      </>
    );
  }

  const handleAddComment = (comment) => {
    setComments([...comments, comment]);
  };

  // Get related products
  const relatedProducts = products.filter(p => p.category === post.category);

  return (
    <>
      <Navigation />
      
      <div className="container mx-auto max-w-4xl px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to="/blog" className="text-amber-600 hover:text-amber-800">
            ← Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${post.category === 'home-decor' ? 'bg-amber-100 text-amber-800' : 
              post.category === 'kitchen' ? 'bg-orange-100 text-orange-800' : 
              'bg-green-100 text-green-800'}`}>
              {post.category}
            </span>
            <span className="text-gray-600">{post.readTime} read</span>
          </div>
          
          <h1 className="text-5xl font-serif font-bold text-amber-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4 text-gray-700">
            <img 
              src={post.author.avatar} 
              alt={post.author.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <div className="font-semibold">{post.author.name}</div>
              <div className="text-sm">{post.date}</div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-12">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none mb-16">
          <div className="text-xl text-gray-700 leading-relaxed mb-8">
            {post.excerpt}
          </div>
          
          <h2 className="text-3xl font-serif text-amber-900 mb-6">Creating the Perfect Ambiance</h2>
          <p className="mb-6 text-gray-700">
            When it comes to creating a cozy home, it's all about the details. The soft glow of 
            <ProductLink product={relatedProducts[0]} /> can transform any room into a warm sanctuary.
            Pair it with plush throws and comfortable cushions, and you've got the perfect recipe for relaxation.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8 rounded-r-lg">
            <p className="text-amber-800 italic font-serif text-lg">
              "A cozy home isn't about having the most expensive things, but about creating 
              spaces that make you feel truly at peace."
            </p>
          </div>

          <h2 className="text-3xl font-serif text-amber-900 mb-6">Product Recommendations</h2>
          <p className="mb-6 text-gray-700">
            Here are some of our favorite products that can help you achieve that cozy vibe:
          </p>
          <ul className="space-y-4 mb-8">
            {relatedProducts.map(product => (
              <li key={product.id}>
                <ProductLink product={product} />
                <span className="text-gray-600 ml-2">- {product.description}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-3xl font-serif text-amber-900 mb-6">Final Thoughts</h2>
          <p className="text-gray-700">
            Remember, creating a cozy space is a personal journey. Start with what makes you feel 
            most comfortable and build from there. Don't be afraid to mix textures, play with lighting, 
            and most importantly, create a space that reflects your personality.
          </p>
        </article>

        {/* Related Products Section */}
        <section className="mb-16 p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl">
          <h3 className="text-2xl font-serif font-bold text-amber-900 mb-6">
            Shop Products Mentioned
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedProducts.map(product => (
              <div key={product.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="font-semibold text-amber-900 mb-2">{product.name}</h4>
                <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-amber-700">${product.price}</span>
                  <button className="px-4 py-2 bg-amber-600 text-white rounded-full text-sm hover:bg-amber-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comments Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-serif font-bold text-amber-900 mb-8">
            Comments ({post.comments.length + comments.length})
          </h3>
          
          <CommentForm onSubmit={handleAddComment} />
          
          <CommentSection 
            postComments={post.comments} 
            userComments={comments}
          />
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-serif font-bold mb-4">
            Enjoyed this article?
          </h3>
          <p className="mb-6 text-amber-100">
            Subscribe to never miss a post and get exclusive decorating tips
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-6 py-3 bg-white text-amber-600 rounded-full font-semibold hover:bg-amber-50 transition-colors whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;