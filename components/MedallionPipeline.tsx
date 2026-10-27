"use client";

import { useEffect, useRef, useState } from "react";

interface Packet {
  id: number;
  lane: number; // 0 or 1 — two visual lanes per connector
  connector: "bronze-silver" | "silver-gold";
  delay: number;
  duration: number;
}

const BRONZE_LAYER = {
  label: "BRONZE",
  sub: "Raw Ingestion Layer",
  desc: "Streaming ingest · S3 / ADLS Gen2",
  color: "#FF6B35",
  glow: "rgba(255,107,53,0.35)",
  borderClass: "border-[#FF6B35]",
  bgClass: "bg-[#1a1208]",
  dotClass: "bg-[#FF6B35]",
  labelClass: "text-[#FF6B35]",
  animClass: "animate-glow-pulse",
  icon: "🟫",
};

const SILVER_LAYER = {
  label: "SILVER",
  sub: "Enrichment & Cleansing Layer",
  desc: "DQ checks · Joins · Schema enforcement",
  color: "#94A3B8",
  glow: "rgba(148,163,184,0.3)",
  borderClass: "border-[#94A3B8]",
  bgClass: "bg-[#111827]",
  dotClass: "bg-[#94A3B8]",
  labelClass: "text-[#94A3B8]",
  animClass: "animate-silver-pulse",
  icon: "⬜",
};

const GOLD_LAYER = {
  label: "GOLD",
  sub: "Analytics-Ready Layer",
  desc: "Aggregated · BI-ready · Sub-second queries",
  color: "#F59E0B",
  glow: "rgba(245,158,11,0.35)",
  borderClass: "border-[#F59E0B]",
  bgClass: "bg-[#13110a]",
  dotClass: "bg-[#F59E0B]",
  labelClass: "text-[#F59E0B]",
  animClass: "animate-amber-pulse",
  icon: "🟡",
};

function LayerNode({
  layer,
  active,
}: {
  layer: typeof BRONZE_LAYER;
  active: boolean;
}) {
  return (
    <div
      className={`
        relative w-full rounded-xl border ${layer.borderClass} ${layer.bgClass}
        px-5 py-4 transition-all duration-500 animate-node-pulse
        ${active ? "opacity-100" : "opacity-70"}
      `}
      style={
        active
          ? { boxShadow: `0 0 24px ${layer.glow}, 0 0 60px ${layer.glow}33` }
          : {}
      }
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-base">{layer.icon}</span>
          <span
            className={`font-mono text-sm font-bold tracking-widest ${layer.labelClass}`}
          >
            {layer.label}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <div
            className={`w-1.5 h-1.5 rounded-full ${layer.dotClass} animate-pulse`}
          />
          <span className="font-mono text-[10px] text-[#4B5563]">ACTIVE</span>
        </div>
      </div>

      {/* Sub-label */}
      <p className="font-mono text-[10px] text-[#94A3B8] mb-1">{layer.sub}</p>
      <p className="font-mono text-[10px] text-[#4B5563]">{layer.desc}</p>
    </div>
  );
}

function Connector({
  color,
  packets,
  connectorId,
}: {
  color: string;
  packets: Packet[];
  connectorId: "bronze-silver" | "silver-gold";
}) {
  const relevant = packets.filter((p) => p.connector === connectorId);

  return (
    <div className="relative flex flex-col items-center my-1 h-16 w-full">
      {/* Dashed center line */}
      <div
        className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px"
        style={{
          background: `repeating-linear-gradient(to bottom, ${color} 0px, ${color} 4px, transparent 4px, transparent 10px)`,
          opacity: 0.5,
        }}
      />

      {/* Arrow head */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1"
        style={{ color }}
      >
        <svg width="10" height="8" viewBox="0 0 10 8" fill={color}>
          <path d="M5 8L0 0h10z" />
        </svg>
      </div>

      {/* Animated data packets */}
      {relevant.map((pkt) => (
        <div
          key={pkt.id}
          className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
          style={{
            backgroundColor: color,
            boxShadow: `0 0 8px ${color}, 0 0 16px ${color}88`,
            animation: `data-packet ${pkt.duration}ms ease-in-out ${pkt.delay}ms infinite`,
            marginLeft: pkt.lane === 0 ? -8 : 8,
          }}
        />
      ))}
    </div>
  );
}

export default function MedallionPipeline() {
  const [packets, setPackets] = useState<Packet[]>([]);
  const idRef = useRef(0);

  useEffect(() => {
    // Seed initial packets
    const initial: Packet[] = [];
    const connectors: ("bronze-silver" | "silver-gold")[] = [
      "bronze-silver",
      "silver-gold",
    ];
    connectors.forEach((conn) => {
      for (let lane = 0; lane < 2; lane++) {
        initial.push({
          id: idRef.current++,
          lane,
          connector: conn,
          delay: lane * 900,
          duration: 1800,
        });
      }
    });
    setPackets(initial);
  }, []);

  return (
    <div className="relative w-full max-w-xs mx-auto select-none">
      {/* Title */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1E2D45] bg-[#111827]">
          <div className="w-1.5 h-1.5 rounded-full bg-[#10D98A] animate-pulse" />
          <span className="font-mono text-[10px] text-[#6B7280] tracking-widest">
            MEDALLION ARCHITECTURE PIPELINE
          </span>
        </div>
      </div>

      {/* Pipeline flow */}
      <LayerNode layer={BRONZE_LAYER} active={true} />
      <Connector
        color="#FF6B35"
        packets={packets}
        connectorId="bronze-silver"
      />
      <LayerNode layer={SILVER_LAYER} active={true} />
      <Connector
        color="#94A3B8"
        packets={packets}
        connectorId="silver-gold"
      />
      <LayerNode layer={GOLD_LAYER} active={true} />

      {/* Footer stat bar */}
      <div className="mt-4 p-3 rounded-lg border border-[#1E2D45] bg-[#111827] grid grid-cols-3 gap-2">
        {[
          { val: "2M+", label: "events/sec", color: "#FF6B35" },
          { val: "99.9%", label: "uptime", color: "#10D98A" },
          { val: "<100ms", label: "latency", color: "#F59E0B" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <div
              className="font-mono text-sm font-bold"
              style={{ color: stat.color }}
            >
              {stat.val}
            </div>
            <div className="font-mono text-[9px] text-[#4B5563] uppercase tracking-wide">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
