'use client';

import { useState, useEffect } from 'react';
import { MotionDiv } from '@/components/motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },

  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <MotionDiv
        className={cn(
          'rounded-full border border-white/10 py-4 px-8',
          'bg-background/70 backdrop-blur-md',
          scrolled ? 'bg-background/90' : ''
        )}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="flex items-center justify-center gap-8 md:gap-12">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-sm font-medium text-white/60 transition-colors hover:text-white"
            >
              <span className="relative">
                {item.name}
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-gradient-to-r from-[#8F00FF] to-[#00D8FF] transition-all duration-300 group-hover:w-full" />
              </span>
            </Link>
          ))}
        </nav>
      </MotionDiv>
    </div>
  );
}
