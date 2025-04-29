import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Projects } from '@/components/sections/Projects';
import { WorkExperience } from '@/components/sections/WorkExperience';
import MyApproach from '@/components/sections/MyApproach';
import { Contact } from '@/components/sections/Contact';
import ScrollToTopButton from '@/components/layout/ScrollToTopButton';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <WorkExperience />
      <MyApproach />
      <Contact />
      <ScrollToTopButton />
    </main>
  );
}

