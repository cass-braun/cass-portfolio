import { useState } from 'react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  highlights: string[];
  featured?: boolean;
}

const projectsData: Project[] = [
  {
    title: 'Developer Portfolio',
    description:
      'Personal single-page portfolio website designed with a permanent dark terminal aesthetic, full-viewport responsive layout, and custom typography.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'React Router', 'GitHub Pages'],
    githubUrl: 'https://github.com/cass-braun/cass-portfolio',
    featured: true,
    highlights: [
      'Built with React, TypeScript, and Tailwind CSS using modern component abstractions.',
    ],
  },
  {
    title: 'jPipe Language Server',
    description:
      'A custom Language Server Protocol (LSP) implementation designed for operationalizing justification models in software engineering workflows.',
    tags: ['TypeScript', 'LSP', 'Software Architecture', 'Language Engineering', 'Research'],
    githubUrl: 'https://github.com/ace-design/jpipe',
    featured: true,
    highlights: [
      'Engineered language server features to analyze and validate jPipe justification models.',
      'Contributed to research resulting in co-authoring the paper "Creating and Operationalizing Justification Models Using jPipe".',
    ],
  },
  {
    title: 'Ocean Gardens',
    description:
      'Award-winning game created during a hackathon, featuring interactive mechanics and real-time state management.',
    tags: ['JavaScript', 'Game Dev', 'Hackathon Winner', 'UI/UX'],
    githubUrl: 'https://github.com/braunc8/NASASpaceApps2023',
    featured: false,
    highlights: [
      'Won 3rd place at a competitive hackathon for game design, execution, and user experience.',
      'Designed game logic and player interaction loops under tight hackathon constraints.',
    ],
  },
  {
    title: 'Gaim App',
    description:
      'Mobile application developed for Android platforms emphasizing responsive layout design and clean software architecture.',
    tags: ['Android', 'Java/Kotlin', 'Mobile Engineering', 'Software Architecture'],
    githubUrl: 'https://github.com/txshah/3A04_group6',
    featured: false,
    highlights: [
      'Structured application architecture focusing on user interaction and responsive layouts.',
      'Implemented clean data management and modular view components.',
    ],
  },
];

const ALL_TAGS = ['All', ...Array.from(new Set(projectsData.flatMap((p) => p.tags)))];

export default function ProjectsPage() {
  const [selectedTag, setSelectedTag] = useState('All');

  const filteredProjects =
    selectedTag === 'All'
      ? projectsData
      : projectsData.filter((p) => p.tags.includes(selectedTag));

  return (
    <section className="max-w-4xl mx-auto py-12 px-4 space-y-10 text-left">
      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-100">
          Projects
        </h1>
        <p className="text-slate-400 font-mono text-sm md:text-base">
          A collection of research software, hackathon-winning builds, and mobile & web applications.
        </p>
      </div>

      {/* Tag Filter Pills */}
      <div className="flex flex-wrap gap-2 pt-2">
        {ALL_TAGS.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-3 py-1 text-xs font-mono rounded transition-colors ${
              selectedTag === tag
                ? 'bg-cyan-500 text-slate-950 font-semibold'
                : 'bg-slate-800/80 text-slate-300 border border-slate-700/60 hover:border-cyan-500/40'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Projects List */}
      <div className="space-y-6">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="p-6 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all space-y-4 shadow-md"
          >
            {/* Title & Action Links */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-slate-100">{project.title}</h2>
                {project.featured && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    Featured
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3 text-xs font-mono shrink-0">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    GitHub &rarr;
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Live Demo &rarr;
                  </a>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.description}
            </p>

            {/* Key Highlights */}
            <ul className="list-disc pl-5 text-xs text-slate-400 space-y-1.5 leading-relaxed">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="marker:text-cyan-400">
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 text-xs font-mono rounded bg-slate-800/80 text-cyan-300 border border-cyan-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}