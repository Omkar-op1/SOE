"use client";
import React, { useEffect, useRef } from "react";
import BrandButton from '@/components/button';

export default function Hero() {
  const floatingRef = useRef(null);
  const btnRef = useRef(null);
  const welcomeRef = useRef(null);

  useEffect(() => {
    // Floating particles creation
    const container = floatingRef.current;
    const count = 30;
    container.innerHTML = "";

    for (let i = 0; i < count; i++) {
      const el = document.createElement("div");
      el.className = "absolute w-[15px] h-[15px] bg-[rgba(255,215,0,0.3)] rounded-full filter drop-shadow-[0_0_6px_rgba(255,215,0,0.5)] animate-floating";
      el.style.left = `${Math.random() * 100}%`;
      el.style.animationDelay = `${Math.random() * 8}s`;
      el.style.animationDuration = `${Math.random() * 4 + 8}s`;
      container.appendChild(el);
    }

    // Welcome text animation
    const welcomeText = welcomeRef.current;
    if (welcomeText) {
      welcomeText.style.opacity = "0";
      welcomeText.style.transform = "translateY(30px)";
      
      setTimeout(() => {
        welcomeText.style.transition = "opacity 1s ease, transform 1s ease";
        welcomeText.style.opacity = "1";
        welcomeText.style.transform = "translateY(0)";
        
        // Animate the gradient after text appears
        setTimeout(() => {
          welcomeText.querySelector('.gradient-text').classList.add('animate-gradient');
        }, 300);
      }, 500);
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

    // Mouse parallax effect
    let mouseX = 0;
    let mouseY = 0;

    function onMouseMove(e) {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    }

    window.addEventListener("mousemove", onMouseMove);

    function animateParallax() {
      const elements = container.querySelectorAll(".absolute");
      elements.forEach((el, idx) => {
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
    ripple.style.background = "rgba(255, 215, 0, 0.3)";
    ripple.style.borderRadius = "50%";
    ripple.style.transform = "scale(0)";
    ripple.style.animation = "ripple 0.6s linear";
    ripple.style.pointerEvents = "none";
    ripple.className = "ripple";

    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  }

  return (
    <section className="relative py-[100px] bg-gradient-to-b from-gray-900 to-[#0a0a0a] overflow-hidden font-sans text-[#ccc]">
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
        <div className="flex items-center gap-[60px] md:flex-row flex-col">
          {/* Text Content */}
          <div className="md:flex-[0_0_50%] flex-1 md:pr-[40px]">
            <div ref={welcomeRef} className="transition-all duration-1000 ease-out">
              <h2 className="text-[3rem] md:text-[4rem] font-black mb-[15px] leading-[1.1]">
                <span className="block">
                  Welcome to
                </span>
                <span className="gradient-text inline-block mt-4 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] bg-[length:300%_300%] bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  School of Entrepreneurs
                </span>
              </h2>
            </div>
            <p className="text-[1.3rem] leading-[1.5] text-[#ddd] max-w-[600px] mb-[30px] tracking-[0.04em] opacity-0 translate-y-[30px] animate-on-scroll">
              Empowering the next generation of innovators, leaders, and dreamers. Start your journey of entrepreneurship today.
            </p>
            <br />
            <br />
            <div className="opacity-0 translate-y-[30px] animate-on-scroll" style={{ animationDelay: "0.6s" }}>
              <BrandButton
                ref={btnRef}
                label="Join Us"
                onClick={handleButtonClick}
                className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-gray-900 hover:from-[#FFA500] hover:to-[#FFD700]"
              />
            </div>
          </div>

          {/* Logo Area */}
          <div className="md:flex-[0_0_50%] flex-1 flex justify-center items-center md:mt-[-50px]">
            <div className="relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,215,0,0.2)_0%,transparent_70%)] rounded-full blur-[40px] z-[-1] animate-pulse"></div>
              <img
                src="/theidea.webp"
                alt="School of Entrepreneurs Logo"
                className="w-[400px] h-auto object-contain opacity-0 translate-y-[30px] animate-on-scroll"
                style={{ animationDelay: "0.4s" }}
              />
            </div>
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
        
        .animate-floating {
          animation: floatUp 15s linear infinite;
        }
        
        .animate-on-scroll {
          animation: fadeInUp 1s ease forwards;
        }
        
        .animate-gradient {
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
        
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}