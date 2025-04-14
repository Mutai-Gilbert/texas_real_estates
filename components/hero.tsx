import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Full-screen background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Luxury real estate background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Grain texture overlay */}
      <div 
        className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'url("/grain.png")',
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Main content */}
      <div className="relative z-20 min-h-screen flex flex-col">
        {/* Centered header content */}
        <div className="flex-1 flex flex-col items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6">
              TEXAS REAL ESTATE
              <br />
              <span className="font-extralight">EXECUTIVES</span>
            </h1>
            <Link
              href="/contact"
              className="inline-flex items-center text-white text-lg tracking-wider font-light hover:opacity-75 transition-all duration-300"
            >
              DISCOVER MORE
              <span className="ml-2 text-2xl">→</span>
            </Link>
          </div>
        </div>

        {/* Bottom right description */}
        <div className="absolute bottom-12 right-12 max-w-md text-right">
          <p className="text-white/90 text-lg font-light leading-relaxed mb-6">
            Where luxury meets excellence. We transform the real estate experience 
            from ordinary to extraordinary, creating spaces for visionaries and dreamers.
          </p>
          <div className="text-white/60 font-light">
            <div className="text-sm tracking-wider mb-1">CONTACT US</div>
            <div className="text-lg">(903) 297-0591</div>
          </div>
        </div>
      </div>
    </section>
  )
}
