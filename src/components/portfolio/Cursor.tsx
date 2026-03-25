'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener('mousemove', moveMouse);
    return () => window.removeEventListener('mousemove', moveMouse);
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 bg-primary/30 rounded-full pointer-events-none z-[9999] blur-md"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999]"
        style={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
      />
    </>
  );
};

export default Cursor;
