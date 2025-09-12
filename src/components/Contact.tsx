import React from 'react';
// Pastikan Mail dan Send tetap diimpor untuk tombol-tombol
import { Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <img src="/logos/gmail.svg" alt="Gmail Logo" className="w-6 h-6" />,
      label: 'Email',
      value: 'naufalfadhiil2206@gmail.com',
      href: 'https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=naufalfadhiil2206@gmail.com',
      color: 'from-white-200 to-white-300',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'Gedebage, Kota Bandung, Indonesia',
      href: '#',
      color: 'from-green-400 to-green-600',
    },
    {
      icon: (
        <img
          src="/logos/whatsapp.svg"
          alt="WhatsApp Logo"
          className="w-6 h-6"
        />
      ),
      label: 'WhatsApp',
      value: '+62 882-2280-6459',
      href: 'https://wa.me/6288222806459',
      color: 'from-green-400 to-green-600',
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact{' '}
            <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">
              Information
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Let's connect and discuss opportunities, projects, or just have a
            conversation about technology
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((contact, index) => (
            <div
              key={contact.label}
              className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-orange-500/20 hover:scale-105 text-center animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div
                className={`inline-flex p-4 rounded-full bg-gradient-to-br ${contact.color} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                {/* Hapus class text-white dari sini */}
                <div className="">{contact.icon}</div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                {contact.label}
              </h3>
              <p className="text-gray-300 mb-6">{contact.value}</p>

              {/* Action Button */}
              {contact.href !== '#' && (
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-orange-500/25 text-sm group/btn"
                >
                  <Send className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                  {contact.label === 'Email' ? 'Send Email' : 'Contact Now'}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/30 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborative
              projects, or sharing insights about Flutter development and
              quality assurance.
            </p>
            <a
              href="https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=naufalfadhiil2206@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-orange-500/25 hover:scale-105 group"
            >
              {/* Ikon Mail di sini tetap dibutuhkan, jadi impornya harus ada */}
              <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
