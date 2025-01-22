'use client'

import Image from 'next/image'
import { enlargeImage } from '@/app/util'
import { officeTimesRound } from '@/app/ui/fonts'
import { useRef } from 'react'

interface WorkDetailProps {
  title: string;
  imagePath: string;
  dimensions?: string;
  year?: string;
  medium?: string;
  description?: string;
  additionalInfo?: React.ReactNode;
  subImages?: string[];
}

export default function WorkDetail({
  title,
  imagePath,
  dimensions,
  year,
  medium,
  description,
  additionalInfo,
  subImages
}: WorkDetailProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  
  const handleWheel = (e: React.WheelEvent) => {
    e.stopPropagation();
  };

  const handleImageClick = (img: HTMLImageElement) => {
    enlargeImage(img);
  };

  return (
    <main className="work-detail-layout">
      <div className="work-detail-images" onWheel={handleWheel}>
        <div className="work-detail-image" onClick={() => imageRef.current && handleImageClick(imageRef.current)}>
          <Image
            ref={imageRef}
            src={imagePath}
            alt={title}
            width={800}
            height={800}
            className="detail-image"
          />
        </div>
        
        {subImages && subImages.length > 0 && (
          <div className="sub-images-container">
            {subImages.map((imgPath, index) => (
              <div 
                key={index} 
                className="sub-image-wrapper"
                onClick={() => {
                  const img = document.getElementById(`sub-image-${index}`);
                  if (img) handleImageClick(img as HTMLImageElement);
                }}
              >
                <Image
                  id={`sub-image-${index}`}
                  src={imgPath}
                  alt={`${title} - View ${index + 1}`}
                  width={800}
                  height={800}
                  className="sub-image"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <div 
        className={`${officeTimesRound.variable} work-detail-info`}
        onWheel={handleWheel}
      >
        <h1>{title}</h1>
        {year && <p className="info-item">Year: {year}</p>}
        {dimensions && <p className="info-item">Dimensions: {dimensions}</p>}
        {medium && <p className="info-item">Medium: {medium}</p>}
        {description && <p className="info-description">{description}</p>}
        {additionalInfo}
      </div>
    </main>
  )
}