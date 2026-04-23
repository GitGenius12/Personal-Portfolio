import React from 'react';
import { Heart } from 'lucide-react';

const Footer = ({ personalInfo }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-zinc-900 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left - Copyright */}
          <div className="text-slate-400 text-sm">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </div>

          {/* Center - Made with love */}
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <span>Made with</span>
            <Heart className="text-cyan-400" size={16} fill="currentColor" />
            <span>by {personalInfo.name.split(' ')[0]}</span>
          </div>

          {/* Right - Quick Links */}
          <div className="flex gap-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
            >
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;