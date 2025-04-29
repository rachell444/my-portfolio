'use client';

import { useState } from 'react';
import { Copy, Check, Github, Linkedin, ArrowRight } from 'lucide-react';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'moronrachell@gmail.com';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
          Let’s build <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 bg-clip-text text-transparent animate-title-shimmer">something remarkable</span><br />
          together — from vision to pixel.
        </h2>
        <p className="text-lg text-gray-400 mb-10">
          I'm here to turn your ideas into beautiful, functional, and high-performing digital experiences.
          Whether it's your startup’s first website or a product redesign, let’s make it unforgettable.
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <button
            onClick={handleCopyEmail}
            className="group relative px-8 py-3 rounded-full text-white/90 font-medium border border-white/20 bg-transparent transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400 flex items-center gap-2"
          >
            {copied ? (
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                ¡Email copiado!
              </span>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                moronrachell@gmail.com
              </>
            )}
          </button>
          <a
            href="https://www.linkedin.com/in/rachellmoron/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-3 rounded-full text-white/90 font-medium transition-all duration-300 overflow-hidden focus:outline-none focus:ring-2 focus:ring-pink-400 inline-flex items-center"
          >
            <span className="relative z-10 flex items-center gap-2">
              Let's get in touch
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-[#8F00FF] to-[#00D8FF] opacity-20 transition-all duration-300 group-hover:opacity-30 group-hover:blur-sm" />
            <span className="absolute inset-0 rounded-full border-2 border-[#8F00FF] bg-gradient-to-r from-[#8F00FF]/10 to-[#00D8FF]/10 pointer-events-none" />
          </a>
        </div>
        <div className="mt-10 flex justify-center gap-8 text-2xl text-white">
          <a href="https://github.com/rachellmoron" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-16 h-16 rounded-full bg-white/5 hover:bg-white/10 transition">
            <Github className="w-8 h-8" />
          </a>
          <a href="https://linkedin.com/in/rachellmoron" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-16 h-16 rounded-full bg-white/5 hover:bg-white/10 transition">
            <Linkedin className="w-8 h-8" />
          </a>
        </div>
      </div>
      <div className="mt-8 mb-4 text-center text-sm text-gray-400">
        {new Date().getFullYear()} Rachell Morón
      </div>
      <style jsx>{`
        @keyframes title-shimmer {
          0%,100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-title-shimmer {
          background-size: 200% 200%;
          animation: title-shimmer 3.5s linear infinite;
        }
      `}</style>
    </section>
  );
}
