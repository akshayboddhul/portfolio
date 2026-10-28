"use client";

import {
  Cpu,
  Layers,
  Cloud,
  Database,
  Server,
  ShieldCheck,
  BrainCircuit,
  Terminal,
} from "lucide-react";

interface SkillCategory {
  title: string;
  code: string;
  icon: typeof Cpu;
  accent: string;
  summary: string;
  skills: { name: string; context: string }[];
}

const TOOLKIT_CATEGORIES: SkillCategory[] = [
  {
    title: "Data Processing & Distributed Compute",
    code: "01 / COMPUTE",
    icon: Cpu,
    accent: "#3E6146",
    summary: "Large-scale distributed batch execution, plan optimization, and procedural transformations.",
    skills: [
      { name: "PySpark", context: "DataFrames, RDDs, Catalyst & AQE optimization" },
      { name: "Apache Spark", context: "Cluster executor management & shuffle tuning" },
      { name: "Python", context: "Modern Python 3.x, ETL pipelines, testing" },
      { name: "SQL", context: "Complex analytical queries, window functions, CTEs" },
    ],
  },
  {
    title: "Big Data & Lakehouse Architecture",
    code: "02 / LAKEHOUSE",
    icon: Layers,
    accent: "#4362A0",
    summary: "Medallion architecture design, ACID transaction management, and automated workflow DAGs.",
    skills: [
      { name: "Databricks", context: "Workspaces, Jobs, Repos, Delta Live Tables" },
      { name: "Delta Lake", context: "ACID transactions, time travel, schema enforcement" },
      { name: "Apache Airflow", context: "DAG orchestration, backfills, task sensors" },
      { name: "ETL / ELT Pipelines", context: "Robust, idempotent source-to-target workflows" },
      { name: "Lakehouse Design", context: "Bronze / Silver / Gold multi-hop data platforms" },
    ],
  },
  {
    title: "Cloud Infrastructure & Distributed Storage",
    code: "03 / CLOUD INFRA",
    icon: Cloud,
    accent: "#B2751E",
    summary: "Cloud-native compute decoupling, storage tiers, serverless query engines, and IAM.",
    skills: [
      { name: "AWS S3", context: "Object storage lake, lifecycle policies, partitioning" },
      { name: "AWS Glue", context: "Serverless ETL jobs & automated Data Cataloging" },
      { name: "Amazon Athena", context: "Serverless SQL exploration across Parquet files" },
      { name: "Amazon Redshift", context: "Columnar data warehousing & star schema queries" },
      { name: "AWS Lambda & Step Functions", context: "Serverless event routing & pipeline orchestration" },
      { name: "Azure (ADF & ADLS Gen2)", context: "Data pipelines & hierarchical cloud lake storage" },
    ],
  },
  {
    title: "Databases & Columnar Warehousing",
    code: "04 / DATABASES",
    icon: Database,
    accent: "#6E569B",
    summary: "Relational OLTP engines, multi-tenant OLAP stores, and distributed document databases.",
    skills: [
      { name: "ClickHouse", context: "Sub-second analytical queries on columnar partitions" },
      { name: "PostgreSQL & MySQL", context: "Relational operational models & indexing strategies" },
      { name: "MongoDB", context: "Document storage for flexible semi-structured payloads" },
      { name: "Rockset & CrateDB", context: "Real-time search & analytical SQL stores" },
      { name: "Redshift DW", context: "Enterprise dimensional reporting & aggregation marts" },
    ],
  },
  {
    title: "Backend Services & Analytical APIs",
    code: "05 / APIS",
    icon: Server,
    accent: "#3E6146",
    summary: "Data serving layers, tenant-isolated analytical endpoints, and token-based access control.",
    skills: [
      { name: "FastAPI", context: "High-performance async Python REST microservices" },
      { name: "RESTful API Design", context: "Clean contracts, payload pagination, OpenAPI specs" },
      { name: "JWT Authentication", context: "Role-based access control (RBAC) & tenant isolation" },
      { name: "Dynamic Query APIs", context: "SQL generation based on user permissions" },
    ],
  },
  {
    title: "Data Modeling, Quality & Governance",
    code: "06 / GOVERNANCE",
    icon: ShieldCheck,
    accent: "#4362A0",
    summary: "Dimensional facts/dimensions, automated data validation assertions, and unified cataloging.",
    skills: [
      { name: "Star Schema & Dimensional Modeling", context: "Kimball methodologies, facts, slowly changing dimensions" },
      { name: "Great Expectations", context: "Automated assertion gates & schema drift validation" },
      { name: "Unity Catalog", context: "Central data governance, row/column access & lineage" },
      { name: "Data Quality Frameworks", context: "Anomaly detection, dead-letter routing, SLA metrics" },
    ],
  },
  {
    title: "AI & Vector Engineering",
    code: "07 / VECTOR AI",
    icon: BrainCircuit,
    accent: "#6E569B",
    summary: "Unstructured document pipelines, semantic chunking, dense vector indexing, and local inference.",
    skills: [
      { name: "LangChain", context: "RAG orchestration, prompt pipelines & document loaders" },
      { name: "FAISS Vector DB", context: "Dense vector indexing for low-latency similarity lookup" },
      { name: "Ollama (Local LLMs)", context: "On-premise / local inference for privacy-first AI" },
      { name: "Document Parsing", context: "Chunking, metadata enrichment, embedding pipelines" },
    ],
  },
  {
    title: "Developer Toolchain & Ops",
    code: "08 / TOOLCHAIN",
    icon: Terminal,
    accent: "#B2751E",
    summary: "Reproducible container environments, continuous deployment, version control, and BI reporting.",
    skills: [
      { name: "Docker", context: "Reproducible containerized runtimes & local testing" },
      { name: "Git & GitHub", context: "Branching strategies, CI PR reviews, version control" },
      { name: "Jenkins & CI/CD", context: "Automated build, test, and pipeline promotion" },
      { name: "Linux / Unix Shell", context: "Bash scripting, system diagnostics, cron automations" },
      { name: "Tableau & BI", context: "Executive dashboards and metric visual reporting" },
    ],
  },
];

