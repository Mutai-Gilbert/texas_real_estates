"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [moreMenuOpen, setMoreMenuOpen] = useState(false)
  const pathname = usePathname()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close more menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const moreMenu = document.getElementById("more-menu")
      if (moreMenu && !moreMenu.contains(event.target as Node)) {
        setMoreMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const navLinks = [
    { name: "Features", path: "/features" },
    { name: "Roadmap", path: "/roadmap" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Case studies", path: "/case-studies" },
  ]

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-8">
        <div className="flex items-center h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center mr-12">
            <h1 className={`text-2xl font-extralight tracking-[0.2em] transition-colors duration-500 ${
              isScrolled ? "text-white" : "text-white"
            }`}>
              TEXAS REAL ESTATE
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 flex-grow">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`px-4 py-2 text-sm rounded-full transition-all duration-300 
                  ${pathname === link.path 
                    ? "bg-white/10 text-white" 
                    : "text-white/80 hover:bg-white/5"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Book a Demo Button */}
          <Link
            href="/book-demo"
            className="hidden md:inline-flex ml-auto px-5 py-2 text-sm font-medium text-white bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors duration-300"
          >
            Book a demo
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden ml-auto p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-controls="mobile-menu"
            aria-expanded={mobileMenuOpen ? "true" : "false"}
            aria-label="Toggle navigation menu"
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-black/90 backdrop-blur-md px-8 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="block py-2 px-4 text-white/80 text-sm rounded-full hover:bg-white/5"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/book-demo"
            className="block py-2 px-4 text-sm font-medium text-white bg-zinc-800 rounded-full hover:bg-zinc-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book a demo
          </Link>
        </div>
      </div>
    </nav>
  )
} 