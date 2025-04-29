import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Rachell Morón | Frontend Developer & UI/UX Designer",
  description: "Frontend Developer and UI/UX Designer specializing in creating seamless user experiences and modern web applications",
  keywords: ["frontend developer", "UI/UX designer", "web development", "React", "Next.js", "TypeScript"],
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
