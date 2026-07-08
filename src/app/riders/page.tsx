"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const riders = [
  { name: "Sir Kevin", quest: "The Legend", miles: "100mi", pledge: "$250", cry: "Break every chain!" },
  { name: "Lady Swift", quest: "The Knight", miles: "50mi", pledge: "$100", cry: "Ride or die!" },
  { name: "Squire Dan", quest: "The Squire", miles: "30mi", pledge: "$50", cry: "First ride, no mercy!" },
  { name: "Iron Mike", quest: "The Legend", miles: "100mi", pledge: "$500", cry: "Forged in fire!" },
  { name: "Dame Ava", quest: "The Knight", miles: "50mi", pledge: "$75", cry: "Pedals of justice!" },
];

export default function RidersPage() {
  return (
    <div className="relative min-h-screen metal-gradient pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1
            className="text-5xl sm:text-7xl font-black mb-4 metal-text"
            style={{ fontFamily: "var(--font-medieval)" }}
          >
            The Riders
          </h1>
          <p className="text-chainmail text-lg max-w-2xl mx-auto">
            Warriors who have pledged their steel and their spirit to the ride.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="parchment-card rounded-lg overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-steel/30">
                  <th className="px-6 py-4 text-gold text-sm font-bold tracking-wider uppercase">Name</th>
                  <th className="px-6 py-4 text-gold text-sm font-bold tracking-wider uppercase">Quest</th>
                  <th className="px-6 py-4 text-gold text-sm font-bold tracking-wider uppercase">Pledge</th>
                  <th className="px-6 py-4 text-gold text-sm font-bold tracking-wider uppercase">Battle Cry</th>
                </tr>
              </thead>
              <tbody>
                {riders.map((rider, i) => (
                  <tr
                    key={rider.name}
                    className={`border-b border-steel/20 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}
                  >
                    <td className="px-6 py-4 text-parchment font-semibold">{rider.name}</td>
                    <td className="px-6 py-4">
                      <span className="text-ember-glow font-bold text-sm">{rider.quest}</span>
                      <span className="text-steel text-xs ml-2">({rider.miles})</span>
                    </td>
                    <td className="px-6 py-4 text-gold font-bold">{rider.pledge}</td>
                    <td className="px-6 py-4 text-chainmail italic text-sm">&ldquo;{rider.cry}&rdquo;</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/rsvp"
            className="px-8 py-4 bg-gradient-to-r from-ember to-ember-glow text-white font-bold tracking-widest uppercase text-sm rounded hover:from-ember-glow hover:to-ember transition-all duration-300 shadow-lg shadow-ember/30 hover:shadow-ember/50"
          >
            Join the Ride
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
