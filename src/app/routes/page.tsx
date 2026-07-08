"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import EmberParticles from "@/components/EmberParticles";

const routes = [
  {
    name: "The Squire",
    miles: 30,
    color: "#4ade80",
    description:
      "A noble beginning. Ride 30 miles out and back on the W&OD Trail from Herndon west to Foxridge Park in Leesburg, then retrace your path home. Perfect for those new to the fellowship or seeking a spirited challenge.",
    terrain: "Flat, fully paved trail through Northern Virginia countryside",
    turnaround: "Foxridge Park, Leesburg",
    elevation: "~300 ft gain",
    badge: "Shield",
  },
  {
    name: "The Knight",
    miles: 50,
    color: "#60a5fa",
    description:
      "Prove your valor. 50 miles of steel and determination along the W&OD. From Herndon, ride west through rolling hills and historic towns all the way to the trail's western terminus in Purcellville, then retrace the path back to Herndon.",
    terrain: "Flat to rolling, fully paved with some gentle grades west of Leesburg",
    turnaround: "Purcellville — W&OD western terminus",
    elevation: "~800 ft gain",
    badge: "Sword",
  },
  {
    name: "The Legend",
    miles: 100,
    color: "#f59e0b",
    description:
      "Only the mightiest dare attempt The Legend. 100 miles of pure conquest. From Herndon, ride east to the W&OD terminus in Alexandria, continue via the Four Mile Run Trail to downtown Alexandria, then retrace north and ride the full W&OD west to Purcellville before returning to Herndon.",
    terrain: "Full W&OD Trail + Four Mile Run Trail, all paved",
    turnaround: "Downtown Alexandria → Purcellville",
    elevation: "~1,500 ft gain",
    badge: "Crown",
  },
];

