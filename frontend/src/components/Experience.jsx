import React from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const Experience = ({ experience }) => {
  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Work <span className="text-cyan-400">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {experience.map((job, jobIndex) => (
              <Card
                key={job.id}
                className="bg-slate-800/50 border-slate-700 p-8 hover:border-cyan-500/50 transition-all"
              >
                {/* Company Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                      <Briefcase className="text-cyan-400" size={24} />
                      {job.company}
                    </h3>
                    <p className="text-slate-400 flex items-center gap-2">
                      <MapPin size={16} />
                      {job.location}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                    {job.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-cyan-500/50 text-cyan-400"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Positions */}
                <div className="space-y-6">
                  {job.positions.map((position, posIndex) => (
                    <div key={posIndex} className="border-l-2 border-cyan-500 pl-6">
                      <div className="flex items-center gap-3 mb-3">
                        <h4 className="text-xl font-semibold text-cyan-400">
                          {position.title}
                        </h4>
                        <span className="text-slate-500 flex items-center gap-1 text-sm">
                          <Calendar size={14} />
                          {position.period}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {position.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="text-slate-300 flex items-start gap-2"
                          >
                            <span className="text-cyan-400 mt-1.5">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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

export default Experience;