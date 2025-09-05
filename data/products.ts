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

export const products: Product[] = [
  {
    id: 1,
    name: "Cabbage",
    image: "https://tse3.mm.bing.net/th/id/OIP.JfO98d1QbKv54y17FWNd0gHaE5?pid=Api&P=0&h=180",
    gallery: [
      "https://images.unsplash.com/photo-1546554137-f86b9593a222?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615486364391-6cbf6f8c06d4?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop",
    ],
    category: "Vegetables",
    description: "Leafy green rich in vitamin C and K—great for salads and stir‑fries.",
    features: ["Farm Fresh", "Organic", "Stores Well"],
    nutrition: { calories: 25, sugar: "3.2g", carbs: "5.8g", protein: "1.3g", fat: "0.1g" },
    specs: { Vitamins: "C, K, B6", Fiber: "2.5g/100g", Texture: "Crisp" },
    traceability: {
      origin: "Local Farms",
      batchId: "CAB-2025-001",
      harvestedAt: "2025-08-28",
      certification: "Organic",
    },
    reviews: [
      { user: "Aman", rating: 5, comment: "Super fresh and crunchy." },
      { user: "Neha", rating: 4, comment: "Perfect for coleslaw." },
    ],
    price: { currency: "USD", amount: 1.8 },
  },
  {
    id: 2,
    name: "Tomato",
    image: "https://wallpapercave.com/wp/wp2030841.jpg",
    gallery: [
      "https://images.unsplash.com/photo-1518843875459-f738682238a6?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1546470427-31f86c7f4c22?q=80&w=1000&auto=format&fit=crop",
    ],
    category: "Vegetables",
    description: "Juicy, sweet tomatoes—ideal for sauces, salads, and snacking.",
    features: ["Vine‑Ripened", "Lycopene Rich", "Versatile"],
    nutrition: { calories: 18, sugar: "2.6g", carbs: "3.9g", protein: "0.9g", fat: "0.2g" },
    specs: { Vitamins: "C, A, K", Fiber: "1.2g/100g", Texture: "Juicy" },
    traceability: { origin: "Valley Farm", batchId: "TOM-2025-014", harvestedAt: "2025-08-30" },
    reviews: [{ user: "Priya", rating: 5, comment: "Sweet and flavorful." }],
    price: { currency: "USD", amount: 2.2 },
  },
  {
    id: 3,
    name: "Potato",
    image: "https://cdn.pixabay.com/photo/2014/08/06/20/32/potatoes-411975_1280.jpg",
    gallery: ["https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000&auto=format&fit=crop"],
    category: "Vegetables",
    description: "Hearty tuber—perfect for fries, mash, and roasting.",
    features: ["Starchy", "Hearty", "Versatile"],
    nutrition: { calories: 77, sugar: "0.8g", carbs: "17g", protein: "2g", fat: "0.1g" },
    specs: { Vitamins: "C, B6", Fiber: "2.2g/100g", Texture: "Starchy" },
    traceability: { origin: "Highland Farm", batchId: "POT-2025-006" },
    reviews: [{ user: "Karan", rating: 4, comment: "Good size and clean skins." }],
    price: { currency: "USD", amount: 1.2 },
  },
  {
    id: 4,
    name: "Carrot",
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?q=80&w=1000&auto=format&fit=crop"],
    category: "Vegetables",
    description: "Crunchy, sweet, and rich in beta‑carotene.",
    features: ["Crunchy", "Snackable", "Rich in A"],
    nutrition: { calories: 41, sugar: "4.7g", carbs: "9.6g", protein: "0.9g", fat: "0.2g" },
    specs: { Vitamins: "A, K, C", Fiber: "2.8g/100g", Texture: "Crunchy" },
    traceability: { origin: "Riverbed Farm", batchId: "CAR-2025-004" },
    reviews: [{ user: "Sara", rating: 5, comment: "Very sweet and crisp." }],
    price: { currency: "USD", amount: 1.5 },
  },
  {
    id: 5,
    name: "Spinach",
    image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1607301405390-96295a6f8785?q=80&w=1000&auto=format&fit=crop"],
    category: "Vegetables",
    description: "Tender leaves, iron‑rich—great for salads and sautés.",
    features: ["Iron‑Rich", "Leafy Green", "Tender"],
    nutrition: { calories: 23, sugar: "0.4g", carbs: "3.6g", protein: "2.9g", fat: "0.4g" },
    specs: { Vitamins: "A, C, K, Folate", Fiber: "2.2g/100g", Texture: "Tender" },
    traceability: { origin: "Greenhouse 3", batchId: "SPI-2025-009" },
    reviews: [{ user: "Leo", rating: 4, comment: "Fresh, minimal stems." }],
    price: { currency: "USD", amount: 2.0 },
  },
  {
    id: 6,
    name: "Capsicum",
    image: "https://images.unsplash.com/photo-1546549039-35e48b4b01d2?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1553530666-3bdfb0b0a502?q=80&w=1000&auto=format&fit=crop"],
    category: "Vegetables",
    description: "Colorful peppers with sweet, crisp bite.",
    features: ["Colorful", "Sweet & Crisp", "Salad‑Ready"],
    nutrition: { calories: 26, sugar: "4.2g", carbs: "6g", protein: "1g", fat: "0.3g" },
    specs: { Vitamins: "C, B6, A", Fiber: "1.7g/100g", Texture: "Crisp" },
    traceability: { origin: "Color Farm", batchId: "CAP-2025-012" },
    reviews: [{ user: "Meera", rating: 5, comment: "Bright colors and crunch." }],
    price: { currency: "USD", amount: 2.4 },
  },
]
