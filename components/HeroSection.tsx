"use client";

import { Code2, Link, ChevronRight, Zap, Database } from "lucide-react";
import { useEffect, useState } from "react";
import MedallionPipeline from "./MedallionPipeline";

const BOOT_LINES = [
  { text: "$ databricks-workspace@core-engine:~# init --user akshayboddhul", delay: 0 },
  { text: "> Initializing Spark context...               [✓ OK]", delay: 450 },
  { text: "> Connecting to Delta Lake catalog...         [✓ OK]", delay: 950 },
  { text: "> Unity Catalog sync complete...              [✓ OK]", delay: 1450 },
  { text: "> Loading AWS & Azure data services...        [✓ OK]", delay: 1950 },
  { text: "> Mounting pipeline orchestration layer...    [✓ OK]", delay: 2400 },
  { text: "", delay: 2800 },
  { text: "STATUS: ONLINE · 5+ yrs experience · 25% pipeline runtime reduction achieved", delay: 3000 },
];

const EXPERTISE_CHIPS = [
  "Medallion Architecture",
  "Distributed Computing",
  "ETL/ELT Pipelines",
  "Lakehouse Design",
  "Real-Time Streaming",
  "PySpark Optimization",
  "Data Quality",
  "Unity Catalog",
];

export default function HeroSection() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    BOOT_LINES.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines(i + 1);
        if (i === BOOT_LINES.length - 1) {
          setTimeout(() => setShowContent(true), 400);
        }
      }, line.delay);
    });
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 pb-12 overflow-hidden grid-bg hero-glow">
      {/* Background radial gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#FF6B35]/4 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#10D98A]/4 blur-[100px]" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-[#8B5CF6]/3 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT COLUMN ── */}
          <div className="space-y-8 animate-slide-in-left">

            {/* Terminal boot sequence */}
            <div className="rounded-xl border border-[#1E2D45] bg-[#0d1117]/90 backdrop-blur-sm overflow-hidden shadow-2xl">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1E2D45] bg-[#111827]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                </div>
                <div className="flex-1 flex justify-center">
                  <span className="font-mono text-[10px] text-[#4B5563]">
                    databricks-workspace — bash — 80×24
                  </span>
                </div>
              </div>

              {/* Terminal output */}
              <div className="p-4 space-y-1 min-h-[200px]">
                {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
                  <div key={i} className="flex items-start gap-0">
                    <span
                      className={`font-mono text-xs leading-5 ${line.text.startsWith("STATUS")
                          ? "text-[#10D98A] font-semibold"
                          : line.text.startsWith("$")
                            ? "text-[#FF6B35]"
                            : line.text.includes("[✓ OK]")
                              ? "text-[#94A3B8]"
                              : "text-[#6B7280]"
                        }`}
                    >
                      {line.text}
                      {i === visibleLines - 1 && visibleLines < BOOT_LINES.length && (
                        <span className="inline-block w-1.5 h-3.5 bg-[#FF6B35] ml-0.5 animate-blink align-middle" />
                      )}
                    </span>
                  </div>
                ))}
                {visibleLines >= BOOT_LINES.length && (
                  <div className="font-mono text-xs text-[#FF6B35] flex items-center gap-1 pt-1">
                    <span>$</span>
                    <span className="inline-block w-1.5 h-3.5 bg-[#FF6B35] animate-blink" />
                  </div>
                )}
              </div>
            </div>

            {/* Main title & content — revealed after boot */}
            <div
              className={`space-y-6 transition-all duration-700 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
              {/* Experience badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#FF6B35]/30 bg-[#FF6B35]/8">
                <Zap className="w-3.5 h-3.5 text-[#FF6B35]" />
                <span className="font-mono text-xs text-[#FF6B35] tracking-wide">
                  5+ Years · Senior Data Engineer · Agilisium
                </span>
              </div>

              {/* Name + Title */}
              <div className="space-y-1">
                <div className="font-mono text-sm text-[#6B7280] tracking-wide">
                  akshayboddhul45@gmail.com · Hyderabad, India
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
                  <span className="text-[#E5E7EB]">Akshay</span>{" "}
                  <span
                    style={{
                      background: "linear-gradient(135deg, #FF6B35 0%, #ff9561 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Boddhul
                  </span>
                </h1>
                <p className="font-mono text-sm text-[#6B7280]">
                  Senior Data Engineer · Databricks · Apache Spark · AWS
                </p>
              </div>

              {/* Summary */}
              <p className="text-[#9CA3AF] text-sm sm:text-base leading-relaxed max-w-lg border-l-2 border-[#FF6B35]/40 pl-4">
                Senior Data Engineer with 5+ years designing and building scalable data
                platforms on Databricks, Apache Spark, and AWS. Proven track record
                optimizing pipeline runtimes by up to{" "}
                <span className="text-[#FF6B35] font-semibold">25%</span> and delivering
                production-grade lakehouse architectures for enterprise analytics.
              </p>

              {/* Expertise chips */}
              <div className="flex flex-wrap gap-2">
                {EXPERTISE_CHIPS.map((chip) => (
                  <span
                    key={chip}
                    className="font-mono text-[11px] text-[#94A3B8] px-2.5 py-1 rounded border border-[#1E2D45] bg-[#111827] hover:border-[#FF6B35]/50 hover:text-[#FF6B35] transition-all duration-200"
                  >
                    {chip}
                  </span>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://github.com/akshayboddhul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FF6B35] text-white font-semibold text-sm hover:bg-[#ff8055] transition-all duration-200 glow-orange hover:shadow-[0_0_32px_rgba(255,107,53,0.5)]"
                >
                  <Code2 className="w-4 h-4" />
                  GitHub
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a
                  href="https://www.linkedin.com/in/akshayboddhul/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#1E2D45] text-[#E5E7EB] font-semibold text-sm hover:border-[#FF6B35]/50 hover:bg-[#FF6B35]/8 transition-all duration-200"
                >
                  <Link className="w-4 h-4 text-[#0A66C2]" />
                  LinkedIn
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

              {/* Live stats bar */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                {[
                  { label: "Pipeline Speedup", val: "25%", color: "#FF6B35" },
                  { label: "Data Scale", val: "TB–PB", color: "#10D98A" },
                  { label: "Years Exp.", val: "5+", color: "#F59E0B" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="px-3 py-3 rounded-lg border border-[#1E2D45] bg-[#111827] text-center"
                  >
                    <div
                      className="font-mono text-xl font-bold"
                      style={{ color: s.color }}
                    >
                      {s.val}
                    </div>
                    <div className="font-mono text-[10px] text-[#4B5563] uppercase tracking-wide mt-0.5">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN — Medallion Pipeline ── */}
          <div
            className={`flex justify-center animate-slide-in-right transition-all duration-700 ${showContent ? "opacity-100" : "opacity-0"
              }`}
          >
            <div className="w-full max-w-sm">
              <div className="mb-4 flex items-center justify-center gap-2">
                <Database className="w-4 h-4 text-[#FF6B35]" />
                <span className="font-mono text-xs text-[#6B7280] uppercase tracking-widest">
                  Live Data Flow Simulation
                </span>
              </div>
              <MedallionPipeline />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
