import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Modern aur clean font load kar rahe hain website ke liye
const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// Website ka Title aur Description (SEO ke liye)
export const metadata: Metadata = {
  title: "HRD Institute | Degree Se Skills Tak",
  description: "Sirf degree kafi nahi! Master the skills that global companies demand. Zero theory, Full code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${jakartaSans.variable} font-sans antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}