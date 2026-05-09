import React, { useRef, useEffect, useState } from 'react';

const TECHS = [
  'TypeScript', 'JavaScript', 'Python', 'Java',
  'NestJS', 'Node.js', 'Express', 'FastAPI', 'Rails', 'Spring Boot',
  'MongoDB', 'Redis',
  'AWS', 'Docker', 'Next.js', 'React', 'Angular', 'C++',
];

const BASE_SIZE = 480; // max globe container size in px
const MIN_SIZE = 300;  // min globe container size in px

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
  const containerRef = useRef(null);
  const animRef = useRef(null);
  const pointsRef = useRef(
    fibonacciSphere(TECHS.length).map((p, i) => ({ ...p, tech: TECHS[i] }))
  );
  const [items, setItems] = useState(pointsRef.current);
  const [size, setSize] = useState(BASE_SIZE);

  // Observe container width and scale globe accordingly
  useEffect(() => {
    if (!containerRef.current) return;

    const updateSize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const clamped = Math.max(MIN_SIZE, Math.min(BASE_SIZE, containerWidth));
        setSize(clamped);
      }
    };

    updateSize();

    const ro = new ResizeObserver(updateSize);
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

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

  // Scale radius and center proportionally to container size
  const cx = size / 2;
  const cy = size / 2;
  const RADIUS = (size / BASE_SIZE) * 190;

  return (
    <div ref={containerRef} className="w-full max-w-[480px] mx-auto">
      <div style={{ position: 'relative', width: size, height: size, margin: '0 auto' }}>
        {/* Globe outline circles */}
        <svg
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
          viewBox={`0 0 ${size} ${size}`}
        >
          <circle cx={cx} cy={cy} r={RADIUS} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <ellipse cx={cx} cy={cy} rx={RADIUS} ry={RADIUS * 0.35} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          <ellipse cx={cx} cy={cy} rx={RADIUS * 0.35} ry={RADIUS} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        </svg>

        {sorted.map(({ tech, x, y, z }) => {
          const depth = (z + 1) / 2; // 0 = back, 1 = front
          const opacity = 0.15 + depth * 0.85;
          // Scale font size proportionally with globe size
          const baseFontSize = 11 + depth * 5;
          const fontSize = baseFontSize * (size / BASE_SIZE);
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
    </div>
  );
};

const TechStack = () => (
  <section id="tech-stack" className="py-16 sm:py-20 md:py-28 bg-black border-t border-zinc-900">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section label */}
        <p className="text-gray-500 text-xs sm:text-sm font-mono tracking-widest mb-3 sm:mb-4">
          <span className="text-gray-600">// </span>TECH STACK
        </p>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-3 leading-tight">
          Tools of the Trade.
        </h2>

        {/* Subtitle */}
        <p className="text-gray-500 text-base sm:text-lg mb-10 sm:mb-16">
          Technologies I rely on to build and ship production systems.
        </p>

        {/* Globe — responsive wrapper */}
        <div className="w-full overflow-hidden">
          <TechGlobe />
        </div>

      </div>
    </div>
  </section>
);

export default TechStack;
