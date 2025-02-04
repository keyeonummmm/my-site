'use client'

import Image from 'next/image'
import { enlargeImage } from '@/app/util'
import { officeTimesRound } from '@/app/ui/fonts'

type ExhibitionImage = {
  imagePath: string
  alt: string
  gallery?: string
  year: string
  width: number
  height: number
}

type ExhibitionInfo = {
  title: string
  time: string
  location?: string
  curator?: string
  pdfUrl?: string
}

interface ExhibitionLayoutProps {
  images: ExhibitionImage[]
  text: React.ReactNode
  info: ExhibitionInfo
}

export default function ExhibitionLayout({ images, text, info }: ExhibitionLayoutProps) {
  const handleScroll = (e: React.WheelEvent) => {
    e.preventDefault()
    const container = e.currentTarget
    container.scrollTop += e.deltaY
  }

  const handleImageClick = (e: React.MouseEvent) => {
    const imgElement = e.currentTarget.querySelector('img')
    if (imgElement) {
      enlargeImage(imgElement)
    }
  }

  return (
    <main className={`${officeTimesRound.variable} exhibition-layout`}>
      <section 
        className="exhibition-text"
        onWheel={handleScroll}
      >
        <div className="exhibition-info">
          <h1>{info.title}</h1>
          <p>{info.time}</p>
          {info.location && <p>{info.location}</p>}
          {info.curator && <p>Curator: {info.curator}</p>}
          {info.pdfUrl && (
            <a 
              href={`/${info.pdfUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="pdf-link underline"
            >
              Exhibition paper ↗
            </a>
          )}
          <div className="info-underline"></div>
        </div>
        <div className="text-content">
          {text}
        </div>
      </section>

      <section 
        className="exhibition-images"
        onWheel={handleScroll}
      >
        {images.map((image, index) => (
          <figure key={index} className="image-figure">
            <div 
              className="image-container"
              onClick={handleImageClick}
            >
              <Image
                src={`/assets/${image.imagePath}`}
                alt={image.alt}
                title={`${image.alt}, ${image.gallery}, ${image.year}`}
                width={image.width}
                height={image.height}
                className="exhibition-image"
                priority={index < 2}
              />
            </div>
            <figcaption className="image-caption">
              <i>{image.alt}</i> ({image.gallery}, {image.year})
            </figcaption>
          </figure>
        ))}
      </section>
    </main>
  )
}