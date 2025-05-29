"use client";
import React, { useState } from 'react';
import BrandButton from '@/components/button';
import { useRouter } from 'next/navigation';

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const router = useRouter();
  
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
    <div className="bg-[var(--color--campus-bg)] border border-[var(--color--white50)] rounded-xl p-8 max-w-2xl mx-auto my-12 shadow-lg">
      <div className="text-center mb-8">
        <h3 className="text-[var(--color--light-gold)] text-2xl mb-2">Thinkers Club FAQ</h3>
        <div className="h-0.5 w-16 bg-[var(--color--gold)] mx-auto my-3"></div>
        <p className="text-[var(--color--white50)] text-sm">Click on questions to reveal answers</p>
      </div>
      
      <div className="border-t border-[var(--color--white50)]">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`border-b border-[var(--color--white50)] py-5 cursor-pointer transition-all duration-300 ${
              activeQuestion === index ? 'bg-[rgba(255,255,255,0.03)]' : ''
            } hover:bg-[rgba(255,255,255,0.03)]`}
            onClick={() => toggleQuestion(index)}
          >
            <div className="flex justify-between items-center font-medium text-[var(--color--white)] text-lg">
              <span>{faq.question}</span>
              <span className="text-[var(--color--gold)] text-xl font-light ml-4">
                {activeQuestion === index ? '−' : '+'}
              </span>
            </div>
            {activeQuestion === index && (
              <div className="pt-4 text-[var(--color--white70)] leading-relaxed">
                {faq.answer.split('\n').map((paragraph, i) => (
                  <p key={i} className="mb-3 last:mb-0">{paragraph}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="text-center mt-8 pt-6 border-t border-[var(--color--white50)]">
        <p className="text-[var(--color--white70)] mb-6">Ready to join Thinkers Club?</p>
        <div className="flex justify-center">
          <BrandButton label="Become a member" onClick={() => router.push('/register')} />
        </div>
      </div>
    </div>
  );
};

export default FAQ;