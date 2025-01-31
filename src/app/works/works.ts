export interface WorkItem {
  id: string;
  title: string;
  imagePath: string;
  link: string;
  year: string;
  dimensions: string;
  medium: string;
  description: string;
  additionalInfo?: string;
  subImages?: string[];
}

export const worksList: WorkItem[] = [
  {
    id: "work1",
    title: "Primitive Painting",
    imagePath: "/assets/works/Primitive Painting_Size Vary (2).webp",
    link: "/works/work1",
    year: "2024",
    dimensions: "Size Vary",
    medium: "Oil paint, spray paint, and pastel on 9 canvases mounted on boards with metal stands.",
    description: "",
    subImages:[
      "/assets/works/Primitive Painting_Size Vary.webp",
    ]
  },
  {
    id: "work2",
    title: "Abstract Painting",
    imagePath: "/assets/works/Painting 3 69 3:4 x 57 3:4 in (177x146.7 cm).webp",
    link: "/works/work2",
    year: "2024",
    dimensions: "69 3/4 x 57 3/4 in (177x146.7 cm)",
    medium: "Oil and house paint on canvas",
    description: ""
  },
  {
    id: "work3",
    title: "Abstract Painting",
    imagePath: "/assets/works/Painting 2 61 3:8 x 81 1:4 in (156x206.4 cm).webp",
    link: "/works/work3",
    year: "2024",
    dimensions: "61 3/8 x 81 1/4 in (156x206.4 cm)",
    medium: "Oil, house paint, and ink on canvas",
    description: ""
  },
  {
    id: "work4",
    title: "Abstract Painting",
    imagePath: "/assets/works/Painting 1. 68 1:2 x 88 in (156.2x223.5 cm).webp",
    link: "/works/work4",
    year: "2024",
    dimensions: "68 1/2 x 88 in (156.2x223.5 cm)",
    medium: "Oil, house paint, and ink on canvas",
    description: ""
  },
  {
    id: "work5",
    title: "Brother",
    imagePath: "/assets/works/_DSC5723.webp",
    link: "/works/work5",
    year: "2024",
    dimensions: "49 1/4 x 51 x 15 3/4 inches (125 x 130 x 40cm)",
    medium: "Mix media",
    description: "It takes the traces of humanity—produced by human society and experienced in personal life—and emphasizes and displays them in a textured and representative architectural container.",
    subImages: [
      "/assets/works/Brother_51 x 51 x 15 3:4 inches (129.5 x 130 x 40cm) (2).webp",
      "/assets/works/Brother_51 x 51 x 15 3:4 inches (129.5 x 130 x 40cm) (3).webp",
    ]
  },
  {
    id: "work6",
    title: "Untitled",
    imagePath: "/assets/2025/_DSC5729.webp",
    link: "/works/work6",
    year: "2025",
    dimensions: "51 x 51 x 15 3/4 inches (129.5 x 130 x 40cm)",
    medium: "Oil on 5 Canvases",
    description: "",
    subImages: [
      "/assets/2025/_DSC5730.webp",
      "/assets/2025/_DSC5731.webp",
      "/assets/2025/_DSC5732.webp",
      "/assets/2025/_DSC5733.webp",
      "/assets/2025/_DSC5734.webp",
    ]
  },
  {
    id: "work7",
    title: "Perhaps you are not deceiving yourself, it is simply as it is.",
    imagePath: "/assets/2025/_DSC5735.webp",
    link: "/works/work7",
    year: "2025",
    dimensions: "50 x 72 inches (127 x 183cm)",
    medium: "Oil on paper",
    description: "",
  }
]