export default function Toolkit() {
  return (
    <section id="toolkit" className="py-20 border-b border-[#E2E6DE] bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2">
            <span className="section-index">03 / TECHNICAL TOOLKIT</span>
            <span className="text-[#CDD4C8]">·</span>
            <span className="font-mono text-xs text-[#7F8880]">
              VERIFIED CORE COMPETENCIES
            </span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#202522] tracking-tight">
            An organized index of technologies applied in production.
          </h2>

          <p className="text-sm sm:text-base text-[#5A625B] leading-relaxed">
            No fabricated proficiency bars or arbitrary percentages. Below are the specific
            technologies, architectures, and tools I have actively designed, operated, and tuned.
          </p>
        </div>

        {/* 8 Technical Domains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TOOLKIT_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.code}
                className="surface-card rounded-lg border border-[#E2E6DE] p-5 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  {/* Category Header */}
                  <div className="flex items-start justify-between pb-3 border-b border-[#EAEFE7]">
                    <div>
                      <span className="font-mono text-[10px] text-[#7F8880] block mb-0.5">
                        {cat.code}
                      </span>
                      <h3 className="font-display font-semibold text-sm text-[#202522] leading-snug">
                        {cat.title}
                      </h3>
                    </div>
                    <div
                      className="w-7 h-7 rounded flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${cat.accent}15`, color: cat.accent }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-xs text-[#7F8880] leading-relaxed">
                    {cat.summary}
                  </p>

                  {/* Skills List */}
                  <div className="space-y-2 pt-1">
                    {cat.skills.map((skill) => (
                      <div key={skill.name} className="space-y-0.5">
                        <span className="font-mono text-xs font-semibold text-[#202522] block">
                          {skill.name}
                        </span>
                        <span className="font-mono text-[11px] text-[#5A625B] block">
                          {skill.context}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#EAEFE7] flex items-center justify-between font-mono text-[10px] text-[#7F8880]">
                  <span>{cat.skills.length} competencies</span>
                  <span className="text-[#3E6146] font-semibold">• Active</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
