import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-24">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-4 gap-24">
          {/* About Section */}
          <div className="space-y-6">
            <h3 className="text-sm font-medium">About</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/principles" className="text-white/60 hover:text-white text-sm transition-colors">
                  Principles
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-white/60 hover:text-white text-sm transition-colors">
                  The Team
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="text-white/60 hover:text-white text-sm transition-colors">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link href="/building" className="text-white/60 hover:text-white text-sm transition-colors">
                  Building
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-white/60 hover:text-white text-sm transition-colors">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Section */}
          <div className="space-y-6">
            <h3 className="text-sm font-medium">Product</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/features" className="text-white/60 hover:text-white text-sm transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/use-cases" className="text-white/60 hover:text-white text-sm transition-colors">
                  Use cases
                </Link>
              </li>
              <li>
                <Link href="/creators" className="text-white/60 hover:text-white text-sm transition-colors">
                  Creators
                </Link>
              </li>
              <li>
                <Link href="/future" className="text-white/60 hover:text-white text-sm transition-colors">
                  The future
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="space-y-6">
            <h3 className="text-sm font-medium">Legal</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/privacy" className="text-white/60 hover:text-white text-sm transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/60 hover:text-white text-sm transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-white/60 hover:text-white text-sm transition-colors">
                  Cookies
                </Link>
              </li>
              <li>
                <Link href="/legal-info" className="text-white/60 hover:text-white text-sm transition-colors">
                  Legal Info
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Section */}
          <div className="space-y-6">
            <h3 className="text-sm font-medium">Social</h3>
            <ul className="space-y-4">
              <li>
                <Link href="https://instagram.com" className="text-white/60 hover:text-white text-sm transition-colors">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="https://discord.com" className="text-white/60 hover:text-white text-sm transition-colors">
                  Discord
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com" className="text-white/60 hover:text-white text-sm transition-colors">
                  X (Twitter)
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
