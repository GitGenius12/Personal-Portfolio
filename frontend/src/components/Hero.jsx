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
    window.open(personalInfo.resumeUrl, '_blank');
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-start relative overflow-hidden bg-black">
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl">
          {/* Greeting */}
          <p className="text-gray-500 text-lg mb-8 font-light">hey there 👋</p>

          {/* Main Content */}
          <div className="space-y-6 mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-light text-white leading-tight">
              i build <span className="font-normal">backend systems</span> that don't 
              <br className="hidden sm:block" />
              crash at 3am when traffic spikes
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-500 font-light max-w-3xl leading-relaxed">
              currently at <span className="text-white">fitpage</span>, making postgresql sing and apis run fast. 
              i write code that scales, debug things that break, and occasionally refactor stuff that works just fine.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="bg-white hover:bg-gray-200 text-black px-6 py-5 text-base font-medium"
            >
              view work
              <ArrowRight className="ml-2" size={18} />
            </Button>
            <Button
              onClick={handleDownloadResume}
              size="lg"
              variant="outline"
              className="border-gray-800 text-gray-400 hover:text-white hover:border-gray-600 px-6 py-5 text-base font-medium"
            >
              <Download className="mr-2" size={18} />
              resume
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              variant="ghost"
              className="text-gray-400 hover:text-white px-6 py-5 text-base font-medium"
            >
              let's talk →
            </Button>
          </div>

          {/* Quick Stats/Tags */}
          <div className="mt-16 flex flex-wrap gap-3">
            <span className="px-4 py-2 border border-gray-800 rounded-full text-gray-500 text-sm">nestjs</span>
            <span className="px-4 py-2 border border-gray-800 rounded-full text-gray-500 text-sm">postgresql</span>
            <span className="px-4 py-2 border border-gray-800 rounded-full text-gray-500 text-sm">node.js</span>
            <span className="px-4 py-2 border border-gray-800 rounded-full text-gray-500 text-sm">typescript</span>
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