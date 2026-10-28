"use client";

import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

interface PipelineNode {
  id: string;
  stage: string;
  name: string;
  badge: string;
  tech: string;
  purpose: string;
  invariants: string[];
  latency: string;
  format: string;
}

const PIPELINE_NODES: PipelineNode[] = [
  {
    id: "sources",
    stage: "STAGE 01",
    name: "Heterogeneous Ingest Sources",
    badge: "RAW INGESTION",
    tech: "Kafka Streams · Postgres CDC · S3 / ADLS Lake",
    purpose: "Continuous landing of transactional database events, labor market feeds, and unstructured documents.",
    invariants: ["Idempotent discovery", "Automated schema inference", "Dead-letter retry queue"],
    latency: "Real-time & Hourly Batch",
    format: "JSON, Parquet, CSV, Avro",
  },
  {
    id: "bronze",
    stage: "STAGE 02",
    name: "Bronze Lakehouse Store",
    badge: "IMMUTABLE APPEND",
    tech: "Delta Lake · Databricks Autoloader",
    purpose: "Zero-loss append-only storage preserving raw source payloads with ingestion timestamps and lineage tokens.",
    invariants: ["ACID append protocol", "100% auditability & time travel", "Zero destructive mutations"],
    latency: "< 5s streaming latency",
    format: "Delta Parquet + _delta_log/",
  },
  {
    id: "silver",
    stage: "STAGE 03",
    name: "Silver Cleaned & Conformed",
    badge: "QUALITY GATED",
    tech: "Apache Spark · Great Expectations · PySpark",
    purpose: "Schema enforcement, deduplication, surrogate key generation, and labor taxonomy entity normalization.",
    invariants: ["Great Expectations DQ gates", "Nullability constraint enforcement", "Zero schema drift propagation"],
    latency: "SLA: 15-min micro-batches",
    format: "Delta Lake Columnar",
  },
  {
    id: "gold",
    stage: "STAGE 04",
    name: "Gold Analytical Data Marts",
    badge: "BI & ML READY",
    tech: "Delta Lake · Z-Order Clustering · Spark AQE",
    purpose: "Pre-aggregated dimensional models and star schemas optimized for high-concurrency analytical queries.",
    invariants: ["Sub-second slice & dice", "Z-Order clustering on join keys", "Automated OPTIMIZE compaction"],
    latency: "< 500ms query read SLA",
    format: "Z-Ordered Delta Lake",
  },
  {
    id: "consumers",
    stage: "STAGE 05",
    name: "Downstream Consumer Layer",
    badge: "MULTI-TENANT SERVING",
    tech: "PowerBI · ClickHouse OLAP · FastAPI · FAISS RAG",
    purpose: "Interactive executive dashboards, high-speed operational APIs, and retrieval-augmented generation search.",
    invariants: ["Row-level security enforcement", "Tenant-partitioned query isolation", "High-concurrency cache tier"],
    latency: "< 100ms API response time",
    format: "REST / Columnar / Vector",
  },
];

