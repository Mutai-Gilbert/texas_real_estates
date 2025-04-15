"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function ContactCta() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email subscription logic here
    console.log("Email submitted:", email)
    setEmail("")
  }

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/cta-background.jpg"
          alt="Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-8 py-24 text-center">
        <h2 className="text-[56px] font-light text-white mb-4 leading-tight tracking-[-0.02em]">
          Ready to Find Your Dream Home?
        </h2>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          Let's start your journey to the perfect property. Our expert team is here to guide you every step of the way.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center px-8 py-4 bg-white text-black rounded-full hover:bg-white/90 transition-all group"
        >
          Get Started
          <svg
            className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </section>
  )
}
