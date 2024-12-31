import Image from 'next/image';

interface ImageDecoratorProps {
  src: string;
  alt: string;
  size: number;
  backgroundImg?: string;
  backgroundSize?: number;
}


function ImageDecorator({ src, alt, size, backgroundImg, backgroundSize}: ImageDecoratorProps) {
  return (
    <div
      className={`relative flex justify-center items-center bg-[var(--background)] rounded-full ${backgroundImg ? 'w-full' : ''}`}
      >

      {backgroundImg &&
        <Image
          src={backgroundImg} 
          className={`absolute z-0 rounded-full opacity-30`}
          width={backgroundSize || size}
          height={backgroundSize || size}
          alt={alt}
        />
      }

      <Image
        src={src} 
        className={"relative z-10"}
        width={size}
        height={size}
        alt={alt}
        unoptimized
      />
    </div>
  );
}

export default ImageDecorator;