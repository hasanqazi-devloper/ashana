import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Traceability from "@/src/components/Traceability";
import Inventory from "@/src/components/Inventory";
import Gallery from "@/src/components/Gallery";
import Contact from "@/src/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero /> 

      <About />


      <Traceability />

      <Inventory />

      <Gallery />
      <Contact />
    </main>
  );
}