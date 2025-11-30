import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToExperience = () => {
    const element = document.querySelector('#experience');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Open to Work Badge */}
        <div className="mb-8 animate-fade-in">
          <a
            href="#contact"
            className="inline-block px-6 py-2 rounded-full text-sm font-semibold text-[#5CE65C] border border-[#5CE65C]/50 backdrop-blur-sm animate-glow-green transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_#5CE65C]"
          >
            Open to Work
          </a>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
          Hi, I'm{' '}
          <span className="relative inline-block text-transparent bg-gradient-to-r from-orange-400 to-[#c7cad1] bg-clip-text transition duration-500 ease-out hover:scale-105">
            Naufal Fadhiil
          </span>
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl md:text-2xl text-gray-300 mb-4 animate-slide-up delay-200">
          <a
            href="#projects"
            className="font-semibold job-tag px-2 rounded cursor-pointer"
          >
            Software Testing / Junior Manual QA
          </a>{' '}
          |{' '}
          <a
            href="#projects"
            className="font-semibold job-tag px-2 rounded cursor-pointer"
          >
            Mobile Apps Developer
          </a>
        </h2>

        {/* Education */}
        <p className="text-lg text-gray-400 mb-12 animate-slide-up delay-300">
          Informatics Engineering (2023–2027) | Widyatama University
        </p>

        {/* Short Bio */}
        <p className="text-base md:text-lg text-white mb-20 animate-slide-up delay-400">
          Passionate about Software Quality, ensuring reliable applications, and eager to grow as a Quality Assurance Engineer and Apps Developer.
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 mb-12 animate-slide-up delay-400">
          {/* GitHub */}
          <a
            href="https://github.com/NaufalFadhiil"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 relative group bg-gradient-to-tr from-gray-800 to-gray-700
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-7 h-7"
            >
              <path
                fillRule="evenodd"
                d="M12 0C5.372 0 0 5.372 0 12c0 5.303 
        3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 
        0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 
        1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 
        3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 
        0-1.31.467-2.382 1.235-3.22-.124-.303-.536-1.527.117-3.176 
        0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 
        2.045.138 3.003.404 2.29-1.552 3.297-1.23 
        3.297-1.23.655 1.649.243 2.873.12 3.176.77.838 
        1.233 1.91 1.233 3.22 0 4.61-2.805 5.624-5.475 
        5.92.43.37.823 1.102.823 2.222 
        0 1.606-.015 2.898-.015 3.293 
        0 .319.218.694.825.576C20.565 21.796 
        24 17.3 24 12c0-6.628-5.372-12-12-12Z"
              />
            </svg>
            {/* Gradient border on hover */}
            <span className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-orange-500 group-hover:shadow-[0_0_15px_rgba(249,115,22,0.6)] transition-all duration-300"></span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/naufal-fadhiil"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 relative group bg-gradient-to-tr from-gray-800 to-gray-700
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-7 h-7"
            >
              <path
                d="M4.98 3.5a2.5 2.5 0 1 0 0 5.001 2.5 2.5 0 0 0 0-5ZM2 8.5h3.96V21H2V8.5Zm7.5 0h3.7v1.7h.05c.52-.98 1.78-2 3.67-2 
            3.92 0 4.64 2.58 4.64 5.94V21h-3.96v-5.6c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95V21H9.5V8.5Z"
              />
            </svg>
            {/* Gradient border on hover */}
            <span className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-orange-500 group-hover:shadow-[0_0_15px_rgba(249,115,22,0.6)] transition-all duration-300"></span>
          </a>

          {/* INSTAGRAM (Diperbaiki: menggunakan path data SVG yang benar) */}
          <a
            href="https://www.instagram.com/nopnau/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 relative group bg-gradient-to-tr from-gray-800 to-gray-700
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-7 h-7"
            >
              <path 
                d="M12 0C8.75 0 8.35 0 7.18 0.05C5.8 0.11 4.8 0.53 3.96 0.86C3.12 1.2 2.37 1.73 1.73 2.37C1.09 3.01 0.56 3.76 0.23 4.6C-0.1 5.44 -0.5 6.44 -0.55 7.82C-0.6 8.99 -0.6 9.35 -0.6 12C-0.6 14.65 -0.6 15.01 -0.55 16.18C-0.5 17.56 -0.1 18.56 0.23 19.4C0.56 20.24 1.09 20.99 1.73 21.63C2.37 22.27 3.12 22.8 3.96 23.13C4.8 23.47 5.8 23.89 7.18 23.95C8.35 24 8.75 24 12 24C15.25 24 15.65 24 16.82 23.95C18.2 23.89 19.2 23.47 20.04 23.13C20.88 22.8 21.63 22.27 22.27 21.63C22.91 20.99 23.44 20.24 23.77 19.4C24.1 18.56 24.5 17.56 24.55 16.18C24.6 15.01 24.6 14.65 24.6 12C24.6 9.35 24.6 8.99 24.55 7.82C24.5 6.44 24.1 5.44 23.77 4.6C23.44 3.76 22.91 3.01 22.27 2.37C21.63 1.73 20.88 1.2 20.04 0.86C19.2 0.53 18.2 0.11 16.82 0.05C15.65 0 15.25 0 12 0ZM12 2.2C14.8 2.2 15.15 2.2 16.3 2.25C17.38 2.3 17.9 2.5 18.3 2.7C18.7 2.9 19 3.2 19.3 3.5C19.6 3.8 19.9 4.1 20.1 4.5C20.3 4.9 20.5 5.42 20.55 6.5C20.6 7.65 20.6 8 20.6 12C20.6 16 20.6 16.35 20.55 17.5C20.5 18.58 20.3 19.1 20.1 19.5C19.9 19.9 19.6 20.2 19.3 20.5C19 20.8 18.7 21.1 18.3 21.3C17.9 21.5 17.38 21.7 16.3 21.75C15.15 21.8 14.8 21.8 12 21.8C9.2 21.8 8.85 21.8 7.7 21.75C6.62 21.7 6.1 21.5 5.7 21.3C5.3 21.1 5 20.8 4.7 20.5C4.4 20.2 4.1 19.9 3.9 19.5C3.7 19.1 3.5 18.58 3.5 17.5C3.5 16.35 3.5 16 3.5 12C3.5 8 3.5 7.65 3.5 6.5C3.5 5.42 3.7 4.9 3.9 4.5C4.1 4.1 4.4 3.8 4.7 3.5C5 3.2 5.3 2.9 5.7 2.7C6.1 2.5 6.62 2.3 7.7 2.25C8.85 2.2 9.2 2.2 12 2.2ZM12 6.5C8.95 6.5 6.5 8.95 6.5 12C6.5 15.05 8.95 17.5 12 17.5C15.05 17.5 17.5 15.05 17.5 12C17.5 8.95 15.05 6.5 12 6.5ZM12 15.6C9.9 15.6 8.4 14.1 8.4 12C8.4 9.9 9.9 8.4 12 8.4C14.1 8.4 15.6 9.9 15.6 12C15.6 14.1 14.1 15.6 12 15.6ZM18.7 3.95C18.15 3.95 17.7 4.4 17.7 4.95C17.7 5.5 18.15 5.95 18.7 5.95C19.25 5.95 19.7 5.5 19.7 4.95C19.7 4.4 19.25 3.95 18.7 3.95Z" 
              />
            </svg>
            {/* Gradient border on hover */}
            <span className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-orange-500 group-hover:shadow-[0_0_15px_rgba(249,115,22,0.6)] transition-all duration-300"></span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToExperience}
          className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;