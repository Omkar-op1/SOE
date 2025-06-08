'use client'
import React, { useEffect } from 'react';

const TimelineProcess = () => {
  useEffect(() => {
    // Animation for timeline items when they come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0');
          entry.target.classList.remove('-translate-x-10', 'translate-x-10');
          entry.target.classList.add('animate-fadeInSlide');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.timeline-item').forEach(item => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-[#050815] to-[#050815] relative overflow-hidden">
      {/* Top fade overlay */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#050815] to-transparent pointer-events-none z-20"></div>
      
      {/* Bottom fade overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050815] to-transparent pointer-events-none z-20"></div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-[6px] h-[6px] bg-[#FFD700] rounded-full opacity-60 animate-floatUp"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${Math.random() * 4 + 8}s`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,215,0,0.02)_25%,transparent_25%),linear-gradient(-45deg,rgba(255,215,0,0.02)_25%,transparent_25%),linear-gradient(45deg,transparent_75%,rgba(255,215,0,0.02)_75%),linear-gradient(-45deg,transparent_75%,rgba(255,215,0,0.02)_75%)] bg-[length:60px_60px] animate-patternShift pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] bg-clip-text text-transparent">
          Investment Process
        </h2>
        
        <div className="timeline relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FFD700] to-[#FFA500] transform -translate-x-1/2 md:block hidden"></div>
          
          {/* Timeline items */}
          <div className="timeline-item mb-20 relative opacity-0 -translate-x-10 transition-all duration-700">
            <div className="timeline-dot absolute left-1/2 top-8 -ml-2.5 w-5 h-5 bg-[#FFD700] rounded-full transform -translate-x-1/2 shadow-[0_0_15px_rgba(255,215,0,0.5)]"></div>
            <div className="timeline-content bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-[#FFD700]/20 shadow-[0_5px_20px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,215,0,0.1)] w-full md:w-5/12 md:mr-auto">
              <div className="absolute -right-2 top-8 w-4 h-4 bg-gray-800 transform rotate-45 md:block hidden border-r border-b border-[#FFD700]/20"></div>
              <h3 className="text-2xl font-bold text-[#FFD700] mb-3 flex items-center">
                <span className="mr-2">📝</span> Step 1: Create Account
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Sign up for your investor account to get started on your journey to wealth creation through strategic startup investments.
              </p>
            </div>
          </div>
          
          <div className="timeline-item mb-20 relative opacity-0 translate-x-10 md:transform-none md:-translate-x-10 transition-all duration-700">
            <div className="timeline-dot absolute left-1/2 top-8 -ml-2.5 w-5 h-5 bg-[#FFD700] rounded-full transform -translate-x-1/2 shadow-[0_0_15px_rgba(255,215,0,0.5)]"></div>
            <div className="timeline-content bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-[#FFD700]/20 shadow-[0_5px_20px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,215,0,0.1)] w-full md:w-5/12 md:ml-auto">
              <div className="absolute -left-2 top-8 w-4 h-4 bg-gray-800 transform rotate-45 md:block hidden border-l border-b border-[#FFD700]/20"></div>
              <h3 className="text-2xl font-bold text-[#FFD700] mb-3 flex items-center">
                <span className="mr-2">🏢</span> Step 2: Input Your Information
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Provide information about yourself and your investment preferences to help us understand your profile and investment location.
              </p>
            </div>
          </div>
          
          <div className="timeline-item mb-20 relative opacity-0 -translate-x-10 transition-all duration-700">
            <div className="timeline-dot absolute left-1/2 top-8 -ml-2.5 w-5 h-5 bg-[#FFD700] rounded-full transform -translate-x-1/2 shadow-[0_0_15px_rgba(255,215,0,0.5)]"></div>
            <div className="timeline-content bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-[#FFD700]/20 shadow-[0_5px_20px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,215,0,0.1)] w-full md:w-5/12 md:mr-auto">
              <div className="absolute -right-2 top-8 w-4 h-4 bg-gray-800 transform rotate-45 md:block hidden border-r border-b border-[#FFD700]/20"></div>
              <h3 className="text-2xl font-bold text-[#FFD700] mb-3 flex items-center">
                <span className="mr-2">📋</span> Step 3: Share Investment Blueprint
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Define your investment blueprint including preferred founders, sectors, revenue models, and past investments to help us understand your investing pattern.
              </p>
            </div>
          </div>
          
          <div className="timeline-item mb-20 relative opacity-0 translate-x-10 md:transform-none md:-translate-x-10 transition-all duration-700">
            <div className="timeline-dot absolute left-1/2 top-8 -ml-2.5 w-5 h-5 bg-[#FFD700] rounded-full transform -translate-x-1/2 shadow-[0_0_15px_rgba(255,215,0,0.5)]"></div>
            <div className="timeline-content bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-[#FFD700]/20 shadow-[0_5px_20px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,215,0,0.1)] w-full md:w-5/12 md:ml-auto">
              <div className="absolute -left-2 top-8 w-4 h-4 bg-gray-800 transform rotate-45 md:block hidden border-l border-b border-[#FFD700]/20"></div>
              <h3 className="text-2xl font-bold text-[#FFD700] mb-3 flex items-center">
                <span className="mr-2">💡</span> Step 4: Thinkers Club Integration
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Our analysts use your blueprint to provide business ideas in Thinkers Club, guiding aspiring entrepreneurs to create startups aligned with your preferences.
              </p>
            </div>
          </div>
          
          <div className="timeline-item mb-20 relative opacity-0 -translate-x-10 transition-all duration-700">
            <div className="timeline-dot absolute left-1/2 top-8 -ml-2.5 w-5 h-5 bg-[#FFD700] rounded-full transform -translate-x-1/2 shadow-[0_0_15px_rgba(255,215,0,0.5)]"></div>
            <div className="timeline-content bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-[#FFD700]/20 shadow-[0_5px_20px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,215,0,0.1)] w-full md:w-5/12 md:mr-auto">
              <div className="absolute -right-2 top-8 w-4 h-4 bg-gray-800 transform rotate-45 md:block hidden border-r border-b border-[#FFD700]/20"></div>
              <h3 className="text-2xl font-bold text-[#FFD700] mb-3 flex items-center">
                <span className="mr-2">🎯</span> Step 5: Smart Matching
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Our team compares hundreds of startups with your blueprint to identify the most investable opportunities that align with your investment criteria.
              </p>
            </div>
          </div>
          
          <div className="timeline-item relative opacity-0 translate-x-10 md:transform-none md:-translate-x-10 transition-all duration-700">
            <div className="timeline-dot absolute left-1/2 top-8 -ml-2.5 w-5 h-5 bg-[#FFD700] rounded-full transform -translate-x-1/2 shadow-[0_0_15px_rgba(255,215,0,0.5)]"></div>
            <div className="timeline-content bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-[#FFD700]/20 shadow-[0_5px_20px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,215,0,0.1)] w-full md:w-5/12 md:ml-auto">
              <div className="absolute -left-2 top-8 w-4 h-4 bg-gray-800 transform rotate-45 md:block hidden border-l border-b border-[#FFD700]/20"></div>
              <h3 className="text-2xl font-bold text-[#FFD700] mb-3 flex items-center">
                <span className="mr-2">💰</span> Step 6: Monthly Opportunities
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Each month, receive three carefully curated startups that align with your investment values, simplifying your path to wealth creation.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes fadeInSlide {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fadeInSlide {
          animation: fadeInSlide 0.8s ease forwards;
        }
        
        @keyframes floatUp {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }
        
        .animate-floatUp {
          animation: floatUp 8s linear infinite;
        }
        
        @keyframes patternShift {
          0% { background-position: 0 0; }
          100% { background-position: 60px 60px; }
        }
        
        .animate-patternShift {
          animation: patternShift 20s linear infinite;
        }
        
        @keyframes pulseDot {
          0%, 100% { 
            transform: translateX(-50%) scale(1);
            box-shadow: 0 0 0 0 rgba(255, 215, 0, 0.7);
          }
          50% { 
            transform: translateX(-50%) scale(1.2);
            box-shadow: 0 0 0 10px rgba(255, 215, 0, 0);
          }
        }
        
        .timeline-dot {
          animation: pulseDot 2s infinite;
        }
        
        .timeline-content {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .timeline-content:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 215, 0, 0.2) !important;
        }
        
        @media (max-width: 768px) {
          .timeline::before {
            left: 1.25rem;
          }
          
          .timeline-dot {
            left: 1.25rem;
          }
          
          .timeline-content {
            width: calc(100% - 3rem) !important;
            margin-left: 2.5rem !important;
          }
          
          .timeline-item:nth-child(even) .timeline-content,
          .timeline-item:nth-child(odd) .timeline-content {
            margin-right: 0 !important;
            margin-left: 2.5rem !important;
          }
          
          .timeline-content::before,
          .timeline-content::after {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default TimelineProcess;