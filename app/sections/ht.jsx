'use client'
import React from 'react';

const DecisionVisual = () => {
  return (
    <div className="relative bg-gray-900 py-20 px-4 overflow-hidden">
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-blue-900/20"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 15 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16">
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            DON'T LET YOUR DREAMS FAIL
          </span>
        </h2>

        {/* Comparison section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-20">
          {/* Traditional path */}
          <div className="bg-gray-800/50 border border-red-900/50 rounded-xl p-6 md:p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-transparent pointer-events-none"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-red-400">Traditional Route</h3>
                <div className="text-3xl">💸</div>
              </div>
              <div className="text-4xl font-bold text-white mb-4">₹10,00,000+</div>
              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✗</span>
                  <span>Trial and error with 100+ attempts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✗</span>
                  <span>Wasted time and resources</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✗</span>
                  <span>High risk of failure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✗</span>
                  <span>No expert guidance</span>
                </li>
              </ul>
              <div className="text-red-300 font-medium">90% of startups fail this way</div>
            </div>
          </div>

          {/* School of Thinkers path */}
          <div className="bg-gray-800/50 border border-blue-900/50 rounded-xl p-6 md:p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-transparent pointer-events-none"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-blue-400">School of Thinkers</h3>
                <div className="text-3xl">🚀</div>
              </div>
              <div className="text-4xl font-bold text-white mb-4">Just ₹199</div>
              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <span>Proven success ecosystem</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <span>Curated resources for first-time success</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <span>Expert guidance at every step</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <span>99.9% success rate</span>
                </li>
              </ul>
              <div className="text-blue-300 font-medium">Join the 10% who succeed</div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            While most aspiring entrepreneurs struggle and many startups fail early on, 
            world innovators and successful leaders keep growing richer. Don't miss 
            your chance to join the winners.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1">
              Join Now for ₹199
            </button>
            <button className="px-8 py-4 border border-blue-500 text-blue-400 font-medium rounded-lg hover:bg-blue-900/30 transition-colors duration-300">
              Learn More
            </button>
          </div>

          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg blur opacity-75"></div>
            <div className="relative px-6 py-3 bg-gray-900 text-white text-sm font-semibold rounded-lg">
              Limited spots available - Join today!
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100vh) translateX(20px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default DecisionVisual;