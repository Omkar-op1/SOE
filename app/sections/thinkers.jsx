"use client";
import React, { useEffect, useRef } from "react";

export default function Thinkers() {
  const floatingElementsRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    // Create floating circles dynamically
    const container = floatingElementsRef.current;
    const elementCount = 15;
    container.innerHTML = ""; // Clear previous if any

    for (let i = 0; i < elementCount; i++) {
      const element = document.createElement("div");
      element.className = "floating-element";
      element.style.left = `${Math.random() * 100}%`;
      element.style.animationDelay = `${Math.random() * 8}s`;
      element.style.animationDuration = `${Math.random() * 4 + 8}s`;
      container.appendChild(element);
    }

    // Scroll-triggered animations using Intersection Observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    // Mouse parallax effect on floating elements
    let mouseX = 0;
    let mouseY = 0;

    function onMouseMove(e) {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    }
    window.addEventListener("mousemove", onMouseMove);

    function animateParallax() {
      const floatingElements = container.querySelectorAll(".floating-element");
      floatingElements.forEach((el, idx) => {
        const speed = ((idx % 3) + 1) * 0.3;
        const x = mouseX * speed * 10;
        const y = mouseY * speed * 10;
        el.style.transform = `translate(${x}px, ${y}px)`;
      });
      requestAnimationFrame(animateParallax);
    }
    animateParallax();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      observer.disconnect();
    };
  }, []);

  // Ripple effect for button
  function handleButtonClick(e) {
    const btn = btnRef.current;
    const ripple = document.createElement("span");
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.position = "absolute";
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.background = "rgba(255, 255, 255, 0.5)";
    ripple.style.borderRadius = "50%";
    ripple.style.transform = "scale(0)";
    ripple.style.animation = "ripple 0.6s linear";
    ripple.style.pointerEvents = "none";
    ripple.className = "ripple";

    btn.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  }

  return (
    <>
      <style>{`
        * {
          margin: 0; padding: 0; box-sizing: border-box;
        }
        .sot-section {
          position: relative;
          padding: 100px 0;
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 30%, #1a1a1a 70%, #0a0a0a 100%);
          overflow: hidden;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #ccc;
        }
        .sot-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background:
            radial-gradient(circle at 25% 25%, rgba(255, 215, 0, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 75% 75%, rgba(255, 165, 0, 0.06) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.04) 0%, transparent 60%);
          animation: backgroundFlow 12s ease-in-out infinite alternate;
          z-index: 0;
        }
        @keyframes backgroundFlow {
          0% { transform: rotate(0deg) scale(1); opacity: 0.5; }
          100% { transform: rotate(2deg) scale(1.05); opacity: 0.8; }
        }
        .sot-section::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image:
            linear-gradient(45deg, rgba(255, 215, 0, 0.02) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(255, 215, 0, 0.02) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(255, 215, 0, 0.02) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(255, 215, 0, 0.02) 75%);
          background-size: 60px 60px;
          animation: patternShift 20s linear infinite;
          pointer-events: none;
          z-index: 0;
        }
        @keyframes patternShift {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(60px) translateY(60px); }
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
        h3::before {
          content: '';
          position: absolute;
          top: 50%;
          left: -100%;
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, #FFD700, transparent);
          animation: lineAppear 2s ease-out 1.5s forwards;
          opacity: 0;
          transform: translateY(-50%);
        }
        @keyframes lineAppear {
          0% {
            opacity: 0;
            left: -100%;
          }
          100% {
            opacity: 1;
            left: 0;
          }
        }
        p {
          font-size: 1.3rem;
          line-height: 1.5;
          color: #ddd;
          max-width: 600px;
          opacity: 0;
          animation: fadeInUp 1.2s ease forwards;
          animation-delay: 2s;
          margin-bottom: 40px;
          letter-spacing: 0.04em;
        }
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .sot-button {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #FFA500, #FFD700);
          color: #222;
          font-weight: 900;
          font-size: 1.2rem;
          padding: 20px 50px;
          border-radius: 60px;
          cursor: pointer;
          border: none;
          outline: none;
          box-shadow:
            inset 0 0 10px #fff,
            0 4px 15px rgba(255, 165, 0, 0.5);
          user-select: none;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          z-index: 2;
          letter-spacing: 0.06em;
        }
        .sot-button:hover {
          transform: translateY(-8px);
          box-shadow:
            inset 0 0 12px #fff,
            0 8px 30px rgba(255, 165, 0, 0.7);
        }
        .ripple {
          position: absolute;
          pointer-events: none;
          border-radius: 50%;
          transform: scale(0);
          animation: ripple 0.6s linear;
          background: rgba(255, 255, 255, 0.4);
          z-index: 10;
        }
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
        .floating-elements {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          pointer-events: none;
          overflow: visible;
          z-index: 1;
        }
        .floating-element {
          position: absolute;
          width: 15px;
          height: 15px;
          background: rgba(255, 215, 0, 0.1);
          border-radius: 50%;
          filter: drop-shadow(0 0 6px rgba(255, 215, 0, 0.3));
          animation-name: floatingUpDown;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
        @keyframes floatingUpDown {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .animate-on-scroll.animated {
          opacity: 1;
          transform: translateY(0);
        }
        @media (max-width: 768px) {
          .w3-row {
            flex-direction: column;
          }
          .m6 {
            flex: 1 1 100%;
            padding-right: 0;
          }
          h2 {
            font-size: 3rem;
          }
          p {
            max-width: 100%;
          }
        }
      `}</style>

      <section className="sot-section">
        <div className="w3-container">
          <div className="w3-row">
            <div className="w3-col m6 desktop-padding">
              <h2 className="animate-on-scroll">
                Thinkers <strong>Club</strong>
              </h2>
              <h3 className="animate-on-scroll">Unlock Your Mind</h3>
              <p className="animate-on-scroll">
                Explore diverse topics from neuroscience to philosophy, art, psychology, and beyond, cultivating the ultimate mindset.
              </p>
              <button
                className="sot-button"
                onClick={handleButtonClick}
                ref={btnRef}
              >
                Join Us
              </button>
            </div>
            <div className="w3-col m6"></div>
          </div>
        </div>
        <div className="floating-elements" ref={floatingElementsRef}></div>
      </section>
    </>
  );
}
