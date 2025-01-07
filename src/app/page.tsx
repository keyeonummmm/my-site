'use client'

import { useState } from 'react'
import Image from 'next/image'

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
    name: 'Project One',
    year: '2024',
    imagePath: '/assets/images/2024/project-one.jpg'
  },
  // ... add more projects
]

export default function Home() {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null)

  return (
    <div className="min-h-screen p-10 pt-15">
      <div className="space-y-6">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="relative flex items-center group cursor-pointer"
            onMouseEnter={() => setHoveredImage(project.imagePath)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <span className="absolute left-14 group-hover:italic">
              {project.id}
            </span>
            <span className="ml-auto mr-[30%] group-hover:italic">
              {project.name}
            </span>
            <span className="absolute right-16 group-hover:italic">
              {project.year}
            </span>
          </div>
        ))}
      </div>

      {/* Image Preview */}
      {hoveredImage && (
        <div className="fixed inset-0 flex items-center justify-center z-10 pointer-events-none">
          <Image
            src={hoveredImage}
            alt="Project Preview"
            width={800}
            height={600}
            className="max-w-[80vw] max-h-[80vh] object-contain"
          />
        </div>
      )}
    </div>
  )
}