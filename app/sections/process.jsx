"use client"
import { useEffect, useState } from "react"

const TimelineProcess = () => {
  const [activeItem, setActiveItem] = useState(null)

  useEffect(() => {
    // Animation for timeline items when they come into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0")
            entry.target.classList.remove("-translate-x-10", "translate-x-10")
            entry.target.classList.add("animate-fadeInSlide")

            // Set active item for progress line animation
            const index = Number.parseInt(entry.target.getAttribute("data-index"))
            if (!isNaN(index)) {
              setActiveItem(index)
            }
          }
        })
      },
      { threshold: 0.3, rootMargin: "0px 0px -100px 0px" },
    )

    document.querySelectorAll(".timeline-item").forEach((item) => {
      observer.observe(item)
    })

    // Create floating particles
    const createFloatingParticles = () => {
      const timelineSection = document.querySelector(".timeline-section")
      if (!timelineSection) return

      // Clear existing particles first
      const existingParticles = timelineSection.querySelectorAll(".floating-particle")
      existingParticles.forEach((particle) => particle.remove())

      for (let i = 0; i < 15; i++) {
        const particle = document.createElement("div")
        particle.className = "floating-particle"
        particle.style.left = `${Math.random() * 100}%`
        particle.style.animationDelay = `${Math.random() * 8}s`
        particle.style.animationDuration = `${Math.random() * 4 + 8}s`
        particle.style.top = `${Math.random() * 100}%`
        timelineSection.appendChild(particle)
      }
    }

    createFloatingParticles()

    return () => observer.disconnect()
  }, [])

  const timelineItems = [
    {
      icon: "🔍",
      title: "Week 1-2: Discovery",
      description:
        "Understanding your business needs and gathering requirements through in-depth discussions and research to establish project foundations.",
    },
    {
      icon: "🎨",
      title: "Week 3-4: Design",
      description:
        "Creating wireframes, mockups, and finalizing the visual design with multiple iterations to ensure the best user experience and interface.",
    },
    {
      icon: "💻",
      title: "Week 5-8: Development",
      description:
        "Building the application with modern technologies, following best practices, and providing regular progress updates through demos and meetings.",
    },
    {
      icon: "🚀",
      title: "Week 9-10: Testing & Launch",
      description:
        "Comprehensive quality assurance, final testing across devices and scenarios, and smooth project deployment with post-launch support.",
    },
  ]

  return (
    <section className="timeline-section py-20 bg-gradient-to-b from-gray-900 to-[#0a0a0a] relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[6px] h-[6px] bg-[#FFD700] rounded-full opacity-60 animate-floatUp"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${Math.random() * 4 + 8}s`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,215,0,0.02)_25%,transparent_25%),linear-gradient(-45deg,rgba(255,215,0,0.02)_25%,transparent_25%),linear-gradient(45deg,transparent_75%,rgba(255,215,0,0.02)_75%),linear-gradient(-45deg,transparent_75%,rgba(255,215,0,0.02)_75%)] bg-[length:60px_60px] animate-patternShift pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] bg-clip-text text-transparent animate-shimmer">
          Project Timeline
        </h2>

        <div className="timeline relative max-w-5xl mx-auto">
          {/* Timeline line - DESKTOP ONLY */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FFD700]/30 to-[#FFA500]/30 transform -translate-x-1/2 md:block hidden"></div>

          {/* Timeline progress line - animated based on active item - DESKTOP ONLY */}
          <div
            className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-[#FFD700] to-[#FFA500] transform -translate-x-1/2 md:block hidden timeline-progress-line"
            style={{
              height: activeItem !== null ? `${Math.min(100, (activeItem + 1) * 25)}%` : "0%",
              transition: "height 0.8s ease-out",
            }}
          ></div>

          {/* Mobile timeline line */}
          <div className="absolute left-[20px] top-0 bottom-0 w-1 bg-gradient-to-b from-[#FFD700]/30 to-[#FFA500]/30 md:hidden block"></div>

          {/* Mobile timeline progress line */}
          <div
            className="absolute left-[20px] top-0 w-1 bg-gradient-to-b from-[#FFD700] to-[#FFA500] md:hidden block timeline-progress-line"
            style={{
              height: activeItem !== null ? `${Math.min(100, (activeItem + 1) * 25)}%` : "0%",
              transition: "height 0.8s ease-out",
            }}
          ></div>

          {/* Timeline items */}
          {timelineItems.map((item, index) => (
            <div
              key={index}
              data-index={index}
              className={`timeline-item mb-24 relative opacity-0 ${
                index % 2 === 0 ? "-translate-x-10" : "translate-x-10 md:transform-none md:-translate-x-10"
              } transition-all duration-700`}
            >
              {/* Desktop timeline dot */}
              <div className="timeline-dot absolute left-1/2 top-8 w-6 h-6 bg-[#FFD700] rounded-full transform -translate-x-1/2 shadow-[0_0_15px_rgba(255,215,0,0.5)] md:block hidden z-10"></div>

              {/* Mobile timeline dot */}
              <div className="timeline-dot absolute left-[20px] top-8 w-6 h-6 bg-[#FFD700] rounded-full transform -translate-x-1/2 shadow-[0_0_15px_rgba(255,215,0,0.5)] md:hidden block z-10"></div>

              <div
                className={`timeline-content bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-[#FFD700]/20 shadow-[0_5px_20px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,215,0,0.1)] w-full md:w-[42%] ${
                  index % 2 === 0
                    ? "md:float-left md:clear-right md:mr-[8%]"
                    : "md:float-right md:clear-left md:ml-[8%]"
                } ml-[60px] md:ml-0`}
              >
                {/* Desktop arrow */}
                <div
                  className={`absolute ${
                    index % 2 === 0 ? "right-[-12px]" : "left-[-12px]"
                  } top-8 w-6 h-6 bg-gray-800 transform rotate-45 md:block hidden ${
                    index % 2 === 0 ? "border-r border-t" : "border-l border-b"
                  } border-[#FFD700]/20`}
                ></div>

                {/* Mobile arrow */}
                <div className="absolute left-[-12px] top-8 w-6 h-6 bg-gray-800 transform rotate-45 md:hidden block border-l border-b border-[#FFD700]/20"></div>

                <div className="timeline-icon absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFA500] flex items-center justify-center text-black text-xl shadow-[0_0_20px_rgba(255,215,0,0.4)] animate-iconPulse">
                  <span>{item.icon}</span>
                </div>

                <h3 className="text-2xl font-bold text-[#FFD700] mb-3 pl-8">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>

                <div className="timeline-glow absolute inset-0 bg-gradient-to-r from-[#FFD700]/0 via-[#FFD700]/5 to-[#FFD700]/0 rounded-xl opacity-0 transition-opacity duration-1000"></div>
              </div>
            </div>
          ))}

          {/* Clearfix */}
          <div className="clear-both"></div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeInSlide {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeInSlide {
          animation: fadeInSlide 0.8s ease forwards;
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

        .animate-floatUp {
          animation: floatUp 8s linear infinite;
        }

        @keyframes patternShift {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 60px 60px;
          }
        }

        .animate-patternShift {
          animation: patternShift 20s linear infinite;
        }

        @keyframes pulseDot {
          0%,
          100% {
            transform: translateX(-50%) scale(1);
            box-shadow: 0 0 0 0 rgba(255, 215, 0, 0.7);
          }
          50% {
            transform: translateX(-50%) scale(1.2);
            box-shadow: 0 0 0 10px rgba(255, 215, 0, 0);
          }
        }

        .timeline-dot {
          animation: pulseDot 2s infinite;
          z-index: 20;
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }

        @keyframes iconPulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }

        .animate-iconPulse {
          animation: iconPulse 2s ease-in-out infinite;
        }

        .timeline-content {
          transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease;
          position: relative;
          z-index: 10;
        }

        .timeline-content:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 215, 0, 0.3) !important;
        }

        .timeline-content:hover .timeline-glow {
          opacity: 1;
        }

        .floating-particle {
          position: absolute;
          width: 6px;
          height: 6px;
          background: linear-gradient(45deg, #FFD700, #FFA500);
          border-radius: 50%;
          animation: floatUp 8s linear infinite;
          pointer-events: none;
          z-index: 1;
        }

        .floating-particle:nth-child(odd) {
          background: linear-gradient(45deg, #FFA500, #FF8C00);
          animation-duration: 10s;
        }

        .floating-particle:nth-child(3n) {
          width: 8px;
          height: 8px;
          animation-duration: 12s;
        }

        .timeline {
          padding: 0 20px;
          position: relative;
        }

        .timeline-item {
          position: relative;
          clear: both;
        }

        @media (min-width: 768px) {
          .timeline {
            padding: 0 40px;
          }
        }

        @media (max-width: 768px) {
          .timeline-item {
            padding-left: 0;
          }
          
          .timeline-content {
            width: calc(100% - 60px) !important;
            margin-left: 60px !important;
            margin-right: 0 !important;
            float: none !important;
            clear: none !important;
          }
          
          .timeline-dot {
            left: 20px !important;
          }
        }
      `}</style>
    </section>
  )
}

export default TimelineProcess
