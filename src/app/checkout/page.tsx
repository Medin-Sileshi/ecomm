'use client';

import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would process the payment here
    alert('Order placed successfully!');
    clearCart();
    router.push('/');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Order Summary</h2>
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between text-gray-900">
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>ETB {(item.price * item.quantity).toLocaleString()}</span>
              </div>
            ))}
            <div className="border-t pt-4">
              <div className="flex justify-between font-bold text-gray-900">
                <span>Total</span>
                <span>ETB {total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Shipping Information</h2>
          <div>
            <label htmlFor="name" className="block mb-1 text-gray-900">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded text-gray-900 bg-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 text-gray-900">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded text-gray-900 bg-white"
            />
          </div>
          <div>
            <label htmlFor="address" className="block mb-1 text-gray-900">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded text-gray-900 bg-white"
            />
          </div>
          <div>
            <label htmlFor="city" className="block mb-1 text-gray-900">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded text-gray-900 bg-white"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Place Order
          </button>
        </form>
      </div>
    </main>
  );
} 