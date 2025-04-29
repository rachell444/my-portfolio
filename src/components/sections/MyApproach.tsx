"use client";
import { motion } from "framer-motion";
import clsx from "clsx";

const phases = [
  {
    label: "Phase 1",
    title: "Planning & Strategy",
    description:
      "We’ll collaborate to map out your website’s goals, target audience, and key functionalities. We’ll discuss things like site structure, navigation, and content requirements.",
  },
  {
    label: "Phase 2",
    title: "Development & Progress Update",
    description:
      "Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.",
  },
  {
    label: "Phase 3",
    title: "Development & Delivery",
    description:
      "This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up.",
  },
]; // Solo las fases modernas, sin tarjetas antiguas

export default function MyApproach() {
  return (
    <section id="approach" className="py-28 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl font-extrabold text-center mb-16"
        >
          <span className="text-white">My </span>
          <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent animate-title-shimmer">
            Approach
          </span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {phases.map((phase, idx) => (
            <motion.div
              key={phase.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.1, type: "spring" }}
              viewport={{ once: true }}
              className={clsx(
                "relative group rounded-2xl overflow-hidden flex flex-col items-center justify-between min-h-[340px] bg-[#0e0e1a] shadow-lg border-none",
                "approach-card"
              )}
            >
              {/* Animated Gradient Border */}
              <span className="absolute inset-0 pointer-events-none z-10 approach-glow" />
              {/* Hidden content (revealed on hover/focus) */}
              <div
                className="absolute inset-0 z-20 flex flex-col items-center justify-center opacity-0 pointer-events-none translate-y-4 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 transition-all duration-500"
                tabIndex={-1}
                aria-hidden="true"
              >
                <div
                  className="w-full h-full flex flex-col items-center justify-center px-8 py-10 rounded-2xl relative"
                  style={{
                    background:
                      idx === 0
                        ? "radial-gradient(circle at 50% 50%, #f472b622 0%, #f472b633 60%, #0e0e1a 100%)"
                        : idx === 1
                        ? "radial-gradient(circle at 50% 50%, #a259ff22 0%, #a259ff33 60%, #0e0e1a 100%)"
                        : "radial-gradient(circle at 50% 50%, #38bdf822 0%, #38bdf833 60%, #0e0e1a 100%)",
                  }}
                >
                  <div className={`absolute inset-0 z-0 animate-glowWave phase-glow-${idx}`} />
                  <h3 className="text-2xl font-bold text-white mb-3 text-center drop-shadow-lg">
                    {phase.title}
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed text-center max-w-xs">
                    {phase.description}
                  </p>
                </div>
              </div>
              {/* Default content (centered phase label, hides on hover/focus) */}
              <div className="absolute inset-0 z-30 flex items-center justify-center transition-all duration-500 group-hover:opacity-0 group-hover:pointer-events-none group-focus-within:opacity-0 group-focus-within:pointer-events-none">
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  className="approach-phase-btn px-6 py-2 rounded-full border border-pink-400 text-pink-300 font-semibold text-lg bg-black/30 backdrop-blur-sm shadow-pink-500/20 shadow-md relative overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
                  tabIndex={0}
                >
                  <span className="relative z-10">{phase.label}</span>
                  <span className="approach-btn-shimmer absolute inset-0 rounded-full pointer-events-none" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Animaciones y estilos personalizados */}
      <style jsx>{`
        .approach-card {
          transition: box-shadow 0.4s cubic-bezier(.4,2,.6,1);
        }
        /* Title shimmer para Approach */
        @keyframes title-shimmer {
          0%,100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-title-shimmer {
          background-size: 200% 200%;
          animation: title-shimmer 3.5s linear infinite;
        }
        .approach-glow {
          border-radius: 1rem;
          border: 2px solid transparent;
          background: linear-gradient(120deg, #a259ff, #f472b6, #6366f1, #a259ff) border-box;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          -webkit-mask-composite: xor;
          animation: approach-border-glow 4s linear infinite;
        }
        @keyframes approach-border-glow {
          0% { filter: blur(2px) brightness(1.2); background-position: 0% 50%; }
          100% { filter: blur(2px) brightness(1.2); background-position: 100% 50%; }
        }
        .approach-phase-btn {
          border-width: 2px;
          box-shadow: 0 0 24px 0 #f472b655;
          position: relative;
          overflow: hidden;
        }
        .approach-btn-shimmer {
          background: linear-gradient(90deg,rgba(255,255,255,0.08) 0%,rgba(236,72,153,0.2) 50%,rgba(255,255,255,0.08) 100%);
          opacity: 0.7;
          animation: shimmer-btn 2.2s linear infinite;
        }
        @keyframes shimmer-btn {
          0% { background-position: -100% 0; }
          100% { background-position: 200% 0; }
        }
        .group:hover .approach-glow {
          filter: brightness(1.7) blur(4px);
        }
        .group:hover .approach-phase-btn {
          border-color: #f472b6;
          box-shadow: 0 0 32px 0 #f472b6cc;
        }
        .group:hover .approach-btn-shimmer {
          opacity: 1;
        }
        .group:hover .animate-glowWave {
          background: radial-gradient(circle at 50% 50%, #a259ff55 0%, #f472b655 60%, #0e0e1a 100%);
          animation: glowWave 1.2s cubic-bezier(.4,2,.6,1) forwards;
        }
        @keyframes glowWave {
          0% { opacity: 0; transform: scale(0.6); }
          60% { opacity: 1; transform: scale(1.1); }
          100% { opacity: 0.85; transform: scale(1.45); }
        }
        /* Glow color por fase */
        .phase-glow-0 { background: radial-gradient(circle at 50% 50%, #f472b622 0%, #f472b633 60%, #0e0e1a 100%) !important; }
        .phase-glow-1 { background: radial-gradient(circle at 50% 50%, #a259ff22 0%, #a259ff33 60%, #0e0e1a 100%) !important; }
        .phase-glow-2 { background: radial-gradient(circle at 50% 50%, #38bdf822 0%, #38bdf833 60%, #0e0e1a 100%) !important; }
      `}</style>
    </section>
  );
}
