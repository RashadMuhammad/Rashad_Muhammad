
import React from 'react';
import { Project, Experience, Skill } from './types';

export const PERSONAL_INFO = {
  name: "Alex Sterling",
  title: "Senior Full-Stack Engineer",
  location: "San Francisco, CA",
  email: "alex.sterling@example.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  bio: "Specializing in building exceptional digital experiences. I focus on clean code, scalable architecture, and user-centric design.",
  extendedBio: "With over 8 years of experience in the software industry, I have led teams at high-growth startups and contributed to enterprise-scale applications. My passion lies in bridging the gap between complex backend systems and intuitive frontend interfaces."
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Quantum Analytics',
    description: 'Real-time data visualization dashboard for crypto markets.',
    longDescription: 'A comprehensive analytics platform built with React, D3.js, and WebSocket integration. It handles thousands of data points per second with sub-millisecond latency.',
    image: 'https://picsum.photos/seed/quantum/800/600',
    tags: ['React', 'TypeScript', 'D3.js', 'WebSockets'],
    link: '#',
    github: '#'
  },
  {
    id: '2',
    title: 'EcoSphere E-Commerce',
    description: 'Sustainable marketplace with AI-driven recommendations.',
    longDescription: 'Built from the ground up to support thousands of concurrent users. Features include a custom headless CMS, integrated payment processing, and an AI recommendation engine.',
    image: 'https://picsum.photos/seed/eco/800/600',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    link: '#',
    github: '#'
  },
  {
    id: '3',
    title: 'Nebula Task Manager',
    description: 'Collaborative project management tool for remote teams.',
    longDescription: 'A sleek, performant task management application that emphasizes developer experience and keyboard-first navigation.',
    image: 'https://picsum.photos/seed/nebula/800/600',
    tags: ['React', 'Tailwind', 'Redux', 'Firebase'],
    link: '#',
    github: '#'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'e1',
    company: 'TechFlow Systems',
    role: 'Senior Software Engineer',
    period: '2021 - Present',
    description: [
      'Lead a team of 5 developers in redesigning the core product architecture.',
      'Reduced frontend bundle size by 40% through code-splitting and tree-shaking.',
      'Implemented a comprehensive CI/CD pipeline using GitHub Actions.'
    ]
  },
  {
    id: 'e2',
    company: 'InnovaSoft',
    role: 'Full-Stack Developer',
    period: '2018 - 2021',
    description: [
      'Developed and maintained multiple high-traffic client websites.',
      'Optimized database queries, reducing response times by 30%.',
      'Mentored junior developers and conducted code reviews.'
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: 'React', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Frontend' },
  { name: 'Next.js', level: 85, category: 'Frontend' },
  { name: 'Node.js', level: 88, category: 'Backend' },
  { name: 'PostgreSQL', level: 82, category: 'Backend' },
  { name: 'AWS', level: 75, category: 'Tools' },
  { name: 'Docker', level: 80, category: 'Tools' },
  { name: 'System Design', level: 85, category: 'Soft Skills' }
];
