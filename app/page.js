"use client";

import Image from "next/image";
import { useCart } from "./context/CartContext";

const products = [
  { id: 1, name: "apple", price: 50, image: "/Apple.png" },
  { id: 2, name: "banana", price: 70, image: "/banana.png" },
  { id: 3, name: "grape", price: 120, image: "/grape.png" },
];

export default function Home() {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 gap-8 items-center justify-items-center min-h-screen p-8 sm:p-20">
      <h1 className="text-2xl font-bold">Shop</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center border p-4 rounded-lg shadow-lg"
          >
            {/** Replace Image with img for debugging if needed */}
            <Image
              src={product.image}
              alt={product.name}
              width={150}
              height={150}
              className="rounded-lg"
              priority={true} // Optional for optimization
            />
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p className="text-sm text-gray-500">{product.price} ₽</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
