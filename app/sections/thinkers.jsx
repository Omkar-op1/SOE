'use client'
import React, { useEffect, useRef } from 'react';

const ThinkersClubSection = () => {
  const floatingElementsRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    // Create floating elements
    const container = floatingElementsRef.current;
    if (!container) return;
    
    const elementCount = 15;
    container.innerHTML = ""; // Clear existing elements

    for (let i = 0; i < elementCount; i++) {
      const element = document.createElement("div");
      element.className = "floating-element";
      element.style.left = Math.random() * 100 + "%";
      element.style.animationDelay = Math.random() * 8 + "s";
      element.style.animationDuration = (Math.random() * 4 + 8) + "s";
      container.appendChild(element);
    }

    // Scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
        }
      });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");
    elementsToAnimate.forEach(element => observer.observe(element));

    // Mouse parallax effect
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

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, []);

  // Ripple effect for button
  const handleButtonClick = (e) => {
    const btn = btnRef.current;
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
    <div className="min-h-screen bg-[#0a0a0a] font-sans overflow-x-hidden">
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
        
        @keyframes textFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes slideInWithGlow {
          0% {
            opacity: 0;
            transform: translateX(-100px);
          }
          70% {
            opacity: 0.8;
            transform: translateX(10px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes lineAppear {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        
        @keyframes paragraphFadeIn {
          0% {
            opacity: 0;
            transform: translateY(50px) rotateX(30deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
          }
        }
        
        @keyframes buttonReveal {
          0% {
            opacity: 0;
            transform: scale(0.5) rotate(-10deg);
          }
          70% {
            opacity: 1;
            transform: scale(1.1) rotate(2deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
        
        @keyframes imageSlideIn {
          0% {
            opacity: 0;
            transform: translateX(100px) rotateY(-30deg);
          }
          70% {
            opacity: 0.8;
            transform: translateX(-10px) rotateY(5deg);
          }
          100% {
            opacity: 1;
            transform: translateX(0) rotateY(0deg);
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
        
        .w3-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 3;
        }
        
        .w3-row {
          display: flex;
          align-items: center;
          gap: 60px;
        }
        
        .w3-col {
          flex: 1;
        }
        
        .m6 {
          flex: 0 0 50%;
        }
        
        .desktop-padding {
          padding-right: 40px;
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
          animation: 
            textReveal 2s ease-out forwards,
            gradientWave 4s ease-in-out infinite,
            textFloat 6s ease-in-out infinite;
          transform: translateY(100px);
          opacity: 0;
        }
        
        h3 {
          font-size: 1.1rem;
          color: #888;
          letter-spacing: 4px;
          margin-bottom: 30px;
          position: relative;
          overflow: hidden;
          animation: slideInWithGlow 1.5s ease-out 0.5s forwards;
          opacity: 0;
          transform: translateX(-100px);
        }
        
        h3::before {
          content: '';
          position: absolute;
          top: 50%;
          left: -100%;
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, #FFD700, transparent);
          animation: lineAppear 2s ease-out 1.5s forwards;
        }
        
        p {
          color: #ccc;
          line-height: 1.8;
          font-size: 1.1rem;
          margin-bottom: 25px;
          position: relative;
          opacity: 0;
          transform: translateY(50px);
        }
        
        p:nth-of-type(1) {
          animation: paragraphFadeIn 1s ease-out 1s forwards;
        }
        
        p:nth-of-type(2) {
          animation: paragraphFadeIn 1s ease-out 1.3s forwards;
        }
        
        .w3-padding {
          padding-top: 40px;
          opacity: 0;
          animation: buttonReveal 1.2s ease-out 1.8s forwards;
        }
        
        .sot-btn {
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
        }
        
        .sot-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: left 0.6s ease;
        }
        
        .sot-btn::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.6s ease, height 0.6s ease;
        }
        
        .sot-btn:hover {
          transform: translateY(-8px) scale(1.05);
          box-shadow: 
            0 15px 40px rgba(255, 215, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
          background-position: 100% 0;
        }
        
        .sot-btn:hover::before {
          left: 100%;
        }
        
        .sot-btn:hover::after {
          width: 300px;
          height: 300px;
        }
        
        .sot-btn:active {
          transform: translateY(-4px) scale(1.02);
        }
        
        .w3-col:last-child {
          position: relative;
          opacity: 0;
          animation: imageSlideIn 1.5s ease-out 2s forwards;
        }
        
        .w3-col img {
          width: 100%;
          height: auto;
          border-radius: 20px;
          position: relative;
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          filter: brightness(0.9) contrast(1.1) saturate(0.8);
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(255, 215, 0, 0.1);
        }
        
        .w3-col img:hover {
          transform: scale(1.03) rotateY(5deg) rotateX(2deg);
          filter: brightness(1.1) contrast(1.2) saturate(1);
          box-shadow: 
            0 30px 60px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(255, 215, 0, 0.3),
            0 0 50px rgba(255, 215, 0, 0.1);
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
        
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(50px);
          transition: all 1s ease-out;
        }
        
        .animate-on-scroll.animated {
          opacity: 1;
          transform: translateY(0);
        }
        
        @media (max-width: 993px) {
          .w3-row {
            flex-direction: column;
            gap: 40px;
            text-align: center;
          }
          
          .m6 {
            flex: 1;
          }
          
          .desktop-padding {
            padding-right: 0;
          }
          
          h2 {
            font-size: 3rem;
          }
        }
        
        @media (max-width: 768px) {
          h2 {
            font-size: 2.5rem;
          }
          
          .sot-section {
            padding: 60px 0;
          }
        }
      `}</style>

      <section id="thinkers-club-details" className="sot-section sot-section-light">
        <div className="floating-elements" ref={floatingElementsRef}></div>
        <div className="w3-container">
          <div className="w3-row">
            <div className="w3-col m6 desktop-padding">
              <h2 className="animate-on-scroll"><strong>Thinkers Club</strong></h2>
              <h3 className="animate-on-scroll">IDEA GENERATING GROUP</h3>
              <p className="animate-on-scroll">
                A heaven for aspiring entrepreneurs! The most important aspect of
                every venture is the business idea and its implementation
                strategy.
              </p>
              <p className="animate-on-scroll">
                With the help of our team of analysts and experts we provide
                business ideas and its detailed execution plan every day inside
                the Idea Generating Group.
              </p>
              <div className="w3-padding">
                <a 
                  href="#join" 
                  className="sot-btn"
                  onClick={handleButtonClick}
                  ref={btnRef}
                >
                  Join Thinkers Club
                </a>
              </div>
            </div>
            <div className="w3-col m6 animate-on-scroll">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Thinkers Club"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThinkersClubSection;