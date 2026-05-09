import React from 'react';

const Footer = ({ personalInfo }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-zinc-900 py-5 sm:py-6 md:py-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between sm:gap-4">
          <div className="text-slate-500 text-xs sm:text-sm text-center sm:text-left">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </div>
          {/* <div className="flex gap-5 sm:gap-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors text-xs sm:text-sm"
            >
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors text-xs sm:text-sm"
            >
              LinkedIn
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
