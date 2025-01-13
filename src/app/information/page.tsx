'use client'

import { useEffect } from 'react'
import { useTitle } from '../TitleContext'

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
    <div>
      <div className="pt-16 px-20">
        <h1>Name: <span className="italic">Chaoran Zhou</span></h1>
        <h2>Age: <span className="italic">{calculateAge()} years old</span></h2>
        <h2>Location: <span className="italic">Toronto, ON, Canada</span></h2>
        
        <div className="info-columns">
          <div className="info-column info-column-left" onWheel={handleScroll}>
            <p>
              I am an artist, programmer and content creator currently living, studying and working in Toronto. 
              I am focusing on creating installations and mix-medium works, simultaneously I do paintings, photographs and videos. 
              I design intuitive user interfaces, work with databases, and experiment with artificial intelligence techniques.
              I am fascinated by the artistic and at the same time by the precise and well-designed systems.
              Whether it is art, content creation or program development, they have a mutually reinforcing and complementary relationship.
              Artistic creation provides intuitive and fascinating ideas, a momentary encounter and exchange of idea, thoughts and culture; 
              content creation is the carrier of continuous ideas, it is a combination of knowledge, information, and taste; 
              Software engineering provides tangible solutions to practical problems, it satisfies a need like any other product or service.
            </p>
          </div>
          
          <div className="info-column" onWheel={handleScroll}>
            <div className='italic'>
            <p>
            I am currently a student of the Drawing & Painting program at OCAD University, 
            I am working on my thesis(graduation project), which will be on show in early May 2025.
            </p>
            </div>
            <br />
            <p>
            In 2022, I began to shift from painting to installation. 
            Installation practice provides possibilities in terms of expression, interactivity, and interdisciplinary integration, 
            using a variety of elements such as space, materials, sound, and light to create a multi-sensory experience. 
            I am trying to incorporate the characteristics of installation into two-dimensional painting, 
            using materials and presentation methods to explore the perceptual perspective of painting.
            </p>
            <br />
            <p>
            In early 2024, I tried many platforms for building websites for the need of a personal website. 
            but gradually I found that they provided too few functions to implement some very subtle interactive designs. 
            Since then, I have started to learn programming, with the initial goal of simply writing my own personal website. 
            In the process of learning, I realized that computer science is an incredibly vast knowledge base, and that using this knowledge seems to open up a world of possibilities.
            </p>
            <br />
            <p>
            I came to Canada as a student in 2019 and applied to university in the same year.
            In addition to art school, I also considered a career in aircraft maintenance. 
            My love of aircraft really comes from when I was a child. I chose to study art because I was clearly influenced by W. Somerset Maugham's novel “Of Moon and Sixpence”. 
            The protagonist's pursuit of independence deeply moved me.
            </p>
            <br />  
          </div>
        </div>
      </div>
    </div>
  )
}
