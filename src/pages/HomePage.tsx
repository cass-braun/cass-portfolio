import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub  } from 'react-icons/fa';

export default function HomePage() {
  return (
    <section className="flex flex-col items-center text-center py-0 px-4 max-w-4xl mx-auto space-y-10">
      {/* Intro Header */}
      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-100">
          Hi, I'm <span className="text-cyan-400">Cass Braun</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-mono">
          Full-Stack Software Engineering Student & Web Developer creating new digital experiences.
        </p>
      </div>

      {/* Code Snippet / Terminal Feature Box */}
    <div className="w-full text-left bg-slate-900 border border-slate-800 rounded-lg p-4 font-mono text-sm shadow-xl relative overflow-hidden">
        <pre className="text-slate-300 overflow-x-auto font-mono leading-normal m-0 p-0">
            <code>
                <div><span className="text-purple-400">const</span> <span className="text-cyan-300">developer</span> = &#123;</div>
                <div>  name: <span className="text-emerald-400">'Cass Braun'</span>,</div>
                <div>  role: <span className="text-emerald-400">'Software Engineering Student'</span>,</div>
                <div>  coreStack: [<span className="text-emerald-400">'React'</span>, <span className="text-emerald-400">'TypeScript'</span>, <span className="text-emerald-400">'FastAPI'</span>],</div>
                <div>  status: <span className="text-emerald-400">'Building awesome projects'</span></div>
                <div>&#125;;</div>
            </code>
        </pre>
    </div>
      {/* Quick Bio & Featured Callouts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full pt-4">
        <Link
          to="/experience"
          className="p-6 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-all text-left group"
        >
          <h3 className="text-lg font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">
            Experience &rarr;
          </h3>
          <p className="text-sm text-slate-400 mt-2">
            Read about my professional background, and leadership.
          </p>
        </Link>
        
        <Link
          to="/projects"
          className="p-6 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-all text-left group"
        >
          <h3 className="text-lg font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">
            Featured Projects &rarr;
          </h3>
          <p className="text-sm text-slate-400 mt-2">
            Explore web apps, open-source work, and code samples.
          </p>
        </Link>

        <Link
          to="/technical-skills"
          className="p-6 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-all text-left group"
        >
          <h3 className="text-lg font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">
            Tech Stack &rarr;
          </h3>
          <p className="text-sm text-slate-400 mt-2">
            View languages, frameworks, and developer tools I work with daily.
          </p>
        </Link>

        
      </div>

      {/* Quick Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
        <a
          href="https://www.linkedin.com/in/cass-braun/"
          target="_blank"
          rel="noreferrer"
          className=" flex flex-row gap-2 items-center px-6 py-3 rounded-md bg-cyan-500 text-slate-950 font-semibold border border-slate-700 hover:border-slate-500 transition-colors"
        >
          <FaLinkedin size={20} /> LinkedIn
        </a>
        <a
          href="https://github.com/cass-braun"
          target="_blank"
          rel="noreferrer"
          className=" flex flex-row gap-2 items-center px-6 py-3 rounded-md bg-slate-800 text-slate-200 font-semibold border border-slate-700 hover:border-slate-500 transition-colors"
        >
          <FaGithub size={20} /> GitHub
        </a>
      </div>
    </section>
  );
}