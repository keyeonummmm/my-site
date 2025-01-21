import Image from 'next/image'

interface WorkDetailProps {
  title: string;
  imagePath: string;
  dimensions?: string;
  year?: string;
  medium?: string;
  description?: string;
  additionalInfo?: React.ReactNode;
}

export default function WorkDetail({
  title,
  imagePath,
  dimensions,
  year,
  medium,
  description,
  additionalInfo
}: WorkDetailProps) {
  return (
    <main className="work-detail-container">
      <div className="work-detail-image">
        <Image
          src={imagePath}
          alt={title}
          width={800}
          height={800}
          className="detail-image"
        />
      </div>
      <div className="work-detail-info">
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