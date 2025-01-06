'use client'

import Button from '@/components/button'
import FAQ from '@/components/faq'
import PriceCard from '@/components/price-card'
import RotativeText from '@/components/rotative-text'
import { useRouter } from 'next/navigation'
import React from 'react'


export default function Home() {
  const router = useRouter()

  return (
    <>
      <header className='p-4'>
        <h1 className='text-3xl text-orange-500 font-black'>Presenteando</h1>
      </header>
      <main className='h-auto min-h-screen'>
        <section className='px-16 mt-64 flex items-center h-2/3 lg:flex-row flex-col'>
          <div className='w-full lg:w-1/2'>
            <h1 className='text-5xl text-black font-bold'>
              Presenteie o seu <RotativeText/>, <br/> com um presente especial! 🎁
            </h1>
            <p className='text-2xl text-gray-900 mt-4'>
              Escolher o presente perfeito nunca foi tão fácil — e sem aquela sensação de &quot;esqueci da data&quot;. Navegue por nossas opções e encontre algo tão incrível que até você vai querer um desses para si mesmo! 🎁
            </p>
            <Button 
              onClick={() => router.push('/presentear')}
              additionalClasses='mt-8' 
              size='lg'
            >
              Surpreenda alguém!
            </Button>
          </div>
        </section>
        <section className='px-16 py-16 mt-64 flex h-2/3 flex-col bg-orange-500 text-white'>
          <h2 className='font-black text-4xl'>Como funciona?</h2>
          <div className='flex flex-row gap-4 mt-8 items-end'>
            <span className='font-bold text-5xl'>1.</span>
            <p className='text-xl'>Escolha o presente perfeito para a pessoa especial.</p>
          </div>
          <div className='flex flex-row gap-4 mt-8 items-end'>
            <span className='font-bold text-5xl'>2.</span>
            <p className='text-xl'>Personalize o presente com mensagens, fotos e música</p>
          </div>
          <div className='flex flex-row gap-4 mt-8 items-end'>
            <span className='font-bold text-5xl'>3.</span>
            <p className='text-xl'>Após efetuar o pagamento, nós cuidamos do resto! Você receberá o link em seu email.</p>
          </div>
          <div className='flex flex-row gap-4 mt-8 items-end'>
            <span className='font-bold text-5xl'>4.</span>
            <p className='text-xl'>A pessoa especial receberá o presente e poderá curtir o momento!</p>
          </div>
        </section>
        <section className='px-16 py-16 flex h-2/3 flex-col'>
          <h2 className='font-black text-4xl'>Preços</h2>
          <p className='text-2xl mt-4'>Confira nossos planos e escolha o que melhor se encaixa para você!</p>
          <PriceCard/>
        </section>
        <section className='px-16 py-16 flex h-2/3 flex-col bg-orange-500 text-white'>
          <h2 className='font-black text-4xl'>Dúvidas?</h2>
          <p className='text-2xl mt-4'>Confira as perguntas mais frequentes e tire suas dúvidas!</p>
          <FAQ/>
        </section>
        <section className='px-16 py-16 flex h-2/3 flex-col items-center'>
        <div className='border border-orange-500 rounded p-16 flex flex-col items-center'>
          <h2 className='font-black text-orange-500 text-5xl'>Vamos presentear alguém!</h2>
          <p className='text-2xl my-4'>Demora menos de 5 minutos para criar um presente personalizado! </p>
          <Button
            onClick={() => router.push('/presentear')}
            additionalClasses='mt-8' 
            size='lg'
          >
            Presenteie alguém!
          </Button>
        </div>
        </section>
      </main>
      <footer className='p-4 bg-orange-500 text-white'>
        <p className='text-center text-lg'>Presenteando © 2025</p>
        <p className='text-center text-lg'>Feito por Guilherme Alves Profirio</p>
        <p className='text-center text-lg'>Contato: iamalves.jpg@gmail.com</p>
      </footer>
    </>
  )
}
