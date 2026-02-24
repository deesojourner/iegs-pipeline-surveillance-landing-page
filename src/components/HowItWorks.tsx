"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    phase: "01",
    title: "Aerial Reconnaissance",
    subtitle: "Drone & Satellite Acquisition",
    description:
      "Multi-rotor and fixed-wing UAV sorties capture high-resolution RGB, multispectral, and thermal imagery along pipeline corridors. Concurrent satellite passes provide wide-area synthetic aperture radar (SAR) and optical coverage for change detection baselines.",
    specs: [
      "Sub-centimeter GSD resolution",
      "Dual-band thermal (LWIR/MWIR)",
      "SAR interferometry capable",
      "NCAA BVLOS operations certified",
    ],
    color: "cyan",
  },
  {
    phase: "02",
    title: "LiDAR & Sensor Fusion",
    subtitle: "3D Point Cloud Generation",
    description:
      "Airborne LiDAR scanning generates dense 3D point clouds of terrain, vegetation, and infrastructure. Sensor fusion combines LiDAR returns with thermal signatures and multispectral data to create comprehensive geospatial intelligence layers.",
    specs: [
      "300+ points per sq. meter",
      "Vegetation penetration capable",
      "Digital terrain model extraction",
      "Infrastructure asset classification",
    ],
    color: "orange",
  },
  {
    phase: "03",
    title: "AI-Powered Analytics",
    subtitle: "Anomaly Detection & Classification",
    description:
      "Machine learning models trained on pipeline-specific datasets process fused sensor data in near real-time. Convolutional neural networks detect anomalies including leaks, encroachment, terrain deformation, and coating degradation with sub-meter precision.",
    specs: [
      "99.7% anomaly detection rate",
      "False positive rate < 0.3%",
      "Near real-time processing",
      "Continuous model retraining",
    ],
    color: "cyan",
  },
  {
    phase: "04",
    title: "GIS Integration & Reporting",
    subtitle: "Actionable Intelligence Delivery",
    description:
      "Processed intelligence feeds directly into enterprise GIS platforms, SCADA systems, and pipeline integrity management systems (PIMS). Automated alerts, georeferenced reports, and NUPRC-compliant documentation are generated for immediate operational response.",
    specs: [
      "ArcGIS / QGIS integration",
      "NUPRC-compatible data export",
      "Automated compliance reports",
      "Real-time dashboard access",
    ],
    color: "orange",
  },
];

