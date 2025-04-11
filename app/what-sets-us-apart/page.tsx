import Image from "next/image"
import { Check } from "lucide-react"

export default function WhatSetsUsApartPage() {
  const features = [
    {
      title: "Local Expertise",
      description:
        "Our agents have deep knowledge of the Longview real estate market, with insights into neighborhoods, schools, and property values that only locals can provide.",
      icon: <Check className="h-6 w-6 text-[rgb(var(--primary-rgb))]" />,
    },
    {
      title: "Personalized Service",
      description:
        "We take the time to understand your unique needs and preferences, providing tailored solutions rather than a one-size-fits-all approach.",
      icon: <Check className="h-6 w-6 text-[rgb(var(--primary-rgb))]" />,
    },
    {
      title: "Transparent Communication",
      description:
        "We believe in clear, honest communication throughout the buying or selling process, keeping you informed every step of the way.",
      icon: <Check className="h-6 w-6 text-[rgb(var(--primary-rgb))]" />,
    },
    {
      title: "Cutting-Edge Technology",
      description:
        "We leverage the latest real estate technology to streamline processes, enhance marketing, and provide a seamless experience for our clients.",
      icon: <Check className="h-6 w-6 text-[rgb(var(--primary-rgb))]" />,
    },
    {
      title: "Negotiation Skills",
      description:
        "Our agents are skilled negotiators who work tirelessly to secure the best possible terms for our clients, whether buying or selling.",
      icon: <Check className="h-6 w-6 text-[rgb(var(--primary-rgb))]" />,
    },
    {
      title: "Comprehensive Support",
      description:
        "From initial consultation to closing and beyond, we provide comprehensive support throughout the entire real estate transaction.",
      icon: <Check className="h-6 w-6 text-[rgb(var(--primary-rgb))]" />,
    },
  ]

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6 text-center">What Sets Us Apart</h1>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          At Texas Real Estate Executives - Next Level Agents, we pride ourselves on delivering exceptional service that
          goes above and beyond the industry standard.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="relative h-[400px]">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="What sets us apart"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Our Commitment to Excellence</h2>
            <p className="text-lg mb-6">
              We understand that buying or selling a property is one of the most significant transactions in your life.
              That's why we're committed to providing the highest level of service, expertise, and integrity.
            </p>
            <p className="text-lg mb-6">
              Our team of experienced agents combines deep local knowledge with cutting-edge technology and personalized
              service to ensure your real estate experience is smooth, successful, and stress-free.
            </p>
            <p className="text-lg">
              Whether you're a first-time homebuyer, seasoned investor, or looking to sell your property, we have the
              skills and resources to help you achieve your real estate goals.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="text-xl font-bold ml-2">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
