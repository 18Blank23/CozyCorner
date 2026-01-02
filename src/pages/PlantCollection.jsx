// src/pages/PlantCollection.jsx
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import { plantProducts } from '../data/plants';
import { FaLeaf, FaSeedling, FaTint, FaSun, FaTree, FaFilter, FaSortAmountDown, FaTag, FaShippingFast, FaRecycle } from 'react-icons/fa';

const PlantCollection = () => {
  const [sortBy, setSortBy] = useState('new');
  const [plantType, setPlantType] = useState('all');
  const [careLevel, setCareLevel] = useState('all');
  
  const plantTypes = [
    { id: 'all', name: 'All Plants', icon: '🌿' },
    { id: 'succulent', name: 'Succulents', icon: '🌵' },
    { id: 'tropical', name: 'Tropical', icon: '🌴' },
    { id: 'air-plants', name: 'Air Plants', icon: '💨' },
    { id: 'flowering', name: 'Flowering', icon: '🌸' },
    { id: 'low-light', name: 'Low Light', icon: '🌱' }
  ];

  const careLevels = [
    { id: 'all', name: 'Any Care Level' },
    { id: 'easy', name: 'Easy Care', color: 'emerald' },
    { id: 'medium', name: 'Moderate Care', color: 'amber' },
    { id: 'hard', name: 'Advanced Care', color: 'rose' }
  ];

  const sortOptions = [
    { id: 'new', name: 'New Arrivals' },
    { id: 'popular', name: 'Most Popular' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'name', name: 'Alphabetical' }
  ];

  const filteredPlants = plantProducts.filter(plant => {
    const typeMatch = plantType === 'all' || plant.type === plantType;
    const careMatch = careLevel === 'all' || plant.careLevel === careLevel;
    return typeMatch && careMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-green-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative px-4 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-emerald-200 to-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-lime-200 to-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="relative container mx-auto max-w-6xl">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-100 to-green-100 rounded-full mb-8">
              <FaLeaf className="text-emerald-500" />
              <span className="font-semibold text-emerald-700">New Arrival Collection</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-green-600 to-lime-500">
                Plant Paradise
              </span>
            </h1>
            
            <p className="text-xl text-emerald-800/90 mb-8 max-w-3xl mx-auto">
              Bring nature indoors with our carefully curated plant collection. 
              Each plant is selected for beauty, air-purifying qualities, and ease of care.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-emerald-700">
              <div className="flex items-center gap-2">
                <FaSeedling className="text-emerald-500" />
                <span>Fresh from Nursery</span>
              </div>
              <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
              <div className="flex items-center gap-2">
                <FaRecycle className="text-emerald-500" />
                <span>Sustainably Grown</span>
              </div>
              <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
              <div className="flex items-center gap-2">
                <FaShippingFast className="text-emerald-500" />
                <span>Free Plant Care Guide</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="px-4 mb-12">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl p-8 text-white shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-emerald-100">Plant Varieties</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-emerald-100">Survival Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-emerald-100">Plant Care Support</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">4.9★</div>
                <div className="text-emerald-100">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="px-4 mb-12">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
              <div>
                <h2 className="text-2xl font-bold text-emerald-900 mb-2 flex items-center gap-3">
                  <FaFilter className="text-emerald-500" />
                  Find Your Perfect Plant
                </h2>
                <p className="text-emerald-600">Filter by type, care level, and more</p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="relative group">
                  <button className="flex items-center gap-3 px-4 py-3 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-colors">
                    <FaSortAmountDown className="text-emerald-500" />
                    <span className="font-medium text-emerald-800">
                      {sortOptions.find(s => s.id === sortBy)?.name}
                    </span>
                  </button>
                  <div className="absolute hidden group-hover:block top-full mt-2 bg-white shadow-2xl rounded-xl p-2 min-w-[200px] z-10">
                    {sortOptions.map(option => (
                      <button
                        key={option.id}
                        onClick={() => setSortBy(option.id)}
                        className={`flex items-center justify-between w-full px-4 py-3 rounded-lg transition-colors ${
                          sortBy === option.id 
                            ? 'bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700' 
                            : 'hover:bg-emerald-50 text-emerald-800'
                        }`}
                      >
                        <span>{option.name}</span>
                        {sortBy === option.id && (
                          <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Plant Type Filters */}
            <div className="mb-6">
              <h3 className="font-semibold text-emerald-800 mb-4 flex items-center gap-2">
                <FaTree className="text-emerald-500" />
                Plant Type
              </h3>
              <div className="flex flex-wrap gap-3">
                {plantTypes.map(type => (
                  <button
                    key={type.id}
                    onClick={() => setPlantType(type.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      plantType === type.id 
                        ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-lg' 
                        : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
                    }`}
                  >
                    <span className="text-xl">{type.icon}</span>
                    <span className="font-medium">{type.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Care Level Filters */}
            <div>
              <h3 className="font-semibold text-emerald-800 mb-4 flex items-center gap-2">
                <FaSun className="text-emerald-500" />
                Care Level
              </h3>
              <div className="flex flex-wrap gap-3">
                {careLevels.map(level => (
                  <button
                    key={level.id}
                    onClick={() => setCareLevel(level.id)}
                    className={`px-4 py-2 rounded-full transition-all ${
                      careLevel === level.id 
                        ? level.id === 'easy' ? 'bg-emerald-500 text-white' :
                          level.id === 'medium' ? 'bg-amber-500 text-white' :
                          'bg-rose-500 text-white'
                        : level.id === 'easy' ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200' :
                          level.id === 'medium' ? 'bg-amber-100 text-amber-800 hover:bg-amber-200' :
                          'bg-rose-100 text-rose-800 hover:bg-rose-200'
                    }`}
                  >
                    {level.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Filters */}
            <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-emerald-100">
              {(plantType !== 'all' || careLevel !== 'all') && (
                <div className="text-sm text-emerald-600">Active filters:</div>
              )}
              {plantType !== 'all' && (
                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-100 to-green-100 rounded-full">
                  <span>{plantTypes.find(t => t.id === plantType)?.icon}</span>
                  <span className="font-medium text-emerald-700">
                    {plantTypes.find(t => t.id === plantType)?.name}
                  </span>
                  <button 
                    onClick={() => setPlantType('all')}
                    className="ml-2 text-emerald-500 hover:text-emerald-700"
                  >
                    ×
                  </button>
                </div>
              )}
              {careLevel !== 'all' && (
                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-100 to-green-100 rounded-full">
                  <span>💚</span>
                  <span className="font-medium text-emerald-700">
                    {careLevels.find(c => c.id === careLevel)?.name}
                  </span>
                  <button 
                    onClick={() => setCareLevel('all')}
                    className="ml-2 text-emerald-500 hover:text-emerald-700"
                  >
                    ×
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Plants Grid */}
      <section className="px-4 pb-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredPlants.map(plant => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
          
          {/* Empty State */}
          {filteredPlants.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto bg-gradient-to-r from-emerald-100 to-green-100 rounded-full flex items-center justify-center mb-6">
                <FaLeaf className="text-3xl text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-900 mb-3">No plants match your filters</h3>
              <p className="text-emerald-600 mb-8">Try adjusting your filters to see more plants</p>
              <button 
                onClick={() => {
                  setPlantType('all');
                  setCareLevel('all');
                }}
                className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-full hover:from-emerald-600 hover:to-green-600 transition-all font-semibold"
              >
                Clear All Filters
              </button>
            </div>
          )}
          
          {/* Care Tips Banner */}
          <div className="mt-16 bg-gradient-to-r from-emerald-400 to-green-400 rounded-3xl p-8 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div>
                  <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/20 rounded-full mb-6">
                    <FaTint className="animate-pulse" />
                    <span className="font-semibold">Plant Care Tips</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-3">Get Your Free Plant Care Guide!</h3>
                  <p className="text-emerald-100">Download our comprehensive guide to plant care and maintenance</p>
                </div>
                <button className="px-8 py-4 bg-white text-emerald-600 rounded-full hover:bg-emerald-50 transition-colors font-bold text-lg shadow-xl">
                  Download Guide
                </button>
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-emerald-900 mb-6 text-center">
              Plant Collection FAQs
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-emerald-50 rounded-xl">
                <h4 className="font-bold text-emerald-800 mb-2">Are your plants pet-friendly?</h4>
                <p className="text-emerald-600">Most of our plants are pet-friendly! Look for the 🐾 icon on plant cards.</p>
              </div>
              <div className="p-6 bg-emerald-50 rounded-xl">
                <h4 className="font-bold text-emerald-800 mb-2">How are plants shipped?</h4>
                <p className="text-emerald-600">Plants are carefully packaged and shipped in special plant-safe boxes.</p>
              </div>
              <div className="p-6 bg-emerald-50 rounded-xl">
                <h4 className="font-bold text-emerald-800 mb-2">What if my plant arrives damaged?</h4>
                <p className="text-emerald-600">We offer a 30-day plant health guarantee. Contact us for replacements.</p>
              </div>
              <div className="p-6 bg-emerald-50 rounded-xl">
                <h4 className="font-bold text-emerald-800 mb-2">Do you offer plant care advice?</h4>
                <p className="text-emerald-600">Yes! Free plant care guides and 24/7 support are included.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gradient-to-b from-emerald-900 to-green-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-800 to-green-800 rounded-full mb-8">
            <FaLeaf />
            <span className="font-semibold">Happy Planting!</span>
          </div>
          <p className="text-emerald-200 mb-6 max-w-2xl mx-auto">
            Every plant is carefully selected and nurtured before finding its new home with you.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <button className="text-emerald-300 hover:text-white transition-colors">Shipping Info</button>
            <button className="text-emerald-300 hover:text-white transition-colors">Plant Care</button>
            <button className="text-emerald-300 hover:text-white transition-colors">Contact Support</button>
            <button className="text-emerald-300 hover:text-white transition-colors">Sustainability</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Plant Card Component
const PlantCard = ({ plant }) => {
  const [isFavorite, setIsFavorite] = useState(plant.isFavorite);
  const [isHovered, setIsHovered] = useState(false);

  const getCareColor = (level) => {
    switch(level) {
      case 'easy': return 'emerald';
      case 'medium': return 'amber';
      case 'hard': return 'rose';
      default: return 'emerald';
    }
  };

  return (
    <div 
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {plant.isNew && (
          <span className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-green-500 text-white text-xs font-bold rounded-full">
            NEW
          </span>
        )}
        {plant.isAirPurifying && (
          <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold rounded-full">
            🌬️ Air Purifying
          </span>
        )}
        {plant.isPetFriendly && (
          <span className="px-3 py-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-bold rounded-full">
            🐾 Pet Friendly
          </span>
        )}
      </div>

      {/* Favorite Button */}
      <button
        onClick={() => setIsFavorite(!isFavorite)}
        className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300"
      >
        <FaLeaf className={`text-lg ${isFavorite ? 'text-emerald-500 fill-emerald-500' : 'text-gray-400 group-hover:text-emerald-400'}`} />
      </button>

      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={plant.image}
          alt={plant.name}
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        
        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
        
        {/* Quick Actions */}
        <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-full font-semibold text-sm hover:from-emerald-600 hover:to-green-600 transition-all shadow-lg">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Plant Info */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-medium rounded-full">
            {plant.type}
          </span>
          <div className="flex items-center gap-2">
            {plant.light === 'low' && <FaSun className="text-gray-400" title="Low Light" />}
            {plant.light === 'medium' && <FaSun className="text-amber-400" title="Medium Light" />}
            {plant.light === 'bright' && <FaSun className="text-yellow-400 fill-yellow-400" title="Bright Light" />}
          </div>
        </div>

        <h3 className="font-bold text-emerald-900 mb-2 group-hover:text-emerald-700 transition-colors">
          {plant.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {plant.description}
        </p>

        {/* Care Info */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className={`px-3 py-1 rounded-full text-xs font-medium bg-${getCareColor(plant.careLevel)}-100 text-${getCareColor(plant.careLevel)}-800`}>
              {plant.careLevel} Care
            </span>
            <span className="text-xs text-gray-500 flex items-center gap-1">
              <FaTint className="text-blue-400" /> {plant.watering}
            </span>
          </div>
          <span className="text-xs text-gray-500">{plant.size}</span>
        </div>

        {/* Price and Actions */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-emerald-900">${plant.price}</span>
              {plant.originalPrice && (
                <span className="text-gray-400 line-through text-sm">${plant.originalPrice}</span>
              )}
            </div>
            <div className="text-xs text-emerald-600">Includes pot & soil</div>
          </div>
          
          <button className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-full hover:from-emerald-600 hover:to-green-600 transition-all flex items-center gap-2 text-sm font-semibold shadow-md hover:shadow-lg">
            <FaLeaf /> Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantCollection;