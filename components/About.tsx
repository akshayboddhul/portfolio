"use client";

import { Compass, Code2, Users2, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 border-b border-[#E2E6DE] bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2">
            <span className="section-index">07 / ABOUT THE ENGINEER</span>
            <span className="text-[#CDD4C8]">·</span>
            <span className="font-mono text-xs text-[#7F8880]">
              PHILOSOPHY & FOCUS
            </span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#202522] tracking-tight">
            Engineering data platforms with pragmatic discipline.
          </h2>

          <p className="text-sm sm:text-base text-[#5A625B] leading-relaxed">
            A deeper look into how I think about systems design, technical trade-offs, and collaborating across engineering teams.
          </p>
        </div>

        {/* Narrative & Focus Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-[#5A625B] leading-relaxed">
            <p>
              I am a <strong>Senior Data Engineer</strong> based in Hyderabad, India. Over the past five years,
              I have focused on the foundational layer of modern technology: the distributed data systems
              that capture, validate, transform, and serve analytical truth to businesses.
            </p>

            <p>
              My engineering philosophy is rooted in <strong>pragmatic minimalism</strong>. In an era where new
              data frameworks and buzzwords emerge weekly, I prioritize architectural longevity: decoupled storage,
              open formats like Parquet and Delta Lake, deterministic idempotent pipelines, and clear governance boundaries.
            </p>

            <p>
              What excites me most are the hard distributed computing problems: debugging memory spills in Spark shuffle
              stages, designing multi-tenant partition strategies in ClickHouse, ensuring zero-downtime schema evolution,
              and bridging traditional structured data warehouses with modern LLM vector indexing.
            </p>

            <p>
              I enjoy working closely with product managers, data scientists, and backend engineers. A data platform
              is only as valuable as the decisions and products it powers; understanding what the end consumer needs
              informs every partition key and indexing choice I make.
            </p>
          </div>

          {/* Quick Context Card (5 cols) */}
          <div className="lg:col-span-5 surface-card rounded-lg border border-[#E2E6DE] p-6 space-y-5 bg-[#FAFBF9]">
            <div className="flex items-center justify-between pb-3 border-b border-[#EAEFE7]">
              <span className="font-mono text-xs font-bold text-[#202522] uppercase tracking-wide">
                Engineering Focus Areas
              </span>
              <span className="font-mono text-xs text-[#3E6146] font-semibold">
                Core Domains
              </span>
            </div>

            <div className="space-y-3.5 text-xs text-[#5A625B]">
              <div className="flex items-start gap-2.5">
                <Compass className="w-4 h-4 text-[#3E6146] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#202522] block font-mono text-xs">Lakehouse Architecture</strong>
                  Designing multi-hop Medallion platforms that scale effortlessly from gigabytes to petabytes.
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Code2 className="w-4 h-4 text-[#4362A0] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#202522] block font-mono text-xs">Spark Execution Tuning</strong>
                  Profiling physical execution DAGs, eliminating data skew via salting, and optimizing AQE.
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-[#6E569B] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#202522] block font-mono text-xs">AI & Vector Integration</strong>
                  Building retrieval-augmented generation pipelines connecting unstructured files with vector stores.
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Users2 className="w-4 h-4 text-[#B2751E] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#202522] block font-mono text-xs">Cross-Functional Delivery</strong>
                  Partnering with analytics and business stakeholders to guarantee reliable data contracts.
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#EAEFE7] space-y-2 font-mono text-xs text-[#7F8880]">
              <div className="flex items-center justify-between">
                <span>Location:</span>
                <span className="text-[#202522] font-semibold">Hyderabad, India</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Timezone:</span>
                <span className="text-[#202522] font-semibold">IST (UTC +5:30)</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Work Format:</span>
                <span className="text-[#3E6146] font-semibold">Full-time / Remote-friendly</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
