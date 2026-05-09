import React, { useState } from 'react';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round"/>
  </svg>
);

const PREVIEW_LENGTH = 110;

const ProjectModal = ({ project, onClose }) => (
  <div
    className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
    onClick={onClose}
  >
    {/* Backdrop */}
    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

    {/* Modal — slides up from bottom on mobile, centered on sm+ */}
    <div
      className="relative bg-zinc-950 border border-white/10 rounded-t-2xl sm:rounded-2xl max-w-lg w-full p-5 sm:p-7 shadow-2xl"
      onClick={e => e.stopPropagation()}
    >
      {/* Drag handle for mobile */}
      <div className="sm:hidden w-10 h-1 bg-white/20 rounded-full mx-auto mb-4" />

      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-zinc-600 hover:text-white transition-colors p-1"
        aria-label="Close"
      >
        <CloseIcon />
      </button>

      <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 pr-8">{project.title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed mb-5 sm:mb-6">{project.description}</p>

      <div className="flex flex-wrap gap-1.5 mb-4 sm:mb-5">
        {project.technologies.map(tech => (
          <span key={tech} className="px-2.5 py-0.5 rounded-full text-xs text-zinc-500 border border-white/8 font-mono">
            {tech}
          </span>
        ))}
      </div>

      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xs text-zinc-500 hover:text-white transition-colors font-mono"
        >
          <GithubIcon />
          View on GitHub
        </a>
      )}
    </div>
  </div>
);

const Projects = ({ projects }) => {
  const [modal, setModal] = useState(null);

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-28 bg-black border-t border-zinc-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <p className="text-gray-500 text-xs sm:text-sm font-mono tracking-widest mb-3 sm:mb-4">
            <span className="text-gray-600">// </span>PROJECTS
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-3 leading-tight">
            Things I've Built.
          </h2>
          <p className="text-gray-500 text-base sm:text-lg mb-10 sm:mb-16">
            A selection of projects across backend systems, AI tools, and web apps.
          </p>

          {/* Projects Grid — 1 col mobile, 2 col sm, 3 col lg */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
            {projects.map((project, i) => {
              const isLong = project.description.length > PREVIEW_LENGTH;
              const preview = isLong
                ? project.description.slice(0, PREVIEW_LENGTH).trimEnd() + '…'
                : project.description;

              return (
                <div
                  key={project.id}
                  className="relative bg-black p-5 sm:p-8 flex flex-col gap-4 sm:gap-5 group transition-colors duration-200 hover:bg-zinc-950"
                >
                  {/* Number */}
                  <span className="text-xs font-mono text-zinc-700 tracking-widest">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Image */}
                  <div className="relative h-44 sm:h-56 rounded-xl overflow-hidden bg-zinc-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  {/* Title row */}
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base sm:text-lg font-bold text-white leading-tight">{project.title}</h3>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-white/10 text-zinc-500 hover:text-white hover:border-white/30 transition-all duration-200 mt-0.5"
                        aria-label="View Code"
                      >
                        <ArrowIcon />
                      </a>
                    )}
                  </div>

                  {/* Description preview */}
                  <div className="text-zinc-500 text-sm leading-relaxed flex-1">
                    {preview}
                    {isLong && (
                      <button
                        onClick={() => setModal(project)}
                        className="ml-1.5 text-zinc-400 hover:text-white text-xs font-mono transition-colors"
                      >
                        read more →
                      </button>
                    )}
                  </div>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-white/5">
                    {project.technologies.map(tech => (
                      <span key={tech} className="px-2.5 py-0.5 rounded-full text-xs text-zinc-500 border border-white/8 font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* GitHub link */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs text-zinc-600 hover:text-white transition-colors duration-200 font-mono"
                    >
                      <GithubIcon />
                      View on GitHub
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal */}
      {modal && <ProjectModal project={modal} onClose={() => setModal(null)} />}
    </section>
  );
};

export default Projects;
