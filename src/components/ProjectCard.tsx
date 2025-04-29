"use client";

import React, { useRef } from "react";

interface ProjectCardProps {
  children: React.ReactNode;
  className?: string;
  tooltip?: string;
  style?: React.CSSProperties;
  disable3dHover?: boolean;
  glass?: boolean;
}

export function ProjectCard({ children, className = "", tooltip = "Visit", style, disable3dHover = false, glass = false }: ProjectCardProps) {
  // Suave efecto 3D al hacer hover: escala, eleva y se inclina hacia atrás
  return (
    <div
      className={`rounded-3xl bg-[#101226] border border-white/10 shadow-xl flex flex-col p-0 overflow-hidden max-w-xl w-full mx-auto group transition-all duration-600 ease-[cubic-bezier(.4,2,.6,1)] ${className}`}
      style={{ perspective: 900, ...style }}
    >
      {glass && (
        <div className="absolute inset-0 rounded-3xl bg-white/10 backdrop-blur-xl z-10 pointer-events-none" />
      )}
      {/* Tooltip solo con Tailwind, aparece en hover */}
      <div className="relative w-full group">
        <div
          className="pointer-events-none absolute left-1/2 top-[-32px] -translate-x-1/2 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            fontSize: 14,
            fontWeight: 600,
            background: "rgba(20,20,40,0.92)",
            color: "#a259ff",
            borderRadius: 8,
            padding: "6px 18px",
            boxShadow: "0 2px 16px 0 rgba(80,80,200,0.18)",
            letterSpacing: 0.2,
            transform: "translate(-50%, 0px)",
          }}
        >
          {tooltip}
        </div>
        <div
          className={`relative z-20 w-full h-full transition-transform duration-400 ease-[cubic-bezier(.4,2,.6,1)] group-hover:shadow-2xl ${disable3dHover ? '' : ''}`}
          style={{
            willChange: "transform",
            transformStyle: "preserve-3d",
            transition: "transform 0.6s cubic-bezier(.4,2,.6,1), box-shadow 0.6s cubic-bezier(.4,2,.6,1)",
          }}
          {...(!disable3dHover ? {
            onMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => {
              (e.currentTarget as HTMLDivElement).style.transform = "perspective(900px) rotateX(8deg) scale(1.05) translateY(-0.5rem)";
            },
            onMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => {
              (e.currentTarget as HTMLDivElement).style.transform = "none";
            }
          } : {})}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

