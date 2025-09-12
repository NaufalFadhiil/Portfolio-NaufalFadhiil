import React, { useState } from 'react';
import { ChevronDown, ExternalLink, Award } from 'lucide-react';

const Certifications = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const certifications = [
    {
      title: 'Belajar Membuat Aplikasi Flutter untuk Pemula',
      issuer: 'Dicoding Indonesia',
      date: 'July 2025',
      description:
        'Comprehensive certification covering Flutter framework, Dart programming language, state management, and mobile app deployment strategies.',
      skills: ['Flutter', 'Dart', 'Mobile Development', 'State Management'],
      link: 'https://www.dicoding.com/certificates/0LZ05DN33X65',
    },
    {
      title: 'Memulai Pemrograman dengan Dart',
      issuer: 'Dicoding Indonesia',
      date: 'Jul 2025',
      description:
        'Certification in fundamental Dart programming, including hands-on experience with variables, data types, control flow, collections, and OOP, culminated in a final project.',
      skills: ['Flutter', 'Dart', 'Mobile Development'],
      link: 'https://www.dicoding.com/certificates/RVZKG4L3QXD5',
    },
    {
      title: 'Memulai Dasar Pemrograman untuk Menjadi Pengembang Software',
      issuer: 'Dicoding Indonesia',
      date: 'July 2025',
      description:
        'A 9-hour certification in front-end software development, focusing on the fundamentals of HTML, CSS, and JavaScript for modifying software applications based on user requirements.',
      skills: ['SDLC', 'HTML & CSS', 'JavaScript'],
      link: 'https://www.dicoding.com/certificates/KEXL24480ZG2',
    },
    {
      title: 'Belajar Dasar Git dengan GitHub',
      issuer: 'Dicoding Indonesia',
      date: 'Mei 2025',
      description:
        'Certification in Git and GitHub for developers, mastering practical skills from managing personal repositories to collaborating effectively with a team on a shared codebase.',
      skills: ['Project Management', 'Git', 'Github'],
      link: 'https://www.dicoding.com/certificates/72ZD5NMDLZYW',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">
              Certifications
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Professional credentials that validate my expertise and commitment
            to continuous learning
          </p>
        </div>

        {/* Certifications Accordion */}
        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:border-orange-500/30 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-orange-500/5 transition-colors duration-300 group"
              >
                <div className="flex items-center flex-1">
                  <div className="inline-flex p-2 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-orange-400 transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 group-hover:text-orange-400 transition-all duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              {/* Accordion Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 border-t border-gray-700/30">
                  <div className="pt-4">
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {cert.description}
                    </p>

                    {/* Skills */}
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">
                        Key Skills:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-orange-500/20 text-orange-400 text-sm rounded-full border border-orange-500/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* View Certificate Link */}
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-orange-500/25 text-sm group/link"
                    >
                      <ExternalLink className="mr-2 h-4 w-4 group-hover/link:rotate-12 transition-transform duration-300" />
                      View Certificate
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-gray-400">
            Continuously expanding my knowledge through professional development
            and industry-recognized certifications
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
