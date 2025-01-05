'use client'

import { useState, useEffect } from 'react';

const RotativeText = () => {
  const texts = ['Amigo', 'Amor', 'Familiar', 'Pet']; // Opções de textos
  const [currentText, setCurrentText] = useState(texts[0]); // Texto inicial

  // Função para alterar o texto
  const changeText = () => {
    const currentIndex = texts.indexOf(currentText);
    const nextIndex = (currentIndex + 1) % texts.length; // Ciclo entre os textos
    setCurrentText(texts[nextIndex]);
  };

  // Configuração do intervalo para mudar o texto
  useEffect(() => {
    const intervalId = setInterval(changeText, 2000); // Altera a cada 2 segundos

    // Limpa o intervalo quando o componente for desmontado
    return () => clearInterval(intervalId);
  }, [currentText]);

  return <span className='text-5xl text-orange-500 font-black'>{currentText}</span>;
};

export default RotativeText;
