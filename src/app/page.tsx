'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Project data structure
type Project = {
  id: string
  name: string
  year: string
  imagePath: string
}

// Sample projects - you'll want to replace these with your actual projects
const projects: Project[] = [
  {
    id: '001',
    name: 'Introduction',
    year: '2024',
    imagePath: '/assets/2024/project-one.jpg'
  },
  {
    id: '002',
    name: 'Thesis Project',
    year: '2025',
    imagePath: '/assets/2025/thesis.jpg'
  }
]

export default function Home() {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null)

  return (
    <div className="page-container">
      <div className="project-list">
        <Link href="/introduction">
        {projects.map((project) => (
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
        ))}
        </Link>
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
            style={{ width: 'auto', height: 'auto' }}
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