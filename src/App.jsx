import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Shared Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingLogo from './components/layout/FloatingLogo';
import FloatingLogin from './components/layout/FloatingLogin';


import BlogPage from './components/blog/BlogPage';             // <-- Add this
import AcmNitkBlogPage from './components/blog/AcmNitkBlogPage';

// UI and Home Components
import Hero from './components/ui/Hero';
import OrbitShowcase from './components/ui/OrbitShowcase';
import About from './components/home/About';

// Page Components
import DocumentPage from './components/documents/DocumentPage';
import EventsPage from './components/events/EventsPage';

// --- DATA ARRAYS ---
const yantras = ["Sanganitra", "Karyavarta", "Vidyut", "Yantrika", "Sahiitya", "Abhivyakta", "Krutagnata"];

// --- HOME PAGE WRAPPER ---
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
      <OrbitShowcase title="Our Yantras" items={yantras} />
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

        {/* Global Nav & UI */}
        <FloatingLogo />
        <FloatingLogin />
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/documents" element={<DocumentPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/blog" element={<BlogPage />} />             {/* Main hub */}
          <Route path="/blog/acm-nitk" element={<AcmNitkBlogPage />} /> {/* Local blog */}
        </Routes>

        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;