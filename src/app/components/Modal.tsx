import React, { useEffect, useRef } from 'react';



interface PromptProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode
}

const Modal: React.FC<PromptProps> = ({ isOpen, onClose, children }) => {
  const promptRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (promptRef.current && !promptRef.current.contains(event.target as Node)) {
      onClose();
    }
  }


  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (

        <div className="cursor-pointer fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div ref={promptRef} className=" cursor-default bg-white p-4 rounded-md shadow-md m-2">
            {children}
          </div>
        </div>

      )}
    </>
  );
};

export default Modal;
