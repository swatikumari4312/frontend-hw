"use client"

import type React from "react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type AspectCardProps = {
  title?: string
  children: React.ReactNode
  className?: string
  headerRight?: React.ReactNode
}

export function AspectCard({ title, children, className, headerRight }: AspectCardProps) {
  return (
    <Card
      className={cn(
        "rounded-2xl border bg-card/60 shadow-sm backdrop-blur-sm transition-shadow",
        "hover:shadow-lg focus-within:shadow-lg",
        className,
      )}
    >
      {(title || headerRight) && (
        <div className="flex items-center justify-between px-4 pt-4">
          {title ? <h3 className="text-sm font-medium text-foreground/80 text-pretty">{title}</h3> : <div />}
          {headerRight}
        </div>
      )}
      <div className="p-4">{children}</div>
    </Card>
  )
}
