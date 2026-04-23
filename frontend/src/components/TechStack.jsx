import React from 'react';
import { Badge } from './ui/badge';

const TechStack = ({ technologies }) => {
  const categories = {
    language: { title: 'Languages', color: 'cyan' },
    backend: { title: 'Backend', color: 'blue' },
    frontend: { title: 'Frontend', color: 'purple' },
    database: { title: 'Database', color: 'green' },
    devops: { title: 'DevOps', color: 'orange' }
  };

  const groupedTech = technologies.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = [];
    }
    acc[tech.category].push(tech);
    return acc;
  }, {});

  return (
    <section id="tech-stack" className="py-20 bg-black border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Tech Stack
            </h2>
            <div className="w-16 h-0.5 bg-gray-700 mb-4"></div>
            <p className="text-gray-500 text-lg">technologies i work with</p>
          </div>

          {/* Tech Grid - Simplified */}
          <div className="space-y-12">
            {Object.entries(groupedTech).map(([category, techs]) => (
              <div key={category}>
                <h3 className="text-sm font-medium text-gray-600 mb-4 uppercase tracking-wider">
                  {categories[category]?.title || category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {techs.map((tech) => (
                    <span
                      key={tech.name}
                      className="px-5 py-2.5 bg-zinc-950 border border-zinc-800 rounded-lg text-gray-300 text-base hover:border-gray-700 hover:bg-zinc-900 transition-all cursor-default"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="mt-16 pt-16 border-t border-zinc-900">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <p className="text-3xl font-bold text-white mb-1">18+</p>
                <p className="text-gray-500 text-sm">Technologies</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white mb-1">5</p>
                <p className="text-gray-500 text-sm">Main Stack</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white mb-1">Backend</p>
                <p className="text-gray-500 text-sm">Specialization</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white mb-1">Production</p>
                <p className="text-gray-500 text-sm">Ready</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;