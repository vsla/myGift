'use client';
import React from 'react'

type typeProps = 'primary' | 'secondary' | 'primarySmall'

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  variant?: typeProps;
  onClick?: () => any;
  children?: React.ReactNode;
}

export const Button = ({ variant = 'primary', onClick, children, disabled }: ButtonProps) => {

  const buttonClasses: { [key in typeProps]: string } = {
    primary: 'bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600',
    secondary: 'bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400',
    primarySmall: 'bg-blue-500 text-white px-2 py-1 text-sm rounded-md hover:bg-blue-600'
  }

  return (
    <button disabled={disabled} onClick={onClick} className={buttonClasses[variant]}>
      {children}
    </button>
  )
}