export default function RoutesPage() {
  return (
    <div className="relative min-h-screen metal-gradient pt-24 pb-16">
      <EmberParticles count={15} />

      {/* Header */}
      <section className="relative px-4 text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl font-black text-parchment tracking-wider"
          style={{ fontFamily: "var(--font-medieval)" }}
        >
          Choose Your Quest
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-chainmail mt-4 max-w-xl mx-auto"
        >
          Three paths diverge on the W&OD Trail. Each forged for a different
          breed of warrior. All starting from Herndon, Virginia.
        </motion.p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="w-48 h-px bg-gradient-to-r from-transparent via-ember to-transparent mx-auto mt-6"
        />
      </section>

      {/* Trail Map SVG */}
      <section className="relative px-4 max-w-5xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="parchment-card rounded-lg p-6 sm:p-10"
        >
          <h2 className="text-xl font-bold text-gold mb-6 tracking-wider text-center">
            The W&OD Trail — Your Battleground
          </h2>
          <TrailMapWithLegend />
        </motion.div>
      </section>

      {/* Route Cards */}
      <section className="relative px-4 max-w-6xl mx-auto">
        <div className="space-y-8">
          {routes.map((route, i) => (
            <motion.div
              key={route.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="parchment-card rounded-lg overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                {/* Left: Mile Badge */}
                <div
                  className="flex flex-col items-center justify-center p-8 md:p-12 md:w-64 shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${route.color}15, ${route.color}05)`,
                    borderRight: `1px solid ${route.color}30`,
                  }}
                >
                  <BadgeIcon type={route.badge} color={route.color} />
                  <p
                    className="text-5xl font-black mt-4"
                    style={{ color: route.color }}
                  >
                    {route.miles}
                  </p>
                  <p className="text-chainmail text-sm tracking-widest uppercase mt-1">
                    Miles
                  </p>
                </div>

                {/* Right: Details */}
                <div className="p-8 flex-1">
                  <h3
                    className="text-2xl font-bold tracking-wider mb-3"
                    style={{ color: route.color }}
                  >
                    {route.name}
                  </h3>
                  <p className="text-chainmail leading-relaxed mb-6">
                    {route.description}
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-steel uppercase tracking-wider text-xs mb-1">
                        Terrain
                      </p>
                      <p className="text-parchment">{route.terrain}</p>
                    </div>
                    <div>
                      <p className="text-steel uppercase tracking-wider text-xs mb-1">
                        Turnaround
                      </p>
                      <p className="text-parchment">{route.turnaround}</p>
                    </div>
                    <div>
                      <p className="text-steel uppercase tracking-wider text-xs mb-1">
                        Elevation
                      </p>
                      <p className="text-parchment">{route.elevation}</p>
                    </div>
                  </div>

                  <Link
                    href="/rsvp"
                    className="inline-block mt-6 px-6 py-3 text-sm font-bold tracking-widest uppercase rounded transition-all duration-300"
                    style={{
                      border: `1px solid ${route.color}`,
                      color: route.color,
                    }}
                  >
                    Accept This Quest
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-2xl text-parchment font-bold tracking-wider mb-6">
            Ready to forge your legacy?
          </p>
          <Link
            href="/rsvp"
            className="px-8 py-4 bg-gradient-to-r from-ember to-ember-glow text-white font-bold tracking-widest uppercase text-sm rounded hover:from-ember-glow hover:to-ember transition-all duration-300 shadow-lg shadow-ember/30"
          >
            Join the Ride
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

function TrailMapWithLegend() {
  const [active, setActive] = useState<Record<string, boolean>>({
    squire: false,
    knight: false,
    legend: false,
  });
  const [autoPlay, setAutoPlay] = useState(true);
  const autoPlayRef = useRef(true);
  const stepRef = useRef(0);

  const stopAutoPlay = useCallback(() => {
    autoPlayRef.current = false;
    setAutoPlay(false);
  }, []);

  // Auto-highlight sequence: squire → knight → legend
  useEffect(() => {
    if (!autoPlay) return;

    const sequence = [
      { squire: true, knight: false, legend: false },
      { squire: true, knight: true, legend: false },
      { squire: true, knight: true, legend: true },
      { squire: false, knight: false, legend: false },
    ];

    // Start with first step after a short delay
    const initialTimeout = setTimeout(() => {
      if (!autoPlayRef.current) return;
      setActive(sequence[0]);
      stepRef.current = 1;
    }, 500);

    const interval = setInterval(() => {
      if (!autoPlayRef.current) return;
      const step = stepRef.current % sequence.length;
      setActive(sequence[step]);
      stepRef.current = step + 1;
    }, 1500);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [autoPlay]);

  const toggle = (key: string) => {
    stopAutoPlay();
    setActive((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <svg viewBox="0 0 780 280" className="w-full h-auto" aria-label="Trail map showing three ride routes">
        {/* Compass rose */}
        <text x="40" y="30" fill="#4a4a4a" fontSize="10" fontWeight="bold">W</text>
        <text x="100" y="30" fill="#4a4a4a" fontSize="10" fontWeight="bold">E</text>
        <line x1="52" y1="27" x2="96" y2="27" stroke="#4a4a4a" strokeWidth="1" markerEnd="url(#arrowE)" />
        <defs>
          <marker id="arrowE" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
            <path d="M0,0 L6,2 L0,4" fill="#4a4a4a" />
          </marker>
        </defs>

        {/* ===== W&OD TRAIL (main horizontal line) ===== */}
        <line x1="50" y1="120" x2="620" y2="120" stroke="#2a2a2a" strokeWidth="8" strokeLinecap="round" />
        {/* Trail label banner */}
        <rect x="160" y="95" width="220" height="18" rx="3" fill="#1a1a2e" stroke="#2a2a2a" strokeWidth="1" />
        <text x="270" y="108" textAnchor="middle" fill="#6b6b6b" fontSize="9" letterSpacing="4" fontWeight="bold">
          W&amp;OD TRAIL &bull; HERNDON VA
        </text>

        {/* Southern spur */}
        <path d="M620,120 Q650,120 660,150 L660,180"
          stroke="#2a2a2a" strokeWidth="6" fill="none" strokeLinecap="round" />
        <text x="680" y="155" fill="#4a4a4a" fontSize="8" transform="rotate(70,680,155)">
          Four Mile Run Trail
        </text>

        {/* ===== 30mi SQUIRE (green) — out & back ===== */}
        {/* Out: Herndon → Leesburg */}
        <motion.path
          d="M350,118 L185,118"
          stroke="#4ade80" strokeWidth="4" strokeLinecap="round" fill="none"
          animate={{ opacity: active.squire ? 0.85 : 0 }}
          transition={{ duration: 0.4 }}
        />
        {/* Back: Leesburg → Herndon */}
        <motion.path
          d="M185,122 L350,122"
          stroke="#4ade80" strokeWidth="4" strokeLinecap="round" fill="none"
          strokeDasharray="6 3"
          animate={{ opacity: active.squire ? 0.6 : 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* ===== 50mi KNIGHT (blue) — out & back ===== */}
        {/* Out: Herndon → Purcellville */}
        <motion.path
          d="M350,116 L50,116"
          stroke="#60a5fa" strokeWidth="4" strokeLinecap="round" fill="none"
          animate={{ opacity: active.knight ? 0.7 : 0 }}
          transition={{ duration: 0.4 }}
        />
        {/* Back: Purcellville → Herndon */}
        <motion.path
          d="M50,124 L350,124"
          stroke="#60a5fa" strokeWidth="4" strokeLinecap="round" fill="none"
          strokeDasharray="6 3"
          animate={{ opacity: active.knight ? 0.45 : 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* ===== 100mi LEGEND (gold) — full route ===== */}
        {/* Leg 1: Herndon → Alexandria (east) */}
        <motion.path
          d="M350,113 L620,113"
          stroke="#f59e0b" strokeWidth="3.5" strokeLinecap="round" fill="none" strokeDasharray="8 4"
          animate={{ opacity: active.legend ? 0.7 : 0 }}
          transition={{ duration: 0.4 }}
        />
        {/* Leg 2: Alexandria → Downtown Alex (south) */}
        <motion.path
          d="M620,113 Q650,113 660,148 L660,178"
          stroke="#f59e0b" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeDasharray="8 4"
          animate={{ opacity: active.legend ? 0.7 : 0 }}
          transition={{ duration: 0.4 }}
        />
        {/* Leg 3: Downtown Alex → back north → west to Purcellville */}
        <motion.path
          d="M656,178 Q646,150 618,127 L50,127"
          stroke="#f59e0b" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeDasharray="8 4"
          animate={{ opacity: active.legend ? 0.55 : 0 }}
          transition={{ duration: 0.4 }}
        />
        {/* Leg 4: Purcellville → back east to Herndon */}
        <motion.path
          d="M50,131 L350,131"
          stroke="#f59e0b" strokeWidth="3.5" strokeLinecap="round" fill="none" strokeDasharray="8 4"
          animate={{ opacity: active.legend ? 0.4 : 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* ===== STOP MARKERS ===== */}

        {/* Purcellville — visible for knight or legend */}
        <motion.g
          animate={{ opacity: active.knight || active.legend ? 1 : 0.15 }}
          transition={{ duration: 0.4 }}
        >
          <circle cx="50" cy="120" r="8" fill="#60a5fa" stroke="#60a5fa50" strokeWidth="2" />
          <text x="50" y="100" textAnchor="middle" fill="#60a5fa" fontSize="10" fontWeight="bold">
            PURCELLVILLE
          </text>
          <text x="50" y="145" textAnchor="middle" fill="#6b6b6b" fontSize="8">
            50mi / 100mi
          </text>
        </motion.g>

        {/* Leesburg — visible for squire */}
        <motion.g
          animate={{ opacity: active.squire ? 1 : 0.15 }}
          transition={{ duration: 0.4 }}
        >
          <circle cx="185" cy="120" r="8" fill="#4ade80" stroke="#4ade8050" strokeWidth="2" />
          <text x="185" y="100" textAnchor="middle" fill="#4ade80" fontSize="10" fontWeight="bold">
            LEESBURG
          </text>
          <text x="185" y="145" textAnchor="middle" fill="#6b6b6b" fontSize="8">
            30mi turn
          </text>
        </motion.g>

        {/* HERNDON — always visible */}
        <g>
          <circle cx="350" cy="120" r="14" fill="#d4451a" stroke="#ff6b35" strokeWidth="2" />
          <text x="350" y="96" textAnchor="middle" fill="#d4c5a0" fontSize="12" fontWeight="bold">
            HERNDON
          </text>
          <text x="350" y="152" textAnchor="middle" fill="#ff6b35" fontSize="9" fontWeight="bold">
            START / FINISH
          </text>
        </g>

        {/* Alexandria — visible for legend */}
        <motion.g
          animate={{ opacity: active.legend ? 1 : 0.15 }}
          transition={{ duration: 0.4 }}
        >
          <circle cx="620" cy="120" r="8" fill="#f59e0b" stroke="#f59e0b50" strokeWidth="2" />
          <text x="620" y="100" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">
            ALEXANDRIA
          </text>
          <text x="620" y="145" textAnchor="middle" fill="#6b6b6b" fontSize="8">
            W&amp;OD Terminus
          </text>
        </motion.g>

        {/* Downtown Alexandria — visible for legend */}
        <motion.g
          animate={{ opacity: active.legend ? 1 : 0.15 }}
          transition={{ duration: 0.4 }}
        >
          <circle cx="660" cy="180" r="7" fill="#f59e0b" stroke="#f59e0b50" strokeWidth="2" />
          <text x="720" y="178" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="bold">
            DOWNTOWN
          </text>
          <text x="720" y="188" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="bold">
            ALEXANDRIA
          </text>
          <text x="720" y="200" textAnchor="middle" fill="#6b6b6b" fontSize="8">
            100mi turn
          </text>
        </motion.g>

        {/* Direction labels — visible for legend */}
        <motion.text
          x="530" y="108" fill="#f59e0b" fontSize="10"
          animate={{ opacity: active.legend ? 0.6 : 0 }}
          transition={{ duration: 0.4 }}
        >
          → east
        </motion.text>
        <motion.text
          x="180" y="142" fill="#f59e0b" fontSize="10"
          animate={{ opacity: active.legend ? 0.6 : 0 }}
          transition={{ duration: 0.4 }}
        >
          ← west to Purcellville
        </motion.text>
      </svg>

      {/* Clickable legend */}
      <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm">
        {routes.map((r) => {
          const key = r.name === "The Squire" ? "squire" : r.name === "The Knight" ? "knight" : "legend";
          const isActive = active[key];
          return (
            <button
              key={r.name}
              onClick={() => toggle(key)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-300 cursor-pointer"
              style={{
                borderColor: isActive ? r.color : "#333",
                backgroundColor: isActive ? `${r.color}15` : "transparent",
                opacity: isActive ? 1 : 0.4,
              }}
            >
              <div
                className="w-4 h-1 rounded transition-colors duration-300"
                style={{ backgroundColor: isActive ? r.color : "#555" }}
              />
              <span
                className="transition-colors duration-300"
                style={{ color: isActive ? r.color : "#666" }}
              >
                {r.name} — {r.miles}mi
              </span>
            </button>
          );
        })}
      </div>
    </>
  );
}

function BadgeIcon({ type, color }: { type: string; color: string }) {
  if (type === "Shield") {
    return (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path
          d="M24 4L6 12v12c0 11 8 18 18 22 10-4 18-11 18-22V12L24 4z"
          stroke={color}
          strokeWidth="2"
          fill={`${color}15`}
        />
        <text x="24" y="30" textAnchor="middle" fill={color} fontSize="14" fontWeight="bold">
          S
        </text>
      </svg>
    );
  }
  if (type === "Sword") {
    return (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <line x1="24" y1="4" x2="24" y2="36" stroke={color} strokeWidth="2.5" />
        <line x1="16" y1="14" x2="32" y2="14" stroke={color} strokeWidth="2.5" />
        <circle cx="24" cy="40" r="3" stroke={color} strokeWidth="2" fill={`${color}15`} />
      </svg>
    );
  }
  // Crown
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path
        d="M8 32L4 12l10 8 10-12 10 12 10-8-4 20H8z"
        stroke={color}
        strokeWidth="2"
        fill={`${color}15`}
      />
      <line x1="8" y1="36" x2="40" y2="36" stroke={color} strokeWidth="2" />
    </svg>
  );
}
