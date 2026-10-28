"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Zap,
  Layers,
} from "lucide-react";

export default function SelectedWork() {
  const [activeTab, setActiveTab] = useState<"architecture" | "optimizations">("architecture");

  return (
    <section id="work" className="py-16 sm:py-20 border-b border-[#E2E6DE] bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2">
            <span className="section-index">01 / SELECTED WORK</span>
            <span className="text-[#CDD4C8]">·</span>
            <span className="font-mono text-xs text-[#7F8880]">
              PRODUCTION SYSTEMS & ARCHITECTURES
            </span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#202522] tracking-tight">
            Proven data platforms, engineered for enterprise reliability.
          </h2>

          <p className="text-sm sm:text-base text-[#5A625B] leading-relaxed">
            Real systems designed and operated in production. Detailed below are the
            architectural decisions, performance bottlenecks resolved, and engineering trade-offs made.
          </p>
        </div>

        {/* ── FEATURED FLAGSHIP PROJECT ── */}
        <article className="surface-card rounded-lg border border-[#CDD4C8] p-5 sm:p-7 lg:p-9 space-y-6 sm:space-y-8 bg-[#FAFBF9]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#E2E6DE]">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-[#3E6146] text-[#FFFFFF] font-semibold">
                  FEATURED PLATFORM
                </span>
                <span className="font-mono text-xs text-[#7F8880]">
                  Agilisium / Fission Labs · May 2023 – Present
                </span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-[#202522]">
                Workforce Intelligence Data Platform
              </h3>
              <p className="text-xs sm:text-sm text-[#5A625B]">
                TB–PB scale AI-driven labor market analytics platform built with Databricks, Apache Spark, and AWS.
              </p>
            </div>

            <div className="flex items-center gap-3 self-start lg:self-center">
              <div className="surface-card px-3.5 py-2 rounded border border-[#E2E6DE] text-left lg:text-right">
                <span className="font-mono text-[10px] text-[#7F8880] uppercase block">
                  Pipeline Optimization
                </span>
                <span className="font-display text-sm sm:text-base font-bold text-[#3E6146]">
                  ↓ 25% Runtime Reduction
                </span>
              </div>
              <a
                href="https://github.com/akshayboddhul"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded border border-[#E2E6DE] bg-[#FFFFFF] hover:border-[#3E6146] hover:text-[#3E6146] transition-colors"
                title="View GitHub profile"
                aria-label="View Akshay's GitHub"
              >
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Interactive Technical Visualization: Medallion Architecture & AQE Optimization */}
          <div className="surface-card p-4 sm:p-6 rounded border border-[#E2E6DE] bg-[#FFFFFF] space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#EAEFE7]">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#3E6146]" />
                <span className="font-mono text-xs font-bold text-[#202522] uppercase tracking-wide">
                  Medallion Lineage: Ingestion ➔ Cleansing ➔ Marts
                </span>
              </div>

              {/* View Switcher */}
              <div className="flex items-center gap-1 p-1 rounded bg-[#F0F3EC] border border-[#E2E6DE] self-start sm:self-auto">
                <button
                  type="button"
                  onClick={() => setActiveTab("architecture")}
                  className={`font-mono text-[11px] px-3 py-1 rounded transition-colors ${
                    activeTab === "architecture"
                      ? "bg-[#FFFFFF] text-[#202522] font-semibold shadow-xs"
                      : "text-[#5A625B] hover:text-[#202522]"
                  }`}
                >
                  Lakehouse Lineage
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("optimizations")}
                  className={`font-mono text-[11px] px-3 py-1 rounded transition-colors ${
                    activeTab === "optimizations"
                      ? "bg-[#FFFFFF] text-[#202522] font-semibold shadow-xs"
                      : "text-[#5A625B] hover:text-[#202522]"
                  }`}
                >
                  Spark AQE Tuning
                </button>
              </div>
            </div>

            {activeTab === "architecture" ? (
              /* Medallion Lineage Diagram with Connected Arrows */
              <div className="relative pt-2">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                  {/* Bronze */}
                  <div className="p-4 rounded border border-[#E2E6DE] bg-[#FAFBF9] space-y-2 relative">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#B2751E]">
                        BRONZE LAYER
                      </span>
                      <span className="font-mono text-[10px] text-[#7F8880]">Raw Delta</span>
                    </div>
                    <h4 className="font-display text-sm font-semibold text-[#202522]">
                      Append-Only Ingest
                    </h4>
                    <p className="text-xs text-[#5A625B] leading-relaxed">
                      Continuous streaming & batch ingestion from AWS S3 via Autoloader. Preserves raw payloads with source audit metadata.
                    </p>
                    <div className="pt-2 border-t border-[#EAEFE7] space-y-1 text-[11px] font-mono text-[#7F8880]">
                      <div>• ACID Append Semantics</div>
                      <div>• Zero destructive mutation</div>
                    </div>
                  </div>

                  {/* Silver */}
                  <div className="p-4 rounded border border-[#3E6146] bg-[#EAF0EB]/40 space-y-2 relative">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#3E6146]">
                        SILVER LAYER
                      </span>
                      <span className="font-mono text-[10px] text-[#3E6146] font-semibold">Quality Gated</span>
                    </div>
                    <h4 className="font-display text-sm font-semibold text-[#202522]">
                      Cleansed & Conformed
                    </h4>
                    <p className="text-xs text-[#5A625B] leading-relaxed">
                      Deduplication, schema enforcement, and Great Expectations assertions. Joins raw job feeds with standardized skill entities.
                    </p>
                    <div className="pt-2 border-t border-[#CDD4C8] space-y-1 text-[11px] font-mono text-[#3E6146]">
                      <div>• Great Expectations DQ Gates</div>
                      <div>• Schema evolution enforcement</div>
                    </div>
                  </div>

                  {/* Gold */}
                  <div className="p-4 rounded border border-[#E2E6DE] bg-[#FAFBF9] space-y-2 relative">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#4362A0]">
                        GOLD LAYER
                      </span>
                      <span className="font-mono text-[10px] text-[#7F8880]">Aggregated Mart</span>
                    </div>
                    <h4 className="font-display text-sm font-semibold text-[#202522]">
                      Analytics Data Marts
                    </h4>
                    <p className="text-xs text-[#5A625B] leading-relaxed">
                      Pre-computed dimensional aggregates and star schemas with Z-Order clustering on time and skill dimensions for sub-second queries.
                    </p>
                    <div className="pt-2 border-t border-[#EAEFE7] space-y-1 text-[11px] font-mono text-[#7F8880]">
                      <div>• OPTIMIZE + Z-ORDER BY</div>
                      <div>• Sub-second BI query latency</div>
                    </div>
                  </div>
                </div>

                {/* Lineage connection indicator */}
                <div className="hidden md:flex items-center justify-around pt-3 font-mono text-[10px] text-[#7F8880]">
                  <span>S3 Files ➔ Bronze Table</span>
                  <span>Bronze ➔ Great Expectations Gate ➔ Silver Table</span>
                  <span>Silver ➔ AQE Join Optimization ➔ Gold Mart</span>
                </div>
              </div>
            ) : (
              /* AQE & Salting Tuning Explanation */
              <div className="p-4 rounded border border-[#3E6146] bg-[#EAF0EB]/30 space-y-3">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#3E6146]" />
                  <span className="font-mono text-xs font-bold text-[#202522] uppercase">
                    How the 25% Pipeline Runtime Reduction Was Achieved
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#5A625B]">
                  <div className="surface-card p-3 rounded border border-[#E2E6DE]">
                    <span className="font-mono text-[10px] text-[#3E6146] font-bold block mb-1">
                      1. KEY SALTING
                    </span>
                    High-volume job postings caused severe partition skew. Introduced synthetic salt keys (0..15) across heavy join keys to distribute shuffle load evenly across all Spark executors.
                  </div>
                  <div className="surface-card p-3 rounded border border-[#E2E6DE]">
                    <span className="font-mono text-[10px] text-[#3E6146] font-bold block mb-1">
                      2. SPARK AQE COALESCING
                    </span>
                    Enabled Adaptive Query Execution (AQE). Automatically coalesced post-shuffle partitions from 200 down to dynamic target sizes, eliminating small-file overhead.
                  </div>
                  <div className="surface-card p-3 rounded border border-[#E2E6DE]">
                    <span className="font-mono text-[10px] text-[#3E6146] font-bold block mb-1">
                      3. DELTA FILE COMPACTION
                    </span>
                    Scheduled automated OPTIMIZE routines to combine micro-batch fragments into standardized 512MB columnar files, accelerating downstream scan performance.
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Deep Narrative Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="space-y-1.5">
              <span className="font-mono text-xs text-[#7F8880] uppercase tracking-wider block">
                The Engineering Challenge
              </span>
              <p className="text-xs sm:text-sm text-[#5A625B] leading-relaxed">
                Ingesting millions of external job requisitions and talent profiles created
                severe data skew during wide shuffles. Unpredictable upstream schema changes
                frequently broke downstream dimensional reports.
              </p>
            </div>

            <div className="space-y-1.5">
              <span className="font-mono text-xs text-[#7F8880] uppercase tracking-wider block">
                Architectural Approach
              </span>
              <p className="text-xs sm:text-sm text-[#5A625B] leading-relaxed">
                Implemented a 3-tier Delta Medallion architecture on Databricks with Unity Catalog.
                Enforced schema validation gates at the Silver boundary, decoupled compute via AWS S3,
                and tuned Spark AQE with partition salting.
              </p>
            </div>

            <div className="space-y-1.5">
              <span className="font-mono text-xs text-[#7F8880] uppercase tracking-wider block">
                Measurable Impact
              </span>
              <p className="text-xs sm:text-sm text-[#5A625B] leading-relaxed">
                Cut daily batch execution time by <strong>25%</strong>, eliminated cluster out-of-memory
                crashes during peak ingestion, and enabled zero-downtime schema evolution for BI consumers.
              </p>
            </div>
          </div>

          {/* Tech stack tags */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#E2E6DE]">
            <span className="font-mono text-xs text-[#7F8880] mr-2">Technologies:</span>
            {["Databricks", "Apache Spark", "Delta Lake", "PySpark", "AWS S3", "Unity Catalog", "Great Expectations", "Spark AQE"].map((t) => (
              <span key={t} className="tech-tag">
                {t}
              </span>
            ))}
          </div>
        </article>

        {/* ── 3 COMPLEMENTARY ENGINEERING PROJECTS WITH VISUAL MINI-DAGS ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Project 2: Enterprise Workforce AI Platform */}
          <article className="surface-card rounded-lg border border-[#E2E6DE] p-5 sm:p-6 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#EAEFE7]">
                <span className="font-mono text-[10px] text-[#4362A0] font-bold uppercase tracking-wider">
                  MULTI-TENANT OLAP PLATFORM
                </span>
                <span className="font-mono text-[10px] text-[#7F8880]">
                  Fission Labs · 2021–2023
                </span>
              </div>

              <h4 className="font-display text-lg sm:text-xl font-bold text-[#202522]">
                Enterprise Workforce AI Platform
              </h4>

              <p className="text-xs sm:text-sm text-[#5A625B] leading-relaxed">
                Designed multi-tenant data platform components for global enterprise HR analytics (talent management, workforce intelligence, and learning systems).
              </p>

              {/* Visual Micro-DAG: Multi-tenant ClickHouse Flow */}
              <div className="p-3.5 rounded bg-[#FAFBF9] border border-[#E2E6DE] space-y-2.5">
                <span className="font-mono text-[10px] text-[#3E6146] font-semibold uppercase tracking-wider block">
                  Data Pipeline Topology
                </span>
                <div className="space-y-1.5 font-mono text-[11px]">
                  <div className="flex items-center justify-between p-1.5 rounded bg-[#FFFFFF] border border-[#EAEFE7]">
                    <span className="text-[#5A625B]">01. INGEST</span>
                    <span className="font-semibold text-[#202522]">Kafka + Batch Ingestion</span>
                  </div>
                  <div className="flex justify-center text-[#AAB3A5] text-[10px]">↓ partitioned stream</div>
                  <div className="flex items-center justify-between p-1.5 rounded bg-[#EAF0EB] border border-[#3E6146]/30">
                    <span className="text-[#3E6146] font-semibold">02. STORE</span>
                    <span className="font-bold text-[#202522]">ClickHouse Columnar (Sharded)</span>
                  </div>
                  <div className="flex justify-center text-[#AAB3A5] text-[10px]">↓ dynamic SQL + JWT</div>
                  <div className="flex items-center justify-between p-1.5 rounded bg-[#FFFFFF] border border-[#EAEFE7]">
                    <span className="text-[#5A625B]">03. SERVE</span>
                    <span className="font-semibold text-[#202522]">FastAPI Tenant-Isolated RBAC</span>
                  </div>
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-[#5A625B]">
                <span className="font-mono text-[10px] text-[#7F8880] uppercase block">
                  Key Engineering Contributions:
                </span>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Tenant-isolated row-level filtering enforced at database level.</li>
                  <li>Columnar compression reducing storage footprint by 4×.</li>
                  <li>Sub-second query latencies on aggregate talent metrics.</li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-[#EAEFE7] flex flex-wrap gap-1.5">
              {["ClickHouse", "FastAPI", "Python", "JWT Auth", "REST APIs", "Data Modeling"].map((t) => (
                <span key={t} className="tech-tag text-[10px] py-1 px-2">
                  {t}
                </span>
              ))}
            </div>
          </article>

          {/* Project 3: Cloud-Based Retail Sales Data Platform */}
          <article className="surface-card rounded-lg border border-[#E2E6DE] p-5 sm:p-6 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#EAEFE7]">
                <span className="font-mono text-[10px] text-[#B2751E] font-bold uppercase tracking-wider">
                  CLOUD DATA PLATFORM
                </span>
                <span className="font-mono text-[10px] text-[#7F8880]">
                  AWS Full-Stack
                </span>
              </div>

              <h4 className="font-display text-lg sm:text-xl font-bold text-[#202522]">
                Cloud Retail Sales Data Platform
              </h4>

              <p className="text-xs sm:text-sm text-[#5A625B] leading-relaxed">
                Cloud-native retail sales platform using AWS end-to-end. Built ingestion pipelines, analytical data warehouse, and serverless ad-hoc query capabilities.
              </p>

              {/* Visual Micro-DAG: AWS Native Pipeline */}
              <div className="p-3.5 rounded bg-[#FAFBF9] border border-[#E2E6DE] space-y-2.5">
                <span className="font-mono text-[10px] text-[#B2751E] font-semibold uppercase tracking-wider block">
                  Data Pipeline Topology
                </span>
                <div className="space-y-1.5 font-mono text-[11px]">
                  <div className="flex items-center justify-between p-1.5 rounded bg-[#FFFFFF] border border-[#EAEFE7]">
                    <span className="text-[#5A625B]">01. INGEST</span>
                    <span className="font-semibold text-[#202522]">Lambda + AWS Glue Jobs</span>
                  </div>
                  <div className="flex justify-center text-[#AAB3A5] text-[10px]">↓ S3 Data Lake landing</div>
                  <div className="flex items-center justify-between p-1.5 rounded bg-[#FAF3E1] border border-[#B2751E]/30">
                    <span className="text-[#B2751E] font-semibold">02. WAREHOUSE</span>
                    <span className="font-bold text-[#202522]">Amazon Redshift (Star Schema)</span>
                  </div>
                  <div className="flex justify-center text-[#AAB3A5] text-[10px]">↓ federated ad-hoc scan</div>
                  <div className="flex items-center justify-between p-1.5 rounded bg-[#FFFFFF] border border-[#EAEFE7]">
                    <span className="text-[#5A625B]">03. QUERY</span>
                    <span className="font-semibold text-[#202522]">Athena Serverless + CloudWatch</span>
                  </div>
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-[#5A625B]">
                <span className="font-mono text-[10px] text-[#7F8880] uppercase block">
                  Key Engineering Contributions:
                </span>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Dimensional modeling for retail transactions and inventory.</li>
                  <li>Automated Glue crawler catalogue for schema discovery.</li>
                  <li>IAM least-privilege security & CloudWatch alert monitoring.</li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-[#EAEFE7] flex flex-wrap gap-1.5">
              {["AWS Glue", "Amazon Redshift", "Athena", "AWS Lambda", "Amazon S3", "CloudWatch"].map((t) => (
                <span key={t} className="tech-tag text-[10px] py-1 px-2">
                  {t}
                </span>
              ))}
            </div>
          </article>

          {/* Project 4: RAG-Based Document Intelligence System */}
          <article className="surface-card rounded-lg border border-[#E2E6DE] p-5 sm:p-6 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#EAEFE7]">
                <span className="font-mono text-[10px] text-[#6E569B] font-bold uppercase tracking-wider">
                  AI & VECTOR ENGINEERING
                </span>
                <span className="font-mono text-[10px] text-[#7F8880]">
                  Local Inference
                </span>
              </div>

              <h4 className="font-display text-lg sm:text-xl font-bold text-[#202522]">
                RAG Document Intelligence System
              </h4>

              <p className="text-xs sm:text-sm text-[#5A625B] leading-relaxed">
                End-to-end data pipeline transforming unstructured document corpuses into vector embeddings for semantic search and retrieval-augmented generation.
              </p>

              {/* Visual Micro-DAG: Vector Pipeline */}
              <div className="p-3.5 rounded bg-[#FAFBF9] border border-[#E2E6DE] space-y-2.5">
                <span className="font-mono text-[10px] text-[#6E569B] font-semibold uppercase tracking-wider block">
                  Data Pipeline Topology
                </span>
                <div className="space-y-1.5 font-mono text-[11px]">
                  <div className="flex items-center justify-between p-1.5 rounded bg-[#FFFFFF] border border-[#EAEFE7]">
                    <span className="text-[#5A625B]">01. PARSE</span>
                    <span className="font-semibold text-[#202522]">Recursive Chunking & Overlap</span>
                  </div>
                  <div className="flex justify-center text-[#AAB3A5] text-[10px]">↓ dense embedding generation</div>
                  <div className="flex items-center justify-between p-1.5 rounded bg-[#F2EEF9] border border-[#6E569B]/30">
                    <span className="text-[#6E569B] font-semibold">02. INDEX</span>
                    <span className="font-bold text-[#202522]">FAISS Vector Index (&lt;50ms)</span>
                  </div>
                  <div className="flex justify-center text-[#AAB3A5] text-[10px]">↓ semantic context prompt</div>
                  <div className="flex items-center justify-between p-1.5 rounded bg-[#FFFFFF] border border-[#EAEFE7]">
                    <span className="text-[#5A625B]">03. INFER</span>
                    <span className="font-semibold text-[#202522]">Ollama Local LLM + Streamlit UI</span>
                  </div>
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-[#5A625B]">
                <span className="font-mono text-[10px] text-[#7F8880] uppercase block">
                  Key Engineering Contributions:
                </span>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Context-aware chunking strategy to preserve tabular semantics.</li>
                  <li>Sub-50ms vector similarity lookup with FAISS indexing.</li>
                  <li>Privacy-first local LLM inference via Ollama runtime.</li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-[#EAEFE7] flex flex-wrap gap-1.5">
              {["LangChain", "FAISS", "Ollama", "Python", "Streamlit", "Vector Embeddings"].map((t) => (
                <span key={t} className="tech-tag text-[10px] py-1 px-2">
                  {t}
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
