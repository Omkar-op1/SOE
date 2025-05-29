"use client";
import { useEffect, useRef, useState } from "react";

export default function ThinkersClubSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const slideInterval = useRef(null);
  
  const images = [
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
  ];

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Create floating elements
    const container = document.getElementById("floatingElements");
    const elementCount = 15;
    
    for (let i = 0; i < elementCount; i++) {
      const element = document.createElement("div");
      element.className = "floating-element";
      element.style.left = Math.random() * 100 + "%";
      element.style.animationDelay = Math.random() * 8 + "s";
      element.style.animationDuration = Math.random() * 4 + 8 + "s";
      container?.appendChild(element);
    }

    // Intersection observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
        }
      });
    }, observerOptions);

    document
      .querySelectorAll(".animate-on-scroll")
      .forEach((el) => observer.observe(el));

    // Set up slider auto-advance
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    // Cleanup
    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
      observer.disconnect();
    };
  }, [images.length]);

  // Handle slide change
  const goToSlide = (index) => {
    setCurrentSlide(index);
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
      slideInterval.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
      }, 5000);
    }
  };

  return (
    <section id="thinkers-club-details" className="sot-section sot-section-light">
      <div className="floating-elements" id="floatingElements"></div>
      <div className="w3-container">
        <div className="w3-row">
          <div className="w3-col m6 desktop-padding">
            
          </div>
          
          {/* Image Slider Section */}
          <div className="w3-col m6">
            <div className="relative overflow-hidden rounded-xl h-[450px] shadow-[0_20px_40px_rgba(0,0,0,0.3),_0_0_0_1px_rgba(255,215,0,0.1)]">
              {/* Slider Container */}
              <div 
                ref={sliderRef}
                className="flex transition-transform duration-700 ease-in-out h-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {images.map((src, index) => (
                  <div key={index} className="min-w-full h-full relative">
                    <img
                      src={src}
                      alt={`Thinkers Club ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                      <h3 className="text-xl font-bold mb-2">
                        {index === 0 && "Creative Collaboration"}
                        {index === 1 && "Brainstorming Sessions"}
                        {index === 2 && "Innovation Workshops"}
                      </h3>
                      <p className="text-sm opacity-90">
                        {index === 0 && "Where innovative minds meet to shape the future"}
                        {index === 1 && "Developing breakthrough ideas through collective thinking"}
                        {index === 2 && "Transforming ideas into actionable strategies"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Slider Controls */}
              <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index 
                        ? "bg-[#FFD700] scale-125" 
                        : "bg-white/30"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* Navigation Arrows */}
              <button
                onClick={() => goToSlide((currentSlide - 1 + images.length) % images.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-[#FFD700] hover:bg-black/70 transition-all z-10"
                aria-label="Previous slide"
              >
                &lt;
              </button>
              <button
                onClick={() => goToSlide((currentSlide + 1) % images.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-[#FFD700] hover:bg-black/70 transition-all z-10"
                aria-label="Next slide"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}