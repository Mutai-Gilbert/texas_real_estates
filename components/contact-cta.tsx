import Link from "next/link"

export default function ContactCta() {
  return (
    <section className="py-16 bg-[rgb(var(--primary-rgb))] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Perfect Property?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Whether you're buying, selling, or just have questions, our team of experts is here to help you every step of
          the way.
        </p>
        <Link
          href="/contact"
          className="bg-white text-[rgb(var(--primary-rgb))] px-8 py-3 font-bold text-lg rounded-md hover:bg-gray-100 transition-colors inline-block"
        >
          CONTACT US TODAY
        </Link>
      </div>
    </section>
  )
}
