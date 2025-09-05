export type Nutrition = {
  calories: number
  sugar: string
  carbs?: string
  protein?: string
  fat?: string
}

export type Traceability = {
  origin: string
  batchId: string
  harvestedAt?: string
  processedAt?: string
  certification?: string
}

export type Review = {
  user: string
  rating: number // 1-5
  comment: string
}

export type Product = {
  id: number
  name: string
  image: string
  gallery?: string[]
  category: string
  description: string
  features: string[]
  nutrition?: Nutrition
  specs?: Record<string, string | number>
  traceability?: Traceability
  reviews?: Review[]
  price?: { currency: string; amount: number }
}

export const dairyProducts: Product[] = [
  {
    id: 101,
    name: "Organic Milk",
    image: "https://img.freepik.com/premium-photo/cow-milk-ai-generated_406939-10406.jpg",
    gallery: [
      "https://images.unsplash.com/photo-1582719478199-7be03a6d15d4?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590080879030-0cdbdb20704d?q=80&w=1000&auto=format&fit=crop"
    ],
    category: "Dairy",
    description: "Fresh organic milk from local farms. Rich in calcium and vitamins.",
    features: ["Organic", "High Calcium", "Freshly Pasteurized"],
    nutrition: { calories: 42, sugar: "5g", protein: "3.4g", fat: "1g" },
    specs: { Volume: "1L", FatContent: "Full Cream", ShelfLife: "7 days" },
    traceability: { origin: "Green Valley Farm", batchId: "MILK-2025-01", processedAt: "2025-09-01", certification: "Organic" },
    reviews: [
      { user: "Rama", rating: 5, comment: "Tastes very fresh and creamy!" },
      { user: "Anita", rating: 4, comment: "Good quality milk." }
    ],
    price: { currency: "USD", amount: 3.5 }
  },
  {
    id: 102,
    name: "Cheddar Cheese",
    image: "https://www.tastingtable.com/img/gallery/how-the-color-of-cheddar-may-be-able-to-tell-you-where-it-was-made/intro-1664469788.jpg",
    gallery: [
      "https://images.unsplash.com/photo-1600185367401-04cbb4ec6c7f?q=80&w=1000&auto=format&fit=crop"
    ],
    category: "Dairy",
    description: "Aged cheddar cheese with rich flavor and creamy texture.",
    features: ["Aged", "Creamy", "High Protein"],
    nutrition: { calories: 402, sugar: "1g", protein: "25g", fat: "33g" },
    specs: { Weight: "200g", Origin: "Cow Milk", ShelfLife: "30 days" },
    traceability: { origin: "Happy Cows Farm", batchId: "CHEESE-2025-05", processedAt: "2025-08-25", certification: "Organic" },
    reviews: [
      { user: "Sanjay", rating: 5, comment: "Perfect for sandwiches and salads." }
    ],
    price: { currency: "USD", amount: 6.0 }
  }
]
