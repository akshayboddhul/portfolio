"use client";

import { Activity, Cpu } from "lucide-react";

const NAV_LINKS = [
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#badges", label: "badges" },
  { href: "#certifications", label: "certs" },
  { href: "#terminal", label: "terminal" },
];

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-12 border-b border-[#1E2D45] backdrop-blur-xl bg-[#0B0F19]/85">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 flex items-center justify-between">
        {/* Left: Workspace identity */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#FF6B35] animate-pulse shadow-[0_0_8px_rgba(255,107,53,0.8)]" />
            <span className="font-mono text-xs text-[#94A3B8] hidden sm:inline">
              akshayboddhul@core-engine
            </span>
            <span className="font-mono text-xs text-[#94A3B8] sm:hidden">
              core-engine
            </span>
          </div>
          <span className="text-[#1E2D45]">|</span>
          <div className="flex items-center gap-1.5">
            <Activity className="w-3 h-3 text-[#10D98A]" />
            <span className="font-mono text-xs text-[#10D98A] animate-emerald-pulse">
              CLUSTER ONLINE
            </span>
          </div>
        </div>

        {/* Center: Runtime badge */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full border border-[#1E2D45] bg-[#111827]">
          <Cpu className="w-3 h-3 text-[#FF6B35]" />
          <span className="font-mono text-xs text-[#6B7280]">
            Runtime 15.4 LTS
          </span>
          <span className="font-mono text-xs text-[#FF6B35]">·</span>
          <span className="font-mono text-xs text-[#6B7280]">Spark 3.5.1</span>
        </div>

        {/* Right: Nav links */}
        <div className="flex items-center gap-0.5">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="font-mono text-xs text-[#6B7280] hover:text-[#FF6B35] px-2.5 py-1.5 rounded transition-colors duration-200 hover:bg-[#FF6B35]/5"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
