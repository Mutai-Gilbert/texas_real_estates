import Link from "next/link"
import { Facebook } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="mb-2">Phone: (903) 297-0591</p>
            <Link href="/contact" className="text-gray-300 hover:text-white">
              Get in Touch
            </Link>
            <div className="mt-4 flex">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/property-search" className="text-gray-300 hover:text-white">
                  Property Search
                </Link>
              </li>
              <li>
                <Link href="/meet-our-agents" className="text-gray-300 hover:text-white">
                  Meet Our Agents
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-300 hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-300">
              Texas Real Estate Executives - Next Level Agents in Longview has you covered! We provide exceptional real
              estate services for buyers and sellers.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>Copyright © {currentYear} Texas Real Estate Executives - Next Level Agents - All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
