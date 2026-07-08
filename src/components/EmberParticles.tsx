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

export default function EmberParticles({ count = 50 }: { count?: number }) {
  const [risingParticles, setRisingParticles] = useState<Particle[]>([]);
  const [fallingParticles, setFallingParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const halfCount = Math.floor(count / 2);
    setRisingParticles(
      Array.from({ length: halfCount }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 4,
        duration: 3 + Math.random() * 4,
        size: 3 + Math.random() * 6,
        drift: (Math.random() - 0.5) * 150,
      }))
    );
    setFallingParticles(
      Array.from({ length: halfCount }, (_, i) => ({
        id: i + halfCount,
        x: Math.random() * 100,
        delay: Math.random() * 4,
        duration: 4 + Math.random() * 5,
        size: 3 + Math.random() * 5,
        drift: (Math.random() - 0.5) * 120,
      }))
    );
  }, [count]);

  return (
    <>
      {/* Rising embers from bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[700px] overflow-hidden pointer-events-none z-10">
        {risingParticles.map((p) => (
          <motion.div
            key={`rise-${p.id}`}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              bottom: 0,
              width: p.size,
              height: p.size,
              background: `radial-gradient(circle, #ff8c42 0%, #ff6b35 30%, #d4451a 60%, transparent 100%)`,
              boxShadow: `0 0 ${p.size * 3}px #ff6b35, 0 0 ${p.size * 6}px #d4451a80`,
            }}
            animate={{
              y: [0, -500 - Math.random() * 200],
              x: [0, p.drift],
              opacity: [0, 1, 0.8, 0],
              scale: [0.6, 1.2, 0.3],
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
      <div className="absolute top-0 left-0 right-0 h-[700px] overflow-hidden pointer-events-none z-10">
        {fallingParticles.map((p) => (
          <motion.div
            key={`fall-${p.id}`}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: -10,
              width: p.size,
              height: p.size,
              background: `radial-gradient(circle, #ffb347 0%, #ff6b35 40%, #d4451a 70%, transparent 100%)`,
              boxShadow: `0 0 ${p.size * 3}px #ff6b35, 0 0 ${p.size * 5}px #d4451a60`,
            }}
            animate={{
              y: [0, 450 + Math.random() * 250],
              x: [0, p.drift],
              opacity: [0, 0.9, 0.7, 0],
              scale: [0.5, 1, 0.2],
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
