// src/hooks/useBlogPosts.js
import { useState, useEffect } from 'react';
import { blogPosts } from '../data/blogPosts';

const useBlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate API call
    const fetchPosts = async () => {
      try {
        setLoading(true);
        // In a real app, you would fetch from an API
        await new Promise(resolve => setTimeout(resolve, 300)); // Simulate delay
        setPosts(blogPosts);
      } catch (err) {
        setError('Failed to load blog posts');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const getPostBySlug = (slug) => {
    return posts.find(post => post.slug === slug);
  };

  const getPostsByCategory = (category) => {
    if (category === 'all') return posts;
    return posts.filter(post => post.category === category);
  };

  const getRelatedPosts = (currentPostId, limit = 3) => {
    const currentPost = posts.find(post => post.id === currentPostId);
    if (!currentPost) return [];
    
    return posts
      .filter(post => 
        post.id !== currentPostId && 
        post.category === currentPost.category
      )
      .slice(0, limit);
  };

  return {
    posts,
    loading,
    error,
    getPostBySlug,
    getPostsByCategory,
    getRelatedPosts
  };
};

export default useBlogPosts;