"use client";

import { Calendar, MapPin, CheckCircle2 } from "lucide-react";

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  summary: string;
  impacts: string[];
  techStack: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    period: "May 2023 – Present",
    role: "Senior Data Engineer",
    company: "Agilisium",
    location: "Hyderabad, India",
    summary:
      "Leading data platform engineering for a global workforce intelligence platform analyzing large-scale labor market and talent capability datasets.",
    impacts: [
      "Architected 3-tier Delta Lake Medallion platform (Bronze/Silver/Gold) on Databricks & AWS S3 processing TB–PB scale datasets.",
      "Optimized PySpark ETL/ELT pipelines by up to 25% runtime reduction using synthetic key salting, Spark AQE coalescing, and Delta OPTIMIZE routines.",
      "Integrated automated Great Expectations validation gates at the Silver boundary to guarantee zero-downtime schema evolution.",
      "Configured Unity Catalog access control, automated column-level lineage, and audit compliance across multiple workspaces.",
    ],
    techStack: ["Databricks", "Apache Spark", "Delta Lake", "PySpark", "AWS S3", "Unity Catalog", "Great Expectations"],
  },
  {
    period: "Aug 2021 – May 2023",
    role: "Data Engineer",
    company: "Fission Labs",
    location: "Hyderabad, India",
    summary:
      "Engineered multi-tenant data platform components and high-throughput ingestion pipelines for an enterprise HR technology system.",
    impacts: [
      "Designed and deployed a multi-tenant ClickHouse columnar data architecture delivering sub-second aggregations on high-cardinality records.",
      "Engineered reliable real-time and batch ingestion pipelines supporting talent intelligence, workforce analytics, and learning platforms.",
      "Built high-performance FastAPI microservices with JWT-based role-based access control (RBAC) and dynamic SQL generation for tenant isolation.",
      "Optimized storage compression ratios by 4× through custom columnar codec configurations and partition pruning.",
    ],
    techStack: ["ClickHouse", "FastAPI", "Python", "JWT Auth", "PostgreSQL", "REST APIs", "Data Modeling"],
  },
];

export default function ExperienceJourney() {
  return (
    <section id="experience" className="py-20 border-b border-[#E2E6DE] bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2">
            <span className="section-index">05 / PROFESSIONAL JOURNEY</span>
            <span className="text-[#CDD4C8]">·</span>
            <span className="font-mono text-xs text-[#7F8880]">
              5+ YEARS PRODUCTION EXPERIENCE
            </span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#202522] tracking-tight">
            Track record of delivered platforms and measurable optimizations.
          </h2>

          <p className="text-sm sm:text-base text-[#5A625B] leading-relaxed">
            Detailed career timeline documenting roles, engineering responsibilities,
            and actual production outcomes.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 sm:before:left-4 before:w-[1px] before:bg-[#E2E6DE]">
          {EXPERIENCES.map((exp, index) => (
            <div key={exp.company + exp.period} className="relative pl-10 sm:pl-12 space-y-4">
              {/* Timeline marker */}
              <div className="absolute left-1.5 sm:left-2 top-1.5 w-4 h-4 rounded-full bg-[#FFFFFF] border-2 border-[#3E6146] flex items-center justify-center" />

              <div className="surface-card rounded-lg border border-[#E2E6DE] p-6 sm:p-7 space-y-4">
                {/* Role & Company Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#EAEFE7]">
                  <div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-[#202522]">
                      {exp.role}{" "}
                      <span className="text-[#3E6146] font-semibold">
                        @ {exp.company}
                      </span>
                    </h3>
                    <div className="flex items-center gap-3 font-mono text-xs text-[#7F8880] mt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#F0F3EC] text-[#5A625B] border border-[#E2E6DE] self-start sm:self-center">
                    {index === 0 ? "Current Role" : "Previous Role"}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#5A625B] leading-relaxed">
                  {exp.summary}
                </p>

                {/* Key Impacts */}
                <div className="space-y-2 pt-1">
                  <span className="font-mono text-[10px] text-[#7F8880] uppercase tracking-wider block">
                    Key Architectural & Engineering Contributions:
                  </span>
                  <div className="space-y-2">
                    {exp.impacts.map((impact) => (
                      <div key={impact} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#202522]">
                        <CheckCircle2 className="w-4 h-4 text-[#3E6146] flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{impact}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech stack */}
                <div className="pt-3 border-t border-[#EAEFE7] flex flex-wrap gap-1.5">
                  {exp.techStack.map((tech) => (
                    <span key={tech} className="tech-tag text-[10px] py-0.5 px-2">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
