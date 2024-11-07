import { useEffect, useState } from 'react';

export default function CursorGradient() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="fixed inset-0 -z -10 opacity-50 dark:opacity-30 transition-opacity duration-[2000ms] pointer-events-none"
      style={{
        background: `radial-gradient(10px circle at ${position.x}% ${position.y}%, var(--cursor-gradient-color), transparent 40%)`,
      }}
    />
  );
}