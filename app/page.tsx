"use client"

import Link from "next/link"
import Image from "next/image"
import { NavBar } from "@/components/nav-bar"
import { SiteFooter } from "@/components/site-footer"

const categories = [
  { name: "Agriculture", slug: "agriculture", image: "/agriculture.jpg" },
  { name: "Meat & Poultry", slug: "meat-poultry", image: "/meat.jpg" },
  { name: "Dairy", slug: "dairy", image: "/dairy.jpg" },
  { name: "Seafood", slug: "seafood", image: "/seafood.jpg" },
  { name: "Condiments", slug: "condiments", image: "/condiments.jpg" },
  // { name: "Textiles", slug: "textiles", image: "/textiles.jpg" },
]

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-12 bg-pink-100">
        <h1 className="text-3xl font-bold">Explore Our Collection</h1>
        <p className="mb-8 text-sm">Quality collections designed to fit your lifestyle.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link key={cat.slug} href={`/${cat.slug}`}>
              <div className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-3 left-3 text-white font-semibold text-lg drop-shadow-md">
                  {cat.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <SiteFooter
        recommendations={[
          { name: "Fresh Greens", href: "#" },
          { name: "Organic Picks", href: "#" },
          { name: "Salad Box", href: "#" },
        ]}
        categories={[
          { name: "Vegetables", href: "/agriculture" },
          { name: "Fruits", href: "/agriculture" },
          { name: "Grains", href: "/agriculture" },
          { name: "Dairy", href: "/dairy" },
        ]}
      />
    </>
  )
}
