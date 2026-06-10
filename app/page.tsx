import Navbar from '@/src/components/Navbar';
import Hero from '@/src/components/Hero';
import TrustedLogos from '@/src/components/TrustedLogos';
import About from '@/src/components/About';
import Course from '@/src/components/Course';
import Reviews from '@/src/components/Reviews';
import Certificates from '@/src/components/Certificates';
import Feedback from '@/src/components/Feedback';
import Comparison from '@/src/components/Comparison';
import CTA from '@/src/components/CTA';
import Footer from '@/src/components/Footer';
import WhatsAppBtn from '@/src/components/WhatsAppBtn';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <TrustedLogos />
      <Course />
      <Reviews />
      <Certificates />
      <Feedback />
      <Comparison />
      <CTA />
     {/* <Footer />  */}
      <WhatsAppBtn />
    </main>
  );
}