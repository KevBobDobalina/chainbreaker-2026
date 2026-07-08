"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const questMap: Record<string, { label: string; miles: string }> = {
  "100": { label: "The Legend", miles: "100mi" },
  "50": { label: "The Knight", miles: "50mi" },
  "30": { label: "The Squire", miles: "30mi" },
  feast: { label: "Only Feasting", miles: "" },
};

type Rider = {
  id: string;
  name: string;
  route: string;
  donation_amount: number;
  message: string | null;
  created_at: string;
};

export default function RidersPage() {
  const [riders, setRiders] = useState<Rider[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/rsvp")
      .then((res) => res.json())
      .then((data) => {
        setRiders(data.rsvps || []);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to summon the riders.");
        setLoading(false);
      });
  }, []);

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

        {/* Summary stats */}
        {!loading && !error && riders.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="grid grid-cols-3 gap-4 sm:gap-8 mb-12"
          >
            {[
              {
                label: "Riders",
                value: riders.length,
              },
              {
                label: "Miles",
                value: riders.reduce((sum, r) => sum + (parseInt(r.route) || 0), 0).toLocaleString(),
              },
              {
                label: "Money Raised",
                value: `$${riders.reduce((sum, r) => sum + (r.donation_amount || 0), 0).toLocaleString()}`,
              },
            ].map((stat) => (
              <div key={stat.label} className="parchment-card rounded-lg p-4 sm:p-6 text-center">
                <p className="text-2xl sm:text-4xl font-black text-gold">{stat.value}</p>
                <p className="text-xs sm:text-sm text-chainmail uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="parchment-card rounded-lg overflow-hidden"
        >
          {loading ? (
            <div className="p-12 text-center text-chainmail">
              Summoning the riders...
            </div>
          ) : error ? (
            <div className="p-12 text-center text-red-400">{error}</div>
          ) : riders.length === 0 ? (
            <div className="p-12 text-center text-chainmail">
              No riders have pledged yet. Be the first to answer the call.
            </div>
          ) : (
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
                  {riders.map((rider, i) => {
                    const quest = questMap[rider.route] || { label: rider.route, miles: "" };
                    return (
                      <tr
                        key={rider.id}
                        className={`border-b border-steel/20 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}
                      >
                        <td className="px-6 py-4 text-parchment font-semibold">{rider.name}</td>
                        <td className="px-6 py-4">
                          <span className="text-ember-glow font-bold text-sm">{quest.label}</span>
                          {quest.miles && <span className="text-steel text-xs ml-2">({quest.miles})</span>}
                        </td>
                        <td className="px-6 py-4 text-gold font-bold">
                          {rider.donation_amount > 0 ? `$${rider.donation_amount}` : "—"}
                        </td>
                        <td className="px-6 py-4 text-chainmail italic text-sm">
                          {rider.message ? <>&ldquo;{rider.message}&rdquo;</> : "—"}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
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
