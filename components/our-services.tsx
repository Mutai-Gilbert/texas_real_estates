import Image from "next/image"

export default function OurServices() {
  return (
    <section className="py-16">
      <div className="section-title-container">
        <h2 className="section-title italic">Our Services</h2>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-6">Real Estate Done Right</h3>
          <p className="max-w-4xl mx-auto text-lg">
            Nervous about your property adventure? Don't be. Whether you're getting ready to buy or sell, in the middle
            of it, or just looking for some answers, our top-notch skills ensure you get the best experience possible.
            It's what we love to do.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-center">
            <div className="mb-6 relative h-80 w-full">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Commercial and residential services"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4">Commercial, Residential, and Rentals</h3>
            <p className="text-lg">
              Large or small, duplex or mansion, we can find it and get it for you at the price that's right.
              Down-sizing? Fixer-uppers? Luxury? We can help with all of it. We always have a current list of available
              properties for you to check out. Texas Real Estate Executives- Next Level Agents in Longview has you
              covered!
            </p>
          </div>

          <div className="text-center">
            <div className="mb-6 relative h-80 w-full">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Real estate expertise"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4">Rely on Expertise</h3>
            <p className="text-lg">
              If you have questions about affordability, credit, legal matters, or income, trust us to find you what you
              need fast. We make sure you feel confident and educated every step of the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
