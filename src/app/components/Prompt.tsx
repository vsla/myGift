import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { addBuyer } from '@/app/actions'

interface PromptProps {
  isOpen: boolean;
  onClose: () => void;
  id: number | null;
}

const Prompt: React.FC<PromptProps> = ({ isOpen, onClose, id }) => {
  const router = useRouter();
  const [name, setName] = useState('');

  const handleSubmit = async () => {
    if (id) {
      addBuyer({ id, name })

      router.refresh(); // Reload the page to reflect the changes
      onClose()
    }

  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-lg text-cyan-950 font-bold">Caso queira colocar seu nome</h2>
            <p className="text-sm text-cyan-500 mb-2">
              Pode não colocar e deixar secreto 😃</p>
            <input
              type="text"
              placeholder='Seu nome'
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2 text-cyan-950"
            />
            <div className="flex justify-end">
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
