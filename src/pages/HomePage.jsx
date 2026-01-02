// src/pages/HomePage.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import CategoryGrid from '../components/CategoryGrid';
import BlogCard from '../components/BlogCard';
import NewsletterSignup from '../components/NewsletterSignup';
import { blogPosts } from '../data/blogPosts';
import { favoriteProducts } from '../data/products'; // Add this import
import { FaArrowRight, FaHeart, FaStar, FaLeaf, FaMugHot, FaHome, FaCouch } from 'react-icons/fa';
import { GiFlowerPot, GiKnifeFork } from 'react-icons/gi';
import { plantProducts } from '../data/plants';
const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const featuredPosts = blogPosts.slice(0, 3);

  useEffect(() => {
    // Animation trigger
    setTimeout(() => setIsLoaded(true), 300);
  }, []);

  return (
    <div className={`min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-white transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navigation />
      
      {/* Hero Section with Parallax Effect */}
      <section className="relative px-4 py-20 md:py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-amber-200 to-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-amber-300 to-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="relative container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className={`space-y-8 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm">
                <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-amber-700">Welcome to your happy place</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-900 via-amber-700 to-orange-600">
                  Find Your
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-amber-400 mt-2">
                  Cozy Corner
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-amber-800/90 leading-relaxed max-w-2xl">
                Where comfort meets style. Discover handpicked home decor, 
                inspiring ideas, and everything you need to create spaces 
                that feel like a warm hug.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Link 
                  to="/blog" 
                  className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-2xl hover:from-amber-600 hover:to-orange-600 transition-all duration-500 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl font-semibold text-lg flex items-center gap-3 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Explore Stories
                    <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Link>
                
                 <Link 
    to="/favorites" 
    className="group relative px-8 py-4 border-2 border-pink-500 text-pink-600 rounded-2xl hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 transition-all duration-500 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl font-semibold text-lg flex items-center gap-3 overflow-hidden"
  >
    <span className="relative z-10 flex items-center gap-3">
      <FaHeart className="group-hover:animate-pulse" />
      Shop Favorites
      <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
    </span>
    <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-rose-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
  </Link>
</div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl">
                  <div className="text-3xl font-bold text-amber-700">500+</div>
                  <div className="text-sm text-amber-600">Happy Homes</div>
                </div>
                <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl">
                  <div className="text-3xl font-bold text-amber-700">1.2k</div>
                  <div className="text-sm text-amber-600">Blog Readers</div>
                </div>
                <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl">
                  <div className="text-3xl font-bold text-amber-700">4.9</div>
                  <div className="flex justify-center items-center gap-1 text-amber-600">
                    <FaStar className="text-amber-400" />
                    <FaStar className="text-amber-400" />
                    <FaStar className="text-amber-400" />
                    <FaStar className="text-amber-400" />
                    <FaStar className="text-amber-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className={`relative transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="relative">
                {/* Main Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    alt="Cozy living room"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl">
                  <div className="flex items-center gap-3">
                    <FaCouch className="text-2xl text-amber-500" />
                    <div>
                      <div className="font-bold text-amber-900">Comfy Chair</div>
                      <div className="text-sm text-amber-600">Featured</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-amber-400 to-orange-400 p-4 rounded-2xl shadow-xl text-white">
                  <div className="flex items-center gap-3">
                    <GiFlowerPot className="text-2xl" />
                    <div>
                      <div className="font-bold">Plants Collection</div>
                      <div className="text-sm opacity-90">New Arrival</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-300 to-transparent opacity-50"></div>
        
        <div className="container mx-auto max-w-6xl">
          <div className={`text-center mb-16 transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full mb-6">
              <FaLeaf className="text-amber-600" />
              <span className="text-sm font-semibold text-amber-700">Explore Collections</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-orange-600">
                Curated Categories
              </span>
            </h2>
            <p className="text-xl text-amber-800/80 max-w-2xl mx-auto">
              Handpicked collections to transform every corner of your home
            </p>
          </div>
          
          <CategoryGrid />
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-20 px-4 bg-gradient-to-b from-white/50 to-amber-50/30 relative">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-amber-100/50 to-orange-100/50 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16">
            <div className={`mb-8 lg:mb-0 transform transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-800 to-orange-700">
                  Latest Stories
                </span>
              </h2>
              <p className="text-xl text-amber-800/80 max-w-xl">
                Inspiration, tips, and cozy secrets from our lifestyle experts
              </p>
            </div>
            
            <Link 
              to="/blog" 
              className="group flex items-center gap-3 text-amber-600 hover:text-amber-800 font-semibold text-lg"
            >
              <span className="relative">
                View All Posts
                <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-amber-400 transition-all duration-300"></span>
              </span>
              <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <div 
                key={post.id} 
                className={`transform transition-all duration-1000 delay-${(index + 8) * 100} ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              >
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-4xl">
          <div className={`text-center mb-16 transform transition-all duration-1000 delay-900 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full mb-6">
              <FaHeart className="text-orange-500" />
              <span className="text-sm font-semibold text-orange-700">Community Love</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
                Loved by Thousands
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b786d4d1?w=100"
                  alt="Sarah"
                  className="w-16 h-16 rounded-full border-4 border-amber-100"
                />
                <div>
                  <div className="font-bold text-lg text-amber-900">Sarah M.</div>
                  <div className="text-amber-600">Home Decor Enthusiast</div>
                </div>
              </div>
              <p className="text-gray-700 italic text-lg mb-6">
                "Cozy Corner transformed my apartment into a sanctuary. The tips and products are exactly what I needed!"
              </p>
              <div className="flex text-amber-400">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 text-white">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
                  alt="Michael"
                  className="w-16 h-16 rounded-full border-4 border-white/30"
                />
                <div>
                  <div className="font-bold text-lg">Michael T.</div>
                  <div className="text-amber-100">Interior Designer</div>
                </div>
              </div>
              <p className="italic text-lg mb-6">
                "As a professional, I appreciate the quality and thoughtfulness behind every recommendation. My go-to resource!"
              </p>
              <div className="flex">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
            </div>
          </div>
        </div>
      </section>

         

{/* Featured Favorites Preview */}
<section className="py-20 px-4 bg-gradient-to-b from-white/30 to-amber-50/30">
  <div className="container mx-auto max-w-6xl">
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full mb-6">
        <FaHeart className="text-pink-500" />
        <span className="text-sm font-semibold text-pink-700">Community Loved</span>
      </div>
      <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-500">
          Shop Our Favorites
        </span>
      </h2>
      <p className="text-xl text-amber-800/80 max-w-2xl mx-auto">
        Discover products that have captured the hearts of our community
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      {favoriteProducts.slice(0, 3).map(product => (
        <div key={product.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
          <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            {product.isBestSeller && (
              <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full">
                BEST SELLER
              </div>
            )}
          </div>
          
          <h3 className="font-bold text-amber-900 mb-2">{product.name}</h3>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < product.rating ? 'fill-amber-400' : 'text-gray-300'} />
                ))}
              </div>
              <span className="text-sm text-gray-500">({product.reviewCount})</span>
            </div>
            <div className="text-lg font-bold text-amber-900">${product.price}</div>
          </div>
          
          <Link 
            to="/favorites"
            className="w-full py-3 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 rounded-xl hover:from-amber-200 hover:to-orange-200 transition-all font-medium text-center block"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
    
    <div className="text-center">
      <Link 
        to="/favorites"
        className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-2xl hover:from-pink-600 hover:to-rose-600 transition-all duration-500 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl font-semibold text-lg"
      >
        <FaHeart className="animate-pulse-slow" />
        View All Favorites
        <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
      </Link>
    </div>
  </div>
</section>


<section className="py-20 px-4 bg-gradient-to-b from-white/30 to-emerald-50/30">
  <div className="container mx-auto max-w-6xl">
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-100 to-green-100 rounded-full mb-6">
        <FaLeaf className="text-emerald-500" />
        <span className="text-sm font-semibold text-emerald-700">New Arrival</span>
      </div>
      <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-green-600">
          Plant Collection
        </span>
      </h2>
      <p className="text-xl text-emerald-800/80 max-w-2xl mx-auto">
        Bring life to your space with our carefully curated indoor plants
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      {plantProducts.slice(0, 3).map(plant => (
        <div key={plant.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
          <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
            <img 
              src={plant.image} 
              alt={plant.name}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            {plant.isNew && (
              <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-emerald-500 to-green-500 text-white text-xs font-bold rounded-full">
                NEW
              </div>
            )}
          </div>
          
          <h3 className="font-bold text-emerald-900 mb-2">{plant.name}</h3>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className={`px-2 py-1 rounded text-xs font-medium ${
                plant.careLevel === 'easy' ? 'bg-emerald-100 text-emerald-800' :
                plant.careLevel === 'medium' ? 'bg-amber-100 text-amber-800' :
                'bg-rose-100 text-rose-800'
              }`}>
                {plant.careLevel} Care
              </span>
              {plant.isAirPurifying && (
                <span className="text-xs text-blue-600">🌬️ Air Purifying</span>
              )}
            </div>
            <div className="text-lg font-bold text-emerald-900">${plant.price}</div>
          </div>
          
          <Link 
            to="/plants"
            className="w-full py-3 bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 rounded-xl hover:from-emerald-200 hover:to-green-200 transition-all font-medium text-center block"
          >
            View Plant
          </Link>
        </div>
      ))}
    </div>
    
    <div className="text-center">
      <Link 
        to="/plants"
        className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-2xl hover:from-emerald-600 hover:to-green-600 transition-all duration-500 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl font-semibold text-lg"
      >
        <FaLeaf className="animate-pulse-slow" />
        Explore Plant Collection
        <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
      </Link>
    </div>
  </div>
</section>
      {/* Newsletter Section */}
      <NewsletterSignup />
      
      {/* Footer */}
      <footer className="bg-gradient-to-b from-amber-900 to-amber-950 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">CozyCorner</h3>
              <p className="text-amber-200">Creating comfortable spaces since 2023</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-amber-200">
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/shop" className="hover:text-white transition-colors">Shop</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Categories</h4>
              <ul className="space-y-2 text-amber-200">
                <li><Link to="/category/home-decor" className="hover:text-white transition-colors">Home Decor</Link></li>
                <li><Link to="/category/kitchen" className="hover:text-white transition-colors">Kitchen</Link></li>
                <li><Link to="/category/lifestyle" className="hover:text-white transition-colors">Lifestyle</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-amber-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors">FB</a>
                <a href="#" className="w-10 h-10 bg-amber-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors">IG</a>
                <a href="#" className="w-10 h-10 bg-amber-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors">PI</a>
              </div>
            </div>
          </div>
          <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-300">
            <p>© 2023 CozyCorner. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;