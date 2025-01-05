'use client'

import Button from "@/components/button"
import Input from "@/components/input"
import TextArea from "@/components/text-area"
import { useRef, useState } from "react"

export default function Presentear() {
  const [option, setOption] = useState<string>('basic')
  const [files, setFiles] = useState<FileList | null>(null)
  const [music, setMusic] = useState<string | null>(null)
  const [names, setNames] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)
  const [url, setUrl] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFiles(null)
    const files = event.target.files

    if (files) {
      if(files.length > (option === 'premium' ? 5 : 3)) {
        alert('Você ultrapassou o limite de arquivos')
        return
      }
      
      setFiles(files)
    }
  }
  
  function slugify(text: string) {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '')             // Trim - from end of text
  }

  function handleNames(event: React.ChangeEvent<HTMLInputElement>) {
    console.log({
      music,
      names,
      message,
      files
    })
    setNames(event.target.value)
    setUrl(slugify(event.target.value))
  }

  return (
    <>
      <header className='p-4'>
        <h1 className='text-3xl text-orange-500 font-black'>Presenteando</h1>
      </header>
      <main className='h-auto min-h-screen flex flex-col xl:flex-row px-8 lg:px-16 gap-16'>
        <div className="w-full xl:w-1/2">
          <div className='mt-16'>
            <h2 className='font-bold text-4xl'>Quase pronto!</h2>
            <p className='text-xl'>Preencha os dados para garantir sua página.</p>
          </div>
          <div className="mt-8">
            <div className="p-4 border border-orange-500 rounded flex gap-2 lg:w-[34rem] justify-center items-center mb-8">
              <div className={`px-4 py-2 border border-orange-500 rounded cursor-pointer ${option === 'basic' ? 'bg-orange-500 text-white' : 'text-orange-500'}`} onClick={() => setOption('basic')}>
                3 fotos e sem música - R$20,00
              </div>
              <div className={`px-4 py-2 border border-orange-500 rounded cursor-pointer ${option === 'premium' ? 'bg-orange-500 text-white' : 'text-orange-500'}`} onClick={() => setOption('premium')}>
                5 fotos e música - R$30,00
              </div>
            </div>
            <div className="flex flex-col gap-4">            
              <Input onChange={handleNames} label="Nomes" id="name" type="text" placeholder="Guilherme e Aline (não use emoji)"/>
              <TextArea onChange={(e) => setMessage(e.target.value)} label="Mensagem" id="message" placeholder="Escreva aqui sua mensagem, capricha! 🧡"/>
              <input ref={fileInputRef} onChange={(e) => handleFileChange(e)} type="file" name="file" id="file" className="hidden" multiple accept="image/*"/>
              <button 
                className="border border-orange-500 rounded p-2 focus:outline-none text-orange-500"
                onClick={() => fileInputRef.current?.click()}
              >
                Adicionar fotos (Máximo: {option === "premium" ? 5 : 3})
              </button>
              {option === 'premium' && <Input onChange={(e) => setMusic(e.target.value)} label="Música" type="url" placeholder="Link da música no Youtube" id="music"/>}
              <Button additionalClasses='mt-8' size='lg'>
                Finalizar
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-1/2 mt-16">
          <span className="font-bold text-4xl">Como vai ficar! 👇</span>
          <div className="border border-orange-500 rounded p-4 mt-[3.6rem] h-full w-full lg:w-2/3 lg:h-3/4 overflow-y-scroll">
            <div className="flex flex-row gap-4">
              <div className="size-4 bg-rose-500 rounded-full"/>
              <div className="size-4 bg-yellow-500 rounded-full"/>
              <div className="size-4 bg-green-500 rounded-full"/>
            </div>
            <div className="flex flex-col items-center h-full">              
                <div className="flex mt-4">
                  <div className="w-[22rem] text-nowrap border rounded p-2 border-orange-500 overflow-x-scroll">
                    www.presenteando.com.br/{url}
                  </div>
                </div>
                <div className="w-2/3 h-3/4 border border-orange-500 rounded mt-4 flex justify-center items-center">
                  Fotos
                </div>
                <div className="flex flex-col gap-4 mt-4 items-center">
                  <span className="font-bold text-2xl text-center">{names}</span>
                  <p className="text-center">{message}</p>
                </div>
              </div>
            </div>
        </div>
      </main>
      <footer className='p-4 bg-orange-500 text-white'>
        <p className='text-center text-lg'>Presenteando © 2025</p>
        <p className='text-center text-lg'>Feito por Guilherme Alves Profirio</p>
        <p className='text-center text-lg'>Contato:
          <a href="mailto:iamalves.jpg@gmail.com" className="text-white ml-2">
            iamalves.jpg@gmail.com
          </a>
        </p>
      </footer>
    </>
  )
}
