import React from 'react';
import { Github, ExternalLink, Bug } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'VillaNaKey',
      type: 'Flutter Project',
      description:
        'A comprehensive mobile application built with Flutter for villa booking and management. Features user authentication, booking system, and real-time notifications.',
      icon: <span className="text-4xl">📱</span>, // emoji untuk Flutter
      techStack: ['Flutter', 'Dart', 'Firebase'],
      githubUrl: 'https://github.com/NaufalFadhiil/villaNaKey.git',
      color: 'from-blue-400 to-blue-600',
      bgGradient: 'from-blue-500/20 to-purple-500/20',
    },
    {
      title: 'Testing API - Books',
      type: 'QA Project',
      description:
        'Comprehensive API testing project using Fake REST API for books management. Includes test cases, documentation, and automated testing scenarios.',
      icon: <Bug className="w-8 h-8" />, // icon bug untuk QA
      techStack: ['Postman', 'Google Spreadsheet', 'Google Docs'],
      driveUrl:
        'https://drive.google.com/drive/folders/1YK7xKnHyPtaA9BrrUs3foOyAZwNUNnBV?usp=sharing',
      color: 'from-green-400 to-green-600',
      bgGradient: 'from-green-500/20 to-teal-500/20',
    },
  ];

  // Pisahkan QA & Flutter
  const qaProjects = projects.filter((p) => p.type.includes('QA'));
  const flutterProjects = projects.filter((p) => p.type.includes('Flutter'));

  const renderCard = (project, index) => (
    <div
      key={project.title}
      className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20 hover:scale-105 animate-slide-up overflow-hidden"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      {/* Background Gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div
            className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${project.color} group-hover:scale-110 transition-transform duration-300`}
          >
            <div className="text-orange">{project.icon}</div>
          </div>
          <span className="px-3 py-1 bg-orange-500/20 text-orange text-sm font-medium rounded-full border border-orange-500/30">
            {project.type}
          </span>
        </div>

        {/* Project Info */}
        <h3 className="text-2xl font-bold text-orange mb-4 group-hover:text-orange-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full border border-gray-600/50 group-hover:border-orange-500/30 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex items-center">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-orange-500/25 group/btn"
            >
              <Github className="mr-2 h-5 w-5 group-hover/btn:rotate-12 transition-transform duration-300" />
              View Code
            </a>
          )}
          {project.driveUrl && (
            <a
              href={project.driveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-orange-500/25 group/btn"
            >
              <ExternalLink className="mr-2 h-5 w-5 group-hover/btn:rotate-12 transition-transform duration-300" />
              View Project
            </a>
          )}
        </div>
      </div>

      {/* Hover Animation */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </div>
  );

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-orange mb-4">
            Featured{' '}
            <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of my development and testing expertise
          </p>
        </div>

        {/* Grid: kiri QA, kanan Flutter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            {qaProjects.map((p, i) => renderCard(p, i))}
          </div>
          <div className="space-y-8">
            {flutterProjects.map((p, i) => renderCard(p, i))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
