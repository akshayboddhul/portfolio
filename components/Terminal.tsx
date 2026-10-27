"use client";

import { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, Download, Mail, BarChart3, ChevronRight } from "lucide-react";

type LineType = "command" | "output" | "error" | "success" | "system" | "blank";

interface TerminalLine {
  id: number;
  type: LineType;
  content: string;
}

const WELCOME_LINES: TerminalLine[] = [
  { id: 0, type: "system", content: "Databricks Control Center — Interactive Console v2.1.0" },
  { id: 1, type: "system", content: "Session: akshayboddhul · Cluster: core-engine-prod · Workers: 12" },
  { id: 2, type: "blank", content: "" },
  { id: 3, type: "output", content: "Type a command or click a shortcut below. Try ./get_resume" },
  { id: 4, type: "blank", content: "" },
];

let lineCounter = 10;

function getTimestamp() {
  return new Date().toISOString().replace("T", " ").split(".")[0] + " UTC";
}

const COMMANDS: Record<string, () => TerminalLine[]> = {
  "./get_resume": () => {
    const lines: TerminalLine[] = [
      { id: lineCounter++, type: "command", content: "$ ./get_resume" },
      { id: lineCounter++, type: "blank", content: "" },
      { id: lineCounter++, type: "success", content: "// Fetching resume payload..." },
      { id: lineCounter++, type: "blank", content: "" },
      {
        id: lineCounter++,
        type: "output",
        content: JSON.stringify(
          {
            command: "get_resume",
            timestamp: getTimestamp(),
            status: "SUCCESS",
            payload: {
              name: "Akshay Shrinivas Boddhul",
              format: ["PDF", "DOCX"],
              title: "Senior Databricks Data Engineer Resume",
              link: "https://your-resume-link.com/resume.pdf",
              last_updated: "2026-10",
              highlights: [
                "5+ years Databricks, Apache Spark & AWS data engineering",
                "25% pipeline runtime reduction via Spark AQE, Caching & Salting",
                "Lakehouse architecture — Bronze/Silver/Gold Medallion design",
                "Multi-tenant ClickHouse data platforms with optimized access patterns",
                "LangChain, RAG, FAISS AI engineering & document intelligence systems",
                "Databricks Data Engineer Professional certified (Sep 2024)",
              ],
            },
          },
          null,
          2
        ),
      },
      { id: lineCounter++, type: "blank", content: "" },
    ];
    return lines;
  },

  "./trigger_contact": () => {
    const lines: TerminalLine[] = [
      { id: lineCounter++, type: "command", content: "$ ./trigger_contact" },
      { id: lineCounter++, type: "blank", content: "" },
      { id: lineCounter++, type: "success", content: "// Loading contact manifest..." },
      { id: lineCounter++, type: "blank", content: "" },
      {
        id: lineCounter++,
        type: "output",
        content: JSON.stringify(
          {
            command: "trigger_contact",
            timestamp: getTimestamp(),
            status: "SUCCESS",
            payload: {
              name: "Akshay Shrinivas Boddhul",
              title: "Senior Databricks Data Engineer",
              email: "akshayboddhul45@gmail.com",
              linkedin: "linkedin.com/in/akshayboddhul/",
              github: "github.com/akshayboddhul",
              location: "Hyderabad, India",
              timezone: "IST (UTC+5:30)",
              experience: "5+ years",
              current_employer: "Fission Labs",
              available_for: [
                "Senior / Staff Data Engineer roles",
                "Remote-first opportunities",
                "Databricks & Lakehouse consulting",
                "AI / LLM data platform projects",
              ],
              response_time: "< 24 hours",
            },
          },
          null,
          2
        ),
      },
      { id: lineCounter++, type: "blank", content: "" },
    ];
    return lines;
  },

  "./cluster_logs": () => {
    const lines: TerminalLine[] = [
      { id: lineCounter++, type: "command", content: "$ ./cluster_logs" },
      { id: lineCounter++, type: "blank", content: "" },
      { id: lineCounter++, type: "success", content: "// Pulling cluster telemetry..." },
      { id: lineCounter++, type: "blank", content: "" },
      {
        id: lineCounter++,
        type: "output",
        content: JSON.stringify(
          {
            command: "cluster_logs",
            timestamp: getTimestamp(),
            status: "SUCCESS",
            engineer: "akshayboddhul",
            cluster: {
              id: "workforce-intel-prod",
              runtime: "Databricks Runtime 15.4 LTS",
              spark_version: "3.5.1",
              python_version: "3.11.7",
              workers: 12,
              driver_instance: "m5.2xlarge",
              worker_instance: "m5.4xlarge",
            },
            pipeline_metrics: {
              runtime_reduction_pct: 25,
              optimization_techniques: ["AQE", "Caching", "Salting", "Z-ordering"],
              data_scale: "TB–PB",
              records_per_batch: "Millions",
              sla_compliance_pct: 99.97,
              active_streams: 4,
              jobs_completed_total: 14293,
            },
            health: {
              status: "HEALTHY",
              last_incident: "None",
              open_alerts: 0,
              certifications_active: 2,
            },
          },
          null,
          2
        ),
      },
      { id: lineCounter++, type: "blank", content: "" },
    ];
    return lines;
  },

  clear: () => {
    lineCounter = 10;
    return [];
  },

  help: () => [
    { id: lineCounter++, type: "command", content: "$ help" },
    { id: lineCounter++, type: "blank", content: "" },
    { id: lineCounter++, type: "output", content: "Available commands:" },
    { id: lineCounter++, type: "output", content: "  ./get_resume       — Resume highlights & download link" },
    { id: lineCounter++, type: "output", content: "  ./trigger_contact  — Contact information & availability" },
    { id: lineCounter++, type: "output", content: "  ./cluster_logs     — Live cluster telemetry & pipeline metrics" },
    { id: lineCounter++, type: "output", content: "  clear              — Clear terminal output" },
    { id: lineCounter++, type: "output", content: "  help               — Show this help message" },
    { id: lineCounter++, type: "blank", content: "" },
  ],
};

