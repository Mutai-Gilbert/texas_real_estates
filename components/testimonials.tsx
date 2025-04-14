import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      text: "Working with Texas Real Estate Executives was the best decision we made. They helped us find our dream home in Longview and made the entire process smooth and stress-free.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      text: "I was nervous about selling my home, but the team at Next Level Agents guided me through every step. They got me more than my asking price and handled everything professionally.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Jennifer Williams",
      text: "As a first-time homebuyer, I had so many questions. The agents were patient, knowledgeable, and always available. I couldn't have asked for a better experience.",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section className="relative">
      {/* Solid background to block out hero-bg */}
      <div className="absolute inset-0 bg-white" />
      
      <div className="relative py-16">
        <div className="section-title-container">
          <h2 className="section-title italic">Testimonials</h2>
        </div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about their experience with Texas Real
              Estate Executives - Next Level Agents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4 shadow-md">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                </div>
                <p className="italic text-gray-700">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
