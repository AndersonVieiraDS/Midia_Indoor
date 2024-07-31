import React, { useState, useEffect, useRef } from 'react';
import { loadMedia } from '../Carousel/mediaLoader'; // Ajuste o caminho conforme necessário
import './carousel.css';

const Carousel = () => {
  const [media, setMedia] = useState([]);
  const [currentMedia, setCurrentMedia] = useState(0);
  const videoRef = useRef([]);

  useEffect(() => {
    const loadedMedia = loadMedia();
    setMedia(loadedMedia);
  }, []);

  useEffect(() => {
    if (media.length > 0) {
      const handleMediaChange = () => {
        const nextMedia = (currentMedia + 1) % media.length;
        setCurrentMedia(nextMedia);
      };

      if (media[currentMedia].default.endsWith('.mp4') || media[currentMedia].default.endsWith('.webm')) {
        const video = videoRef.current[currentMedia];
        if (video) {
          video.onended = handleMediaChange;
          video.play().catch(error => {
            console.error('Erro ao tentar reproduzir o vídeo:', error);
          });
        }
      } else {
        const timer = setInterval(() => {
          handleMediaChange();
        }, 3000);

        return () => clearInterval(timer);
      }
    }
  }, [currentMedia, media]);

  useEffect(() => {
    // Pausa todos os vídeos não ativos e redefine o tempo
    videoRef.current.forEach((video, index) => {
      if (video && index !== currentMedia) {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [currentMedia]);

  if (media.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="carousel">
      <div className="carousel-media">
        {media.map((item, index) => {
          const mediaUrl = item.default;
          if (mediaUrl.endsWith('.mp4') || mediaUrl.endsWith('.webm')) {
            return (
              <video
                key={index}
                ref={(el) => videoRef.current[index] = el}
                src={mediaUrl}
                style={{ display: index === currentMedia ? 'block' : 'none' }}
                controls
                autoPlay
              />
            );
          } else {
            return (
              <img
                key={index}
                src={mediaUrl}
                alt={`Media ${index + 1}`}
                style={{ display: index === currentMedia ? 'block' : 'none' }}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Carousel;
