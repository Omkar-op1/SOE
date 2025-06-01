"use client"

import React, { useEffect, useRef, useState } from 'react';

const PricingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const floatingRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Floating particles
    const container = floatingRef.current;
    if (container) {
      const count = 25;
      container.innerHTML = "";

      for (let i = 0; i < count; i++) {
        const el = document.createElement("div");
        el.className = "absolute w-3 h-3 bg-[rgba(255,215,0,0.4)] rounded-full animate-floating";
        el.style.left = `${Math.random() * 100}%`;
        el.style.animationDelay = `${Math.random() * 8}s`;
        el.style.animationDuration = `${Math.random() * 4 + 8}s`;
        container.appendChild(el);
      }
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-b from-gray-900 via-[#0a0a0a] to-gray-900 overflow-hidden font-sans"
    >
      {/* Floating particles */}
      <div
        className="absolute inset-0 pointer-events-none overflow-visible z-[1]"
        ref={floatingRef}
      ></div>
      
      {/* Golden glow effects */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(255,215,0,0.08)_0%,transparent_70%)] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,165,0,0.06)_0%,transparent_70%)] rounded-full blur-[100px]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-[3] max-w-7xl mx-auto px-6 py-16">
        
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1]">
            <span className="block text-[#ccc] mb-4">Choose Your</span>
            <span className="gradient-text bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] bg-[length:300%_300%] bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] animate-gradient">
              Investment Path
            </span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500] mx-auto rounded-full"></div>
        </div>

        {/* Road Diagram Integration */}
        <div className={`relative mb-20 transition-all duration-1200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="relative max-w-5xl mx-auto">
            {/* Background glow for image */}
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,215,0,0.1)_0%,transparent_60%)] rounded-3xl blur-xl"></div>
            
            {/* Image container with golden border */}
             <img
                src="/images/PAy.jpg"
                alt="Investment comparison: Traditional ₹10,00,000+ vs Smart Learning ₹199"
                className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-700"
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.3))'
                }}
              />
          </div>
        </div>

        {/* Comparison Cards */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          
          {/* Traditional Path - Left Card */}
          <div className={`relative group transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(255,69,0,0.2)] to-[rgba(255,140,0,0.1)] rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            
            <div className="relative bg-gradient-to-br from-[rgba(139,69,19,0.9)] via-[rgba(160,82,45,0.8)] to-[rgba(139,69,19,0.9)] rounded-2xl p-8 border-2 border-[rgba(255,140,0,0.3)] backdrop-blur-sm hover:border-[rgba(255,140,0,0.5)] transition-all duration-500">
              
              {/* Header */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-5xl">😰</span>
                  <div>
                    <h3 className="text-3xl font-bold text-white tracking-wide">Traditional Path</h3>
                    <div className="text-4xl font-black text-[#FFD700] mt-2">₹10,00,000+</div>
                  </div>
                </div>
                <div className="text-red-300 font-semibold text-lg">The Expensive Route</div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[rgba(139,69,19,0.6)] rounded-xl p-4 border border-[rgba(255,140,0,0.2)] hover:border-[rgba(255,140,0,0.4)] transition-all duration-300">
                  <div className="text-3xl mb-2 text-center">⏰</div>
                  <div className="text-white font-semibold text-center text-sm">4-6 Years</div>
                </div>
                <div className="bg-[rgba(139,69,19,0.6)] rounded-xl p-4 border border-[rgba(255,140,0,0.2)] hover:border-[rgba(255,140,0,0.4)] transition-all duration-300">
                  <div className="text-3xl mb-2 text-center">📚</div>
                  <div className="text-white font-semibold text-center text-sm">Outdated Curriculum</div>
                </div>
                <div className="bg-[rgba(139,69,19,0.6)] rounded-xl p-4 border border-[rgba(255,140,0,0.2)] hover:border-[rgba(255,140,0,0.4)] transition-all duration-300">
                  <div className="text-3xl mb-2 text-center">❌</div>
                  <div className="text-white font-semibold text-center text-sm">No Job Guarantee</div>
                </div>
                <div className="bg-[rgba(139,69,19,0.6)] rounded-xl p-4 border border-[rgba(255,140,0,0.2)] hover:border-[rgba(255,140,0,0.4)] transition-all duration-300">
                  <div className="text-3xl mb-2 text-center">💔</div>
                  <div className="text-white font-semibold text-center text-sm">Heavy Debt Load</div>
                </div>
              </div>

              {/* Warning Badge */}
              <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-4 py-2 rounded-lg text-center font-bold">
                ⚠️ High Risk, Low ROI
              </div>
            </div>
          </div>

          {/* Smart Learning Path - Right Card */}
          <div className={`relative group transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(255,215,0,0.3)] to-[rgba(255,165,0,0.2)] rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            
            <div className="relative bg-gradient-to-br from-[rgba(0,50,50,0.9)] via-[rgba(0,100,100,0.8)] to-[rgba(0,50,50,0.9)] rounded-2xl p-8 border-2 border-[rgba(255,215,0,0.5)] backdrop-blur-sm hover:border-[rgba(255,215,0,0.7)] transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,215,0,0.3)]">
              
              {/* Header */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-5xl">🚀</span>
                  <div>
                    <h3 className="text-3xl font-bold text-white tracking-wide">Smart Learning</h3>
                    <div className="text-5xl font-black text-[#FFD700] mt-2">₹199</div>
                  </div>
                </div>
                <div className="text-[#FFD700] font-semibold text-lg">The Smart Investment</div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[rgba(0,100,100,0.6)] rounded-xl p-4 border border-[rgba(255,215,0,0.3)] hover:border-[rgba(255,215,0,0.5)] transition-all duration-300">
                  <div className="text-3xl mb-2 text-center">⚡</div>
                  <div className="text-white font-semibold text-center text-sm">2-3 Months</div>
                </div>
                <div className="bg-[rgba(0,100,100,0.6)] rounded-xl p-4 border border-[rgba(255,215,0,0.3)] hover:border-[rgba(255,215,0,0.5)] transition-all duration-300">
                  <div className="text-3xl mb-2 text-center">🔥</div>
                  <div className="text-white font-semibold text-center text-sm">Latest Technology</div>
                </div>
                <div className="bg-[rgba(0,100,100,0.6)] rounded-xl p-4 border border-[rgba(255,215,0,0.3)] hover:border-[rgba(255,215,0,0.5)] transition-all duration-300">
                  <div className="text-3xl mb-2 text-center">✅</div>
                  <div className="text-white font-semibold text-center text-sm">95% Success Rate</div>
                </div>
                <div className="bg-[rgba(0,100,100,0.6)] rounded-xl p-4 border border-[rgba(255,215,0,0.3)] hover:border-[rgba(255,215,0,0.5)] transition-all duration-300">
                  <div className="text-3xl mb-2 text-center">💰</div>
                  <div className="text-white font-semibold text-center text-sm">Immediate ROI</div>
                </div>
              </div>

              {/* Success Badge */}
              <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-gray-900 px-4 py-2 rounded-lg text-center font-bold">
                ✨ Smart Choice, Guaranteed Success
              </div>
            </div>
          </div>
        </div>

        {/* Savings Highlight */}
        <div className={`text-center mb-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(255,215,0,0.2)] to-[rgba(255,165,0,0.2)] rounded-3xl blur-xl"></div>
            
            <div className="relative bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] rounded-3xl p-10 border-2 border-[rgba(255,215,0,0.5)] backdrop-blur-sm">
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
                Save ₹9,99,801!
              </h2>
              <p className="text-2xl text-gray-800 font-bold mb-8">
                Get SUPERIOR results at just 0.002% of traditional cost
              </p>
              
              <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
                <button className="group relative bg-gradient-to-r from-gray-900 to-[#0a0a0a] text-[#FFD700] px-12 py-6 rounded-2xl font-black text-2xl hover:shadow-[0_0_50px_rgba(255,215,0,0.5)] transition-all duration-500 transform hover:scale-105 border-2 border-[rgba(255,215,0,0.3)] hover:border-[rgba(255,215,0,0.7)]">
                  <span className="relative z-10">Start for ₹199 🚀</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                </button>
                
                <div className="text-gray-800 font-bold text-lg">
                  <div className="flex items-center gap-4">
                    <span>✅ 30-Day Money Back</span>
                    <span>✅ Lifetime Access</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(255,215,0,0.2)] to-[rgba(255,165,0,0.1)] rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
            <div className="relative text-center bg-gradient-to-br from-[rgba(255,215,0,0.1)] to-[rgba(255,165,0,0.05)] rounded-2xl p-8 border border-[rgba(255,215,0,0.3)] backdrop-blur-sm hover:border-[rgba(255,215,0,0.5)] transition-all duration-500">
              <div className="text-5xl font-black text-[#FFD700] mb-4">50K+</div>
              <div className="text-xl text-[#ccc] font-semibold">Successful Students</div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(255,215,0,0.2)] to-[rgba(255,165,0,0.1)] rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
            <div className="relative text-center bg-gradient-to-br from-[rgba(255,215,0,0.1)] to-[rgba(255,165,0,0.05)] rounded-2xl p-8 border border-[rgba(255,215,0,0.3)] backdrop-blur-sm hover:border-[rgba(255,215,0,0.5)] transition-all duration-500">
              <div className="text-5xl font-black text-[#FFD700] mb-4">95%</div>
              <div className="text-xl text-[#ccc] font-semibold">Success Rate</div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(255,215,0,0.2)] to-[rgba(255,165,0,0.1)] rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
            <div className="relative text-center bg-gradient-to-br from-[rgba(255,215,0,0.1)] to-[rgba(255,165,0,0.05)] rounded-2xl p-8 border border-[rgba(255,215,0,0.3)] backdrop-blur-sm hover:border-[rgba(255,215,0,0.5)] transition-all duration-500">
              <div className="text-5xl font-black text-[#FFD700] mb-4">300%</div>
              <div className="text-xl text-[#ccc] font-semibold">Average Salary Boost</div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes floating {
          0% {
            transform: translateY(100vh) rotate(0deg);
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes gradientWave {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .animate-floating {
          animation: floating 12s linear infinite;
        }
        
        .animate-gradient {
          animation: gradientWave 4s ease-in-out infinite;
        }
        
        .gradient-text {
          animation: gradientWave 4s ease-in-out infinite;
        }
        
        /* Smooth scrolling animations */
        .transition-all {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Custom glow effects */
        .hover\\:shadow-golden:hover {
          box-shadow: 0 0 50px rgba(255, 215, 0, 0.3);
        }
      `}</style>
    </section>
  );
};

export default PricingPage;