"use client";

import { Award, CheckCircle2, GitMerge, Zap, Clock } from "lucide-react";

export default function Accreditations() {
  return (
    <section id="accreditations" className="py-20 border-b border-[#E2E6DE] bg-[#F7F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2">
            <span className="section-index">06 / ACCREDITATIONS & ACHIEVEMENTS</span>
            <span className="text-[#CDD4C8]">·</span>
            <span className="font-mono text-xs text-[#7F8880]">
              VERIFIED CREDENTIALS
            </span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#202522] tracking-tight">
            Official industry certifications and open collaboration metrics.
          </h2>

          <p className="text-sm sm:text-base text-[#5A625B] leading-relaxed">
            Formal accreditations issued by Databricks verifying advanced Lakehouse engineering
            and Generative AI foundations, alongside peer-reviewed open-source achievements.
          </p>
        </div>

        {/* 2 Official Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Cert 1 */}
          <div className="surface-card rounded-lg border border-[#CDD4C8] p-6 sm:p-7 space-y-5 bg-[#FFFFFF]">
            <div className="flex items-start justify-between pb-4 border-b border-[#EAEFE7]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-[#EAF0EB] text-[#3E6146] flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#3E6146] font-bold uppercase tracking-wider block">
                    DATABRICKS · PROFESSIONAL
                  </span>
                  <h3 className="font-display font-bold text-base sm:text-lg text-[#202522]">
                    Data Engineer Professional
                  </h3>
                </div>
              </div>

              <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-[#EAF0EB] text-[#3E6146] font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                Verified
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#5A625B] leading-relaxed">
              Advanced credential certifying production-grade Databricks Lakehouse architecture,
              Delta Lake internal storage mechanics, Unity Catalog governance, PySpark execution
              optimization, and Medallion pipeline patterns.
            </p>

            <div className="space-y-2 pt-1 font-mono text-xs">
              <div className="flex items-center justify-between text-[#7F8880] text-[11px]">
                <span>Issuer: Databricks</span>
                <span>Issued: September 2024</span>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {["Delta Lake", "Unity Catalog", "Spark Optimization", "Medallion Architecture", "Production Lakehouse"].map((t) => (
                  <span key={t} className="tech-tag text-[10px] py-0.5 px-2">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Cert 2 */}
          <div className="surface-card rounded-lg border border-[#CDD4C8] p-6 sm:p-7 space-y-5 bg-[#FFFFFF]">
            <div className="flex items-start justify-between pb-4 border-b border-[#EAEFE7]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-[#EDF2FB] text-[#4362A0] flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#4362A0] font-bold uppercase tracking-wider block">
                    DATABRICKS · FOUNDATIONS
                  </span>
                  <h3 className="font-display font-bold text-base sm:text-lg text-[#202522]">
                    Generative AI Fundamentals
                  </h3>
                </div>
              </div>

              <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-[#EDF2FB] text-[#4362A0] font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                Verified
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#5A625B] leading-relaxed">
              Accreditation covering Generative AI systems, foundational large language models,
              prompt engineering, retrieval-augmented generation (RAG) architectures, and practical
              enterprise AI integration within Databricks.
            </p>

            <div className="space-y-2 pt-1 font-mono text-xs">
              <div className="flex items-center justify-between text-[#7F8880] text-[11px]">
                <span>Issuer: Databricks</span>
                <span>Issued: March 2024</span>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {["Generative AI", "LLMs", "RAG Systems", "Prompt Engineering", "Databricks AI"].map((t) => (
                  <span key={t} className="tech-tag text-[10px] py-0.5 px-2">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* GitHub Earned Badges */}
        <div className="surface-card p-6 rounded-lg border border-[#E2E6DE] space-y-4 bg-[#FFFFFF]">
          <div className="flex items-center justify-between pb-3 border-b border-[#EAEFE7]">
            <span className="font-mono text-xs font-bold text-[#202522] uppercase tracking-wide">
              Verified GitHub Achievements
            </span>
            <a
              href="https://github.com/akshayboddhul"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[#3E6146] hover:underline"
            >
              github.com/akshayboddhul →
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Pull Shark */}
            <div className="p-4 rounded border border-[#E2E6DE] bg-[#FAFBF9] space-y-1.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <GitMerge className="w-4 h-4 text-[#3E6146]" />
                  <span className="font-display font-semibold text-sm text-[#202522]">
                    Pull Shark
                  </span>
                </div>
                <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-[#3E6146] text-[#FFFFFF] font-bold">
                  ×3
                </span>
              </div>
              <p className="text-xs text-[#5A625B]">
                Opened pull requests that have been successfully merged — consistent code review standards.
              </p>
            </div>

            {/* YOLO */}
            <div className="p-4 rounded border border-[#E2E6DE] bg-[#FAFBF9] space-y-1.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#B2751E]" />
                  <span className="font-display font-semibold text-sm text-[#202522]">
                    YOLO
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#7F8880]">Earned</span>
              </div>
              <p className="text-xs text-[#5A625B]">
                Merged pull requests directly into codebases without external review — rapid, decisive shipping.
              </p>
            </div>

            {/* Quick Draw */}
            <div className="p-4 rounded border border-[#E2E6DE] bg-[#FAFBF9] space-y-1.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#4362A0]" />
                  <span className="font-display font-semibold text-sm text-[#202522]">
                    Quick Draw
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#7F8880]">Earned</span>
              </div>
              <p className="text-xs text-[#5A625B]">
                Closed an issue or pull request within 5 minutes of opening — rapid incident response.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
