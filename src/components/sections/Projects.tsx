'use client';

import { ProjectCard } from '@/components/ProjectCard';
import Image from 'next/image';
import { ArrowUpRight, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'AI Edu',
    description: 'A landing page designed to educate users about the fundamentals and impact of AI in today\'s world.',
    image: '/images/aiedu.jpg',
    stack: ['react', 'tailwind', 'vercel'],
    github: 'https://github.com/rachell444/ai-edu-landing',
    live: 'https://ai-edu-landing.vercel.app/'
  },
  {
    id: 2,
    title: 'TokenView',
    description: 'A sleek dashboard to monitor and compare cryptocurrency trends in real-time.',
    image: '/images/tokenview.jpg',
    stack: ['react', 'tailwind', 'chartjs', 'coingecko'],
    github: 'https://github.com/rachell444/token-view',
    live: 'https://token-view-eight.vercel.app/'
  },
  {
    id: 3,
    title: 'Nova Ecommerce',
    description: 'Un ecommerce futurista lleno de mucha tecnología y color.',
    image: '/images/novaecommerce.jpg',
    stack: ['nextjs', 'tailwind', 'typescript'],
    github: 'https://github.com/rachell444/nova-ecommerce',
    live: 'https://nova-ecommerce-zeta.vercel.app/'
  },
  {
    id: 4,
    title: 'Always Innovating',
    description: 'New project coming soon — stay tuned! Always innovating to bring impactful products to life.',
    image: '',
    stack: [],
    link: ''
  }
];

function techIcon(tech: string) {
  switch (tech) {
    case 'react':
      return <svg width="18" height="18" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="2.5" fill="#61DAFB"/><ellipse rx="14" ry="6" cx="16" cy="16" fill="none" stroke="#61DAFB" strokeWidth="2" transform="rotate(60 16 16)"/><ellipse rx="14" ry="6" cx="16" cy="16" fill="none" stroke="#61DAFB" strokeWidth="2" transform="rotate(120 16 16)"/><ellipse rx="14" ry="6" cx="16" cy="16" fill="none" stroke="#61DAFB" strokeWidth="2"/></svg>;
    case 'nextjs':
      return <svg width="20" height="20" viewBox="0 0 256 256"><rect width="256" height="256" rx="60" fill="#000"/><path d="M107.8 173.6c-32.2 0-58.3-26.1-58.3-58.3 0-32.2 26.1-58.3 58.3-58.3 19.3 0 36.3 9.6 46.8 24.4l-19.4 12.6c-5.7-8.2-15.2-13.6-27.4-13.6-21.2 0-36.1 14.8-36.1 34.9 0 20.1 14.9 34.9 36.1 34.9 13.1 0 22.7-5.7 28.3-14.1l19.1 12.8c-10.8 15.2-27.8 25.1-47.1 25.1z" fill="#fff"/></svg>;
    case 'typescript':
      return <svg width="18" height="18" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#3178C6"/><text x="16" y="22" textAnchor="middle" fontSize="13" fill="#fff" fontFamily="sans-serif">TS</text></svg>;
    case 'tailwind':
      return <svg width="20" height="20" viewBox="0 0 48 48" fill="none" style={{ verticalAlign: 'middle' }}><path d="M14.5 25.5C15.7 20.3 20.3 17.5 25 17.5C31.5 17.5 32.5 22.5 36 22.5C39.5 22.5 41 19.5 41 19.5C39.8 24.7 35.2 27.5 30.5 27.5C24 27.5 23 22.5 19.5 22.5C16 22.5 14.5 25.5 14.5 25.5ZM7 33.5C8.2 28.3 12.8 25.5 17.5 25.5C24 25.5 25 30.5 28.5 30.5C32 30.5 33.5 27.5 33.5 27.5C32.3 32.7 27.7 35.5 23 35.5C16.5 35.5 15.5 30.5 12 30.5C8.5 30.5 7 33.5 7 33.5Z" fill="#38BDF8"/></svg>;
    case 'vercel':
      return <svg width="18" height="18" viewBox="0 0 32 32" fill="none"><polygon points="16,6 28,26 4,26" fill="#fff"/></svg>;
    case 'chartjs':
      return <svg width="18" height="18" viewBox="0 0 32 32"><rect x="6" y="18" width="4" height="8" rx="2" fill="#FF6384"/><rect x="14" y="10" width="4" height="16" rx="2" fill="#36A2EB"/><rect x="22" y="14" width="4" height="12" rx="2" fill="#FFCE56"/></svg>;
    case 'coingecko':
      return <svg width="18" height="18" viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="#8cc63f"/><circle cx="16" cy="16" r="8" fill="#fff"/><circle cx="16" cy="16" r="4" fill="#8cc63f"/></svg>;
    default:
      return <span>🔧</span>;
  }
}

