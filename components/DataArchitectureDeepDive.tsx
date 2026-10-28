"use client";

import {
  Database,
  Cpu,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function DataArchitectureDeepDive() {
  return (
    <section id="architecture" className="py-16 sm:py-20 border-b border-[#E2E6DE] bg-[#F7F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2">
            <span className="section-index">02 / ARCHITECTURE & LAKEHOUSE DESIGN</span>
            <span className="text-[#CDD4C8]">·</span>
            <span className="font-mono text-xs text-[#7F8880]">
              SYSTEMS ENGINEERING DEEP-DIVE
            </span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#202522] tracking-tight">
            How I architect lakehouses: Storage, Governance, and Optimization.
          </h2>

          <p className="text-sm sm:text-base text-[#5A625B] leading-relaxed">
            A production data platform is more than code running on a schedule. It requires
            intentional storage layout, deterministic transaction logs, strict quality boundaries,
            and proactive executor tuning.
          </p>
        </div>

        {/* 4 Architectural Columns / Technical Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Pillar 1: Delta Lake Storage Tier */}
          <div className="surface-card p-5 sm:p-7 rounded-lg border border-[#E2E6DE] space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#EAEFE7]">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-[#3E6146]" />
                <span className="font-display font-semibold text-sm sm:text-base text-[#202522]">
                  1. Storage Tier & ACID Guarantees
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#3E6146] font-bold">
                DELTA LAKE
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#5A625B] leading-relaxed">
              Delta Lake marries the low-cost durability of object storage with the ACID transactions of relational databases. By enforcing immutable append logs, pipelines can run concurrent reads and writes without locking.
            </p>

            <div className="p-3 rounded bg-[#FAFBF9] border border-[#E2E6DE] space-y-2 font-mono text-xs text-[#5A625B]">
              <div className="text-[11px] font-semibold text-[#202522]">
                Key Architectural Patterns Applied:
              </div>
              <div className="space-y-1 text-[11px]">
                <div>• <strong>_delta_log/ JSON commits</strong>: Atomic commit protocols ensuring readers never see corrupted partial writes.</div>
                <div>• <strong>File Compaction Heuristics</strong>: Automated OPTIMIZE jobs coalescing micro-partitions into ~512MB columnar files.</div>
                <div>• <strong>Time-Travel Audits</strong>: Point-in-time snapshot recovery for regression testing and compliance.</div>
              </div>
            </div>
          </div>

          {/* Pillar 2: Unity Catalog & Data Governance */}
          <div className="surface-card p-5 sm:p-7 rounded-lg border border-[#E2E6DE] space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#EAEFE7]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#4362A0]" />
                <span className="font-display font-semibold text-sm sm:text-base text-[#202522]">
                  2. Centralized Governance & Lineage
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#4362A0] font-bold">
                UNITY CATALOG
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#5A625B] leading-relaxed">
              Without unified access control, lakehouses degrade into unmanageable data swamps. Implementing Unity Catalog creates a single pane of glass for access permissions, audit logs, and automatic column-level lineage.
            </p>

            <div className="p-3 rounded bg-[#FAFBF9] border border-[#E2E6DE] space-y-2 font-mono text-xs text-[#5A625B]">
              <div className="text-[11px] font-semibold text-[#202522]">
                Governance Safeguards Implemented:
              </div>
              <div className="space-y-1 text-[11px]">
                <div>• <strong>Automated Lineage Tracking</strong>: Traces column mutations from raw Bronze tables up to Gold marts.</div>
                <div>• <strong>Row-Level & Column Masking</strong>: Dynamically masks PII / sensitive fields based on consumer role.</div>
                <div>• <strong>Cross-Workspace Sharing</strong>: Secure, decoupled data access without physical data duplication.</div>
              </div>
            </div>
          </div>

          {/* Pillar 3: Spark Execution & Skew Mitigation */}
          <div className="surface-card p-5 sm:p-7 rounded-lg border border-[#E2E6DE] space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#EAEFE7]">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#B2751E]" />
                <span className="font-display font-semibold text-sm sm:text-base text-[#202522]">
                  3. Spark AQE & Shuffle Skew Tuning
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#B2751E] font-bold">
                APACHE SPARK
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#5A625B] leading-relaxed">
              In distributed systems, 90% of job slowness is caused by the tail end: a single skewed executor choking on 10× more data than its peers. Resolving skew requires algorithmic adjustments rather than adding more worker nodes.
            </p>

            <div className="p-3 rounded bg-[#FAFBF9] border border-[#E2E6DE] space-y-2 font-mono text-xs text-[#5A625B]">
              <div className="text-[11px] font-semibold text-[#202522]">
                Performance Tuning Tactics:
              </div>
              <div className="space-y-1 text-[11px]">
                <div>• <strong>Synthetic Key Salting</strong>: Distributes high-cardinality hot keys across randomized sub-partitions.</div>
                <div>• <strong>Adaptive Query Execution (AQE)</strong>: Dynamic runtime partition coalescing and skew join mitigation.</div>
                <div>• <strong>Broadcast Threshold Tuning</strong>: Auto-broadcasting dimension lookups up to 64MB to bypass shuffle stages.</div>
              </div>
            </div>
          </div>

          {/* Pillar 4: Boundary Data Quality Gates */}
          <div className="surface-card p-5 sm:p-7 rounded-lg border border-[#E2E6DE] space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#EAEFE7]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3E6146]" />
                <span className="font-display font-semibold text-sm sm:text-base text-[#202522]">
                  4. Boundary Quality Enforcement
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#3E6146] font-bold">
                GREAT EXPECTATIONS
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#5A625B] leading-relaxed">
              Data quality issues become exponentially harder and costlier to rectify the further downstream they travel. Enforcing strict assertion gates at the transition from Bronze to Silver prevents corrupted entities from poisoning business marts.
            </p>

            <div className="p-3 rounded bg-[#FAFBF9] border border-[#E2E6DE] space-y-2 font-mono text-xs text-[#5A625B]">
              <div className="text-[11px] font-semibold text-[#202522]">
                Data Quality Checks in Production:
              </div>
              <div className="space-y-1 text-[11px]">
                <div>• <strong>Schema Invariants</strong>: Validates column nullability, datatype fidelity, and required foreign keys.</div>
                <div>• <strong>Anomaly Routing</strong>: Malformed records are tagged and diverted to quarantine tables for review.</div>
                <div>• <strong>Automated SLA Telemetry</strong>: Real-time Slack/PagerDuty alerts triggered on statistical volume anomalies.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Decision Matrix Table */}
        <div className="surface-card p-5 sm:p-6 rounded-lg border border-[#E2E6DE] space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3 border-b border-[#EAEFE7]">
            <span className="font-mono text-xs font-bold text-[#202522] uppercase tracking-wide">
              Architectural Decision Matrix: Workload Patterns
            </span>
            <span className="font-mono text-[10px] sm:text-[11px] text-[#7F8880]">
              <span className="sm:hidden text-[#3E6146] font-semibold">Swipe table horizontally →</span>
              <span className="hidden sm:inline">Decision Criteria & Trade-offs</span>
            </span>
          </div>

          <div className="overflow-x-auto -mx-1 px-1">
            <table className="w-full text-left font-mono text-xs min-w-[720px]">
              <thead>
                <tr className="border-b border-[#E2E6DE] text-[#7F8880] text-[11px]">
                  <th className="py-2.5 pr-4 font-semibold w-1/4">Workload Profile</th>
                  <th className="py-2.5 px-4 font-semibold w-1/5">Primary Technology</th>
                  <th className="py-2.5 px-4 font-semibold w-1/4">Architectural Trade-Off</th>
                  <th className="py-2.5 pl-4 font-semibold">Production Rationale</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EAEFE7] text-[#5A625B]">
                <tr className="hover:bg-[#FAFBF9] transition-colors">
                  <td className="py-3 pr-4 font-bold text-[#202522]">High-Volume ETL / Lakehouse</td>
                  <td className="py-3 px-4 text-[#3E6146] font-semibold">Databricks + PySpark</td>
                  <td className="py-3 px-4">Higher startup latency vs huge distributed throughput</td>
                  <td className="py-3 pl-4">Handles TB–PB datasets reliably; native support for AQE & Delta ACID.</td>
                </tr>
                <tr className="hover:bg-[#FAFBF9] transition-colors">
                  <td className="py-3 pr-4 font-bold text-[#202522]">Sub-Second Tenant Analytics</td>
                  <td className="py-3 px-4 text-[#4362A0] font-semibold">ClickHouse OLAP</td>
                  <td className="py-3 px-4">Limited multi-table joins vs unmatched aggregation speed</td>
                  <td className="py-3 pl-4">Vectorized columnar execution delivers &lt;100ms dashboard queries.</td>
                </tr>
                <tr className="hover:bg-[#FAFBF9] transition-colors">
                  <td className="py-3 pr-4 font-bold text-[#202522]">Event-Driven Cloud Ingestion</td>
                  <td className="py-3 px-4 text-[#B2751E] font-semibold">AWS Lambda + Glue</td>
                  <td className="py-3 px-4">Cold-start overhead vs zero idle infrastructure cost</td>
                  <td className="py-3 pl-4">Serverless scaling perfectly matches sporadic retail batch arrivals.</td>
                </tr>
                <tr className="hover:bg-[#FAFBF9] transition-colors">
                  <td className="py-3 pr-4 font-bold text-[#202522]">Unstructured Text & Retrieval</td>
                  <td className="py-3 px-4 text-[#6E569B] font-semibold">LangChain + FAISS</td>
                  <td className="py-3 px-4">Approximate matching vs semantic discovery capability</td>
                  <td className="py-3 pl-4">Enables fast dense vector lookups across complex documentation.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
