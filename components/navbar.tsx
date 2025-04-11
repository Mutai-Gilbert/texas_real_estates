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
    { name: "HOME", path: "/" },
    { name: "PROPERTY SEARCH", path: "/property-search" },
    { name: "MEET OUR AGENTS", path: "/agents" },
    { name: "WHAT SETS US APART", path: "/about" },
  ]

  const moreLinks = [
    { name: "OUR SERVICES", path: "/services" },
    { name: "DOWNLOADS", path: "/downloads" },
    { name: "CONTACT US", path: "/contact" },
  ]

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 shadow-sm" : "bg-white/90"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Top bar with logo */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="inline-block">
              <h1 className="text-[rgb(168,0,0)] text-xl font-serif">
                Texas Real Estate Executives- Next Level Agents
              </h1>
            </Link>
            
            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-controls="mobile-menu"
              aria-expanded={String(mobileMenuOpen)}
            >
              <span className="sr-only">Toggle mobile menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-900" />
              ) : (
                <Menu className="h-6 w-6 text-gray-900" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation - Desktop */}
      <div className="hidden md:block container mx-auto px-4">
        <div className="flex items-center h-14">
          <div className="flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-gray-900 hover:text-[rgb(168,0,0)] text-sm font-medium border-b-2 transition-all ${
                  pathname === link.path ? "border-[rgb(168,0,0)]" : "border-transparent hover:border-[rgb(168,0,0)]"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="relative" id="more-menu">
              <button
                className={`text-gray-900 hover:text-[rgb(168,0,0)] text-sm font-medium border-b-2 border-transparent hover:border-[rgb(168,0,0)] transition-all flex items-center`}
                onClick={() => setMoreMenuOpen(!moreMenuOpen)}
                aria-expanded={String(moreMenuOpen)}
              >
                MORE <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {moreMenuOpen && (
                <div 
                  className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-1 mt-2"
                  role="menu"
                >
                  {moreLinks.map((link) => (
                    <Link
                      key={link.path}
                      href={link.path}
                      className={`block px-4 py-2 text-sm hover:bg-gray-50 hover:text-[rgb(168,0,0)] ${
                        pathname === link.path ? "text-[rgb(168,0,0)]" : "text-gray-900"
                      }`}
                      role="menuitem"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="container mx-auto px-4 py-4 space-y-2 border-t border-gray-200">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`block py-2 text-sm ${
                pathname === link.path ? "text-[rgb(168,0,0)]" : "text-gray-900"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 border-t border-gray-100">
            <p className="text-xs font-medium text-gray-500 mb-2">MORE</p>
            {moreLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`block py-2 text-sm ${
                  pathname === link.path ? "text-[rgb(168,0,0)]" : "text-gray-900"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
} 