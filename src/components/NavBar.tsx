import { Home } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { name: 'Experience', path: '/experience' },
  { name: 'Education', path: '/education' },
  { name: 'Projects', path: '/projects' },
  { name: 'Technical Skills', path: '/technical-skills' },
];

export default function NavBar() {
  return (
    <nav className="flex flex-row items-center justify-between w-full mx-auto px-6 py-4">
      <Link 
        to="/" 
        className="font-mono text-lg font-bold flex flex-row gap-4 items-center text-cyan-400 hover:text-cyan-300 transition-colors"
      >
        <Home/ >
        Cass Braun
      </Link>

      {/* Navigation Links */}
      <ul className="flex items-center gap-6 text-sm font-medium">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? 'text-cyan-400 font-semibold border-b-2 border-cyan-400 pb-1'
                  : 'text-slate-400 hover:text-slate-200 transition-colors pb-1'
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}