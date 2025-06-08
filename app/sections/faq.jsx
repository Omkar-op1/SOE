"use client";
import React, { useState, useRef, useEffect } from 'react';
import BrandButton from '@/components/button';
import { useRouter } from 'next/navigation';

const FAQ = () => {
  const [activeTab, setActiveTab] = useState('thinkers');
  const [activeQuestion, setActiveQuestion] = useState(null);
  const router = useRouter();
  const containerRef = useRef(null);
  
  const tabs = [
    { id: 'thinkers', label: 'Thinkers Club' },
    { id: 'investors', label: 'Investors Table' },
    { id: 'idea', label: 'Idea Community' }
  ];

  const allFaqs = {
    thinkers: [
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
    ],
    investors: [
      {
        question: "What does Investors Table do?",
        answer: "Investors Table connects startups with investors by creating tailored investment opportunities based on detailed blueprints. We handle investor relations, legal compliance, and valuations, allowing you to focus on growth."
      },
      {
        question: "How do you ensure startups match my investment preferences?",
        answer: "We align startups with your investment blueprint, including sector, business model, and founder preferences. This ensures the startups presented to you closely match your criteria."
      },
      {
        question: "What support do you provide in the fundraising process?",
        answer: "We manage all investor relations, including legal and compliance tasks, using our platform to facilitate transparent negotiations. Our team also provides reports on funding trends to help you make informed decisions."
      },
      {
        question: "I don't have experience in raising funds. Can you still help?",
        answer: "Absolutely. We handle all aspects of investor relations and documentation, so you can focus on your business while we manage the fundraising process and maximize your valuation."
      },
      {
        question: "How do you ensure transparent and efficient deal negotiations?",
        answer: "Our platform enables direct communication between investors and founders via video conferencing and chat, ensuring transparent, efficient, and swift deal negotiations."
      }
    ],
    idea: [
      {
        question: "What is Idea Community?",
        answer: "Idea Community is a marketplace where startups can connect with skilled professionals to build high-performing teams and turn their business ideas into reality."
      },
      {
        question: "How does Idea Community help startups find talent?",
        answer: "We provide a curated platform that connects startups with the best professionals across various industries, ensuring you have the right people to bring your business idea to life."
      },
      {
        question: "Who can join Idea Community?",
        answer: "Idea Community is open to startups looking to build a strong team and professionals looking for exciting opportunities in early-stage companies."
      },
      {
        question: "How do I hire professionals through Idea Community?",
        answer: "Simply browse through profiles, view portfolios, and connect with talented individuals who match your requirements. Our platform allows you to easily recruit the right team members."
      },
      {
        question: "What types of professionals are available in Idea Community?",
        answer: "Our network includes experts in marketing, finance, technology, design, research, and more—everything you need to scale your startup."
      },
      {
        question: "Is there any fee to use Idea Community?",
        answer: "It's free to browse through the community, but additional premium features like personalized talent recommendations may incur a fee."
      },
      {
        question: "How does Idea Community ensure the quality of talent?",
        answer: "We carefully vet and curate our professionals to ensure that only highly skilled, experienced candidates are part of the community."
      },
      {
        question: "Can I network with other startup founders in Idea Community?",
        answer: "Yes! Idea Community also provides opportunities for networking and collaboration with other founders to share knowledge and resources."
      },
      {
        question: "How do I get started with Idea Community?",
        answer: "Sign up on our platform, create your startup profile, and start exploring talented professionals to build your dream team!"
      }
    ]
  };

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

  const getTabIcon = (tabId) => {
    switch(tabId) {
      case 'thinkers':
        return (
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9.5 3a6.5 6.5 0 0 1 6.5 6.5c0 4-6 9-6 9s-6-5-6-9A6.5 6.5 0 0 1 9.5 3z" />
            <path d="M14 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
          </svg>
        );
      case 'investors':
        return (
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="1" x2="12" y2="23"></line>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
        );
      case 'idea':
        return (
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div 
      ref={containerRef}
      className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-2xl p-8 max-w-4xl mx-auto my-16 shadow-xl relative overflow-hidden"
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
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        </div>
        <h3 className="text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] to-[#FFA500]">
          Frequently Asked Questions
        </h3>
        <p className="text-[#aaa] max-w-md mx-auto">
          Find answers to common questions about our services and communities
        </p>
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mx-auto my-6"></div>
      </div>
      
      {/* Tab Navigation */}
      <div className="flex justify-center mb-8 relative z-10">
        <div className="inline-flex bg-[#1a1a1a] rounded-full p-1 border border-[#2a2a2a]">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setActiveQuestion(null);
              }}
              className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-[#FFD700] text-black shadow-md'
                  : 'text-white hover:text-[#FFD700]'
              }`}
            >
              {getTabIcon(tab.id)}
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      
      {/* FAQ Items */}
      <div className="space-y-4 relative z-10">
        {allFaqs[activeTab].map((faq, index) => (
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
    <span className="text-white font-medium">Ready to Join?</span>
    <span className="text-[#FFD700] ml-2">✦</span>
  </div>
  
  <p className="text-xl text-white mb-6 max-w-md mx-auto">
    {activeTab === 'thinkers' && "Ready to join our community of innovators and thinkers?"}
    {activeTab === 'investors' && "Interested in connecting with promising startups or finding investors?"}
    {activeTab === 'idea' && "Need to build your dream team or find exciting opportunities?"}
  </p>
  
  <div className="flex justify-center animate-bounce-slow"> {/* Added flex justify-center here */}
    <BrandButton 
      label={
        activeTab === 'thinkers' ? "Join Thinkers Club" : 
        activeTab === 'investors' ? "Explore Investors Table" : 
        "Visit Idea Community"
      }
      onClick={() => router.push(
        activeTab === 'thinkers' ? '/register' : 
        activeTab === 'investors' ? '/investors' : 
        '/idea-community'
      )}
      className="transform transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(255,215,0,0.3)]"
    />
  </div>
  
  <p className="text-[#777] text-sm mt-6">
    {activeTab === 'thinkers' && "Limited spots available - Join our elite thinkers community today"}
    {activeTab === 'investors' && "Start your investment journey with carefully vetted opportunities"}
    {activeTab === 'idea' && "Connect with top talent and build something amazing"}
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