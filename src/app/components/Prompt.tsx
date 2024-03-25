import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import Image from 'next/image';
import { ProductModalData } from '../types';

interface PromptProps {
  productData: ProductModalData;
  isOpen: boolean;
  onClose: () => void;
}



type addBuyerProps = {
  name?: string;
  id: number
}

async function addBuyer({
  name, id
}: addBuyerProps) {
  const response = await fetch('http://localhost:3000/api', {
    method: 'PUT',
    body:
      JSON.stringify({ name, id })
  })

  return response.json()
}


const Prompt: React.FC<PromptProps> = ({ isOpen, onClose,
  productData: {
    id, imgUrl, productName, price, productLink
  }
}) => {
  const router = useRouter();
  const [name, setName] = useState('');

  const address = 'Rua rodrigues Ferreira, 45, Bloco A apt 303, Várzea';
  const pixNumber = 12805436474; // Example PIX number
  const pixString = '128.054.364-74'; // Example PIX number

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(address);
  };

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixNumber.toString());
  };



  const handleSubmit = async () => {
    if (id) {

      await addBuyer({ id, name });

      router.refresh();
      onClose();
    }
  };

  return (
    <>
      {isOpen && (

        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-4 rounded-md shadow-md m-2">
            <h2 className="text-lg text-cyan-950 font-bold center text-center">Quero presentear</h2>
            <h3 className="text-sm text-cyan-950 font-bold text-center">Pode comprar o produto ou mandar o pix</h3>


            <div className='mt-2 flex flex-row px-4'>
              <div>
                <p className='text-sm text-cyan-950'>
                  {productName}
                </p>
                <p className='text-sm text-cyan-950'>
                  {new Intl.NumberFormat('pt-bR', { style: 'currency', currency: 'brl' }).format(price)}
                </p>
                <a className='text-sm text-cyan-950 underline' href={productLink} target='_blank'>
                  Link para o produto
                </a>
              </div>
              <div className="flex flex-grow justify-end">
                <Image
                  src={'/images/' + imgUrl}
                  alt={name}
                  height={30}
                  width={30} />
              </div>
            </div>

            <div className="flex items-center my-4">
              <p className="text-cyan-950 flex-grow  text-sm mr-2">{address}</p>
              <button
                onClick={handleCopyAddress}
                className="bg-blue-500 text-white px-2 py-1 text-sm rounded-md hover:bg-blue-600"
              >
                Copiar
              </button>
              d</div>

            <div className="border-b border-gray-300 my-4" />
            <div className='flex flex-row align-center mb-4'>
              <p className="text-base text-cyan-950 font-bold mr-2">Pix:</p>
              <p className="text-cyan-950 mr-4 flex-grow">{pixString}</p>
              <button
                onClick={handleCopyPix}
                className="bg-blue-500 text-white px-2 py-1 text-sm rounded-md hover:bg-blue-600"
              >
                Copiar pix
              </button>
            </div>



            <h2 className="text-lg text-cyan-950 font-bold">Caso queira colocar seu nome</h2>
            <p className="text-xs text-cyan-600 mb-4">Sem nome fica um presente surpresa 😃</p>
            <input
              type="text"
              placeholder="Seu nome"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4 text-cyan-950 text-sm"
            />
            <div className="flex justify-end mt-4">
              <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600"
              >
                Presentear
              </button>
              <button onClick={onClose} className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400">
                Cancelar
              </button>
            </div>
          </div>
        </div>

      )}
    </>
  );
};

export default Prompt;
