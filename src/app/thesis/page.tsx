'use client'

import { useEffect } from 'react'
import { useTitle } from '../TitleContext'

export default function Thesis() {
  const { setTitle } = useTitle()
  useEffect(() => {
    setTitle('Player\'s Handbook')
    return () => setTitle('')
  }, [setTitle])

  return <div></div>
}
