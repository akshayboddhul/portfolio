"use client";

import { Zap, Clock, TrendingDown, Activity, ExternalLink } from "lucide-react";
import ProjectCard, { Project } from "./ProjectCard";

const PROJECTS: Project[] = [
  {
    id: "workforce-intelligence-platform",
    jobRun: "#3104",
    status: "Operational",
    title: "Workforce Intelligence Data Platform",
    description: "AI-driven labor market analytics on Databricks · TB–PB scale",
    longDescription:
      "Architected an AI-driven workforce intelligence platform analyzing labor market & internal skill data. Designed scalable ETL/ELT pipelines on Databricks + Apache Spark processing TB–PB datasets. Reduced pipeline runtime by 25% via Spark AQE, Caching & Salting. Implemented Bronze/Silver/Gold Medallion lakehouse with robust DQ, monitoring & zero-downtime schema evolution.",
    tags: [
      { label: "Senior DE · May 2023–Apr 2026", color: "#10D98A" },
      { label: "Compute: Databricks + PySpark", color: "#FF6B35" },
      { label: "Scale: TB–PB", color: "#F59E0B" },
      { label: "Cloud: AWS + Delta Lake", color: "#06B6D4" },
    ],
    metrics: [
      { icon: TrendingDown, label: "Runtime Reduction", value: "↓25%", color: "#10D98A" },
      { icon: Zap, label: "Data Scale", value: "TB–PB", color: "#FF6B35" },
      { icon: Activity, label: "SLA Compliance", value: "99.9%+", color: "#F59E0B" },
      { icon: Clock, label: "Batch Records", value: "Millions", color: "#94A3B8" },
    ],
    uptime: 99.97,
    compute: "Databricks + PySpark",
    target: "Gold Layer · Enterprise Analytics",
    accentColor: "#FF6B35",
    glowColor: "rgba(255,107,53,0.15)",
  },
  {
    id: "enterprise-hr-ai-platform",
    jobRun: "#1847",
    status: "Operational",
    title: "Enterprise Workforce AI Platform",
    description: "Multi-tenant HR tech platform · ClickHouse · FastAPI · JWT",
    longDescription:
      "Led data platform components for a global enterprise HR technology system (talent management, workforce intelligence & learning). Designed multi-tenant ClickHouse data architecture with optimized access patterns, real-time & batch ingestion pipelines, JWT-based RBAC, and dynamic SQL-driven APIs — dramatically reducing development effort.",
    tags: [
      { label: "Data Eng · Aug 2021–May 2023", color: "#10D98A" },
      { label: "DB: ClickHouse Multi-tenant", color: "#06B6D4" },
      { label: "API: FastAPI + JWT RBAC", color: "#8B5CF6" },
      { label: "Mode: Real-time + Batch", color: "#F59E0B" },
    ],
    metrics: [
      { icon: Zap, label: "Architecture", value: "Multi-tenant", color: "#06B6D4" },
      { icon: Activity, label: "Ingest Mode", value: "RT + Batch", color: "#10D98A" },
      { icon: Clock, label: "Auth", value: "JWT RBAC", color: "#8B5CF6" },
      { icon: TrendingDown, label: "Dev Effort", value: "Reduced", color: "#F59E0B" },
    ],
    uptime: 99.95,
    compute: "ClickHouse + FastAPI",
    target: "Multi-tenant HR Analytics",
    accentColor: "#10D98A",
    glowColor: "rgba(16,217,138,0.15)",
  },
  {
    id: "aws-retail-data-platform",
    jobRun: "#0521",
    status: "Operational",
    title: "Cloud-Based Retail Sales Data Platform",
    description: "Cloud-native AWS data platform · Glue · Lambda · Redshift · Athena",
    longDescription:
      "Designed and implemented a cloud-native retail data platform using AWS services end-to-end. Built ETL pipelines with AWS Glue & Lambda landing into S3 data lake, developed Redshift warehouse models for analytics, enabled serverless querying via Athena, and implemented full monitoring with CloudWatch + IAM access control.",
    tags: [
      { label: "Side Project", color: "#3B82F6" },
      { label: "Cloud: AWS Full-Stack", color: "#F59E0B" },
      { label: "DW: Amazon Redshift", color: "#06B6D4" },
      { label: "Query: Serverless Athena", color: "#10D98A" },
    ],
    metrics: [
      { icon: Zap, label: "ETL", value: "Glue + Lambda", color: "#F59E0B" },
      { icon: Activity, label: "Query Layer", value: "Athena", color: "#10D98A" },
      { icon: Clock, label: "Monitoring", value: "CloudWatch", color: "#3B82F6" },
      { icon: TrendingDown, label: "Storage", value: "S3 Data Lake", color: "#94A3B8" },
    ],
    uptime: 99.90,
    compute: "AWS Glue + Lambda",
    target: "Redshift Analytics DW",
    accentColor: "#3B82F6",
    glowColor: "rgba(59,130,246,0.15)",
  },
  {
    id: "rag-document-intelligence",
    jobRun: "#0078",
    status: "Operational",
    title: "RAG-Based Document Intelligence System",
    description: "LangChain · FAISS · Ollama · semantic search on unstructured data",
    longDescription:
      "Developed an AI engineering project building a document intelligence system using LangChain and FAISS for semantic search on unstructured data. Implemented full data ingestion, transformation & vector indexing pipelines, enabling efficient retrieval and querying of large document datasets using local LLMs via Ollama.",
    tags: [
      { label: "Side Project · AI Engineering", color: "#8B5CF6" },
      { label: "Framework: LangChain + RAG", color: "#FF6B35" },
      { label: "Index: FAISS Vector DB", color: "#06B6D4" },
      { label: "LLM: Ollama (Local)", color: "#10D98A" },
    ],
    metrics: [
      { icon: Zap, label: "Search Type", value: "Semantic", color: "#8B5CF6" },
      { icon: Activity, label: "Vector Index", value: "FAISS", color: "#06B6D4" },
      { icon: Clock, label: "LLM Runtime", value: "Ollama", color: "#FF6B35" },
      { icon: TrendingDown, label: "UI", value: "Streamlit", color: "#10D98A" },
    ],
    uptime: 99.85,
    compute: "Python + LangChain",
    target: "FAISS Vector Search",
    accentColor: "#8B5CF6",
    glowColor: "rgba(139,92,246,0.15)",
  },
];

