'use client'

export default function Information() {
  const handleScroll = (e: React.WheelEvent) => {
    e.stopPropagation();
  }

  return (
    <div>
      <div className="pt-16 px-20">
        <h1>Chaoran Zhou</h1>
        <h2>Age: 22</h2>
        <h2>Toronto, ON, Canada</h2>
        
        <div className="info-columns">
          <div className="info-column info-column-left" onWheel={handleScroll}>
            <p>
              I am an artist, programmer and content creator currently living, studying and working in Toronto. 
              I am passionate about creating installations and mixed media works, investigating user interface design, databases and artificial intelligence techniques.
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
              I am also a software engineer, I am passionate about creating software that is both beautiful and functional.
            </p>
            <br />
            <p>
              I am also a software engineer, I am passionate about creating software that is both beautiful and functional.
            </p>
            <br />  
            <p>
              I am also a software engineer, I am passionate about creating software that is both beautiful and functional.
            </p>
            <br />  
            <p>
              I am also a software engineer, I am passionate about creating software that is both beautiful and functional.
            </p>
            <br />  
            <p>
              I am also a software engineer, I am passionate about creating software that is both beautiful and functional.
            </p>
            <br />  
            <p>
              I am also a software engineer, I am passionate about creating software that is both beautiful and functional.
            </p>
            <br />  
            <p>
              I am also a software engineer, I am passionate about creating software that is both beautiful and functional.
            </p>
            <br />  
            <p>
              I am also a software engineer, I am passionate about creating software that is both beautiful and functional.
            </p>
            <br />  
            <p>
              I am also a software engineer, I am passionate about creating software that is both beautiful and functional.
            </p>
            <br />  
          </div>
        </div>
      </div>
    </div>
  )
}
