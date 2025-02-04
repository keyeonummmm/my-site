'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { officeTimesRound } from './ui/fonts'

// Project data structure
type ImageSize = {
  maxWidth: string
  maxHeight: string
}

type Project = {
  id: string
  name: string
  year: string
  imagePath: string
  path: string
  imageSize?: ImageSize
}

const projects: Project[] = [
  {
    id: '000',
    name: 'Information',
    year: '&.& - &.&',
    imagePath: '/assets/2024/info.webp',
    path: '/information',
    imageSize: {
      maxWidth: '70vw',
      maxHeight: '70vh',
    }
  },
  {
    id: '001',
    name: 'Collage exhibitions',
    year: '2023 - 2024',
    imagePath: '/assets/2025/_DSC5711.webp',
    path: '/collage',
    imageSize: {
      maxWidth: '70vw',
      maxHeight: '70vh',
    }
  },
  {
    id: '002',
    name: 'Player\'s Handbook',
    year: '2024 - 2025',
    imagePath: '/assets/2024/book cover front_v3.webp',
    path: '/thesis',
    imageSize: {
      maxWidth: '52vw',
      maxHeight: '52vh',
    }
  }
]

export default function Home() {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null)

  return (
    <div className="page-container" >
        <div className="project-list">
        {projects.map((project) => (
          <Link href={project.path} key={project.id}>
            <div 
              className="project-row"
              onMouseEnter={() => setHoveredImage(project.imagePath)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <span className={`project-text project-id ${officeTimesRound.className}`}>
                {project.id}
              </span>
              <span className="project-text project-name">
                {project.name}
              </span>
              <span className="project-text project-year">
                {project.year}
                </span>
              </div>
            </Link>
          ))}
      </div>
      

      {hoveredImage && (
        <div className="image-preview-container">
          <div className="image-preview-wrapper">
            <Image
              src={hoveredImage}
              alt="Project Preview"
              width={0}
              height={0}
              sizes="80vw"
              className="preview-image"
              style={{ 
                width: 'auto', 
                height: 'auto',
                maxWidth: projects.find(p => p.imagePath === hoveredImage)?.imageSize?.maxWidth || '80vw',
                maxHeight: projects.find(p => p.imagePath === hoveredImage)?.imageSize?.maxHeight || '80vh',
              }}
              priority
              onError={(e) => {
                console.error('Error loading image:', hoveredImage);
                setHoveredImage(null);
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}