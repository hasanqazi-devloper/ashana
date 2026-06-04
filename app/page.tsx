import Navbar from '@/src/components/Navbar';
import Hero from '@/src/components/Hero';
import TrustedLogos from '@/src/components/TrustedLogos';
import About from '@/src/components/About';
// import Course from '@/components/Course';
// import Reviews from '@/components/Reviews';
// import Certificates from '@/components/Certificates';
// import Feedback from '@/components/Feedback';
// import Comparison from '@/components/Comparison';
// import CTA from '@/components/CTA';
// import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      {/* Saare sections yahan line wise render honge */}
      <Navbar />
      <Hero />
      <About />
      <TrustedLogos />
      {/* 
      <Course />
      <Reviews />
      <Certificates />
      <Feedback />
      <Comparison />
      <CTA />
      <Footer />  */}
    </main>
  );
}