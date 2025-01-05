import { ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  additionalClasses?: string;
}

export default function Button({ additionalClasses, size="md", variant = 'primary', ...props }: ButtonProps) {
  function variants(type: typeof variant) {
    switch (type) {
      case 'primary':
        return 'bg-orange-500 text-white'
      case 'secondary':
        return 'bg-gray-500 text-white'
      case 'danger':
        return 'bg-rose-500 text-white'
    }
  }

  function sizes(type: typeof size) {
    switch (type) {
      case 'sm':
        return 'text-md px-2 py-1'
      case 'md':
        return 'text-lg px-4 py-2'
      case 'lg':
        return 'text-xl px-6 py-3'
    }
  }


  return (
    <button 
      className={`font-bold rounded ${sizes(size)} ${variants(variant)} ${additionalClasses}`}
      {...props}
    >
      {props.children}
    </button>
  )
}
