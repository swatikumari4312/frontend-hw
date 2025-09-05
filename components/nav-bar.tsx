"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import {
  Home,
  Grid3X3,
  LifeBuoy,
  User,
  Settings,
  ChevronLeft,
  Menu,
} from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export function NavBar() {
 const categories = [
  { name: "Agriculture", slug: "agriculture", image: "/agriculture.jpg" },
  { name: "Meat & Poultry", slug: "meat-poultry", image: "/meat.jpg" },
  { name: "Dairy", slug: "dairy", image: "/dairy.jpg" },
  { name: "Seafood", slug: "seafood", image: "/seafood.jpg" },
  { name: "Condiments", slug: "condiments", image: "/condiments.jpg" },
  // { name: "Textiles", slug: "textiles", image: "/textiles.jpg" },
]

  return (
    <header className=" top-0 z-40 border-b  supports-[backdrop-filter]:bg-background/60 ">
      <div className="mx-auto flex max-w-6xl items-center bg-pink-100 justify-between px-4 py-3 ">
        {/* Left side */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            aria-label="Go back"
            onClick={() => window.history.back()}
            className="border-slate-200 text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-200"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Link href="/" className="font-semibold text-foreground">
            <Image
              src="https://png.pngtree.com/png-clipart/20211212/original/pngtree-agricultural-logo-design-png-image_6962123.png"
              alt="AgroTrack"
              width={170}
              height={80}
              className="h-18 w-auto"
            />
          </Link>
        </div>

        {/* Middle: Auto Image Carousel */}
        <div className="w-[220px] sm:w-[300px] md:w-[400px]">
          <Carousel
            plugins={[Autoplay({ delay: 2500 })]}
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent>
              {categories.map((cat, index) => (
                <CarouselItem key={index} className="basis-1/1">
                  <Link key={cat.slug} href={`/${cat.slug}`}>
                  <div className="flex flex-col items-center">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="h-26 w-204 object-cover rounded-md shadow"
                    />
                    <span className="mt-1 text-xs font-medium text-center">
                      {cat.name}
                    </span>
                  </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Right side */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              aria-label="Open menu"
              className="border-slate-200 text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-200 bg-transparent"
            >
              <Menu className="mr-2 h-4 w-4" />
              Menu
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <SheetHeader>
              <SheetTitle>Navigate</SheetTitle>
            </SheetHeader>
            <nav className="mt-4 grid gap-2">
              <Link
                href="/"
                className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-muted"
              >
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Link>
              <Link
                href="#categories"
                className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-muted"
              >
                <Grid3X3 className="h-4 w-4" />
                <span>Categories</span>
              </Link>
              <Link
                href="#service"
                className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-muted"
              >
                <Grid3X3 className="h-4 w-4" />
                <span>Services</span>
              </Link>
              <Link
                href="#help"
                className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-muted"
              >
                <LifeBuoy className="h-4 w-4" />
                <span>Help</span>
              </Link>
              <Separator />
              <Link
                href="#account"
                className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-muted"
              >
                <User className="h-4 w-4" />
                <span>Account</span>
              </Link>
              <Link
                href="#settings"
                className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-muted"
              >
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
