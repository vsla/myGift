import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { addBuyer } from "actions";
import Image from "next/image";
import { ProductModalData } from "types";
import { Button } from "components";

interface PromptProps {
  productData: ProductModalData;
  isOpen: boolean;
  onClose: () => void;
}

export const AddBuyerModal: React.FC<PromptProps> = ({
  isOpen,
  onClose,
  productData: { id, imgUrl, productName, price, productLink },
}) => {
  const router = useRouter();
  const [name, setName] = useState("");
  const promptRef = useRef<HTMLDivElement>(null);

  const address = "Rua rodrigues Ferreira, 45, Bloco A apt 303, Várzea";
  const pixNumber = 12805436474; // Example PIX number
  const pixString = "128.054.364-74"; // Example PIX number

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(address);
  };

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixNumber.toString());
  };

  const handleSubmit = async () => {
    if (id) {
      await addBuyer({ id, name });

      onClose();
      router.refresh();
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      promptRef.current &&
      !promptRef.current.contains(event.target as Node)
    ) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="cursor-pointer fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div
            ref={promptRef}
            className=" cursor-default bg-white p-4 rounded-md shadow-md m-2"
          >
            <h2 className="text-lg text-cyan-950 font-bold center text-center">
              Quero presentear
            </h2>
            <h3 className="text-sm text-cyan-950 font-bold text-center">
              Pode comprar o produto ou mandar o pix
            </h3>

            <div className="mt-2 flex flex-row px-4">
              <div>
                <p className="text-sm text-cyan-950">{productName}</p>
                <p className="text-sm text-cyan-950">
                  {new Intl.NumberFormat("pt-bR", {
                    style: "currency",
                    currency: "brl",
                  }).format(price)}
                </p>
                <a
                  className="text-sm text-cyan-950 underline"
                  href={productLink}
                  target="_blank"
                >
                  Link para o produto
                </a>
              </div>
              <div className="flex flex-grow justify-end">
                <Image
                  src={"/images/" + imgUrl}
                  alt={name}
                  height={30}
                  width={30}
                />
              </div>
            </div>

            <div className="flex items-center my-4">
              <p className="text-cyan-950 flex-grow  text-sm mr-2">{address}</p>
              <Button onClick={handleCopyAddress} variant="primarySmall">
                Copiar
              </Button>
            </div>

            <div className="border-b border-gray-300 my-4" />
            <div className="flex flex-row align-center mb-4">
              <p className="text-base text-cyan-950 font-bold mr-2">Pix:</p>
              <p className="text-cyan-950 mr-4 flex-grow">{pixString}</p>
              <Button onClick={handleCopyPix} variant="primarySmall">
                Copiar pix
              </Button>
            </div>

            <h2 className="text-lg text-cyan-950 font-bold">
              Caso queira colocar seu nome
            </h2>
            <p className="text-xs text-cyan-600 mb-4">
              Sem nome fica um presente surpresa 😃
            </p>
            <input
              type="text"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4 text-cyan-950 text-sm"
            />
            <div className="flex justify-end mt-4">
              <Button onClick={handleSubmit} variant="primary">
                Presentear
              </Button>
              <Button onClick={onClose} variant="secondary">
                Cancelar
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
