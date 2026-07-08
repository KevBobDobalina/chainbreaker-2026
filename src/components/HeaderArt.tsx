"use client";

import { motion } from "framer-motion";

export default function HeaderArt() {
  return (
    <div className="relative w-full max-w-2xl mx-auto mb-6">
      <svg viewBox="0 0 800 320" className="w-full h-auto" aria-label="Chainbreaker logo art">
        <style>{`@keyframes gearSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>

        {/* Outer decorative knotwork border - top */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        >
          <path
            d="M100 30 Q200 10 300 30 Q350 38 400 30 Q450 22 500 30 Q600 50 700 30"
            fill="none"
            stroke="#4a4a4a"
            strokeWidth="1.5"
          />
          <path
            d="M100 36 Q200 16 300 36 Q350 44 400 36 Q450 28 500 36 Q600 56 700 36"
            fill="none"
            stroke="#4a4a4a"
            strokeWidth="1.5"
          />
          <circle cx="90" cy="33" r="4" fill="#d4451a" opacity="0.6" />
          <circle cx="710" cy="33" r="4" fill="#d4451a" opacity="0.6" />
        </motion.g>

        {/* Left crossed swords (X shape) */}
        <motion.g
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {/* Sword leaning right */}
          <g transform="rotate(-25 200 155)">
            <path d="M193 260 L210 55 L215 50 L220 55 L207 260 Z" fill="url(#swordGradient)" stroke="#6b6b6b" strokeWidth="1" />
            <line x1="210" y1="75" x2="200" y2="240" stroke="#2a2a2a" strokeWidth="1.5" opacity="0.5" />
            <rect x="182" y="255" width="36" height="7" rx="2" fill="#c9a84c" stroke="#8b6914" strokeWidth="1" />
            <rect x="194" y="262" width="12" height="22" rx="2" fill="#3d2b1f" stroke="#6b6b6b" strokeWidth="0.5" />
            <line x1="194" y1="268" x2="206" y2="266" stroke="#c9a84c" strokeWidth="0.7" />
            <line x1="194" y1="274" x2="206" y2="272" stroke="#c9a84c" strokeWidth="0.7" />
            <circle cx="200" cy="288" r="5" fill="#c9a84c" stroke="#8b6914" strokeWidth="1" />
            <circle cx="200" cy="288" r="2" fill="#d4451a" opacity="0.7" />
          </g>
          {/* Sword leaning left */}
          <g transform="rotate(25 200 155)">
            <path d="M193 260 L210 55 L215 50 L220 55 L207 260 Z" fill="url(#swordGradient)" stroke="#6b6b6b" strokeWidth="1" />
            <line x1="210" y1="75" x2="200" y2="240" stroke="#2a2a2a" strokeWidth="1.5" opacity="0.5" />
            <rect x="182" y="255" width="36" height="7" rx="2" fill="#c9a84c" stroke="#8b6914" strokeWidth="1" />
            <rect x="194" y="262" width="12" height="22" rx="2" fill="#3d2b1f" stroke="#6b6b6b" strokeWidth="0.5" />
            <line x1="194" y1="268" x2="206" y2="266" stroke="#c9a84c" strokeWidth="0.7" />
            <line x1="194" y1="274" x2="206" y2="272" stroke="#c9a84c" strokeWidth="0.7" />
            <circle cx="200" cy="288" r="5" fill="#c9a84c" stroke="#8b6914" strokeWidth="1" />
            <circle cx="200" cy="288" r="2" fill="#d4451a" opacity="0.7" />
          </g>
        </motion.g>

        {/* Right crossed swords (X shape) */}
        <motion.g
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {/* Sword leaning left */}
          <g transform="rotate(-25 600 155)">
            <path d="M593 260 L610 55 L615 50 L620 55 L607 260 Z" fill="url(#swordGradient)" stroke="#6b6b6b" strokeWidth="1" />
            <line x1="610" y1="75" x2="600" y2="240" stroke="#2a2a2a" strokeWidth="1.5" opacity="0.5" />
            <rect x="582" y="255" width="36" height="7" rx="2" fill="#c9a84c" stroke="#8b6914" strokeWidth="1" />
            <rect x="594" y="262" width="12" height="22" rx="2" fill="#3d2b1f" stroke="#6b6b6b" strokeWidth="0.5" />
            <line x1="594" y1="268" x2="606" y2="266" stroke="#c9a84c" strokeWidth="0.7" />
            <line x1="594" y1="274" x2="606" y2="272" stroke="#c9a84c" strokeWidth="0.7" />
            <circle cx="600" cy="288" r="5" fill="#c9a84c" stroke="#8b6914" strokeWidth="1" />
            <circle cx="600" cy="288" r="2" fill="#d4451a" opacity="0.7" />
          </g>
          {/* Sword leaning right */}
          <g transform="rotate(25 600 155)">
            <path d="M593 260 L610 55 L615 50 L620 55 L607 260 Z" fill="url(#swordGradient)" stroke="#6b6b6b" strokeWidth="1" />
            <line x1="610" y1="75" x2="600" y2="240" stroke="#2a2a2a" strokeWidth="1.5" opacity="0.5" />
            <rect x="582" y="255" width="36" height="7" rx="2" fill="#c9a84c" stroke="#8b6914" strokeWidth="1" />
            <rect x="594" y="262" width="12" height="22" rx="2" fill="#3d2b1f" stroke="#6b6b6b" strokeWidth="0.5" />
            <line x1="594" y1="268" x2="606" y2="266" stroke="#c9a84c" strokeWidth="0.7" />
            <line x1="594" y1="274" x2="606" y2="272" stroke="#c9a84c" strokeWidth="0.7" />
            <circle cx="600" cy="288" r="5" fill="#c9a84c" stroke="#8b6914" strokeWidth="1" />
            <circle cx="600" cy="288" r="2" fill="#d4451a" opacity="0.7" />
          </g>
        </motion.g>

        {/* Center bike gear / chainring */}
        <motion.g
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, type: "spring" }}
        >
          {/* Spinning group — rotates around gear center */}
          <g style={{ transformOrigin: "400px 155px", animation: "gearSpin 20s linear infinite" }}>
            <circle cx="400" cy="155" r="65" fill="none" stroke="#4a4a4a" strokeWidth="3" />
            {/* 24 gear teeth at 15° intervals - pre-computed */}
            {[
              [462,155,472,155],[460,171,470,174],[454,186,462,193],[444,199,451,208],
              [431,209,436,220],[416,215,419,227],[400,217,400,227],[384,215,381,227],
              [369,209,364,220],[356,199,349,208],[346,186,338,193],[340,171,330,174],
              [338,155,328,155],[340,139,330,136],[346,124,338,117],[356,111,349,102],
              [369,101,364,90],[384,95,381,83],[400,93,400,83],[416,95,419,83],
              [431,101,436,90],[444,111,451,102],[454,124,462,117],[460,139,470,136],
            ].map(([x1,y1,x2,y2], i) => (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#6b6b6b" strokeWidth="4" strokeLinecap="round" />
            ))}
            <circle cx="400" cy="155" r="45" fill="none" stroke="#3a3a3a" strokeWidth="2" />
            {/* 5 spider arms at 72° intervals - pre-computed */}
            {[
              [415,155,443,155],[405,169,413,196],[391,164,375,194],[391,146,375,114],[405,141,413,114],
            ].map(([x1,y1,x2,y2], i) => (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#4a4a4a" strokeWidth="6" strokeLinecap="round" />
            ))}
            {/* 12 spokes at 30° intervals - pre-computed */}
            {[
              [408,155,442,155],[407,159,436,176],[404,162,421,191],[400,163,400,197],
              [396,162,379,191],[393,159,364,176],[392,155,358,155],[393,151,364,134],
              [396,148,379,119],[400,147,400,113],[404,148,421,119],[407,151,436,134],
            ].map(([x1,y1,x2,y2], i) => (
              <line key={`spoke-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#3a3a3a" strokeWidth="0.5" />
            ))}
          </g>
          {/* Center hub — stays still */}
          <circle cx="400" cy="155" r="15" fill="#1a1a1a" stroke="#4a4a4a" strokeWidth="2" />
          <circle cx="400" cy="155" r="6" fill="#2a2a2a" stroke="#6b6b6b" strokeWidth="1" />
        </motion.g>

        {/* Left chain */}
        <motion.g
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={`lchain-${i}`}>
              <ellipse
                cx={310 - i * 28}
                cy={155 + (i % 2 === 0 ? 0 : 3)}
                rx={12}
                ry={7}
                fill="none"
                stroke="#6b6b6b"
                strokeWidth="3"
                transform={`rotate(${i % 2 === 0 ? 5 : -5} ${310 - i * 28} ${155 + (i % 2 === 0 ? 0 : 3)})`}
              />
            </g>
          ))}
        </motion.g>

        {/* Right chain */}
        <motion.g
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={`rchain-${i}`}>
              <ellipse
                cx={490 + i * 28}
                cy={155 + (i % 2 === 0 ? 0 : 3)}
                rx={12}
                ry={7}
                fill="none"
                stroke="#6b6b6b"
                strokeWidth="3"
                transform={`rotate(${i % 2 === 0 ? -5 : 5} ${490 + i * 28} ${155 + (i % 2 === 0 ? 0 : 3)})`}
              />
            </g>
          ))}
        </motion.g>

        {/* Breaking point sparks */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.5 }}
        >
          <motion.ellipse
            cx={320} cy={152} rx={10} ry={6}
            fill="none" stroke="#d4451a" strokeWidth="2.5"
            animate={{ rotate: [0, -15, -10] }}
            transition={{ duration: 0.5, delay: 2 }}
            style={{ transformOrigin: "320px 152px" }}
          />
          <motion.ellipse
            cx={480} cy={152} rx={10} ry={6}
            fill="none" stroke="#d4451a" strokeWidth="2.5"
            animate={{ rotate: [0, 15, 10] }}
            transition={{ duration: 0.5, delay: 2 }}
            style={{ transformOrigin: "480px 152px" }}
          />
          {[
            { x: 335, y: 140, dx: -8, dy: -15 },
            { x: 330, y: 148, dx: -12, dy: -5 },
            { x: 338, y: 160, dx: -10, dy: 10 },
            { x: 465, y: 140, dx: 8, dy: -15 },
            { x: 470, y: 148, dx: 12, dy: -5 },
            { x: 462, y: 160, dx: 10, dy: 10 },
          ].map((spark, i) => (
            <motion.line
              key={`spark-${i}`}
              x1={spark.x} y1={spark.y}
              x2={spark.x + spark.dx} y2={spark.y + spark.dy}
              stroke="#ffd700" strokeWidth="2" strokeLinecap="round"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ opacity: [0, 1, 0], pathLength: [0, 1, 1] }}
              transition={{ duration: 0.8, delay: 2 + i * 0.1, repeat: Infinity, repeatDelay: 3 }}
            />
          ))}
          {[
            { x: 332, y: 135 }, { x: 325, y: 150 }, { x: 340, y: 165 },
            { x: 468, y: 135 }, { x: 475, y: 150 }, { x: 460, y: 165 },
          ].map((dot, i) => (
            <motion.circle
              key={`dot-${i}`}
              cx={dot.x} cy={dot.y} r="2" fill="#ff6b35"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.6, delay: 2.2 + i * 0.08, repeat: Infinity, repeatDelay: 3 }}
            />
          ))}
        </motion.g>

        {/* Bottom knotwork */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        >
          <path
            d="M100 250 Q200 270 300 250 Q350 242 400 250 Q450 258 500 250 Q600 230 700 250"
            fill="none" stroke="#4a4a4a" strokeWidth="1.5"
          />
          <path
            d="M100 256 Q200 276 300 256 Q350 248 400 256 Q450 264 500 256 Q600 236 700 256"
            fill="none" stroke="#4a4a4a" strokeWidth="1.5"
          />
          <circle cx="90" cy="253" r="4" fill="#d4451a" opacity="0.6" />
          <circle cx="710" cy="253" r="4" fill="#d4451a" opacity="0.6" />
        </motion.g>

        {/* Banner — below knotwork */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <path
            d="M200 290 L210 280 L590 280 L600 290 L590 300 L210 300 Z"
            fill="#1a0a00" stroke="#c9a84c" strokeWidth="1"
          />
          <path d="M210 280 L190 275 L200 290 L190 305 L210 300" fill="#1a0a00" stroke="#c9a84c" strokeWidth="1" />
          <path d="M590 280 L610 275 L600 290 L610 305 L590 300" fill="#1a0a00" stroke="#c9a84c" strokeWidth="1" />
          <text
            x="400" y="294" textAnchor="middle"
            fill="#c9a84c" fontSize="12" fontWeight="bold"
            letterSpacing="6" fontFamily="serif"
          >
            W&amp;OD TRAIL &bull; HERNDON VA
          </text>
        </motion.g>

        {/* Gradient definitions */}
        <defs>
          <linearGradient id="swordGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8a8a8a" />
            <stop offset="40%" stopColor="#c0c0c0" />
            <stop offset="60%" stopColor="#a0a0a0" />
            <stop offset="100%" stopColor="#707070" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
