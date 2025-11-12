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
      <head>
        {/* Trusted Types CSP support */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined' && window.trustedTypes && window.trustedTypes.createPolicy) {
                window.trustedTypes.createPolicy('default', {
                  createHTML: (string) => {
                    const div = document.createElement('div');
                    div.textContent = string;
                    return div.innerHTML;
                  },
                  createScript: () => {
                    throw new Error('Direct script creation is not allowed');
                  },
                  createScriptURL: (url) => {
                    if (url.startsWith('/') || url.startsWith('./') || url.startsWith('../')) {
                      return url;
                    }
                    throw new Error('Only relative script URLs are allowed');
                  }
                });
              }
            `,
          }}
        />
      </head>
      <body className="antialiased">
        {/* Skip to main content link for keyboard navigation */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#FFDD00] focus:text-black focus:font-bold focus:rounded focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#FFDD00] focus:ring-offset-2"
        >
          Skip to main content
        </a>
        <LanguageProvider>
          <Navbar />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <ConditionalFloatingButtons />
        </LanguageProvider>
      </body>
    </html>
  );
}




