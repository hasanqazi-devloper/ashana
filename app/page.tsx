import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Experience from "@/src/components/Experience";
import Gallery from "@/src/components/Gallery";
import Contact from "@/src/components/Contact";

export default function Home() {
  return (
   <main className="bg-neutral-50 text-neutral-900">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Experience />
      <Contact />
    </main>
  );
}