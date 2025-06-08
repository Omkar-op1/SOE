'use client'
import React, { useEffect, useState } from 'react';

const BrandsTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: "Arpan Moon",
      quote: "I landed an amazing internship through TIC's platform. The process was smooth, and the experience has been incredibly valuable for my career.",
      rating: 5
    },
    {
      name: "Rudraksh Raut",
      quote: "Thinkers Club helped transform R17 into a global brand. Their expert guidance and networking made all the difference.",
      rating: 5
    },
    {
      name: "Tanish Mittal",
      quote: "TIC provided great support in helping us shape our vision. Their advice was insightful, and the podcast gave us valuable exposure.",
      rating: 4
    },
    {
      name: "Samyak Khobragade",
      quote: "My experience at the thinkers club has been amazing. The ideas shared were relevant, practical and often unprecedented.",
      rating: 5
    },
    {
      name: "Himanshu Sonwani",
      quote: "TIC provided valuable guidance on shaping my business idea for LaundryFi. Their expert advice helped me refine my business model.",
      rating: 5
    }
  ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % (testimonials.length - 2));
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const visibleTestimonials = [
    testimonials[currentIndex % testimonials.length],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length]
  ];

  return (
    <>
      {/* Brands Section (unchanged) */}
      <div className="brands-section">
        {/* ... existing brands content ... */}
      </div>

      {/* Testimonials Carousel */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title animate-on-scroll">Customer Reviews</h2>
          <p className="section-description animate-on-scroll">
            Hear from entrepreneurs who've transformed their visions through our ecosystem.
          </p>
          
          <div 
            className="testimonial-carousel"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="carousel-track">
              {visibleTestimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="testimonial-card animate-on-scroll"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="rating-stars">
                    {[...Array(5)].map((_, i) => (
                      <span 
                        key={i} 
                        className={i < testimonial.rating ? "star filled" : "star"}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="testimonial-text">"{testimonial.quote}"</p>
                  <p className="testimonial-author"><strong>{testimonial.name}</strong></p>
                </div>
              ))}
            </div>

            <div className="carousel-dots">
              {testimonials.slice(0, testimonials.length - 2).map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* ... existing brands styles ... */
        
        .testimonials-section {
          padding: 60px 20px;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .section-title {
          font-size: 2rem;
          text-align: center;
          margin-bottom: 15px;
          background: linear-gradient(45deg, #FFD700, #FFA500);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .section-description {
          color: #bbb;
          text-align: center;
          max-width: 600px;
          margin: 0 auto 30px;
          font-size: 1rem;
        }
        
        .testimonial-carousel {
          max-width: 1000px;
          margin: 0 auto;
          position: relative;
        }
        
        .carousel-track {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 30px;
        }
        
        .testimonial-card {
          background: rgba(30, 30, 30, 0.8);
          border-radius: 10px;
          padding: 20px;
          border: 1px solid rgba(255, 215, 0, 0.1);
          transition: all 0.3s ease;
          min-height: 220px;
          display: flex;
          flex-direction: column;
        }
        
        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          border-color: rgba(255, 215, 0, 0.3);
        }
        
        .rating-stars {
          display: flex;
          gap: 3px;
          margin-bottom: 10px;
        }
        
        .star {
          color: #555;
          font-size: 1rem;
        }
        
        .star.filled {
          color: #FFD700;
        }
        
        .testimonial-text {
          color: #e0e0e0;
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 15px;
          flex-grow: 1;
        }
        
        .testimonial-author {
          color: #FFD700;
          font-size: 0.95rem;
          text-align: right;
          margin-top: auto;
        }
        
        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: 10px;
        }
        
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .dot.active {
          background: #FFD700;
          transform: scale(1.2);
        }
        
        .dot:hover {
          background: rgba(255, 215, 0, 0.6);
        }
        
        @media (max-width: 900px) {
          .carousel-track {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .testimonial-card:last-child {
            display: none;
          }
        }
        
        @media (max-width: 600px) {
          .carousel-track {
            grid-template-columns: 1fr;
            gap: 15px;
          }
          
          .testimonial-card {
            min-height: auto;
          }
          
          .section-title {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </>
  );
};

export default BrandsTestimonials;