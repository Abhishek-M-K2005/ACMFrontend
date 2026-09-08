import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Shared Layout & UI
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingLogo from './components/layout/FloatingLogo';
import FloatingLogin from './components/layout/FloatingLogin';
import Hero from './components/ui/Hero';
import OrbitShowcase from './components/ui/OrbitShowcase'; // <-- Imported the new Orbit UI

// Page Components
import About from './components/home/About';
import DocumentViewer from './components/documents/DocumentViewer';

// --- DATA ARRAYS ---
const yantras = ["Sanganitra", "Karyavarta", "Vidyut", "Yantrika", "Sahitya", "Abhivyakta", "Krutagnata"];
const techStack = ["React", "Tailwind CSS", "Framer Motion", "Node.js", "MongoDB", "Vite", "Figma", "AWS"];

// --- PAGE WRAPPERS ---

function HomePage() {
  return (
    <main className="flex-grow w-full">
      <Hero>
        <span className="text-3xl md:text-4xl lg:text-5xl font-semibold text-brand-navy dark:text-white transition-colors duration-300">
          Building the community in
        </span>
        <div className="flex items-baseline justify-center">
          <span className="text-3xl md:text-4xl lg:text-5xl font-semibold text-brand-navy dark:text-white transition-colors duration-300 mr-3">the</span>
          <span className="text-6xl md:text-8xl lg:text-9xl font-black text-brand-blue drop-shadow-[0_0_30px_rgba(108,180,238,0.3)] dark:drop-shadow-[0_0_30px_rgba(108,180,238,0.6)]">
            ACM
          </span>
          <span className="text-3xl md:text-4xl lg:text-5xl font-semibold text-brand-navy dark:text-white transition-colors duration-300 ml-2">-way</span>
        </div>
      </Hero>
      
      <About />
      
      {/* Replaced Parallax with Orbit */}
      <OrbitShowcase title="Our Yantras" items={yantras} />
    </main>
  );
}

function DocumentPage() {
  const dummyProject = {
    title: "Sanganitra Phase 1",
    thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2000&auto=format&fit=crop",
    mentors: "Dr. Smith, Prof. Johnson",
    members: "Alice (Lead), Bob (Backend), Charlie (UI/UX)",
    duration: "6",
    introduction: "This proposal outlines the architecture and execution plan for Sanganitra Phase 1...",
  };

  return (
    <main className="flex-grow w-full">
      <Hero>
        <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-brand-navy dark:text-white mb-2 transition-colors duration-300">
          Explore our
        </span>
        <span className="text-5xl md:text-7xl lg:text-8xl font-black text-brand-blue drop-shadow-[0_0_30px_rgba(108,180,238,0.3)] dark:drop-shadow-[0_0_30px_rgba(108,180,238,0.6)]">
          Documents
        </span>
      </Hero>

      {/* Replaced Parallax with Orbit */}
      <OrbitShowcase title="Powered By" items={techStack} />

      <DocumentViewer project={dummyProject} />
    </main>
  );
}

// --- MAIN APP ---

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="relative min-h-screen flex flex-col w-full overflow-x-hidden bg-white dark:bg-black transition-colors duration-300">
        <FloatingLogo />
        <FloatingLogin />
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/documents" element={<DocumentPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;