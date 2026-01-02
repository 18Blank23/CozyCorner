// src/App.jsx - Update with new route
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogListing from './pages/BlogListing';
import BlogPost from './pages/BlogPost';
import FavoritesPage from './pages/FavoritesPage';
import PlantCollection from './pages/PlantCollection';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 font-sans">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogListing />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/plants" element={<PlantCollection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;