"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "01 / Work", href: "#work" },
  { label: "02 / Architecture", href: "#architecture" },
  { label: "03 / Toolkit", href: "#toolkit" },
  { label: "04 / Principles", href: "#principles" },
  { label: "05 / Experience", href: "#experience" },
  { label: "06 / About", href: "#about" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#E2E6DE] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand identity */}
        <a
          href="#"
          className="group flex items-center gap-3 text-inherit no-underline"
          aria-label="Akshay Shrinivas Boddhul — Home"
        >
          <div className="w-8 h-8 rounded bg-[#3E6146] text-[#FFFFFF] font-mono text-xs font-semibold flex items-center justify-center tracking-tighter">
            AB
          </div>
          <div className="flex flex-col">
            <span className="font-display font-semibold text-sm sm:text-base text-[#202522] tracking-tight group-hover:text-[#3E6146] transition-colors">
              Akshay Shrinivas Boddhul
            </span>
            <span className="font-mono text-[10px] sm:text-[11px] text-[#7F8880] tracking-wide">
              Senior Data Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-6"
          aria-label="Main Navigation"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-xs text-[#5A625B] hover:text-[#202522] hover:underline underline-offset-4 decoration-[#3E6146] transition-colors py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-[#3E6146] text-[#FFFFFF] font-mono text-xs font-medium hover:bg-[#2F4B36] transition-colors"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded text-[#5A625B] hover:text-[#202522] hover:bg-[#F0F3EC] transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E2E6DE] bg-[#FFFFFF] px-4 py-4 space-y-1.5 shadow-lg">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-mono text-sm text-[#5A625B] hover:text-[#202522] hover:bg-[#F0F3EC] px-3 py-2 rounded transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#accreditations"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-mono text-sm text-[#5A625B] hover:text-[#202522] hover:bg-[#F0F3EC] px-3 py-2 rounded transition-colors"
          >
            07 / Accreditations
          </a>
          <div className="pt-2 border-t border-[#EAEFE7]">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex w-full items-center justify-center gap-2 px-4 py-2 rounded bg-[#3E6146] text-[#FFFFFF] font-mono text-xs font-medium hover:bg-[#2F4B36] transition-colors"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
