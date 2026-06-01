"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function TopographicBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <defs>
        <radialGradient id="heroGlow1" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="rgba(26,154,0,0.12)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="heroGlow2" cx="30%" cy="60%" r="40%">
          <stop offset="0%" stopColor="rgba(56,189,248,0.06)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Ambient glows */}
      <rect width="1440" height="900" fill="url(#heroGlow1)" />
      <rect width="1440" height="900" fill="url(#heroGlow2)" />

      {/* Topographic contour lines */}
      {[
        { d: "M-100 700 Q200 620 400 660 T800 620 T1200 670 T1540 630", o: 0.06 },
        { d: "M-100 650 Q250 580 500 610 T900 570 T1300 620 T1540 580", o: 0.05 },
        { d: "M-100 600 Q300 540 550 560 T950 520 T1350 570 T1540 530", o: 0.04 },
        { d: "M-100 550 Q350 500 600 510 T1000 470 T1400 520 T1540 480", o: 0.035 },
        { d: "M-100 500 Q280 440 520 460 T920 420 T1320 470 T1540 430", o: 0.03 },
        { d: "M-100 450 Q320 400 580 410 T980 380 T1380 420 T1540 380", o: 0.025 },
        { d: "M-100 400 Q360 360 640 370 T1040 340 T1440 380 T1540 340", o: 0.02 },
        { d: "M-100 350 Q400 320 700 330 T1100 300 T1440 340 T1540 300", o: 0.018 },
        { d: "M-100 300 Q440 280 750 280 T1140 260 T1440 290 T1540 260", o: 0.015 },
        { d: "M-100 250 Q480 240 800 240 T1180 220 T1440 250 T1540 220", o: 0.012 },
      ].map((line, i) => (
        <path
          key={`topo-${i}`}
          d={line.d}
          stroke="#38bdf8"
          strokeWidth="0.8"
          opacity={line.o}
          fill="none"
        >
          <animate
            attributeName="opacity"
            values={`${line.o};${line.o * 2};${line.o}`}
            dur={`${6 + i * 0.5}s`}
            repeatCount="indefinite"
          />
        </path>
      ))}

      {/* Main pipeline route — thick glowing line */}
      <path
        d="M-50 480 C200 420 350 500 500 460 S750 380 900 420 S1100 500 1250 440 S1400 400 1540 430"
        stroke="#1A9A00"
        strokeWidth="3"
        opacity="0.25"
        filter="url(#glow)"
      >
        <animate attributeName="opacity" values="0.15;0.3;0.15" dur="4s" repeatCount="indefinite" />
      </path>
      <path
        d="M-50 480 C200 420 350 500 500 460 S750 380 900 420 S1100 500 1250 440 S1400 400 1540 430"
        stroke="#1A9A00"
        strokeWidth="1.5"
        opacity="0.5"
        className="pipeline-path"
      />

      {/* Secondary pipeline */}
      <path
        d="M-50 530 C180 500 380 550 550 520 S780 470 950 490 S1150 540 1300 500 S1450 480 1540 490"
        stroke="#38bdf8"
        strokeWidth="1"
        opacity="0.15"
        className="pipeline-path"
        style={{ animationDelay: "0.7s", animationDuration: "2s" }}
      />

      {/* Monitoring stations along pipeline */}
      {[
        { x: 200, y: 445, type: "station" },
        { x: 500, y: 460, type: "valve" },
        { x: 720, y: 400, type: "station" },
        { x: 900, y: 420, type: "alert" },
        { x: 1100, y: 470, type: "station" },
        { x: 1350, y: 430, type: "valve" },
      ].map((node, i) => (
        <g key={`node-${i}`}>
          <circle cx={node.x} cy={node.y} r="4" fill="none"
            stroke={node.type === "alert" ? "#1A9A00" : "#38bdf8"} strokeWidth="0.5" opacity="0">
            <animate attributeName="r" from="4" to="25" dur="3s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.5" to="0" dur="3s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
          </circle>
          <circle cx={node.x} cy={node.y} r="4" fill="none"
            stroke={node.type === "alert" ? "#1A9A00" : "#38bdf8"} strokeWidth="0.3" opacity="0">
            <animate attributeName="r" from="4" to="18" dur="3s" begin={`${i * 0.6 + 1}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.3" to="0" dur="3s" begin={`${i * 0.6 + 1}s`} repeatCount="indefinite" />
          </circle>
          <circle cx={node.x} cy={node.y} r={node.type === "alert" ? "4" : "3"}
            fill={node.type === "alert" ? "#1A9A00" : "#38bdf8"}
            opacity={node.type === "alert" ? "0.9" : "0.6"}>
            <animate attributeName="opacity"
              values={node.type === "alert" ? "0.9;0.5;0.9" : "0.4;0.7;0.4"}
              dur="2s" repeatCount="indefinite" />
          </circle>
          {node.type === "station" && (
            <rect x={node.x - 2} y={node.y - 2} width="4" height="4" rx="0.5"
              fill="#38bdf8" opacity="0.8" transform={`rotate(45 ${node.x} ${node.y})`} />
          )}
        </g>
      ))}

      {/* Drone scan path */}
      <path
        d="M350 300 Q500 280 650 320 T950 290 T1200 330"
        stroke="rgba(56,189,248,0.2)"
        strokeWidth="1"
        strokeDasharray="6 8"
        fill="none"
      >
        <animate attributeName="stroke-dashoffset" from="0" to="-28" dur="2s" repeatCount="indefinite" />
      </path>

      {/* Animated drone */}
      <g>
        <animateMotion
          dur="20s"
          repeatCount="indefinite"
          path="M350 300 Q500 280 650 320 T950 290 T1200 330 T950 290 T650 320 T350 300"
        />
        <circle r="3" fill="#38bdf8" opacity="0.9" />
        <circle r="8" fill="none" stroke="#38bdf8" strokeWidth="0.5" opacity="0.4">
          <animate attributeName="r" values="8;14;8" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0.1;0.4" dur="2s" repeatCount="indefinite" />
        </circle>
        <path d="M0 0 L-20 80 L20 80 Z" fill="rgba(56,189,248,0.03)" stroke="rgba(56,189,248,0.08)" strokeWidth="0.5" />
      </g>

      {/* Satellite sweep */}
      <line x1="0" y1="0" x2="1440" y2="900" stroke="rgba(56,189,248,0.03)" strokeWidth="80">
        <animateTransform attributeName="transform" type="translate" from="-1440 0" to="1440 0" dur="12s" repeatCount="indefinite" />
      </line>
    </svg>
  );
}

function HUDOverlay() {
  return (
    <>
      {/* Top-left HUD corner bracket */}
      <div className="absolute top-6 left-6 hidden lg:block pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.8, duration: 0.5 }}
        >
          <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
            <path d="M0 30 L0 2 L30 2" stroke="rgba(56,189,248,0.3)" strokeWidth="1" />
            <path d="M0 30 L0 2 L30 2" stroke="rgba(56,189,248,0.15)" strokeWidth="3" />
          </svg>
          <div className="mt-1 ml-1 space-y-1">
            <div className="text-[9px] font-mono text-cyan-400/40 tracking-[0.2em]">SYS.STATUS</div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[9px] font-mono text-emerald-400/60">ALL SYSTEMS NOMINAL</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Top-right HUD */}
      <div className="absolute top-6 right-6 hidden lg:block pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.0, duration: 0.5 }}
          className="text-right"
        >
          <svg width="120" height="80" viewBox="0 0 120 80" fill="none" className="ml-auto">
            <path d="M120 30 L120 2 L90 2" stroke="rgba(26,154,0,0.3)" strokeWidth="1" />
            <path d="M120 30 L120 2 L90 2" stroke="rgba(26,154,0,0.15)" strokeWidth="3" />
          </svg>
          <div className="mt-1 mr-1 space-y-1">
            <div className="text-[9px] font-mono text-green-500/40 tracking-[0.2em]">SURVEILLANCE.MODE</div>
            <div className="flex items-center gap-1.5 justify-end">
              <span className="text-[9px] font-mono text-green-500/60">PERSISTENT OVERWATCH</span>
              <div className="w-1.5 h-1.5 rounded-full bg-accent-orange animate-pulse" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom-left coordinates */}
      <div className="absolute bottom-24 left-6 hidden lg:block pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.5 }}
          className="space-y-1"
        >
          <div className="text-[9px] font-mono text-slate-600 tracking-[0.15em]">COVERAGE ZONE</div>
          <div className="text-[10px] font-mono text-slate-500">
            4.7731&deg;N &mdash; 7.0085&deg;E
          </div>
          <div className="text-[10px] font-mono text-slate-600">
            NIGER DELTA &middot; SECTOR ND-12
          </div>
        </motion.div>
      </div>
    </>
  );
}

function FloatingPanel({
  children,
  className = "",
  delay,
  position,
}: {
  children: React.ReactNode;
  className?: string;
  delay: number;
  position: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute hidden xl:block ${position} ${className}`}
    >
      {children}
    </motion.div>
  );
}

function StatNumber({ end, suffix, displayVal, format, delay: delayMs }: {
  end: number;
  suffix: string;
  displayVal?: string;
  format: boolean;
  delay: number;
}) {
  const [value, setValue] = useState<string>(displayVal ? "—" : "0");

  useEffect(() => {
    if (displayVal) {
      const timeout = setTimeout(() => setValue(displayVal), delayMs);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      const duration = 1500;
      const steps = 60;
      const stepTime = duration / steps;
      let current = 0;

      const interval = setInterval(() => {
        current += end / steps;
        if (current >= end) {
          current = end;
          clearInterval(interval);
        }
        const formatted = format
          ? Math.floor(current).toLocaleString()
          : Number.isInteger(end)
          ? Math.floor(current).toString()
          : current.toFixed(1);
        setValue(formatted);
      }, stepTime);

      return () => clearInterval(interval);
    }, delayMs);

    return () => clearTimeout(timeout);
  }, [end, suffix, displayVal, format, delayMs]);

  return <>{value}{suffix}</>;
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-40 lg:pt-48 pb-24">
      {/* Layered background with parallax */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -top-[10%] -bottom-[10%]">
        <div className="absolute inset-0 animated-gradient" />
        <TopographicBackground />
      </motion.div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-40" />

      {/* Noise texture */}
      <div className="absolute inset-0 noise-overlay" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(244,245,240,0.8)_100%)]" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#f4f5f0] to-transparent" />

      {/* HUD Overlay */}
      <HUDOverlay />

      {/* Floating data panels */}
      <FloatingPanel delay={1.5} position="top-[18%] right-[8%]">
        <div className="relative border-glow-cyan bg-white/80 backdrop-blur-md rounded-lg px-5 py-4 w-[220px] shadow-sm scan-line">
          <div className="flex items-center gap-2 mb-2.5">
            <div className="status-dot bg-emerald-400 text-emerald-400" />
            <span className="text-[9px] font-mono text-slate-400 uppercase tracking-[0.2em]">Live Telemetry</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-baseline">
              <span className="text-[9px] font-mono text-slate-500">PRESSURE</span>
              <span className="text-xs font-mono text-accent-cyan">86 bar</span>
            </div>
            <div className="w-full h-px bg-slate-200" />
            <div className="flex justify-between items-baseline">
              <span className="text-[9px] font-mono text-slate-500">FLOW RATE</span>
              <span className="text-xs font-mono text-accent-cyan">134 m&sup3;/hr</span>
            </div>
            <div className="w-full h-px bg-slate-200" />
            <div className="flex justify-between items-baseline">
              <span className="text-[9px] font-mono text-slate-500">INTEGRITY</span>
              <span className="text-xs font-mono text-emerald-400">98.7%</span>
            </div>
          </div>
          {/* Mini sparkline */}
          <div className="mt-3 pt-3 border-t border-slate-200">
            <svg className="w-full h-8" viewBox="0 0 180 30">
              <defs>
                <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
              <polyline
                points="0,20 15,18 30,22 45,15 60,17 75,12 90,14 105,8 120,10 135,6 150,9 165,4 180,7"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="1.5"
                opacity="0.6"
              />
              <polygon
                points="0,30 0,20 15,18 30,22 45,15 60,17 75,12 90,14 105,8 120,10 135,6 150,9 165,4 180,7 180,30"
                fill="url(#sparkFill)"
                opacity="0.1"
              />
            </svg>
          </div>
        </div>
      </FloatingPanel>

      <FloatingPanel delay={1.8} position="bottom-[28%] left-[6%]">
        <div className="relative border-glow-orange bg-white/80 backdrop-blur-md rounded-lg px-5 py-4 w-[240px] shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="status-dot bg-accent-orange text-accent-orange" />
              <span className="text-[9px] font-mono text-slate-400 uppercase tracking-[0.2em]">Thermal Analysis</span>
            </div>
            <span className="text-[8px] font-mono text-accent-orange/60 px-1.5 py-0.5 bg-accent-orange/10 rounded">ALERT</span>
          </div>
          {/* Thermal bars */}
          <div className="flex items-end gap-[3px] h-12 mb-2">
            {[28, 32, 35, 38, 42, 55, 68, 72, 65, 48, 40, 35, 30, 27, 25, 28, 30, 26].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h * 0.7}px` }}
                transition={{ delay: 2.0 + i * 0.04, duration: 0.4 }}
                className="flex-1 rounded-t-sm"
                style={{
                  background:
                    h > 60
                      ? "rgba(239, 68, 68, 0.8)"
                      : h > 45
                      ? "rgba(26, 154, 0, 0.7)"
                      : h > 35
                      ? "rgba(234, 179, 8, 0.4)"
                      : "rgba(56, 189, 248, 0.3)",
                }}
              />
            ))}
          </div>
          <div className="flex justify-between">
            <span className="text-[8px] font-mono text-slate-600">KP 49.6</span>
            <span className="text-[8px] font-mono text-red-400/70">+2.3&deg;C anomaly @ KP 50.5</span>
          </div>
        </div>
      </FloatingPanel>

      <FloatingPanel delay={2.1} position="top-[45%] right-[5%]">
        <div className="relative border-glow-cyan bg-white/80 backdrop-blur-md rounded-lg px-4 py-3 w-[180px] shadow-sm">
          <div className="text-[9px] font-mono text-slate-500 uppercase tracking-[0.15em] mb-2">Active Assets</div>
          <div className="space-y-1.5">
            {[
              { label: "UAV Sorties", val: "3 Active", color: "text-emerald-400" },
              { label: "Sat Passes", val: "2 Queued", color: "text-accent-cyan" },
              { label: "Ground Sensors", val: "847 Online", color: "text-emerald-400" },
            ].map((row, i) => (
              <div key={i} className="flex justify-between items-center">
                <span className="text-[9px] font-mono text-slate-600">{row.label}</span>
                <span className={`text-[10px] font-mono ${row.color}`}>{row.val}</span>
              </div>
            ))}
          </div>
        </div>
      </FloatingPanel>

      {/* ===== MAIN HERO CONTENT ===== */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-accent-orange/15 bg-accent-orange/[0.04] backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-orange opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-orange" />
            </span>
            <span className="text-[9px] sm:text-[11px] font-mono text-accent-orange/90 tracking-[0.15em] uppercase">
              <span className="sm:hidden">Geospatial Infra</span>
              <span className="hidden sm:inline">Geospatial Intelligence for Critical Infrastructure</span>
            </span>
          </span>
        </motion.div>

        {/* Headline — cinematic staggered reveal */}
        <div className="overflow-hidden mb-3">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl lg:text-[5.5rem] font-bold tracking-[-0.03em] leading-[0.95]"
          >
            <span className="text-[#183d6e]">Pipeline Integrity</span>
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl lg:text-[5.5rem] font-bold tracking-[-0.03em] leading-[0.95]"
          >
            <span className="text-[#183d6e]">Through </span>
            <span className="text-gradient-orange">Persistent</span>
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl lg:text-[5.5rem] font-bold tracking-[-0.03em] leading-[0.95]"
          >
            <span className="text-gradient-orange">Surveillance</span>
          </motion.h1>
        </div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-slate-500 leading-relaxed mb-12"
        >
          Multi-modal reconnaissance fusing{" "}
          <span className="text-slate-700">drone sorties</span>,{" "}
          <span className="text-slate-700">satellite imagery</span>,{" "}
          <span className="text-slate-700">LiDAR point clouds</span>, and{" "}
          <span className="text-slate-700">AI-driven anomaly detection</span>{" "}
          to safeguard Nigeria&apos;s critical energy infrastructure.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-accent-orange text-white font-semibold text-sm tracking-wide rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(26,154,0,0.35)] hover:scale-[1.02]"
          >
            <span className="relative z-10">Schedule Consultation</span>
            <svg className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-orange-light to-accent-orange translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a
            href="#capabilities"
            className="group inline-flex items-center gap-2 px-8 py-4 border border-slate-200 text-slate-600 text-sm font-medium rounded-lg hover:border-slate-300 hover:text-slate-900 hover:bg-slate-50 transition-all duration-300"
          >
            Explore Capabilities
            <svg className="w-4 h-4 text-slate-400 group-hover:text-slate-600 group-hover:translate-y-0.5 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="relative max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-8"
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { end: 5000, suffix: "+", label: "Pipeline Kilometres Monitored", format: true },
              { end: 99.7, suffix: "%", label: "Anomaly Detection Rate", format: false },
              { end: 4, suffix: "hr", label: "Max Threat Response Time", prefix: "<", format: false },
              { end: 0, suffix: "", label: "Undetected Incidents", displayVal: "Zero", format: false },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-slate-900 font-mono tracking-tight">
                  {stat.prefix && <span className="text-accent-orange">{stat.prefix}</span>}
                  <StatNumber end={stat.end} suffix={stat.suffix} displayVal={stat.displayVal} format={stat.format} delay={1600 + i * 100} />
                </div>
                <div className="text-[10px] text-slate-500 mt-2 font-mono uppercase tracking-[0.15em]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1.7, ease: [0.16, 1, 0.3, 1] }}
            className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mt-8"
          />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-[9px] font-mono text-slate-600 uppercase tracking-[0.3em]">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg className="w-5 h-8" viewBox="0 0 20 32" fill="none">
              <rect x="1" y="1" width="18" height="30" rx="9" stroke="rgba(148,163,184,0.3)" strokeWidth="1" />
              <motion.circle
                cx="10"
                cy="10"
                r="2"
                fill="rgba(26,154,0,0.6)"
                animate={{ cy: [10, 20, 10] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
