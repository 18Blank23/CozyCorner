// src/components/Navigation.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { categories } from '../data/categories';
import { 
  FaSearch, 
  FaShoppingCart, 
  FaUser, 
  FaBars, 
  FaTimes, 
  FaHome, 
  FaBlog, 
  FaHeart,
  FaLeaf  // Add this import
} from 'react-icons/fa';
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg py-3' 
        : 'bg-white/80 backdrop-blur-sm py-4'
    }`}>
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500">
                <FaHome className="text-white text-xl" />
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-amber-300 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">
                CozyCorner
              </h1>
              <div className="text-xs text-amber-600 font-medium">Find Your Happy Place</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link 
              to="/" 
              className={`flex items-center gap-2 font-medium transition-all duration-300 ${
                location.pathname === '/' 
                  ? 'text-amber-600' 
                  : 'text-amber-800 hover:text-amber-600'
              }`}
            >
              <FaHome />
              Home
            </Link>
            <Link 
              to="/blog" 
              className={`flex items-center gap-2 font-medium transition-all duration-300 ${
                location.pathname.includes('/blog') 
                  ? 'text-amber-600' 
                  : 'text-amber-800 hover:text-amber-600'
              }`}
            >
              <FaBlog />
              Blog
            </Link>
            <Link 
  to="/favorites" 
  className="flex items-center gap-2 font-medium transition-all duration-300 text-amber-800 hover:text-pink-600"
>
  <FaHeart />
  Favorites
</Link>

<Link 
  to="/plants" 
  className="flex items-center gap-2 font-medium transition-all duration-300 text-amber-800 hover:text-emerald-600"
>
  <FaLeaf />
  Plants
</Link>


<Link to="/plants" className="block py-3 px-4 bg-emerald-50 rounded-xl text-emerald-800 hover:bg-emerald-100 transition-colors">
  Plants Collection
</Link>
            
            {/* Categories Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-2 font-medium text-amber-800 hover:text-amber-600 transition-colors">
                Categories
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute hidden group-hover:block top-full left-1/2 transform -translate-x-1/2 mt-4 bg-white shadow-2xl rounded-2xl p-6 min-w-[300px] border border-amber-100 animate-fadeIn">
                <div className="grid grid-cols-2 gap-4">
                  {categories.map(category => (
                    <Link 
                      key={category.id}
                      to={`/category/${category.slug}`}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-amber-50 transition-all group/item"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform">
                        <span className="text-lg">{category.icon}</span>
                      </div>
                      <div>
                        <div className="font-semibold text-amber-900">{category.name}</div>
                        <div className="text-xs text-amber-600">Explore →</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Icons */}
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-amber-100 rounded-full transition-colors">
                <FaSearch className="text-amber-600" />
              </button>
              <button className="p-2 hover:bg-amber-100 rounded-full transition-colors relative">
                <FaShoppingCart className="text-amber-600" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </button>
              <button className="px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl font-semibold">
                Shop Now
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-amber-800 hover:text-amber-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="pb-4 space-y-4">
            <Link to="/" className="block py-3 px-4 bg-amber-50 rounded-xl text-amber-800 hover:bg-amber-100 transition-colors">
              Home
            </Link>
            <Link to="/blog" className="block py-3 px-4 bg-amber-50 rounded-xl text-amber-800 hover:bg-amber-100 transition-colors">
              Blog
            </Link>
            <div className="py-3 px-4 bg-amber-50 rounded-xl">
              <div className="font-semibold text-amber-800 mb-3">Categories</div>
              <div className="grid grid-cols-2 gap-2">
                {categories.map(category => (
                  <Link 
                    key={category.id}
                    to={`/category/${category.slug}`}
                    className="flex items-center gap-2 p-2 bg-white rounded-lg hover:bg-amber-100 transition-colors"
                  >
                    <span>{category.icon}</span>
                    <span className="text-sm">{category.name}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <button className="flex-1 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-semibold">
                Shop Products
              </button>
              <button className="p-3 bg-amber-100 rounded-xl">
                <FaUser className="text-amber-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;