export default function CaseStudies() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background ambient glow orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-[30rem] h-[30rem] rounded-full bg-[#FF6B35]/7 blur-[140px]" />
        <div className="absolute bottom-10 left-10 w-[28rem] h-[28rem] rounded-full bg-[#8B5CF6]/7 blur-[130px]" />
      </div>

      <div className="section-divider mb-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <div className="mb-12 animate-fade-in-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-8 bg-[#FF6B35]/50" />
            <span className="font-mono text-xs text-[#FF6B35] tracking-widest uppercase font-semibold">
              Architectural Case Studies
            </span>
          </div>
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F3F4F6]">
                The Job Runs{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #FF6B35, #8B5CF6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Ledger
                </span>
              </h2>
              <p className="mt-3 text-[#9CA3AF] max-w-xl">
                Production-grade data platforms and AI engineering systems —
                built at Fission Labs and beyond.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl glass-panel border-white/10">
                <div className="w-2 h-2 rounded-full bg-[#10D98A] animate-pulse shadow-[0_0_8px_#10D98A]" />
                <span className="font-mono text-xs text-[#CBD5E1] font-medium">
                  4 projects · all systems operational
                </span>
              </div>
              <div className="flex gap-2">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg glass-chip border-[#FF6B35]/30 bg-[#FF6B35]/10">
                  <span className="font-mono text-[10px] text-[#FF6B35] font-semibold">2 Professional</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg glass-chip border-[#8B5CF6]/30 bg-[#8B5CF6]/10">
                  <span className="font-mono text-[10px] text-[#8B5CF6] font-semibold">2 Side Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2×2 grid for 4 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up delay-200">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
