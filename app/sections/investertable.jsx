'use client'
import React, { useEffect } from 'react';

const InvestorsTable = () => {
  useEffect(() => {
    // Animation for cards when they come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-cardDrop');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.feature-card').forEach(card => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-[#0a0a0a] relative overflow-hidden">
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] bg-clip-text text-transparent mb-4">
            Investors Table
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We create tailored startups that align with investor preferences, ensuring prime investment opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* For Investors Column */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-[#FFD700]/20 shadow-[0_5px_20px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,215,0,0.1)]">
            <h3 className="text-2xl font-bold text-[#FFD700] mb-8 pb-4 border-b border-[#FFD700]/30 text-center">
              For Investors
            </h3>
            
            <div className="space-y-6 mb-10">
              <div className="feature-card opacity-0 transform translate-y-20">
                <div className="flex items-start">
                  <div className="text-[#FFD700] text-xl mr-4 mt-1">
                    <i className="fas fa-search"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Discover Startups</h4>
                    <p className="text-gray-300">
                      Discover early-stage startups with expert recommendations for best returns.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="feature-card opacity-0 transform translate-y-20">
                <div className="flex items-start">
                  <div className="text-[#FFD700] text-xl mr-4 mt-1">
                    <i className="fas fa-user-tie"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Personal Compliance Manager</h4>
                    <p className="text-gray-300">
                      Expert lawyers and accountants handle all compliance while you focus on deals.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="feature-card opacity-0 transform translate-y-20">
                <div className="flex items-start">
                  <div className="text-[#FFD700] text-xl mr-4 mt-1">
                    <i className="fas fa-handshake"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Smooth Deal Closing</h4>
                    <p className="text-gray-300">
                      Connect with founders via video and chat for transparent, swift closures.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <button className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
                INVEST IN STARTUPS
              </button>
            </div>
          </div>
          
          {/* For Startups Column */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-[#FFD700]/20 shadow-[0_5px_20px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,215,0,0.1)]">
            <h3 className="text-2xl font-bold text-[#FFD700] mb-8 pb-4 border-b border-[#FFD700]/30 text-center">
              For Startups
            </h3>
            
            <div className="space-y-6 mb-10">
              <div className="feature-card opacity-0 transform translate-y-20">
                <div className="flex items-start">
                  <div className="text-[#FFD700] text-xl mr-4 mt-1">
                    <i className="fas fa-link"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Connect With Investors</h4>
                    <p className="text-gray-300">
                      We connect you with investors whose preferences align with your venture.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="feature-card opacity-0 transform translate-y-20">
                <div className="flex items-start">
                  <div className="text-[#FFD700] text-xl mr-4 mt-1">
                    <i className="fas fa-money-bill-wave"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Raise Money</h4>
                    <p className="text-gray-300">
                      Our analysts guide you to raise funds at the right time with market insights.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="feature-card opacity-0 transform translate-y-20">
                <div className="flex items-start">
                  <div className="text-[#FFD700] text-xl mr-4 mt-1">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Investor Relations</h4>
                    <p className="text-gray-300">
                      We manage investor relations so you can focus on revenue generation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <button className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
                RAISE CAPITAL
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
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
        
        @keyframes cardDrop {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.9);
          }
          50% {
            opacity: 0.8;
            transform: translateY(-5px) scale(1.05);
          }
          70% {
            transform: translateY(2px) scale(0.98);
          }
          85% {
            transform: translateY(-1px) scale(1.01);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-cardDrop {
          animation: cardDrop 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }
        
        .feature-card {
          transition: all 0.3s ease;
          padding: 20px;
          border-radius: 10px;
          position: relative;
          overflow: hidden;
        }
        
        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.1), transparent);
          transition: left 0.6s ease;
        }
        
        .feature-card:hover {
          background: rgba(50, 50, 50, 0.5);
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 215, 0, 0.2);
        }
        
        .feature-card:hover::before {
          left: 100%;
        }
        
        .feature-card:hover i {
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
};

export default InvestorsTable;