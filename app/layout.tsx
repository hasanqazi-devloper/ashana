import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/src/components/Navbar";
// import Footer from "@/src/components/Footer";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
 title: "Ashanga Silakshana | Bakery Demi Chef de Partie",
  description: "Artisanal bakery expert with 5+ years of experience in luxury hospitality. Specializing in premium lamination, Viennoiserie, and high-volume culinary operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 🛡️ Global suppression tag lagaya hai taake extensions ya themes layout attributes match control karein
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${jakartaSans.variable} font-sans antialiased bg-[#030303] text-white selection:bg-[#FFC71E]/30`}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}