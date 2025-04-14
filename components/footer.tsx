import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-24">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-4 gap-24">
          {/* Quick Links Section */}
          <div className="space-y-6">
            <h3 className="text-sm font-medium">QUICK LINKS</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/property-search" className="text-white/60 hover:text-white text-sm transition-colors">
                  Property Search
                </Link>
              </li>
              <li>
                <Link href="/agents" className="text-white/60 hover:text-white text-sm transition-colors">
                  Meet Our Agents
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/60 hover:text-white text-sm transition-colors">
                  What Sets Us Apart
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/60 hover:text-white text-sm transition-colors">
                  Our Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="space-y-6">
            <h3 className="text-sm font-medium">LEGAL</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/privacy-policy" className="text-white/60 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/60 hover:text-white text-sm transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/downloads" className="text-white/60 hover:text-white text-sm transition-colors">
                  Downloads
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            <h3 className="text-sm font-medium">CONTACT US</h3>
            <ul className="space-y-4">
              <li className="text-white/60 text-sm">
                Phone: (903) 297-0591
              </li>
              <li>
                <Link href="/contact" className="text-white/60 hover:text-white text-sm transition-colors inline-flex items-center">
                  GET IN TOUCH
                  <span className="ml-2">→</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Brand Section */}
          <div className="space-y-6">
            <h3 className="text-sm font-medium">TEXAS REAL ESTATE</h3>
            <p className="text-white/60 text-sm">
              Where luxury meets excellence. We transform the real estate experience from ordinary to extraordinary.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-white/60 hover:text-white text-sm transition-colors">
                Facebook
              </Link>
              <Link href="https://instagram.com" className="text-white/60 hover:text-white text-sm transition-colors">
                Instagram
              </Link>
              <Link href="https://twitter.com" className="text-white/60 hover:text-white text-sm transition-colors">
                Twitter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
