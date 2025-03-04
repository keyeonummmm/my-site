'use client'

import Link from 'next/link'
import Image from 'next/image'
import { worksList } from './works'

const handleWheel = (e: React.WheelEvent) => {
  e.stopPropagation();
};

export default function Works() {
  return (
    <main className="works-container" onWheel={handleWheel}>
      <div className="works-grid">
        {worksList.map((work, index) => (
          <Link 
            href={work.link} 
            key={index}
            className="work-item"
          >
            <Image
              src={work.imagePath}
              alt={work.title}
              width={200}
              height={200}
              className="work-image"
            />
          </Link>
        ))}
      </div>
    </main>
  )
}
