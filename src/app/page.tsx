"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import EmberParticles from "@/components/EmberParticles";
import HeaderArt from "@/components/HeaderArt";

export default function Home() {
  return (
    <div className="relative min-h-screen metal-gradient overflow-hidden">
      <EmberParticles count={30} />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center pt-16">
        {/* Decorative runes */}
        <RuneCorner position="top-left" />
        <RuneCorner position="top-right" />
        <RuneCorner position="bottom-left" />
        <RuneCorner position="bottom-right" />

        {/* Header Art - Crossed swords, bike gear, broken chain */}
        <HeaderArt />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-4"
        >
          <p className="text-sm tracking-[0.4em] uppercase text-chainmail font-semibold">
            A Charity Bike Ride Forged in Iron
          </p>
        </motion.div>

        {/* Main title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="relative"
        >
          {/* Top flourish */}
          <motion.svg
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="w-48 sm:w-64 h-6 mx-auto mb-3"
            viewBox="0 0 200 20"
            fill="none"
          >
            <path d="M100 10 Q85 2 60 8 Q40 12 20 6 Q10 3 0 10" stroke="#c9a84c" strokeWidth="1.5" fill="none" />
            <path d="M100 10 Q115 2 140 8 Q160 12 180 6 Q190 3 200 10" stroke="#c9a84c" strokeWidth="1.5" fill="none" />
            <circle cx="100" cy="10" r="3" fill="#ffd700" />
            <circle cx="60" cy="8" r="1.5" fill="#c9a84c" />
            <circle cx="140" cy="8" r="1.5" fill="#c9a84c" />
          </motion.svg>

          <div className="relative">
            {/* Glow layer behind text */}
            <h1
              aria-hidden="true"
              className="fire-text leading-none font-black absolute inset-0 select-none"
              style={{ fontFamily: "var(--font-medieval)" }}
            >
              <span className="block text-8xl sm:text-9xl md:text-[10rem] tracking-wide text-[#ff4d5e]">
                Chain
              </span>
              <span className="block text-8xl sm:text-9xl md:text-[10rem] tracking-wider -mt-2 sm:-mt-4 text-[#c9a84c]">
                Breaker
              </span>
            </h1>
            {/* Actual text on top */}
            <h1
              className="relative leading-none font-black"
              style={{ fontFamily: "var(--font-medieval)" }}
            >
              <span className="block text-8xl sm:text-9xl md:text-[10rem] text-[#ff4d5e] tracking-wide">
                Chain
              </span>
              <span className="block text-8xl sm:text-9xl md:text-[10rem] metal-text tracking-wider -mt-2 sm:-mt-4">
                Breaker
              </span>
            </h1>
          </div>

          {/* Bottom flourish */}
          <motion.svg
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="w-48 sm:w-64 h-6 mx-auto mt-3"
            viewBox="0 0 200 20"
            fill="none"
          >
            <path d="M100 10 Q85 18 60 12 Q40 8 20 14 Q10 17 0 10" stroke="#c9a84c" strokeWidth="1.5" fill="none" />
            <path d="M100 10 Q115 18 140 12 Q160 8 180 14 Q190 17 200 10" stroke="#c9a84c" strokeWidth="1.5" fill="none" />
            <circle cx="100" cy="10" r="3" fill="#ffd700" />
            <circle cx="60" cy="12" r="1.5" fill="#c9a84c" />
            <circle cx="140" cy="12" r="1.5" fill="#c9a84c" />
          </motion.svg>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-2xl sm:text-3xl mt-4 tracking-[0.5em] font-bold metal-text"
            style={{ fontFamily: "var(--font-medieval)" }}
          >
            2026
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="text-lg sm:text-xl mt-3 tracking-widest uppercase text-chainmail font-semibold"
          >
            September 12, 2026
          </motion.p>
        </motion.div>

        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="w-64 h-px bg-gradient-to-r from-transparent via-ember to-transparent my-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="text-lg sm:text-xl text-chainmail max-w-2xl leading-relaxed"
        >
          Ride the legendary W&OD Trail from Herndon, Virginia.
          <br />
          Choose your quest. Break chains. Ride for cause.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <Link
            href="/routes"
            className="px-8 py-4 bg-gradient-to-r from-ember to-ember-glow text-white font-bold tracking-widest uppercase text-sm rounded hover:from-ember-glow hover:to-ember transition-all duration-300 shadow-lg shadow-ember/30 hover:shadow-ember/50"
          >
            View the Quests
          </Link>
          <Link
            href="/riders"
            className="px-8 py-4 border-2 border-ember-glow text-ember-glow font-bold tracking-widest uppercase text-sm rounded hover:bg-ember-glow/10 transition-all duration-300"
          >
            See the Riders
          </Link>
          <Link
            href="/rsvp"
            className="px-8 py-4 border-2 border-gold text-gold font-bold tracking-widest uppercase text-sm rounded hover:bg-gold/10 transition-all duration-300"
          >
            Join the Ride
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute bottom-8 float-animation"
        >
          <svg className="w-6 h-10 text-chainmail" viewBox="0 0 24 40">
            <rect x="1" y="1" width="22" height="38" rx="11" fill="none" stroke="currentColor" strokeWidth="2" />
            <motion.circle
              cx="12"
              cy="12"
              r="3"
              fill="currentColor"
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>
      </section>

      {/* Event Details Section */}
      <section className="relative px-4 py-24 border-t border-steel/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="parchment-card rounded-lg p-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-parchment mb-8 tracking-wider">
              Schedule: The Day of Reckoning
            </h2>
            <div className="grid sm:grid-cols-3 gap-8 text-center mb-10">
              <div>
                <p className="text-ember-glow text-3xl font-black">Sept 12</p>
                <p className="text-chainmail mt-2 tracking-wider text-sm uppercase">Saturday, 2026</p>
                <p className="text-steel text-xs mt-1">Weather delay: Sunday Sept 13</p>
              </div>
              <div>
                <p className="text-ember-glow text-3xl font-black">Herndon, VA</p>
                <p className="text-chainmail mt-2 tracking-wider text-sm uppercase">Starting Point</p>
              </div>
              <div>
                <p className="text-ember-glow text-3xl font-black">W&OD Trail</p>
                <p className="text-chainmail mt-2 tracking-wider text-sm uppercase">The Battleground</p>
              </div>
            </div>

            <div className="w-64 h-px bg-gradient-to-r from-transparent via-steel/30 to-transparent mx-auto mb-10" />

            <h3 className="text-lg font-bold text-gold mb-6 tracking-wider">
              The Battle Plan
            </h3>
            <div className="grid sm:grid-cols-3 gap-6 text-center mb-10">
              <div className="parchment-card rounded-lg p-5">
                <p className="text-ember-glow text-2xl font-black">6:00 AM</p>
                <p className="text-gold mt-2 font-bold text-sm">The Legend</p>
                <p className="text-chainmail text-xs mt-1">100mi riders depart</p>
              </div>
              <div className="parchment-card rounded-lg p-5">
                <p className="text-ember-glow text-2xl font-black">9:30 AM</p>
                <p className="text-gold mt-2 font-bold text-sm">Knight &amp; Squire</p>
                <p className="text-chainmail text-xs mt-1">50mi &amp; 30mi riders depart</p>
              </div>
              <div className="parchment-card rounded-lg p-5">
                <p className="text-ember-glow text-2xl font-black">2:00 PM+</p>
                <p className="text-gold mt-2 font-bold text-sm">The Feast</p>
                <p className="text-chainmail text-xs mt-1">Beers &amp; pizza at Aslin Brewery</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="relative px-4 py-24 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center mb-16 text-parchment tracking-wider"
        >
          The Saga Awaits
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
              title: "Three Quests",
              desc: "Choose your path: The Squire (30mi), The Knight (60mi), or The Legend (100mi). Each route follows the historic W&OD Trail.",
            },
            {
              icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
              title: "Ride for a Cause",
              desc: "Every mile you ride and every dollar you donate goes directly to charity. Break chains of hardship with every pedal stroke.",
            },
            {
              icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
              title: "Join the Fellowship",
              desc: "Whether you're a seasoned warrior or a fresh recruit, all riders are welcome. RSVP today and pledge your donation.",
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="parchment-card rounded-lg p-8 hover:shadow-ember/20 hover:shadow-lg transition-all duration-500 group"
            >
              <div className="w-12 h-12 mb-6 text-ember group-hover:text-ember-glow transition-colors">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={card.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gold mb-3 tracking-wide">
                {card.title}
              </h3>
              <p className="text-chainmail leading-relaxed text-sm">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-steel/30 px-4 py-12 text-center">
        <p className="text-chainmail text-sm tracking-wider">
          CHAINBREAKER 2026 &mdash; Forged in Iron, Riding for a Cause
        </p>
        <p className="text-steel text-xs mt-2">
          All donations go directly to charity. Ride hard, ride free.
        </p>
      </footer>
    </div>
  );
}

function RuneCorner({ position }: { position: "top-left" | "top-right" | "bottom-left" | "bottom-right" }) {
  const positionClasses = {
    "top-left": "top-4 left-4",
    "top-right": "top-4 right-4 rotate-90",
    "bottom-left": "bottom-4 left-4 -rotate-90",
    "bottom-right": "bottom-4 right-4 rotate-180",
  };

  return (
    <div className={`absolute ${positionClasses[position]} hidden md:block`}>
      <svg width="60" height="60" viewBox="0 0 60 60" className="text-steel/40 rune-glow">
        <path d="M0 0 L30 0 L30 5 L5 5 L5 30 L0 30 Z" fill="currentColor" />
        <circle cx="15" cy="15" r="2" fill="#d4451a" opacity="0.5" />
      </svg>
    </div>
  );
}
