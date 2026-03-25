import Navbar from '@/components/navbar/Navbar';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Skills from '@/components/portfolio/Skills';
import Experience from '@/components/portfolio/Experience';
import CaseStudies from '@/components/portfolio/CaseStudies';
import Approach from '@/components/portfolio/Approach';
import Contact from '@/components/portfolio/Contact';

export default function Home() {
  return (
    <main className="relative min-h-screen text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <CaseStudies />
      <Approach />
      <Contact />
    </main>
  );
}
