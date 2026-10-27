"use client";

import { CheckCircle2, Calendar } from "lucide-react";

const CERTS = [
  {
    id: "de-professional",
    emoji: "🏆",
    title: "Databricks Data Engineer Professional",
    issuer: "Databricks",
    issuerNote: "Official Certification",
    date: "September 2024",
    dateCode: "2024-09",
    description:
      "Advanced certification covering production-grade Databricks pipelines, Delta Lake internals, Unity Catalog, Spark optimization, and Medallion Architecture patterns for enterprise lakehouse design.",
    skills: ["Delta Lake", "Unity Catalog", "Spark Optimization", "Medallion Architecture", "Production Pipelines"],
    color: "#FF6B35",
    glowColor: "rgba(255,107,53,0.25)",
    borderColor: "border-[#FF6B35]/30",
    bgAccent: "rgba(255,107,53,0.08)",
    badge: "PROFESSIONAL",
  },
  {
    id: "gen-ai-fundamentals",
    emoji: "🤖",
    title: "Generative AI Fundamentals",
    issuer: "Databricks",
    issuerNote: "Official Certification",
    date: "March 2024",
    dateCode: "2024-03",
    description:
      "Foundational certification in Generative AI concepts, large language models, prompt engineering, retrieval-augmented generation (RAG), and practical AI application development on Databricks.",
    skills: ["Generative AI", "Large Language Models", "RAG", "Prompt Engineering", "AI on Databricks"],
    color: "#8B5CF6",
    glowColor: "rgba(139,92,246,0.25)",
    borderColor: "border-[#8B5CF6]/30",
    bgAccent: "rgba(139,92,246,0.08)",
    badge: "FUNDAMENTALS",
  },
];

function CertCard({ cert }: { cert: (typeof CERTS)[0] }) {
  return (
    <div
      className="glass-card-interactive group relative rounded-2xl overflow-hidden transition-all duration-300 cursor-default flex flex-col"
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = `${cert.color}70`;
        el.style.boxShadow = `0 0 45px ${cert.glowColor}, 0 16px 48px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.25)`;
        el.style.backgroundColor = "rgba(23, 35, 58, 0.65)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(255, 255, 255, 0.08)";
        el.style.boxShadow = "0 12px 36px 0 rgba(0, 0, 0, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.12)";
        el.style.backgroundColor = "rgba(17, 24, 39, 0.45)";
      }}
    >
      <div className="glass-rim-top" />

      {/* Top accent line */}
      <div
        className="h-[2px] w-full"
        style={{
          background: `linear-gradient(90deg, transparent, ${cert.color}aa, transparent)`,
        }}
      />

      {/* Background glow radial blob */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 70% 50% at 50% -10%, ${cert.glowColor} 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10 p-7 flex flex-col flex-1">
        {/* Header row */}
        <div className="flex items-start justify-between mb-5">
          {/* Cert badge + emoji in glass pod */}
          <div className="flex items-center gap-3.5">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-300 group-hover:scale-105 glass-pill"
              style={{
                borderColor: `${cert.color}45`,
                backgroundColor: cert.bgAccent,
                boxShadow: `0 0 20px ${cert.glowColor}`,
              }}
            >
              <span className="text-3xl select-none">{cert.emoji}</span>
            </div>
            <div>
              <div
                className="font-mono text-[9px] tracking-widest mb-1 px-2.5 py-0.5 rounded-full border inline-block glass-pill font-bold"
                style={{
                  borderColor: `${cert.color}40`,
                  backgroundColor: cert.bgAccent,
                  color: cert.color,
                }}
              >
                {cert.badge}
              </div>
              <div className="font-mono text-xs text-[#CBD5E1] font-semibold">{cert.issuer}</div>
            </div>
          </div>

          {/* Verified badge */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full glass-pill border-[#10D98A]/30 bg-[#10D98A]/10">
            <CheckCircle2 size={12} className="text-[#10D98A]" />
            <span className="font-mono text-[9px] text-[#10D98A] font-bold">VERIFIED</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-[#F3F4F6] leading-snug mb-2 group-hover:text-white transition-colors">
          {cert.title}
        </h3>

        {/* Date */}
        <div className="flex items-center gap-1.5 mb-4">
          <Calendar size={12} className="text-[#94A3B8]" />
          <span className="font-mono text-[11px] text-[#94A3B8] font-medium">Issued {cert.date}</span>
        </div>

        {/* Description */}
        <p className="text-[#9CA3AF] text-xs leading-relaxed mb-6">
          {cert.description}
        </p>

        {/* Skills covered — glass chips */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {cert.skills.map((skill) => (
            <span
              key={skill}
              className="font-mono text-[10px] px-2.5 py-1 rounded-lg border glass-chip"
              style={{
                borderColor: `${cert.color}35`,
                backgroundColor: `${cert.color}10`,
                color: cert.color,
              }}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Card footer — verify note */}
        <div className="mt-5 pt-3.5 border-t border-white/[0.08] flex items-center justify-between">
          <span className="font-mono text-[10px] text-[#94A3B8]">
            {cert.issuerNote}
          </span>
          <span className="font-mono text-[10px] text-[#10D98A] font-semibold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10D98A] animate-pulse" />
            Active Credential
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Background ambient glow orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[26rem] h-[26rem] rounded-full bg-[#FF6B35]/7 blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-[26rem] h-[26rem] rounded-full bg-[#8B5CF6]/7 blur-[140px]" />
      </div>

      <div className="section-divider mb-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <div className="mb-12 animate-fade-in-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-8 bg-[#FF6B35]/50" />
            <span className="font-mono text-xs text-[#FF6B35] tracking-widest uppercase font-semibold">
              Official Accreditations
            </span>
          </div>
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F3F4F6]">
                Verified{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #FF6B35, #8B5CF6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Certifications
                </span>
              </h2>
              <p className="mt-3 text-[#9CA3AF] max-w-xl">
                Official Databricks credentials validating production lakehouse engineering,
                distributed Spark architecture, and Generative AI system development.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border-[#10D98A]/30">
              <span className="w-2 h-2 rounded-full bg-[#10D98A] animate-pulse shadow-[0_0_8px_#10D98A]" />
              <span className="font-mono text-xs text-[#10D98A] font-semibold">2 Active Certifications</span>
            </div>
          </div>
        </div>

        {/* Cert cards grid — 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up delay-200">
          {CERTS.map((cert) => (
            <CertCard key={cert.id} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
