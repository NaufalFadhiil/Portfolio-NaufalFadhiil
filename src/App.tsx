import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Achievements from './components/Highlights';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';

function App() {
  useEffect(() => {
    // Set page title
    document.title =
      'Naufal Fadhiil - Portfolio | Junior QA & Flutter Developer';

    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-x-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-orange-600/3 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Experience />
        <TechStack />
        <Projects />
        <Achievements />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
