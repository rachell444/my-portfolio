'use client';

import { MotionDiv } from '@/components/motion';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Code, Sparkles } from 'lucide-react';

// Dynamically import GlobeCanvas for SSR safety
const GlobeCanvas = dynamic(() => import('./GlobeCanvas'), { ssr: false });

const techStack = [
  'React', 'Next.js', 'TailwindCSS', 'TypeScript', 'JavaScript',
  'Chakra UI', 'Figma', 'Node.js', 'React Native', 'Flutter', 'Git',
  'UI/UX Design', 'Responsive Design'
];

export function About() {
  return (
    <section id="about" className="relative py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Hero Project Demo Card (Left, spans 2 rows) */}
          <MotionDiv
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:row-span-2 rounded-3xl border border-white/10 shadow-xl p-0 overflow-hidden group relative flex flex-col min-h-[440px]"
          >
            {/* Full-size background image container */}
            <div className="absolute inset-0 z-10">
              <Image
                src="/images/laptop-demo.png"
                alt="Project Demo on Laptop"
                fill
                className="object-cover object-center"
                priority
              />
              
              {/* Glass overlay that covers the entire card uniformly */}
              <div 
                className="absolute inset-0" 
                style={{
                  background: 'linear-gradient(to bottom right, rgba(139, 92, 246, 0.10), rgba(30, 64, 175, 0.08))',
                  backdropFilter: 'blur(2px)',
                }}
              />
              
              {/* Color gradient overlay for consistent styling */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#8F00FF]/20 via-transparent to-[#00D8FF]/20 opacity-60" />
            </div>
            
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 z-20 opacity-15 pointer-events-none">
              <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#fff" strokeWidth="0.5" opacity="0.13" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
            
            {/* Soft radial glow for depth */}
            <div className="pointer-events-none absolute -top-20 -left-20 w-96 h-96 rounded-full bg-gradient-radial from-[#8F00FF66] via-transparent to-transparent blur-3xl opacity-70 z-20" />

            {/* Text Content */}
            <div className="relative mt-auto z-30 p-8">
              <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-snug drop-shadow-lg">
                I prioritize client collaboration, fostering open communication.
              </h3>
            </div>
          </MotionDiv>

          {/* Globe Animation Card (Top right) */}
          <MotionDiv
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-gradient-to-r from-[#04071D] to-[#0C0E23] shadow-xl p-0 overflow-hidden group relative flex flex-col justify-end min-h-[220px]"
          >
            {/* Soft blue glow behind planet */}
            <div className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 w-80 h-40 rounded-full bg-gradient-radial from-[#00D8FF44] via-transparent to-transparent blur-2xl opacity-70 z-0" />
            {/* Globe Canvas */}
            <div className="absolute inset-0 z-10">
              <GlobeCanvas />
            </div>
            <div className="relative z-20 p-8 flex flex-col items-center justify-center h-full">
              <p className="text-lg md:text-xl font-bold text-center text-white drop-shadow-lg">
                I'm very flexible with time zone communications.
              </p>
            </div>
          </MotionDiv>

          {/* Tech Stack Card (Bottom right) */}
          <MotionDiv
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-[#17182C]/90 shadow-xl p-8 flex flex-col justify-center group relative overflow-hidden"
          >
            {/* Subtle grid overlay */}
            <div className="pointer-events-none absolute inset-0 z-0 opacity-15">
              <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <defs>
                  <pattern id="grid2" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#fff" strokeWidth="0.5" opacity="0.13" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid2)" />
              </svg>
            </div>
            {/* Radial purple glow */}
            <div className="pointer-events-none absolute -top-10 right-0 w-40 h-40 rounded-full bg-gradient-radial from-[#8F00FF55] via-transparent to-transparent blur-2xl opacity-60 z-0" />
            <div className="text-sm text-white/70 mb-1 relative z-10">I constantly evolve my skill set</div>
            <h4 className="text-xl md:text-2xl font-bold text-white mb-4 relative z-10">My tech stack</h4>
            <div className="flex flex-wrap gap-2 relative z-10">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs md:text-sm font-medium bg-gradient-to-r from-[#181B2A] to-[#23243A] border border-white/10 text-white/90 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </MotionDiv>

          {/* Passion Card (Below Hero, left) */}
          <MotionDiv
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-[#17182C]/90 shadow-xl p-8 flex flex-col justify-center group relative overflow-hidden"
          >
            {/* Soft blue glow */}
            <div className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 w-60 h-32 rounded-full bg-gradient-radial from-[#00D8FF55] via-transparent to-transparent blur-2xl opacity-60 z-0" />
            <p className="text-lg md:text-xl font-semibold text-white text-center relative z-10">
              Tech enthusiast with a passion for creating experiences that feel alive.
            </p>
          </MotionDiv>

          {/* The Inside Scoop Card (Center) */}
          <MotionDiv
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#8F00FF]/30 to-[#00D8FF]/30 shadow-xl p-8 flex flex-col justify-center relative overflow-hidden group"
          >
            {/* Subtle grid overlay */}
            <div className="pointer-events-none absolute inset-0 z-0 opacity-15">
              <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <defs>
                  <pattern id="grid3" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#fff" strokeWidth="0.5" opacity="0.13" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid3)" />
              </svg>
            </div>
            {/* Blurred purple glow */}
            <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 w-72 h-40 rounded-full bg-gradient-radial from-[#8F00FF77] via-transparent to-transparent blur-2xl opacity-70 z-0" />
            {/* Blurred code background placeholder */}
            <div className="absolute inset-0 opacity-30 blur-md select-none pointer-events-none">
              {/* TODO: Add blurred JS code background here */}
            </div>
            <div className="relative z-10">
              <div className="text-sm text-white/80 mb-1">The Inside Scoop</div>
              <div className="text-lg md:text-2xl font-bold text-white">
                Always learning, always innovating — currently mastering app animations & 3D interactions.
              </div>
            </div>
          </MotionDiv>


        </div>
      </div>
    </section>
  );
}
