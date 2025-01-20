'use client'

import Image from 'next/image'
import { enlargeImage } from '@/app/util'

type ExhibitionImage = {
  imagePath: string
  alt: string
  gallery?: string
  year: string
  width: number
  height: number
}

interface ExhibitionLayoutProps {
  images: ExhibitionImage[]
  text: React.ReactNode
}

export default function ExhibitionLayout({ images, text }: ExhibitionLayoutProps) {
  const handleScroll = (e: React.WheelEvent) => {
    e.stopPropagation()
  }

  const handleImageClick = (e: React.MouseEvent, index: number) => {
    const imgElement = e.currentTarget.querySelector('img')
    if (imgElement) {
      enlargeImage(imgElement)
    }
  }

  return (
    <main 
      className="flex gap-4"
      style={{
        height: 'calc(88vh - var(--bar-clearance))',
        marginTop: 'calc(var(--bar-clearance) + 0.2rem)',
        marginLeft: '8%',
        marginRight: '4%',
        fontFamily: 'Times New Roman, serif',
        fontSize: '0.9rem',
        lineHeight: '1.35rem',
        transition: 'background-color 0.1s cubic-bezier(0, 0, 0.2, 1), color 0.1s cubic-bezier(0, 0, 0.2, 1)'
      }}
    >
      <section 
        className="w-[57%] overflow-y-scroll pr-8"
        style={{ 
          fontStyle: 'var(--font-style-normal)',
          color: 'var(--color-text)'
        }}
        onWheel={handleScroll}
      >
        <div className="space-y-4 max-w-[100%]">
          {text}
        </div>
      </section>

      <section 
        className="w-[43%] overflow-y-auto pl-4 pr-2 transition-all duration-300 ease-in-out focus-section"
        style={{ 
          fontStyle: 'var(--font-style-normal)',
          color: 'var(--color-text)'
        }}
        onWheel={handleScroll}
      >
        {images.map((image, index) => (
          <figure 
            key={index} 
            className="mb-12 last:mb-8"
            style={{
              transition: 'opacity 0.3s cubic-bezier(0, 0, 0.2, 1)'
            }}
          >
            <div 
              className="relative flex justify-center cursor-pointer" 
              onClick={(e) => handleImageClick(e, index)}
              style={{
                transition: 'transform 0.2s ease-in-out'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              <Image
                src={`/assets/${image.imagePath}`}
                alt={image.alt}
                title={`${image.alt}, ${image.gallery}, ${image.year}`}
                width={image.width}
                height={image.height}
                className="max-w-[100%] h-auto object-contain"
                priority={index < 2}
              />
            </div>
            <figcaption 
              className="mt-3 text-center"
              style={{
                color: 'var(--color-deemphasized-text)',
                fontSize: '0.875rem'
              }}
            >
              <i>{image.alt}</i> ({image.gallery}, {image.year})
            </figcaption>
          </figure>
        ))}
      </section>
    </main>
  )
}