import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, Facebook, Instagram } from "lucide-react"

export default function MeetOurAgentsPage() {
  const agents = [
    {
      id: 1,
      name: "John Smith",
      title: "Principal Broker",
      phone: "(903) 555-1234",
      email: "john@texasrealestateexecutives.com",
      bio: "John has over 20 years of experience in the Longview real estate market. He specializes in luxury properties and commercial real estate development.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        facebook: "#",
        instagram: "#",
      },
    },
    {
      id: 2,
      name: "Emily Johnson",
      title: "Residential Specialist",
      phone: "(903) 555-5678",
      email: "emily@texasrealestateexecutives.com",
      bio: "Emily is passionate about helping first-time homebuyers find their perfect property. She has a keen eye for detail and always goes the extra mile for her clients.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        facebook: "#",
        instagram: "#",
      },
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      title: "Commercial Real Estate Expert",
      phone: "(903) 555-9012",
      email: "michael@texasrealestateexecutives.com",
      bio: "Michael specializes in commercial properties and has helped numerous businesses find their ideal location in Longview. His knowledge of the local market is unmatched.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        facebook: "#",
        instagram: "#",
      },
    },
    {
      id: 4,
      name: "Sarah Williams",
      title: "Luxury Home Specialist",
      phone: "(903) 555-3456",
      email: "sarah@texasrealestateexecutives.com",
      bio: "Sarah has a background in interior design, giving her a unique perspective when helping clients find or sell luxury homes. She has a network of high-net-worth clients.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        facebook: "#",
        instagram: "#",
      },
    },
    {
      id: 5,
      name: "David Chen",
      title: "Investment Property Advisor",
      phone: "(903) 555-7890",
      email: "david@texasrealestateexecutives.com",
      bio: "David helps investors identify profitable opportunities in the Longview real estate market. His analytical approach ensures clients make informed investment decisions.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        facebook: "#",
        instagram: "#",
      },
    },
    {
      id: 6,
      name: "Jessica Martinez",
      title: "Rental Property Manager",
      phone: "(903) 555-2345",
      email: "jessica@texasrealestateexecutives.com",
      bio: "Jessica manages our rental property portfolio and helps landlords find reliable tenants. She ensures all properties are well-maintained and profitable.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        facebook: "#",
        instagram: "#",
      },
    },
  ]

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6 text-center">Meet Our Agents</h1>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          Our team of experienced real estate professionals is dedicated to providing exceptional service to buyers and
          sellers in Longview, TX.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent) => (
            <div key={agent.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-80">
                <Image src={agent.image || "/placeholder.svg"} alt={agent.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-1">{agent.name}</h2>
                <p className="text-[rgb(var(--primary-rgb))] font-medium mb-4">{agent.title}</p>
                <p className="text-gray-600 mb-4">{agent.bio}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-[rgb(var(--primary-rgb))]" />
                    <span>{agent.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-[rgb(var(--primary-rgb))]" />
                    <a href={`mailto:${agent.email}`} className="hover:underline">
                      {agent.email}
                    </a>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Link
                    href={agent.social.facebook}
                    className="text-[rgb(var(--primary-rgb))] hover:text-[rgb(var(--primary-rgb))/80]"
                  >
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link
                    href={agent.social.instagram}
                    className="text-[rgb(var(--primary-rgb))] hover:text-[rgb(var(--primary-rgb))/80]"
                  >
                    <Instagram className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
