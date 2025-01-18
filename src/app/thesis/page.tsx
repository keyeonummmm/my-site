'use client'

import { useEffect } from 'react'
import { useTitle } from '../TitleContext'

export default function Thesis() {
  const { setTitle } = useTitle()
  useEffect(() => {
    setTitle('Player\'s Handbook')
    return () => setTitle('')
  }, [setTitle])
  
  const handleScroll = (e: React.WheelEvent) => {
    e.stopPropagation();
  }

  return <div></div>
}
