import Image from "next/image"
import Link from "next/link"

export default function FeaturedListings() {
  const listings = [
    {
      id: 1,
      title: "Modern Family Home",
      address: "123 Main St, Longview, TX",
      price: "$325,000",
      beds: 4,
      baths: 3,
      sqft: 2400,
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "Luxury Townhouse",
      address: "456 Oak Ave, Longview, TX",
      price: "$475,000",
      beds: 3,
      baths: 2.5,
      sqft: 2100,
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "Charming Bungalow",
      address: "789 Pine Rd, Longview, TX",
      price: "$225,000",
      beds: 2,
      baths: 2,
      sqft: 1500,
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <section className="relative">
      {/* Solid background to block out hero-bg */}
      <div className="absolute inset-0 bg-gray-50" />
      
      <div className="relative py-16">
        <div className="section-title-container">
          <h2 className="section-title italic">Featured Listings</h2>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {listings.map((listing) => (
              <div key={listing.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64">
                  <Image src={listing.image || "/placeholder.svg"} alt={listing.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{listing.title}</h3>
                  <p className="text-gray-600 mb-4">{listing.address}</p>
                  <p className="text-2xl font-bold text-[rgb(var(--primary-rgb))] mb-4">{listing.price}</p>
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <span>{listing.beds} Beds</span>
                    <span>{listing.baths} Baths</span>
                    <span>{listing.sqft} Sq Ft</span>
                  </div>
                  <Link
                    href={`/property/${listing.id}`}
                    className="block w-full text-center py-2 bg-[rgb(var(--primary-rgb))] text-white rounded hover:bg-[rgb(var(--primary-rgb))/90] transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/property-search" className="secondary-button inline-block">
              VIEW ALL LISTINGS
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
