'use client'
import React, { useEffect, useRef, useState } from 'react';

const ProductsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const floatingElementsRef = useRef(null);
  const intervalRef = useRef(null);
  const videoRefs = useRef([]);

  const products = [
    {
      id: 'thinkers-club',
      title: 'Thinkers Club',
      subtitle: 'Daily Business Ideas',
      description: 'Panel of Analysts and Experts who create business ideas with 99.9% Success Rate.',
      features: 'World class Custom Built Application with 8+ Learning Groups.',
      buttonText: 'Join Thinkers Club',
      videoSrc: 'Thinkers_Club.mp4',
    },
    {
      id: 'investors-table',
      title: 'Investors Table',
      subtitle: 'Get Direct Access to Investors',
      description: 'Get Direct Access to Investors who invest specifically in your Sector of Business.',
      features: 'Schedule Meetings Directly with Investors through Inbuilt Meeting and chat options. Get all Legal and Documentation Services completed by our team using our Custom built Hassle-Free User Interface.',
      buttonText: 'Access Investors',
      videoSrc: ' Investors_Table.mp4',
    },
    {
      id: 'idea-community',
      title: 'Idea Community',
      subtitle: 'Hire Working Professionals',
      description: 'Hire from a plethora of Working Professionals.',
      features: 'Get access to professionals who are Willing to work in Startups. Hand-Pick and Create your Dream Team.',
      buttonText: 'Join Community',
      videoSrc: 'Idea_Community.mp4',
    }
  ];

  useEffect(() => {
    const container = floatingElementsRef.current;
    if (!container) return;
    
    const elementCount = 20;
    container.innerHTML = "";

    for (let i = 0; i < elementCount; i++) {
      const element = document.createElement("div");
      element.className = "floating-element";
      element.style.left = Math.random() * 100 + "%";
      element.style.animationDelay = Math.random() * 8 + "s";
      element.style.animationDuration = (Math.random() * 4 + 8) + "s";
      container.appendChild(element);
    }

    const startAutoPlay = () => {
      intervalRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % products.length);
      }, 10000);
    };

    startAutoPlay();

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    
    window.addEventListener("mousemove", handleMouseMove);

    function animateParallax() {
      const floatingElements = document.querySelectorAll(".floating-element");
      
      floatingElements.forEach((element, index) => {
        const speed = (index % 3 + 1) * 0.3;
        const x = mouseX * speed * 10;
        const y = mouseY * speed * 10;
        
        element.style.transform = `translate(${x}px, ${y}px)`;
      });

      requestAnimationFrame(animateParallax);
    }

    animateParallax();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [products.length]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentSlide) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      }
    });
  }, [currentSlide]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % products.length);
    }, 6000);
  };

  const handleButtonClick = (e) => {
    const btn = e.currentTarget;
    const ripple = document.createElement("span");
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.height, rect.width);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.position = "absolute";
    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";
    ripple.style.background = "rgba(255, 255, 255, 0.5)";
    ripple.style.borderRadius = "50%";
    ripple.style.transform = "scale(0)";
    ripple.style.animation = "ripple 0.6s linear";
    ripple.style.pointerEvents = "none";
    
    btn.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  return (
    <div className="bg-[#0a0a0a] font-sans">
      <style jsx>{`
        @keyframes backgroundFlow {
          0% { 
            transform: rotate(0deg) scale(1);
            opacity: 0.5;
          }
          100% { 
            transform: rotate(2deg) scale(1.05);
            opacity: 0.8;
          }
        }
        
        @keyframes patternShift {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(60px) translateY(60px); }
        }
        
        @keyframes slideIn {
          0% {
            transform: translateX(100px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes slideOut {
          0% {
            transform: translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateX(-100px);
            opacity: 0;
          }
        }
        
        @keyframes textReveal {
          0% {
            transform: translateY(100px) rotateX(-90deg);
            opacity: 0;
          }
          50% {
            transform: translateY(20px) rotateX(-20deg);
            opacity: 0.7;
          }
          100% {
            transform: translateY(0) rotateX(0deg);
            opacity: 1;
          }
        }
        
        @keyframes gradientWave {
          0%, 100% { 
            background-position: 0% 50%;
            filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.3));
          }
          50% { 
            background-position: 100% 50%;
            filter: drop-shadow(0 0 20px rgba(255, 215, 0, 0.6));
          }
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
        
        @keyframes ripple {
          to {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        @keyframes videoGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255, 215, 0, 0.3); }
          50% { box-shadow: 0 0 30px 10px rgba(255, 215, 0, 0.5); }
        }
        
        @keyframes dotPulse {
          0%, 100% { 
            transform: scale(1);
            opacity: 0.5;
          }
          50% { 
            transform: scale(1.2);
            opacity: 1;
          }
        }
        
        .carousel-container {
          position: relative;
          width: 100%;
          height: 100vh;
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 30%, #1a1a1a 70%, #0a0a0a 100%);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        
        .carousel-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 25% 25%, rgba(255, 215, 0, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 75% 75%, rgba(255, 165, 0, 0.06) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.04) 0%, transparent 60%);
          animation: backgroundFlow 12s ease-in-out infinite alternate;
        }
        
        .carousel-container::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(45deg, rgba(255, 215, 0, 0.02) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(255, 215, 0, 0.02) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(255, 215, 0, 0.02) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(255, 215, 0, 0.02) 75%);
          background-size: 60px 60px;
          animation: patternShift 20s linear infinite;
          pointer-events: none;
        }
        
        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }
        
        .floating-element {
          position: absolute;
          width: 6px;
          height: 6px;
          background: #FFD700;
          border-radius: 50%;
          opacity: 0.6;
          animation: floatUp 8s linear infinite;
        }
        
        .floating-element:nth-child(odd) {
          background: #FFA500;
          animation-duration: 10s;
        }
        
        .floating-element:nth-child(2n) {
          width: 4px;
          height: 4px;
          animation-duration: 12s;
        }
        
        .carousel-slides {
          position: relative;
          width: 100%;
          flex: 1;
          z-index: 2;
          display: flex;
          align-items: center;
        }
        
        .slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          opacity: 0;
          transform: translateX(100px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          pointer-events: none;
        }
        
        .slide.active {
          opacity: 1;
          transform: translateX(0);
          pointer-events: auto;
          animation: slideIn 0.8s ease-out;
        }
        
        .slide-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          width: 100%;
          display: flex;
          align-items: center;
          gap: 60px;
        }
        
        .slide-text {
          flex: 1;
          padding-right: 40px;
        }
        
        .slide-video {
          flex: 1;
          position: relative;
        }
        
        h2 {
          font-size: 4rem;
          font-weight: 900;
          margin-bottom: 15px;
          position: relative;
          overflow: hidden;
        }
        
        h2 strong {
          display: inline-block;
          background: linear-gradient(45deg, #FFD700 0%, #FFA500 30%, #FFD700 60%, #FF8C00 100%);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientWave 4s ease-in-out infinite;
        }
        
        h3 {
          font-size: 1.1rem;
          color: #888;
          letter-spacing: 4px;
          margin-bottom: 30px;
          text-transform: uppercase;
        }
        
        .slide-description {
          color: #ccc;
          line-height: 1.8;
          font-size: 1.1rem;
          margin-bottom: 15px;
        }
        
        .slide-features {
          color: #aaa;
          line-height: 1.8;
          font-size: 1rem;
          margin-bottom: 30px;
        }
        
        .slide-btn {
          display: inline-block;
          padding: 18px 45px;
          background: linear-gradient(45deg, #FFD700, #FFA500, #FFD700);
          background-size: 200% 200%;
          color: #000;
          text-decoration: none;
          font-weight: bold;
          font-size: 1.1rem;
          border-radius: 50px;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 
            0 8px 25px rgba(255, 215, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          text-transform: uppercase;
          letter-spacing: 1px;
          border: none;
          cursor: pointer;
        }
        
        .slide-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: left 0.6s ease;
        }
        
        .slide-btn:hover {
          transform: translateY(-8px) scale(1.05);
          box-shadow: 
            0 15px 40px rgba(255, 215, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
          background-position: 100% 0;
        }
        
        .slide-btn:hover::before {
          left: 100%;
        }
        
        .video-container {
          position: relative;
          width: 120%;
          max-width: 800px;
          margin: 0 auto;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(255, 215, 0, 0.1);
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .video-container:hover {
          transform: scale(1.03) rotateY(5deg) rotateX(2deg);
          box-shadow: 
            0 30px 60px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(255, 215, 0, 0.3),
            0 0 50px rgba(255, 215, 0, 0.1);
          animation: videoGlow 2s infinite;
        }
        
        .video-container video {
          width: 100%;
          height: auto;
          border-radius: 20px;
          display: block;
        }
        
        .carousel-dots {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 15px;
          z-index: 3;
        }
        
        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }
        
        .dot.active {
          background: #FFD700;
          border-color: rgba(255, 215, 0, 0.5);
          animation: dotPulse 2s infinite;
        }
        
        .dot:hover {
          background: rgba(255, 215, 0, 0.7);
          transform: scale(1.2);
        }
        
        @media (max-width: 993px) {
          .slide-content {
            flex-direction: column;
            gap: 40px;
            text-align: center;
          }
          
          .slide-text {
            padding-right: 0;
          }
          
          h2 {
            font-size: 3rem;
          }
          
          .video-container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
          }
        }
        
        @media (max-width: 768px) {
          h2 {
            font-size: 2.5rem;
          }
          
          .slide-content {
            padding: 0 15px;
          }
          
          .video-container {
            width: 100%;
            max-width: 500px;
          }
          
          .carousel-dots {
            bottom: 20px;
          }
        }
      `}</style>

      <div className="carousel-container">
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-[60px] bg-gradient-to-b from-[#050815] via-[rgba(5,8,21,0.8)] to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-gradient-to-t from-[#050815] via-[rgba(5,8,21,0.8)] to-transparent"></div>
        </div>
        
        <div className="floating-elements" ref={floatingElementsRef}></div>
        
        <div className="carousel-slides">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className={`slide ${index === currentSlide ? 'active' : ''}`}
            >
              <div className="slide-content">
                <div className="slide-text">
                  <h2><strong>{product.title}</strong></h2>
                  <h3>{product.subtitle}</h3>
                  <p className="slide-description">{product.description}</p>
                  <p className="slide-features">{product.features}</p>
                  <button 
                    className="slide-btn"
                    onClick={handleButtonClick}
                  >
                    {product.buttonText}
                  </button>
                </div>
                <div className="slide-video">
                  <div className="video-container">
                    <video 
                      ref={el => videoRefs.current[index] = el}
                      autoPlay
                      muted
                      loop
                      playsInline
                      poster={product.videoPoster}
                    >
                      <source src={product.videoSrc} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="carousel-dots">
          {products.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => handleSlideChange(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsCarousel;