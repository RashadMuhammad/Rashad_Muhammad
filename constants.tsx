import React from "react";
import { Project, Experience, Skill } from "./types";

export const PERSONAL_INFO = {
  name: "Muhammad Rashad",
  title: ".NET & Full-Stack Software Developer",
  location: "Kerala, India",
  email: "rashad007muhammad@gmail.com",
  github: "https://github.com/rashadmuhammad",
  linkedin: "https://www.linkedin.com/in/rashad-muhammad-b671ba305",
  bio: "Results-driven Software Developer with hands-on experience in .NET and MERN technologies, specializing in ERP systems and modern web applications.",
  extendedBio:
    "I am a Full-Stack Software Developer with professional experience in building and maintaining enterprise-grade ERP systems using C#, WinForms, ASP.NET, and SQL Server. Alongside .NET development, I have strong hands-on experience with the MERN stack, creating responsive web applications and RESTful APIs. I actively work in Agile environments, focusing on clean architecture, performance optimization, and delivering scalable, business-focused solutions.",
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Chapter50 Aviation",
    description:
      "Modern aviation service website showcasing company offerings and digital presence.",
    longDescription:
      "A modern static aviation website built with React and Tailwind CSS for marketing and brand visibility. The site highlights aviation services, company profile, and customer engagement features, with integrated EmailJS for contact and inquiries.",
    image: "/Uploads/Chapter50Aviation.png",
    tags: ["React", "TailWind", "EmailJS"],
    link: "https://chapter50.onrender.com",
    github: "https://github.com/RashadMuhammad/CHAPTER-50",
  },
  {
    id: "2",
    title: "Weather App",
    description:
      "Real-time weather application providing accurate climate data and forecasts.",
    longDescription:
      "A responsive weather application built with React and Tailwind CSS that consumes an external weather API to display real-time conditions, forecasts, and location-based climate data. Focused on clean UI, fast performance, and reliable API integration.",
    image: "/Uploads/Climate.png",
    tags: ["React", "TailWind", "External API"],
    link: "https://climate-rj6v.onrender.com",
    github: "https://github.com/RashadMuhammad/Climate",
  },
  {
    id: "3",
    title: "Esportes",
    description:
      "Full-featured sports e-commerce platform for online product sales.",
    longDescription:
      "A complete sports e-commerce application built using JavaScript, Node.js, and MongoDB, deployed on AWS. The platform supports product browsing, cart management, and secure order processing, focusing on scalability, performance, and real-world e-commerce workflows.",
    image: "/Uploads/Esportes.jpeg",
    tags: ["Javascript", "Node", "MongoDB", "AWS"],
    link: "https://esportes.ddns.net",
    github: "https://github.com/RashadMuhammad/Esportes",
  },
  {
    id: "4",
    title: "Spess.Co",
    description:
      "Modern static website built to showcase brand identity and products.",
    longDescription:
      "A responsive static website developed using HTML, CSS, and JavaScript to present the Spess.Co brand and its offerings. The project focuses on clean UI design, smooth user interactions, and cross-device compatibility, serving as a lightweight marketing and showcase platform. ",
    image: "/Uploads/Spess.Co.png",
    tags: ["HTML", "CSS", "Javascript"],
    link: "https://rashadmuhammad.github.io/Spess.co",
    github: "https://github.com/RashadMuhammad/Spess.co",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "e1",
    company: "Polosys Technologies L.L.P",
    role: ".NET Developer",
    period: "Apr 2025 - Present",
    description: [
      "Working on in-house Polosys ERP using C#, WinForms, ASP.NET, and SQL Server.",
      "Developed and maintained ERP modules for sales, purchase, inventory, and accounts.",
      "Customized business logic based on client-specific operational requirements.",
      "Debugged and optimized WinForms workflows in an Agile team environment.",
    ],
  },
  {
    id: "e2",
    company: "Brototype",
    role: "Junior Developer (Intern)",
    period: "Jul 2024 - Apr 2025",
    description: [
      "Trained in full-stack MERN development with real-world project experience.",
      "Built full-stack applications using React, Node.js, Express, and MongoDB.",
      "Worked with REST APIs, Git version control, and deployment practices.",
      "Collaborated on projects including chat apps, expense trackers, and dashboards.",
    ],
  },
];

export const SKILLS: Skill[] = [
  // Frontend
  { name: "React", level: 90, category: "Frontend" },
  { name: "TypeScript", level: 88, category: "Frontend" },
  { name: "JavaScript", level: 90, category: "Frontend" },
  { name: "HTML", level: 92, category: "Frontend" },
  { name: "CSS", level: 90, category: "Frontend" },
  { name: "Tailwind CSS", level: 88, category: "Frontend" },
  { name: "Bootstrap", level: 85, category: "Frontend" },
  { name: "Redux", level: 80, category: "Frontend" },

  // Backend
  { name: "C#", level: 90, category: "Backend" },
  { name: ".NET / ASP.NET", level: 88, category: "Backend" },
  { name: "WinForms", level: 90, category: "Backend" },
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "Express.js", level: 82, category: "Backend" },
  { name: "REST APIs", level: 88, category: "Backend" },

  // Databases
  { name: "SQL Server", level: 88, category: "Database" },
  { name: "MongoDB", level: 82, category: "Database" },
  { name: "PostgreSQL", level: 78, category: "Database" },

  // Tools & Platforms
  { name: "Git", level: 85, category: "Tools" },
  { name: "Postman", level: 88, category: "Tools" },
  { name: "AWS", level: 75, category: "Tools" },
  { name: "Docker", level: 75, category: "Tools" },
  { name: "Figma", level: 70, category: "Tools" },

  // Architecture & Domain
  { name: "ERP Systems", level: 90, category: "Domain" },
  { name: "System Design", level: 85, category: "Domain" },
  { name: "Agile Development", level: 85, category: "Domain" },

  // Soft Skills
  { name: "Problem Solving", level: 90, category: "Soft Skills" },
  { name: "Debugging", level: 88, category: "Soft Skills" },
  { name: "Communication", level: 85, category: "Soft Skills" },
  { name: "Time Management", level: 85, category: "Soft Skills" },
];
