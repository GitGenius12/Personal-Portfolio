import React from 'react';

const STATS = [
  { value: '2+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Shipped' },
  { value: '2',  label: 'Companies' },
  { value: '∞',  label: 'Bugs Fixed' },
];

const About = ({ about }) => {
  // Split the description into 3 paragraphs for readability
  const paragraphs = [
    "I'm Margesh Modi, a software engineer focused on backend systems — designing APIs, optimizing databases, and building infrastructure that holds up under real production load.",
    "At Fitpage, I design and optimize production APIs and PostgreSQL databases for high-traffic applications. I've led performance-critical improvements that directly impacted user growth and revenue.",
    "I enjoy taking ownership of problems from design to deployment — writing clean, efficient code and building systems that scale reliably in real-world conditions.",
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-black">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="max-w-7xl mx-auto">

          {/* Section label */}
          <p className="text-gray-500 text-sm font-mono tracking-widest mb-4">
            <span className="text-gray-600">// </span>ABOUT
          </p>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 leading-tight">
            Engineering Systems<br className="hidden sm:block" /> That Scale.
          </h2>

          {/* Subtitle */}
          <p className="text-gray-500 text-lg mb-16">
            Not just code that works — systems built to last.
          </p>

          {/* Two-column content */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">

            {/* Left — Paragraphs */}
            <div className="space-y-5">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-gray-400 text-base sm:text-lg leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            {/* Right — Stat cards 2x2 */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/8 bg-white/3 p-6 flex flex-col items-center justify-center text-center"
                >
                  <span
                    className="text-3xl sm:text-4xl font-bold mb-2"
                    style={{
                      color: '#ffffff',
                    }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-xs text-zinc-500 uppercase tracking-widest font-mono">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
