// src/data/blogPosts.js
export const blogPosts = [
  {
    id: 1,
    slug: 'creating-a-cozy-living-room',
    title: 'Creating a Cozy Living Room: A Complete Guide',
    excerpt: 'Transform your living space into a warm and inviting sanctuary with these simple tips and tricks.',
    content: 'Full article content here...',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
    date: 'December 15, 2023',
    readTime: '5 min',
    category: 'home-decor',
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b786d4d1?w-100'
    },
    comments: [
      {
        id: 1,
        name: 'Emily Carter',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
        date: 'December 16, 2023',
        content: 'Loved these ideas! The section about lighting really changed how I approach my living room setup.'
      }
    ]
  },
  {
    id: 2,
    slug: 'kitchen-essentials-for-comfort',
    title: 'Kitchen Essentials for Maximum Comfort',
    excerpt: 'Discover the must-have items that will make your kitchen the coziest room in your home.',
    content: 'Full article content here...',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800',
    date: 'December 10, 2023',
    readTime: '4 min',
    category: 'kitchen',
    author: {
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w-100'
    },
    comments: []
  },
  {
    id: 3,
    slug: 'winter-home-rituals',
    title: 'Winter Home Rituals for Ultimate Coziness',
    excerpt: 'Embrace the colder months with these comforting rituals and home practices.',
    content: 'Full article content here...',
    image: 'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=800',
    date: 'December 5, 2023',
    readTime: '6 min',
    category: 'lifestyle',
    author: {
      name: 'Jessica Williams',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w-100'
    },
    comments: [
      {
        id: 1,
        name: 'Robert Kim',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
        date: 'December 6, 2023',
        content: 'The hot chocolate recipe is amazing! Perfect for chilly evenings.'
      }
    ]
  }
];