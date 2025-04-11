import Link from "next/link"
import { Download } from "lucide-react"

export default function DownloadsPage() {
  const documents = [
    {
      id: 1,
      title: "Information About Brokerage Services",
      type: "pdf",
      url: "#",
    },
    {
      id: 2,
      title: "Consumer Protection Notice",
      type: "pdf",
      url: "#",
    },
    {
      id: 3,
      title: "Buyer Representation Agreement",
      type: "pdf",
      url: "#",
    },
    {
      id: 4,
      title: "Seller Disclosure Notice",
      type: "pdf",
      url: "#",
    },
  ]

  return (
    <div className="py-16">
      <div className="section-title-container">
        <h1 className="section-title italic">Downloads</h1>
      </div>

      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {documents.map((doc, index) => (
            <div
              key={doc.id}
              className={`flex justify-between items-center p-6 ${
                index !== documents.length - 1 ? "border-b border-gray-200" : ""
              }`}
            >
              <div>
                <h2 className="text-xl font-medium">{doc.title}</h2>
                <p className="text-gray-500 text-sm uppercase">{doc.type}</p>
              </div>
              <Link
                href={doc.url}
                className="flex items-center text-[rgb(var(--primary-rgb))] hover:text-[rgb(var(--primary-rgb))/80]"
              >
                <Download className="h-5 w-5 mr-2" />
                Download
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
