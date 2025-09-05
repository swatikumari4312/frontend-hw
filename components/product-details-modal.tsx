"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { AspectCard } from "./aspect-card"
import { Star } from "lucide-react"
import type { Product } from "@/data/products"
import { cn } from "@/lib/utils"

type ProductDetailsModalProps = {
  product: Product | null
  open: boolean
  onOpenChange: (open: boolean) => void
  selectedFeature?: string | null
}

export function ProductDetailsModal({ product, open, onOpenChange, selectedFeature }: ProductDetailsModalProps) {
  if (!product) return null

  const stars = (n: number) =>
    Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={cn("h-4 w-4", i < n ? "fill-amber-400 text-amber-400" : "text-foreground/20")}
        aria-hidden="true"
      />
    ))

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
  className={cn(
    "fixed top-[50%] left-[50%] z-50 grid",
    "w-full max-w-5xl sm:max-w-4xl",
    "translate-x-[-50%] translate-y-[-50%]",
    "rounded-lg sm:rounded-2xl shadow-lg",
    "bg-background/80 backdrop-blur-xl border",
    "p-0 gap-0 duration-200",
    "data-[state=open]:animate-in data-[state=closed]:animate-out",
    "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
    "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
    "max-h-[90vh] overflow-y-auto scrollbar-none"
  )}
  aria-describedby={undefined}
>
        <DialogHeader className="space-y-2 border-b px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <DialogTitle className="text-lg font-semibold text-pretty">{product.name}</DialogTitle>
              <Badge className="bg-emerald-600 text-white hover:bg-emerald-700">{product.category}</Badge>
            </div>
            {product.price ? (
              <div className="text-right">
                <div className="text-sm text-foreground/60 mr-10">Starting at</div>
                <div className="text-base font-semibold mr-10">
                  {product.price.currency} {product.price.amount.toFixed(2)}
                </div>
              </div>
            ) : null}
          </div>
          <p className="text-sm text-foreground/70">{product.description}</p>
          {selectedFeature ? (
            <div className="pt-2">
              <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                Selected: {selectedFeature}
              </Badge>
            </div>
          ) : null}
        </DialogHeader>

        <div className="relative aspect-[21/9] w-full overflow-hidden">
          <img
            src={product.image || "/placeholder.svg?height=300&width=1000&query=product%20hero"}
            alt={`${product.name} hero`}
            className="h-full w-full object-cover"
          />
        </div>

        <section className="grid grid-cols-1 gap-4 p-6 md:grid-cols-2 lg:grid-cols-3">
          <AspectCard title="Key Features">
            <ul className="flex flex-wrap gap-2">
              {product.features.map((f) => (
                <li key={f}>
                  <Badge className="bg-emerald-600 text-white hover:bg-emerald-700">{f}</Badge>
                </li>
              ))}
            </ul>
          </AspectCard>

          <AspectCard title={product.nutrition ? "Nutrition" : "Specs"}>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {product.nutrition
                ? Object.entries(product.nutrition).map(([k, v]) => (
                    <div key={k} className="rounded-lg border p-2">
                      <div className="text-foreground/60">{k}</div>
                      <div className="font-medium">{String(v)}</div>
                    </div>
                  ))
                : product.specs
                  ? Object.entries(product.specs).map(([k, v]) => (
                      <div key={k} className="rounded-lg border p-2">
                        <div className="text-foreground/60">{k}</div>
                        <div className="font-medium">{String(v)}</div>
                      </div>
                    ))
                  : null}
            </div>
          </AspectCard>

          {product.traceability ? (
            <AspectCard title="Traceability">
              <div className="space-y-2 text-sm">
                {Object.entries(product.traceability).map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between rounded-md border p-2">
                    <span className="text-foreground/60">{k}</span>
                    <span className="font-medium">{String(v)}</span>
                  </div>
                ))}
              </div>
            </AspectCard>
          ) : null}

          {product.gallery && product.gallery.length > 0 ? (
            <AspectCard title="Gallery" className="lg:col-span-2">
              <div className="grid grid-cols-2 gap-3">
                {product.gallery.map((src, i) => (
                  <div key={i} className="relative aspect-video overflow-hidden rounded-xl">
                    <img
                      src={src || "/placeholder.svg?height=240&width=426&query=gallery%20image"}
                      alt={`${product.name} gallery ${i + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </AspectCard>
          ) : null}

          {product.reviews && product.reviews.length > 0 ? (
            <AspectCard
              title="Top Reviews"
              headerRight={
                <div aria-hidden className="text-xs text-foreground/50">
                  {product.reviews.length} total
                </div>
              }
              className="lg:col-span-1"
            >
              <div className="space-y-3">
                {product.reviews.slice(0, 3).map((r, idx) => (
                  <div key={idx} className="rounded-lg border p-3">
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm font-medium">{r.user}</span>
                      <div className="flex items-center gap-0.5" aria-label={`Rating ${r.rating} out of 5`}>
                        {stars(r.rating)}
                      </div>
                    </div>
                    <p className="text-sm text-foreground/70">{r.comment}</p>
                  </div>
                ))}
              </div>
            </AspectCard>
          ) : null}
        </section>
      </DialogContent>
    </Dialog>
  )
}
