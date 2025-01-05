import React, { TextareaHTMLAttributes } from 'react'

type InputProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
}

export default function TextArea({ label, ...props }: InputProps) {
  return (
    <div className='flex flex-col gap-2'>
      <label htmlFor={props.id} className='text-lg'>{label}</label>
      <textarea {...props} className='border border-orange-500 rounded p-2 focus:outline-none'/>
    </div>
  )
}
