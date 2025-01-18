'use client'

import Image from 'next/image'
import { enlargeImage } from '@/app/util'

type ExhibitionImage = {
  imagePath: string
  alt: string
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

  const handleImageClick = (e: React.MouseEvent) => {
    const imgElement = e.currentTarget.querySelector('img')
    if (imgElement) {
      enlargeImage(imgElement)
    }
  }

  return (
    <main 
      className="flex gap-1 px-[2%]"
      style={{
        height: 'calc(88vh - var(--bar-clearance))',
        marginTop: 'calc(var(--bar-clearance) + 0.2rem)',
        fontFamily: 'Times New Roman, serif',
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
        transition: 'background-color 0.1s cubic-bezier(0, 0, 0.2, 1), color 0.1s cubic-bezier(0, 0, 0.2, 1)'
      }}
    >
      <section 
        className="w-[61%] overflow-y-auto px-4"
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
              onClick={handleImageClick}
            >
              <Image
                src={`/assets/${image.imagePath}`}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="max-w-[85%] h-auto object-contain"
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
              {image.alt} ({image.year})
            </figcaption>
          </figure>
        ))}
      </section>

      <section 
        className="w-[39%] overflow-y-scroll px-right-6 px-left-0"
        style={{ 
          fontStyle: 'var(--font-style-normal)',
          color: 'var(--color-text)'
        }}
        onWheel={handleScroll}
      >
        <div className="space-y-4">
          {text}
        </div>
      </section>
    </main>
  )
}