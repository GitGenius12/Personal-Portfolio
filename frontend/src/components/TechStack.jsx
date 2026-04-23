import React from 'react';

const TechStack = ({ technologies }) => {
  return (
    <section id="tech-stack" className="py-24 bg-black border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-3">
              Technologies
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              Some of the tools and technologies I work with regularly
            </p>
          </div>

          {/* Simple Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 sm:gap-x-8 gap-y-3 sm:gap-y-4">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base py-2"
              >
                • {tech.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;