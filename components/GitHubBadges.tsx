"use client";

import { Zap, GitMerge, Clock } from "lucide-react";

const BADGES = [
  {
    id: "yolo",
    emoji: "🤠",
    icon: Zap,
    name: "YOLO",
    tagline: "No fear. Just ship.",
    description: "Merged a pull request without a code review — because sometimes you trust the process.",
    color: "#F59E0B",
    glowColor: "rgba(245,158,11,0.2)",
    borderColor: "border-[#F59E0B]/25",
    hoverBorder: "#F59E0B",
    bgAccent: "rgba(245,158,11,0.06)",
    multiplier: null,
  },
  {
    id: "pull-shark",
    emoji: "🦈",
    icon: GitMerge,
    name: "Pull Shark",
    tagline: "Opening PRs that get merged.",
    description: "Opened pull requests that have been successfully merged — demonstrating consistent, quality contributions to codebases.",
    color: "#10D98A",
    glowColor: "rgba(16,217,138,0.2)",
    borderColor: "border-[#10D98A]/25",
    hoverBorder: "#10D98A",
    bgAccent: "rgba(16,217,138,0.06)",
    multiplier: 3,
  },
  {
    id: "quick-draw",
    emoji: "⚡",
    icon: Clock,
    name: "Quick Draw",
    tagline: "Fastest fingers on the keyboard.",
    description: "Closed an issue or a pull request within 5 minutes of opening it — demonstrating rapid response and decisive action.",
    color: "#3B82F6",
    glowColor: "rgba(59,130,246,0.2)",
    borderColor: "border-[#3B82F6]/25",
    hoverBorder: "#3B82F6",
    bgAccent: "rgba(59,130,246,0.06)",
    multiplier: null,
  },
];

function BadgeCard({ badge }: { badge: (typeof BADGES)[0] }) {
  const Icon = badge.icon;

  return (
    <div
      className={`group relative rounded-2xl border ${badge.borderColor} bg-[#111827] p-6 flex flex-col items-center text-center transition-all duration-350 cursor-default overflow-hidden`}
      style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.4)" }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = `${badge.hoverBorder}66`;
        el.style.boxShadow = `0 0 40px ${badge.glowColor}, 0 8px 32px rgba(0,0,0,0.5)`;
        el.style.backgroundColor = "#131f30";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = `${badge.hoverBorder}25`;
        el.style.boxShadow = "0 2px 8px rgba(0,0,0,0.4)";
        el.style.backgroundColor = "#111827";
      }}
    >
      {/* Background glow blob */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${badge.glowColor} 0%, transparent 70%)`,
        }}
      />

      {/* Source label */}
      <div className="relative z-10 mb-5">
        <div
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border font-mono text-[9px] tracking-widest"
          style={{
            borderColor: `${badge.color}30`,
            backgroundColor: badge.bgAccent,
            color: badge.color,
          }}
        >
          <div className="w-1 h-1 rounded-full animate-pulse" style={{ backgroundColor: badge.color }} />
          GITHUB · ACHIEVEMENT
        </div>
      </div>

      {/* Badge icon display */}
      <div className="relative z-10 mb-4 flex flex-col items-center gap-2">
        {/* Hexagonal badge shape simulation */}
        <div
          className="relative w-20 h-20 rounded-2xl flex items-center justify-center border-2 transition-all duration-300 group-hover:scale-110"
          style={{
            borderColor: `${badge.color}50`,
            backgroundColor: badge.bgAccent,
            boxShadow: `0 0 20px ${badge.glowColor}`,
          }}
        >
          <span className="text-4xl select-none">{badge.emoji}</span>
          {/* Multiplier badge overlay */}
          {badge.multiplier && (
            <div
              className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold font-mono border-2 border-[#0B0F19]"
              style={{
                backgroundColor: badge.color,
                color: "#0B0F19",
              }}
            >
              ×{badge.multiplier}
            </div>
          )}
        </div>

        {/* Lucide icon secondary indicator */}
        <div
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border"
          style={{
            borderColor: `${badge.color}25`,
            backgroundColor: badge.bgAccent,
          }}
        >
          <Icon size={11} style={{ color: badge.color }} />
          <span className="font-mono text-[10px]" style={{ color: badge.color }}>
            {badge.multiplier ? `earned ×${badge.multiplier}` : "earned"}
          </span>
        </div>
      </div>

      {/* Badge name */}
      <div className="relative z-10 mb-1">
        <h3
          className="text-xl font-extrabold tracking-tight"
          style={{ color: badge.color }}
        >
          {badge.name}
        </h3>
        <p className="font-mono text-[11px] text-[#4B5563] mt-0.5">{badge.tagline}</p>
      </div>

      {/* Divider */}
      <div
        className="relative z-10 my-4 w-full h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${badge.color}33, transparent)`,
        }}
      />

      {/* Description */}
      <p className="relative z-10 text-[#6B7280] text-xs leading-relaxed">
        {badge.description}
      </p>
    </div>
  );
}

export default function GitHubBadges() {
  return (
    <section id="badges" className="py-24 relative">
      <div className="section-divider mb-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="mb-12 animate-fade-in-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-8 bg-[#FF6B35]/50" />
            <span className="font-mono text-xs text-[#FF6B35] tracking-widest uppercase">
              GitHub Achievement Badges
            </span>
          </div>
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#E5E7EB]">
                Open Source{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #F59E0B, #10D98A)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Achievements
                </span>
              </h2>
              <p className="mt-3 text-[#6B7280] max-w-xl">
                GitHub achievement badges earned for open-source contributions,
                collaborative pull requests, and fast response workflows.
              </p>
            </div>
            <a
              href="https://github.com/akshayboddhul"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#1E2D45] bg-[#111827] font-mono text-xs text-[#6B7280] hover:border-[#FF6B35]/40 hover:text-[#FF6B35] transition-all duration-200"
            >
              <span className="text-sm">🐙</span>
              github.com/akshayboddhul
            </a>
          </div>
        </div>

        {/* Badges grid — 3 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-in-up delay-200 max-w-3xl mx-auto">
          {BADGES.map((badge) => (
            <BadgeCard key={badge.id} badge={badge} />
          ))}
        </div>
      </div>
    </section>
  );
}
