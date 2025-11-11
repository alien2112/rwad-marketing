'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden flex flex-col">
      {/* Subtle horizontal gradient at bottom */}
      <div
        className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(184, 134, 11, 0.3) 100%)',
        }}
      />

      {/* Scroll to top button - right side (pencil icon) */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed right-6 bottom-6 z-50 w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
        aria-label="Scroll to top"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5 2.5L15.5 5.5M13.5 1.5L4.5 10.5L2.5 15.5L7.5 13.5L16.5 4.5L13.5 1.5Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 relative z-10">
        {/* 404 Number */}
        <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-white mb-6">
          404
        </h1>

        {/* Error Message */}
        <p className="text-lg md:text-xl text-white/80 text-center mb-12 max-w-md">
          The page you're looking for doesn't exist. Maybe it moved or never existed.
        </p>

        {/* Go To Home Button */}
        <Link
          href="/"
          className="bg-white text-black px-8 py-4 rounded-full font-semibold flex items-center gap-3 hover:bg-gray-100 transition-colors group"
        >
          <span>Go To Home</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="group-hover:-translate-y-1 transition-transform"
          >
            <path
              d="M10 16L10 4M10 4L4 10M10 4L16 10"
              stroke="#FFDD00"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>

      {/* Footer Section */}
      <footer className="relative px-6 md:px-10 py-8 pb-20">
        <div className="max-w-[1400px] mx-auto">
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
            {/* Left: Social Section */}
            <div>
              <h3 className="text-sm tracking-wide text-white mb-4">Social</h3>
              <div className="flex items-center gap-5 mb-4">
                {/* Facebook */}
                <Link
                  href="https://www.facebook.com"
                  target="_blank"
                  className="group"
                  aria-label="Facebook"
                >
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="opacity-80 group-hover:opacity-100 transition-opacity"
                  >
                    <circle cx="18" cy="18" r="17" stroke="white" strokeOpacity="0.8" />
                    <path
                      d="M19.2 19.5h2.2l.4-2.7h-2.6v-1.6c0-.9.3-1.4 1.3-1.4h1.3V11.2c-.6-.1-1.3-.2-2-.2-2 0-3.4 1.2-3.4 3.5v2.3h-2v2.7h2V25h2.8v-5.5z"
                      fill="white"
                    />
                  </svg>
                </Link>

                {/* Instagram */}
                <Link
                  href="https://www.instagram.com/jitu.ux/"
                  target="_blank"
                  className="group"
                  aria-label="Instagram"
                >
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="opacity-80 group-hover:opacity-100 transition-opacity"
                  >
                    <circle cx="18" cy="18" r="17" stroke="white" strokeOpacity="0.8" />
                    <rect x="12" y="12" width="12" height="12" rx="6" stroke="white" />
                    <circle cx="24.5" cy="11.5" r="1" fill="white" />
                    <circle cx="18" cy="18" r="3.5" stroke="white" />
                  </svg>
                </Link>

                {/* LinkedIn */}
                <Link
                  href="https://www.linkedin.com/in/jitendra-raut/"
                  target="_blank"
                  className="group"
                  aria-label="LinkedIn"
                >
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="opacity-80 group-hover:opacity-100 transition-opacity"
                  >
                    <circle cx="18" cy="18" r="17" stroke="white" strokeOpacity="0.8" />
                    <path d="M12.8 15.2h2.8V25h-2.8V15.2zM14.2 11.5c.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6s-1.6-.7-1.6-1.6.7-1.6 1.6-1.6z" fill="white" />
                    <path d="M18.2 15.2h2.7v1.3h.1c.4-.8 1.5-1.6 3.1-1.6 3.3 0 3.9 2.2 3.9 5v5.1h-2.8v-4.5c0-1.1 0-2.6-1.6-2.6-1.6 0-1.8 1.2-1.8 2.5V25h-2.8v-9.8z" fill="white" />
                  </svg>
                </Link>

                {/* X/Twitter */}
                <Link href="https://x.com/jituux" target="_blank" className="group" aria-label="X">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="opacity-80 group-hover:opacity-100 transition-opacity"
                  >
                    <circle cx="18" cy="18" r="17" stroke="white" strokeOpacity="0.8" />
                    <path
                      d="M21.8 11.5h2.3l-5 5.8 5.9 6.2h-3l-4.6-4.9-3.9 4.9h-2.3l5.3-6.5L11.8 11.5h3l4.1 4.4 2.9-3.4z"
                      fill="white"
                    />
                  </svg>
                </Link>
              </div>
              <p className="text-white/70 text-sm">All copyrights ©</p>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}

