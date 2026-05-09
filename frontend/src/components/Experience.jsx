import React from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const Experience = ({ experience }) => {
  return (
    <section id="experience" className="py-16 sm:py-20 md:py-24 bg-black border-t border-zinc-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <p className="text-gray-500 text-xs sm:text-sm font-mono tracking-widest mb-3 sm:mb-4">
              <span className="text-gray-600">// </span>EXPERIENCE
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
              Work Experience
            </h2>
            <div className="w-16 h-0.5 bg-gray-700"></div>
          </div>

          {/* Timeline */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {experience.map((job) => (
              <Card
                key={job.id}
                className="bg-zinc-950 border-zinc-800 p-4 sm:p-6 md:p-8 hover:border-gray-600 transition-all"
              >
                {/* Company Header */}
                <div className="flex flex-col gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 flex items-center gap-2">
                        <Briefcase className="text-gray-400 shrink-0" size={18} />
                        {job.company}
                      </h3>
                      <p className="text-slate-400 flex items-center gap-1.5 text-xs sm:text-sm">
                        <MapPin size={13} className="shrink-0" />
                        {job.location}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {job.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-gray-700 text-gray-400 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Positions */}
                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  {job.positions.map((position, posIndex) => (
                    <div key={posIndex} className="border-l-2 border-zinc-800 pl-3 sm:pl-5 md:pl-6">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-2 sm:mb-3">
                        <h4 className="text-sm sm:text-base md:text-xl font-semibold text-white">
                          {position.title}
                        </h4>
                        <span className="text-slate-500 flex items-center gap-1 text-xs sm:text-sm">
                          <Calendar size={12} className="shrink-0" />
                          {position.period}
                        </span>
                      </div>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {position.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="text-slate-300 text-xs sm:text-sm md:text-base flex items-start gap-2"
                          >
                            <span className="text-gray-600 mt-1.5 shrink-0">•</span>
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
