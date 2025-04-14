"use client"

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
        <h2 className="text-[56px] font-normal text-white mb-4 leading-tight tracking-[-0.02em]">
          No spam. Just stories.
        </h2>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          Get occasional notes from us — slow, thoughtful, and human.
        </p>

        {/* Email subscription form */}
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex gap-3">
          <div className="flex-grow">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder:text-white/60 focus:outline-none focus:border-white/40 transition-colors"
              required
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-zinc-800 text-white rounded-full hover:bg-zinc-700 transition-colors whitespace-nowrap"
          >
            Join waitlist
          </button>
        </form>
      </div>
    </section>
  )
}
