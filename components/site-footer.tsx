"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

type Props = {
  recommendations: { name: string; href: string }[]
  categories: { name: string; href: string }[]
}

export function SiteFooter({ recommendations, categories }: Props) {
  return (
    <footer className="mt-10 border-t bg-background" id="categories">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8">
        <section>
          <h3 className="text-lg font-semibold">Recommended for you</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {recommendations.map((r) => (
              <Badge
                key={r.name}
                variant="secondary"
                className="rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
              >
                <Link href={r.href}>{r.name}</Link>
              </Badge>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold">Browse categories</h3>
          <div className="mt-3 flex flex-col gap-3 md:flex-row md:items-center">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <Badge key={c.name} variant="outline" className="rounded-full">
                  <Link href={c.href}>{c.name}</Link>
                </Badge>
              ))}
            </div>
            <div className="md:ml-auto flex w-full max-w-sm items-center gap-2">
              <Input placeholder="Search produce..." aria-label="Search produce" />
              <Button className="bg-emerald-600 text-white hover:bg-emerald-700">
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>
          </div>
        </section>

        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} AgriMart. Fresh from the farm.</p>
      </div>
    </footer>
  )
}
