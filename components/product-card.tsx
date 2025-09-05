"use client"

import * as React from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"
import type { Product } from "@/data/products"

type ProductCardProps = {
  product?: Product
  image?: string
  category?: string
  name?: string
  description?: string
  onOpen: () => void
  onFeatureSelect?: (feature: string) => void
  className?: string
}

export function ProductCard(props: ProductCardProps) {
  const p = props.product
  const image = p?.image ?? props.image ?? "/product-cover.png"
  const category = p?.category ?? props.category ?? "Category"
  const name = p?.name ?? props.name ?? "Item"
  const description =
    p?.description ?? props.description ?? "Tap to view details including images, specs, and features."

  const [expanded, setExpanded] = React.useState(false)

  return (
    <Card
      className={cn(
        "overflow-hidden rounded-2xl border bg-card/70 shadow-sm transition",
        "hover:translate-y-[-2px] hover:shadow-lg",
        props.className,
      )}
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={`${name} image`}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
        />
        <div className="absolute left-3 top-3">
          <Badge className="bg-emerald-600 text-white hover:bg-emerald-700" aria-label={`Category: ${category}`}>
            {category}
          </Badge>
        </div>
      </div>

      <div className="space-y-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold leading-6 text-foreground text-pretty">{name}</h3>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-expanded={expanded}
            aria-label={expanded ? "Collapse preview" : "Expand preview"}
            onClick={() => setExpanded((v) => !v)}
          >
            <ChevronDown className={cn("h-5 w-5 transition-transform", expanded && "rotate-180")} />
          </Button>
        </div>
        <p className="line-clamp-2 text-sm leading-6 text-foreground/70">{description}</p>

        <div className="flex items-center gap-3 pt-1">
          <Button
            onClick={props.onOpen}
            className="bg-emerald-600 text-white hover:bg-emerald-700 focus-visible:ring-emerald-500"
            aria-label={`Know more about ${name}`}
          >
            Know more
          </Button>
        </div>

        {expanded && (
          <div className="mt-4 grid gap-3">
            {/* Mini gallery */}
            {p?.gallery && p.gallery.length > 0 ? (
              <div className="grid grid-cols-3 gap-2">
                {p.gallery.slice(0, 3).map((src, i) => (
                  <div key={i} className="relative aspect-square overflow-hidden rounded-md">
                    <img
                      src={src || "/placeholder.svg?height=160&width=160&query=gallery"}
                      alt={`${name} preview ${i + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            ) : null}

            {/* Quick specs */}
            <div className="grid grid-cols-3 gap-2 text-xs">
              {p?.nutrition ? (
                <>
                  <div className="rounded-md border p-2">
                    <div className="text-foreground/60">Protein</div>
                    <div className="font-medium">{p.nutrition.protein}</div>
                  </div>
                  <div className="rounded-md border p-2">
                    <div className="text-foreground/60">Calories</div>
                    <div className="font-medium">{p.nutrition.calories} kcal</div>
                  </div>
                  <div className="rounded-md border p-2">
                    <div className="text-foreground/60">Sugar</div>
                    <div className="font-medium">{p.nutrition.sugar}</div>
                  </div>
                </>
              ) : null}
            </div>

            {/* Feature chips */}
            {p?.features && p.features.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {p.features.map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => props.onFeatureSelect?.(f)}
                    className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800 hover:bg-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                    aria-label={`Open details for feature ${f}`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        )}
      </div>
    </Card>
  )
}
