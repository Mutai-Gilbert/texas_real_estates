import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden pt-32">
      {/* Grain overlay */}
      <div className="absolute inset-0 bg-[url('/grain.png')] opacity-[0.03] pointer-events-none z-10"></div>
      
      {/* Main content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="min-h-[calc(100vh-8rem)] grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left column - Main heading */}
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-serif leading-tight tracking-normal mb-8">
              Where Luxury
              <br />
              Meets
              <br />
              Excellence
            </h1>
            <div className="h-[1px] w-24 bg-white/30 mb-8"></div>
          </div>

          {/* Right column - Description */}
          <div className="md:text-right">
            <p className="text-lg md:text-xl font-light leading-relaxed text-white/80 max-w-md ml-auto">
              In a world of standard real estate practices, we believe in elevating 
              the experience from functional to unforgettable. This is a space for 
              visionaries and dreamers.
            </p>
            <div className="mt-8">
              <Link 
                href="/contact" 
                className="inline-flex items-center text-sm tracking-wider font-medium hover:opacity-75 transition-opacity"
              >
                SCHEDULE A VIEWING
                <span className="ml-2">→</span>
              </Link>
            </div>
            <div className="mt-4 text-sm tracking-wider text-white/60">(903) 297-0591</div>
          </div>
        </div>
      </div>
    </section>
  )
}
