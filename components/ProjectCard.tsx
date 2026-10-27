"use client";

import { CheckCircle2, Zap, Clock, TrendingDown, Activity, ExternalLink } from "lucide-react";

export interface Project {
  id: string;
  jobRun: string;
  status: "Operational" | "Archived" | "Staging";
  title: string;
  description: string;
  longDescription: string;
  tags: { label: string; color: string }[];
  metrics: { icon: typeof Zap; label: string; value: string; color: string }[];
  uptime: number;
  compute: string;
  target: string;
  accentColor: string;
  glowColor: string;
}

const PROGRESS_WIDTH = (v: number) => `${v}%`;

export default function ProjectCard({ project }: { project: Project }) {
  const statusColors: Record<string, string> = {
    Operational: "#10D98A",
    Archived: "#F59E0B",
    Staging: "#3B82F6",
  };
  const statusColor = statusColors[project.status] ?? "#10D98A";

  return (
    <div
      className="glass-card-interactive group relative rounded-2xl overflow-hidden flex flex-col"
      style={{
        borderColor: "rgba(255, 255, 255, 0.08)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = `${project.accentColor}70`;
        el.style.boxShadow = `0 0 45px ${project.glowColor}, 0 16px 48px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.25)`;
        el.style.backgroundColor = "rgba(22, 33, 56, 0.65)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(255, 255, 255, 0.08)";
        el.style.boxShadow = "0 12px 36px 0 rgba(0, 0, 0, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.12)";
        el.style.backgroundColor = "rgba(17, 24, 39, 0.45)";
      }}
    >
      <div className="glass-rim-top" />

      {/* Subtle top accent line */}
      <div
        className="h-[2px] w-full"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.accentColor}aa, transparent)`,
        }}
      />

      {/* Card body */}
      <div className="p-6 sm:p-7 flex flex-col flex-1">
        {/* Header row */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            {/* Status indicator in glass pill */}
            <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full glass-pill border-white/10">
              <div
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: statusColor, boxShadow: `0 0 8px ${statusColor}` }}
              />
              <span className="font-mono text-[10px] font-semibold" style={{ color: statusColor }}>
                {project.status.toUpperCase()}
              </span>
            </div>
            <span className="text-white/10">·</span>
            <span className="font-mono text-[10px] text-[#94A3B8]">
              JOB_RUN {project.jobRun}
            </span>
          </div>

          <button
            aria-label="View project details"
            className="group/btn flex items-center gap-1 text-[#94A3B8] hover:text-[#FF6B35] transition-colors duration-200 p-1 rounded-lg hover:bg-white/[0.05]"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-[#F3F4F6] mb-2 group-hover:text-white transition-colors duration-200 leading-snug">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-[#9CA3AF] text-sm leading-relaxed mb-5">
          {project.longDescription}
        </p>

        {/* Micro-tags with glass styling */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag.label}
              className="font-mono text-[11px] px-2.5 py-1 rounded-lg border transition-all duration-200 glass-chip"
              style={{
                borderColor: `${tag.color}40`,
                backgroundColor: `${tag.color}12`,
                color: tag.color,
              }}
            >
              {tag.label}
            </span>
          ))}
        </div>

        {/* Metrics grid — nested micro-glass tiles */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {project.metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.label}
                className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl border border-white/[0.08] bg-white/[0.025] backdrop-blur-md"
              >
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: `${metric.color}15`,
                    borderColor: `${metric.color}30`,
                  }}
                >
                  <Icon className="w-3.5 h-3.5" style={{ color: metric.color }} />
                </div>
                <div>
                  <div className="font-mono text-xs font-bold" style={{ color: metric.color }}>
                    {metric.value}
                  </div>
                  <div className="font-mono text-[9px] text-[#94A3B8] uppercase tracking-wide font-medium">
                    {metric.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Uptime / progress bar */}
        <div className="mt-auto pt-2">
          <div className="flex justify-between items-center mb-1.5">
            <div className="flex items-center gap-1.5">
              <Activity className="w-3 h-3 text-[#94A3B8]" />
              <span className="font-mono text-[10px] text-[#94A3B8] font-medium">System SLA Uptime</span>
            </div>
            <span className="font-mono text-[10px] font-bold" style={{ color: project.accentColor }}>
              {project.uptime}%
            </span>
          </div>
          <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden p-[1px]">
            <div
              className="h-full rounded-full"
              style={{
                width: PROGRESS_WIDTH(project.uptime),
                background: `linear-gradient(90deg, ${project.accentColor}80, ${project.accentColor})`,
                boxShadow: `0 0 10px ${project.accentColor}`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Bottom metadata bar — Frosted footer */}
      <div className="px-6 py-3.5 border-t border-white/[0.08] bg-white/[0.02] backdrop-blur-md flex items-center gap-4 flex-wrap">
        <div className="font-mono text-[10px] text-[#94A3B8]">
          <span className="text-[#9CA3AF]">Compute: </span>
          <span className="font-semibold" style={{ color: project.accentColor }}>{project.compute}</span>
        </div>
        <span className="text-white/10">·</span>
        <div className="font-mono text-[10px] text-[#94A3B8]">
          <span className="text-[#9CA3AF]">Target: </span>
          <span className="font-semibold" style={{ color: project.accentColor }}>{project.target}</span>
        </div>
      </div>
    </div>
  );
}
