"use client";
import React, { useEffect, useRef } from "react";
import BrandButton from '@/components/button';

export default function Hero() {
  const floatingRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const container = floatingRef.current;
    const count = 15;
    container.innerHTML = "";

    for (let i = 0; i < count; i++) {
      const el = document.createElement("div");
      el.className =
        "absolute w-[15px] h-[15px] bg-[rgba(255,215,0,0.1)] rounded-full filter drop-shadow-[0_0_6px_rgba(255,215,0,0.3)] animate-floating";
      el.style.left = `${Math.random() * 100}%`;
      el.style.animationDelay = `${Math.random() * 8}s`;
      el.style.animationDuration = `${Math.random() * 4 + 8}s`;
      container.appendChild(el);
    }

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
      
      {/* Checkered pattern transition overlay */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        {/* Top fade - subtle */}
        <div className="absolute top-0 left-0 right-0 h-[5px] bg-gradient-to-b from-[#050815] via-[rgba(5,8,21,0.7)] to-transparent z-[1]"></div>
        
        {/* Bottom fade - stronger transition */}
        <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-[#050815] via-[rgba(5,8,21,0.9)] to-transparent z-[1]"></div>
       
      </div>

      <div className="max-w-[1200px] mx-auto px-5 relative z-[3]">
        <div className="flex items-center gap-[60px] md:flex-row flex-col">
          {/* Text Content */}
          <div className="md:flex-[0_0_50%] flex-1 md:pr-[40px]">
            <h2 className="text-[3rem] md:text-[4rem] font-black mb-[15px] leading-[1.1]">
              <span className="inline-block opacity-0 translate-y-[30px] animate-[fadeInUp_1s_ease_forwards]">
                Welcome to{" "}
                <span className="bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] bg-[length:300%_300%] bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] animate-[gradientWave_4s_ease-in-out_infinite] block">
                  School of Entrepreneurs
                </span>
              </span>
            </h2>
            <p className="text-[1.3rem] leading-[1.5] text-[#ddd] max-w-[600px] mb-[30px] tracking-[0.04em] opacity-0 translate-y-[30px] animate-[fadeInUp_1.2s_ease_forwards_0.3s]">
              Empowering the next generation of innovators, leaders, and dreamers. Start your journey of entrepreneurship today.
            </p>
            <br />
            <br />
            <BrandButton
              label="Join Us"
              onClick={() => router.push('https://admin.theideacompany.io/login')}
            />
          </div>

          {/* Logo Area */}
          <div className="md:flex-[0_0_50%] flex-1 flex justify-center items-center md:mt-[-50px]">
            <img
              src="theidea.webp"
              alt="School of Entrepreneurs Logo"
              className="w-[400px] h-auto object-contain opacity-0 translate-y-[30px] animate-[fadeInUp_1s_ease_forwards_0.4s]"
            />
          </div>
        </div>
        <br />
        <br />
      </div>
      
      <div
        className="absolute inset-0 pointer-events-none overflow-visible z-[2]"
        ref={floatingRef}
      ></div>
    </section>
  );
}