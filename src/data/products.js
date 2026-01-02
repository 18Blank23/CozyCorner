// src/data/products.js
export const favoriteProducts = [
  {
    id: 1,
    name: 'Wool Knit Throw Blanket',
    price: 89.99,
    originalPrice: 119.99,
    description: 'Ultra-soft, chunky knit blanket perfect for sofa snuggling and adding texture to any room',
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRI_fHAdo81Vvzb7zQKfxHTMBKmc8CoONIgpOjMji5T3web6rPLlZtq3dnWElCInkp2_EIYxeFFU0swvYtCxJo5LdoDlB4piMOyvlMz3vsI',
    category: 'home-decor',
    rating: 4.9,
    reviewCount: 234,
    isBestSeller: true,
    isNew: false,
    discount: 25,
    shipping: 'Free shipping',
    isEcoFriendly: true,
    isFavorite: true,
    colors: ['#78350f', '#92400e', '#f59e0b']
  },
  {
    id: 2,
    name: 'Ceramic Coffee Mug Set',
    price: 34.99,
    description: 'Handcrafted stoneware mugs with comfortable grip and unique glaze patterns',
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT3v7FwSRKlQIkDwZl2yCfYVnSBhDY7E00rzHMn5KyxlorGyMsfpgz3Y8tTT2om0ru9oz3nJTqV_2R1Nv9Qq6cSa-o-2ob7_KPARs1k_Tkukk1Ogtf_cZTbCQ',
    category: 'kitchen',
    rating: 4.7,
    reviewCount: 189,
    isBestSeller: true,
    isNew: true,
    shipping: 'Free shipping',
    isFavorite: true,
    colors: ['#fef3c7', '#78350f', '#374151']
  },
  {
    id: 3,
    name: 'Essential Oil Diffuser',
    price: 49.99,
    description: 'Smart ultrasonic diffuser with color-changing LED lights and timer function',
    image: 'https://www.instyle.com/thmb/YIMCes1sPgmDPz-9vKFudPuhhRQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ins-best-oil-diffusers-tout-19f38ddce8e348d7af524f5e61050586.jpg',
    category: 'home-decor',
    rating: 4.8,
    reviewCount: 312,
    isBestSeller: false,
    isNew: false,
    discount: 15,
    shipping: 'Free shipping',
    isEcoFriendly: true,
    isFavorite: false,
    colors: ['#fbbf24', '#ffffff', '#dc2626']
  },
  {
    id: 4,
    name: 'Memory Foam Slippers',
    price: 39.99,
    originalPrice: 49.99,
    description: 'Plush memory foam slippers with non-slip soles for ultimate indoor comfort',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80',
    category: 'bedding',
    rating: 4.9,
    reviewCount: 456,
    isBestSeller: true,
    isNew: false,
    discount: 20,
    shipping: 'Free shipping',
    isFavorite: true,
    colors: ['#f97316', '#0f172a', '#1e293b']
  },
  {
    id: 5,
    name: 'Bamboo Cutting Board Set',
    price: 59.99,
    description: 'Sustainable bamboo cutting boards in three sizes with juice grooves',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    category: 'kitchen',
    rating: 4.6,
    reviewCount: 178,
    isBestSeller: false,
    isNew: true,
    shipping: 'Free shipping',
    isEcoFriendly: true,
    isFavorite: false,
    colors: ['#166534', '#14532d', '#0a5c36']
  },
  {
    id: 6,
    name: 'Woven Rattan Basket Set',
    price: 74.99,
    description: 'Handwoven natural rattan baskets for stylish storage and organization',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
    category: 'home-decor',
    rating: 4.8,
    reviewCount: 267,
    isBestSeller: true,
    isNew: false,
    shipping: 'Free shipping',
    isEcoFriendly: true,
    isFavorite: true,
    colors: ['#92400e', '#78350f', '#451a03']
  },
  {
    id: 7,
    name: 'Silk Pillowcase Set',
    price: 69.99,
    originalPrice: 89.99,
    description: 'Premium mulberry silk pillowcases for hair and skin care during sleep',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&q=80',
    category: 'bedding',
    rating: 4.9,
    reviewCount: 423,
    isBestSeller: true,
    isNew: false,
    discount: 22,
    shipping: 'Free shipping',
    isFavorite: true,
    colors: ['#f0f9ff', '#fefce8', '#fef2f2']
  },
  {
    id: 8,
    name: 'Smart Table Lamp',
    price: 79.99,
    description: 'Wireless charging table lamp with adjustable color temperature and dimmer',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80',
    category: 'lighting',
    rating: 4.7,
    reviewCount: 198,
    isBestSeller: false,
    isNew: true,
    shipping: 'Free shipping',
    isEcoFriendly: true,
    isFavorite: false,
    colors: ['#1e293b', '#f8fafc', '#0f172a']
  }
];

// Alternative images for variety (if any images fail to load)
export const productImageFallbacks = {
  1: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
  2: 'https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=800&q=80',
  3: 'https://images.unsplash.com/photo-1581579431539-9d2c16d07917?w=800&q=80',
  4: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
  5: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
  6: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
  7: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&q=80',
  8: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80'
};

const alternativeImages = {
  // Ceramic Mug Set
  mug: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  // Essential Oil Diffuser
  diffuser: 'https://images.unsplash.com/photo-1581579431539-9d2c16d07917?w=800&q=80',
  // Memory Foam Slippers
  slippers: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80',
  // Bamboo Cutting Board
  cuttingBoard: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
  // Rattan Basket
  basket: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
  // Silk Pillowcase
  pillowcase: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&q=80',
  // Smart Lamp
  lamp: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80'
};
// Export regular products too
export const products = favoriteProducts;