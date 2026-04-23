import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from './ui/button';

const Hero = ({ personalInfo }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    // Mock download functionality
    window.open(personalInfo.resumeUrl, '_blank');
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl">
          {/* Name */}
          <h1 className="text-6xl md:text-8xl font-bold mb-8 text-white tracking-tight">
            {personalInfo.name}
          </h1>

          {/* Role & Tagline */}
          <div className="space-y-4 mb-12">
            <p className="text-xl md:text-2xl text-gray-400 font-light">
              {personalInfo.role}
            </p>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed">
              {personalInfo.tagline}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => scrollToSection('projects')}
              size="lg"
              variant="outline"
              className="border-gray-700 text-white hover:bg-white hover:text-black px-8 py-6 text-base transition-all"
            >
              View Work
              <ArrowRight className="ml-2" size={18} />
            </Button>
            <Button
              onClick={handleDownloadResume}
              size="lg"
              variant="outline"
              className="border-gray-700 text-white hover:bg-white hover:text-black px-8 py-6 text-base transition-all"
            >
              <Download className="mr-2" size={18} />
              Resume
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="mt-32">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-gray-400 transition-colors"
            >
              <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;