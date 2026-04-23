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
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl top-20 -left-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl bottom-20 -right-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated greeting */}
          <div className="inline-block mb-4 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
            <span className="text-cyan-400 text-sm font-medium">Welcome to my portfolio</span>
          </div>

          {/* Name with gradient */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent animate-fade-in">
            {personalInfo.name}
          </h1>

          {/* Role */}
          <h2 className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-6">
            {personalInfo.role}
          </h2>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            {personalInfo.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 text-lg group transition-all hover:scale-105"
            >
              View My Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button
              onClick={handleDownloadResume}
              size="lg"
              variant="outline"
              className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6 text-lg group transition-all hover:scale-105"
            >
              <Download className="mr-2 group-hover:translate-y-1 transition-transform" size={20} />
              Download Resume
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="mt-20 animate-bounce">
            <button
              onClick={() => scrollToSection('about')}
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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