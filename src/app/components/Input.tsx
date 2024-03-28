import React, { HTMLInputTypeAttribute } from 'react'

import {
  FieldValues,
  UseFormRegister
} from "react-hook-form";



interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
  id: string;
  type?: HTMLInputTypeAttribute,
  isTextArea?: boolean;
  placeholder?: string;
  inputAlign?: 'inline' | 'top';
  register: UseFormRegister<FieldValues>; // declare register props
}

const Input = ({
  label: LabelText,
  id,
  type = 'text',
  placeholder,
  register,
  isTextArea = false,
  ...props
}: InputProps) => {

  const LabelComp = <label className="block text-gray-700 text-sm font-bold" htmlFor={id}>
    {LabelText}
  </label>

  let InputComponent = <input

    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id={id} type={type} placeholder={placeholder}
    {...register(id)}
    {...props}>
  </input>

  if (isTextArea) {
    InputComponent = <textarea
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id={id} placeholder={placeholder}
      {...register(id)} />
  }

  return (
    <div className='md:flex md:items-center mb-6 md:flex-row'>
      <div className={"md:w-1/3"}>
        {LabelComp}
      </div>
      <div className={"md:w-2/3"}>
        {InputComponent}
      </div>
    </div>
  )
}

export default Input;