interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  gpa?: string;
  details: string[];
  coursework: string[];
}

const educationData: EducationItem[] = [
  {
    degree: 'Bachelor of Engineering — Software Engineering & Society (Co-op)',
    institution: 'McMaster University',
    period: 'Expected Apr 2028',
    gpa: '3.8 / 4.0',
    details: [
      'Enrolled in a specialized five-year degree program integrating core software engineering principles with multidisciplinary studies on the societal impacts of technology.',
      'Active Teaching Assistant for undergraduate courses in Operating Systems, Engineering Design, and Technology & Society.',
    ],
    coursework: [
      'Data Structures & Algorithms',
      'Software Architecture',
      'Operating Systems',
      'Web Application Development',
      'Concurrent Systems',
      'Discrete Mathematics',
      'Database Design',
    ],
  },
];

export default function EducationPage() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4 space-y-10">
      {/* Header */}
      <div className="space-y-3 text-left">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-100">
          Education
        </h1>
        <p className="text-slate-400 font-mono text-sm md:text-base">
          Academic foundation in software engineering, computer science theory, and system design.
        </p>
      </div>

      {/* Education Cards */}
      <div className="space-y-6 text-left">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="p-6 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all space-y-5 shadow-md"
          >
            {/* Degree & Header Info */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
              <div className="text-left">
                <h2 className="text-xl md:text-2xl font-bold text-slate-100">
                  {edu.degree}
                </h2>
                <div className="flex items-center gap-3 mt-1">
                  <p className="text-cyan-400 font-mono text-sm">{edu.institution}</p>
                  {edu.gpa && (
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                      GPA: {edu.gpa}
                    </span>
                  )}
                </div>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded bg-slate-800 text-slate-400 border border-slate-700/50 shrink-0 self-start md:self-auto">
                {edu.period}
              </span>
            </div>

            {/* Overview Bullets */}
            <ul className="list-disc pl-5 text-sm text-slate-300 space-y-2 leading-relaxed">
              {edu.details.map((point, idx) => (
                <li key={idx} className="marker:text-cyan-400">
                  <span className="text-slate-300">{point}</span>
                </li>
              ))}
            </ul>

            {/* Coursework Section */}
            <div className="pt-2 space-y-2">
              <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                // Relevant Coursework
              </h3>
              <div className="flex flex-wrap gap-2">
                {edu.coursework.map((course) => (
                  <span
                    key={course}
                    className="px-2.5 py-0.5 text-xs font-mono rounded bg-slate-800/80 text-cyan-300 border border-cyan-500/20"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}