export default function Hero() {
  const [selectedNode, setSelectedNode] = useState<PipelineNode>(PIPELINE_NODES[2]); // Default to Silver layer

  return (
    <section className="relative pt-10 sm:pt-14 pb-16 sm:pb-20 border-b border-[#E2E6DE] engineering-grid overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* ── LEFT COLUMN: Editorial Profile ── */}
          <div className="lg:col-span-6 space-y-6">
            {/* Metadata index */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="section-index">
                00 / SENIOR DATA ENGINEER
              </span>
              <span className="text-[#CDD4C8]">·</span>
              <span className="font-mono text-xs text-[#7F8880]">
                HYDERABAD, INDIA
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#202522] tracking-tight leading-[1.15]">
              Building data systems that turn distributed complexity into{" "}
              <span className="text-[#3E6146] underline decoration-[#CDD4C8] underline-offset-8">
                operational clarity.
              </span>
            </h1>

            {/* Concise professional statement */}
            <p className="text-sm sm:text-base text-[#5A625B] leading-relaxed max-w-xl">
              I am a Senior Data Engineer with <strong>5+ years of experience</strong> architecting
              scalable lakehouse platforms, high-throughput ETL/ELT pipelines, and distributed
              systems across <strong>Databricks, Apache Spark, and AWS</strong>.
            </p>

            <p className="text-xs sm:text-sm text-[#5A625B] leading-relaxed max-w-xl">
              Currently engineering enterprise data platforms at <strong>Agilisium</strong> (and formerly at{" "}
              <strong>Fission Labs</strong>). Proven track record of optimizing PySpark execution plans
              for up to <strong>25% runtime reduction</strong>, establishing Medallion architecture standards,
              and ensuring zero-downtime schema evolution.
            </p>

            {/* Quick architectural specs — balanced 3-column micro grid */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-2">
              <div className="surface-card p-3 rounded">
                <span className="font-mono text-[9px] sm:text-[10px] text-[#7F8880] uppercase tracking-wider block">
                  Experience
                </span>
                <span className="font-display text-sm sm:text-base font-bold text-[#202522] block mt-0.5">
                  5+ Years
                </span>
                <span className="font-mono text-[9px] sm:text-[10px] text-[#3E6146] block">
                  Senior DE
                </span>
              </div>

              <div className="surface-card p-3 rounded">
                <span className="font-mono text-[9px] sm:text-[10px] text-[#7F8880] uppercase tracking-wider block">
                  Core Stack
                </span>
                <span className="font-display text-sm sm:text-base font-bold text-[#202522] block mt-0.5">
                  Databricks
                </span>
                <span className="font-mono text-[9px] sm:text-[10px] text-[#4362A0] block">
                  Spark + Delta
                </span>
              </div>

              <div className="surface-card p-3 rounded">
                <span className="font-mono text-[9px] sm:text-[10px] text-[#7F8880] uppercase tracking-wider block">
                  Optimization
                </span>
                <span className="font-display text-sm sm:text-base font-bold text-[#202522] block mt-0.5">
                  ↓ 25% Run
                </span>
                <span className="font-mono text-[9px] sm:text-[10px] text-[#3E6146] block">
                  AQE Tuning
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#3E6146] text-[#FFFFFF] font-mono text-xs font-semibold hover:bg-[#2F4B36] transition-colors"
              >
                <span>Explore Selected Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#architecture"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#FFFFFF] border border-[#E2E6DE] text-[#202522] font-mono text-xs font-medium hover:border-[#3E6146] hover:text-[#3E6146] transition-all"
              >
                <span>Architecture Deep-Dive</span>
                <ArrowDown className="w-4 h-4 text-[#7F8880]" />
              </a>
            </div>
          </div>

          {/* ── RIGHT COLUMN: High-Craft Interactive Pipeline Architecture Blueprint ── */}
          <div className="lg:col-span-6 space-y-4">
            <div className="surface-card p-4 sm:p-6 rounded-lg border border-[#CDD4C8] bg-[#FFFFFF] shadow-xs">
              {/* Architecture Header */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#EAEFE7]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#3E6146]" />
                  <span className="font-mono text-xs font-bold text-[#202522] uppercase tracking-wide">
                    Live System Schematic: Medallion Data Flow
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#7F8880] hidden sm:inline">
                  Interactive · Click stage to inspect
                </span>
              </div>

              {/* Connected Lineage Diagram */}
              <div className="space-y-1.5">
                {PIPELINE_NODES.map((node, index) => {
                  const isSelected = selectedNode.id === node.id;
                  return (
                    <div key={node.id} className="relative">
                      {/* Node row button */}
                      <button
                        type="button"
                        onClick={() => setSelectedNode(node)}
                        className={`w-full text-left p-3 rounded-md transition-all flex items-center justify-between border ${
                          isSelected
                            ? "bg-[#EAF0EB] border-[#3E6146] shadow-xs ring-1 ring-[#3E6146]/20"
                            : "bg-[#FAFBF9] border-[#E2E6DE] hover:border-[#CDD4C8] hover:bg-[#F0F3EC]"
                        }`}
                        aria-pressed={isSelected}
                      >
                        <div className="flex items-center gap-3 min-w-0 pr-2">
                          {/* Step number badge */}
                          <span
                            className={`font-mono text-[11px] font-bold w-6 h-6 rounded flex items-center justify-center flex-shrink-0 ${
                              isSelected
                                ? "bg-[#3E6146] text-[#FFFFFF]"
                                : "bg-[#FFFFFF] text-[#5A625B] border border-[#E2E6DE]"
                            }`}
                          >
                            0{index + 1}
                          </span>

                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="font-display font-semibold text-xs sm:text-sm text-[#202522] truncate block">
                                {node.name}
                              </span>
                            </div>
                            <span className="font-mono text-[10px] sm:text-[11px] text-[#7F8880] truncate block">
                              {node.tech}
                            </span>
                          </div>
                        </div>

                        {/* Stage badge */}
                        <div className="text-right flex-shrink-0">
                          <span
                            className={`font-mono text-[9px] sm:text-[10px] px-2 py-0.5 rounded border whitespace-nowrap block ${
                              isSelected
                                ? "bg-[#3E6146] text-[#FFFFFF] border-[#3E6146] font-semibold"
                                : "bg-[#FFFFFF] text-[#5A625B] border-[#E2E6DE]"
                            }`}
                          >
                            {node.badge}
                          </span>
                        </div>
                      </button>

                      {/* Directional Flow Connector between stages */}
                      {index < PIPELINE_NODES.length - 1 && (
                        <div className="flex items-center justify-center py-0.5">
                          <div className="flex items-center gap-1 font-mono text-[9px] text-[#AAB3A5]">
                            <span className="w-1 h-1 rounded-full bg-[#CDD4C8]" />
                            <span className="w-1 h-1 rounded-full bg-[#CDD4C8]" />
                            <span className="w-1 h-1 rounded-full bg-[#3E6146]" />
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Dynamic Architecture Inspector Box */}
              <div className="mt-4 p-4 rounded-md bg-[#FAFBF9] border border-[#E2E6DE] space-y-2.5">
                <div className="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-[#EAEFE7]">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-[#3E6146] font-bold uppercase tracking-wider">
                      {selectedNode.stage} · {selectedNode.badge}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 font-mono text-[10px] text-[#7F8880]">
                    <span>SLA: <strong className="text-[#202522]">{selectedNode.latency}</strong></span>
                    <span>Format: <strong className="text-[#202522]">{selectedNode.format}</strong></span>
                  </div>
                </div>

                <p className="text-xs text-[#202522] leading-relaxed">
                  {selectedNode.purpose}
                </p>

                <div className="pt-2 border-t border-[#EAEFE7] space-y-1">
                  <span className="font-mono text-[9px] text-[#7F8880] uppercase block">
                    Architectural Invariants & Safeguards:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 pt-0.5">
                    {selectedNode.invariants.map((inv) => (
                      <div key={inv} className="flex items-center gap-1.5 text-[10px] font-mono text-[#5A625B]">
                        <CheckCircle2 className="w-3 h-3 text-[#3E6146] flex-shrink-0" />
                        <span className="truncate">{inv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
