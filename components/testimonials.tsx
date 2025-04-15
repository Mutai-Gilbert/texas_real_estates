import Image from "next/image"

export default function Testimonials() {
  return (
    <section className="relative min-h-screen">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 py-16">
        <div className="section-title-container">
          <h2 className="text-[56px] font-light text-white mb-4 leading-tight tracking-[-0.02em]">What Our Clients Say</h2>
        </div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about their experience with Texas Real
              Estate Executives - Next Level Agents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/placeholder.svg?height=64&width=64"
                    alt="Client"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-light text-white tracking-[-0.02em]">John Doe</h3>
                  <p className="text-white/80">Home Buyer</p>
                </div>
              </div>
              <p className="text-white/80">
                "The team at Texas Real Estate Executives made my home buying experience smooth and stress-free. Their expertise and dedication were invaluable."
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/placeholder.svg?height=64&width=64"
                    alt="Client"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-light text-white tracking-[-0.02em]">Jane Smith</h3>
                  <p className="text-white/80">Property Seller</p>
                </div>
              </div>
              <p className="text-white/80">
                "I couldn't have asked for a better experience selling my property. The team's market knowledge and negotiation skills were outstanding."
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/placeholder.svg?height=64&width=64"
                    alt="Client"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-light text-white tracking-[-0.02em]">Robert Johnson</h3>
                  <p className="text-white/80">Investor</p>
                </div>
              </div>
              <p className="text-white/80">
                "Working with Texas Real Estate Executives has been a game-changer for my investment portfolio. Their insights and professionalism are unmatched."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
