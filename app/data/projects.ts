import type { Project } from "~/types/projects";

export const PROJECT_LIST: Project[] = [
  {
    key: "portfolio",
    title: "My portfolio",
    description:
      "A personal portfolio website designed to present my profile, technical skills, and featured web development projects.",
    image: "/images/projects/portfolio.png",
    link: "https://www.google.com/",
    github: "https://github.com/VietNT1810/portfolio",
    techStack: ["Nuxt 4", "TypeScript", "TailwindCSS"],
  },
  {
    key: "isekai-shop",
    title: "Isekai Shop",
    description:
      "A Full Stack e-commerce platform made for anime and cosplay enthusiasts, featuring secure authentication and seamless shopping workflows.",
    image: "/images/projects/isekai.png",
    link: "https://isekai-shop.vercel.app/",
    github: "https://github.com/VietNT1810/isekai",
    techStack: [
      "React 17",
      "Javascript",
      "MaterialUI",
      "Redux Toolkit",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
  },
  {
    key: "maxim-lavrov",
    title: "Maxim Lavrov",
    description:
      "A web app dedicated to a fictional celebrity chef, allowing food lovers to explore expert recipes and save their personal favorites.",
    image: "/images/projects/maxim.png",
    link: "https://maxim-recipes.vercel.app/",
    github: "https://github.com/VietNT1810/maxim-recipes",
    techStack: [
      "React 17",
      "Javascript",
      "Bootstrap",
      "Redux Toolkit",
      "Firebase",
    ],
  },
  {
    key: "snake-game",
    title: "Snake Game",
    description: "A classic browser-based Snake game.",
    image: "/images/projects/snake-game.png",
    link: "https://snake-game-vietnt.vercel.app/",
    github:
      "https://github.com/VietNT1810/Codegym-Javascript/tree/master/Casestudy-snakegame",
    techStack: ["HTML", "CSS", "Javascript"],
  },
];
