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
    borderColor: "border-[#FF6B35]/20",
    hoverBorder: "hover:border-[#FF6B35]/60",
    glowColor: "rgba(255,107,53,0.15)",
    skills: ["Python", "SQL", "PySpark", "Apache Spark"],
  },
  {
    icon: Layers,
    title: "Data Engineering & Big Data",
    code: "pipeline.engine",
    color: "#F59E0B",
    borderColor: "border-[#F59E0B]/20",
    hoverBorder: "hover:border-[#F59E0B]/60",
    glowColor: "rgba(245,158,11,0.15)",
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
    borderColor: "border-[#3B82F6]/20",
    hoverBorder: "hover:border-[#3B82F6]/60",
    glowColor: "rgba(59,130,246,0.15)",
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
    code: "storage.layer",
    color: "#10D98A",
    borderColor: "border-[#10D98A]/20",
    hoverBorder: "hover:border-[#10D98A]/60",
    glowColor: "rgba(16,217,138,0.12)",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "ClickHouse",
      "Rockset",
      "CrateDB",
      "Amazon Redshift",
    ],
  },
  {
    icon: Server,
    title: "Backend & APIs",
    code: "api.services",
    color: "#06B6D4",
    borderColor: "border-[#06B6D4]/20",
    hoverBorder: "hover:border-[#06B6D4]/60",
    glowColor: "rgba(6,182,212,0.12)",
    skills: ["FastAPI", "REST APIs", "JWT Authentication"],
  },
  {
    icon: HardDrive,
    title: "Data Modeling & Governance",
    code: "governance.layer",
    color: "#94A3B8",
    borderColor: "border-[#94A3B8]/20",
    hoverBorder: "hover:border-[#94A3B8]/60",
    glowColor: "rgba(148,163,184,0.12)",
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
    borderColor: "border-[#8B5CF6]/20",
    hoverBorder: "hover:border-[#8B5CF6]/60",
    glowColor: "rgba(139,92,246,0.15)",
    skills: ["LangChain", "RAG", "FAISS", "Ollama"],
  },
  {
    icon: GitBranch,
    title: "Tools & Platforms",
    code: "ops.toolchain",
    color: "#EC4899",
    borderColor: "border-[#EC4899]/20",
    hoverBorder: "hover:border-[#EC4899]/60",
    glowColor: "rgba(236,72,153,0.12)",
    skills: ["Docker", "Jenkins", "Git", "Linux/Unix", "Tableau"],
  },
];

function CategoryCard({
  category,
}: {
  category: (typeof SKILL_CATEGORIES)[0];
}) {
  const Icon = category.icon;

  return (
    <div
      className={`group relative rounded-xl border ${category.borderColor} ${category.hoverBorder}
        bg-[#111827] p-5 transition-all duration-300 cursor-default flex flex-col`}
      style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.4)" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 28px ${category.glowColor}, 0 4px 20px rgba(0,0,0,0.4)`;
        (e.currentTarget as HTMLElement).style.backgroundColor = "#131f30";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 3px rgba(0,0,0,0.4)";
        (e.currentTarget as HTMLElement).style.backgroundColor = "#111827";
      }}
    >
      {/* Card header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center border flex-shrink-0"
            style={{
              borderColor: `${category.color}33`,
              backgroundColor: `${category.color}12`,
            }}
          >
            <Icon size={15} style={{ color: category.color }} />
          </div>
          <div>
            <h3 className="text-[#E5E7EB] font-semibold text-sm leading-tight">
              {category.title}
            </h3>
            <span className="font-mono text-[10px] text-[#4B5563]">
              {category.code}
            </span>
          </div>
        </div>
        {/* Live run indicator */}
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-[#1E2D45] bg-[#0B0F19] flex-shrink-0">
          <div
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ backgroundColor: category.color }}
          />
          <span className="font-mono text-[9px] text-[#4B5563]">RUN</span>
        </div>
      </div>

      {/* Skill chips */}
      <div className="flex flex-wrap gap-1.5 flex-1">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="font-mono text-[10px] px-2 py-0.5 rounded border transition-all duration-200 group-hover:border-opacity-60"
            style={{
              borderColor: `${category.color}33`,
              backgroundColor: `${category.color}0d`,
              color: category.color,
            }}
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-[#1E2D45] flex items-center justify-between">
        <span className="font-mono text-[10px] text-[#4B5563]">
          {category.skills.length} skills indexed
        </span>
        <div
          className="font-mono text-[10px] px-2 py-0.5 rounded"
          style={{ backgroundColor: `${category.color}15`, color: category.color }}
        >
          active
        </div>
      </div>
    </div>
  );
}

export default function SkillGrid() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="section-divider mb-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="mb-12 animate-fade-in-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-8 bg-[#FF6B35]/50" />
            <span className="font-mono text-xs text-[#FF6B35] tracking-widest uppercase">
              Core Infrastructure Grid
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#E5E7EB]">
            The Skill{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #FF6B35, #F59E0B)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Topography
            </span>
          </h2>
          <p className="mt-3 text-[#6B7280] max-w-xl">
            Full-stack data engineering capabilities — from distributed compute and
            cloud data lakes to AI systems, backend APIs, and modern DevOps tooling.
          </p>

          {/* Stats row */}
          <div className="mt-6 flex flex-wrap gap-4">
            {[
              { val: "8", label: "Skill Domains" },
              { val: "40+", label: "Technologies" },
              { val: "5+", label: "Years Active" },
            ].map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#1E2D45] bg-[#111827]"
              >
                <span className="font-mono text-sm font-bold text-[#FF6B35]">{s.val}</span>
                <span className="font-mono text-[11px] text-[#4B5563]">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 4-col grid on xl, 2-col on md, 1-col on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 animate-fade-in-up delay-200">
          {SKILL_CATEGORIES.map((cat) => (
            <CategoryCard key={cat.title} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
