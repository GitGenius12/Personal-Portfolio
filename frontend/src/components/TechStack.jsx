import React from 'react';

const TechStack = ({ technologies }) => {
  // Separate main stack and other technologies
  const mainStack = ['TypeScript', 'NestJS', 'Node.js', 'PostgreSQL', 'React'];
  const isMainTech = (techName) => mainStack.includes(techName);

  return (
    <section id="tech-stack" className="py-32 bg-black border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-20">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              tech i work with
            </h2>
            <p className="text-xl text-gray-500 font-light">
              here's what i use to build stuff
            </p>
          </div>

          {/* Main Stack - Large Pills */}
          <div className="mb-16">
            <p className="text-sm text-gray-600 mb-6 uppercase tracking-wider">main stack</p>
            <div className="flex flex-wrap gap-4">
              {technologies
                .filter((tech) => isMainTech(tech.name))
                .map((tech) => (
                  <div
                    key={tech.name}
                    className="group relative px-8 py-5 bg-white text-black rounded-2xl text-xl font-medium hover:scale-105 transition-transform cursor-default"
                  >
                    {tech.name}
                    <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                  </div>
                ))}
            </div>
          </div>

          {/* All Technologies - Creative Grid */}
          <div className="mb-16">
            <p className="text-sm text-gray-600 mb-6 uppercase tracking-wider">everything else</p>
            <div className="flex flex-wrap gap-3">
              {technologies
                .filter((tech) => !isMainTech(tech.name))
                .map((tech, index) => (
                  <div
                    key={tech.name}
                    className="px-6 py-3 border border-zinc-800 rounded-full text-gray-400 hover:text-white hover:border-gray-600 transition-all cursor-default text-base"
                    style={{
                      animationDelay: `${index * 50}ms`,
                    }}
                  >
                    {tech.name}
                  </div>
                ))}
            </div>
          </div>

          {/* Visual Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-zinc-900">
            <div className="group">
              <div className="mb-3">
                <span className="text-6xl font-bold text-white group-hover:text-gray-300 transition-colors">
                  18+
                </span>
              </div>
              <p className="text-gray-500">
                technologies in my toolkit
              </p>
            </div>
            <div className="group">
              <div className="mb-3">
                <span className="text-6xl font-bold text-white group-hover:text-gray-300 transition-colors">
                  5+
                </span>
              </div>
              <p className="text-gray-500">
                core stack i use daily
              </p>
            </div>
            <div className="group">
              <div className="mb-3">
                <span className="text-6xl font-bold text-white group-hover:text-gray-300 transition-colors">
                  100%
                </span>
              </div>
              <p className="text-gray-500">
                production-ready and battle-tested
              </p>
            </div>
          </div>

          {/* Quick Summary */}
          <div className="mt-20 p-8 border border-zinc-800 rounded-2xl">
            <p className="text-lg text-gray-400 leading-relaxed">
              i'm most comfortable with <span className="text-white font-medium">typescript</span> and{' '}
              <span className="text-white font-medium">node.js</span> for backend work, using{' '}
              <span className="text-white font-medium">postgresql</span> when i need reliability and{' '}
              <span className="text-white font-medium">mongodb</span> when i need flexibility.{' '}
              <span className="text-white font-medium">nestjs</span> is my go-to framework for building scalable apis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;