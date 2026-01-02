// src/components/CommentSection.jsx
import React from 'react';
import formatDate from '../utils/formatDate';

const CommentSection = ({ postComments, userComments }) => {
  const allComments = [...postComments, ...userComments];

  if (allComments.length === 0) {
    return (
      <div className="text-center py-12 bg-amber-50 rounded-2xl">
        <div className="text-5xl mb-4">💬</div>
        <h4 className="text-xl font-serif text-amber-900 mb-2">No Comments Yet</h4>
        <p className="text-gray-600">Be the first to share your thoughts!</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {allComments.map((comment) => (
        <div 
          key={comment.id} 
          className="bg-white p-6 rounded-xl shadow-sm border border-amber-100 hover:border-amber-200 transition-colors"
        >
          <div className="flex items-start gap-4">
            <img 
              src={comment.avatar} 
              alt={comment.name}
              className="w-12 h-12 rounded-full border-2 border-amber-100"
            />
            <div className="flex-1">
              <div className="flex flex-wrap items-center justify-between mb-3">
                <div>
                  <h5 className="font-bold text-gray-800">{comment.name}</h5>
                  <span className="text-sm text-gray-500">{formatDate(comment.date)}</span>
                </div>
                <button className="text-amber-600 hover:text-amber-800 text-sm font-medium">
                  Reply
                </button>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {comment.content}
              </p>
              
              {/* Comment Reactions */}
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-amber-50">
                <button className="flex items-center gap-2 text-gray-500 hover:text-amber-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                  <span>Helpful</span>
                </button>
                <button className="flex items-center gap-2 text-gray-500 hover:text-amber-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>Reply</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentSection;