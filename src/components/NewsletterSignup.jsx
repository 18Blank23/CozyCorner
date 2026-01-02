// src/components/NewsletterSignup.jsx
import React, { useState } from 'react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this to your backend
    console.log('Subscribing email:', email);
    setSubscribed(true);
    setEmail('');
    
    // Reset after 5 seconds
    setTimeout(() => {
      setSubscribed(false);
    }, 5000);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-amber-500 to-orange-500">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Side - Illustration */}
            <div className="relative">
              <div className="w-full h-64 md:h-full bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📬</div>
                  <div className="text-amber-900 font-serif text-xl font-bold">
                    Cozy Updates Await
                  </div>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-amber-200 rounded-full opacity-50 animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-200 rounded-full opacity-50 animate-float" style={{animationDelay: '1s'}}></div>
            </div>
            
            {/* Right Side - Form */}
            <div>
              {subscribed ? (
                <div className="text-center">
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="text-3xl font-serif font-bold text-amber-900 mb-4">
                    Welcome to Our Cozy Community!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for subscribing. Check your inbox for a special welcome gift.
                  </p>
                  <button
                    onClick={() => setSubscribed(false)}
                    className="px-6 py-3 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors"
                  >
                    Subscribe Another Email
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-4xl font-serif font-bold text-amber-900 mb-4">
                    Stay Cozy with Our Newsletter
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Join 10,000+ subscribers who receive weekly tips, exclusive offers, 
                    and cozy inspiration straight to their inbox.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email address"
                        className="w-full px-6 py-4 border-2 border-amber-200 rounded-full focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-200 transition-all"
                        required
                      />
                      <div className="absolute right-2 top-2">
                        <span className="text-amber-400 text-sm px-2 py-1 bg-amber-50 rounded-full">
                          ✨
                        </span>
                      </div>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl font-semibold text-lg"
                    >
                      Subscribe for Free
                    </button>
                  </form>
                  
                  <div className="mt-6 p-4 bg-amber-50 rounded-xl">
                    <div className="flex items-start gap-3">
                      <div className="text-amber-600 mt-1">✓</div>
                      <div>
                        <p className="text-sm text-gray-600">
                          By subscribing, you'll get:
                        </p>
                        <ul className="text-sm text-gray-600 mt-2 space-y-1">
                          <li className="flex items-center gap-2">
                            <span className="text-amber-500">•</span>
                            Weekly decorating tips
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-amber-500">•</span>
                            Exclusive member discounts
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-amber-500">•</span>
                            Early access to new products
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;