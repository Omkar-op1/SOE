"use client"
import { useEffect, useRef, useState } from "react"

const InvestorsTableHero = () => {
  const floatingElementsRef = useRef(null)
  const videoRef = useRef(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    const container = floatingElementsRef.current
    if (!container) return

    const elementCount = 25
    container.innerHTML = ""

    for (let i = 0; i < elementCount; i++) {
      const element = document.createElement("div")
      element.className = "floating-element"
      element.style.left = Math.random() * 100 + "%"
      element.style.animationDelay = Math.random() * 10 + "s"
      element.style.animationDuration = Math.random() * 5 + 8 + "s"

      // Add different shapes for variety
      if (i % 6 === 0) {
        element.style.width = "12px"
        element.style.height = "12px"
        element.style.borderRadius = "3px"
        element.style.transform = `rotate(${Math.random() * 360}deg)`
      } else if (i % 8 === 0) {
        element.style.width = "8px"
        element.style.height = "8px"
        element.style.clipPath = "polygon(50% 0%, 0% 100%, 100% 100%)"
      }

      container.appendChild(element)
    }

    // Mouse parallax effect
    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2
    }

    window.addEventListener("mousemove", handleMouseMove)

    function animateParallax() {
      const floatingElements = document.querySelectorAll(".floating-element")

      floatingElements.forEach((element, index) => {
        const speed = ((index % 3) + 1) * 0.4
        const x = mouseX * speed * 8
        const y = mouseY * speed * 8

        element.style.transform = `translate(${x}px, ${y}px)`
      })

      requestAnimationFrame(animateParallax)
    }

    animateParallax()

    // Auto-play video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
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

  const handleVideoLoad = () => {
    setIsVideoLoaded(true)
  }

  return (
    <div className="bg-[#0a0a0a] font-sans">
      <style jsx>{`
        @keyframes backgroundFlow {
          0% { 
            transform: rotate(0deg) scale(1);
            opacity: 0.4;
          }
          100% { 
            transform: rotate(3deg) scale(1.1);
            opacity: 0.7;
          }
        }
        
        @keyframes patternShift {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(80px) translateY(80px); }
        }
        
        @keyframes slideInLeft {
          0% {
            transform: translateX(-100px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes slideInRight {
          0% {
            transform: translateX(100px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes fadeInUp {
          0% {
            transform: translateY(50px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes gradientWave {
          0%, 100% { 
            background-position: 0% 50%;
            filter: drop-shadow(0 0 15px rgba(255, 215, 0, 0.4));
          }
          50% { 
            background-position: 100% 50%;
            filter: drop-shadow(0 0 25px rgba(255, 215, 0, 0.7));
          }
        }
        
        @keyframes floatUp {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          90% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes ripple {
          to {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        @keyframes videoGlow {
          0%, 100% { 
            box-shadow: 0 0 0 0 rgba(255, 215, 0, 0.2),
                        0 20px 40px rgba(0, 0, 0, 0.3);
          }
          50% { 
            box-shadow: 0 0 40px 15px rgba(255, 215, 0, 0.4),
                        0 30px 60px rgba(0, 0, 0, 0.4);
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-15px);
          }
          60% {
            transform: translateY(-8px);
          }
        }

        @keyframes glowPulse {
          0%, 100% {
            filter: drop-shadow(0 0 8px rgba(255, 215, 0, 0.4));
          }
          50% {
            filter: drop-shadow(0 0 30px rgba(255, 215, 0, 0.8));
          }
        }

        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(60px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(60px) rotate(-360deg);
          }
        }

        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes blink {
          0%, 50% { border-color: transparent; }
          51%, 100% { border-color: #FFD700; }
        }
        
        .hero-container {
          position: relative;
          width: 100%;
          min-height: 100vh;
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 25%, #1a1a1a 75%, #0a0a0a 100%);
          overflow: hidden;
          display: flex;
          align-items: center;
          padding: 100px 0;
        }
        
        .hero-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 30%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(255, 165, 0, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(255, 215, 0, 0.06) 0%, transparent 60%);
          animation: backgroundFlow 15s ease-in-out infinite alternate;
        }
        
        .hero-container::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(45deg, rgba(255, 215, 0, 0.03) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(255, 215, 0, 0.03) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(255, 215, 0, 0.03) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(255, 215, 0, 0.03) 75%);
          background-size: 80px 80px;
          animation: patternShift 25s linear infinite;
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
        }
        
        .floating-element {
          position: absolute;
          width: 8px;
          height: 8px;
          background: #FFD700;
          border-radius: 50%;
          opacity: 0.5;
          animation: floatUp 10s linear infinite;
        }
        
        .floating-element:nth-child(odd) {
          background: #FFA500;
          animation-duration: 12s;
        }
        
        .floating-element:nth-child(3n) {
          width: 6px;
          height: 6px;
          animation-duration: 14s;
        }
        
        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        
        .hero-text {
          animation: slideInLeft 1.2s ease-out;
        }
        
        .hero-video {
          animation: slideInRight 1.2s ease-out 0.3s both;
        }
        
        .hero-title {
          font-size: 5rem;
          font-weight: 900;
          margin-bottom: 20px;
          line-height: 1.1;
        }
        
        .hero-title .highlight {
          display: block;
          background: linear-gradient(45deg, #FFD700 0%, #FFA500 30%, #FFD700 60%, #FF8C00 100%);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientWave 4s ease-in-out infinite;
          position: relative;
          overflow: hidden;
          white-space: nowrap;
          border-right: 3px solid;
          animation: typewriter 2s steps(15) 1s both, blink 1s infinite step-end 3s, gradientWave 4s ease-in-out infinite 3s;
        }

        .hero-title .highlight::after {
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
          animation: shimmer 3s infinite 2s;
          z-index: 1;
          -webkit-background-clip: text;
          background-clip: text;
        }
        
        .hero-subtitle {
          font-size: 1.3rem;
          color: #888;
          letter-spacing: 3px;
          margin-bottom: 30px;
          text-transform: uppercase;
          animation: fadeInUp 1s ease-out 0.5s both;
        }
        
        .hero-description {
          color: #ccc;
          line-height: 1.8;
          font-size: 1.2rem;
          margin-bottom: 20px;
          animation: fadeInUp 1s ease-out 0.7s both;
        }
        
        .hero-features {
          color: #aaa;
          line-height: 1.8;
          font-size: 1.1rem;
          margin-bottom: 40px;
          animation: fadeInUp 1s ease-out 0.9s both;
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
        
        .cta-buttons {
          display: flex;
          gap: 20px;
          animation: bounce 1s ease-out 1.3s both;
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
            0 10px 30px rgba(255, 215, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          text-transform: uppercase;
          letter-spacing: 1px;
          border: none;
          cursor: pointer;
          animation: glowPulse 3s infinite;
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
          transform: translateY(-10px) scale(1.05);
          box-shadow: 
            0 20px 50px rgba(255, 215, 0, 0.6),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
          background-position: 100% 0;
        }
        
        .primary-btn:hover::before {
          left: 100%;
        }
        
        .video-container {
          position: relative;
          width: 100%;
          max-width: 700px;
          margin: 0 auto;
          border-radius: 25px;
          overflow: hidden;
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(255, 215, 0, 0.2);
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          animation: videoGlow 4s infinite;
        }
        
        .video-container:hover {
          transform: scale(1.05) rotateY(8deg) rotateX(3deg);
          box-shadow: 
            0 40px 80px rgba(0, 0, 0, 0.5),
            0 0 0 1px rgba(255, 215, 0, 0.4),
            0 0 60px rgba(255, 215, 0, 0.2);
        }

        .video-container::before {
          content: '';
          position: absolute;
          top: -30px;
          left: -30px;
          width: 50px;
          height: 50px;
          background: rgba(255, 215, 0, 0.7);
          border-radius: 50%;
          filter: blur(15px);
          z-index: -1;
          animation: orbit 12s linear infinite;
        }

        .video-container::after {
          content: '';
          position: absolute;
          bottom: -30px;
          right: -30px;
          width: 50px;
          height: 50px;
          background: rgba(255, 165, 0, 0.7);
          border-radius: 50%;
          filter: blur(15px);
          z-index: -1;
          animation: orbit 12s linear infinite reverse;
        }
        
        .video-container video {
          width: 100%;
          height: auto;
          border-radius: 25px;
          display: block;
        }

        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            45deg,
            rgba(255, 215, 0, 0.1) 0%,
            transparent 30%,
            transparent 70%,
            rgba(255, 165, 0, 0.1) 100%
          );
          pointer-events: none;
          opacity: ${isVideoLoaded ? 1 : 0};
          transition: opacity 0.5s ease;
        }
        
        @media (max-width: 1200px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 60px;
            text-align: center;
          }
          
          .hero-title {
            font-size: 4rem;
          }
        }
        
        @media (max-width: 768px) {
          .hero-content {
            padding: 0 15px;
            gap: 40px;
          }
          
          .hero-title {
            font-size: 3rem;
          }
          
          .hero-subtitle {
            font-size: 1.1rem;
            letter-spacing: 2px;
          }
          
          .hero-description {
            font-size: 1.1rem;
          }
          
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .primary-btn,
          .secondary-btn {
            width: 100%;
            max-width: 300px;
            text-align: center;
          }
          
          .video-container {
            max-width: 100%;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-container {
            padding: 60px 0;
          }
        }
      `}</style>

      <div className="hero-container">
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-[80px] bg-gradient-to-b from-[#050815] via-[rgba(5,8,21,0.8)] to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[80px] bg-gradient-to-t from-[#050815] via-[rgba(5,8,21,0.8)] to-transparent"></div>
        </div>
        
        <div className="floating-elements" ref={floatingElementsRef}></div>

        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span style={{ color: '#fff' }}>Get Direct Access to</span>
              <span className="highlight">Investors Table</span>
            </h1>
            
            <h2 className="hero-subtitle">Connect • Pitch • Secure Funding</h2>
            
            <p className="hero-description">
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
              <div className="feature-item" style={{'--delay': '0.4s'}}>
                <div className="feature-icon">⚡</div>
                <div className="feature-text">Custom-built hassle-free user interface</div>
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
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                onLoadedData={handleVideoLoad}
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