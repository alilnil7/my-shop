import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContext";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shop",
  description: "Cart shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          <header className="p-4 bg-gray-100 shadow-md">
            <nav className="flex justify-between max-w-4xl mx-auto">
              <Link href="/" className="font-bold text-lg">
                Shop
              </Link>
              <Link href="/cart" className="text-blue-500">
                Cart
              </Link>
            </nav>
          </header>
          <main className="max-w-4xl mx-auto p-4">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}

