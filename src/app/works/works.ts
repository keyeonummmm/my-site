export interface WorkItem {
  id: string;
  title: string;
  imagePath: string;
  link: string;
  year: string;
  dimensions: string;
  medium: string;
  description: string;
}

export const worksList: WorkItem[] = [
  {
    id: "work1",
    title: "Work 1",
    imagePath: "/assets/works/Primitive Painting_Size Vary (2).webp",
    link: "/works/work1",
    year: "2024",
    dimensions: "Size Vary",
    medium: "Oil on Canvas",
    description: "Description for Work 1"
  },
  {
    id: "work2",
    title: "Work 2",
    imagePath: "/assets/works/Painting 3 69 3:4 x 57 3:4 in (177x146.7 cm).webp",
    link: "/works/work2",
    year: "2024",
    dimensions: "69 3/4 x 57 3/4 in (177x146.7 cm)",
    medium: "Oil on Canvas",
    description: "Description for Work 2"
  },
  {
    id: "work3",
    title: "Work 3",
    imagePath: "/assets/works/Painting 2 61 3:8 x 81 1:4 in (156x206.4 cm).webp",
    link: "/works/work3",
    year: "2024",
    dimensions: "61 3/8 x 81 1/4 in (156x206.4 cm)",
    medium: "Oil on Canvas",
    description: "Description for Work 3"
  },
  {
    id: "work4",
    title: "Work 4",
    imagePath: "/assets/works/Painting 1. 68 1:2 x 88 in (156.2x223.5 cm).webp",
    link: "/works/work4",
    year: "2024",
    dimensions: "68 1/2 x 88 in (156.2x223.5 cm)",
    medium: "Oil on Canvas",
    description: "Description for Work 4"
  },
  {
    id: "work5",
    title: "Work 5",
    imagePath: "/assets/works/_DSC5723.webp",
    link: "/works/work5",
    year: "2024",
    dimensions: "68 1/8 x 88 in (156.2x223.5 cm)",
    medium: "Oil on Canvas",
    description: "Description for Work 5"
  },
]