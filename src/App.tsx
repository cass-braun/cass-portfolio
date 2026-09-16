import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import {
  TechnicalSkillsPage,
  ProjectsPage,
} from './pages/Pages';
import HomePage from './pages/HomePage';
import ExperiencePage from './pages/ExperiencePage';
import EducationPage from './pages/EducationPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen w-full  text-slate-800 font-sans flex flex-col">
        {/* Basic Header wrapping the NavBar component */}
        <header className="border-b border-gray-300  backdrop-blur sticky top-0 z-50">
          <NavBar />
        </header>

        {/* Main Content Area Routing */}
        <main className="max-w-6xl w-full mx-auto px-6 py-8 flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/technical-skills" element={<TechnicalSkillsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}