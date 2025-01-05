'use client'

import React, { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Como posso personalizar meu presente?",
      answer:
        "Você pode adicionar mensagens personalizadas, incluir fotos e uma música de fundo à sua página.",
    },
    {
      question: "Como recebo o presente após a compra?",
      answer:
        "Após o pagamento, você receberá um e-mail com a URL única da sua página de presente e um QR code para acessar a página a qualquer momento.",
    },
    {
      question: "Como posso adicionar a música?",
      answer:
        "Ao escolher o presente premium, você terá a opção de adicionar uma música de fundo à sua página de presente. Basta fazer o upload da música desejada durante o processo de personalização.",
    },
    {
      question: "Quais formas de pagamento são aceitas?",
      answer:
        "Atualmente, aceitamos pagamentos somente via Pix. Em breve, teremos mais opções de pagamento disponíveis.",
    },
    {
      question: "E se eu não gostar do presente depois de feito?",
      answer:
        "Como o presente é personalizado, não podemos fazer reembolsos, mas garantimos que você pode revisar e ajustar sua personalização antes de finalizar a compra.",
    },
  ];

  return (
    <div className="p-8 w-full lg:w-2/3 rounded border border-white mt-16 flex flex-col gap-8">
    {faqs.map((faq, index) => (
      <div
        key={index}
        className="border border-white rounded p-4 transition-all"
      >
        <div
          className="flex gap-4 cursor-pointer items-end"
          onClick={() => toggleAnswer(index)}
        >
          <span className="font-bold text-3xl">{index + 1}.</span>
          <span className="text-xl font-bold">{faq.question}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
            className={`feather feather-chevron-down ${
              openIndex === index ? "rotate-180" : ""
            } transition-transform duration-300`}
          >
            <path d="M6 9l6 6 6-6"></path>
          </svg>
        </div>
  
        {/* Transição suave para a resposta */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            openIndex === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {openIndex === index && (
            <p className="text-lg mt-4">{faq.answer}</p>
          )}
        </div>
      </div>
    ))}
  </div>
  
  )
}
