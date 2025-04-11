import Hero from "@/components/hero"
import OurServices from "@/components/our-services"
import FeaturedListings from "@/components/featured-listings"
import Testimonials from "@/components/testimonials"
import ContactCta from "@/components/contact-cta"

export default function Home() {
  return (
    <>
      <Hero />
      <OurServices />
      <FeaturedListings />
      <Testimonials />
      <ContactCta />
    </>
  )
}
