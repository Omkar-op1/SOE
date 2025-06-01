"use client"
import { useEffect, useState } from "react"
import Image from "next/image"

const PriceComparison = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.3 }
    )

    const section = document.querySelector(".price-comparison-section")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="price-comparison-section bg-gradient-to-b from-slate-900 via-purple-950 to-slate-900 py-16 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-amber-400 to-yellow-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Elegant Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent tracking-wide">
            Traditional vs Smart Learning
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto rounded-full"></div>
        </div>

        {/* Optimized Image Section */}
        <div className={`mb-16 transition-all duration-1200 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-98"}`}>
          <div className="relative group max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 via-indigo-800/20 to-purple-800/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
            <div className="relative border border-amber-500/20 rounded-2xl overflow-hidden aspect-video">
              <Image
                src="/images/PAy.jpg"
                alt="Investment comparison showing traditional education costs versus Thinkers Club affordable pricing"
                width={800}
                height={450}
                className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-1000"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-purple-950/30"></div>
              
              {/* Elegant VS Badge */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 px-6 py-3 rounded-lg font-bold text-xl shadow-2xl border border-amber-400/50 hover:shadow-amber-500/25 transition-all duration-500">
                VS
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Traditional Education */}
            <div className={`bg-gradient-to-br from-orange-900 via-amber-900 to-orange-900 rounded-2xl p-8 text-center shadow-2xl border border-orange-700/30 hover:border-orange-600/50 transition-all duration-700 hover:shadow-orange-900/25 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="text-4xl">😰</span>
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-wide">Traditional</h3>
                  <div className="text-3xl font-bold text-amber-400">₹10L+</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-white">
                <div className="bg-orange-800/40 rounded-xl p-4 hover:bg-orange-700/40 transition-colors duration-500 border border-orange-700/20">
                  <div className="text-2xl mb-2">⏰</div>
                  <div className="font-semibold text-sm">4-6 Years</div>
                </div>
                <div className="bg-orange-800/40 rounded-xl p-4 hover:bg-orange-700/40 transition-colors duration-500 border border-orange-700/20">
                  <div className="text-2xl mb-2">📚</div>
                  <div className="font-semibold text-sm">Outdated</div>
                </div>
                <div className="bg-orange-800/40 rounded-xl p-4 hover:bg-orange-700/40 transition-colors duration-500 border border-orange-700/20">
                  <div className="text-2xl mb-2">❌</div>
                  <div className="font-semibold text-sm">No Guarantee</div>
                </div>
                <div className="bg-orange-800/40 rounded-xl p-4 hover:bg-orange-700/40 transition-colors duration-500 border border-orange-700/20">
                  <div className="text-2xl mb-2">💔</div>
                  <div className="font-semibold text-sm">Heavy Debt</div>
                </div>
              </div>
            </div>

            {/* Smart Learning */}
            <div className={`bg-gradient-to-br from-teal-900 via-emerald-900 to-teal-900 rounded-2xl p-8 text-center shadow-2xl border border-teal-700/30 hover:border-teal-600/50 transition-all duration-700 hover:shadow-teal-900/25 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="text-4xl">😊</span>
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-wide">Smart Learning</h3>
                  <div className="text-3xl font-bold text-amber-400">₹199</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-white">
                <div className="bg-teal-800/40 rounded-xl p-4 hover:bg-teal-700/40 transition-colors duration-500 border border-teal-700/20">
                  <div className="text-2xl mb-2">⚡</div>
                  <div className="font-semibold text-sm">2-3 Months</div>
                </div>
                <div className="bg-teal-800/40 rounded-xl p-4 hover:bg-teal-700/40 transition-colors duration-500 border border-teal-700/20">
                  <div className="text-2xl mb-2">🔥</div>
                  <div className="font-semibold text-sm">Latest Tech</div>
                </div>
                <div className="bg-teal-800/40 rounded-xl p-4 hover:bg-teal-700/40 transition-colors duration-500 border border-teal-700/20">
                  <div className="text-2xl mb-2">✅</div>
                  <div className="font-semibold text-sm">95% Success</div>
                </div>
                <div className="bg-teal-800/40 rounded-xl p-4 hover:bg-teal-700/40 transition-colors duration-500 border border-teal-700/20">
                  <div className="text-2xl mb-2">💰</div>
                  <div className="font-semibold text-sm">Affordable</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className={`text-center mt-12 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 rounded-2xl p-8 max-w-3xl mx-auto shadow-2xl border border-amber-400/30 hover:shadow-amber-500/20 transition-all duration-700">
              <h4 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 tracking-wide">Save ₹9,99,801!</h4>
              <p className="text-slate-800 mb-6 font-semibold text-lg">Get BETTER results at 0.002% cost</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="bg-gradient-to-r from-slate-900 to-purple-900 text-amber-400 px-10 py-4 rounded-xl font-bold text-xl hover:from-slate-800 hover:to-purple-800 transition-all duration-500 transform hover:scale-105 shadow-xl border border-slate-700">
                  Start for ₹199 🚀
                </button>
                <div className="text-slate-800 font-bold">✅ 30-Day Guarantee • ✅ Lifetime Access</div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className={`grid grid-cols-3 gap-6 mt-10 max-w-3xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="text-center bg-gradient-to-br from-slate-800/60 to-purple-900/60 rounded-xl p-6 backdrop-blur-sm border border-purple-700/20 hover:border-purple-600/40 transition-all duration-500">
              <div className="text-3xl font-bold text-amber-400 mb-2">50K+</div>
              <div className="text-gray-300 text-sm font-medium">Students</div>
            </div>
            <div className="text-center bg-gradient-to-br from-slate-800/60 to-purple-900/60 rounded-xl p-6 backdrop-blur-sm border border-purple-700/20 hover:border-purple-600/40 transition-all duration-500">
              <div className="text-3xl font-bold text-amber-400 mb-2">95%</div>
              <div className="text-gray-300 text-sm font-medium">Success Rate</div>
            </div>
            <div className="text-center bg-gradient-to-br from-slate-800/60 to-purple-900/60 rounded-xl p-6 backdrop-blur-sm border border-purple-700/20 hover:border-purple-600/40 transition-all duration-500">
              <div className="text-3xl font-bold text-amber-400 mb-2">300%</div>
              <div className="text-gray-300 text-sm font-medium">Salary Boost</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100vh) translateX(20px);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  )
}

export default PriceComparison