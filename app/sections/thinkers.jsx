"use client";
import React, { useEffect, useRef } from "react";
import BrandButton from '@/components/button';


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
      element.className = "absolute w-[15px] h-[15px] bg-[rgba(255,215,0,0.1)] rounded-full filter drop-shadow-[0_0_6px_rgba(255,215,0,0.3)] animate-floating";
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
          entry.target.classList.add("opacity-100", "translate-y-0");
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
      const floatingElements = container.querySelectorAll(".absolute");
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
    <section className="relative py-[100px] bg-gradient-to-br from-[#1a1a1a] via-[#2d2d2d] to-[#0a0a0a] overflow-hidden font-sans text-[#ccc] before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_25%_25%,rgba(255,215,0,0.08)_0%,transparent_40%),radial-gradient(circle_at_75%_75%,rgba(255,165,0,0.06)_0%,transparent_40%),radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.04)_0%,transparent_60%)] before:animate-backgroundFlow before:z-0 after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(45deg,rgba(255,215,0,0.02)_25%,transparent_25%),linear-gradient(-45deg,rgba(255,215,0,0.02)_25%,transparent_25%),linear-gradient(45deg,transparent_75%,rgba(255,215,0,0.02)_75%),linear-gradient(-45deg,transparent_75%,rgba(255,215,0,0.02)_75%)] after:bg-[length:60px_60px] after:animate-patternShift after:pointer-events-none after:z-0">
      <div className="max-w-[1200px] mx-auto px-5 relative z-[3]">
        <div className="flex items-center gap-[60px] md:flex-row flex-col">
          <div className="md:flex-[0_0_50%] flex-1 md:pr-[40px]">
            <h2 className="animate-on-scroll text-[3rem] md:text-[4rem] font-black mb-[15px] relative overflow-hidden">
              Thinkers <strong className="inline-block bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] bg-[length:300%_300%] bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] animate-[textReveal_2s_ease-out_forwards,gradientWave_4s_ease-in-out_infinite,textFloat_6s_ease-in-out_infinite] translate-y-[100px] opacity-0">Club</strong>
            </h2>
            <h3 className="animate-on-scroll text-[1.1rem] text-[#888] tracking-[4px] mb-[30px] relative overflow-hidden animate-[slideInWithGlow_1.5s_ease-out_0.5s_forwards] opacity-0 -translate-x-[100px] before:content-[''] before:absolute before:top-1/2 before:-left-full before:w-full before:h-[1px] before:bg-[linear-gradient(90deg,transparent,#FFD700,transparent)] before:animate-[lineAppear_2s_ease-out_1.5s_forwards] before:opacity-0 before:-translate-y-1/2">
              Unlock Your Mind
            </h3>
            <p className="animate-on-scroll text-[1.3rem] leading-[1.5] text-[#ddd] max-w-[600px] md:mb-[40px] mb-[30px] tracking-[0.04em] animate-[fadeInUp_1.2s_ease_forwards] opacity-0 animation-delay-[2s]">
              Explore diverse topics from neuroscience to philosophy, art, psychology, and beyond, cultivating the ultimate mindset.
            </p>
            {/* <button
              className="relative overflow-hidden bg-gradient-to-br from-[#FFA500] to-[#FFD700] text-[#222] font-black text-[1.2rem] py-5 px-[50px] rounded-[60px] cursor-pointer border-none outline-none shadow-[inset_0_0_10px_#fff,0_4px_15px_rgba(255,165,0,0.5)] select-none transition-all duration-300 ease-in-out z-[2] tracking-[0.06em] hover:-translate-y-2 hover:shadow-[inset_0_0_12px_#fff,0_8px_30px_rgba(255,165,0,0.7)]"
              onClick={handleButtonClick}
              ref={btnRef}
            >
              Join Us
            </button> */}
             <BrandButton
      label="Welcome to Thinkers Club"
      onClick={() => router.push('https://admin.theideacompany.io/login')}
      
    />
          </div>
          <div className="md:flex-[0_0_50%] flex-1"></div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none overflow-visible z-[1]" ref={floatingElementsRef}></div>
    </section>
  );
}