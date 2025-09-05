export type Nutrients = {
  protein: string
  vitamins: string[]
  fiber?: string
  calories?: number
}

export type Feature = {
  id: string
  title: string
  description: string
}

export type Product = {
  id: string
  name: string
  image: string
  description: string
  nutrients: Nutrients
  features: Feature[]
  gallery: string[]
  category: string
}

export const vegetables: Product[] = [
  {
    id: "cabbage",
    name: "Cabbage",
    image: "https://tse3.mm.bing.net/th/id/OIP.JfO98d1QbKv54y17FWNd0gHaE5?pid=Api&P=0&h=180",
    description: "A leafy green vegetable rich in vitamins C and K, perfect for salads and stir-fries.",
    nutrients: {
      protein: "1.3g per 100g",
      vitamins: ["C", "K", "B6"],
      fiber: "2.5g per 100g",
      calories: 25,
    },
    features: [
      { id: "fresh", title: "Farm Fresh", description: "Harvested this week from local farms." },
      { id: "organic", title: "Organic", description: "Grown without synthetic pesticides." },
      { id: "storage", title: "Easy Storage", description: "Keeps well refrigerated for days." },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1546554137-f86b9593a222?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615486364391-6cbf6f8c06d4?q=80&w=800&auto=format&fit=crop",
    ],
    category: "Vegetables",
  },
  {
    id: "tomato",
    name: "Tomato",
    image: "https://images.unsplash.com/photo-1546470427-e2634d0e4c1b?q=80&w=1200&auto=format&fit=crop",
    description: "Juicy and sweet tomatoes, great for sauces, salads, and snacking.",
    nutrients: {
      protein: "0.9g per 100g",
      vitamins: ["C", "A", "K"],
      fiber: "1.2g per 100g",
      calories: 18,
    },
    features: [
      { id: "ripe", title: "Vine-Ripened", description: "Picked at peak ripeness for flavor." },
      { id: "lycopene", title: "Lycopene Rich", description: "A natural antioxidant for wellbeing." },
      { id: "versatile", title: "Versatile", description: "Perfect for many recipes." },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1518843875459-f738682238a6?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1546470427-31f86c7f4c22?q=80&w=800&auto=format&fit=crop",
    ],
    category: "Vegetables",
  },
  {
    id: "potato",
    name: "Potato",
    image: "https://images.unsplash.com/photo-1506806732259-39c2d0268443?q=80&w=1200&auto=format&fit=crop",
    description: "Staple tuber with many cooking possibilities.",
    nutrients: {
      protein: "2g per 100g",
      vitamins: ["C", "B6"],
      fiber: "2.2g per 100g",
      calories: 77,
    },
    features: [
      { id: "starchy", title: "Starchy", description: "Ideal for fries and mash." },
      { id: "hearty", title: "Hearty", description: "Filling and comforting." },
    ],
    gallery: ["https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop"],
    category: "Vegetables",
  },
  {
    id: "carrot",
    name: "Carrot",
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=1200&auto=format&fit=crop",
    description: "Crunchy, sweet, and packed with beta-carotene.",
    nutrients: {
      protein: "0.9g per 100g",
      vitamins: ["A", "K", "C"],
      fiber: "2.8g per 100g",
      calories: 41,
    },
    features: [
      { id: "crunch", title: "Crunchy", description: "Great raw or cooked." },
      { id: "snack", title: "Snackable", description: "Kid-friendly healthy bites." },
    ],
    gallery: ["https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?q=80&w=800&auto=format&fit=crop"],
    category: "Vegetables",
  },
  {
    id: "spinach",
    name: "Spinach",
    image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=1200&auto=format&fit=crop",
    description: "Tender leaves rich in iron and vitamins.",
    nutrients: {
      protein: "2.9g per 100g",
      vitamins: ["A", "C", "K", "Folate"],
      fiber: "2.2g per 100g",
      calories: 23,
    },
    features: [
      { id: "iron", title: "Iron-Rich", description: "Supports energy and health." },
      { id: "leafy", title: "Leafy Green", description: "Perfect for salads and sautés." },
    ],
    gallery: ["https://images.unsplash.com/photo-1607301405390-96295a6f8785?q=80&w=800&auto=format&fit=crop"],
    category: "Vegetables",
  },
  {
    id: "capsicum",
    name: "Capsicum",
    image: "https://images.unsplash.com/photo-1546549039-35e48b4b01d2?q=80&w=1200&auto=format&fit=crop",
    description: "Colorful peppers with sweet, crisp bite.",
    nutrients: {
      protein: "1g per 100g",
      vitamins: ["C", "B6", "A"],
      fiber: "1.7g per 100g",
      calories: 26,
    },
    features: [
      { id: "colorful", title: "Colorful", description: "Adds vibrance to dishes." },
      { id: "sweet", title: "Sweet & Crisp", description: "Great for salads and roasting." },
    ],
    gallery: ["https://images.unsplash.com/photo-1553530666-3bdfb0b0a502?q=80&w=800&auto=format&fit=crop"],
    category: "Vegetables",
  },
]
