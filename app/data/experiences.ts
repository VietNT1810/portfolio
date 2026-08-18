import type { Experience } from "~/types/experiences";

export const EXPERIENCES_LIST: Experience[] = [
  {
    company: "Bakker Research International Limited",
    employmentType: "Full-time",
    title: "Frontend Developer",
    period: "Jul 2023 - Mar 2026",
    location: "Wanchai, Hong Kong (Remote)",
    highlights: [
      "Collaborated closely with UI/UX designers and backend engineers to design, build, and optimize core features for the Communi platform (communi.com).",
      "Contributed to the development of reusable components.",
      "Developed responsive user interfaces using Nuxt.js, Vuex/Pinia, TypeScript, and Tailwind CSS to ensure high performance and seamless user experience.",
      "Engineered the Communi web application as a Progressive Web App (PWA), delivering a near-native mobile and desktop experience.",
    ],
    skills: [
      "JavaScript",
      "TypeScript",
      "Vue",
      "Nuxt.js",
      "VueX",
      "Pinia",
      "Tailwind CSS",
      "Figma",
      "Chart.js",
      "Agile",
    ],
  },
  {
    company: "Freelance",
    employmentType: "Part-time",
    title: "Frontend Developer",
    period: "Jan 2023 - Jul 2023",
    location: "",
    highlights: [
      "Created and customized landing pages and dashboards for clients.",
      "Developed web components for various websites.",
      "Resolved UI bugs and improved visual layouts.",
    ],
    skills: ["JavaScript", "Vue", "VueX", "Pinia", "Figma"],
  },
  {
    company: "Beedu",
    employmentType: "Full-time",
    title: "Frontend Developer",
    period: "Jun 2022 - Sep 2022",
    location: "Hanoi, Vietnam (On-site)",
    highlights: [
      "Developed and enhanced frontend features for multiple internal projects and client-facing web applications.",
      'Developed and improved the "Customer List" UI module for LienVietPostBank’s enterprise CRM system.',
      "Built user interfaces for the NFT Collection management system on Lynkey’s BackOffice platform.",
      "Implemented responsive designs and optimized performance for various devices.",
    ],
    skills: ["JavaScript", "TypeScript", "Vue", "VueX", "ElementUI"],
  },
];
