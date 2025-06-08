"use client"
import { useEffect, useRef, useState } from "react"

const ThinkersClubHero = () => {
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
      element.style.animationDelay = Math.random() * 8 + "s"
      element.style.animationDuration = Math.random() * 4 + 8 + "s"

      // Add lightbulb and brain-like shapes for thinking theme
      if (i % 6 === 0) {
        element.style.width = "12px"
        element.style.height = "12px"
        element.style.borderRadius = "50% 50% 50% 50% / 60% 60% 40% 40%"
        element.style.background = "linear-gradient(45deg, #FFD700, #FFA500)"
      } else if (i % 8 === 0) {
        element.style.width = "8px"
        element.style.height = "10px"
        element.style.clipPath = "polygon(20% 0%, 80% 0%, 100% 50%, 80% 100%, 20% 100%, 0% 50%)"
      }

      container.appendChild(element)
    }

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
        const speed = ((index % 3) + 1) * 0.2
        const x = mouseX * speed * 8
        const y = mouseY * speed * 8

        element.style.transform = `translate(${x}px, ${y}px)`
      })

      requestAnimationFrame(animateParallax)
    }

    animateParallax()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
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
    <div className="bg-[#0a0a0a] font-sans">
      <style jsx>{`
        @keyframes backgroundFlow {
          0% { 
            transform: rotate(0deg) scale(1);
            opacity: 0.5;
          }
          100% { 
            transform: rotate(2deg) scale(1.05);
            opacity: 0.8;
          }
        }
        
        @keyframes patternShift {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(60px) translateY(60px); }
        }
        
        @keyframes textReveal {
          0% {
            transform: translateY(100px) rotateX(-90deg);
            opacity: 0;
          }
          50% {
            transform: translateY(20px) rotateX(-20deg);
            opacity: 0.7;
          }
          100% {
            transform: translateY(0) rotateX(0deg);
            opacity: 1;
          }
        }
        
        @keyframes gradientWave {
          0%, 100% { 
            background-position: 0% 50%;
            filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.3));
          }
          50% { 
            background-position: 100% 50%;
            filter: drop-shadow(0 0 20px rgba(255, 215, 0, 0.6));
          }
        }
        
        @keyframes floatUp {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
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
          0%, 100% { box-shadow: 0 0 0 0 rgba(255, 215, 0, 0.3); }
          50% { box-shadow: 0 0 30px 10px rgba(255, 215, 0, 0.5); }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
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

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-20px);
          }
          60% {
            transform: translateY(-10px);
          }
        }

        @keyframes glowPulse {
          0%, 100% {
            filter: drop-shadow(0 0 5px rgba(255, 215, 0, 0.3));
          }
          50% {
            filter: drop-shadow(0 0 25px rgba(255, 215, 0, 0.7));
          }
        }

        @keyframes brainPulse {
          0%, 100% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.1) rotate(2deg);
          }
        }
        
        .hero-container {
          position: relative;
          width: 100%;
          height: 100vh;
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
        }
        
        .floating-element {
          position: absolute;
          width: 6px;
          height: 6px;
          background: #FFD700;
          border-radius: 50%;
          opacity: 0.6;
          animation: floatUp 8s linear infinite;
        }
        
        .floating-element:nth-child(odd) {
          background: #FFA500;
          animation-duration: 10s;
        }
        
        .floating-element:nth-child(2n) {
          width: 4px;
          height: 4px;
          animation-duration: 12s;
        }
        
        .hero-content {
          max-width: 1200px;
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
          animation: textReveal 1s 0.2s ease-out both;
        }
        
        h1 strong {
          display: inline-block;
          background: linear-gradient(45deg, #FFD700 0%, #FFA500 30%, #FFD700 60%, #FF8C00 100%);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientWave 4s ease-in-out infinite;
          position: relative;
        }

        h1 strong::after {
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
          animation: textReveal 1s 0.6s ease-out both;
        }
        
        .features {
          color: #aaa;
          line-height: 1.8;
          font-size: 1rem;
          margin-bottom: 40px;
          animation: textReveal 1s 0.8s ease-out both;
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
        
        .hero-btn {
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
          animation: bounce 1s 1.2s ease-out both, glowPulse 2s 2s infinite;
        }
        
        .hero-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: left 0.6s ease;
        }
        
        .hero-btn:hover {
          transform: translateY(-8px) scale(1.05);
          box-shadow: 
            0 15px 40px rgba(255, 215, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
          background-position: 100% 0;
        }
        
        .hero-btn:hover::before {
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
        
        @media (max-width: 993px) {
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
        }
      `}</style>

      <div className="hero-container">
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-[60px] bg-gradient-to-b from-[#050815] via-[rgba(5,8,21,0.8)] to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-gradient-to-t from-[#050815] via-[rgba(5,8,21,0.8)] to-transparent"></div>
        </div>
        
        <div className="floating-elements" ref={floatingElementsRef}></div>

        <div className="hero-content">
          <div className="hero-text">
            <h1>
              <strong>Thinkers Club</strong>
            </h1>
            <h2 className="subtitle">Daily Business Ideas</h2>
            <p className="description">
              Panel of Analysts and Experts who create business ideas with 99.9% Success Rate.
            </p>
            <p className="features">
              World class Custom Built Application with 8+ Learning Groups and exclusive access to proven business strategies.
            </p>
            
            <div className="stats">
              <div className="stat">
                <span className="stat-number">99.9%</span>
                <span className="stat-label">Success Rate</span>
              </div>
              <div className="stat">
                <span className="stat-number">8+</span>
                <span className="stat-label">Learning Groups</span>
              </div>
              <div className="stat">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Business Ideas</span>
              </div>
            </div>

            <button className="hero-btn" onClick={handleButtonClick}>
              Join Thinkers Club
            </button>
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
                <source src="Thinkers_Club.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThinkersClubHero