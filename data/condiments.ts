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

export const condimentsProducts: Product[] = [
  {
    id: 401,
    name: "Organic Ketchup",
    image: "https://tse2.mm.bing.net/th/id/OIP.a9ytXQyfVtNKBNIwte8zSwHaHa?pid=Api&P=0&h=180",
    gallery: [
      "https://images.unsplash.com/photo-1601230560343-0e8c3a3e3bfa?q=80&w=1000&auto=format&fit=crop"
    ],
    category: "Condiments",
    description: "Rich and tangy organic tomato ketchup with natural ingredients.",
    features: ["Organic", "No Preservatives", "Gluten-Free"],
    nutrition: { calories: 80, sugar: "20g", fat: "0g", carbs: "21g", protein: "0g" },
    specs: { Volume: "500ml", ShelfLife: "12 months" },
    traceability: { origin: "Green Valley Farm", batchId: "KETCH-2025-01", processedAt: "2025-08-25" },
    reviews: [{ user: "Rama", rating: 5, comment: "Sweet and flavorful!" }],
    price: { currency: "USD", amount: 4.5 }
  },
  {
    id: 402,
    name: "Dijon Mustard",
    image: "https://tse3.mm.bing.net/th/id/OIP.zSPlAhjkOulZ6ApseCOuZgHaFE?pid=Api&P=0&h=180",
    gallery: [],
    category: "Condiments",
    description: "Classic Dijon mustard, perfect for sandwiches and dressings.",
    features: ["Spicy", "Gluten-Free", "All-Natural"],
    nutrition: { calories: 60, sugar: "1g", fat: "3g", carbs: "5g", protein: "1g" },
    specs: { Volume: "250g", ShelfLife: "12 months" },
    traceability: { origin: "France", batchId: "MUST-2025-02", processedAt: "2025-08-20" },
    reviews: [{ user: "Anita", rating: 5, comment: "Sharp and flavorful!" }],
    price: { currency: "USD", amount: 5 }
  },
  {
    id: 403,
    name: "Soy Sauce",
    image: "https://www.uwajimaya.com/wp-content/uploads/2022/05/Grocery-Dark-Soy-Sauce-1680x1601.jpeg",
    gallery: [],
    category: "Condiments",
    description: "Traditional soy sauce made with fermented soybeans.",
    features: ["Gluten-Free", "Fermented", "Rich Flavor"],
    nutrition: { calories: 53, sugar: "1g", fat: "0g", carbs: "6g", protein: "8g" },
    specs: { Volume: "500ml", ShelfLife: "18 months" },
    traceability: { origin: "Japan", batchId: "SOY-2025-03", processedAt: "2025-08-22" },
    reviews: [{ user: "Sanjay", rating: 5, comment: "Authentic taste!" }],
    price: { currency: "USD", amount: 6 }
  },
  {
    id: 404,
    name: "Hot Chili Sauce",
    image: "https://tse1.mm.bing.net/th/id/OIP.DWy9aOe0JMGTS_vuuopwbQHaEK?pid=Api&P=0&h=180",
    gallery: [],
    category: "Condiments",
    description: "Spicy chili sauce with natural ingredients and bold flavor.",
    features: ["Spicy", "Natural Ingredients", "Gluten-Free"],
    nutrition: { calories: 50, sugar: "5g", fat: "0g", carbs: "12g", protein: "0g" },
    specs: { Volume: "200ml", ShelfLife: "12 months" },
    traceability: { origin: "Mexico", batchId: "CHILI-2025-04", processedAt: "2025-08-28" },
    reviews: [{ user: "Neha", rating: 4, comment: "Perfect for spicy dishes." }],
    price: { currency: "USD", amount: 4 }
  },
  {
    id: 405,
    name: "BBQ Sauce",
    image: "https://howtofeedaloon.com/wp-content/uploads/2015/02/ribs-with-sauce-21.jpg",
    gallery: [],
    category: "Condiments",
    description: "Rich and smoky BBQ sauce, ideal for grilling meats.",
    features: ["Smoky", "Gluten-Free", "Natural Ingredients"],
    nutrition: { calories: 70, sugar: "15g", fat: "0g", carbs: "17g", protein: "0g" },
    specs: { Volume: "300ml", ShelfLife: "12 months" },
    traceability: { origin: "USA", batchId: "BBQ-2025-05", processedAt: "2025-08-30" },
    reviews: [{ user: "Rama", rating: 5, comment: "Perfect for BBQ!" }],
    price: { currency: "USD", amount: 5 }
  }
]
