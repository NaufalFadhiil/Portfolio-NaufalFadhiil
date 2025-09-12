import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'BEKUP Create: Upskilling Bootcamp 2025 by Dicoding',
      position: 'Flutter Developer - Cohort',
      period: 'Jul 2025 – Now',
      location: 'Remote',
      description:
        'Developing mobile applications using Flutter framework with focus on user experience and performance optimization.',
      current: true,
    },
    {
      company: 'GDG on Campus Widyatama University',
      position: 'Lead of Event Organizer',
      period: 'Sep 2024 – Jul 2025',
      duration: '11 months',
      location: 'Bandung, Indonesia',
      description:
        'Leading event organization initiatives, coordinating tech workshops, and managing community engagement activities.',
      community: true,
    },
    {
      company: 'GDG on Campus Widyatama University',
      position: 'Staff of Public Relations',
      period: 'Sep 2023 – Aug 2024',
      duration: '1 year',
      location: 'Bandung, Indonesia',
      description:
        'Managing public relations activities, content creation, and community outreach programs for the developer community.',
      community: true,
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-orange mb-4">
            My{' '}
            <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">
              Experience
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A journey through my professional growth and contributions
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-orange-400 to-transparent"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-20 animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-6 w-4 h-4 rounded-full border-2 ${
                    exp.current
                      ? 'bg-orange-500 border-orange-400 shadow-lg shadow-orange-500/50'
                      : 'bg-gray-700 border-orange-500'
                  }`}
                >
                  {exp.current && (
                    <div className="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-75"></div>
                  )}
                </div>

                {/* Experience Card */}
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-orange-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {exp.position}
                      </h3>
                      <p className="text-orange-400 font-semibold">
                        {exp.company}
                      </p>
                    </div>

                    {/* Badge */}
                    {exp.current && (
                      <span className="inline-block mt-2 md:mt-0 px-3 py-1 bg-orange-500/20 text-orange-500 text-sm font-medium rounded-full border border-orange-500/30 shadow-[0_0_10px_rgba(249,115,22,0.7)]">
                        Current
                      </span>
                    )}
                    {exp.community && (
                      <span className="inline-block mt-2 md:mt-0 px-3 py-1 bg-orange-600/20 text-orange-400 text-sm font-medium rounded-full border border-orange-500/30">
                        Community
                      </span>
                    )}
                  </div>

                  {/* Period and Location */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 text-gray-400">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      <span>{exp.period}</span>
                      {exp.duration && (
                        <span className="ml-2 text-orange-400">
                          ({exp.duration})
                        </span>
                      )}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
