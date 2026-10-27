"use client";

import { CheckCircle2, ExternalLink, Calendar } from "lucide-react";

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
    glowColor: "rgba(255,107,53,0.18)",
    borderColor: "border-[#FF6B35]/25",
    bgAccent: "rgba(255,107,53,0.06)",
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
    glowColor: "rgba(139,92,246,0.18)",
    borderColor: "border-[#8B5CF6]/25",
    bgAccent: "rgba(139,92,246,0.06)",
    badge: "FUNDAMENTALS",
  },
];

function CertCard({ cert }: { cert: (typeof CERTS)[0] }) {
  return (
    <div
      className={`group relative rounded-2xl border ${cert.borderColor} bg-[#111827] overflow-hidden transition-all duration-300 cursor-default`}
      style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.4)" }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = `${cert.color}55`;
        el.style.boxShadow = `0 0 40px ${cert.glowColor}, 0 8px 32px rgba(0,0,0,0.5)`;
        el.style.backgroundColor = "#131f30";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = `${cert.color}25`;
        el.style.boxShadow = "0 2px 8px rgba(0,0,0,0.4)";
        el.style.backgroundColor = "#111827";
      }}
    >
      {/* Top accent line */}
      <div
        className="h-0.5 w-full"
        style={{
          background: `linear-gradient(90deg, transparent, ${cert.color}88, transparent)`,
        }}
      />

      {/* Background glow blob */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 70% 50% at 50% -10%, ${cert.glowColor} 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10 p-6">
        {/* Header row */}
        <div className="flex items-start justify-between mb-5">
          {/* Cert badge + emoji */}
          <div className="flex items-center gap-3">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center border-2 transition-all duration-300 group-hover:scale-105"
              style={{
                borderColor: `${cert.color}40`,
                backgroundColor: cert.bgAccent,
                boxShadow: `0 0 16px ${cert.glowColor}`,
              }}
            >
              <span className="text-3xl select-none">{cert.emoji}</span>
            </div>
            <div>
              <div
                className="font-mono text-[9px] tracking-widest mb-1 px-2 py-0.5 rounded border inline-block"
                style={{
                  borderColor: `${cert.color}30`,
                  backgroundColor: cert.bgAccent,
                  color: cert.color,
                }}
              >
                {cert.badge}
              </div>
              <div className="font-mono text-xs text-[#6B7280]">{cert.issuer}</div>
            </div>
          </div>

          {/* Verified badge */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[#10D98A]/25 bg-[#10D98A]/8">
            <CheckCircle2 size={11} className="text-[#10D98A]" />
            <span className="font-mono text-[9px] text-[#10D98A]">VERIFIED</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-[#E5E7EB] leading-snug mb-2 group-hover:text-white transition-colors">
          {cert.title}
        </h3>

        {/* Date */}
        <div className="flex items-center gap-1.5 mb-4">
          <Calendar size={11} className="text-[#4B5563]" />
          <span className="font-mono text-[11px] text-[#6B7280]">Issued {cert.date}</span>
        </div>

        {/* Description */}
        <p className="text-[#6B7280] text-xs leading-relaxed mb-5">
          {cert.description}
        </p>

        {/* Skills covered */}
        <div className="flex flex-wrap gap-1.5">
          {cert.skills.map((skill) => (
            <span
              key={skill}
              className="font-mono text-[10px] px-2 py-0.5 rounded border"
              style={{
                borderColor: `${cert.color}30`,
                backgroundColor: cert.bgAccent,
                color: cert.color,
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 px-6 py-3 border-t border-[#1E2D45] bg-[#0d1117] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] text-[#4B5563]">Issuer:</span>
          <span className="font-mono text-[10px]" style={{ color: cert.color }}>
            {cert.issuer} · {cert.issuerNote}
          </span>
        </div>
        <ExternalLink size={12} className="text-[#4B5563] group-hover:text-[#6B7280] transition-colors" />
      </div>
    </div>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="section-divider mb-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="mb-12 animate-fade-in-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-8 bg-[#FF6B35]/50" />
            <span className="font-mono text-xs text-[#FF6B35] tracking-widest uppercase">
              Certifications
            </span>
          </div>
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#E5E7EB]">
                Verified{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #FF6B35, #8B5CF6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Credentials
                </span>
              </h2>
              <p className="mt-3 text-[#6B7280] max-w-xl">
                Officially certified by Databricks across data engineering and
                generative AI disciplines.
              </p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#1E2D45] bg-[#111827]">
              <CheckCircle2 size={14} className="text-[#10D98A]" />
              <span className="font-mono text-xs text-[#6B7280]">
                2 active certifications · Databricks
              </span>
            </div>
          </div>
        </div>

        {/* Certs grid — 2 cols on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up delay-200 max-w-4xl mx-auto">
          {CERTS.map((cert) => (
            <CertCard key={cert.id} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
