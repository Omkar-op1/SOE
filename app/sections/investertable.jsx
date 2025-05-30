'use client'
import React, { useEffect, useRef } from 'react';

const InvestorsTable = () => {
  const videoRef = useRef(null);
  const investorSectionRef = useRef(null);
  const startupSectionRef = useRef(null);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    // Video play/pause on visibility
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          videoRef.current?.play();
        } else {
          videoRef.current?.pause();
        }
      });
    }, { threshold: 0.5 });

    if (videoRef.current) {
      videoObserver.observe(videoRef.current);
    }

    return () => {
      observer.disconnect();
      videoObserver.disconnect();
    };
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-[#0a0a0a] overflow-hidden">
      {/* Floating gold particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1.5 h-1.5 bg-[#FFD700] rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `floatUp ${Math.random() * 6 + 8}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] bg-clip-text text-transparent mb-4">
            Investment Platform
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Bridging visionary startups with strategic investors for mutual growth
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Video Column */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl animate-on-scroll opacity-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/10 to-[#FFA500]/5 z-10 pointer-events-none"></div>
            <video 
              ref={videoRef}
              className="w-full h-auto rounded-xl"
              loop
              muted
              playsInline
              poster="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            >
              <source src="/investment-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-2xl font-bold text-white">How It Works</h3>
              <p className="text-gray-300">See our platform in action</p>
            </div>
          </div>

          {/* Content Column */}
          <div className="space-y-8">
            {/* Investors Section */}
            <div 
              ref={investorSectionRef}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-[#FFD700]/20 shadow-lg relative overflow-hidden animate-on-scroll opacity-0"
            >
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#FFD700]/10 rounded-full blur-xl"></div>
              <div className="flex items-center mb-6">
                <div className="bg-[#FFD700] p-3 rounded-lg mr-4 shadow-md">
                  <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#FFD700]">For Investors</h3>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    icon: (
                      <svg className="w-6 h-6 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                      </svg>
                    ),
                    title: "Discover Startups",
                    description: "Access curated early-stage startups with expert recommendations for optimal returns."
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                      </svg>
                    ),
                    title: "Compliance Management",
                    description: "Our legal team handles all compliance so you can focus on investment decisions."
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ),
                    title: "Streamlined Deals",
                    description: "Direct video connections with founders for transparent, efficient deal closures."
                  }
                ].map((item, index) => (
                  <div 
                    key={`investor-${index}`}
                    className="flex items-start p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300 group"
                  >
                    <div className="bg-[#FFD700]/10 p-2 rounded-lg mr-4 group-hover:bg-[#FFD700]/20 transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="mt-8 w-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-gray-900 font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
                Explore Investment Opportunities
              </button>
            </div>

            {/* Startups Section */}
            <div 
              ref={startupSectionRef}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-[#FFD700]/20 shadow-lg relative overflow-hidden animate-on-scroll opacity-0"
            >
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#FFD700]/10 rounded-full blur-xl"></div>
              <div className="flex items-center mb-6">
                <div className="bg-[#FFD700] p-3 rounded-lg mr-4 shadow-md">
                  <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#FFD700]">For Startups</h3>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    icon: (
                      <svg className="w-6 h-6 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                        <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                      </svg>
                    ),
                    title: "Investor Network",
                    description: "Connect with investors whose interests align perfectly with your venture."
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    ),
                    title: "Capital Raising",
                    description: "Strategic guidance to raise funds at the right valuation and timing."
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    ),
                    title: "Investor Relations",
                    description: "We manage your investor communications while you focus on growth."
                  }
                ].map((item, index) => (
                  <div 
                    key={`startup-${index}`}
                    className="flex items-start p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300 group"
                  >
                    <div className="bg-[#FFD700]/10 p-2 rounded-lg mr-4 group-hover:bg-[#FFD700]/20 transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="mt-8 w-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-gray-900 font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
                Start Fundraising Journey
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
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default InvestorsTable;