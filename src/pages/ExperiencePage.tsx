interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  location?: string;
  tags: string[];
  points: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: 'Software Engineer Co-op',
    organization: 'Mesomat',
    period: 'May 2024 – Aug 2024',
    tags: ['React', 'TypeScript', 'FastAPI', 'Python', 'Full-Stack'],
    points: [
      'Managed full-stack web development, building scalable front-end interfaces and backend APIs.',
      'Collaborated across teams to architect performant features and maintain system reliability.',
    ],
  },
  {
    role: 'Teaching Assistant',
    organization: 'McMaster University',
    period: 'Sept 2023 – Present',
    tags: ['Mentorship', 'Engineering', 'Code Review', 'Academic Support'],
    points: [
      'Supported undergraduate engineering and technology courses through lab facilitation and grading.',
      'Mentored students on software development best practices, algorithms, and code design.',
    ],
  },
  {
    role: 'Research Assistant',
    organization: 'McMaster University',
    period: 'May 2023 – Apr 2024',
    tags: ['TypeScript', 'Language Servers', 'Software Architecture', 'LSP'],
    points: [
      'Focused on language server development and software tooling research.',
      'Designed and implemented custom developer tools to streamline code analysis.',
    ],
  },
  {
    role: 'Vice President',
    organization: 'NAYGN',
    period: 'Sept 2023 – Apr 2024',
    tags: ['Leadership', 'Event Planning', 'Community Outreach'],
    points: [
      'Led organizational initiatives, managed community events, and drove student engagement.',
    ],
  },
];

export default function ExperiencePage() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4 space-y-10">
      {/* Header */}
      <div className="space-y-3 text-left">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-100">
          Work Experience
        </h1>
        <p className="text-slate-400 font-mono text-sm md:text-base">
          A timeline of my industry roles, research contributions, and leadership involvement.
        </p>
      </div>

      {/* Experience List / Timeline */}
        <div className="space-y-6 text-left">
            {experiences.map((exp, index) => (
                <div
                key={index}
                className="p-6 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all space-y-4 shadow-md text-left"
                >
                {/* Header Info */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-slate-800/80 pb-3 text-left">
                <div className="text-left">
                    <h2 className="text-xl font-bold text-slate-100">{exp.role}</h2>
                    <p className="text-cyan-400 font-mono text-sm">{exp.organization}</p>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded bg-slate-800 text-slate-400 border border-slate-700/50 shrink-0 self-start md:self-auto">
                    {exp.period}
                </span>
                </div>
                {/* Bullet Points */}
                <ul className="list-disc pl-5 text-sm text-slate-300 space-y-2 leading-relaxed text-left">
                    {exp.points.map((pt, idx) => (
                    <li key={idx} className="marker:text-cyan-400">
                        <span className="text-slate-300">{pt}</span>
                    </li>
                    ))}
                </ul>

                {/* Tech / Skills Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                    {exp.tags.map((tag) => (
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