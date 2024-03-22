import React from 'react'
import Image from 'next/image'
import { Product, ProductModalData } from '../types'

interface GiftCardProps {
  product: Product;
  handleGift(productData: ProductModalData): any
}

export const GiftCard = ({
  product: {
    id,
    imgUrl,
    name,
    description,
    gifted,
    giftedBy,
    price,
    productLink,
  },
  handleGift
}: GiftCardProps) => {

  const handleOpenModalPresent = () => {
    const productModalData: ProductModalData = {
      id,
      imgUrl,
      productName: name,
      price,
      productLink,
    }
    handleGift(productModalData)
  }

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
              onClick={handleOpenModalPresent}
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
