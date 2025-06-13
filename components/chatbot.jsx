"use client";
import React, { useState, useRef, useEffect } from 'react';
import { FiSend, FiX, FiMessageSquare, FiBriefcase, FiTrendingUp, FiUsers, FiDollarSign, FiTarget, FiStar, FiZap } from 'react-icons/fi';

const BaniyaKaDimagChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Initial bot message
  useEffect(() => {
    setMessages([
      {
        id: 1,
        text: "Namaste! I am Baniya ka Dimag, your Business Success Partner! 🚀\n\nWelcome to the School of Entrepreneurs. I'm here to help you with:\n\n• Discovering new Business Ideas\n• Creating Startup Strategies\n• Connecting with Investors\n• Building your Dream Team\n\nHow can I help you today?",
        sender: 'bot',
        timestamp: new Date(),
        special: true,
        formatted: true
      }
    ]);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = generateBotResponse(inputValue);
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateBotResponse = (userInput) => {
    const input = userInput.toLowerCase();
    const now = new Date();
    
    // Business Ideas
    if (input.includes('idea') || input.includes('business') || input.includes('startup')) {
      return {
        id: messages.length + 2,
        text: "🎯 Great! Our Idea Generating Room provides 100+ validated business ideas daily!\n\n📊 Our Success Stats:\n• 98% success rate in business ideas\n• 24/7 research analyst support\n• Industry-specific customized ideas\n\nWhich industry interests you?",
        sender: 'bot',
        timestamp: now,
        options: ['Tech & AI', 'E-commerce', 'Service Business', 'Manufacturing', 'All Industries'],
        special: true,
        formatted: true
      };
    }
    
    // Thinkers Club rooms
    else if (input.includes('room') || input.includes('club') || input.includes('thinkers')) {
      return {
        id: messages.length + 2,
        text: `🏢 Thinkers Club has 9 Exclusive Rooms:

🔥 IDEA GENERATING ROOM
Daily research-backed business ideas

💼 BUSINESS ROOM  
Expert case studies & proven strategies

💰 MONEY LOUNGE
Wealth-building & investment strategies

💻 TECH ROOM
Latest innovations & tech trends

🔍 RESEARCH ROOM
Trending market analysis & reports

🌐 MATRIX ROOM
Uncensored global business news

🤝 CONFERENCE ROOM
Network with entrepreneurs worldwide

💪 FITNESS HUB
Physical & mental wellness for success

Which room would you like to explore?`,
        sender: 'bot',
        timestamp: now,
        formatted: true,
        special: true
      };
    }
    
    // Investment related
    else if (input.includes('invest') || input.includes('fund') || input.includes('capital') || input.includes('money')) {
      return {
        id: messages.length + 2,
        text: "💎 Investors Table is your perfect match!\n\n🎯 We provide:\n• Custom startups created according to investor blueprints\n• Legal compliance handled\n• 3 best monthly investment opportunities\n\nAre you an investor or seeking funding?",
        sender: 'bot',
        timestamp: now,
        options: ['I am an Investor', 'I need Funding', 'Tell me about both'],
        formatted: true,
        special: true
      };
    }
    
    // Job/Team related
    else if (input.includes('job') || input.includes('team') || input.includes('hire') || input.includes('talent')) {
      return {
        id: messages.length + 2,
        text: "👥 Idea Community - Your Dream Team Builder!\n\n✨ For Job Seekers:\n• Direct connect with startup founders\n• Salary & equity details upfront\n• No cover letters needed\n• Exclusive startup jobs\n\n🏢 For Recruiters:\n• 300+ startup-ready candidates\n• Free talent management system\n• Setup in 10 minutes\n• Curated marketplace\n\nWhich interests you?",
        sender: 'bot',
        timestamp: now,
        options: ['Looking for Job', 'Want to Hire Team', 'See both options'],
        formatted: true
      };
    }
    
    // Membership/Join
    else if (input.includes('join') || input.includes('member') || input.includes('price') || input.includes('cost')) {
      return {
        id: messages.length + 2,
        text: "🌟 Benefits of joining School of Entrepreneurs:\n\n✅ 100+ Reports & Analysis access\n✅ Daily live expert sessions\n✅ Step-by-step growth tutorials\n✅ 19 wealth creation methods\n✅ Millionaire mentors access\n✅ Like-minded community\n✅ Cancel anytime, risk-free\n\nReady to transform your entrepreneurial journey?",
        sender: 'bot',
        timestamp: now,
        cta: true,
        formatted: true,
        special: true
      };
    }
    
    // Success stories
    else if (input.includes('success') || input.includes('result') || input.includes('proof')) {
      return {
        id: messages.length + 2,
        text: "🏆 Our Success Stories:\n\n📈 98% success rate in business ideas\n💰 Members average 212% income increase\n🎯 9 out of 10 startups succeed with our methods\n👥 100+ successful entrepreneurs in community\n⭐ Saksham Bambal: \"TIC helped me land my first internship!\"\n\nDo you want to create your success story?",
        sender: 'bot',
        timestamp: now,
        formatted: true,
        options: ['Yes, guide me!', 'Tell me more success stories']
      };
    }
    
    // Default responses with business wisdom
    else {
      const wisdomResponses = [
        "💡 Success Mantra: Right Idea + Right Execution + Right Timing = Success!\n\nWhat's your business goal for today?",
        "🎯 Every successful entrepreneur's journey begins with ideation.\n\nAre you ready to start your business idea?",
        "💼 The most important things in business are - Problem identification and Solution creation.\n\nWhich problem do you want to solve?",
        "🚀 Startup success requires: Vision, Team, and Right Strategy.\n\nWhich area do you need most help with?"
      ];
      
      return {
        id: messages.length + 2,
        text: wisdomResponses[Math.floor(Math.random() * wisdomResponses.length)],
        sender: 'bot',
        timestamp: now,
        formatted: true
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
          className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFA500] shadow-xl hover:shadow-2xl transition-all duration-300 animate-pulse-slow border-2 border-[#FFD700]/30"
        >
          <div className="flex flex-col items-center">
            <FiBriefcase className="text-black text-2xl mb-1" />
            <span className="text-black text-xs font-bold">Business</span>
          </div>
        </button>
      )}

      {/* Chatbot container */}
      {isOpen && (
        <div className="fixed bottom-8 right-8 z-50 w-96 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#FFD700]/30 bg-[#0a0a0a]">
          {/* Chat header */}
          <div className="bg-gradient-to-r from-[#1a1a1a] to-[#0f0f0f] p-4 flex justify-between items-center border-b border-[#FFD700]/20">
            <div className="flex items-center">
              <div className="bg-[#FFD700] text-black p-2 rounded-xl mr-3 shadow-lg">
                <FiZap className="text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">Baniya ka Dimag</h3>
                <p className="text-xs text-[#FFD700] flex items-center">
                  <FiStar className="mr-1" />
                  School of Entrepreneurs
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-[#aaa] hover:text-white p-2 rounded-full hover:bg-white/10 transition-all"
            >
              <FiX className="text-xl" />
            </button>
          </div>

          {/* Messages container */}
          <div className="h-96 overflow-y-auto p-4 bg-gradient-to-b from-gray-800 to-gray-900">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-xs lg:max-w-md rounded-2xl p-4 ${message.sender === 'user' 
                    ? 'bg-gradient-to-br from-orange-500 to-red-500 text-white shadow-lg' 
                    : message.special
                      ? 'bg-gradient-to-br from-gray-700 to-gray-800 border-2 border-orange-400/30 text-white shadow-lg'
                      : 'bg-gray-700 text-white shadow-md'
                  }`}
                >
                  {message.formatted ? (
                    <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">{message.text}</pre>
                  ) : (
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  )}
                  
                  <div className={`text-xs mt-2 ${message.sender === 'user' ? 'text-white/70' : 'text-orange-300/70'}`}>
                    {formatTime(message.timestamp)}
                  </div>
                  
                  {message.options && (
                    <div className="mt-3 space-y-2">
                      {message.options.map((option, i) => (
                        <button
                          key={i}
                          onClick={() => handleQuickReply(option)}
                          className="block w-full text-left px-3 py-2 text-xs rounded-lg bg-gray-600/50 hover:bg-orange-500/30 hover:text-orange-200 transition-all border border-gray-500/30 hover:border-orange-400/50"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                  
                  {message.cta && (
                    <button
                      onClick={() => window.open('https://school-of-entrepreneurs.com', '_blank')}
                      className="mt-3 w-full py-3 px-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all shadow-lg flex items-center justify-center"
                    >
                      <FiTarget className="mr-2" />
                      Join School of Entrepreneurs
                    </button>
                  )}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start mb-4">
                <div className="bg-gray-700 rounded-2xl p-4 shadow-md">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-orange-400 animate-bounce"></div>
                    <div className="w-2 h-2 rounded-full bg-red-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 rounded-full bg-pink-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <div className="border-t-2 border-orange-400/30 bg-gray-800 p-4">
            <div className="flex items-center">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(e)}
                placeholder="Type your business question here..."
                className="flex-1 bg-gray-700 border-2 border-gray-600 rounded-l-xl py-3 px-4 text-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 placeholder-gray-400"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className={`bg-gradient-to-br from-orange-500 to-red-500 text-white p-3 rounded-r-xl shadow-lg ${!inputValue.trim() ? 'opacity-50 cursor-not-allowed' : 'hover:from-orange-600 hover:to-red-600 transform hover:scale-105'} transition-all`}
              >
                <FiSend className="text-lg" />
              </button>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {['Business Ideas', 'Thinkers Club', 'Investment', 'Join Now'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleQuickReply(tag)}
                  className="px-3 py-1 bg-gray-600 text-white text-xs rounded-full hover:bg-orange-500 transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-2 flex items-center">
              Ask for business ideas, investment tips, and success strategies!
            </p>
          </div>
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

export default BaniyaKaDimagChatbot;