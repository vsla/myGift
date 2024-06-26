import React from "react";

import { UseFormRegister } from "react-hook-form";

type InputProps = {
  label: string;
  id: string;
  options: string[];
  inputAlign?: "inline" | "top";
  required?: boolean;
  disabled?: boolean;
  register: UseFormRegister<any>; // declare register props
};

export const Select = ({
  label: LabelText,
  id,
  options,
  register,
  disabled = false,
  required = false
}: InputProps) => {
  return (
    <div className="md:flex md:items-center mb-6 md:flex-row">
      <div className={"md:w-1/4"}>
        <label
          className="block tracking-wide text-gray-700 text-xs font-bold"
          htmlFor="grid-state"
        >
          {LabelText}
        </label>
      </div>
      <div className={"md:w-3/4"}>
        <div className="relative">
          <select
            className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
            required={required}
            disabled={disabled}
            {...register(id)}
          >
            {options.map((content) => (
              <option key={content}>{content}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
