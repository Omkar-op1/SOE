// 'use client'
// import React, { useEffect, useRef } from 'react';

// const TestimonialsSection = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     // Initialize scroll animations
//     const observerOptions = {
//       threshold: 0.1,
//       rootMargin: "0px 0px -100px 0px"
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("animated");
          
//           // Add ripple effect to cards when they appear
//           if (entry.target.classList.contains("testimonial-card")) {
//             entry.target.classList.add("card-appear");
//           }
//         }
//       });
//     }, observerOptions);

//     const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");
//     elementsToAnimate.forEach(element => observer.observe(element));

//     return () => {
//       observer.disconnect();
//     };
//   }, []);

//   // Ripple effect for button
//   const handleButtonClick = (e) => {
//     const btn = e.currentTarget;
//     const ripple = document.createElement("span");
//     const rect = btn.getBoundingClientRect();
//     const size = Math.max(rect.height, rect.width);
//     const x = e.clientX - rect.left - size / 2;
//     const y = e.clientY - rect.top - size / 2;
    
//     ripple.style.cssText = `
//       position: absolute;
//       width: ${size}px;
//       height: ${size}px;
//       left: ${x}px;
//       top: ${y}px;
//       background: rgba(255, 255, 255, 0.3);
//       border-radius: 50%;
//       transform: scale(0);
//       animation: ripple 0.6s linear;
//       pointer-events: none;
//     `;
    
//     btn.appendChild(ripple);
    
//     setTimeout(() => ripple.remove(), 600);
//   };

//   return (
//     <section className="testimonials-section" ref={containerRef}>
//       <div className="container">
//         <h2 className="section-title animate-on-scroll">Customer Reviews</h2>
//         <p className="section-subtitle animate-on-scroll">
//           You've been told that a traditional degree is the benchmark of
//           success. Our students understand what's really possible.
//         </p>
        
//         <div className="testimonials-grid">
//           {[
//             {
//               name: "Samyak Khobragade",
//               quote: "My experience at the thinkers club has been amazing. The ideas shared were relevant, practical and often unprecedented. People, especially those building a start up or wanting to do so should join SOT not only for help with ideation, networking and funding but also simply to find access to reports and ideas that can help any business in unimaginable ways."
//             },
//             {
//               name: "Saksham Bambal",
//               quote: "SOT helped me land my first internship, and the experience I gained has been invaluable for my career. A fantastic opportunity!"
//             },
//             {
//               name: "Tanish Mittal",
//               quote: "SOT provided great support in helping us shape our vision. Their advice was insightful, and the podcast we did together gave us valuable exposure. Overall, a positive experience, though a bit more hands-on guidance could have made it perfect."
//             }
//           ].map((testimonial, index) => (
//             <div 
//               key={index} 
//               className="testimonial-card animate-on-scroll"
//               style={{ transitionDelay: `${index * 0.2}s` }}
//             >
//               <p><strong>{testimonial.name}</strong></p>
//               <p>"{testimonial.quote}"</p>
//             </div>
//           ))}
//         </div>
        
//         <div className="button-container animate-on-scroll">
//           <a 
//             href="#join" 
//             className="cta-button"
//             onClick={handleButtonClick}
//           >
//             Join Now
//           </a>
//         </div>
//       </div>

//       <style jsx global>{`
//         @keyframes floatUp {
//           0% { opacity: 0; transform: translateY(20px); }
//           100% { opacity: 1; transform: translateY(0); }
//         }
        
//         @keyframes ripple {
//           to { transform: scale(2); opacity: 0; }
//         }
        
//         @keyframes cardAppear {
//           0% { 
//             transform: translateY(30px) scale(0.9);
//             opacity: 0;
//             box-shadow: 0 0 0 rgba(255, 215, 0, 0);
//           }
//           70% { 
//             transform: translateY(-5px) scale(1.02);
//             box-shadow: 0 10px 25px rgba(255, 215, 0, 0.2);
//           }
//           100% { 
//             transform: translateY(0) scale(1);
//             opacity: 1;
//             box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
//           }
//         }
//       `}</style>

//       <style jsx>{`
//         .testimonials-section {
//           background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
//           position: relative;
//           overflow: hidden;
//           padding: 80px 20px;
//         }
        
//         .testimonials-section::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: 
//             radial-gradient(circle at 10% 20%, rgba(255, 165, 0, 0.05) 0%, transparent 20%),
//             radial-gradient(circle at 90% 80%, rgba(255, 215, 0, 0.04) 0%, transparent 30%);
//           z-index: 1;
//           animation: backgroundFlow 15s ease infinite alternate;
//         }
        
//         @keyframes backgroundFlow {
//           0% { background-position: 0% 50%; }
//           100% { background-position: 100% 50%; }
//         }
        
//         .container {
//           max-width: 1200px;
//           margin: 0 auto;
//           position: relative;
//           z-index: 2;
//         }
        
//         .section-title {
//           font-size: 2.8rem;
//           text-align: center;
//           margin-bottom: 20px;
//           background: linear-gradient(45deg, #FFD700, #FFA500);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//           font-weight: 700;
//           animation: textReveal 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards;
//           opacity: 0;
//           transform: translateY(30px);
//         }
        
