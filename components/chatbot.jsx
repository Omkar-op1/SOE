"use client";
import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FiSend, FiX, FiMessageSquare, FiZap, FiAward, FiTrendingUp } from 'react-icons/fi';

const MillionaireMindChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const router = useRouter();

  // Initial bot message
  useEffect(() => {
    setMessages([
      {
        id: 1,
        text: "Welcome to Thinkers Club AI. I'm your Millionaire Mind Mentor. How can I help you unlock your potential today?",
        sender: 'bot',
        timestamp: new Date(),
        special: true
      }
    ]);
  }, []);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response after delay
    setTimeout(() => {
      const botResponse = generateBotResponse(inputValue);
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateBotResponse = (userInput) => {
    const input = userInput.toLowerCase();
    const now = new Date();
    
    // Common questions responses
    if (input.includes('idea') || input.includes('startup')) {
      return {
        id: messages.length + 2,
        text: "The Thinkers Club provides curated business ideas based on emerging market trends. Our data shows members who implement our vetted ideas see 3x higher success rates. Would you like me to share today's top opportunity?",
        sender: 'bot',
        timestamp: now,
        options: ['Yes, please!', 'Not right now']
      };
    } else if (input.includes('investment') || input.includes('fund')) {
      return {
        id: messages.length + 2,
        text: "Our Investors Table connects members with vetted opportunities. The average ROI for our premium investment suggestions last quarter was 47%. Access to these requires Elite membership.",
        sender: 'bot',
        timestamp: now,
        special: true
      };
    } else if (input.includes('room') || input.includes('feature')) {
      return {
        id: messages.length + 2,
        text: `Thinkers Club offers 8 specialized rooms:
        
1. 💡 Idea Generation - Daily validated opportunities
2. 📈 Business Strategies - Case studies from top 1% earners
3. 💰 Wealth Multipliers - Private investment channels
4. 🔍 Research Vault - Proprietary market data
5. 🤖 Tech Frontier - AI/Web3 insider knowledge
6. 🌐 Matrix Room - Unfiltered geopolitical intelligence
7. 🏋️ Fitness Hub - Biohacking for peak performance
8. 🤝 Conference - Network with verified high-net-worth individuals`,
        sender: 'bot',
        timestamp: now,
        formatted: true
      };
    } else if (input.includes('join') || input.includes('member')) {
      return {
        id: messages.length + 2,
        text: "Becoming a Thinker unlocks exponential growth. Our members average 212% income increase within 12 months. I can guide you through the application process if you're ready.",
        sender: 'bot',
        timestamp: now,
        cta: true
      };
    } else {
      // Default philosophical response
      const wisdom = [
        "True wealth begins with mindset. The average millionaire reads 4x more than the general population. What are you learning today?",
        "Opportunity flows to those prepared to receive it. Are you building systems or just chasing results?",
        "The Thinkers Club difference: we don't just give fish, we teach how to find the richest fishing spots in any market condition.",
        "Noticed your interest in growth. Did you know our top members dedicate 2 hours daily to strategic thinking? What's your cognitive investment plan?"
      ];
      return {
        id: messages.length + 2,
        text: wisdom[Math.floor(Math.random() * wisdom.length)],
        sender: 'bot',
        timestamp: now
      };
    }
  };

  const handleQuickReply = (reply) => {
    const quickMessage = {
      id: messages.length + 1,
      text: reply,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, quickMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = generateBotResponse(reply);
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1200);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chatbot toggle button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFA500] shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-slow"
        >
          <FiMessageSquare className="text-black text-2xl" />
        </button>
      )}

      {/* Chatbot container */}
      {isOpen && (
        <div className="fixed bottom-8 right-8 z-50 w-96 rounded-2xl overflow-hidden shadow-2xl border border-[#FFD700]/30 bg-[#0a0a0a]">
          {/* Chat header */}
          <div className="bg-gradient-to-r from-[#1a1a1a] to-[#0f0f0f] p-4 flex justify-between items-center border-b border-[#FFD700]/20">
            <div className="flex items-center">
              <div className="bg-[#FFD700] text-black p-2 rounded-lg mr-3">
                <FiZap className="text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-white">Millionaire Mind AI</h3>
                <p className="text-xs text-[#FFD700]">Thinkers Club Exclusive</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-[#aaa] hover:text-white p-1 rounded-full transition-colors"
            >
              <FiX className="text-xl" />
            </button>
          </div>

          {/* Messages container */}
          <div className="h-96 overflow-y-auto p-4 bg-[#121212]">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-xs lg:max-w-md rounded-2xl p-4 ${message.sender === 'user' 
                    ? 'bg-gradient-to-br from-[#FFD700] to-[#FFA500] text-black' 
                    : message.special
                      ? 'bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-[#FFD700]/30'
                      : 'bg-[#1a1a1a]'
                  }`}
                >
                  {message.formatted ? (
                    <pre className="whitespace-pre-wrap font-sans text-sm">{message.text}</pre>
                  ) : (
                    <p className="text-sm">{message.text}</p>
                  )}
                  
                  <div className={`text-xs mt-2 ${message.sender === 'user' ? 'text-black/70' : 'text-[#FFD700]/70'}`}>
                    {formatTime(message.timestamp)}
                  </div>
                  
                  {message.options && (
                    <div className="mt-3 space-y-2">
                      {message.options.map((option, i) => (
                        <button
                          key={i}
                          onClick={() => handleQuickReply(option)}
                          className="block w-full text-left px-3 py-2 text-xs rounded-lg bg-[#0a0a0a]/50 hover:bg-[#FFD700]/20 hover:text-[#FFD700] transition-colors border border-[#2a2a2a]"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                  
                  {message.cta && (
                    <button
                      onClick={() => router.push('/membership')}
                      className="mt-3 w-full py-2 px-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black text-sm font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center"
                    >
                      <FiAward className="mr-2" />
                      Explore Membership
                    </button>
                  )}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start mb-4">
                <div className="bg-[#1a1a1a] rounded-2xl p-4">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-[#FFD700] animate-bounce"></div>
                    <div className="w-2 h-2 rounded-full bg-[#FFD700] animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 rounded-full bg-[#FFD700] animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <form onSubmit={handleSendMessage} className="border-t border-[#2a2a2a] bg-[#0a0a0a] p-4">
            <div className="flex items-center">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about wealth strategies..."
                className="flex-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded-l-lg py-3 px-4 text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#FFD700]/50"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className={`bg-gradient-to-br from-[#FFD700] to-[#FFA500] text-black p-3 rounded-r-lg ${!inputValue.trim() ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'}`}
              >
                <FiSend className="text-lg" />
              </button>
            </div>
            <p className="text-xs text-[#555] mt-2 flex items-center">
              <FiTrendingUp className="mr-1" /> Ask about investment strategies, business ideas, or mindset techniques
            </p>
          </form>
        </div>
      )}

      <style jsx global>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        .animate-bounce {
          animation: bounce 1s infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite;
        }
      `}</style>
    </>
  );
};

export default MillionaireMindChatbot;