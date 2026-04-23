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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Tech <span className="text-cyan-400">Stack</span>
            </h2>
            <div className="w-20 h-1 bg-cyan-400 mx-auto mb-4"></div>
            <p className="text-slate-400 text-lg">Technologies I work with</p>
          </div>

          {/* Tech Categories */}
          <div className="space-y-8">
            {Object.entries(groupedTech).map(([category, techs]) => (
              <Card
                key={category}
                className="bg-zinc-950 border-zinc-800 p-6 hover:border-cyan-500/50 transition-all"
              >
                <h3 className="text-xl font-semibold text-white mb-4">
                  {categories[category]?.title || category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {techs.map((tech) => (
                    <Badge
                      key={tech.name}
                      className="bg-cyan-500/10 text-cyan-400 border-cyan-500/30 px-4 py-2 text-sm hover:bg-cyan-500/20 transition-colors cursor-default"
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