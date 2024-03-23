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
        <div className='flex flex-row'>
          <div className="relative w-44 h-32 mb-2 mr-4">
            <Image
              src={'/images/' + imgUrl} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt={name} fill className='object-contain' />
          </div>
          <div className='flex flex-col'>
            <h2 className="text-lg font-bold text-gray-900">{name}</h2>
            <p className="text-gray-600 leading-5">{description}</p>
            {gifted ? (
              <p className="text-green-500">Presenteado {giftedBy && `por: ${giftedBy}`}</p>
            ) : (
              <div className='flex justify-end items-end flex-grow'>
                <button
                  onClick={handleOpenModalPresent}
                  className=" bg-blue-500 text-white w-full px-4 py-2 h-10 rounded-md hover:bg-blue-600 text-sm"
                >
                  Presentear
                </button>
              </div>
            )}
          </div>
        </div>


      </li>

    </>
  )
}
