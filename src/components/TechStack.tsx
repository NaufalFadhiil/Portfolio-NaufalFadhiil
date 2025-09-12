import React from 'react';

const TechStack = () => {
  const qaTechnologies = [
    {
      name: 'Postman',
      icon: '/logos/postman.svg',
      category: 'API Testing',
      color: 'from-orange-400 to-orange-600',
    },
    {
      name: 'Google Spreadsheet',
      icon: '/logos/spreadsheets.svg',
      category: 'Data Management',
      color: 'from-green-400 to-green-600',
    },
    {
      name: 'Google Docs',
      icon: '/logos/docs.svg',
      category: 'Documentation',
      color: 'from-blue-400 to-blue-600',
    },
    {
      name: 'Notion',
      icon: '/logos/notion.svg',
      category: 'Project Management',
      color: 'from-gray-400 to-gray-600',
    },
  ];

  const flutterTechnologies = [
    {
      name: 'Flutter',
      icon: '/logos/flutter.svg',
      category: 'Mobile Development',
      color: 'from-blue-400 to-blue-600',
    },
    {
      name: 'Dart',
      icon: '/logos/dart.svg',
      category: 'Programming Language',
      color: 'from-cyan-400 to-cyan-600',
    },
    {
      name: 'Firebase',
      icon: '/logos/firebase.svg',
      category: 'Backend as a Service',
      color: 'from-yellow-400 to-orange-500',
    },
  ];

  const renderCard = (tech, index) => (
    <div
      key={tech.name}
      className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 
                 hover:border-orange-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10 
                 hover:scale-105 animate-slide-up relative"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Icon */}
      <div
        className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${tech.color} mb-4 
                    group-hover:scale-110 transition-transform duration-300`}
      >
        <img src={tech.icon} alt={`${tech.name} Logo`} className="w-8 h-8" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
        {tech.name}
      </h3>
      <p className="text-gray-400 text-sm">{tech.category}</p>

      {/* Hover Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 
                   rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      ></div>
    </div>
  );

  return (
    <section id="techstack" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tech Stack{' '}
            <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">
              I Use
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tools and technologies that power my development and testing
            workflow
          </p>
        </div>

        {/* Outer Card */}
        <div className="relative bg-gray-800/30 backdrop-blur-md border border-gray-700/50 rounded-2xl p-10">
          {/* Divider Line in Middle */}
          {/* Tambahkan hidden dan md:block untuk menyembunyikan pada mobile */}
          <div className="hidden md:block absolute top-8 bottom-8 left-1/2 w-0.5 bg-white/40 shadow-[0_0_10px_rgba(255,255,255,0.7)]"></div>

          {/* 2 Columns: QA vs Flutter */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* QA Column */}
            <div>
              <h3 className="text-2xl font-bold text-orange-400 mb-6">
                QA Stack
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {qaTechnologies.map((tech, index) => renderCard(tech, index))}
              </div>
            </div>

            {/* Flutter Column */}
            <div>
              <h3 className="text-2xl font-bold text-orange-400 mb-6">
                Flutter Stack
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {flutterTechnologies.map((tech, index) =>
                  renderCard(tech, index)
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-lg">
            Always learning and exploring new technologies to stay current with
            industry trends
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
