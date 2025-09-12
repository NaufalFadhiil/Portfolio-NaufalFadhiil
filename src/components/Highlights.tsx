import React from 'react';
import { Trophy, Star, Users, Calendar, Award } from 'lucide-react'; // Tambahkan Award jika Anda ingin mengganti ikon

const Highlights = () => {
  const highlights = [
    {
      title: 'Best Staff of Public Relation',
      description:
        'Awarded as the Best Staff of Public Relations for the GDSC Widyatama 2023-2024 period, recognizing my commitment and effective contribution to community engagement and communication.',
      icon: <Award className="w-6 h-6" />,
      date: '2023-2024',
      color: 'from-orange-400 to-orange-600',
      certificateUrl:
        'https://drive.google.com/file/d/19pwTcUrBfYrebU2xNyBFfhN_viezjpsd/view?usp=sharing',
    },
  ];

  const renderCard = (item, index) => (
    <div
      key={item.title}
      className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-orange-500/20 hover:scale-105 animate-slide-up relative overflow-hidden"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div
            className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${item.color} group-hover:scale-110 transition-transform duration-300 shadow-lg`}
          >
            <div className="text-white">{item.icon}</div>
          </div>
          <span className="text-orange-400 font-medium text-sm">
            {item.date}
          </span>
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
          {item.title}
        </h3>
        <p className="text-gray-300 leading-relaxed flex-grow">
          {item.description}
        </p>

        {/* Tombol untuk membuka sertifikat */}
        {item.certificateUrl && (
          <div className="mt-6">
            <a
              href={item.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-orange-500/25 group/btn"
            >
              <Trophy className="mr-2 h-5 w-5" />
              View Certificate
            </a>
          </div>
        )}
      </div>

      {/* Hover Border Effect */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </div>
  );

  return (
    <section id="highlights" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My{' '}
            <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">
              Highlights
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Milestones and accomplishments that define my professional journey
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="flex justify-center items-center">
          {/* Hanya render satu card di tengah */}
          {highlights.map((item, index) => renderCard(item, index))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-full text-orange-400 font-medium backdrop-blur-sm">
            <Trophy className="mr-2 h-5 w-5" />
            Always striving for excellence and continuous improvement
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
