import WorkDetail from '@/app/ui/WorkDetail'
import { worksList } from '../works'
import { notFound } from 'next/navigation'

type Props = {
  params: { id: string }
}

export default async function WorkPage({ params }: Props) {
  const work = worksList.find(w => w.id === params.id)
  
  if (!work) {
    notFound()
  }

  return (    
      <WorkDetail
        title={work.title}
        imagePath={work.imagePath}
        year={work.year}
        dimensions={work.dimensions}
        medium={work.medium}
        description={work.description}
        subImages={work.subImages}
      />
  )
}

export function generateStaticParams() {
  return worksList.map((work) => ({
    id: work.id,
  }))
} 