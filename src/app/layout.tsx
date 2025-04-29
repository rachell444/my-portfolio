import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Rachell Moron Portfolio – Frontend Developer",
  description: "Portfolio of Rachell Moron, Frontend Developer. Projects, skills, and contact information with modern UI and 3D globe.",
  keywords: ["Rachell Moron", "frontend developer", "portfolio", "web development", "React", "Next.js", "TypeScript", "UI/UX"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-[#030014] text-white overflow-x-hidden selection:bg-violet-500/30`}>
        <div className="relative min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
