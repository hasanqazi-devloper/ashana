'use client';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-24 md:pt-32 pb-16 bg-[#0D1B2A] flex items-center justify-center text-white overflow-hidden"
    >
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-12 items-center">
        
        {/* LEFT COLUMN: TEXT & CONTENT */}
        <div className="lg:col-span-7 space-y-6 md:space-y-8 xl:space-y-10">
          
          {/* Main Headings (Pure White & Silver Accents) */}
          <div className="space-y-2 md:space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl font-black tracking-tight leading-none uppercase">
              Degree Se <br />
              <span className="text-white drop-shadow-md">Skills Tak</span> <br />
              <span className="text-blue-400">HRD Institute</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl font-medium text-white/80 max-w-xl leading-relaxed">
              Sirf degree kafi nahi! Master the skills that global companies demand.{' '}
              <span className="bg-blue-600 text-white px-2 py-0.5 font-bold inline-block rounded">
                Zero theory, Full code.
              </span>
            </p>
          </div>

          {/* CTA & Stats Section */}
          <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 pt-2">
            
            {/* PREMIUM BUTTON: Blue to White Fill on Hover */}
            <button className="group relative hidden sm:flex items-center justify-center space-x-2 px-6 py-4 text-sm md:text-base xl:px-8 xl:py-5 xl:text-lg font-black uppercase tracking-wider rounded-xl border-2 border-blue-600 bg-blue-600 text-white transition-all duration-300 overflow-hidden shadow-lg cursor-pointer">
              {/* Animated White background slider */}
              <span className="absolute inset-0 w-full h-full bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out z-0"></span>
              
              {/* Button text with z-index layer */}
              <span className="relative z-10 group-hover:text-blue-600 transition-colors duration-300">
                Start Coding Now
              </span>
              <span className="relative z-10 group-hover:text-blue-600 transition-colors duration-300">
                →
              </span>
            </button>

            {/* Mobile Fallback Button (Simpler state for instant mobile tap) */}
            <button className="sm:hidden w-full bg-blue-600 hover:bg-white hover:text-blue-600 border-2 border-blue-600 text-white font-black uppercase tracking-wider rounded-xl py-4 text-sm shadow-lg transition-all duration-300">
              Start Coding Now →
            </button>
            
            {/* Student Counts */}
            <div className="flex items-center space-x-3">
              <div className="bg-white/10 p-2.5 rounded-full flex items-center justify-center border border-white/10">
                🇵🇰
              </div>
              <div>
                <div className="text-lg md:text-xl xl:text-2xl font-black text-white leading-none">
                  15,000+
                </div>
                <div className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-white/60 mt-0.5">
                  Students Nationwide
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: IMAGE */}
        <div className="lg:col-span-5 w-full flex justify-center items-center pt-6 lg:pt-0">
          <div className="relative w-full max-w-md md:max-w-xl lg:max-w-none transform hover:scale-[1.02] transition-transform duration-500">
            <img
              src="/hero-image.png"
              alt="HRD Institute Main Hero Visual"
              className="w-full h-auto object-cover rounded-2xl shadow-2xl border border-white/10"
            />
            {/* Ice Blue Glow effect behind image */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur opacity-20 -z-10"></div>
          </div>
        </div>

      </div>
    </section>
  );
}