// src/components/CommentForm.jsx
import React, { useState } from 'react';

const CommentForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      id: Date.now(),
      name,
      avatar: `https://ui-avatars.com/api/?name=${name}&background=random`,
      date: new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      content
    };
    onSubmit(newComment);
    setName('');
    setEmail('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-12 p-6 bg-white rounded-xl shadow-sm">
      <h4 className="text-xl font-serif font-bold text-amber-900 mb-6">Leave a Comment</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="px-4 py-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent"
          required
        />
      </div>
      <textarea
        placeholder="Share your thoughts..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows="4"
        className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent mb-6"
        required
      />
      <button
        type="submit"
        className="px-8 py-3 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors font-semibold"
      >
        Post Comment
      </button>
    </form>
  );
};

export default CommentForm;