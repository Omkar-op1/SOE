"use client";
import React, { useEffect, useRef } from "react";
import BrandButton from '@/components/button';

export default function SuccessStories() {
  const floatingRef = useRef(null);

  useEffect(() => {
    // Floating particles creation
    const container = floatingRef.current;
    const count = 20;
    container.innerHTML = "";

    for (let i = 0; i < count; i++) {
      const el = document.createElement("div");
      el.className = "absolute w-[15px] h-[15px] bg-[rgba(255,215,0,0.3)] rounded-full filter drop-shadow-[0_0_6px_rgba(255,215,0,0.5)] animate-floating";
      el.style.left = `${Math.random() * 100}%`;
      el.style.animationDelay = `${Math.random() * 8}s`;
      el.style.animationDuration = `${Math.random() * 4 + 8}s`;
      container.appendChild(el);
    }

    // Scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const successStories = [
    {
      id: 1,
      name: "Arjun Patel",
      company: "GreenHarvest Organics",
      story: "The entrepreneurship program helped me build India's first blockchain-based organic farming collective, connecting 500+ farmers directly to consumers.",
      achievement: "Featured in Forbes India 30 Under 30",
      image: "https://images.unsplash.com/photo-1600180758890-6b94519e8ba8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 2,
      name: "Priya Sharma",
      company: "EduTech Bharat",
      story: "With mentorship from the program, I scaled my vernacular education platform to serve 1 million students across rural India.",
      achievement: "Winner of National Startup Award 2023",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
    },
    {
      id: 3,
      name: "Rahul Singh",
      company: "MediQuick Solutions",
      story: "The investor connections I made through the alumni network helped me secure funding for my AI-powered diagnostic tool now used in 100+ clinics.",
      achievement: "Raised ₹25 Crore in Series B",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 4,
      name: "Ananya Gupta",
      company: "CraftConnect",
      story: "The business model workshops transformed my small handicraft blog into a thriving e-commerce platform supporting 2000+ artisans nationwide.",
      achievement: "Recognized by PM Modi's Mann Ki Baat",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80"
    }
  ];

  return (
    <section className="relative py-[100px] bg-gradient-to-b from-gray-900 to-[#0a0a0a] overflow-hidden font-sans text-[#ccc] min-h-screen">
      {/* Gold floating particles */}
      <div
        className="absolute inset-0 pointer-events-none overflow-visible z-[2]"
        ref={floatingRef}
      ></div>
      
      {/* Gold radial glow */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,215,0,0.1)_0%,transparent_70%)] rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(255,165,0,0.08)_0%,transparent_70%)] rounded-full blur-[80px]"></div>
      </div>
      
      {/* Gold pattern overlay */}
      <div className="absolute inset-0 z-[1] bg-[url('/gold-pattern.svg')] bg-[size:200px] opacity-[0.03]"></div>
      
      {/* Top and bottom fades */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-[80px] bg-gradient-to-b from-[#050815] to-transparent z-[1]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-[#050815] to-transparent z-[1]"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-5 relative z-[3]">
        {/* Page Header */}
        <div className="text-center mb-[80px]">
          <h1 className="text-[3rem] md:text-[4.5rem] font-black mb-[20px] leading-[1.1] opacity-0 translate-y-[30px] animate-on-scroll">
            <span className="gradient-text inline-block bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] bg-[length:300%_300%] bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Success Stories
            </span>
          </h1>
          <p className="text-[1.3rem] leading-[1.5] text-[#ddd] max-w-[800px] mx-auto opacity-0 translate-y-[30px] animate-on-scroll" style={{ animationDelay: "0.2s" }}>
            How our Indian entrepreneurs are building the future of Bharat
          </p>
        </div>

        {/* Success Stories Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-[80px]">
          {successStories.map((story, index) => (
            <div 
              key={story.id}
              className="bg-gradient-to-b from-[#111] to-[#1a1a1a] rounded-xl overflow-hidden border border-[rgba(255,215,0,0.1)] hover:border-[rgba(255,215,0,0.3)] transition-all duration-300 group opacity-0 translate-y-[30px] animate-on-scroll"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="relative h-[250px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-[1] opacity-70"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,215,0,0.1)_0%,transparent_70%)] group-hover:opacity-100 opacity-0 transition-opacity duration-500"></div>
                <img 
                  src={story.image} 
                  alt={story.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 p-6 z-[2]">
                  <h3 className="text-[1.8rem] font-bold text-white mb-1">{story.name}</h3>
                  <p className="text-[#FFD700] font-medium">{story.company}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#ddd] mb-4">{story.story}</p>
                <div className="flex items-center">
                  <div className="w-[6px] h-[6px] bg-[#FFD700] rounded-full mr-2"></div>
                  <span className="text-[#FFD700] text-sm font-medium">{story.achievement}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center opacity-0 translate-y-[30px] animate-on-scroll" style={{ animationDelay: "0.7s" }}>
          <h2 className="text-[2.5rem] font-bold mb-6">Ready to begin your entrepreneurial journey?</h2>
          <p className="text-[1.2rem] text-[#ddd] max-w-[700px] mx-auto mb-8">
            Join India's most vibrant community of innovators and build ventures that make an impact.
          </p>
          <BrandButton
            label="Apply for Next Batch"
            className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-gray-900 hover:from-[#FFA500] hover:to-[#FFD700] px-8 py-4 text-lg"
          />
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
        
        .animate-floating {
          animation: floatUp 15s linear infinite;
        }
        
        .animate-on-scroll {
          animation: fadeInUp 1s ease forwards;
        }
        
        .gradient-text {
          background-size: 300% 300%;
          animation: gradientWave 4s ease-in-out infinite;
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
      `}</style>
    </section>
  );
}