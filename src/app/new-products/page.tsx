import React from 'react';
import Link from 'next/link';
import { getProducts } from '../actions';
import { Product } from '../types';




const ProductTablePage = async () => {

  const products: Product[] = await getProducts()

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-white mt-4">Product List</h1>
      <div className="mb-4">

      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {
              ['ID', 'Name', 'Gifted', 'GiftedBY', 'Description', 'Category', 'Price', 'Link'].map(header => (
                <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {header}
                </th>
              ))
            }
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products.map((product: Product, rowId) => (
            <tr key={product.id} className={`${rowId % 2 === 1 ? 'bg-white-500' : 'bg-gray-300'}`}>
              <td className="px-6 py-4 whitespace-nowrap">{product.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.gifted}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.giftedBy}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.description}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.category}</td>
              <td className="px-6 py-4 whitespace-nowrap"> {new Intl.NumberFormat('pt-bR', { style: 'currency', currency: 'brl' }).format(product.price)}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Link href={product.productLink} className='hover:underline'>
                  Link to
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTablePage;
