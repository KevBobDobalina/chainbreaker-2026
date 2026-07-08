"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  drift: number;
}

export default function EmberParticles({ count = 60 }: { count?: number }) {
  const [risingParticles, setRisingParticles] = useState<Particle[]>([]);
  const [fallingParticles, setFallingParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const halfCount = Math.floor(count / 2);
    setRisingParticles(
      Array.from({ length: halfCount }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 3,
        duration: 2.5 + Math.random() * 3.5,
        size: 3 + Math.random() * 7,
        drift: (Math.random() - 0.5) * 170,
      }))
    );
    setFallingParticles(
      Array.from({ length: halfCount }, (_, i) => ({
        id: i + halfCount,
        x: Math.random() * 100,
        delay: Math.random() * 3,
        duration: 3 + Math.random() * 4,
        size: 3 + Math.random() * 6,
        drift: (Math.random() - 0.5) * 150,
      }))
    );
  }, [count]);

  return (
    <>
      {/* Rising embers from bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[900px] overflow-hidden pointer-events-none z-10">
        {risingParticles.map((p) => (
          <motion.div
            key={`rise-${p.id}`}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              bottom: 0,
              width: p.size,
              height: p.size,
              background: `radial-gradient(circle, #ffcc44 0%, #ff8c42 25%, #ff6b35 50%, #d4451a 75%, transparent 100%)`,
              boxShadow: `0 0 ${p.size * 3}px #ff8c42, 0 0 ${p.size * 6}px #ff6b35aa, 0 0 ${p.size * 9}px #d4451a40`,
            }}
            animate={{
              y: [0, -600 - Math.random() * 300],
              x: [0, p.drift],
              opacity: [0, 1, 0.9, 0.6, 0],
              scale: [0.6, 1.4, 0.8, 0.2],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Falling embers from top */}
      <div className="absolute top-0 left-0 right-0 h-[900px] overflow-hidden pointer-events-none z-10">
        {fallingParticles.map((p) => (
          <motion.div
            key={`fall-${p.id}`}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: -10,
              width: p.size,
              height: p.size,
              background: `radial-gradient(circle, #ffcc44 0%, #ffb347 25%, #ff6b35 50%, #d4451a 75%, transparent 100%)`,
              boxShadow: `0 0 ${p.size * 3}px #ffb347, 0 0 ${p.size * 6}px #ff6b35aa, 0 0 ${p.size * 9}px #d4451a40`,
            }}
            animate={{
              y: [0, 550 + Math.random() * 350],
              x: [0, p.drift],
              opacity: [0, 1, 0.85, 0.5, 0],
              scale: [0.5, 1.3, 0.7, 0.15],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeIn",
            }}
          />
        ))}
      </div>
    </>
  );
}