//         @keyframes textReveal {
//           0% { opacity: 0; transform: translateY(30px); }
//           100% { opacity: 1; transform: translateY(0); }
//         }
        
//         .section-subtitle {
//           color: #bbb;
//           text-align: center;
//           max-width: 700px;
//           margin: 0 auto 50px;
//           font-size: 1.1rem;
//           line-height: 1.6;
//           animation: floatUp 1s ease-out 0.3s forwards;
//           opacity: 0;
//           transform: translateY(20px);
//         }
        
//         .testimonials-grid {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 30px;
//           margin-top: 40px;
//         }
        
//         .testimonial-card {
//           background: rgba(25, 25, 25, 0.7);
//           border-radius: 15px;
//           padding: 30px;
//           position: relative;
//           overflow: hidden;
//           transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
//           border: 1px solid rgba(255, 215, 0, 0.15);
//           backdrop-filter: blur(5px);
//           min-height: 300px;
//           display: flex;
//           flex-direction: column;
//           justify-content: space-between;
//           opacity: 0;
//           transform: translateY(30px);
//         }
        
//         .testimonial-card.animated {
//           animation: cardAppear 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
//         }
        
//         .testimonial-card:hover {
//           transform: translateY(-10px);
//           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3),
//                       0 0 30px rgba(255, 215, 0, 0.15);
//           border-color: rgba(255, 215, 0, 0.3);
//         }
        
//         .testimonial-card::before {
//           content: '"';
//           position: absolute;
//           top: 15px;
//           left: 15px;
//           font-size: 5rem;
//           font-family: Georgia, serif;
//           color: rgba(255, 215, 0, 0.1);
//           line-height: 1;
//           z-index: 1;
//           transition: transform 0.5s ease;
//         }
        
//         .testimonial-card:hover::before {
//           transform: scale(1.1) rotate(5deg);
//           color: rgba(255, 215, 0, 0.15);
//         }
        
//         .testimonial-card p {
//           position: relative;
//           z-index: 2;
//           color: #e0e0e0;
//           line-height: 1.7;
//           margin-bottom: 15px;
//           transition: transform 0.3s ease;
//         }
        
//         .testimonial-card:hover p {
//           transform: translateX(5px);
//         }
        
//         .testimonial-card strong {
//           color: #FFD700;
//           font-size: 1.2rem;
//           display: block;
//           margin-bottom: 15px;
//           transition: transform 0.3s ease, color 0.3s ease;
//         }
        
//         .testimonial-card:hover strong {
//           transform: translateX(10px);
//           color: #ffcc00;
//         }
        
//         .button-container {
//           text-align: center;
//           margin-top: 50px;
//           opacity: 0;
//           transform: translateY(20px);
//           animation: floatUp 1s ease-out 1s forwards;
//         }
        
//         .cta-button {
//           display: inline-block;
//           padding: 16px 50px;
//           background: linear-gradient(45deg, #FFD700, #FFA500, #FFD700);
//           background-size: 200% 200%;
//           color: #000;
//           text-decoration: none;
//           font-weight: bold;
//           font-size: 1.1rem;
//           border-radius: 50px;
//           position: relative;
//           overflow: hidden;
//           transition: all 0.4s ease;
//           box-shadow: 
//             0 8px 25px rgba(255, 215, 0, 0.3),
//             inset 0 1px 0 rgba(255, 255, 255, 0.2);
//           text-transform: uppercase;
//           letter-spacing: 1px;
//           z-index: 2;
//           border: none;
//           cursor: pointer;
//           animation: pulse 2s infinite;
//         }
        
//         .cta-button:hover {
//           transform: translateY(-5px) scale(1.05);
//           box-shadow: 
//             0 15px 40px rgba(255, 215, 0, 0.5),
//             inset 0 1px 0 rgba(255, 255, 255, 0.3);
//           background-position: 100% 0;
//           animation: none;
//         }
        
//         @keyframes pulse {
//           0% { box-shadow: 0 0 0 0 rgba(255, 215, 0, 0.4); }
//           70% { box-shadow: 0 0 0 15px rgba(255, 215, 0, 0); }
//           100% { box-shadow: 0 0 0 0 rgba(255, 215, 0, 0); }
//         }
        
//         .animate-on-scroll {
//           opacity: 0;
//           transform: translateY(30px);
//           transition: all 0.8s ease-out;
//         }
        
//         .animate-on-scroll.animated {
//           opacity: 1;
//           transform: translateY(0);
//         }
        
//         @media (max-width: 992px) {
//           .testimonials-grid {
//             grid-template-columns: repeat(2, 1fr);
//           }
          
//           .section-title {
//             font-size: 2.3rem;
//           }
//         }
        
//         @media (max-width: 768px) {
//           .testimonials-grid {
//             grid-template-columns: 1fr;
//           }
          
//           .section-title {
//             font-size: 2rem;
//           }
          
//           .testimonials-section {
//             padding: 60px 20px;
//           }
          
//           .testimonial-card {
//             min-height: auto;
//           }
//         }
        
//         @media (max-width: 480px) {
//           .section-title {
//             font-size: 1.8rem;
//           }
          
//           .section-subtitle {
//             font-size: 1rem;
//           }
          
//           .cta-button {
//             padding: 14px 40px;
//             font-size: 1rem;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// // export default TestimonialsSection;