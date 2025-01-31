'use client'

import { useEffect } from 'react'
import { useTitle } from '../../TitleContext'
import { officeTimesRound } from '../../ui/fonts'

export default function Bio() {
  const { setTitle } = useTitle()
  useEffect(() => {
    setTitle('Biography')
    return () => setTitle('')
  }, [setTitle])

  const handleScroll = (e: React.WheelEvent) => {
    e.stopPropagation();
  }

  return (
    <div className={`${officeTimesRound.variable} bio-page-container`} onWheel={handleScroll}>
      <div className="bio-content">
        <h1>Chaoran Zhou</h1>
        <h3>Born in 2002 in Xiamen, China.</h3>
        <h3>Lives and works in Toronto, ON, Canada.</h3>
        <br />
        <div className="exhibition-catalogue">
          <h2>Group Exhibitions:</h2>
          <br />
          <h3>Map of Sceneries. 37 Baldwin St, Toronto. 2022</h3>
          <h3>A Breathing Room. OCAD University, Toronto. 2023</h3>
          <h3>anxious yet familiar world. Ignite Gallery, OCAD University, Toronto. 2025</h3>
          <br />
          <h2>Solo Exhibitions:</h2>
          <br />
          <h3>None</h3>
          <br />
      <div className="bio-pdf-link">
        <a 
          href="/pdfs/Biography_Chaoran Zhou.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
      >
            BIOGRAPHY CHAORAN ZHOU.PDF ↗
        </a>
      </div>
        </div>
      </div>
    </div>
  );
}