'use client'

import Image from 'next/image'
import { enlargeImage } from '@/app/util'
import { officeTimesRound } from '@/app/ui/fonts'
import { useRef, useState, useEffect } from 'react'

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

interface ImageDimensions {
  [key: string]: { width: number; height: number; isPortrait: boolean; loaded: boolean };
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
  const [imageDimensions, setImageDimensions] = useState<ImageDimensions>({});
  const [imagesPreloaded, setImagesPreloaded] = useState(false);
  
  const handleWheel = (e: React.WheelEvent) => {
    e.stopPropagation();
  };

  const handleImageClick = (img: HTMLImageElement) => {
    enlargeImage(img);
  };

  // Pre-load all images before rendering to prevent flashing
  useEffect(() => {
    // Skip preloading if not in browser environment
    if (typeof window === 'undefined') return;
    
    const allImages = [imagePath, ...(subImages || [])];
    let loadedCount = 0;
    const totalImages = allImages.length;
    
    // Create a temporary object to store dimensions
    const tempDimensions: ImageDimensions = {};
    
    const preloadImage = (path: string) => {
      return new Promise<void>((resolve) => {
        // Use document.createElement instead of new Image()
        const img = document.createElement('img');
        
        img.onload = () => {
          const isPortrait = img.height > img.width;
          
          tempDimensions[path] = {
            width: img.width,
            height: img.height,
            isPortrait,
            loaded: true
          };
          
          loadedCount++;
          resolve();
          
          if (loadedCount === totalImages) {
            setImageDimensions(tempDimensions);
            setImagesPreloaded(true);
          }
        };
        
        img.onerror = () => {
          tempDimensions[path] = {
            width: 800,
            height: 800,
            isPortrait: false,
            loaded: true
          };
          
          loadedCount++;
          resolve();
          
          if (loadedCount === totalImages) {
            setImageDimensions(tempDimensions);
            setImagesPreloaded(true);
          }
        };
        
        img.src = path;
      });
    };
    
    // Preload all images in parallel
    Promise.all(allImages.map(preloadImage))
      .then(() => {
        // All images preloaded
      })
      .catch(error => {
        // Handle errors
      });
      
  }, [imagePath, subImages]);

  const getImageDimensions = (path: string) => {
    const dimensions = imageDimensions[path];
    if (!dimensions || !dimensions.loaded) {
      return { width: 800, height: 800 }; // Default dimensions
    }
    
    return dimensions.isPortrait ? { width: 600, height: 600 } : { width: 800, height: 800 };
  };

  // Don't render images until all are preloaded
  if (!imagesPreloaded) {
    return (
      <main className="work-detail-layout">
        <div className="work-detail-images">
          <div className="work-detail-image image-loading"></div>
          {subImages && subImages.length > 0 && (
            <div className="sub-images-container">
              {subImages.map((_, index) => (
                <div key={index} className="sub-image-wrapper image-loading"></div>
              ))}
            </div>
          )}
        </div>
        <div className={`${officeTimesRound.variable} work-detail-info`}>
          <h1>{title}</h1>
          {year && <p className="info-item">Year: {year}</p>}
          {dimensions && <p className="info-item">Dimensions: {dimensions}</p>}
          {medium && <p className="info-item">Medium: {medium}</p>}
          {description && <p className="info-description">{description}</p>}
          {additionalInfo}
        </div>
      </main>
    );
  }

  return (
    <main className="work-detail-layout">
      <div className="work-detail-images" onWheel={handleWheel}>
        <div 
          className="work-detail-image" 
          onClick={() => imageRef.current && handleImageClick(imageRef.current)}
        >
          <Image
            ref={imageRef}
            src={imagePath}
            alt={title}
            width={getImageDimensions(imagePath).width}
            height={getImageDimensions(imagePath).height}
            className={`detail-image ${imageDimensions[imagePath]?.isPortrait ? 'portrait' : 'landscape'}`}
            priority
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
                  width={getImageDimensions(imgPath).width}
                  height={getImageDimensions(imgPath).height}
                  className={`sub-image ${imageDimensions[imgPath]?.isPortrait ? 'portrait' : 'landscape'}`}
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