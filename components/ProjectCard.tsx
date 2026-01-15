
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group overflow-hidden rounded-xl bg-white border border-slate-200 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:bg-slate-900 dark:border-slate-800">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100 flex items-end p-4">
          <div className="flex gap-2">
            <a href={project.link} className="rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-slate-900 hover:bg-slate-100">Live Demo</a>
            {project.github && (
              <a href={project.github} className="rounded-full bg-slate-900/80 border border-white/20 px-4 py-1.5 text-xs font-semibold text-white hover:bg-slate-900">GitHub</a>
            )}
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.map(tag => (
            <span key={tag} className="px-2 py-0.5 rounded-md bg-primary-50 text-primary-700 text-[10px] font-bold uppercase tracking-wider dark:bg-primary-900/30 dark:text-primary-300">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{project.title}</h3>
        <p className="text-slate-600 text-sm line-clamp-2 dark:text-slate-400 leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
