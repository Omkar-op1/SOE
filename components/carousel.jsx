"use client";
import React, { useState } from "react";

export default function ServicesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    {
      title: "Thinker Club",
      tagline: "Where Ideas Ignite, and Startups Take Flight",
      description: [
        "Unlock Innovative Business Ideas",
        "Connect with Experts, and Network with Visionaries to Build Your Dream Venture"
      ],
      bg: "bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d]",
      border: "border-l-4 border-[#FFD700]"
    },
    {
      title: "Investor Table",
      tagline: "Invest In Startups Made For You",
      description: [
        "Get big Returns",
        "We Create startups according to the blueprint given by our investors",
        "In order to ensure maximum investor Satisfaction and returns"
      ],
      bg: "bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a]",
      border: "border-l-4 border-[#FFA500]"
    },
    {
      title: "Idea Community",
      tagline: "Build Your Dream Team, Power Your Startup",
      description: [
        "Unlock Innovative Business Ideas",
        "Find the right talent to turn your startup vision into reality",
        "Find Your Dream Team",
        "Apply for your dream Job"
      ],
      bg: "bg-gradient-to-br from-[#2d2d2d] to-[#0a0a0a]",
      border: "border-l-4 border-[#FFD700]"
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  return (
    <section className="relative w-full py-20 overflow-hidden bg-[#0a0a0a]">
      {/* Navigation arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 bg-black/70 hover:bg-[#FFD700]/20 text-[#FFD700] p-3 rounded-sm transition-all"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 bg-black/70 hover:bg-[#FFD700]/20 text-[#FFD700] p-3 rounded-sm transition-all"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Carousel items */}
      <div className="relative h-[600px] w-full">
        {services.map((service, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${service.bg} ${service.border} ${index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <div className="h-full w-full max-w-7xl mx-auto flex flex-col md:flex-row">
              {/* Text content */}
              <div className="flex-1 p-12 flex flex-col justify-center">
                <h2 className="text-4xl md:text-5xl font-bold text-[#FFD700] mb-4">{service.title}</h2>
                <h3 className="text-xl md:text-2xl font-semibold text-white/90 mb-8">{service.tagline}</h3>
                <ul className="space-y-4">
                  {service.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-[#FFA500] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-lg text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-8 bg-[#FFD700] hover:bg-[#FFA500] text-gray-900 font-bold py-3 px-8 rounded-sm text-lg transition-all w-fit">
                  Learn More
                </button>
              </div>

              {/* Image placeholder */}
              {/* <div className="flex-1 hidden md:flex items-center justify-center p-8">
                <div className="bg-white/5 border border-white/10 w-full h-full flex items-center justify-center">
                  <span className="text-white/30 text-lg">Flowchart/Diagram will go here</span>
                </div>
              </div> */}
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-2 w-2 rounded-sm transition-all ${index === activeIndex ? 'bg-[#FFD700] w-6' : 'bg-white/30'}`}
          />
        ))}
      </div>
    </section>
  );
}