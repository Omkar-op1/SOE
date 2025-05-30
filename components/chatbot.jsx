"use client";
import React, { useState, useRef, useEffect } from 'react';
import BrandButton from '@/components/button';
import { useRouter } from 'next/navigation';

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const router = useRouter();
  const containerRef = useRef(null);
  
  const faqs = [
    {
      question: "How can Thinkers Club help me develop my startup idea?",
      answer: "Thinkers Club offers a space to refine your ideas, connect with mentors, and access valuable resources. Our market researchers, data analysts, and financial experts provide business ideas based on consumer market studies and venture capital trends, ensuring your startup is set up for success."
    },
    {
      question: "I already have a business idea. How will Thinkers Club help me?",
      answer: "Even if you already have a business idea, Thinkers Club can provide invaluable support and resources. By joining Thinkers Club, you'll gain clarity on your idea's implementation and business model through expert reports created by our analysts in your specific sector. Our diverse rooms and expert guidance will ensure you refine and enhance your idea, increasing your chances of success."
    },
    {
      question: "Will I get only business ideas inside Thinkers Club?",
      answer: `No, Thinkers Club offers much more than just business ideas. Inside, you'll find nine different rooms:
      1. Idea Generating Room: Get daily business ideas and inspiration.
      2. Business Room: Learn business strategies based on case studies by experts.
      3. Money Lounge: Discover wealth-multiplying strategies.
      4. Research Room: Access research papers on controversial, trending, or under-explored topics.
      5. Tech Room: Stay updated on the latest innovations in technology.
      6. Matrix Room: Receive uncensored and raw daily news about world geopolitics.
      7. Fitness Hub: Engage in programs to improve physical fitness and well-being.
      8. Conference Room: Network with members worldwide.`
    },
    {
      question: "I don't have experience in raising funds. Does it matter?",
      answer: "No, it doesn't. Our team at Investors Table handles all your investor relations, including legal documentation, so you can focus on generating revenue while we focus on your valuation."
    }
  ];

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  // Create floating thought bubbles
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const thoughtBubbles = () => {
      const bubbleCount = 8;
      for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'thought-bubble';
        
        // Random properties
        const size = Math.random() * 20 + 10;
        const left = Math.random() * 100;
        const animationDuration = Math.random() * 15 + 10;
        const animationDelay = Math.random() * 5;
        
        bubble.style.cssText = `
          width: ${size}px;
          height: ${size}px;
          left: ${left}%;
          background: rgba(255, 215, 0, ${Math.random() * 0.2 + 0.05});
          animation-duration: ${animationDuration}s;
          animation-delay: ${animationDelay}s;
        `;
        
        container.appendChild(bubble);
      }
    };
    
    thoughtBubbles();
    
    return () => {
      const bubbles = document.querySelectorAll('.thought-bubble');
      bubbles.forEach(bubble => bubble.remove());
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-2xl p-8 max-w-2xl mx-auto my-16 shadow-xl relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"></div>
      <div className="absolute top-4 left-4 w-3 h-3 rounded-full bg-[#FFD700] animate-pulse"></div>
      <div className="absolute bottom-4 right-4 w-3 h-3 rounded-full bg-[#FFD700] animate-pulse"></div>
      
      {/* Header */}
      <div className="text-center mb-10 relative z-10">
        <div className="inline-block bg-[#1a1a1a] p-4 rounded-full mb-4 border border-[#FFD700]/20">
          <svg 
            className="w-10 h-10 text-[#FFD700] animate-float" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M9.5 3a6.5 6.5 0 0 1 6.5 6.5c0 4-6 9-6 9s-6-5-6-9A6.5 6.5 0 0 1 9.5 3z" />
            <path d="M14 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
          </svg>
        </div>
        <h3 className="text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] to-[#FFA500]">
          Thinkers Club FAQ
        </h3>
        <p className="text-[#aaa] max-w-md mx-auto">
          Answers to common questions about our exclusive thinkers community
        </p>
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mx-auto my-6"></div>
      </div>
      
      {/* FAQ Items */}
      <div className="space-y-4 relative z-10">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className={`rounded-xl p-5 cursor-pointer transition-all duration-500 overflow-hidden ${
              activeQuestion === index 
                ? 'bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-[#FFD700]/30 shadow-[0_0_20px_rgba(255,215,0,0.1)]'
                : 'bg-[#121212] hover:bg-[#1a1a1a] border border-[#2a2a2a]'
            }`}
            onClick={() => toggleQuestion(index)}
          >
            <div className="flex items-start">
              <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-1 transition-all ${
                activeQuestion === index 
                  ? 'bg-[#FFD700] text-black'
                  : 'bg-[#2a2a2a] text-[#FFD700]'
              }`}>
                <span className="font-bold text-sm">
                  {activeQuestion === index ? '−' : '+'}
                </span>
              </div>
              
              <div className="flex-1">
                <h4 className={`font-medium text-lg transition-all ${
                  activeQuestion === index 
                    ? 'text-[#FFD700]'
                    : 'text-white'
                }`}>
                  {faq.question}
                </h4>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ${
                    activeQuestion === index 
                      ? 'max-h-[1000px] mt-4 opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pl-2 border-l-2 border-[#FFD700]/50">
                    {faq.answer.split('\n').map((paragraph, i) => (
                      <p 
                        key={i} 
                        className="text-[#ccc] mb-3 last:mb-0 leading-relaxed animate-fadeIn"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* CTA Section */}
      <div className="text-center mt-12 pt-8 relative z-10 border-t border-[#2a2a2a]">
        <div className="inline-flex items-center justify-center bg-[#1a1a1a] border border-[#FFD700]/20 rounded-full px-6 py-2 mb-6 animate-pulse-slow">
          <span className="text-[#FFD700] mr-2">✦</span>
          <span className="text-white font-medium">Exclusive Membership</span>
          <span className="text-[#FFD700] ml-2">✦</span>
        </div>
        
        <p className="text-xl text-white mb-6 max-w-md mx-auto">
          Ready to join our community of innovators and thinkers?
        </p>
        
        <div className="animate-bounce-slow">
          <BrandButton 
            label="Become a Member" 
            onClick={() => router.push('/register')}
            className="transform transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(255,215,0,0.3)]"
          />
        </div>
        
        <p className="text-[#777] text-sm mt-6">
          Limited spots available - Join our elite thinkers community today
        </p>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        @keyframes floatBubble {
          0% { transform: translateY(100px) scale(0.5); opacity: 0; }
          20% { opacity: 0.4; }
          90% { opacity: 0.4; }
          100% { transform: translateY(-50px) scale(1); opacity: 0; }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease forwards;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite;
        }
        
        .thought-bubble {
          position: absolute;
          border-radius: 50%;
          animation: floatBubble linear infinite;
          z-index: 0;
        }
      `}</style>
    </div>
  );
};

export default FAQ;