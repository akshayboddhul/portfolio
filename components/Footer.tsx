"use client";

import { ArrowUp, Mail } from "lucide-react";

function GithubIcon({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#FFFFFF] border-t border-[#E2E6DE] py-12 text-[#5A625B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 border-b border-[#EAEFE7]">
          {/* Brand & Concept */}
          <div className="space-y-2 max-w-md">
            <span className="font-display font-bold text-base text-[#202522] block">
              Akshay Shrinivas Boddhul
            </span>
            <p className="font-mono text-xs text-[#7F8880] leading-relaxed">
              Senior Data Engineer specializing in Databricks, Apache Spark, Delta Lake, and AWS.
            </p>
            <p className="font-mono text-[11px] text-[#3E6146] pt-1">
              &ldquo;Behind every reliable data product is a thoughtfully engineered system.&rdquo;
            </p>
          </div>

          {/* Quick Index */}
          <div className="flex flex-wrap gap-8 font-mono text-xs">
            <div className="space-y-2">
              <span className="text-[#202522] font-semibold block uppercase tracking-wider text-[10px]">
                Index
              </span>
              <div className="space-y-1">
                <div><a href="#work" className="hover:text-[#202522]">01. Work</a></div>
                <div><a href="#architecture" className="hover:text-[#202522]">02. Architecture</a></div>
                <div><a href="#toolkit" className="hover:text-[#202522]">03. Toolkit</a></div>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-[#202522] font-semibold block uppercase tracking-wider text-[10px]">
                Navigation
              </span>
              <div className="space-y-1">
                <div><a href="#principles" className="hover:text-[#202522]">04. Principles</a></div>
                <div><a href="#experience" className="hover:text-[#202522]">05. Experience</a></div>
                <div><a href="#about" className="hover:text-[#202522]">06. About</a></div>
                <div><a href="#contact" className="hover:text-[#202522]">07. Contact</a></div>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-[#202522] font-semibold block uppercase tracking-wider text-[10px]">
                Connect
              </span>
              <div className="space-y-1">
                <div>
                  <a
                    href="https://github.com/akshayboddhul"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#202522] flex items-center gap-1.5"
                  >
                    <GithubIcon className="w-3.5 h-3.5" /> GitHub
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/akshayboddhul/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#202522] flex items-center gap-1.5"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" /> LinkedIn
                  </a>
                </div>
                <div>
                  <a
                    href="mailto:akshayboddhul45@gmail.com"
                    className="hover:text-[#202522] flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5" /> Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Colophon & Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#7F8880]">
          <div>
            © 2026 Akshay Shrinivas Boddhul · Hyderabad, India
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px]">
              Next.js 16 · React 19 · Tailwind CSS
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-1.5 rounded border border-[#E2E6DE] hover:border-[#3E6146] hover:text-[#202522] transition-colors"
              aria-label="Scroll to top of page"
              title="Return to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
