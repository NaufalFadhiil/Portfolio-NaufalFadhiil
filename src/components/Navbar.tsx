import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = [
        'home',
        'experience',
        'techstack',
        'projects',
        'certifications',
        'contact',
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Tech Stack', href: '#techstack', id: 'techstack' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-gray-900/90 backdrop-blur-xl border-b border-orange-500/20 shadow-[0_0_10px_rgba(249,115,22,0.2)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative text-base md:text-lg font-semibold tracking-wide transition-all duration-300 group ${
                  activeSection === item.id
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
                style={{ outline: 'none', border: 'none' }}
              >
                {/* Text */}
                <span
                  className={`relative z-10 ${
                    activeSection === item.id
                      ? 'drop-shadow-[0_0_8px_rgba(249,115,22,0.7)]'
                      : ''
                  }`}
                >
                  {item.name}
                </span>

                {/* Hover / Active underline */}
                <div
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-orange-400 to-[#c7cad1] transform transition-all duration-300 origin-center ${
                    activeSection === item.id
                      ? 'w-full scale-x-100 shadow-lg shadow-orange-400/50'
                      : 'w-full scale-x-0 group-hover:scale-x-100'
                  }`}
                ></div>

                {/* Hover glow background */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/0 via-orange-400/10 to-orange-400/0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden absolute right-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-orange-400 transition-colors duration-300 p-2"
              style={{ outline: 'none', border: 'none' }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50 shadow-lg">
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left px-4 py-3 rounded-lg font-medium text-base transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-white bg-orange-500/20 border border-orange-500/30 drop-shadow-[0_0_8px_rgba(249,115,22,0.7)]'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                  }`}
                  style={{
                    outline: 'none',
                    border:
                      activeSection === item.id
                        ? '1px solid rgba(249, 115, 22, 0.3)'
                        : 'none',
                  }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
