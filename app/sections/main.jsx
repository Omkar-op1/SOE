'use client'
import React, { useEffect, useRef } from 'react';

const IdeaCompanyCTA = () => {
  const floatingElementsRef = useRef(null);
  const videoRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    // Create floating elements
    const container = floatingElementsRef.current;
    if (!container) return;
    
    const elementCount = 18;
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
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
          
          if (entry.target.classList.contains("video-container") && videoRef.current) {
            videoRef.current.play();
          }
        } else {
          if (entry.target.classList.contains("video-container") && videoRef.current) {
            videoRef.current.pause();
          }
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

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, []);

  // Ripple effect for buttons
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
    <div className="min-h-screen font-sans overflow-hidden">
      <style jsx>{`
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
            filter: drop-shadow(0 0 10px rgba(100, 116, 139, 0.3));
          }
          50% { 
            background-position: 100% 50%;
            filter: drop-shadow(0 0 20px rgba(100, 116, 139, 0.6));
          }
        }
        
        @keyframes textFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
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
        
        @keyframes videoSlideIn {
          0% {
            opacity: 0;
            transform: translateX(100px) rotateY(-30deg) scale(0.9);
          }
          70% {
            opacity: 0.8;
            transform: translateX(-10px) rotateY(5deg) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translateX(0) rotateY(0deg) scale(1);
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
          0%, 100% { box-shadow: 0 0 0 0 rgba(100, 116, 139, 0.3); }
          50% { box-shadow: 0 0 30px 10px rgba(100, 116, 139, 0.5); }
        }
        
        @keyframes highlightPulse {
          0%, 100% { 
            color: #64748B;
            text-shadow: 0 0 10px rgba(100, 116, 139, 0.3);
          }
          50% { 
            color: #94A3B8;
            text-shadow: 0 0 20px rgba(100, 116, 139, 0.6);
          }
        }
        
        .cta-section {
          position: relative;
          padding: 120px 0;
          background: transparent;
          overflow: hidden;
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
          gap: 80px;
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
        
        h1 {
          font-size: 3rem;
          font-weight: 900;
          margin-bottom: 30px;
          position: relative;
          overflow: hidden;
          line-height: 1.1;
        }
        
        h1 .question {
          display: block;
          background: linear-gradient(45deg, #64748B 0%, #94A3B8 30%, #64748B 60%, #94A3B8 100%);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: 
            textReveal 2s ease-out 0.3s forwards,
            gradientWave 4s ease-in-out infinite,
            textFloat 6s ease-in-out infinite;
          transform: translateY(100px);
          opacity: 0;
        }
        
        .subtitle {
          font-size: 1.3rem;
          color: #ccc;
          margin-bottom: 25px;
          line-height: 1.6;
          position: relative;
          opacity: 0;
          transform: translateY(50px);
          text-align: center;
        }
        
        .subtitle:nth-of-type(1) {
          animation: paragraphFadeIn 1s ease-out 1s forwards;
        }
        
        .subtitle .highlight {
          font-weight: bold;
          animation: highlightPulse 3s ease-in-out infinite;
        }
        
        .description {
          color: #aaa;
          line-height: 1.8;
          font-size: 1.1rem;
          margin-bottom: 20px;
          opacity: 0;
          transform: translateY(50px);
          text-align: center;
        }
        
        .description:nth-of-type(2) {
          animation: paragraphFadeIn 1s ease-out 1.3s forwards;
        }
        
        .description:nth-of-type(3) {
          animation: paragraphFadeIn 1s ease-out 1.6s forwards;
        }
        
        .question-emphasis {
          color: #64748B;
          font-weight: bold;
          font-size: 1.2rem;
          margin-bottom: 40px;
          opacity: 0;
          transform: translateY(50px);
          animation: paragraphFadeIn 1s ease-out 1.9s forwards;
          text-align: center;
        }
        
        .w3-padding {
          padding-top: 20px;
          opacity: 0;
          animation: buttonReveal 1.2s ease-out 2.2s forwards;
          display: flex;
          justify-content: center;
        }
        
        .button-group {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          justify-content: center;
        }
        
        .cta-btn {
          display: inline-block;
          padding: 18px 45px;
          background: linear-gradient(45deg, #64748B, #94A3B8, #64748B);
          background-size: 200% 200%;
          color: #fff;
          text-decoration: none;
          font-weight: bold;
          font-size: 1.1rem;
          border-radius: 50px;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 
            0 8px 25px rgba(100, 116, 139, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          text-transform: uppercase;
          letter-spacing: 1px;
          border: none;
          cursor: pointer;
        }
        
        .cta-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: left 0.6s ease;
        }
        
        .cta-btn:hover {
          transform: translateY(-8px) scale(1.05);
          box-shadow: 
            0 15px 40px rgba(100, 116, 139, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
          background-position: 100% 0;
        }
        
        .cta-btn:hover::before {
          left: 100%;
        }
        
        .secondary-btn {
          display: inline-block;
          padding: 18px 45px;
          background: transparent;
          color: #64748B;
          border: 2px solid #64748B;
          text-decoration: none;
          font-weight: bold;
          font-size: 1.1rem;
          border-radius: 50px;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
        }
        
        .secondary-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(100, 116, 139, 0.1), transparent);
          transition: left 0.6s ease;
        }
        
        .secondary-btn:hover {
          transform: translateY(-8px) scale(1.05);
          background: rgba(100, 116, 139, 0.1);
          box-shadow: 0 15px 40px rgba(100, 116, 139, 0.2);
        }
        
        .secondary-btn:hover::before {
          left: 100%;
        }
        
        .w3-col:last-child {
          position: relative;
          opacity: 0;
          animation: videoSlideIn 1.5s ease-out 2.5s forwards;
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
            0 0 0 1px rgba(100, 116, 139, 0.1);
          transform-style: preserve-3d;
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .video-container:hover {
          transform: scale(1.03) rotateY(5deg) rotateX(2deg);
          box-shadow: 
            0 30px 60px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(100, 116, 139, 0.3),
            0 0 50px rgba(100, 116, 139, 0.1);
          animation: videoGlow 2s infinite;
        }
        
        .video-container video {
          width: 100%;
          height: auto;
          border-radius: 20px;
          display: block;
          transition: transform 0.5s ease;
        }
        
        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, rgba(0,0,0,0.4), rgba(0,0,0,0.1));
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 20px;
        }
        
        .video-container:hover .video-overlay {
          opacity: 1;
        }
        
        .play-icon {
          width: 80px;
          height: 80px;
          background: rgba(100, 116, 139, 0.7);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: scale(0.8);
          transition: transform 0.3s ease;
        }
        
        .video-container:hover .play-icon {
          transform: scale(1);
        }
        
        .play-icon::after {
          content: '';
          width: 0;
          height: 0;
          border-top: 15px solid transparent;
          border-left: 25px solid #000;
          border-bottom: 15px solid transparent;
          margin-left: 8px;
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
          background: #64748B;
          border-radius: 50%;
          opacity: 0.6;
          animation: floatUp 8s linear infinite;
        }
        
        .floating-element:nth-child(odd) {
          background: #94A3B8;
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
          
          h1 {
            font-size: 2.5rem;
          }
          
          .video-container {
            max-width: 600px;
            margin: 0 auto;
          }
          
          .button-group {
            justify-content: center;
          }
        }
        
        @media (max-width: 768px) {
          h1 {
            font-size: 2rem;
          }
          
          .cta-section {
            padding: 80px 0;
          }
          
          .button-group {
            flex-direction: column;
            align-items: center;
          }
          
          .cta-btn, .secondary-btn {
            width: 100%;
            max-width: 300px;
            text-align: center;
          }
          
          .video-container {
            width: 100%;
            max-width: 500px;
          }
        }
      `}</style>

      <section className="cta-section">
        <div className="floating-elements" ref={floatingElementsRef}></div>
        <div className="w3-container">
          <div className="w3-row">
            <div className="w3-col m6 desktop-padding">
              <h1 className="animate-on-scroll">
                <span className="question">Why can't you?</span>
              </h1>
              
              <p className="subtitle animate-on-scroll">
                In this era of entrepreneurship, <span className="highlight">how can you afford being left behind?</span>
              </p>
              
              <p className="description animate-on-scroll">
                Anyone can become an entrepreneur, why can't you?
              </p>
              
              <p className="description animate-on-scroll">
                Owning a successful venture has never been easier. The market is ready, The investors are ready, The consumers are ready.
              </p>
              
              <p className="question-emphasis animate-on-scroll">
                Are you ready?
              </p>
              
              <div className="w3-padding">
                <div className="button-group">
                  <button 
                    className="cta-btn"
                    onClick={handleButtonClick}
                    ref={btnRef}
                  >
                    Start Your Journey Today
                  </button>
                  <button 
                    className="secondary-btn"
                    onClick={handleButtonClick}
                  >
                    Watch Success Stories
                  </button>
                </div>
              </div>
            </div>
            <div className="w3-col m6 animate-on-scroll video-container">
              <video 
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                poster="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                className="video-element"
              >
                <source src="Main.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="video-overlay">
                <div className="play-icon"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default IdeaCompanyCTA;