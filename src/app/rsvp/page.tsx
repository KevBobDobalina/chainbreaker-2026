"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EmberParticles from "@/components/EmberParticles";

const routeOptions = [
  { value: "30", label: "The Squire — 30 Miles", color: "#4ade80" },
  { value: "50", label: "The Knight — 50 Miles", color: "#60a5fa" },
  { value: "100", label: "The Legend — 100 Miles", color: "#f59e0b" },
  { value: "feast", label: "Feast Only — No Ride", color: "#d4c5a0" },
];

const suggestedDonations = [25, 50, 100, 250];

export default function RSVPPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    route: "",
    donation_amount: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const selectedRoute = routeOptions.find((r) => r.value === form.route);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          donation_amount: parseFloat(form.donation_amount) || 0,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.details || data.error || "Something went wrong");
      }

      setStatus("success");
      setForm({ name: "", email: "", route: "", donation_amount: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to submit");
    }
  }

  return (
    <div className="relative min-h-screen metal-gradient pt-24 pb-16">
      <EmberParticles count={10} />

      <section className="relative px-4 max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl sm:text-7xl font-black mb-4 metal-text" style={{ fontFamily: "var(--font-medieval)" }}>
            Join the Ride
          </h1>
          <p className="text-chainmail mt-4">
            Pledge your steel. Choose your quest. Make your donation.
          </p>
          <div className="w-48 h-px bg-gradient-to-r from-transparent via-ember to-transparent mx-auto mt-6" />
        </motion.div>

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="parchment-card rounded-lg p-12 text-center"
            >
              <div className="text-6xl mb-6">
                <svg className="w-20 h-20 mx-auto text-gold-bright" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gold-bright mb-4 tracking-wider">
                Your Oath is Sealed
              </h2>
              <p className="text-chainmail mb-8">
                You have been inscribed in the Book of Riders. Prepare your steed
                and sharpen your resolve. The ride awaits.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="px-6 py-3 border border-gold text-gold font-bold tracking-widest uppercase text-sm rounded hover:bg-gold/10 transition-all"
              >
                Register Another Rider
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="parchment-card rounded-lg p-8 sm:p-10 space-y-6"
            >
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-parchment tracking-wider uppercase mb-2">
                  Rider Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Sir Lancelot"
                  className="w-full bg-[#0a0a0a] border border-steel/50 rounded px-4 py-3 text-parchment placeholder:text-steel focus:outline-none focus:border-ember transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-parchment tracking-wider uppercase mb-2">
                  Email (for ride updates)
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="knight@chainbreaker.com"
                  className="w-full bg-[#0a0a0a] border border-steel/50 rounded px-4 py-3 text-parchment placeholder:text-steel focus:outline-none focus:border-ember transition-colors"
                />
              </div>

              {/* Route Selection */}
              <div>
                <label className="block text-sm font-semibold text-parchment tracking-wider uppercase mb-3">
                  Choose Your Quest
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {routeOptions.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setForm({ ...form, route: opt.value })}
                      className="relative p-4 rounded border-2 transition-all duration-300 text-center"
                      style={{
                        borderColor:
                          form.route === opt.value ? opt.color : "#4a4a4a",
                        backgroundColor:
                          form.route === opt.value
                            ? `${opt.color}15`
                            : "transparent",
                      }}
                    >
                      <p
                        className="text-3xl font-black"
                        style={{
                          color:
                            form.route === opt.value ? opt.color : "#6b6b6b",
                        }}
                      >
                        {opt.value === "feast" ? "🍺" : opt.value}
                      </p>
                      <p className="text-xs text-chainmail mt-1 tracking-wider uppercase">
                        {opt.value === "feast" ? "Only Feasting" : "Miles"}
                      </p>
                    </button>
                  ))}
                </div>
                {selectedRoute && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm mt-2"
                    style={{ color: selectedRoute.color }}
                  >
                    {selectedRoute.label}
                  </motion.p>
                )}
              </div>

              {/* Donation Amount */}
              <div>
                <label className="block text-sm font-semibold text-parchment tracking-wider uppercase mb-3">
                  Donation Pledge ($)
                </label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {suggestedDonations.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() =>
                        setForm({ ...form, donation_amount: String(amount) })
                      }
                      className={`px-4 py-2 rounded border text-sm font-bold transition-all ${
                        form.donation_amount === String(amount)
                          ? "border-gold bg-gold/15 text-gold-bright"
                          : "border-steel/50 text-chainmail hover:border-gold/50"
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  min="0"
                  step="1"
                  value={form.donation_amount}
                  onChange={(e) =>
                    setForm({ ...form, donation_amount: e.target.value })
                  }
                  placeholder="Or enter custom amount"
                  className="w-full bg-[#0a0a0a] border border-steel/50 rounded px-4 py-3 text-parchment placeholder:text-steel focus:outline-none focus:border-ember transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-parchment tracking-wider uppercase mb-2">
                  Battle Cry (optional)
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="For glory and charity!"
                  rows={3}
                  className="w-full bg-[#0a0a0a] border border-steel/50 rounded px-4 py-3 text-parchment placeholder:text-steel focus:outline-none focus:border-ember transition-colors resize-none"
                />
              </div>

              {/* Error */}
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-400 text-sm"
                >
                  {errorMsg}
                </motion.p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "submitting" || !form.route}
                className="w-full py-4 bg-gradient-to-r from-ember to-ember-glow text-white font-bold tracking-widest uppercase text-sm rounded hover:from-ember-glow hover:to-ember transition-all duration-300 shadow-lg shadow-ember/30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "submitting"
                  ? "Forging Your Oath..."
                  : "Seal Your Oath"}
              </button>

              <p className="text-steel text-xs text-center">
                Donation amounts can be updated later. All proceeds go to
                charity.
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
