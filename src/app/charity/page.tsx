"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import EmberParticles from "@/components/EmberParticles";

const programs = [
  {
    name: "Support",
    description:
      "Building meaningful relationships between kids and caring adults who guide them through outdoor challenges and personal growth.",
    icon: "shield",
  },
  {
    name: "Empowerment",
    description:
      "Giving young people the confidence to take on new adventures — from their first hike to navigating rapids — and carry that strength into everyday life.",
    icon: "sword",
  },
  {
    name: "Constructive Use of Time",
    description:
      "Replacing screens with streams. WKA fills after-school hours and weekends with hiking, paddling, climbing, and exploring the natural world.",
    icon: "compass",
  },
  {
    name: "Boundaries & Expectations",
    description:
      "The wilderness is the ultimate teacher. Nature sets the rules, and kids learn accountability, teamwork, and resilience by rising to meet them.",
    icon: "crown",
  },
];

export default function CharityPage() {
  return (
    <div className="relative min-h-screen metal-gradient pt-24 pb-16">
      <EmberParticles count={10} />

      {/* Header */}
      <section className="relative px-4 text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-7xl font-black mb-4 metal-text"
          style={{ fontFamily: "var(--font-medieval)" }}
        >
          The Cause
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-chainmail mt-4 max-w-2xl mx-auto text-lg"
        >
          This year, Chainbreaker is proud to ride for{" "}
          <a
            href="https://www.wildernesskidsalexandria.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold-bright underline underline-offset-4 transition-colors"
          >
            Wilderness Kids Alexandria
          </a>{" "}
          — a local nonprofit that gets kids off screens, into nature, and
          builds the resilience they need to thrive.
        </motion.p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="w-48 h-px bg-gradient-to-r from-transparent via-ember to-transparent mx-auto mt-6"
        />
      </section>

      {/* The Challenge */}
      <section className="relative px-4 max-w-4xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="parchment-card rounded-lg p-8 sm:p-12"
        >
          <h2
            className="text-2xl sm:text-3xl font-bold text-gold mb-6 tracking-wider text-center"
            style={{ fontFamily: "var(--font-medieval)" }}
          >
            Why Wilderness Kids Alexandria
          </h2>
          <div className="space-y-6 text-chainmail leading-relaxed">
            <p>
              We chose Wilderness Kids Alexandria because they&apos;re tackling
              one of the most pressing issues facing youth in our community.
              A 2021 study by the Alexandria Health Department identified three
              urgent priorities for the city:{" "}
              <span className="text-parchment font-semibold">poverty</span>,{" "}
              <span className="text-parchment font-semibold">housing</span>, and{" "}
              <span className="text-parchment font-semibold">mental health</span>.
            </p>
            <p>
              One of the top recommended strategies to address the mental health
              crisis is{" "}
              <span className="text-ember-glow font-semibold">expanding access to free
              and low-cost physical activity.</span> That&apos;s exactly what
              WKA does — they get kids outside, moving their bodies, and
              discovering a lifelong passion for hiking, paddling, climbing, and
              exploring the outdoors.
            </p>
            <p>
              The City&apos;s Children &amp; Youth Master Plan calls for building
              &ldquo;Developmental Assets&rdquo; in young people — the foundations
              that help kids grow into strong, capable adults. WKA delivers on
              all four pillars of that plan:
            </p>
          </div>
        </motion.div>
      </section>

      {/* Four Pillars */}
      <section className="relative px-4 max-w-6xl mx-auto mb-16">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold text-gold mb-10 tracking-wider text-center"
          style={{ fontFamily: "var(--font-medieval)" }}
        >
          Four Pillars of Impact
        </motion.h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {programs.map((program, i) => (
            <motion.div
              key={program.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="parchment-card rounded-lg p-6 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <PillarIcon type={program.icon} />
                <h3 className="text-xl font-bold text-ember-glow tracking-wider">
                  {program.name}
                </h3>
              </div>
              <p className="text-chainmail leading-relaxed">
                {program.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-4 py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-xl text-parchment font-bold tracking-wider mb-3">
            Break chains. Build futures.
          </p>
          <p className="text-chainmail mb-8">
            All proceeds from Chainbreaker 2026 go directly to Wilderness
            Kids Alexandria. Every mile you ride helps a kid discover the
            outdoors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/rsvp"
              className="px-8 py-4 bg-gradient-to-r from-ember to-ember-glow text-white font-bold tracking-widest uppercase text-sm rounded hover:from-ember-glow hover:to-ember transition-all duration-300 shadow-lg shadow-ember/30"
            >
              Join the Ride
            </Link>
            <a
              href="https://www.wildernesskidsalexandria.org/programs"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-gold text-gold font-bold tracking-widest uppercase text-sm rounded hover:bg-gold/10 transition-all duration-300"
            >
              Visit WKA
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

function PillarIcon({ type }: { type: string }) {
  const color = "#f59e0b";
  if (type === "shield") {
    return (
      <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
        <path
          d="M24 4L6 12v12c0 11 8 18 18 22 10-4 18-11 18-22V12L24 4z"
          stroke={color} strokeWidth="2" fill={`${color}15`}
        />
      </svg>
    );
  }
  if (type === "sword") {
    return (
      <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
        <line x1="24" y1="4" x2="24" y2="36" stroke={color} strokeWidth="2.5" />
        <line x1="16" y1="14" x2="32" y2="14" stroke={color} strokeWidth="2.5" />
        <circle cx="24" cy="40" r="3" stroke={color} strokeWidth="2" fill={`${color}15`} />
      </svg>
    );
  }
  if (type === "compass") {
    return (
      <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="18" stroke={color} strokeWidth="2" fill={`${color}15`} />
        <path d="M24 10L27 22L24 38L21 22Z" fill={color} opacity="0.6" />
        <path d="M10 24L22 21L38 24L22 27Z" fill={color} opacity="0.4" />
      </svg>
    );
  }
  // crown
  return (
    <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
      <path
        d="M8 32L4 12l10 8 10-12 10 12 10-8-4 20H8z"
        stroke={color} strokeWidth="2" fill={`${color}15`}
      />
      <line x1="8" y1="36" x2="40" y2="36" stroke={color} strokeWidth="2" />
    </svg>
  );
}
