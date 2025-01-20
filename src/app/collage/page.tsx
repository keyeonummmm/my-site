'use client'

import { useEffect } from 'react'
import { useTitle } from '../TitleContext'
import ExhibitionLayout from '../ui/ExhibitionLayout'

export default function Collage() {
  const { setTitle } = useTitle()
  
  const exhibitionImages = [
    {
      imagePath: '2025/_DSC5722.webp',
      alt: 'Collage Artwork 3',
      year: '2025',
      width: 1000,
      height: 1000
    },
    {
      imagePath: '2025/_DSC5712.webp',
      alt: 'Collage Artwork 4',
      year: '2025',
      width: 1000,
      height: 1000
    },
    {
      imagePath: '2025/_DSC5716.webp',
      alt: 'Collage Artwork 4',
      year: '2025',
      width: 1000,
      height: 1000
    },
    {
      imagePath: 'works/group_1.webp',
      alt: 'Collage Artwork 1',
      year: '2024',
      width: 1000,
      height: 1000
    },
    {
      imagePath: 'works/2.webp',
      alt: 'Collage Artwork 2',
      year: '2024',
      width: 1000,
      height: 1000
    }
  ]

  useEffect(() => {
    setTitle('Collage exhibitions')
    return () => setTitle('')
  }, [setTitle])

  const textContent = (
    <div>
      <h1>Collage Exhibitions</h1>
      
      <p>
        I am an artist, programmer and content creator currently living, studying 
        and working in Toronto.
      </p>
      
      <h2>Artistic Practice</h2>
      <p>
        I am focusing on creating installations and mix-medium works, simultaneously 
        I do paintings, photographs and videos. I design intuitive user interfaces, 
        work with databases, and experiment with artificial intelligence techniques.
      </p>
      
      <h2>Philosophy</h2>
      <p>
        I am fascinated by the artistic and at the same time by the precise and 
        well-designed systems. Whether it is art, content creation or program 
        development, they have a mutually reinforcing and complementary relationship.
      </p>
      
      <h2>Approach</h2>
      <p>
        Artistic creation provides intuitive and fascinating ideas, a momentary 
        encounter and exchange of idea, thoughts and culture. Content creation is 
        the carrier of continuous ideas, it is a combination of knowledge, 
        information, and taste.
      </p>
      
      <p>
        Software engineering provides tangible solutions to practical problems, 
        it satisfies a need like any other product or service.
      </p>
    </div>
  )

  return (
    <ExhibitionLayout 
      images={exhibitionImages}
      text={textContent}
    />
  )
}