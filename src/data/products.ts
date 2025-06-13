export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "MacBook Pro 2023",
    description: "Latest MacBook Pro with M2 chip, 16GB RAM, and 512GB SSD",
    price: 129999,
    image: "/images/macbook.jpg",
    category: "laptops",
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    description: "Apple's latest iPhone with A17 Pro chip and titanium design",
    price: 89999,
    image: "/images/iphone.jpg",
    category: "phones",
  },
  {
    id: 3,
    name: "Sony WH-1000XM5",
    description: "Premium noise-cancelling wireless headphones",
    price: 24999,
    image: "/images/headphones.jpg",
    category: "accessories",
  },
  {
    id: 4,
    name: "Samsung Galaxy S24 Ultra",
    description: "Samsung's flagship smartphone with S Pen",
    price: 79999,
    image: "/images/samsung-phone.jpg",
    category: "phones",
  },
  {
    id: 5,
    name: "iPad Pro M2",
    description: "12.9-inch iPad Pro with M2 chip and Liquid Retina XDR display",
    price: 69999,
    image: "/images/ipad.jpg",
    category: "tablets",
  },
  {
    id: 6,
    name: "Apple Watch Series 9",
    description: "Latest Apple Watch with advanced health features",
    price: 29999,
    image: "/images/apple-watch.jpg",
    category: "accessories",
  },
  {
    id: 7,
    name: "Dell XPS 15",
    description: "Premium Windows laptop with 4K display",
    price: 99999,
    image: "/images/dell-laptop.jpg",
    category: "laptops",
  },
  {
    id: 8,
    name: "Samsung Galaxy Tab S9",
    description: "Premium Android tablet with S Pen",
    price: 49999,
    image: "/images/samsung-tablet.jpg",
    category: "tablets",
  },
  {
    id: 9,
    name: "AirPods Pro 2",
    description: "Active noise cancellation and spatial audio",
    price: 19999,
    image: "/images/airpods.jpg",
    category: "accessories",
  },
  {
    id: 10,
    name: "Microsoft Surface Pro 9",
    description: "Versatile 2-in-1 laptop with detachable keyboard",
    price: 89999,
    image: "/images/surface.jpg",
    category: "laptops",
  },
  {
    id: 11,
    name: "Google Pixel 8 Pro",
    description: "Advanced AI features and exceptional camera",
    price: 69999,
    image: "/images/pixel.jpg",
    category: "phones",
  },
  {
    id: 12,
    name: "Samsung Galaxy Watch 6",
    description: "Advanced health monitoring and fitness tracking",
    price: 24999,
    image: "/images/samsung-watch.jpg",
    category: "accessories",
  }
]; 