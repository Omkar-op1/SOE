"use client"

import React, { useEffect, useRef, useState } from 'react';
import { FiCheck, FiClock, FiBook, FiX, FiDollarSign, FiZap, FiTrendingUp } from 'react-icons/fi';

const PricingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-gray-950 overflow-hidden font-sans"
    >
      {/* Elegant background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 z-0"></div>
      
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-10 z-[1] pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}></div>

      {/* Main Content Container */}
      <div className="relative z-[3] max-w-7xl mx-auto px-6 py-24 md:py-32">
        
        {/* Header Section */}
        <div className={`text-center mb-20 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          <div className="inline-flex items-center justify-center px-4 py-2 mb-6 rounded-full bg-amber-500/10 border border-amber-500/20">
            <span className="text-sm font-medium text-amber-400">INVESTMENT COMPARISON</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-100">
            Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Learning Paths</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Compare our efficient, results-driven program with traditional education models
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto"></div>
        </div>

        {/* Visual Comparison */}
        <div className={`relative mb-24 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="relative max-w-5xl mx-auto bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-2xl">
            <img
              src="/images/PAy.jpg"
              alt="Investment comparison between traditional education and our program"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/30 to-transparent"></div>
          </div>
        </div>

        {/* Comparison Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-24">
          
          {/* Traditional Education Card */}
          <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative h-full bg-red-900/20 rounded-xl p-8 border border-red-500/50 hover:border-red-500/70 transition-all duration-300 group">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-red-500/20 via-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="flex flex-col items-center justify-center mb-6">
                    <h3 className="text-2xl font-semibold text-gray-200 mb-2">Traditional Education</h3>
                    <div className="text-4xl font-bold text-gray-100">₹10,00,000+</div>
                  </div>
                  <div className="text-gray-300 font-medium text-sm uppercase tracking-wider">The Conventional Route</div>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <FiClock className="text-gray-300 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">4-6 years time commitment</span>
                  </li>
                  <li className="flex items-start">
                    <FiBook className="text-gray-300 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Often outdated curriculum</span>
                  </li>
                  <li className="flex items-start">
                    <FiX className="text-gray-300 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">No employment guarantees</span>
                  </li>
                  <li className="flex items-start">
                    <FiDollarSign className="text-gray-300 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Significant financial burden</span>
                  </li>
                </ul>

                <div className="bg-red-500/20 text-gray-200 px-4 py-3 rounded-lg text-center font-medium border border-red-500/40">
                  High risk with uncertain ROI
                </div>
              </div>
            </div>
          </div>

          {/* Our Program Card */}
          <div className={`transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative h-full bg-green-900/20 rounded-xl p-8 border border-green-500/50 hover:border-green-500/70 transition-all duration-300 group">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-green-500/20 via-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="flex flex-col items-center justify-center mb-6">
                    <h3 className="text-2xl font-semibold text-gray-200 mb-2">Our Learning Program</h3>
                    <div className="text-4xl font-bold text-gray-100">₹199</div>
                  </div>
                  <div className="text-gray-300 font-medium text-sm uppercase tracking-wider">The Efficient Alternative</div>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <FiZap className="text-gray-300 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">2-3 months intensive program</span>
                  </li>
                  <li className="flex items-start">
                    <FiTrendingUp className="text-gray-300 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Cutting-edge technology focus</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-gray-300 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">95% career success rate</span>
                  </li>
                  <li className="flex items-start">
                    <FiDollarSign className="text-gray-300 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Immediate return on investment</span>
                  </li>
                </ul>

                <div className="bg-green-500/20 text-gray-200 px-4 py-3 rounded-lg text-center font-medium border border-green-500/40 group-hover:bg-green-500/30 transition-all duration-300">
                  High-value investment with proven results
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Value Proposition */}
        <div className={`text-center mb-24 transition-all duration-700 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative max-w-4xl mx-auto bg-gray-900 rounded-xl p-10 border border-gray-800">
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-green-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
                Save <span className="text-green-400">₹9,99,801</span> with our program
              </h2>
              <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                Achieve superior career outcomes at just 0.002% of traditional education costs
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <button className="relative overflow-hidden bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-[1.03] shadow-lg hover:shadow-green-500/30">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Enroll Now for ₹199
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                </button>
                
                <div className="text-gray-400 text-sm md:text-base">
                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                    <span className="flex items-center">
                      <FiCheck className="w-4 h-4 mr-2 text-green-400" />
                      30-Day Money Back Guarantee
                    </span>
                    <span className="flex items-center">
                      <FiCheck className="w-4 h-4 mr-2 text-green-400" />
                      Lifetime Access & Updates
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto transition-all duration-700 ease-out delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative bg-gray-900 rounded-xl p-8 border border-gray-800 text-center group hover:border-green-500/30 transition-all duration-300">
            <div className="text-5xl font-bold text-green-400 mb-3 group-hover:text-green-300 transition-colors duration-300">50K+</div>
            <div className="text-gray-400 font-medium uppercase tracking-wider text-sm">Professionals Trained</div>
            <div className="absolute bottom-4 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          
          <div className="relative bg-gray-900 rounded-xl p-8 border border-gray-800 text-center group hover:border-green-500/30 transition-all duration-300">
            <div className="text-5xl font-bold text-green-400 mb-3 group-hover:text-green-300 transition-colors duration-300">95%</div>
            <div className="text-gray-400 font-medium uppercase tracking-wider text-sm">Career Success Rate</div>
            <div className="absolute bottom-4 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          
          <div className="relative bg-gray-900 rounded-xl p-8 border border-gray-800 text-center group hover:border-green-500/30 transition-all duration-300">
            <div className="text-5xl font-bold text-green-400 mb-3 group-hover:text-green-300 transition-colors duration-300">300%</div>
            <div className="text-gray-400 font-medium uppercase tracking-wider text-sm">Average Salary Increase</div>
            <div className="absolute bottom-4 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPage;