export default function HowItWorks() {
  return (
    <section id="technology" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-[#eef0ea]" />
      {/* Subtle grid background */}
      <div className="absolute inset-0 grid-overlay opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block text-xs font-mono text-accent-cyan tracking-[0.2em] uppercase mb-4">
            Surveillance Workflow
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
            How Our Surveillance
            <br />
            <span className="text-gradient-cyan">System Operates</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            A systematic, four-phase intelligence pipeline that transforms raw
            sensor data into actionable operational insights — from airborne
            acquisition to enterprise integration.
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-[28px] lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent hidden md:block" />

          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div
                  className={`relative flex flex-col lg:flex-row items-start gap-8 lg:gap-16 ${
                    i % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Phase indicator */}
                  <div className="hidden md:flex absolute left-[28px] lg:left-1/2 lg:-translate-x-1/2 z-10">
                    <motion.div
                      whileInView={{ scale: [0.5, 1] }}
                      viewport={{ once: true }}
                      className={`w-14 h-14 rounded-full flex items-center justify-center font-mono text-sm font-bold ${
                        step.color === "cyan"
                          ? "bg-white border border-accent-cyan/30 text-accent-cyan"
                          : "bg-white border border-accent-orange/30 text-accent-orange"
                      }`}
                    >
                      {step.phase}
                    </motion.div>
                  </div>

                  {/* Content card */}
                  <div className={`flex-1 ${i % 2 === 0 ? "lg:pr-16" : "lg:pl-16"} ${i % 2 === 0 ? "lg:text-right" : ""}`}>
                    <div
                      className={`p-8 rounded-xl bg-white shadow-sm ${
                        step.color === "cyan" ? "border-glow-cyan" : "border-glow-orange"
                      }`}
                    >
                      <div className={`flex items-center gap-3 mb-4 md:hidden`}>
                        <span className={`font-mono text-sm font-bold ${step.color === "cyan" ? "text-accent-cyan" : "text-accent-orange"}`}>
                          {step.phase}
                        </span>
                      </div>
                      <div className="text-xs font-mono tracking-[0.15em] uppercase text-slate-500 mb-2">
                        {step.subtitle}
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed mb-6">
                        {step.description}
                      </p>
                      <div className={`grid grid-cols-1 sm:grid-cols-2 gap-2 ${i % 2 === 0 ? "lg:justify-items-end" : ""}`}>
                        {step.specs.map((spec, j) => (
                          <div
                            key={j}
                            className={`flex items-center gap-2 text-xs font-mono ${
                              step.color === "cyan"
                                ? "text-accent-cyan/70"
                                : "text-accent-orange/70"
                            }`}
                          >
                            <span
                              className={`w-1 h-1 rounded-full ${
                                step.color === "cyan" ? "bg-accent-cyan" : "bg-accent-orange"
                              }`}
                            />
                            {spec}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Visual side */}
                  <div className="flex-1 hidden lg:block">
                    <div className={`relative h-64 rounded-xl overflow-hidden ${
                      step.color === "cyan" ? "border-glow-cyan" : "border-glow-orange"
                    } bg-white`}>
                      {/* Mock visualization */}
                      {i === 0 && <DroneVisual />}
                      {i === 1 && <LidarVisual />}
                      {i === 2 && <AIVisual />}
                      {i === 3 && <GISVisual />}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DroneVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <svg className="w-full h-full" viewBox="0 0 400 260">
        {/* Terrain */}
        <path d="M0 200 Q50 180, 100 190 T200 185 T300 195 T400 180 V260 H0 Z" fill="rgba(226,232,240,0.6)" />
        <path d="M0 200 Q50 180, 100 190 T200 185 T300 195 T400 180" fill="none" stroke="rgba(56,189,248,0.3)" strokeWidth="1" />
        {/* Pipeline */}
        <line x1="0" y1="195" x2="400" y2="185" stroke="rgba(56,189,248,0.5)" strokeWidth="3" className="pipeline-path" />
        {/* Drone */}
        <g transform="translate(200,80)">
          <line x1="-20" y1="0" x2="20" y2="0" stroke="rgba(100,116,139,0.6)" strokeWidth="2" />
          <line x1="0" y1="-15" x2="0" y2="15" stroke="rgba(100,116,139,0.6)" strokeWidth="2" />
          <circle cx="-20" cy="0" r="8" fill="none" stroke="rgba(56,189,248,0.5)" strokeWidth="1">
            <animateTransform attributeName="transform" type="rotate" from="0 -20 0" to="360 -20 0" dur="0.3s" repeatCount="indefinite" />
          </circle>
          <circle cx="20" cy="0" r="8" fill="none" stroke="rgba(56,189,248,0.5)" strokeWidth="1">
            <animateTransform attributeName="transform" type="rotate" from="0 20 0" to="360 20 0" dur="0.3s" repeatCount="indefinite" />
          </circle>
          <rect x="-4" y="-4" width="8" height="8" rx="2" fill="rgba(56,189,248,0.8)" />
          {/* Scan beam */}
          <polygon points="-30,20 30,20 60,180 -60,180" fill="rgba(56,189,248,0.08)" stroke="rgba(56,189,248,0.2)" strokeWidth="0.5" />
        </g>
        {/* Data points */}
        {[50, 120, 200, 280, 350].map((x, i) => (
          <g key={i}>
            <circle cx={x} cy={190 + Math.sin(x / 30) * 5} r="2" fill="#38bdf8" opacity="0.6">
              <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}
      </svg>
    </div>
  );
}

function LidarVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <svg className="w-full h-full" viewBox="0 0 400 260">
        {/* Point cloud representation */}
        {Array.from({ length: 150 }).map((_, i) => {
          const x = 30 + (i % 25) * 14;
          const baseY = 100 + Math.sin(x / 40) * 30;
          const y = baseY + Math.floor(i / 25) * 20 + (Math.random() * 10 - 5);
          const isHighlighted = x > 160 && x < 240 && y > 130 && y < 170;
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={isHighlighted ? "2.5" : "1.5"}
              fill={isHighlighted ? "#1A9A00" : "#38bdf8"}
              opacity={isHighlighted ? 0.9 : 0.3 + (i % 5) * 0.1}
            />
          );
        })}
        {/* Highlight box */}
        <rect x="160" y="130" width="80" height="40" fill="none" stroke="#1A9A00" strokeWidth="1" strokeDasharray="4 2" opacity="0.5" />
        <text x="165" y="125" fill="#1A9A00" fontSize="8" fontFamily="monospace" opacity="0.7">ANOMALY CLUSTER</text>
      </svg>
    </div>
  );
}

function AIVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <svg className="w-full h-full" viewBox="0 0 400 260">
        {/* Neural network nodes */}
        {/* Input layer */}
        {[60, 100, 140, 180, 220].map((y, i) => (
          <g key={`in-${i}`}>
            <circle cx="60" cy={y} r="6" fill="rgba(56,189,248,0.3)" stroke="rgba(56,189,248,0.6)" strokeWidth="1" />
            {[80, 120, 160, 200].map((hy, j) => (
              <line key={j} x1="66" y1={y} x2="154" y2={hy} stroke="rgba(56,189,248,0.08)" strokeWidth="0.5" />
            ))}
          </g>
        ))}
        {/* Hidden layer 1 */}
        {[80, 120, 160, 200].map((y, i) => (
          <g key={`h1-${i}`}>
            <circle cx="160" cy={y} r="6" fill="rgba(56,189,248,0.4)" stroke="rgba(56,189,248,0.7)" strokeWidth="1">
              <animate attributeName="fill-opacity" values="0.3;0.7;0.3" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
            </circle>
            {[100, 150].map((hy, j) => (
              <line key={j} x1="166" y1={y} x2="254" y2={hy} stroke="rgba(26,154,0,0.1)" strokeWidth="0.5" />
            ))}
          </g>
        ))}
        {/* Hidden layer 2 */}
        {[100, 150].map((y, i) => (
          <g key={`h2-${i}`}>
            <circle cx="260" cy={y} r="6" fill="rgba(26,154,0,0.4)" stroke="rgba(26,154,0,0.7)" strokeWidth="1">
              <animate attributeName="fill-opacity" values="0.4;0.8;0.4" dur="1.5s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
            </circle>
            <line x1="266" y1={y} x2="334" y2="130" stroke="rgba(26,154,0,0.15)" strokeWidth="0.5" />
          </g>
        ))}
        {/* Output */}
        <circle cx="340" cy="130" r="10" fill="rgba(26,154,0,0.3)" stroke="#1A9A00" strokeWidth="1.5">
          <animate attributeName="r" values="10;13;10" dur="2s" repeatCount="indefinite" />
        </circle>
        <text x="340" y="134" textAnchor="middle" fill="#1A9A00" fontSize="10" fontFamily="monospace" fontWeight="bold">!</text>
        <text x="340" y="160" textAnchor="middle" fill="rgba(26,154,0,0.7)" fontSize="8" fontFamily="monospace">ALERT</text>
        {/* Labels */}
        <text x="60" y="245" textAnchor="middle" fill="rgba(148,163,184,0.5)" fontSize="7" fontFamily="monospace">SENSOR INPUT</text>
        <text x="210" y="245" textAnchor="middle" fill="rgba(148,163,184,0.5)" fontSize="7" fontFamily="monospace">DEEP ANALYSIS</text>
        <text x="340" y="245" textAnchor="middle" fill="rgba(148,163,184,0.5)" fontSize="7" fontFamily="monospace">CLASSIFICATION</text>
      </svg>
    </div>
  );
}

function GISVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <div className="w-full h-full rounded-lg border border-slate-200 bg-white overflow-hidden relative">
        {/* Mock GIS dashboard */}
        <div className="absolute top-0 left-0 right-0 h-6 bg-slate-100 flex items-center px-2 gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-400/60" />
          <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
          <div className="w-2 h-2 rounded-full bg-green-400/60" />
          <span className="ml-2 text-[7px] font-mono text-slate-500">INDEPTH GIS DASHBOARD v4.2</span>
        </div>
        <div className="absolute top-6 left-0 bottom-0 w-1/4 border-r border-slate-200 p-2">
          {["Segments", "Alerts", "Thermal", "Terrain"].map((l, i) => (
            <div key={i} className={`text-[7px] font-mono py-1 px-1.5 rounded mb-0.5 ${i === 1 ? "bg-accent-orange/10 text-accent-orange" : "text-slate-500"}`}>
              {l}
            </div>
          ))}
        </div>
        {/* Map area */}
        <div className="absolute top-6 left-1/4 right-0 bottom-0 p-2">
          <svg className="w-full h-full" viewBox="0 0 300 200">
            <path d="M10 100 Q 75 70, 150 90 T 290 80" fill="none" stroke="#38bdf8" strokeWidth="2" className="pipeline-path" />
            <circle cx="150" cy="90" r="12" fill="none" stroke="#1A9A00" strokeWidth="1" strokeDasharray="3 2">
              <animate attributeName="r" values="12;18;12" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
            </circle>
            <text x="150" y="75" textAnchor="middle" fill="#1A9A00" fontSize="6" fontFamily="monospace">ALERT-2847</text>
            {[50, 100, 200, 250].map((x, i) => (
              <circle key={i} cx={x} cy={85 + Math.sin(x / 30) * 10} r="3" fill="#38bdf8" opacity="0.4" />
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
}
