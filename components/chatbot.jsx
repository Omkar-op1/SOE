"use client";
import React, { useState } from 'react';
import '@/css/chatboat.css';

const ThinkersClubChatbot = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

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

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <h3>Thinkers Club FAQ</h3>
        <div className="gold-line"></div>
        <p className="subtext">Click on questions to reveal answers</p>
      </div>
      
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeQuestion === index ? 'active' : ''}`}
            onClick={() => toggleQuestion(index)}
          >
            <div className="question">
              <span>{faq.question}</span>
              <span className="toggle-icon">
                {activeQuestion === index ? '−' : '+'}
              </span>
            </div>
            {activeQuestion === index && (
              <div className="answer">
                {faq.answer.split('\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="chatbot-cta">
        <p>Ready to join Thinkers Club?</p>
        <button className="gold-button">
          Become a Member
        </button>
      </div>
    </div>
  );
};

export default ThinkersClubChatbot;