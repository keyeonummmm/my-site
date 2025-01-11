'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
  imageSize?: ImageSize // Optional property
}

// Sample projects - you'll want to replace these with your actual projects
const projects: Project[] = [
  {
    id: '0.0.0',
    name: 'Information',
    year: '&.& - &.&',
    imagePath: '/assets/2024/info.webp',
    path: '/information',
    imageSize: {
      maxWidth: '70vw',
      maxHeight: '70vh'
    }
  },
  {
    id: '0.0.1',
    name: 'Player\'s Handbook',
    year: '2024 - 2025',
    imagePath: '/assets/2024/book cover front_v3.webp',
    path: '/thesis'
  }
]

export default function Home() {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null)

  return (
    <div className="page-container">
      <div className="project-list">
        {projects.map((project) => (
          <Link href={project.path} key={project.id}>
          <div 
            key={project.id} 
            className="project-row"
            onMouseEnter={() => setHoveredImage(project.imagePath)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <span className="project-text project-id">
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
              maxHeight: projects.find(p => p.imagePath === hoveredImage)?.imageSize?.maxHeight || '80vh'
            }}
            priority
            onError={(e) => {
              console.error('Error loading image:', hoveredImage);
              setHoveredImage(null);
            }}
          />
        </div>
      )}
    </div>
  )
}