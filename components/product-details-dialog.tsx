"use client"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import type { Product, Feature } from "@/data/vegetables"

type Props = {
  product: Product
  feature: Feature | null
  open: boolean
  onOpenChange: (val: boolean) => void
}

export function ProductDetailsDialog({ product, feature, open, onOpenChange }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-balance">
            {product.name} — {feature?.title || "Details"}
          </DialogTitle>
        </DialogHeader>

        <div className="grid gap-4">
          {/* Gallery */}
          <div className="grid grid-cols-3 gap-2">
            {product.gallery.slice(0, 3).map((src, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-md">
                {/* Using next/image with fill for performance */}
                <Image
                  src={src || "/placeholder.svg"}
                  alt={`${product.name} image ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 33vw, 200px"
                />
              </div>
            ))}
          </div>

          <Separator />

          {/* Specifications / Nutrients */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-md border p-3">
              <p className="text-sm text-muted-foreground">Protein</p>
              <p className="font-medium">{product.nutrients.protein}</p>
            </div>
            <div className="rounded-md border p-3">
              <p className="text-sm text-muted-foreground">Vitamins</p>
              <div className="mt-1 flex flex-wrap gap-1">
                {product.nutrients.vitamins.map((v) => (
                  <Badge key={v} variant="secondary" className="bg-amber-100 text-amber-800">
                    {v}
                  </Badge>
                ))}
              </div>
            </div>
            {product.nutrients.fiber && (
              <div className="rounded-md border p-3">
                <p className="text-sm text-muted-foreground">Fiber</p>
                <p className="font-medium">{product.nutrients.fiber}</p>
              </div>
            )}
            {typeof product.nutrients.calories !== "undefined" && (
              <div className="rounded-md border p-3">
                <p className="text-sm text-muted-foreground">Calories</p>
                <p className="font-medium">{product.nutrients.calories} kcal</p>
              </div>
            )}
          </div>

          <Separator />

          {/* Feature description */}
          {feature && (
            <div className="rounded-md border p-4">
              <h4 className="font-semibold">{feature.title}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
