'use client';

import { MotionDiv } from '@/components/motion';
import { Laptop, Smartphone, Code, Briefcase } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: 'UI/UX Product Designer',
    description:
      'Designed engaging and user-centered interfaces for web and mobile. Created design systems and interactive prototypes using Figma, aligning visual and product strategy.',
    icon: (
      <span className="inline-block">
        {/* Laptop with Figma/wireframe UI icon */}
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="icon-animate">
          <rect x="8" y="14" width="32" height="20" rx="3" fill="#a259ff"/>
          <rect x="12" y="18" width="24" height="12" rx="2" fill="#fff"/>
          <rect x="18" y="22" width="6" height="4" rx="1" fill="#38bdf8"/>
          <rect x="26" y="22" width="6" height="4" rx="1" fill="#a259ff"/>
          <rect x="22" y="26" width="4" height="2" rx="1" fill="#fbbf24"/>
          <rect x="18" y="18" width="14" height="2" rx="1" fill="#e0e7ff"/>
        </svg>
      </span>
    )
  },
  {
    id: 2,
    title: 'Freelance Frontend Developer',
    description:
      'Developed responsive web apps from scratch for clients using React, Next.js, and Tailwind. Delivered complete solutions from design to deployment on Vercel.',
    icon: (
      <span className="inline-block">
        {/* Lightbulb launching from browser */}
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="icon-animate">
          <ellipse cx="24" cy="20" rx="10" ry="10" fill="#a259ff"/>
          <ellipse cx="24" cy="20" rx="7" ry="7" fill="#fff" fillOpacity="0.5"/>
          <rect x="16" y="32" width="16" height="6" rx="3" fill="#181B2A"/>
          <rect x="20" y="38" width="8" height="3" rx="1.5" fill="#38bdf8"/>
          <rect x="23" y="41" width="2" height="2" rx="1" fill="#fbbf24"/>
        </svg>
      </span>
    )
  },
  {
    id: 3,
    title: 'AI Edu – AI Learning Platform',
    description:
      'Built and styled an educational landing page focused on Artificial Intelligence. Implemented modern layouts and scroll-smooth experience to teach users about AI’s impact.',
    icon: (
      <span className="inline-block">
        {/* Brain with circuits */}
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="icon-animate">
          <ellipse cx="24" cy="24" rx="12" ry="10" fill="#38bdf8"/>
          <ellipse cx="24" cy="24" rx="8" ry="7" fill="#fff" fillOpacity="0.4"/>
          <rect x="32" y="23" width="4" height="2" rx="1" fill="#a259ff"/>
          <rect x="12" y="23" width="4" height="2" rx="1" fill="#a259ff"/>
          <rect x="23" y="16" width="2" height="4" rx="1" fill="#fbbf24"/>
          <rect x="23" y="28" width="2" height="4" rx="1" fill="#fbbf24"/>
        </svg>
      </span>
    )
  },
  {
    id: 4,
    title: 'TokenView – Crypto Analytics Dashboard',
    description:
      'Created a real-time dashboard for comparing and visualizing crypto prices. Integrated CoinGecko API and Chart.js for dynamic data representation.',
    icon: (
      <span className="inline-block">
        {/* Coin and chart icon */}
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="icon-animate">
          <circle cx="24" cy="24" r="12" fill="#a259ff"/>
          <rect x="18" y="28" width="4" height="6" rx="2" fill="#38bdf8"/>
          <rect x="24" y="22" width="4" height="12" rx="2" fill="#fbbf24"/>
          <rect x="30" y="16" width="4" height="18" rx="2" fill="#fff" fillOpacity="0.7"/>
        </svg>
      </span>
    )
  }
];

export function WorkExperience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <MotionDiv
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-16 text-center">
            <span className="text-white">My </span>
            <span className="bg-gradient-to-r from-[#c084fc] via-[#a259ff] to-[#f472b6] bg-clip-text text-transparent animate-title-shimmer">work experience</span>
          </h2>
        </MotionDiv>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <MotionDiv
              key={experience.id}
              initial={{ opacity: 0, scale: 0.96, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1, type: "spring" }}
              viewport={{ once: true }}
              className="relative group rounded-3xl p-8 flex flex-col md:flex-row items-center md:items-start gap-6 shadow-2xl overflow-hidden bg-gradient-to-br from-[#181B2A]/95 via-[#23244a]/95 to-[#181B2A]/95"
              style={{}}
            >

              {/* Icon 3D/Animated */}
              <div className="relative z-10 flex flex-col items-center md:items-start">
                <div className="icon-3d group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                  {experience.icon}
                </div>
              </div>
              {/* Text Content */}
              <div className="relative z-10 flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                  {experience.title}
                </h3>
                <p className="text-gray-300 text-base leading-snug">
                  {experience.description}
                </p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
      <style jsx>{`
        .icon-3d svg {
          filter: drop-shadow(0 4px 16px #a259ff44) drop-shadow(0 2px 8px #38bdf888);
          transition: transform 0.3s cubic-bezier(.4,2,.6,1), filter 0.3s;
        }
        .icon-3d:hover svg {
          filter: drop-shadow(0 8px 32px #a259ff88) drop-shadow(0 4px 16px #38bdf8cc);
        }
        /* Title shimmer */
        @keyframes title-shimmer {
          0%,100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-title-shimmer {
          background-size: 200% 200%;
          animation: title-shimmer 3.5s linear infinite;
        }
        /* Snake Glow Border Animation */
        .group.rounded-3xl {
          position: relative;
        }
        .group.rounded-3xl::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 1.5rem;
          pointer-events: none;
          z-index: 20;
          /* Tamaño y forma de la barra */
          background: none;
          /* Barra animada: */
          background:
            linear-gradient(90deg,rgba(194,132,252,0.12) 0%,rgba(162,89,255,0.18) 50%,rgba(244,114,182,0.12) 100%) border-box;
        }
        .group.rounded-3xl::after {
          /* Snake bar */
          mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0) border-box;
          mask-composite: exclude;
          -webkit-mask-composite: xor;
          border: 2px solid transparent;
          box-shadow: 0 0 0 0 transparent;
        }
        .group.rounded-3xl[data-snake]::after {
          background:
            linear-gradient(90deg,rgba(194,132,252,0.18) 0%,rgba(162,89,255,0.6) 35%,rgba(56,189,248,0.65) 65%,rgba(244,114,182,0.18) 100%) border-box;
          box-shadow: 0 0 16px 6px #a259ff55;
          animation: snake-glow 2.8s linear infinite;
          background-size: 400% 100%;
          background-repeat: no-repeat;
        }
        @keyframes snake-glow {
          0% { background-position: 0% 0%; }
          100% { background-position: 100% 0%; }
        }
      `}</style>
    </section>
  );
}
