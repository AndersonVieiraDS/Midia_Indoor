import React, { useState, useEffect } from 'react';
import imagem1 from '../../imagens/testeCarousel/Teste1.png';
import imagem2 from '../../imagens/testeCarousel/Teste2.png';
import imagem3 from '../../imagens/testeCarousel/Teste3.png';
import imagem4 from '../../imagens/testeCarousel/Teste4.png';
import imagem5 from '../../imagens/testeCarousel/Teste5.png';
import './carousel.css';

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    imagem1,
    imagem2,
    imagem3,
    imagem4,
    imagem5,
    // Adicione mais caminhos de imagens conforme necessário
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      const nextImage = (currentImage + 1) % images.length;
      setCurrentImage(nextImage);
    }, 3000); // Altera a cada 3 segundos (3000ms)

    return () => clearInterval(timer);
  }, [currentImage, images.length]);

  return (
    <div className="carousel">
      <div className="carousel-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Imagem ${index + 1}`}
            style={{ display: index === currentImage ? 'block' : 'none' }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;