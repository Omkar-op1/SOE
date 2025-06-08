'use client'
import React, { useEffect, useRef, useState } from 'react';

const FeaturesCarousel = () => {
  const floatingElementsRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const timeoutRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const videoRefs = useRef([]);

  const features = [
    {
      title: "Thinkers Club",
      subtitle: "IDEA GENERATING GROUP",
      description: [
        "A heaven for aspiring entrepreneurs with daily business ideas",
        "Detailed execution plans provided by our team of analysts",
        "Collaborative environment to refine and develop concepts",
        "Access to exclusive brainstorming sessions and workshops"
      ],
      video: "/videos/thinkersclub.mp4"
    },
    {
      title: "Investors Table",
      subtitle: "DIRECT INVESTOR ACCESS",
      description: [
        "Get Direct Access to Investors in your specific sector",
        "Schedule meetings through our inbuilt chat system",
        "Complete legal and documentation services",
        "Verified investor network with transparent terms"
      ],
      video: "/videos/investor.mp4"
    },
    {
      title: "Idea Community",
      subtitle: "TALENT ACQUISITION",
      description: [
        "Hire from a plethora of Working Professionals",
        "Get access to professionals who are Willing to work in Startups",
        "Hand-Pick and Create your Dream Team"
      ],
      video: "/videos/idea-community.mp4"
    }
  ];

  useEffect(() => {
    // Create floating elements
    const container = floatingElementsRef.current;
    if (!container) return;
    
    const elementCount = 15;
    container.innerHTML = "";

    for (let i = 0; i < elementCount; i++) {
      const element = document.createElement("div");
      element.className = "floating-element";
      element.style.left = Math.random() * 100 + "%";
      element.style.animationDelay = Math.random() * 8 + "s";
      element.style.animationDuration = (Math.random() * 4 + 8) + "s";
      container.appendChild(element);
    }

    // Scroll-triggered animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
          // Play video when it enters viewport
          const index = Array.from(document.querySelectorAll('.video-container')).indexOf(entry.target);
          if (index >= 0 && videoRefs.current[index]) {
            videoRefs.current[index].play().catch(e => console.log("Video play error:", e));
          }
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -100px 0px" });

    const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");
    elementsToAnimate.forEach(element => observer.observe(element));

    // Auto-rotate features (3 seconds)
    const startRotation = () => {
      if (!isHovering) {
        timeoutRef.current = setTimeout(() => {
          goToNext();
          startRotation();
        }, 3000);
      }
    };

    startRotation();

    return () => {
      observer.disconnect();
      clearTimeout(timeoutRef.current);
    };
  }, [isHovering]);

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % features.length);
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  const goToIndex = (index) => {
    setActiveIndex(index);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => goToNext(), 3000);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) goToNext();
    else if (touchEndX.current - touchStartX.current > 50) goToPrev();
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => goToNext(), 3000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans overflow-x-hidden">
      <style jsx>{`
        @keyframes backgroundFlow {
          0% { transform: rotate(0deg) scale(1); opacity: 0.5; }
          100% { transform: rotate(2deg) scale(1.05); opacity: 0.8; }
        }
        
        @keyframes patternShift {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(60px) translateY(60px); }
        }
        
        @keyframes textReveal {
          0% { transform: translateY(100px) rotateX(-90deg); opacity: 0; }
          50% { transform: translateY(20px) rotateX(-20deg); opacity: 0.7; }
          100% { transform: translateY(0) rotateX(0deg); opacity: 1; }
        }
        
        @keyframes gradientWave {
          0%, 100% { background-position: 0% 50%; filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.3)); }
          50% { background-position: 100% 50%; filter: drop-shadow(0 0 20px rgba(255, 215, 0, 0.6)); }
        }
        
        @keyframes slideInWithGlow {
          0% { opacity: 0; transform: translateX(-100px); }
          70% { opacity: 0.8; transform: translateX(10px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes lineAppear {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        
        @keyframes floatUp {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
        }
        
        .sot-section {
          position: relative;
          padding: 100px 0;
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 30%, #1a1a1a 70%, #0a0a0a 100%);
          overflow: hidden;
        }
        
        .sot-section::before {
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
        
        .sot-section::after {
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
        
        .feature-container {
          position: relative;
          width: 100%;
          height: 600px;
          overflow: hidden;
          border-radius: 20px;
        }
        
        .feature-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
          padding: 0 5%;
          box-sizing: border-box;
        }
        
        .feature-content {
          width: 55%;
          padding: 40px;
          background: rgba(20, 20, 20, 0.85);
          border-radius: 15px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 215, 0, 0.2);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          transform-style: preserve-3d;
          transform: perspective(1000px) rotateY(-5deg);
        }
        
        .feature-slide h2 {
          font-size: 3rem;
          margin-bottom: 15px;
          color: #FFD700;
          background: linear-gradient(45deg, #FFD700, #FFA500, #FFD700);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientWave 4s ease-in-out infinite;
        }
        
        .feature-slide h3 {
          font-size: 1.1rem;
          color: #aaa;
          margin-bottom: 20px;
          letter-spacing: 3px;
          position: relative;
        }
        
        .feature-slide h3::before {
          content: '';
          position: absolute;
          top: 50%;
          left: -100%;
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, #FFD700, transparent);
          animation: lineAppear 2s ease-out forwards;
        }
        
        .feature-slide ul {
          list-style-type: none;
          padding: 0;
          margin: 0 0 30px 0;
        }
        
        .feature-slide li {
          position: relative;
          padding-left: 30px;
          margin-bottom: 15px;
          color: #eee;
          line-height: 1.6;
          font-size: 1.1rem;
        }
        
        .feature-slide li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #FFD700;
          font-weight: bold;
        }
        
        .video-container {
          width: 40%;
          height: 70%;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
          transform-style: preserve-3d;
          transform: perspective(1000px) rotateY(5deg);
          transition: all 0.5s ease;
          position: relative;
        }
        
        .video-container:hover {
          transform: perspective(1000px) rotateY(5deg) scale(1.02);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.7);
        }
        
        .video-container video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        
        .navigation-dots {
          display: flex;
          justify-content: center;
          margin-top: 30px;
          gap: 15px;
        }
        
        .dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .dot::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #FFD700;
          border-radius: 50%;
          transform: scale(0);
          transition: transform 0.3s ease;
        }
        
        .dot.active::after {
          transform: scale(1);
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
        
        @media (max-width: 1024px) {
          .feature-slide {
            flex-direction: column;
            justify-content: center;
            gap: 30px;
            padding: 20px;
          }
          
          .feature-content, .video-container {
            width: 90%;
            max-width: 300px;
            transform: none !important;
          }
          
          .video-container {
            height: 250px;
          }
        }
        
        @media (max-width: 768px) {
          .feature-container {
            height: auto;
            min-height: 800px;
          }
          
          .feature-content {
            padding: 25px;
          }
          
          .feature-slide h2 {
            font-size: 2.2rem;
          }
        }
      `}</style>

      <section className="sot-section">
        <div className="floating-elements" ref={floatingElementsRef}></div>
        <div className="w3-container">
          <div className="feature-container animate-on-scroll"
               onMouseEnter={() => setIsHovering(true)}
               onMouseLeave={() => setIsHovering(false)}
               onTouchStart={handleTouchStart}
               onTouchMove={handleTouchMove}
               onTouchEnd={handleTouchEnd}>
            
            {features.map((feature, index) => (
              <div 
                key={index}
                className="feature-slide"
                style={{
                  transform: `translateX(${(index - activeIndex) * 100}%)`,
                  zIndex: index === activeIndex ? 5 : 4
                }}
              >
                <div className="feature-content">
                  <h2>{feature.title}</h2>
                  <h3>{feature.subtitle}</h3>
                  <ul>
                    {feature.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="video-container animate-on-scroll">
                  <video 
                    ref={el => videoRefs.current[index] = el}
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={feature.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation dots */}
          <div className="navigation-dots">
            {features.map((_, index) => (
              <div 
                key={index}
                className={`dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => goToIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesCarousel;