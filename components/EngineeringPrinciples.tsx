"use client";

import {
  RefreshCw,
  ShieldAlert,
  Zap,
  Activity,
  Lock,
  FileCode2,
} from "lucide-react";

const PRINCIPLES = [
  {
    num: "01",
    tag: "DETERMINISM",
    title: "Idempotency is non-negotiable.",
    icon: RefreshCw,
    accent: "#3E6146",
    statement:
      "Every batch and micro-batch pipeline must produce the exact same outcome whether executed once or five times. Pipelines that create duplicate rows upon manual restart represent architectural debt.",
    practice:
      "Leverage Delta Lake merge semantics, partitioned overwrite strategies, and deterministic hash keys across all transformation DAGs.",
  },
  {
    num: "02",
    tag: "QUALITY GATES",
    title: "Data quality is a production invariant, not an afterthought.",
    icon: ShieldAlert,
    accent: "#B2751E",
    statement:
      "A fast pipeline producing corrupted records is worse than a delayed one. Schema violations and anomaly thresholds must be evaluated at the boundary before records enter the Silver layer.",
    practice:
      "Embed Great Expectations and schema assertion checks directly into the ingestion flow; quarantine malformed records rather than halting the entire batch.",
  },
  {
    num: "03",
    tag: "PERFORMANCE",
    title: "Optimize partition layout before expanding cluster compute.",
    icon: Zap,
    accent: "#4362A0",
    statement:
      "Doubling worker node count to mask a 4-hour pipeline runtime is expensive and temporary. 90% of Spark slowness stems from data skew, small files, or un-pruned shuffles.",
    practice:
      "Apply synthetic salting on skewed keys, tune Spark AQE partition coalescing, and schedule automated OPTIMIZE file compactions to maintain ~512MB columnar files.",
  },
  {
    num: "04",
    tag: "OBSERVABILITY",
    title: "Observability extends beyond boolean exit codes.",
    icon: Activity,
    accent: "#6E569B",
    statement:
      "A pipeline reporting exit code 0 can still deliver zero records, an empty partition, or silent schema drift. Monitoring must track record velocity, column distributions, and lineage.",
    practice:
      "Instrument runtime metrics, record volume deltas, SLA breach warnings, and automated column lineage in Unity Catalog.",
  },
  {
    num: "05",
    tag: "SECURITY",
    title: "Tenant isolation belongs at the data layer.",
    icon: Lock,
    accent: "#3E6146",
    statement:
      "Relying exclusively on application-layer `WHERE tenant_id = ?` filters leaves analytical systems vulnerable. Enterprise architectures must enforce security at storage and query execution.",
    practice:
      "Implement row-level security (RLS), column masking, and tenant-partitioned access patterns within ClickHouse and Unity Catalog.",
  },
  {
    num: "06",
    tag: "MAINTAINABILITY",
    title: "Data pipelines are software systems, not one-off scripts.",
    icon: FileCode2,
    accent: "#4362A0",
    statement:
      "Notebooks without version control, hardcoded connection strings, and untracked dependencies create brittle platforms. Maintainable data engineering mirrors core software engineering rigor.",
    practice:
      "Standardize modular Python packages, CI/CD pipeline validations, automated staging regression tests, and version-controlled transformation DAGs.",
  },
];

export default function EngineeringPrinciples() {
  return (
    <section id="principles" className="py-20 border-b border-[#E2E6DE] bg-[#F7F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2">
            <span className="section-index">04 / CORE PRINCIPLES</span>
            <span className="text-[#CDD4C8]">·</span>
            <span className="font-mono text-xs text-[#7F8880]">
              HOW I BUILD RESILIENT DATA SYSTEMS
            </span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#202522] tracking-tight">
            Engineering principles forged in production.
          </h2>

          <p className="text-sm sm:text-base text-[#5A625B] leading-relaxed">
            These are not abstract aspirations. They are the practical guidelines that inform
            how I evaluate trade-offs, design schema contracts, and debug distributed systems.
          </p>
        </div>

        {/* 6 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRINCIPLES.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.num}
                className="surface-card rounded-lg border border-[#E2E6DE] p-6 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#EAEFE7]">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-[#3E6146]">
                        {p.num}
                      </span>
                      <span className="text-[#CDD4C8]">·</span>
                      <span className="font-mono text-[10px] text-[#7F8880] uppercase tracking-wider">
                        {p.tag}
                      </span>
                    </div>

                    <div
                      className="w-7 h-7 rounded flex items-center justify-center"
                      style={{ backgroundColor: `${p.accent}15`, color: p.accent }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-display font-semibold text-base text-[#202522] leading-snug">
                    {p.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5A625B] leading-relaxed">
                    {p.statement}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#EAEFE7] space-y-1">
                  <span className="font-mono text-[10px] text-[#7F8880] uppercase block">
                    Production Implementation
                  </span>
                  <p className="font-mono text-[11px] text-[#202522] leading-relaxed">
                    {p.practice}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
