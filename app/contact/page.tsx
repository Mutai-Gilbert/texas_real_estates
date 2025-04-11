"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send the form data to your server here
    console.log("Form submitted:", formData)
    setFormSubmitted(true)

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })

    // Reset submission status after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false)
    }, 5000)
  }

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          Have questions about buying or selling a property? Get in touch with our team of experts today.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>

              {formSubmitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="Buying a Property">Buying a Property</option>
                    <option value="Selling a Property">Selling a Property</option>
                    <option value="Property Valuation">Property Valuation</option>
                    <option value="Rental Inquiry">Rental Inquiry</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full p-3 border border-gray-300 rounded"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[rgb(var(--primary-rgb))] text-white py-3 rounded font-medium hover:bg-[rgb(var(--primary-rgb))/90] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div>
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 text-[rgb(var(--primary-rgb))] mt-1" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p>(903) 297-0591</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 text-[rgb(var(--primary-rgb))] mt-1" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p>info@texasrealestateexecutives.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-[rgb(var(--primary-rgb))] mt-1" />
                  <div>
                    <h3 className="font-medium">Office Address</h3>
                    <p>
                      123 Main Street
                      <br />
                      Longview, TX 75601
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-5 w-5 mr-3 text-[rgb(var(--primary-rgb))] mt-1" />
                  <div>
                    <h3 className="font-medium">Office Hours</h3>
                    <p>
                      Monday - Friday: 9:00 AM - 5:00 PM
                      <br />
                      Saturday: 10:00 AM - 2:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Book an Appointment</h2>
              <p className="mb-6">
                Ready to take the next step? Schedule a consultation with one of our expert agents to discuss your real
                estate needs.
              </p>
              <a
                href="tel:9032970591"
                className="block w-full bg-[rgb(var(--primary-rgb))] text-white py-3 rounded font-medium hover:bg-[rgb(var(--primary-rgb))/90] transition-colors text-center"
              >
                Call (903) 297-0591
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
