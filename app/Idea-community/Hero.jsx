"use client"
import { useEffect, useRef, useState } from "react"

const IdeaCommunityHero = () => {
  const floatingElementsRef = useRef(null)
  const videoRef = useRef(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    const container = floatingElementsRef.current
    if (!container) return

    const elementCount = 28
    container.innerHTML = ""

    for (let i = 0; i < elementCount; i++) {
      const element = document.createElement("div")
      element.className = "floating-element"
      element.style.left = Math.random() * 100 + "%"
      element.style.animationDelay = Math.random() * 12 + "s"
      element.style.animationDuration = Math.random() * 6 + 9 + "s"

      // Add different shapes for variety
      if (i % 5 === 0) {
        element.style.width = "14px"
        element.style.height = "14px"
        element.style.borderRadius = "4px"
        element.style.transform = `rotate(${Math.random() * 360}deg)`
      } else if (i % 7 === 0) {
        element.style.width = "10px"
        element.style.height = "10px"
        element.style.clipPath = "polygon(50% 0%, 0% 100%, 100% 100%)"
      } else if (i % 9 === 0) {
        element.style.width = "6px"
        element.style.height = "16px"
        element.style.borderRadius = "3px"
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
        const speed = ((index % 4) + 1) * 0.35
        const x = mouseX * speed * 12
        const y = mouseY * speed * 12

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
            opacity: 0.5;
          }
          100% { 
            transform: rotate(-2deg) scale(1.08);
            opacity: 0.8;
          }
        }
        
        @keyframes patternShift {
          0% { transform: translateX(0) translateY(0) rotate(0deg); }
          100% { transform: translateX(100px) translateY(100px) rotate(5deg); }
        }
        
        @keyframes slideInLeft {
          0% {
            transform: translateX(-120px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes slideInRight {
          0% {
            transform: translateX(120px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes fadeInUp {
          0% {
            transform: translateY(60px);
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
            filter: drop-shadow(0 0 12px rgba(255, 215, 0, 0.5));
          }
          50% { 
            background-position: 100% 50%;
            filter: drop-shadow(0 0 28px rgba(255, 215, 0, 0.8));
          }
        }
        
        @keyframes floatUp {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          15% {
            opacity: 0.8;
          }
          85% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-120px) rotate(360deg);
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
            box-shadow: 0 0 0 0 rgba(255, 215, 0, 0.3),
                        0 25px 50px rgba(0, 0, 0, 0.3);
          }
          50% { 
            box-shadow: 0 0 50px 20px rgba(255, 215, 0, 0.5),
                        0 35px 70px rgba(0, 0, 0, 0.4);
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
            transform: translateY(-18px);
          }
          60% {
            transform: translateY(-12px);
          }
        }

        @keyframes glowPulse {
          0%, 100% {
            filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.5));
          }
          50% {
            filter: drop-shadow(0 0 35px rgba(255, 215, 0, 0.9));
          }
        }

        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(70px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(70px) rotate(-360deg);
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

        @keyframes slideInScale {
          0% {
            transform: scale(0.8) translateY(50px);
            opacity: 0;
          }
          100% {
            transform: scale(1) translateY(0);
            opacity: 1;
          }
        }

        @keyframes cardFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .hero-container {
          position: relative;
          width: 100%;
          min-height: 100vh;
          background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 20%, #1e1e1e 80%, #0a0a0a 100%);
          overflow: hidden;
          display: flex;
          align-items: center;
          padding: 120px 0;
        }
        
        .hero-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 30% 20%, rgba(255, 215, 0, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(255, 165, 0, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 20% 70%, rgba(255, 215, 0, 0.08) 0%, transparent 60%);
          animation: backgroundFlow 18s ease-in-out infinite alternate;
        }
        
        .hero-container::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(30deg, rgba(255, 215, 0, 0.04) 25%, transparent 25%),
            linear-gradient(-30deg, rgba(255, 215, 0, 0.04) 25%, transparent 25%),
            linear-gradient(30deg, transparent 75%, rgba(255, 215, 0, 0.04) 75%),
            linear-gradient(-30deg, transparent 75%, rgba(255, 215, 0, 0.04) 75%);
          background-size: 100px 100px;
          animation: patternShift 30s linear infinite;
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
          width: 10px;
          height: 10px;
          background: #FFD700;
          border-radius: 50%;
          opacity: 0.6;
          animation: floatUp 12s linear infinite;
        }
        
        .floating-element:nth-child(odd) {
          background: #FFA500;
          animation-duration: 14s;
        }
        
        .floating-element:nth-child(3n) {
          width: 8px;
          height: 8px;
          animation-duration: 16s;
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
          gap: 100px;
          align-items: center;
        }
        
        .hero-text {
          animation: slideInLeft 1.4s ease-out;
        }
        
        .hero-video {
          animation: slideInRight 1.4s ease-out 0.4s both;
        }
        
        .hero-title {
          font-size: 5.2rem;
          font-weight: 900;
          margin-bottom: 25px;
          line-height: 1.1;
        }
        
        .hero-title .highlight {
          display: block;
          background: linear-gradient(45deg, #FFD700 0%, #FFA500 25%, #FFD700 50%, #FF8C00 75%, #FFD700 100%);
          background-size: 400% 400%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientWave 5s ease-in-out infinite;
          position: relative;
          overflow: hidden;
          white-space: nowrap;
          border-right: 3px solid;
          animation: typewriter 2.5s steps(16) 1s both, blink 1s infinite step-end 3.5s, gradientWave 5s ease-in-out infinite 3.5s;
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
            rgba(255, 255, 255, 0.5), 
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 3.5s infinite 2.5s;
          z-index: 1;
          -webkit-background-clip: text;
          background-clip: text;
        }
        
        .hero-subtitle {
          font-size: 1.4rem;
          color: #888;
          letter-spacing: 4px;
          margin-bottom: 35px;
          text-transform: uppercase;
          animation: fadeInUp 1.2s ease-out 0.6s both;
        }
        
        .hero-description {
          color: #ccc;
          line-height: 1.9;
          font-size: 1.25rem;
          margin-bottom: 25px;
          animation: fadeInUp 1.2s ease-out 0.8s both;
        }
        
        .hero-features {
          color: #aaa;
          line-height: 1.8;
          font-size: 1.1rem;
          margin-bottom: 45px;
          animation: fadeInUp 1.2s ease-out 1s both;
        }

        .features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin: 35px 0;
        }

        .feature-card {
          background: rgba(255, 215, 0, 0.05);
          border: 1px solid rgba(255, 215, 0, 0.15);
          border-radius: 15px;
          padding: 20px;
          transition: all 0.4s ease;
          animation: slideInScale 1s ease-out calc(1.2s + var(--delay)) both;
        }

        .feature-card:hover {
          background: rgba(255, 215, 0, 0.08);
          border-color: rgba(255, 215, 0, 0.3);
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(255, 215, 0, 0.1);
          animation: cardFloat 2s ease-in-out infinite;
        }

        .feature-icon {
          font-size: 2rem;
          margin-bottom: 10px;
          display: block;
        }

        .feature-title {
          color: #FFD700;
          font-size: 1.1rem;
          font-weight: bold;
          margin-bottom: 8px;
        }

        .feature-text {
          color: #bbb;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .stats-section {
          display: flex;
          gap: 30px;
          margin: 30px 0;
          animation: fadeInUp 1.2s ease-out 1.4s both;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 900;
          color: #FFD700;
          display: block;
          line-height: 1;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #888;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .cta-buttons {
          display: flex;
          gap: 25px;
          animation: bounce 1.2s ease-out 1.6s both;
        }
        
        .primary-btn {
          display: inline-block;
          padding: 22px 55px;
          background: linear-gradient(45deg, #FFD700, #FFA500, #FFD700);
          background-size: 200% 200%;
          color: #000;
          text-decoration: none;
          font-weight: bold;
          font-size: 1.25rem;
          border-radius: 50px;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 
            0 12px 35px rgba(255, 215, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          text-transform: uppercase;
          letter-spacing: 1px;
          border: none;
          cursor: pointer;
          animation: glowPulse 3.5s infinite;
        }

        .secondary-btn {
          display: inline-block;
          padding: 22px 45px;
          background: transparent;
          color: #FFD700;
          text-decoration: none;
          font-weight: bold;
          font-size: 1.2rem;
          border: 2px solid #FFD700;
          border-radius: 50px;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
        }

        .secondary-btn:hover {
          background: rgba(255, 215, 0, 0.1);
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(255, 215, 0, 0.4);
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
          transform: translateY(-12px) scale(1.06);
          box-shadow: 
            0 25px 60px rgba(255, 215, 0, 0.7),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
          background-position: 100% 0;
        }
        
        .primary-btn:hover::before {
          left: 100%;
        }
        
        .video-container {
          position: relative;
          width: 100%;
          max-width: 750px;
          margin: 0 auto;
          border-radius: 30px;
          overflow: hidden;
          box-shadow: 
            0 30px 60px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(255, 215, 0, 0.2);
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          animation: videoGlow 5s infinite;
        }
        
        .video-container:hover {
          transform: scale(1.06) rotateY(10deg) rotateX(4deg);
          box-shadow: 
            0 50px 100px rgba(0, 0, 0, 0.5),
            0 0 0 1px rgba(255, 215, 0, 0.4),
            0 0 80px rgba(255, 215, 0, 0.3);
        }

        .video-container::before {
          content: '';
          position: absolute;
          top: -40px;
          left: -40px;
          width: 60px;
          height: 60px;
          background: rgba(255, 215, 0, 0.8);
          border-radius: 50%;
          filter: blur(20px);
          z-index: -1;
          animation: orbit 15s linear infinite;
        }

        .video-container::after {
          content: '';
          position: absolute;
          bottom: -40px;
          right: -40px;
          width: 60px;
          height: 60px;
          background: rgba(255, 165, 0, 0.8);
          border-radius: 50%;
          filter: blur(20px);
          z-index: -1;
          animation: orbit 15s linear infinite reverse;
        }
        
        .video-container video {
          width: 100%;
          height: auto;
          border-radius: 30px;
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
            rgba(255, 215, 0, 0.08) 0%,
            transparent 25%,
            transparent 75%,
            rgba(255, 165, 0, 0.08) 100%
          );
          pointer-events: none;
          opacity: ${isVideoLoaded ? 1 : 0};
          transition: opacity 0.5s ease;
        }
        
        @media (max-width: 1280px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 80px;
            text-align: center;
          }
          
          .hero-title {
            font-size: 4.5rem;
          }
        }
        
        @media (max-width: 768px) {
          .hero-content {
            padding: 0 15px;
            gap: 50px;
          }
          
          .hero-title {
            font-size: 3.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.2rem;
            letter-spacing: 3px;
          }
          
          .hero-description {
            font-size: 1.15rem;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .stats-section {
            justify-content: center;
            gap: 25px;
          }
          
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .primary-btn,
          .secondary-btn {
            width: 100%;
            max-width: 320px;
            text-align: center;
          }
          
          .video-container {
            max-width: 100%;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2.8rem;
          }
          
          .hero-container {
            padding: 80px 0;
          }

          .stats-section {
            flex-direction: column;
            gap: 20px;
          }

          .stat-number {
            font-size: 2rem;
          }
        }
      `}</style>

      <div className="hero-container">
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-[100px] bg-gradient-to-b from-[#050815] via-[rgba(5,8,21,0.8)] to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-[#050815] via-[rgba(5,8,21,0.8)] to-transparent"></div>
        </div>
        
        <div className="floating-elements" ref={floatingElementsRef}></div>

        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span style={{ color: '#fff' }}>Build Your Team with</span>
              <span className="highlight">Idea Community</span>
            </h1>
            
            <h2 className="hero-subtitle">Connect • Collaborate • Create</h2>
            
            <p className="hero-description">
              Access a curated network of working professionals who are passionate about startups and ready to join your entrepreneurial journey. No more struggling to find the right talent.
            </p>
            
            <div className="features-grid">
              <div className="feature-card" style={{'--delay': '0.1s'}}>
                <span className="feature-icon">👥</span>
                <div className="feature-title">Startup-Ready Professionals</div>
                <div className="feature-text">Connect with professionals actively seeking startup opportunities</div>
              </div>
              <div className="feature-card" style={{'--delay': '0.2s'}}>
                <span className="feature-icon">🎯</span>
                <div className="feature-title">Hand-Pick Your Team</div>
                <div className="feature-text">Browse profiles and select the perfect fit for your vision</div>
              </div>
              <div className="feature-card" style={{'--delay': '0.3s'}}>
                <span className="feature-icon">💼</span>
                <div className="feature-title">Diverse Skill Sets</div>
                <div className="feature-text">Access talent across all domains and experience levels</div>
              </div>
              <div className="feature-card" style={{'--delay': '0.4s'}}>
                <span className="feature-icon">⚡</span>
                <div className="feature-title">Fast Connections</div>
                <div className="feature-text">Streamlined process to get your team assembled quickly</div>
              </div>
            </div>

            <div className="stats-section">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Active Professionals</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Skill Categories</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">95%</span>
                <span className="stat-label">Match Success Rate</span>
              </div>
            </div>
            
            <div className="cta-buttons">
              <button className="primary-btn" onClick={handleButtonClick}>
                Join Community
              </button>
              <button className="secondary-btn">
                Browse Talent
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
                <source src="Idea_Community.mp4" type="video/mp4" />
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

export default IdeaCommunityHero