export const loadMedia = () => {
  const images = import.meta.glob('../../imagens/testeCarousel/*.(png|jpe?g|svg)', { eager: true });
  const videos = import.meta.glob('../../imagens/testeCarousel/*.(mp4|webm)', { eager: true });

  const media = [...Object.values(images), ...Object.values(videos)];
  return media;
};

  