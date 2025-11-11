import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ConditionalFloatingButtons from "@/components/ConditionalFloatingButtons";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title: "ALMOHTAREF - Professional Concrete Cutting and Drilling",
  description: "Professional concrete cutting and drilling within 24 hours in Mecca",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LanguageProvider>
          <Navbar />
          {children}
          <ConditionalFloatingButtons />
        </LanguageProvider>
      </body>
    </html>
  );
}




