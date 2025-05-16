'use client';

import { MotionDiv } from '@/components/motion';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#030014] bg-grid-pattern" />
        <div className="absolute inset-0 bg-gradient-radial from-[#8F00FF]/40 via-[#2d1a4d]/10 to-[#00D8FF]/30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#8F00FF]/40 via-transparent to-[#00D8FF]/30 opacity-70 mix-blend-lighten pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm font-medium tracking-[0.3em] text-[#8F00FF] uppercase"
          >
            Dynamic Web Magic with Next.js
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h1 className="text-5xl sm:text-7xl font-extrabold leading-tight tracking-tight text-white">
              <span className="block">Transforming Concepts into</span>
              <span className="block mt-2">
                <span className="text-[#8F00FF]">Seamless</span>{' '}
                <span className="bg-gradient-to-r from-[#8F00FF] to-[#00D8FF] bg-clip-text text-transparent">User Experiences</span>
              </span>
            </h1>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl text-white/80 font-light mt-6"
          >
            Hi! I'm Rachell Moron, a front-end developer based in Venezuela.
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <button
              onClick={scrollToProjects}
              className="group relative px-12 py-4 rounded-full text-white/90 font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span className="relative z-10 flex items-center gap-3">
                Show My Work
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 rounded-full border border-transparent bg-gradient-to-r from-[#8F00FF] to-[#00D8FF] opacity-30 transition-all duration-300 group-hover:opacity-50 group-hover:blur-md" />
              <div className="absolute inset-0 rounded-full border border-[#8F00FF] bg-gradient-to-r from-[#8F00FF]/20 to-[#00D8FF]/20" />
            </button>
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
}

