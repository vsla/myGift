'use client'
import React, { useState } from 'react'
import { Product } from '../types';
import { GiftCard } from './GiftCard';
import Prompt from './Prompt';

interface GiftListProps {
  products: Array<Product>
}

export const GiftList = ({ products }: GiftListProps) => {
  const [promptOpen, setPromptOpen] = useState(false);
  const [productId, setProductId] = useState<number | null>(null);


  const handleGift = async (id: number) => {
    setPromptOpen(true);
    setProductId(id)
  };

  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {products?.map(product => (
          <GiftCard key={product.id} product={product} handleGift={handleGift} />
        ))}
      </ul>
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
