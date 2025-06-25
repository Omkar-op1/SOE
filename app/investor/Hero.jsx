"use client"
import { useEffect, useRef, useState } from "react"

const InvestorsTableHero = () => {
  const videoRef = useRef(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [displayText, setDisplayText] = useState("")
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const [floatingElements] = useState(() => {
    const elements = []
    for (let i = 0; i < 25; i++) {
      elements.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: Math.random() * 4 + 8,
        type: i % 6 === 0 ? 'brain' : i % 8 === 0 ? 'diamond' : 'circle',
        size: Math.random() * 8 + 6
      })
    }
    return elements
  })

  useEffect(() => {
    const texts = ["Investors Table"]
    let currentTextIndex = 0
    let currentCharIndex = 0
    let isDeleting = false
    let timeoutId = null
    
    const typeText = () => {
      const currentText = texts[currentTextIndex]
      
      if (!isDeleting) {
        if (currentCharIndex < currentText.length) {
          setDisplayText(currentText.slice(0, currentCharIndex + 1))
          currentCharIndex++
          timeoutId = setTimeout(typeText, 100)
        } else {
          if (currentTextIndex === 0) {
            timeoutId = setTimeout(() => {
              isDeleting = true
              typeText()
            }, 2000)
          } else {
            setIsTypingComplete(true)
          }
        }
      } else {
        if (currentCharIndex > 0) {
          setDisplayText(currentText.slice(0, currentCharIndex - 1))
          currentCharIndex--
          timeoutId = setTimeout(typeText, 50)
        } else {
          isDeleting = false
          currentTextIndex++
          timeoutId = setTimeout(typeText, 500)
        }
      }
    }
    
    const initialTimeout = setTimeout(typeText, 1000)
    
    return () => {
      if (timeoutId) clearTimeout(timeoutId)
      clearTimeout(initialTimeout)
    }
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
      setIsVideoLoaded(true)
    }
  }, [])

  const handleButtonClick = (e) => {
    const btn = e.currentTarget
    const ripple = document.createElement("span")
    const rect = btn.getBoundingClientRect()
    const size = Math.max(rect.height, rect.width)
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2

    ripple.style.position = "absolute"
    ripple.style.width = ripple.style.height = size + "px"
    ripple.style.left = x + "px"
    ripple.style.top = y + "px"
    ripple.style.background = "rgba(255, 255, 255, 0.5)"
    ripple.style.borderRadius = "50%"
    ripple.style.transform = "scale(0)"
    ripple.style.animation = "ripple 0.6s linear"
    ripple.style.pointerEvents = "none"

    btn.appendChild(ripple)

    setTimeout(() => {
      ripple.remove()
    }, 600)
  }

  return (
    <div className="consistent-hero">
      <style jsx>{`
        /* All the common styles from the consistent design */
        /* ... (include all the common styles from Thinkers Club example) ... */
        @keyframes backgroundFlow {
          0% { transform: rotate(0deg) scale(1); opacity: 0.5; }
          100% { transform: rotate(2deg) scale(1.05); opacity: 0.8; }
        }
        
        @keyframes patternShift {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(60px) translateY(60px); }
        }
        
        @keyframes fadeInUp {
          0% { transform: translateY(50px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes gradientWave {
          0%, 100% { background-position: 0% 50%; filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.3)); }
          50% { background-position: 100% 50%; filter: drop-shadow(0 0 20px rgba(255, 215, 0, 0.6)); }
        }
        
        @keyframes floatUp {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
        }
        
        @keyframes ripple {
          to { transform: scale(2); opacity: 0; }
        }
        
        @keyframes videoGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255, 215, 0, 0.3); }
          50% { box-shadow: 0 0 30px 10px rgba(255, 215, 0, 0.5); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-20px); }
          60% { transform: translateY(-10px); }
        }

        @keyframes glowPulse {
          0%, 100% { filter: drop-shadow(0 0 5px rgba(255, 215, 0, 0.3)); }
          50% { filter: drop-shadow(0 0 25px rgba(255, 215, 0, 0.7)); }
        }

        @keyframes brainPulse {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.1) rotate(2deg); }
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        @keyframes slideInScale {
          0% { transform: scale(0.8) translateY(20px); opacity: 0; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
        
          .hero-container {
          position: relative;
          width: 100%;
          min-height: 100vh;
          padding: 80px 0; /* Added top and bottom padding */
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 30%, #1a1a1a 70%, #0a0a0a 100%);
          overflow: hidden;
          display: flex;
          align-items: center;
        }
        
        .hero-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 25% 25%, rgba(255, 215, 0, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 75% 75%, rgba(255, 165, 0, 0.06) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.04) 0%, transparent 60%);
          animation: backgroundFlow 12s ease-in-out infinite alternate;
        }
        
        .hero-container::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(45deg, rgba(255, 215, 0, 0.02) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(255, 215, 0, 0.02) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(255, 215, 0, 0.02) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(255, 215, 0, 0.02) 75%);
          background-size: 60px 60px;
          animation: patternShift 20s linear infinite;
          pointer-events: none;
        }
        
        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        }
        
        .floating-element {
          position: absolute;
          border-radius: 50%;
          opacity: 0.6;
          animation: floatUp linear infinite;
        }

        .floating-element.brain {
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
          background: linear-gradient(45deg, #FFD700, #FFA500);
        }

        .floating-element.diamond {
          clip-path: polygon(20% 0%, 80% 0%, 100% 50%, 80% 100%, 20% 100%, 0% 50%);
          background: #FFA500;
        }

        .floating-element.circle {
          background: #FFA500;
        }
        
        .hero-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
          width: 100%;
          display: flex;
          align-items: center;
          gap: 60px;
          z-index: 2;
          position: relative;
        }
        
        .hero-text {
          flex: 1;
          padding-right: 40px;
          animation: fadeInUp 1s ease-out;
        }
        
        .hero-video {
          flex: 1;
          position: relative;
          animation: fadeInUp 1s 0.3s ease-out both;
        }
        
        h1 {
          font-size: 4.5rem;
          font-weight: 900;
          margin-bottom: 15px;
          position: relative;
          overflow: hidden;
          min-height: 1.2em;
          line-height: 1.1;
        }
        
        .typing-text {
          display: inline-block;
          background: linear-gradient(45deg, #FFD700 0%, #FFA500 30%, #FFD700 60%, #FF8C00 100%);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientWave 4s ease-in-out infinite;
          position: relative;
        }

        .typing-text::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(255, 255, 255, 0.4), 
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
          z-index: 1;
          -webkit-background-clip: text;
          background-clip: text;
        }

        .cursor {
          display: inline-block;
          width: 3px;
          height: 1em;
          background: #FFD700;
          margin-left: 2px;
          animation: blink 1s infinite;
        }

        .cursor.hidden {
          display: none;
        }
        
        .subtitle {
          font-size: 1.2rem;
          color: #888;
          letter-spacing: 4px;
          margin-bottom: 30px;
          text-transform: uppercase;
          animation: textReveal 1s 0.4s ease-out both;
        }
        
        .description {
          color: #ccc;
          line-height: 1.8;
          font-size: 1.2rem;
          margin-bottom: 20px;
          animation: fadeInUp 1s 0.6s ease-out both;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin: 30px 0;
          animation: fadeInUp 1s 0.8s ease-out both;
        }

        .feature-card {
          background: rgba(255, 215, 0, 0.05);
          border: 1px solid rgba(255, 215, 0, 0.15);
          border-radius: 12px;
          padding: 15px;
          transition: all 0.3s ease;
          animation: slideInScale 0.8s ease-out calc(0.9s + var(--delay)) both;
        }

        .feature-card:hover {
          background: rgba(255, 215, 0, 0.08);
          border-color: rgba(255, 215, 0, 0.3);
          transform: translateY(-3px);
        }

        .feature-icon {
          font-size: 1.5rem;
          margin-bottom: 8px;
          display: block;
        }

        .feature-title {
          color: #FFD700;
          font-size: 1rem;
          font-weight: bold;
          margin-bottom: 5px;
        }

        .feature-text {
          color: #bbb;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .stats {
          display: flex;
          gap: 40px;
          margin-bottom: 40px;
          animation: fadeInUp 1s 1s ease-out both;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 900;
          color: #FFD700;
          display: block;
          animation: brainPulse 2s infinite;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #888;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        
        .cta-buttons {
          display: flex;
          gap: 20px;
          animation: bounce 1s 1.2s ease-out both;
        }
        
        .primary-btn {
          display: inline-block;
          padding: 20px 50px;
          background: linear-gradient(45deg, #FFD700, #FFA500, #FFD700);
          background-size: 200% 200%;
          color: #000;
          text-decoration: none;
          font-weight: bold;
          font-size: 1.2rem;
          border-radius: 50px;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 
            0 8px 25px rgba(255, 215, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          text-transform: uppercase;
          letter-spacing: 1px;
          border: none;
          cursor: pointer;
          animation: glowPulse 2s 2s infinite;
        }

        .secondary-btn {
          display: inline-block;
          padding: 20px 40px;
          background: transparent;
          color: #FFD700;
          text-decoration: none;
          font-weight: bold;
          font-size: 1.1rem;
          border: 2px solid #FFD700;
          border-radius: 50px;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
        }

        .secondary-btn:hover {
          background: rgba(255, 215, 0, 0.1);
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(255, 215, 0, 0.3);
        }
        
        .primary-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: left 0.6s ease;
        }
        
        .primary-btn:hover {
          transform: translateY(-8px) scale(1.05);
          box-shadow: 
            0 15px 40px rgba(255, 215, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
          background-position: 100% 0;
        }
        
        .primary-btn:hover::before {
          left: 100%;
        }
        
        .video-container {
          position: relative;
          width: 120%;
          max-width: 800px;
          margin: 0 auto;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(255, 215, 0, 0.1);
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .video-container:hover {
          transform: scale(1.03) rotateY(5deg) rotateX(2deg);
          box-shadow: 
            0 30px 60px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(255, 215, 0, 0.3),
            0 0 50px rgba(255, 215, 0, 0.1);
          animation: videoGlow 2s infinite;
        }
        
        .video-container video {
          width: 100%;
          height: auto;
          border-radius: 20px;
          display: block;
        }

        .brain-icon {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 60px;
          height: 60px;
          background: linear-gradient(45deg, #FFD700, #FFA500);
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
          opacity: 0.8;
          animation: brainPulse 3s infinite;
        }

        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            45deg,
            rgba(255, 215, 0, 0.05) 0%,
            transparent 30%,
            transparent 70%,
            rgba(255, 165, 0, 0.05) 100%
          );
          pointer-events: none;
          opacity: ${isVideoLoaded ? 1 : 0};
          transition: opacity 0.5s ease;
        }
        
        @media (max-width: 1200px) {
          .hero-content {
            flex-direction: column;
            gap: 40px;
            text-align: center;
          }
          
          .hero-text {
            padding-right: 0;
          }
          
          h1 {
            font-size: 3.5rem;
          }

          .stats {
            justify-content: center;
          }
          
          .video-container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 768px) {
          h1 {
            font-size: 2.8rem;
          }
          
          .hero-content {
            padding: 0 15px;
          }

          .stats {
            gap: 20px;
          }

          .stat-number {
            font-size: 2rem;
          }
          
          .video-container {
            width: 100%;
            max-width: 500px;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .primary-btn,
          .secondary-btn {
            width: 100%;
            max-width: 300px;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 2.2rem;
          }

          .stats {
            flex-direction: column;
            gap: 15px;
          }
        }
        
        .features-list {
          display: grid;
          grid-template-columns: 1fr;
          gap: 15px;
          margin: 30px 0;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 15px 0;
          border-bottom: 1px solid rgba(255, 215, 0, 0.1);
          animation: fadeInUp 1s ease-out calc(1.1s + var(--delay)) both;
        }

        .feature-icon {
          width: 20px;
          height: 20px;
          background: #FFD700;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          color: #000;
          font-weight: bold;
          flex-shrink: 0;
        }

        .feature-text {
          color: #bbb;
          font-size: 1rem;
        }
      `}</style>

      <div className="hero-container">
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-[60px] bg-gradient-to-b from-[#050815] via-[rgba(5,8,21,0.8)] to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-gradient-to-t from-[#050815] via-[rgba(5,8,21,0.8)] to-transparent"></div>
        </div>
        
        <div className="floating-elements">
          {floatingElements.map((element) => (
            <div
              key={element.id}
              className={`floating-element ${element.type}`}
              style={{
                left: `${element.left}%`,
                width: `${element.size}px`,
                height: `${element.size}px`,
                animationDelay: `${element.delay}s`,
                animationDuration: `${element.duration}s`
              }}
            />
          ))}
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <h1>
                <span style={{ color: '#fff' }}>Get Direct Access to</span>
              <span className="typing-text">{displayText}</span>
              <span className={`cursor ${isTypingComplete ? 'hidden' : ''}`}></span>
            </h1>
            <h2 className="subtitle">Connect • Pitch • Secure Funding</h2>
            <p className="description">
              Transform your startup journey with direct access to investors who invest specifically in your sector of business. No more cold emails or endless networking events.
            </p>
            
            <div className="features-list">
              <div className="feature-item" style={{'--delay': '0.1s'}}>
                <div className="feature-icon">→</div>
                <div className="feature-text">Schedule meetings directly with sector-specific investors</div>
              </div>
              <div className="feature-item" style={{'--delay': '0.2s'}}>
                <div className="feature-icon">💼</div>
                <div className="feature-text">Built-in meeting and chat options for seamless communication</div>
              </div>
              <div className="feature-item" style={{'--delay': '0.3s'}}>
                <div className="feature-icon">📋</div>
                <div className="feature-text">Complete legal and documentation services included</div>
              </div>
            </div>
            
            <div className="stats">
              <div className="stat">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Investors</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Industries</span>
              </div>
              <div className="stat">
                <span className="stat-number">99%</span>
                <span className="stat-label">Success Rate</span>
              </div>
            </div>

            <div className="cta-buttons">
              <button className="primary-btn" onClick={handleButtonClick}>
                Access Investors Now
              </button>
              <button className="secondary-btn">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="hero-video">
            <div className="video-container">
              <div className="brain-icon"></div>
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="Investors_Table.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="video-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvestorsTableHero