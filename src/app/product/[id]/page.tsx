import { products } from '@/data/products';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import AddToCartButton from '@/components/AddToCartButton';
import Link from 'next/link';

type Props = {
  params: {
    id: string;
  };
};

export default function ProductPage({ params }: Props) {
  const product = products.find((p) => p.id === parseInt(params.id));

  if (!product) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <Link
        href="/"
        className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to Products
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="relative h-[500px] rounded-xl overflow-hidden shadow-sm bg-blue-50">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold mb-4 text-gray-900">{product.name}</h1>
            <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>
          </div>
          <div className="text-4xl font-bold text-blue-600">
            ETB {product.price.toLocaleString()}
          </div>
          <div className="pt-6">
            <AddToCartButton product={product} />
          </div>
          <div className="border-t border-gray-100 pt-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Product Details</h2>
            <div className="space-y-2 text-gray-600 bg-blue-50 p-4 rounded-lg">
              <p><span className="font-medium text-gray-900">Category:</span> {product.category}</p>
              <p><span className="font-medium text-gray-900">Availability:</span> In Stock</p>
              <p><span className="font-medium text-gray-900">Shipping:</span> Free Shipping</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 