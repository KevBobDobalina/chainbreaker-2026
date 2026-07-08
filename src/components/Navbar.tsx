"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/routes", label: "The Quests" },
    { href: "/riders", label: "The Riders" },
    { href: "/charity", label: "The Cause" },
    { href: "/rsvp", label: "Join the Ride" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-steel/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <ChainIcon />
            <span className="text-lg font-bold tracking-wider text-parchment group-hover:text-ember-glow transition-colors">
              CHAINBREAKER
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold tracking-widest uppercase text-chainmail hover:text-ember-glow transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-chainmail hover:text-ember-glow transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-steel/50 bg-[#0a0a0a]/95"
          >
            <div className="px-4 py-4 space-y-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm font-semibold tracking-widest uppercase text-chainmail hover:text-ember-glow transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function ChainIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" className="text-ember chain-rattle">
      <circle cx="10" cy="10" r="5" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="18" cy="18" r="5" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <line x1="13" y1="13" x2="15" y2="15" stroke="currentColor" strokeWidth="2" />
      {/* Break mark */}
      <line x1="14" y1="11" x2="17" y2="8" stroke="#ffd700" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="14" y1="11" x2="11" y2="8" stroke="#ffd700" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