function renderLine(line: TerminalLine) {
  if (line.type === "blank") return <div key={line.id} className="h-3" />;

  if (line.type === "command") {
    return (
      <div key={line.id} className="font-mono text-xs text-[#FF6B35] leading-5">
        {line.content}
      </div>
    );
  }

  if (line.type === "system") {
    return (
      <div key={line.id} className="font-mono text-xs text-[#4B5563] leading-5">
        {line.content}
      </div>
    );
  }

  if (line.type === "success") {
    return (
      <div key={line.id} className="font-mono text-xs text-[#10D98A] leading-5">
        {line.content}
      </div>
    );
  }

  if (line.type === "error") {
    return (
      <div key={line.id} className="font-mono text-xs text-red-400 leading-5">
        {line.content}
      </div>
    );
  }

  try {
    const parsed = JSON.parse(line.content);
    const formatted = JSON.stringify(parsed, null, 2);
    const highlighted = formatted
      .replace(/(\"[\w_]+\"):/g, '<span style="color:#06B6D4">$1</span>:')
      .replace(/: (".*?")/g, ': <span style="color:#10D98A">$1</span>')
      .replace(/: (true|false)/g, ': <span style="color:#F59E0B">$1</span>')
      .replace(/: (\d+\.?\d*)/g, ': <span style="color:#FF6B35">$1</span>');
    return (
      <div
        key={line.id}
        className="font-mono text-xs text-[#94A3B8] leading-5 whitespace-pre"
        dangerouslySetInnerHTML={{ __html: highlighted }}
      />
    );
  } catch {
    return (
      <div key={line.id} className="font-mono text-xs text-[#94A3B8] leading-5">
        {line.content}
      </div>
    );
  }
}

const SHORTCUTS = [
  { label: "./get_resume", icon: Download, color: "#FF6B35" },
  { label: "./trigger_contact", icon: Mail, color: "#10D98A" },
  { label: "./cluster_logs", icon: BarChart3, color: "#8B5CF6" },
];

export default function Terminal() {
  const [lines, setLines] = useState<TerminalLine[]>(WELCOME_LINES);
  const [inputVal, setInputVal] = useState("");
  const outputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [lines]);

  const runCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    const handler = COMMANDS[trimmed] || COMMANDS[cmd.trim()];

    if (trimmed === "clear") {
      setLines(WELCOME_LINES);
      return;
    }

    if (!handler) {
      setLines((prev) => [
        ...prev,
        { id: lineCounter++, type: "command", content: `$ ${cmd}` },
        {
          id: lineCounter++,
          type: "error",
          content: `bash: ${cmd}: command not found. Type 'help' to see available commands.`,
        },
        { id: lineCounter++, type: "blank", content: "" },
      ]);
      return;
    }

    const newLines = handler();
    setLines((prev) => [...prev, ...newLines]);
    setInputVal("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      runCommand(inputVal);
      setInputVal("");
    }
  };

  return (
    <section id="terminal" className="py-24 relative overflow-hidden">
      {/* Background ambient glow orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -right-20 w-[28rem] h-[28rem] rounded-full bg-[#10D98A]/6 blur-[140px]" />
        <div className="absolute bottom-10 -left-20 w-[28rem] h-[28rem] rounded-full bg-[#3B82F6]/6 blur-[140px]" />
      </div>

      <div className="section-divider mb-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="mb-8 animate-fade-in-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-8 bg-[#FF6B35]/50" />
            <span className="font-mono text-xs text-[#FF6B35] tracking-widest uppercase font-semibold">
              Live System Console
            </span>
          </div>
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F3F4F6]">
                Interactive{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #10D98A, #3B82F6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Terminal
                </span>
              </h2>
              <p className="mt-2 text-[#9CA3AF]">
                Run commands to explore — click a shortcut or type your own.
              </p>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)] animate-fade-in-up delay-200 relative">
          <div className="glass-rim-top" />

          {/* Title bar */}
          <div className="flex items-center gap-3 px-4 py-3 bg-white/[0.04] backdrop-blur-md border-b border-white/[0.08]">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57] shadow-[0_0_6px_rgba(255,95,87,0.6)]" />
              <div className="w-3 h-3 rounded-full bg-[#FEBC2E] shadow-[0_0_6px_rgba(254,188,46,0.6)]" />
              <div className="w-3 h-3 rounded-full bg-[#28C840] shadow-[0_0_6px_rgba(40,200,64,0.6)]" />
            </div>
            <div className="flex-1 flex items-center justify-center gap-2">
              <TerminalIcon className="w-3.5 h-3.5 text-[#10D98A]" />
              <span className="font-mono text-[11px] text-[#94A3B8] font-medium tracking-wide">
                akshayboddhul@core-engine-prod · bash
              </span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full glass-pill border-emerald-500/30">
              <div className="w-1.5 h-1.5 rounded-full bg-[#10D98A] animate-pulse" />
              <span className="font-mono text-[10px] text-[#10D98A] font-semibold">LIVE</span>
            </div>
          </div>

          {/* Output area */}
          <div
            ref={outputRef}
            className="p-4 sm:p-5 bg-black/35 backdrop-blur-xl h-80 overflow-y-auto cursor-text"
            onClick={() => inputRef.current?.focus()}
          >
            {lines.map((line) => renderLine(line))}
          </div>

          {/* Input row */}
          <div className="flex items-center gap-2 px-4 sm:px-5 py-3 bg-black/25 backdrop-blur-md border-t border-white/[0.08]">
            <span className="font-mono text-xs text-[#FF6B35] font-bold flex-shrink-0">$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder='Type a command and press Enter — e.g. "help"'
              className="flex-1 bg-transparent font-mono text-xs text-[#F3F4F6] placeholder-[#64748B] outline-none caret-[#FF6B35]"
              spellCheck={false}
              autoComplete="off"
            />
            <button
              aria-label="Execute command"
              onClick={() => { runCommand(inputVal); setInputVal(""); }}
              className="flex-shrink-0 p-1.5 text-[#94A3B8] hover:text-[#FF6B35] hover:bg-white/[0.05] rounded-lg transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Quick command shortcuts */}
          <div className="px-4 sm:px-5 py-3.5 bg-white/[0.02] backdrop-blur-md border-t border-white/[0.08] flex flex-wrap gap-2 items-center">
            <span className="font-mono text-[10px] text-[#94A3B8] self-center mr-1 font-medium">
              Quick commands:
            </span>
            {SHORTCUTS.map((sc) => {
              const Icon = sc.icon;
              return (
                <button
                  key={sc.label}
                  onClick={() => runCommand(sc.label)}
                  className="inline-flex items-center gap-1.5 font-mono text-[10px] px-3 py-1.5 rounded-lg border transition-all duration-200 glass-chip hover:text-white"
                  style={{
                    borderColor: `${sc.color}35`,
                    backgroundColor: `${sc.color}10`,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${sc.color}80`;
                    (e.currentTarget as HTMLElement).style.backgroundColor = `${sc.color}25`;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 16px ${sc.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${sc.color}35`;
                    (e.currentTarget as HTMLElement).style.backgroundColor = `${sc.color}10`;
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <Icon className="w-3 h-3" style={{ color: sc.color }} />
                  <span style={{ color: sc.color }} className="font-semibold">{sc.label}</span>
                </button>
              );
            })}
            <button
              onClick={() => runCommand("clear")}
              className="inline-flex items-center gap-1.5 font-mono text-[10px] px-3 py-1.5 rounded-lg border border-white/10 glass-chip text-[#94A3B8] hover:text-red-400 hover:border-red-400/40 hover:bg-red-500/10 transition-all duration-200"
            >
              clear
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
