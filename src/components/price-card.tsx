import { CheckCircle2Icon, XCircleIcon } from 'lucide-react'
import React from 'react'
import Button from './button'

export default function PriceCard() {
  return (
    <div className='flex flex-col lg:flex-row gap-16 justify-center lg:justify-evenly mt-20 lg:mt-32'>
      <div className='lg:w-[24rem] flex flex-col rounded bg-white shadow-lg border border-orange-500 hover:scale-105 transition-all'>
        <div className='p-4 bg-orange-500 text-white rounded'>
          <h3 className='text-3xl font-bold text-white/80 mt-10'>Básico</h3>
          <p className='text-5xl font-black text-white'>R$20,00</p>
        </div>
        <div className='px-4 py-8'>
          <ul className='flex flex-col gap-8'>
            <li className='text-2xl font-bold flex items-end gap-2'><CheckCircle2Icon className='size-8 text-orange-500'/> 3 Fotos.</li>
            <li className='text-2xl font-bold flex items-end gap-2'><CheckCircle2Icon className='size-8 text-orange-500'/> Mensagem Customizada.</li>
            <li className='text-2xl font-bold flex items-end gap-2'><XCircleIcon className='size-8 text-orange-500'/> Sem música</li>
          </ul>
        </div>
        <div className='w-full flex justify-center pb-8'>
          <Button>
            Quero presentear!
          </Button>
        </div>
      </div>
      <div className='lg:w-[24rem] flex flex-col rounded bg-white shadow-lg border border-orange-500 hover:scale-105 transition-all'>
        <div className='p-4 bg-orange-500 text-white rounded'>
          <div className='p-4 bg-orange-400 text-white rounded font-bold -mt-10 flex justify-center items-center w-48 text-xl'>
            Melhor escolha!
          </div>
          <h3 className='text-3xl font-bold text-white/80 mt-4'>Premium</h3>
          <p className='text-5xl font-black text-white'>R$39,90</p>
        </div>
        <div className='px-4 py-8'>
          <ul className='flex flex-col gap-8'>
            <li className='text-2xl font-bold flex items-end gap-2'><CheckCircle2Icon className='size-8 text-orange-500'/> 5 Fotos.</li>
            <li className='text-2xl font-bold flex items-end gap-2'><CheckCircle2Icon className='size-8 text-orange-500'/> Mensagem Customizada.</li>
            <li className='text-2xl font-bold flex items-end gap-2'><CheckCircle2Icon className='size-8 text-orange-500'/> Com música</li>
          </ul>
        </div>
        <div className='w-full flex justify-center pb-8'>
          <Button>
            Quero presentear!
          </Button>
        </div>
      </div>
    </div>
  )
}
