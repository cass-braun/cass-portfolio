interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level?: string;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    category: 'Languages',
    description: 'Core programming and scripting languages used for production and systems development.',
    skills: [
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'Python' },
      { name: 'HTML/CSS' },
      { name: 'C/C++' },
      { name: 'SQL' },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    description: 'Modern front-end, back-end, and utility libraries for web applications.',
    skills: [
      { name: 'React' },
      { name: 'FastAPI' },
      { name: 'Tailwind CSS' },
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'Next.js' },
    ],
  },
  {
    category: 'Tools & Architecture',
    description: 'Development environments, infrastructure, and protocol design specifications.',
    skills: [
      { name: 'Git & GitHub' },
      { name: 'Language Server Protocol (LSP)' },
      { name: 'REST APIs' },
      { name: 'Docker' },
      { name: 'Vite' },
      { name: 'Linux/Unix' },
    ],
  },
  {
    category: 'Engineering Best Practices',
    description: 'Methodologies and practices focused on reliable software design and maintenance.',
    skills: [
      { name: 'Software Architecture' },
      { name: 'Full-Stack Development' },
      { name: 'Code Review & Mentorship' },
      { name: 'Agile/Scrum' },
      { name: 'System Design' },
    ],
  },
];

export default function TechnicalSkillsPage() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4 space-y-10">
      {/* Header */}
      <div className="space-y-3 text-left">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-100">
          Technical Skills
        </h1>
        <p className="text-slate-400 font-mono text-sm md:text-base">
          A breakdown of languages, frameworks, developer tools, and architectural concepts I work with.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="space-y-6 text-left">
        {skillCategories.map((cat, index) => (
          <div
            key={index}
            className="p-6 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all space-y-4 shadow-md"
          >
            {/* Category Header */}
            <div className="border-b border-slate-800/80 pb-3">
              <h2 className="text-xl font-bold text-slate-100 font-mono text-left">
                // {cat.category}
              </h2>
              <p className="text-slate-400 text-xs md:text-sm mt-1 text-left">
                {cat.description}
              </p>
            </div>

            {/* Badges Grid */}
            <div className="flex flex-wrap gap-2 pt-1">
              {cat.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="px-3 py-1 text-xs md:text-sm font-mono rounded bg-slate-800/80 text-cyan-300 border border-cyan-500/20 hover:border-cyan-500/40 transition-colors"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}