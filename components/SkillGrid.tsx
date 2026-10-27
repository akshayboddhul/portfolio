"use client";

import {
  Cpu,
  HardDrive,
  Cloud,
  Database,
  Server,
  GitBranch,
  Layers,
  BrainCircuit,
} from "lucide-react";

const SKILL_CATEGORIES = [
  {
    icon: Cpu,
    title: "Programming & Data Processing",
    code: "lang.runtime",
    color: "#FF6B35",
    glowColor: "rgba(255,107,53,0.18)",
    skills: ["Python", "SQL", "PySpark", "Apache Spark"],
  },
  {
    icon: Layers,
    title: "Data Engineering & Big Data",
    code: "pipeline.engine",
    color: "#F59E0B",
    glowColor: "rgba(245,158,11,0.18)",
    skills: [
      "Databricks",
      "Delta Lake",
      "Apache Airflow",
      "ETL/ELT Pipelines",
      "Data Pipelines",
      "Lakehouse Architecture",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & Distributed Systems",
    code: "cloud.infra",
    color: "#3B82F6",
    glowColor: "rgba(59,130,246,0.18)",
    skills: [
      "AWS S3",
      "AWS Glue",
      "AWS Athena",
      "AWS Redshift",
      "AWS Lambda",
      "Step Functions",
      "QuickSight",
      "Azure ADF",
      "Azure ADLS",
      "Distributed Systems",
    ],
  },
  {
    icon: Database,
    title: "Databases & Data Warehousing",
    code: "storage.engine",
    color: "#10D98A",
    glowColor: "rgba(16,217,138,0.18)",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "ClickHouse",
      "Rockset",
      "CrateDB",
      "Redshift",
    ],
  },
  {
    icon: Server,
    title: "Backend & APIs",
    code: "api.gateway",
    color: "#06B6D4",
    glowColor: "rgba(6,182,212,0.18)",
    skills: ["FastAPI", "REST APIs", "JWT Auth", "API Design"],
  },
  {
    icon: HardDrive,
    title: "Data Modeling & Governance",
    code: "governance.layer",
    color: "#94A3B8",
    glowColor: "rgba(148,163,184,0.18)",
    skills: [
      "Star Schema",
      "Data Modeling",
      "Great Expectations",
      "Unity Catalog",
      "Data Quality",
    ],
  },
  {
    icon: BrainCircuit,
    title: "AI / LLM Systems",
    code: "ai.inference",
    color: "#8B5CF6",
    glowColor: "rgba(139,92,246,0.18)",
    skills: ["LangChain", "RAG", "FAISS", "Ollama"],
  },
  {
    icon: GitBranch,
    title: "Tools & Platforms",
    code: "ops.toolchain",
    color: "#EC4899",
    glowColor: "rgba(236,72,153,0.18)",
    skills: ["Docker", "Jenkins", "Git", "Linux/Unix", "Tableau"],
  },
];

/** Returns theme-aware glass background colours for hover states */
function isLightMode() {
  if (typeof document === "undefined") return false;
  return document.documentElement.classList.contains("light");
}

function CategoryCard({
  category,
}: {
  category: (typeof SKILL_CATEGORIES)[0];
}) {
  const Icon = category.icon;

  return (
    <div
      className="group relative rounded-2xl glass-panel-interactive p-6 transition-all duration-300 cursor-default flex flex-col h-full overflow-hidden"
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        const light = isLightMode();
        el.style.borderColor = `${category.color}60`;
        el.style.boxShadow = light
          ? `0 0 36px ${category.glowColor}, 0 16px 40px rgba(15,23,42,0.10), inset 0 1px 0 rgba(255,255,255,0.95)`
          : `0 0 36px ${category.glowColor}, 0 16px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.2)`;
        el.style.backgroundColor = light
          ? "rgba(255, 255, 255, 0.72)"
          : "rgba(22, 33, 56, 0.65)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        const light = isLightMode();
        el.style.borderColor = light
          ? "rgba(148, 163, 184, 0.35)"
          : "rgba(255, 255, 255, 0.08)";
        el.style.boxShadow = light
          ? "0 8px 32px rgba(15,23,42,0.08), 0 2px 8px rgba(15,23,42,0.06), inset 0 1px 0 rgba(255,255,255,0.95)"
          : "0 8px 32px 0 rgba(0,0,0,0.37), inset 0 1px 0 0 rgba(255,255,255,0.1)";
        el.style.backgroundColor = light
          ? "rgba(255, 255, 255, 0.52)"
          : "rgba(17, 24, 39, 0.42)";
      }}
    >
      <div className="glass-rim-top" />

      {/* Card header — fixed height, never shrinks */}
      <div className="flex items-start justify-between mb-4 flex-shrink-0">
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center border flex-shrink-0 glass-pill"
            style={{
              borderColor: `${category.color}40`,
              backgroundColor: `${category.color}15`,
            }}
          >
            <Icon size={17} style={{ color: category.color }} />
          </div>
          <div>
            <h3 className="text-[#F3F4F6] font-bold text-sm leading-tight group-hover:text-white transition-colors">
              {category.title}
            </h3>
            <span className="font-mono text-[10px] text-[#94A3B8]">
              {category.code}
            </span>
          </div>
        </div>
        {/* Live run indicator */}
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full glass-pill border-white/10 flex-shrink-0">
          <div
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ backgroundColor: category.color, boxShadow: `0 0 8px ${category.color}` }}
          />
          <span className="font-mono text-[9px] text-[#94A3B8] font-semibold">ONLINE</span>
        </div>
      </div>

      {/* Skill chips — flex-1 fills available space, content-start keeps chips top-aligned */}
      <div className="flex flex-wrap gap-1.5 flex-1 content-start">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="font-mono text-[11px] px-2.5 py-[5px] min-h-[26px] rounded-lg border transition-all duration-200 glass-chip inline-flex items-center"
            style={{
              borderColor: `${category.color}35`,
              backgroundColor: `${category.color}10`,
              color: category.color,
            }}
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Footer — pushed to bottom via mt-auto */}
      <div className="mt-auto pt-4 border-t border-white/[0.08] flex items-center justify-between flex-shrink-0">
        <span className="font-mono text-[10px] text-[#94A3B8] font-medium">
          {category.skills.length} skills indexed
        </span>
        <div
          className="font-mono text-[10px] px-2.5 py-0.5 rounded-full glass-pill font-medium"
          style={{
            borderColor: `${category.color}40`,
            backgroundColor: `${category.color}15`,
            color: category.color,
          }}
        >
          active
        </div>
      </div>
    </div>
  );
}

export default function SkillGrid() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background ambient glow orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-20 w-96 h-96 rounded-full bg-[#06B6D4]/[0.08] blur-[130px] light-orb-boost" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#8B5CF6]/[0.08] blur-[130px] light-orb-boost" />
      </div>

      <div className="section-divider mb-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <div className="mb-12 animate-fade-in-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-8 bg-[#FF6B35]/50" />
            <span className="font-mono text-xs text-[#FF6B35] tracking-widest uppercase font-semibold">
              Core Infrastructure Grid
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F3F4F6]">
            The Skill{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #FF6B35 0%, #ff9561 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Taxonomy
            </span>
          </h2>
          <p className="text-[#9CA3AF] text-sm mt-2 max-w-xl">
            8 domain specializations across modern data engineering, lakehouse architecture,
            cloud infrastructure, and AI engineering.
          </p>
        </div>

        {/* 8-category 2-column grid — auto-rows-fr makes every row's cards equal height */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:auto-rows-fr">
          {SKILL_CATEGORIES.map((category) => (
            <CategoryCard key={category.code} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
