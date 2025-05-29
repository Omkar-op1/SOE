'use client';
import '@/css/investertable.css';

import { useEffect } from 'react';
import { FaSearch, FaUserTie, FaHandshake, FaLink, FaMoneyBillWave, FaChartLine } from 'react-icons/fa';

export default function InvestorsTableSection() {
  // Add hover effects with JavaScript
  useEffect(() => {
    const cards = document.querySelectorAll('.feature-card');
    
    const handleMouseEnter = (card) => {
      card.style.transform = 'translateY(-8px) scale(1.02)';
    };
    
    const handleMouseLeave = (card) => {
      card.style.transform = 'translateY(0) scale(1)';
    };

    cards.forEach(card => {
      card.addEventListener('mouseenter', () => handleMouseEnter(card));
      card.addEventListener('mouseleave', () => handleMouseLeave(card));
    });

    return () => {
      cards.forEach(card => {
        card.removeEventListener('mouseenter', () => handleMouseEnter(card));
        card.removeEventListener('mouseleave', () => handleMouseLeave(card));
      });
    };
  }, []);

  return (
    <section id="investors-table-details" className="sot-section">
      <div className="floating-elements">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="floating-dot" />
        ))}
      </div>
      
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Investors Table</h2>
          <p className="section-subtitle">
            We create tailored startups that align with investor preferences, ensuring prime investment opportunities.
          </p>
        </div>
        
        <div className="content-row">
          <InvestorColumn 
            title="For Investors"
            cards={[
              {
                icon: <FaSearch className="card-icon" />,
                title: "Discover Startups",
                text: "Discover early-stage startups with expert recommendations for best returns."
              },
              {
                icon: <FaUserTie className="card-icon" />,
                title: "Personal Compliance Manager",
                text: "Expert lawyers and accountants handle all compliance while you focus on deals."
              },
              {
                icon: <FaHandshake className="card-icon" />,
                title: "Smooth Deal Closing",
                text: "Connect with founders via video and chat for transparent, swift closures."
              }
            ]}
            ctaText="INVEST IN STARTUPS"
          />
          
          <InvestorColumn 
            title="For Startups"
            cards={[
              {
                icon: <FaLink className="card-icon" />,
                title: "Connect With Investors",
                text: "We connect you with investors whose preferences align with your venture."
              },
              {
                icon: <FaMoneyBillWave className="card-icon" />,
                title: "Raise Money",
                text: "Our analysts guide you to raise funds at the right time with market insights."
              },
              {
                icon: <FaChartLine className="card-icon" />,
                title: "Investor Relations",
                text: "We manage investor relations so you can focus on revenue generation."
              }
            ]}
            ctaText="RAISE CAPITAL"
          />
        </div>
      </div>
    </section>
  );
}

function InvestorColumn({ title, cards, ctaText }) {
  return (
    <div className="column">
      <h3 className="column-title">{title}</h3>
      
      <div className="cards-container">
        {cards.map((card, index) => (
          <div key={index} className="feature-card">
            <h4 className="card-title">
              {card.icon}
              {card.title}
            </h4>
            <p className="card-text">{card.text}</p>
          </div>
        ))}
      </div>
      
      <div className="cta-container">
        <a href="#" className="cta-btn">{ctaText}</a>
      </div>
    </div>
  );
}