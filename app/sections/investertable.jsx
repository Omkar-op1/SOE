'use client'
import React, { useEffect, useRef, useState } from 'react';

const InvestorsTable = () => {
  const videoRef = useRef(null);
  const investorSectionRef = useRef(null);
  const startupSectionRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  
  // Animation states
  const [investorVisible, setInvestorVisible] = useState(false);
  const [startupVisible, setStartupVisible] = useState(false);
  const [investorPointsVisible, setInvestorPointsVisible] = useState([]);
  const [startupPointsVisible, setStartupPointsVisible] = useState([]);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
          
          if (entry.target === investorSectionRef.current) {
            setInvestorVisible(true);
          } else if (entry.target === startupSectionRef.current) {
            setStartupVisible(true);
          }
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
          setIsPlaying(true);
        } else {
          videoRef.current?.pause();
          setIsPlaying(false);
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

  // Toggle play/pause
  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  // Toggle mute
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  // Animate points when section becomes visible
  useEffect(() => {
    if (investorVisible) {
      const timer1 = setTimeout(() => setInvestorPointsVisible([0]), 300);
      const timer2 = setTimeout(() => setInvestorPointsVisible([0,1]), 600);
      const timer3 = setTimeout(() => setInvestorPointsVisible([0,1,2]), 900);
      
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [investorVisible]);

  useEffect(() => {
    if (startupVisible) {
      const timer1 = setTimeout(() => setStartupPointsVisible([0]), 300);
      const timer2 = setTimeout(() => setStartupPointsVisible([0,1]), 600);
      const timer3 = setTimeout(() => setStartupPointsVisible([0,1,2]), 900);
      
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [startupVisible]);

  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-[#0a0a0a] overflow-hidden min-h-screen">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
        <div className="text-center mb-8 md:mb-12 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] bg-clip-text text-transparent mb-4">
            Investment Platform
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Bridging visionary startups with strategic investors for mutual growth
          </p>
        </div>

        {/* Video Section */}
        <div className="mb-10 md:mb-14 rounded-xl overflow-hidden shadow-2xl animate-on-scroll opacity-0">
          <div className="relative aspect-w-16 aspect-h-9 bg-black">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/10 to-[#FFA500]/5 z-10 pointer-events-none"></div>
            <video 
              ref={videoRef}
              className="w-full h-130 object-cover"
              loop
              muted
              autoPlay
              playsInline
            >
              <source src="/videos/investor.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/80 to-transparent">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-3 md:mb-0">
                  <span className="text-white text-sm">Investment Opportunities</span>
                </div>
                <div className="flex space-x-3">
                  <button 
                    onClick={togglePlay}
                    className="bg-[#FFD700]/20 hover:bg-[#FFD700]/30 p-2 rounded-full transition-colors"
                  >
                    {isPlaying ? (
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </button>
                  <button 
                    onClick={toggleMute}
                    className="bg-[#FFD700]/20 hover:bg-[#FFD700]/30 p-2 rounded-full transition-colors"
                  >
                    {isMuted ? (
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M12 6a9 9 0 010 12m-4.5-9.5L12 3v18l-4.5-4.5H4a1 1 0 01-1-1v-7a1 1 0 011-1h3.5z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Investors Section - Fixed */}
          <div 
            ref={investorSectionRef}
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 md:p-8 rounded-xl border border-[#FFD700]/20 shadow-lg relative overflow-hidden animate-on-scroll opacity-0"
          >
            <div className="absolute -top-4 -right-4 w-20 h-20 md:w-24 md:h-24 bg-[#FFD700]/10 rounded-full blur-xl"></div>
            <div className="flex items-center mb-5 md:mb-6">
              <div className="bg-[#FFD700] p-2 md:p-3 rounded-lg mr-3 md:mr-4 shadow-md">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#FFD700]">Investors</h3>
            </div>
            
            <div className="space-y-4 md:space-y-6">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                  ),
                  title: "Discover Startups",
                  description: "Discover early-stage startups with expert recommendations to invest in those offering the best returns."
                },
                {
                  icon: (
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1z" clipRule="evenodd" />
                      <path d="M12 16a4 4 0 100-8 4 4 0 000 8z" />
                    </svg>
                  ),
                  title: "Personal Compliance Manager",
                  description: "Our expert lawyers and accountants handle all legal and government compliance, letting you focus on securing better deals."
                },
                {
                  icon: (
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8 1a1 1 0 100-2 1 1 0 000 2zm-3-1a1 1 0 11-2 0 1 1 0 012 0zm7 1a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                  ),
                  title: "Smooth and Efficient Closing",
                  description: "Our platform connects investors and founders via video conferencing and chat, enabling transparent communication and swift deal closures."
                }
              ].map((item, index) => (
                <div 
                  key={`investor-${index}`}
                  className={`flex items-start p-3 md:p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300 group transform ${
                    investorPointsVisible.includes(index) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-6'
                  }`}
                  style={{
                    transition: `opacity 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)`,
                    transitionDelay: `${index * 0.2}s`
                  }}
                >
                  <div className="bg-[#FFD700]/10 p-1.5 md:p-2 rounded-lg mr-3 md:mr-4 group-hover:bg-[#FFD700]/20 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base md:text-lg font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-gray-300 text-xs md:text-sm">{item.description}</p>
                  </div>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 md:w-3 md:h-3 bg-[#FFD700] rounded-full animate-pulse"></div>
                </div>
              ))}
            </div>
            
            <button 
              className={`mt-6 md:mt-8 w-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-gray-900 font-bold py-2.5 md:py-3 px-5 md:px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] ${
                investorPointsVisible.length === 3 ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                transition: `opacity 0.5s ease ${3 * 0.2 + 0.2}s`
              }}
            >
              Explore Investment Opportunities
            </button>
          </div>

          {/* Startups Section */}
          <div 
            ref={startupSectionRef}
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 md:p-8 rounded-xl border border-[#FFD700]/20 shadow-lg relative overflow-hidden animate-on-scroll opacity-0"
          >
            <div className="absolute -top-4 -right-4 w-20 h-20 md:w-24 md:h-24 bg-[#FFD700]/10 rounded-full blur-xl"></div>
            <div className="flex items-center mb-5 md:mb-6">
              <div className="bg-[#FFD700] p-2 md:p-3 rounded-lg mr-3 md:mr-4 shadow-md">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#FFD700]">Startups</h3>
            </div>
            
            <div className="space-y-4 md:space-y-6">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                      <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                    </svg>
                  ),
                  title: "Investor Network",
                  description: "Connect with investors whose interests align perfectly with your venture."
                },
                {
                  icon: (
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  ),
                  title: "Capital Raising",
                  description: "Strategic guidance to raise funds at the right valuation and timing."
                },
                {
                  icon: (
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  ),
                  title: "Investor Relations",
                  description: "We manage your investor communications while you focus on growth."
                }
              ].map((item, index) => (
                <div 
                  key={`startup-${index}`}
                  className={`flex items-start p-3 md:p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300 group transform ${
                    startupPointsVisible.includes(index) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-6'
                  }`}
                  style={{
                    transition: `opacity 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)`,
                    transitionDelay: `${index * 0.2}s`
                  }}
                >
                  <div className="bg-[#FFD700]/10 p-1.5 md:p-2 rounded-lg mr-3 md:mr-4 group-hover:bg-[#FFD700]/20 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base md:text-lg font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-gray-300 text-xs md:text-sm">{item.description}</p>
                  </div>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 md:w-3 md:h-3 bg-[#FFD700] rounded-full animate-pulse"></div>
                </div>
              ))}
            </div>
            
            <button 
              className={`mt-6 md:mt-8 w-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-gray-900 font-bold py-2.5 md:py-3 px-5 md:px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] ${
                startupPointsVisible.length === 3 ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                transition: `opacity 0.5s ease ${3 * 0.2 + 0.2}s`
              }}
            >
              Start Fundraising Journey
            </button>
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