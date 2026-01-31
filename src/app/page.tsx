import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { ModeToggle } from "@/components/ModeToggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      <ModeToggle />
      <Hero />
      <Projects />
      <About />
      <Footer />
    </main>
  );
}
