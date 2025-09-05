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
  rating: number
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

export const seafoodProducts: Product[] = [
  {
    id: 301,
    name: "Atlantic Salmon Fillet",
    image: "https://img.hellofresh.com/hellofresh_s3/image/5ebafce5477b61393d73ba7d-65c38f1f.jpg",
    gallery: [
      "https://images.unsplash.com/photo-1603052875596-36e52a1ff7b4?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603052881000-8d8824c3d0c5?q=80&w=1000&auto=format&fit=crop"
    ],
    category: "Seafood",
    description: "Fresh Atlantic salmon fillets, rich in omega-3 fatty acids.",
    features: ["Wild-Caught", "High Omega-3", "Fresh"],
    nutrition: { calories: 206, protein: "22g", fat: "12g", carbs: "0g" },
    specs: { Weight: "500g", Origin: "Atlantic Ocean", ShelfLife: "3 days" },
    traceability: { origin: "North Sea", batchId: "SALM-2025-01", processedAt: "2025-09-01" },
    reviews: [{ user: "Rama", rating: 5, comment: "Fresh and delicious!" }],
    price: { currency: "USD", amount: 15 }
  },
  {
    id: 302,
    name: "Tiger Prawns",
    image: "https://tse2.mm.bing.net/th/id/OIP.nS-ZDuPDjoW2VMSYlrOitgHaHa?pid=Api&P=0&h=180",
    gallery: [
      "https://images.unsplash.com/photo-1617196039004-3c75b3b3a7c0?q=80&w=1000&auto=format&fit=crop"
    ],
    category: "Seafood",
    description: "Large tiger prawns, perfect for grilling or stir-fry.",
    features: ["Fresh", "High Protein", "Sustainably Sourced"],
    nutrition: { calories: 99, protein: "20g", fat: "0.3g", carbs: "0g" },
    specs: { Weight: "400g", Origin: "Indian Ocean", ShelfLife: "2 days" },
    traceability: { origin: "Ocean Harvest", batchId: "PRAWN-2025-02", processedAt: "2025-08-30" },
    reviews: [{ user: "Anita", rating: 5, comment: "Perfect size and taste!" }],
    price: { currency: "USD", amount: 12 }
  },
  {
    id: 303,
    name: "Lobster",
    image: "https://tse1.mm.bing.net/th/id/OIP.8ZvQfVsK8I3kScGdhJ2FMgHaE7?pid=Api&P=0&h=180",
    gallery: [
      "https://images.unsplash.com/photo-1582630622542-f5e9a3e48a6e?q=80&w=1000&auto=format&fit=crop"
    ],
    category: "Seafood",
    description: "Fresh live lobster, ideal for steaming or boiling.",
    features: ["Live", "Premium Quality", "Sustainable"],
    nutrition: { calories: 90, protein: "19g", fat: "1g", carbs: "0g" },
    specs: { Weight: "1kg", Origin: "Atlantic Ocean", ShelfLife: "1 day" },
    traceability: { origin: "Sea Harvest", batchId: "LOB-2025-03", processedAt: "2025-09-01" },
    reviews: [{ user: "Sanjay", rating: 5, comment: "Super fresh, very tasty!" }],
    price: { currency: "USD", amount: 30 }
  },
  {
    id: 304,
    name: "Cod Fish",
    image: "https://tse4.mm.bing.net/th/id/OIP.yvCOyrdyGjrHTbiu9XDRUQHaEH?pid=Api&P=0&h=180",
    gallery: [
      "https://images.unsplash.com/photo-1599058917214-c7c3e1f5d217?q=80&w=1000&auto=format&fit=crop"
    ],
    category: "Seafood",
    description: "Fresh cod fish fillets, low fat and high protein.",
    features: ["Fresh", "Low Fat", "High Protein"],
    nutrition: { calories: 105, protein: "23g", fat: "0.9g", carbs: "0g" },
    specs: { Weight: "500g", Origin: "Atlantic Ocean", ShelfLife: "3 days" },
    traceability: { origin: "North Sea", batchId: "COD-2025-04", processedAt: "2025-08-31" },
    reviews: [{ user: "Neha", rating: 4, comment: "Fresh and tasty." }],
    price: { currency: "USD", amount: 14 }
  },
  {
    id: 305,
    name: "Sea Scallops",
    image: "https://www.thedailymeal.com/img/gallery/the-ultimate-guide-to-different-scallop-varieties/l-intro-1676406635.jpg",
    gallery: [
      "https://images.unsplash.com/photo-1617196039043-f75d7d2a4e60?q=80&w=1000&auto=format&fit=crop"
    ],
    category: "Seafood",
    description: "Fresh sea scallops, tender and juicy for sautéing or grilling.",
    features: ["Fresh", "Premium", "Sustainably Sourced"],
    nutrition: { calories: 88, protein: "16g", fat: "1g", carbs: "3g" },
    specs: { Weight: "400g", Origin: "Atlantic Ocean", ShelfLife: "2 days" },
    traceability: { origin: "Ocean Harvest", batchId: "SCAL-2025-05", processedAt: "2025-09-01" },
    reviews: [{ user: "Rama", rating: 5, comment: "Delicious and fresh!" }],
    price: { currency: "USD", amount: 22 }
  }
]
