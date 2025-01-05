import React, { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
}

export default function Input({ label, ...props }: InputProps) {
  return (
    <div className='flex flex-col gap-2'>
      <label htmlFor={props.id} className='text-lg'>{label}</label>
      <input {...props} className='border border-orange-500 rounded p-2 focus:outline-none'/>
    </div>
  )
}
