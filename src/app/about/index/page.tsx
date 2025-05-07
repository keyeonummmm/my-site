'use client'

import { useTitle } from "@/app/TitleContext";
import { useEffect } from "react";
import { officeTimesRound } from "@/app/ui/fonts";

interface AboutItem {
  title: string;
  description: string;
  link: string;
}

const aboutItems: AboutItem[] = [
  {
    title: "deskstation-chrome-extension",
    description: "A public online writing sharing platform",
    link: "https://github.com/keyeonummmm/deskstation-chrome-extension"
  },
  {
    title: "APT",
    description: "A gpt-2 model fine-tuned with my personal dataset",
    link: "https://github.com/keyeonummmm/apt"
  },
  {
    title: "SDLC Documentation",
    description: "A software development life cycle diagram",
    link: "/about/index/sdlc"
  }
  // Add more items as needed
];

const handleScroll = (e: React.WheelEvent) => {
  e.stopPropagation();
}

export default function About() {
  const { setTitle } = useTitle()
  useEffect(() => {
    setTitle('Index')
    return () => setTitle('')
  }, [setTitle])

  return (
    <div className={`${officeTimesRound.variable} container`} onWheel={handleScroll}>
      {aboutItems.map((item, index) => (
        <div key={index}>
          <div className="item-container">
            <a 
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="item-link"
            >
              <span className="item-content">
                {item.title}: {item.description}
              </span>
            </a>
          </div>
          {index < aboutItems.length - 1 && <hr className="divider" />}
        </div>
      ))}
    </div>
  );
}