function techLabel(tech: string) {
  switch (tech) {
    case 'react': return 'React';
    case 'nextjs': return 'Next.js';
    case 'typescript': return 'TypeScript';
    case 'tailwind': return 'TailwindCSS';
    case 'vercel': return 'Vercel';
    case 'chartjs': return 'Chart.js';
    case 'coingecko': return 'CoinGecko API';
    default: return tech;
  }
}

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-16 tracking-tight leading-tight">
          <span className="block mb-1">A small selection of</span>
          <span className="bg-gradient-to-r from-[#a259ff] to-[#38bdf8] bg-clip-text text-transparent">recent projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) =>
            project.id === 4 ? (
              // ProjectCard SIN animación de hover para la tarjeta 4
              <ProjectCard
                className="projects-innovating-card relative min-h-[370px] md:min-h-[410px] flex items-center justify-center bg-gradient-to-br from-[#181B2A] via-[#181B2A] to-[#181B2A]/80"
                tooltip="Coming Soon"
                disable3dHover={true}
                glass
              >
                {/* Centered content */}
                <div className="relative z-20 flex flex-col items-center justify-center w-full h-full py-14 px-6 text-center">
                  {/* Title */}
                  <h3
                    className="text-2xl md:text-3xl font-black bg-clip-text text-transparent mb-2 drop-shadow-[0_2px_8px_rgba(38,40,80,0.15)]"
                    style={{
                      background: "radial-gradient(ellipse at 60% 40%, #818cf8 0%, #a259ff 40%, #38bdf8 80%, #181B2A 100%)",
                      backgroundSize: "400% 400%",
                      backgroundPosition: "0% 50%",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text"
                    }}
                  >
                    New project coming soon — stay tuned!
                  </h3>
                  {/* Subtitle */}
                  <div className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#f1f5f9] via-[#38bdf8] to-[#a259ff] mb-1 drop-shadow-[0_2px_8px_rgba(38,40,80,0.12)]">
                    Always Innovating
                  </div>
                  {/* Description */}
                  <div className="text-base md:text-lg text-white/90 font-medium max-w-xs mx-auto mt-2 drop-shadow-[0_1px_4px_rgba(38,40,80,0.18)]">
                    Consistently building valuable and creative digital experiences.
                  </div>
                </div>
              </ProjectCard>
            ) : (
              // Para las demás tarjetas, ProjectCard normal con animación de hover

              <div key={project.id} className="rounded-3xl border border-white/10 overflow-hidden bg-[#0b0d1f] shadow-lg transition-transform hover:-translate-y-1 hover:scale-[1.02] duration-300 group">
                <div className="p-6 pb-0">
                  <div className="project-image relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-[#0f1128] shadow-inner border border-white/5">
                    <Image
                      src={project.image}
                      alt={project.title + ' Screenshot'}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain"
                      priority
                    />
                    {/* Overlay que desaparece al hacer hover */}
                    <div className="absolute inset-0 transition-all duration-500 bg-gradient-to-b from-[#0f1128]/60 to-[#0f1128]/10 opacity-80 group-hover:opacity-0 pointer-events-none"></div>
                    {/* Botones SIEMPRE visibles, más pequeños */}
                    <div className="absolute top-3 right-3 flex gap-2 z-10">
                      <a
                        href={project.github || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-8 h-8 flex items-center justify-center rounded-full bg-[#18162b]/85 hover:bg-[#18162b] transition-colors border border-white/10 shadow-lg ${!project.github ? 'opacity-50 pointer-events-none' : ''}`}
                        title="View on GitHub"
                      >
                        <Github className="w-4 h-4 text-white" />
                      </a>
                      <a
                        href={project.live || project.link || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-8 h-8 flex items-center justify-center rounded-full bg-[#18162b]/85 hover:bg-[#18162b] transition-colors border border-white/10 shadow-lg ${!(project.live || project.link) ? 'opacity-50 pointer-events-none' : ''}`}
                        title="View Live Site"
                      >
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* Más espacio entre imagen y título */}
                <div className="p-6 pt-6">
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 rounded-full text-sm text-primary flex items-center gap-2"
                      >
                        {techIcon(tech)} {techLabel(tech)}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
