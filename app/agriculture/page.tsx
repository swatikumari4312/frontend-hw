'use client'

import { NavBar } from "@/components/nav-bar"
import { ProductCard } from "@/components/product-card"
import { ProductDetailsModal } from "@/components/product-details-modal"
import { SiteFooter } from "@/components/site-footer"
import { Input } from "@/components/ui/input"
import { Product, products } from "@/data/products"
import React from "react"

  
  export default function AgriculturePage() {
    const [query, setQuery] = React.useState("")
      const [selected, setSelected] = React.useState<Product | null>(null)
      const [selectedFeature, setSelectedFeature] = React.useState<string | null>(null)
      const [open, setOpen] = React.useState(false)
    
      const filtered = React.useMemo(() => {
        const q = query.trim().toLowerCase()
        const base = !q
          ? products
          : products.filter(
              (p) =>
                p.name.toLowerCase().includes(q) ||
                p.category.toLowerCase().includes(q) ||
                p.description.toLowerCase().includes(q),
            )
        return base
      }, [query])
    
      function handleOpenProduct(p: Product) {
        setSelected(p)
        setSelectedFeature(null)
        setOpen(true)
      }
    
      function handleOpenFeature(p: Product, f: string) {
        setSelected(p)
        setSelectedFeature(f)
        setOpen(true)
      }

  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-6xl px-4 py-8">
        <header className="mb-8 space-y-3">
          <h1 className="text-balance text-2xl font-semibold tracking-tight">AgriMart — Fresh Produce</h1>
          <img src="/agriculture1.jpg" alt="Condiments" className="w-full h-60 object-cover rounded-lg mb-4"/>
          <p className="max-w-2xl text-pretty text-sm text-foreground/70">
            Explore seasonal vegetables from local farms. Tap a card to learn more, or expand with the arrow to preview
            images, specs, and features. Selecting a feature opens a detailed popup.
          </p>
          <div className="max-w-md">
            <label htmlFor="search" className="sr-only">
              Search products
            </label>
            <Input
              id="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search vegetables..."
              className="focus-visible:ring-emerald-500"
            />
          </div>
        </header>

        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.slice(0, 6).map((p) => (
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
          onOpenChange={(o) => {
            setOpen(o)
            if (!o) {
              setSelected(null)
              setSelectedFeature(null)
            }
          }}
        />

        <SiteFooter
          recommendations={[
            { name: "Fresh Greens", href: "#" },
            { name: "Organic Picks", href: "#" },
            { name: "Salad Box", href: "#" },
          ]}
          categories={[
            { name: "Vegetables", href: "#categories" },
            { name: "Fruits", href: "#categories" },
            { name: "Grains", href: "#categories" },
            { name: "Dairy", href: "#categories" },
          ]}
        />
      </main>
    </>
  )
}