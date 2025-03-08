'use client'

import { useEffect } from 'react'
import { useTitle } from '../TitleContext'

export default function Thesis() {
  const { setTitle } = useTitle()
  useEffect(() => {
    setTitle('Player\'s Handbook')
    return () => setTitle('')
  }, [setTitle])

  return <div className="font-size-2xl top-50px flex flex-col items-center">
    <h1>The Upcoming Thesis Project, revealing the details on May</h1>
  </div>
}
