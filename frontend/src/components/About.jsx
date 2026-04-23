import React from 'react';
import { Code2, Database, Server, Zap } from 'lucide-react';
import { Card } from './ui/card';

const About = ({ about }) => {
  const highlights = [
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Backend Architecture',
      description: 'Scalable & high-performance systems'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Database Optimization',
      description: 'SQL query tuning & indexing'
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Clean Code',
      description: 'Maintainable & efficient solutions'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance',
      description: 'Low-latency, high-throughput APIs'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="text-cyan-400">Me</span>
            </h2>
            <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
          </div>

          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Description */}
            <div>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                {about.description}
              </p>
            </div>

            {/* Right - Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <Card
                  key={index}
                  className="bg-slate-900/50 border-slate-700 p-6 hover:border-cyan-500/50 transition-all hover:scale-105 group"
                >
                  <div className="text-cyan-400 mb-3 group-hover:scale-110 transition-transform">
                    {highlight.icon}
                  </div>
                  <h3 className="text-white font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-slate-400 text-sm">{highlight.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;