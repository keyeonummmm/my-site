'use client'

import { useEffect } from 'react'
import { useTitle } from '../TitleContext'
import { officeTimesRound } from '../ui/fonts'
import Link from 'next/link'

const calculateAge = () =>{
  const birthday = new Date('2002-07-16');
  const today = new Date();
  const years = today.getFullYear() - birthday.getFullYear();
  const months = today.getMonth() - birthday.getMonth();
  const days = today.getDate() - birthday.getDate();
  return +(years + months / 12 + days / 365).toFixed(2);
}

export default function Information() {
  const { setTitle } = useTitle()
  useEffect(() => {
    setTitle('Information')
    return () => setTitle('')
  }, [setTitle])

  const handleScroll = (e: React.WheelEvent) => {
    e.stopPropagation();
  }

  return (
    <div className={`${officeTimesRound.variable} info-columns`}>
      <div className="info-column" onWheel={handleScroll}>
        <h1>Name: <span className="italic">Chaoran Zhou</span></h1>
        <h2>Age: <span className="italic">{calculateAge()} years old</span></h2>
        <h2>Location: <span className="italic">Toronto, ON, Canada</span></h2>
        <br />
        <p>
        <span className="">THIS IS THE PERSONAL WEBSITE OF CHAORAN ZHOU, SHOWCASING HIS ART AND PROJECTS IN OTHER FIELDS.</span>
        </p>
        <br />
        <p>
        Chaoran Zhou is a Chinese-born artist currently pursuing a Bachelor of Fine Arts of Drawing and Painting at OCAD University in Toronto. 
        Specializing in both conceptual installations and paintings, 
        Chaoran explores diverse visual expressions that connect audiences to thought-provoking concepts.
        </p>
        <br />
        <p>
        Alongside a strong commitment to visual art, Chaoran is also passionate about software development, 
        bringing a creative and analytical approach to technology. Driven by a desire to foster collaboration among fellow creatives, 
        Chaoran aims to build a thriving community of content and culture makers in the near future.
        </p>
        <br />
        <p>
        <Link href="/about/index"><span className="underline">CLICK HERE TO SEE SOFTWARE AND OTHER PROJECTS</span></Link>
        </p>
      </div>
    </div>
  )
}
