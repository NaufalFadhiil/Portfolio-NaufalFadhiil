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
            Junior Manual QA
          </a>{' '}
          |{' '}
          <a
            href="#projects"
            className="font-semibold job-tag px-2 rounded cursor-pointer"
          >
            Flutter Developer
          </a>
        </h2>

        {/* Education */}
        <p className="text-lg text-gray-400 mb-12 animate-slide-up delay-300">
          Informatics Engineering (2023–2027) | Widyatama University
        </p>

        {/* Short Bio */}
        <p className="text-base md:text-lg text-white mb-20 animate-slide-up delay-400">
          Passionate about software quality, ensuring reliable applications, and
          eager to grow as a QA Engineer and Developer.
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
