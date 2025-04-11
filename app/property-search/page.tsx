"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, MapPin } from "lucide-react"

export default function PropertySearchPage() {
  const [priceRange, setPriceRange] = useState([0, 1000000])
  const [propertyType, setPropertyType] = useState("all")
  const [bedrooms, setBedrooms] = useState("any")
  const [bathrooms, setBathrooms] = useState("any")

  const properties = [
    {
      id: 1,
      title: "Modern Family Home",
      address: "123 Main St, Longview, TX",
      price: 325000,
      beds: 4,
      baths: 3,
      sqft: 2400,
      type: "residential",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "Luxury Townhouse",
      address: "456 Oak Ave, Longview, TX",
      price: 475000,
      beds: 3,
      baths: 2.5,
      sqft: 2100,
      type: "residential",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "Charming Bungalow",
      address: "789 Pine Rd, Longview, TX",
      price: 225000,
      beds: 2,
      baths: 2,
      sqft: 1500,
      type: "residential",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      title: "Downtown Office Space",
      address: "101 Commerce St, Longview, TX",
      price: 550000,
      beds: 0,
      baths: 2,
      sqft: 3200,
      type: "commercial",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 5,
      title: "Retail Storefront",
      address: "202 Market Ave, Longview, TX",
      price: 425000,
      beds: 0,
      baths: 1,
      sqft: 2800,
      type: "commercial",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 6,
      title: "Luxury Apartment",
      address: "303 Highland Dr, Longview, TX",
      price: 1800,
      beds: 2,
      baths: 2,
      sqft: 1200,
      type: "rental",
      image: "/placeholder.svg?height=400&width=600",
      rental: true,
    },
  ]

  // Filter properties based on selected criteria
  const filteredProperties = properties.filter((property) => {
    const matchesPrice = property.price >= priceRange[0] && property.price <= priceRange[1]
    const matchesType = propertyType === "all" || property.type === propertyType
    const matchesBeds = bedrooms === "any" || property.beds >= Number.parseInt(bedrooms)
    const matchesBaths = bathrooms === "any" || property.baths >= Number.parseFloat(bathrooms)

    return matchesPrice && matchesType && matchesBeds && matchesBaths
  })

  // Format price with commas
  const formatPrice = (property: { rental?: boolean; price: number }) => {
    return property.rental ? `$${property.price}/month` : `$${property.price.toLocaleString()}`
  }

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Find Your Perfect Property</h1>

        {/* Search Filters */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Property Type</label>
              <select
                className="w-full p-2 border border-gray-300 rounded"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
              >
                <option value="all">All Properties</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="rental">Rentals</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Bedrooms</label>
              <select
                className="w-full p-2 border border-gray-300 rounded"
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
              >
                <option value="any">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
                <option value="5">5+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Bathrooms</label>
              <select
                className="w-full p-2 border border-gray-300 rounded"
                value={bathrooms}
                onChange={(e) => setBathrooms(e.target.value)}
              >
                <option value="any">Any</option>
                <option value="1">1+</option>
                <option value="1.5">1.5+</option>
                <option value="2">2+</option>
                <option value="2.5">2.5+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Price Range</label>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([Number.parseInt(e.target.value), priceRange[1]])}
                  placeholder="Min"
                />
                <span>-</span>
                <input
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                  placeholder="Max"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <button className="bg-[rgb(var(--primary-rgb))] text-white px-6 py-2 rounded flex items-center">
              <Search className="h-5 w-5 mr-2" />
              Search Properties
            </button>
          </div>
        </div>

        {/* Property Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image src={property.image || "/placeholder.svg"} alt={property.title} fill className="object-cover" />
                <div className="absolute top-0 right-0 bg-[rgb(var(--primary-rgb))] text-white px-3 py-1 text-sm font-medium">
                  {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                <p className="text-gray-600 mb-4 flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {property.address}
                </p>
                <p className="text-2xl font-bold text-[rgb(var(--primary-rgb))] mb-4">{formatPrice(property)}</p>
                <div className="flex justify-between text-sm text-gray-600 mb-4">
                  {property.beds > 0 && <span>{property.beds} Beds</span>}
                  {property.baths > 0 && <span>{property.baths} Baths</span>}
                  <span>{property.sqft.toLocaleString()} Sq Ft</span>
                </div>
                <Link
                  href={`/property/${property.id}`}
                  className="block w-full text-center py-2 bg-[rgb(var(--primary-rgb))] text-white rounded hover:bg-[rgb(var(--primary-rgb))/90] transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-2xl font-bold mb-4">No properties match your search criteria</h3>
            <p className="text-gray-600 mb-6">Try adjusting your filters to see more results.</p>
            <button
              onClick={() => {
                setPriceRange([0, 1000000])
                setPropertyType("all")
                setBedrooms("any")
                setBathrooms("any")
              }}
              className="bg-[rgb(var(--primary-rgb))] text-white px-6 py-2 rounded"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
