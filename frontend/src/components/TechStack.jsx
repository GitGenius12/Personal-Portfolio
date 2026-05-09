import React, { useRef, useEffect, useState } from 'react';

const TECHS = [
  'TypeScript', 'JavaScript', 'Python', 'Java',
  'NestJS', 'Node.js', 'Express', 'FastAPI', 'Rails', 'Spring Boot',
  'MongoDB', 'Redis',
  'AWS', 'Docker', 'Next.js', 'React', 'Angular', 'C++',
];

const RADIUS = 190;

function fibonacciSphere(n) {
  const golden = Math.PI * (3 - Math.sqrt(5));
  return Array.from({ length: n }, (_, i) => {
    const y = 1 - (i / (n - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = golden * i;
    return { x: r * Math.cos(theta), y, z: r * Math.sin(theta) };
  });
}

const TechGlobe = () => {
  const animRef = useRef(null);
  const pointsRef = useRef(
    fibonacciSphere(TECHS.length).map((p, i) => ({ ...p, tech: TECHS[i] }))
  );
  const [items, setItems] = useState(pointsRef.current);

  useEffect(() => {
    const speed = 0.005;
    const animate = () => {
      const cos = Math.cos(speed);
      const sin = Math.sin(speed);
      pointsRef.current = pointsRef.current.map(({ tech, x, y, z }) => ({
        tech,
        x: x * cos - z * sin,
        y,
        z: x * sin + z * cos,
      }));
      setItems([...pointsRef.current]);
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const sorted = [...items].sort((a, b) => a.z - b.z);
  const cx = 240, cy = 240;

  return (
    <div style={{ position: 'relative', width: cx * 2, height: cy * 2, margin: '0 auto' }}>
      {/* Globe outline circles */}
      <svg
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
        viewBox={`0 0 ${cx * 2} ${cy * 2}`}
      >
        <circle cx={cx} cy={cy} r={RADIUS} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <ellipse cx={cx} cy={cy} rx={RADIUS} ry={RADIUS * 0.35} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        <ellipse cx={cx} cy={cy} rx={RADIUS * 0.35} ry={RADIUS} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      </svg>

      {sorted.map(({ tech, x, y, z }) => {
        const depth = (z + 1) / 2; // 0 = back, 1 = front
        const opacity = 0.15 + depth * 0.85;
        const fontSize = 11 + depth * 5;
        const fontWeight = depth > 0.65 ? 600 : 400;
        return (
          <span
            key={tech}
            style={{
              position: 'absolute',
              left: cx + x * RADIUS,
              top: cy + y * RADIUS,
              transform: 'translate(-50%, -50%)',
              opacity,
              fontSize,
              fontWeight,
              color: '#ffffff',
              whiteSpace: 'nowrap',
              userSelect: 'none',
              pointerEvents: 'none',
              letterSpacing: '0.02em',
            }}
          >
            {tech}
          </span>
        );
      })}
    </div>
  );
};

const TechStack = () => (
  <section id="tech-stack" className="py-20 sm:py-28 bg-black border-t border-zinc-900">
    <div className="container mx-auto px-3 sm:px-4">
      <div className="max-w-7xl mx-auto">

        {/* Section label */}
        <p className="text-gray-500 text-sm font-mono tracking-widest mb-4">
          <span className="text-gray-600">// </span>TECH STACK
        </p>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 leading-tight">
          Tools of the Trade.
        </h2>

        {/* Subtitle */}
        <p className="text-gray-500 text-lg mb-16">
          Technologies I rely on to build and ship production systems.
        </p>

        {/* Globe */}
        <TechGlobe />

      </div>
    </div>
  </section>
);

export default TechStack;
