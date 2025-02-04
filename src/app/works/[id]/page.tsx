import WorkDetail from '@/app/ui/WorkDetail'
import { worksList } from '../works'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

type PageParams = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const resolvedParams = await params
  const work = worksList.find(w => w.id === resolvedParams.id)
  return {
    title: work ? work.title : 'Work Not Found'
  }
}

export default async function WorkPage({
  params,
}: PageParams) {
  const resolvedParams = await params
  const work = worksList.find(w => w.id === resolvedParams.id)
  
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