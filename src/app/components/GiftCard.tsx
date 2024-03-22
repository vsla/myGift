import React from 'react'
import Image from 'next/image'
import { Product } from '../page'

interface GiftCardProps {
  product: Product;
  handleGift(id: number): any
}

export const GiftCard = ({
  product: {
    id,
    imgUrl,
    name,
    description,
    gifted,
    giftedBy
  },
  handleGift
}: GiftCardProps) => {

  return (
    <>
      <li key={id} className="bg-white p-4 rounded-lg shadow-md">
        <div className="relative w-full h-32 mb-2">
          <Image
            src={'/images/' + imgUrl}
            alt={name} fill className='object-contain' />
        </div>
        <h2 className="text-lg font-bold text-gray-900">{name}</h2>
        <p className="text-gray-600">{description}</p>

        {gifted ? (
          <p className="text-green-500">Presenteado {giftedBy && `por: ${giftedBy}`}</p>
        ) : (
          <div className='flex justify-center'>
            <button
              onClick={() => handleGift(id)}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Presentear
            </button>
          </div>
        )}
      </li>

    </>
  )
}
