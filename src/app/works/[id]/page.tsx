import WorkDetail from '@/app/ui/WorkDetail'
import { worksList } from '../works'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {
  const work = worksList.find(w => w.id === params.id)
  return {
    title: work ? work.title : 'Work Not Found'
  }
}

export default function WorkPage({
  params,
}: {
  params: { id: string }
}) {
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