'use client'

import { useEffect } from 'react'
import { useTitle } from '../TitleContext'
import ExhibitionLayout from '../ui/ExhibitionLayout'

export default function Collage() {
  const { setTitle } = useTitle()

  const exhibitionInfo = {
    title: 'Works and Exhibitions during University',
    time: '2024 - 2025',
    location: 'OCAD University, Toronto',
    pdfUrl: 'pdfs/anxious_yet_familiar_world.pdf'
  }
  
  const exhibitionImages = [
    {
      imagePath: '2025/_DSC5722.webp',
      alt: 'anxious yet familiar world,',
      gallery: 'Ignite Gallery',
      year: '2025',
      width: 1000,
      height: 1000
    },
    {
      imagePath: '2025/_DSC5712.webp',
      alt: 'anxious yet familiar world,',
      gallery: 'Ignite Gallery',
      year: '2025',
      width: 1000,
      height: 1000
    },
    {
      imagePath: '2025/_DSC5716.webp',
      alt: 'anxious yet familiar world,',
      gallery: 'Ignite Gallery',
      year: '2025',
      width: 1000,
      height: 1000
    },
    {
      imagePath: 'works/group_1.webp',
      alt: 'School works collection,',
      year: '2024',
      gallery: 'Open Space',
      width: 1000,
      height: 1000
    },
    {
      imagePath: 'works/2.webp',
      alt: 'School works collection,',
      year: '2024',
      gallery: 'Open Space',
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
      <p>
      The major exhibition I participated in while at university was Anxious Yet Familiar World, which featured the work of five Toronto artists.
      Anxious Yet Familiar explores the hidden layers of our surroundings—both human and non-human—revealing the interplay between discomfort and familiarity in everyday life. 
      Through diverse materials and concepts, the exhibition examines themes of memory, decay, climate change, and transformation, creating an environment where pleasure and tension coexist. 
      It invites viewers to embrace overlooked moments, reconsider their engagement with the world, and find beauty in the subtle complexities of daily life.
      </p>
      <br />
      <p>
      Additionally, I have independently organized exhibitions featuring my paintings, sculptures, and installations, showcasing works created both in my courses and through personal exploration. 
      My practice primarily focuses on capturing subtle nuances and psychological experiences in everyday life, emphasizing the impact of these emotional and cognitive processes through experimental approaches to materials and presentation techniques.
      </p>
    </div>
  )

  return (
    <ExhibitionLayout 
      info={exhibitionInfo}
      images={exhibitionImages}
      text={textContent}
    />
  )
}