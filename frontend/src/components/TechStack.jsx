import React from 'react';
import { Card } from './ui/card';
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
            <p className="text-gray-500 text-lg">Technologies I work with</p>
          </div>

          {/* Tech Categories */}
          <div className="space-y-8">
            {Object.entries(groupedTech).map(([category, techs]) => (
              <Card
                key={category}
                className="bg-zinc-950 border-zinc-800 p-6 hover:border-gray-600 transition-all"
              >
                <h3 className="text-xl font-semibold text-white mb-4">
                  {categories[category]?.title || category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {techs.map((tech) => (
                    <Badge
                      key={tech.name}
                      className="bg-zinc-900 text-gray-300 border-gray-800 px-4 py-2 text-sm hover:bg-zinc-800 transition-colors cursor-default"
                    >
                      {tech.name}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;