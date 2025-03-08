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
        Chaoran explores topics from life experience and the process of the times, he connects the audience with thought-provoking concepts through his conceptual installations and paintings. 
        By exploring the physical properties and discursive contexts of different materials, and by narrative through amplification, exaggeration and conceptual elaboration,
        he creates a visual language that is both poetic and critical, and invites viewers to reflect on the deeper meanings and issuesof the world around them.
        </p>
        <br />
        <p>
        In Chaoran's current project, he translates the technical principles of artificial intelligence into visual forms, exploring the similarities and differences between artificial intelligence and human intelligence, human consciousness, and the ethical practice of conceptual expression.
        </p>
        <br />
        <p>
        Alongside his passion for visual art, Chaoran has a great interest in programming and what it can do in the real world, 
        He has worked on an artificial intelligence model that serves artistic purposes, as well as some more practical software. 
        He is working on a browser extension and an online collaboration platform that helps creative workers develop ideas into projects.
        </p>
        <br />
        <p>
        <Link href="/works"><span className="underline">CLICK HERE TO SEE ALL ART WORKS</span></Link>
        </p>
        <p>
        <Link href="/about/index"><span className="underline">CLICK HERE TO SEE SOFTWARE AND OTHER PROJECTS</span></Link>
        </p>
      </div>
    </div>
  )
}
