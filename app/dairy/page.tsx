'use client'

import { NavBar } from "@/components/nav-bar"
import { ProductCard } from "@/components/product-card"
import { ProductDetailsModal } from "@/components/product-details-modal"
import { SiteFooter } from "@/components/site-footer"
import { Input } from "@/components/ui/input"
import { dairyProducts, Product } from "@/data/dairy"
import React from "react"

export default function DairyPage() {
  const [query, setQuery] = React.useState("")
  const [selected, setSelected] = React.useState<Product | null>(null)
  const [selectedFeature, setSelectedFeature] = React.useState<string | null>(null)
  const [open, setOpen] = React.useState(false)

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase()
    const base = dairyProducts.filter(p => p.category.toLowerCase() === "dairy")
    return !q ? base : base.filter(p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q))
  }, [query])

  function handleOpenProduct(p: Product) { setSelected(p); setSelectedFeature(null); setOpen(true) }
  function handleOpenFeature(p: Product, f: string) { setSelected(p); setSelectedFeature(f); setOpen(true) }

  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-6xl px-4 py-8">
        {/* Header Section */}
        <header className="mb-8 space-y-3">
          <h1 className="text-balance text-2xl font-semibold tracking-tight">Dairy — Fresh Picks</h1>
          <img src="/dairy.jpg" alt="Dairy" className="w-full h-60 object-cover rounded-lg mb-4"/>
          <p className="max-w-2xl text-pretty text-sm text-foreground/70">
            Explore fresh dairy products from local farms. Tap a card to learn more, or expand with the arrow to preview images, specs, and features.
          </p>
          <div className="max-w-md">
            <label htmlFor="search" className="sr-only">
              Search products
            </label>
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search dairy products..."
              className="focus-visible:ring-emerald-500"
            />
          </div>
        </header>

        {/* Products Grid */}
        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {filtered.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onOpen={() => handleOpenProduct(p)}
              onFeatureSelect={(f) => handleOpenFeature(p, f)}
            />
          ))}
        </section>

        <ProductDetailsModal
          product={selected}
          open={open}
          selectedFeature={selectedFeature}
          onOpenChange={(o) => { setOpen(o); if(!o){ setSelected(null); setSelectedFeature(null) } }}
        />

        <SiteFooter
          recommendations={[
            { name: "Fresh Milk", href: "#" },
            { name: "Cheese Selection", href: "#" },
            { name: "Yogurt Box", href: "#" },
          ]}
          categories={[
            { name: "Milk", href: "#categories" },
            { name: "Cheese", href: "#categories" },
            { name: "Yogurt", href: "#categories" },
            { name: "Butter", href: "#categories" },
          ]}
        />
      </main>
    </>
  )
}
