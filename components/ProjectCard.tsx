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
      className="group relative rounded-xl border border-[#1E2D45] bg-[#111827] overflow-hidden transition-all duration-300 hover:border-opacity-80 flex flex-col"
      style={{
        borderColor: `${project.accentColor}20`,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = `${project.accentColor}60`;
        el.style.boxShadow = `0 0 40px ${project.glowColor}, 0 8px 32px rgba(0,0,0,0.5)`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = `${project.accentColor}20`;
        el.style.boxShadow = "none";
      }}
    >
      {/* Subtle top accent line */}
      <div
        className="h-px w-full"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.accentColor}88, transparent)`,
        }}
      />

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1">
        {/* Header row */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            {/* Status indicator */}
            <div className="flex items-center gap-1.5">
              <div
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: statusColor, boxShadow: `0 0 6px ${statusColor}` }}
              />
              <span className="font-mono text-[10px]" style={{ color: statusColor }}>
                {project.status.toUpperCase()}
              </span>
            </div>
            <span className="text-[#1E2D45]">·</span>
            <span className="font-mono text-[10px] text-[#4B5563]">
              JOB_RUN {project.jobRun}
            </span>
          </div>

          <button className="group/btn flex items-center gap-1 text-[#4B5563] hover:text-[#FF6B35] transition-colors duration-200">
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-[#E5E7EB] mb-2 group-hover:text-white transition-colors duration-200 leading-snug">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-[#6B7280] text-sm leading-relaxed mb-4">
          {project.longDescription}
        </p>

        {/* Micro-tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag.label}
              className="font-mono text-[10px] px-2.5 py-1 rounded-md border transition-all duration-200"
              style={{
                borderColor: `${tag.color}33`,
                backgroundColor: `${tag.color}10`,
                color: tag.color,
              }}
            >
              {tag.label}
            </span>
          ))}
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          {project.metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.label}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[#1E2D45] bg-[#0d1117]"
              >
                <Icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: metric.color }} />
                <div>
                  <div className="font-mono text-xs font-semibold" style={{ color: metric.color }}>
                    {metric.value}
                  </div>
                  <div className="font-mono text-[9px] text-[#4B5563] uppercase tracking-wide">
                    {metric.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Uptime / progress bar */}
        <div className="mt-auto">
          <div className="flex justify-between items-center mb-1.5">
            <div className="flex items-center gap-1.5">
              <Activity className="w-3 h-3 text-[#4B5563]" />
              <span className="font-mono text-[10px] text-[#4B5563]">System Uptime</span>
            </div>
            <span className="font-mono text-[10px]" style={{ color: project.accentColor }}>
              {project.uptime}%
            </span>
          </div>
          <div className="h-1.5 rounded-full bg-[#1E2D45] overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: PROGRESS_WIDTH(project.uptime),
                background: `linear-gradient(90deg, ${project.accentColor}80, ${project.accentColor})`,
                boxShadow: `0 0 8px ${project.accentColor}66`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Bottom metadata bar */}
      <div className="px-6 py-3 border-t border-[#1E2D45] bg-[#0d1117] flex items-center gap-4 flex-wrap">
        <div className="font-mono text-[10px] text-[#4B5563]">
          <span className="text-[#6B7280]">Compute: </span>
          <span style={{ color: project.accentColor }}>{project.compute}</span>
        </div>
        <span className="text-[#1E2D45]">·</span>
        <div className="font-mono text-[10px] text-[#4B5563]">
          <span className="text-[#6B7280]">Target: </span>
          <span style={{ color: project.accentColor }}>{project.target}</span>
        </div>
      </div>
    </div>
  );
}
