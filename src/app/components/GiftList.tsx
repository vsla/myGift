'use client'
import React, { useState } from 'react'
import { Product } from '../types';
import { GiftCard } from './GiftCard';
import Prompt from './Prompt';

interface GiftListProps {
  productsByCategory: { [key: string]: Array<Product> }
}

export const GiftList = ({ productsByCategory }: GiftListProps) => {
  const [promptOpen, setPromptOpen] = useState(false);
  const [productId, setProductId] = useState<number | null>(null);


  const handleGift = async (id: number) => {
    setPromptOpen(true);
    setProductId(id)
  };

  return (
    <>

      {Object.keys(productsByCategory).map(category => {
        const products = productsByCategory[category]
        return (
          <div key={category} >
            <h3 className='mt-4 mb-1'>{category}</h3>
            <hr className="h-px mb-4 bg-gray-200 border-0 dark:bg-gray-700 w-24"></hr>
            <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">

              {products?.map(product => (
                <GiftCard key={product.id} product={product} handleGift={handleGift} />
              ))}
            </ul>
          </div>
        )
      })}


      <Prompt
        id={productId}
        isOpen={promptOpen}
        onClose={() => {
          setProductId(null)
          setPromptOpen(false)
        }}
      />
    </>
  )
}
