"use client";

import { motion } from "framer-motion";
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
    terrain: "Full W&OD Trail + Four Mile Run Trail + Mt. Vernon Trail, all paved",
    turnaround: "Old Town Alexandria → Purcellville",
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
          <TrailMap />
          <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm">
            {routes.map((r) => (
              <div key={r.name} className="flex items-center gap-2">
                <div
                  className="w-4 h-1 rounded"
                  style={{ backgroundColor: r.color }}
                />
                <span className="text-chainmail">
                  {r.name} — {r.miles}mi
                </span>
              </div>
            ))}
          </div>
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

function TrailMap() {
  // Layout: Geographic schematic — West (left) ←→ East (right)
  // Purcellville(50,120) — Leesburg(185,120) — HERNDON(350,120) — Falls Church(490,120) — Alexandria(620,120)
  // Southern spur from Alexandria: Downtown Alex(660,180) — Mt. Vernon(700,240)
  // Squire (30mi): Herndon ←→ Falls Church (Banneker Park)
  // Knight (50mi): Herndon ←→ Purcellville
  // Legend (100mi): Herndon → Alexandria → Mt. Vernon → back → Purcellville → Herndon

  return (
    <svg viewBox="0 0 780 300" className="w-full h-auto" aria-label="Trail map showing three ride routes">
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
      {/* Trail label */}
      <text x="270" y="108" textAnchor="middle" fill="#4a4a4a" fontSize="9" letterSpacing="3">
        W&amp;OD TRAIL
      </text>

      {/* ===== Southern spur: Alexandria → Downtown Alex → Mt. Vernon ===== */}
      <path d="M620,120 Q650,120 660,150 L660,180 Q660,210 680,225 L700,240"
        stroke="#2a2a2a" strokeWidth="6" fill="none" strokeLinecap="round" />
      <text x="685" y="160" fill="#4a4a4a" fontSize="8" transform="rotate(70,685,160)">
        4 Mile Run / Mt. Vernon Trail
      </text>

      {/* ===== 30mi SQUIRE ROUTE (green): Herndon ←→ Leesburg ===== */}
      <motion.line
        x1="350" y1="120" x2="185" y2="120"
        stroke="#4ade80"
        strokeWidth="5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        opacity={0.85}
      />

      {/* ===== 50mi KNIGHT ROUTE (blue): Herndon ←→ Purcellville ===== */}
      <motion.line
        x1="350" y1="120" x2="50" y2="120"
        stroke="#60a5fa"
        strokeWidth="5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.5 }}
        opacity={0.65}
      />

      {/* ===== 100mi LEGEND ROUTE (gold): Complex path ===== */}
      {/* Leg 1: Herndon → Alexandria (east on W&OD) */}
      <motion.line
        x1="350" y1="115" x2="620" y2="115"
        stroke="#f59e0b"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="8 4"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.8 }}
        opacity={0.7}
      />
      {/* Leg 2: Alexandria → Downtown Alex → Mt. Vernon (south) */}
      <motion.path
        d="M620,115 Q648,115 658,148 L658,178 Q658,208 678,223 L698,238"
        stroke="#f59e0b"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="8 4"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1.8 }}
        opacity={0.7}
      />
      {/* Leg 3: Mt. Vernon → back north to Alexandria → west all the way to Purcellville */}
      <motion.path
        d="M698,238 L658,178 Q648,150 620,125 L50,125"
        stroke="#f59e0b"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="8 4"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 2.6 }}
        opacity={0.7}
      />
      {/* Leg 4: Purcellville → back east to Herndon */}
      <motion.line
        x1="50" y1="125" x2="350" y2="125"
        stroke="#f59e0b"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="8 4"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 4.1 }}
        opacity={0.7}
      />

      {/* ===== STOP MARKERS ===== */}

      {/* Purcellville (westernmost) */}
      <motion.g
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.8, type: "spring" }}
      >
        <circle cx="50" cy="120" r="8" fill="#60a5fa" stroke="#60a5fa50" strokeWidth="2" />
        <text x="50" y="100" textAnchor="middle" fill="#60a5fa" fontSize="10" fontWeight="bold">
          PURCELLVILLE
        </text>
        <text x="50" y="145" textAnchor="middle" fill="#6b6b6b" fontSize="8">
          50mi / 100mi
        </text>
      </motion.g>

      {/* Leesburg / Foxridge Park (Squire turnaround) */}
      <motion.g
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2, type: "spring" }}
      >
        <circle cx="185" cy="120" r="8" fill="#4ade80" stroke="#4ade8050" strokeWidth="2" />
        <text x="185" y="100" textAnchor="middle" fill="#4ade80" fontSize="10" fontWeight="bold">
          LEESBURG
        </text>
        <text x="185" y="145" textAnchor="middle" fill="#6b6b6b" fontSize="8">
          30mi turn
        </text>
      </motion.g>

      {/* HERNDON (start) */}
      <motion.g
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, type: "spring" }}
      >
        <circle cx="350" cy="120" r="14" fill="#d4451a" stroke="#ff6b35" strokeWidth="2" />
        <text x="350" y="96" textAnchor="middle" fill="#d4c5a0" fontSize="12" fontWeight="bold">
          HERNDON
        </text>
        <text x="350" y="152" textAnchor="middle" fill="#ff6b35" fontSize="9" fontWeight="bold">
          START / FINISH
        </text>
      </motion.g>

      {/* Alexandria (W&OD eastern terminus) */}
      <motion.g
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 2, type: "spring" }}
      >
        <circle cx="620" cy="120" r="8" fill="#f59e0b" stroke="#f59e0b50" strokeWidth="2" />
        <text x="620" y="100" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">
          ALEXANDRIA
        </text>
        <text x="620" y="145" textAnchor="middle" fill="#6b6b6b" fontSize="8">
          W&amp;OD Terminus
        </text>
      </motion.g>

      {/* Downtown Alexandria */}
      <motion.g
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 2.5, type: "spring" }}
      >
        <circle cx="660" cy="180" r="6" fill="#f59e0b" stroke="#f59e0b50" strokeWidth="2" />
        <text x="720" y="183" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="bold">
          DOWNTOWN
        </text>
        <text x="720" y="193" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="bold">
          ALEXANDRIA
        </text>
      </motion.g>

      {/* Mt. Vernon */}
      <motion.g
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 3, type: "spring" }}
      >
        <circle cx="700" cy="240" r="8" fill="#f59e0b" stroke="#f59e0b50" strokeWidth="2" />
        <text x="700" y="263" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">
          MT. VERNON
        </text>
        <text x="700" y="275" textAnchor="middle" fill="#6b6b6b" fontSize="8">
          100mi waypoint
        </text>
      </motion.g>

      {/* Direction labels */}
      <motion.text
        x="530" y="110" fill="#f59e0b" fontSize="10" opacity={0.6}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        viewport={{ once: true }}
        transition={{ delay: 1.5 }}
      >
        → east
      </motion.text>
      <motion.text
        x="180" y="138" fill="#f59e0b" fontSize="10" opacity={0.6}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        viewport={{ once: true }}
        transition={{ delay: 3.5 }}
      >
        ← west to Purcellville
      </motion.text>
    </svg>
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
