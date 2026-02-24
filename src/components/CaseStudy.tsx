"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function CaseStudy() {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#eef0ea] via-[#f4f5f0] to-[#eef0ea]" />
      <div className="absolute inset-0 noise-overlay" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-mono text-accent-orange tracking-[0.2em] uppercase mb-4">
            Case Scenario
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Threat Detection in
            <br />
            <span className="text-gradient-orange">Real-World Operations</span>
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Scenario narrative */}
          <AnimatedSection>
            <div className="p-8 rounded-xl bg-white border-glow-orange shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="status-dot bg-red-400 text-red-400" />
                <span className="text-xs font-mono text-red-400/80 uppercase tracking-wider">
                  Active Scenario — Niger Delta, Rivers State
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Subsurface Leak Detection via Thermal-LiDAR Fusion
              </h3>

              <div className="space-y-6">
                <div>
                  <div className="text-[10px] font-mono text-accent-orange tracking-wider uppercase mb-2">
                    Situation
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    A 24-inch crude oil trunk line operating at 95 bar
                    traverses 76 kilometres of mangrove and riverine terrain
                    in Rivers State. Routine ILI identified minimal
                    anomalies, but community reports suggested potential
                    subsurface seepage near a creek crossing at KP 50.5.
                  </p>
                </div>

                <div>
                  <div className="text-[10px] font-mono text-accent-orange tracking-wider uppercase mb-2">
                    Detection
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Thermal imaging sortie detected a 2.3°C anomaly cluster
                    along a 120-meter segment. LiDAR differencing revealed
                    0.8m terrain subsidence compared to baseline survey.
                    Multispectral analysis confirmed stressed vegetation
                    patterns consistent with hydrocarbon contact.
                  </p>
                </div>

                <div>
                  <div className="text-[10px] font-mono text-accent-orange tracking-wider uppercase mb-2">
                    Response
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Automated alert triggered within 47 minutes of data
                    acquisition. Georeferenced report delivered to pipeline
                    control centre with precise excavation coordinates.
                    Operator mobilised repair crew — confirmed pinhole leak
                    at girth weld, 1.3 metres below grade.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Visual / metrics panel */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-6">
              {/* Mock thermal image */}
              <div className="relative rounded-xl overflow-hidden border-glow-orange bg-slate-900 h-64">
                <div className="absolute inset-0">
                  <svg className="w-full h-full" viewBox="0 0 500 280">
                    {/* Background terrain heatmap */}
                    <defs>
                      <linearGradient id="thermalBg" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#000033" />
                        <stop offset="100%" stopColor="#000022" />
                      </linearGradient>
                      <radialGradient id="hotspot" cx="0.5" cy="0.5" r="0.5">
                        <stop offset="0%" stopColor="rgba(255,60,0,0.7)" />
                        <stop offset="40%" stopColor="rgba(255,140,0,0.4)" />
                        <stop offset="70%" stopColor="rgba(255,200,0,0.15)" />
                        <stop offset="100%" stopColor="transparent" />
                      </radialGradient>
                    </defs>
                    <rect width="500" height="280" fill="url(#thermalBg)" />

                    {/* Cool terrain tiles */}
                    {Array.from({ length: 50 }).map((_, i) => {
                      const x = (i % 10) * 50;
                      const y = Math.floor(i / 10) * 56;
                      const temp = 15 + Math.random() * 8;
                      const blue = Math.floor(80 + temp * 3);
                      return (
                        <rect
                          key={i}
                          x={x}
                          y={y}
                          width="50"
                          height="56"
                          fill={`rgba(0, ${Math.floor(temp * 2)}, ${blue}, 0.3)`}
                          stroke="rgba(255,255,255,0.02)"
                          strokeWidth="0.5"
                        />
                      );
                    })}

                    {/* Hot spot - the anomaly */}
                    <ellipse cx="250" cy="140" rx="80" ry="50" fill="url(#hotspot)">
                      <animate attributeName="rx" values="80;85;80" dur="3s" repeatCount="indefinite" />
                      <animate attributeName="ry" values="50;55;50" dur="3s" repeatCount="indefinite" />
                    </ellipse>

                    {/* Pipeline line */}
                    <line x1="0" y1="145" x2="500" y2="135" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeDasharray="8 4" />

                    {/* Crosshairs on anomaly */}
                    <line x1="250" y1="100" x2="250" y2="180" stroke="rgba(255,60,0,0.6)" strokeWidth="0.5" />
                    <line x1="200" y1="140" x2="300" y2="140" stroke="rgba(255,60,0,0.6)" strokeWidth="0.5" />
                    <circle cx="250" cy="140" r="15" fill="none" stroke="rgba(255,60,0,0.5)" strokeWidth="1" strokeDasharray="4 2">
                      <animate attributeName="r" values="15;25;15" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.5;0.2;0.5" dur="2s" repeatCount="indefinite" />
                    </circle>

                    {/* Temperature scale */}
                    <rect x="440" y="30" width="20" height="200" rx="2" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                    <defs>
                      <linearGradient id="tempScale" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#ff3c00" />
                        <stop offset="25%" stopColor="#ff8c00" />
                        <stop offset="50%" stopColor="#ffc800" />
                        <stop offset="75%" stopColor="#00aa44" />
                        <stop offset="100%" stopColor="#0044aa" />
                      </linearGradient>
                    </defs>
                    <rect x="442" y="32" width="16" height="196" rx="1" fill="url(#tempScale)" opacity="0.7" />
                    <text x="438" y="26" fill="rgba(255,255,255,0.5)" fontSize="7" fontFamily="monospace" textAnchor="end">42°C</text>
                    <text x="438" y="236" fill="rgba(255,255,255,0.5)" fontSize="7" fontFamily="monospace" textAnchor="end">12°C</text>

                    {/* Data overlay */}
                    <text x="15" y="20" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace">THERMAL SCAN | KP 50.5 | 2024-11-14T09:47:22Z</text>
                    <text x="15" y="270" fill="rgba(255,60,0,0.7)" fontSize="8" fontFamily="monospace">ANOMALY: +2.3°C | CONF: 97.2% | CLASS: SUBSURFACE LEAK</text>
                  </svg>
                </div>
              </div>

              {/* Outcome metrics */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    label: "Detection Time",
                    value: "47 min",
                    detail: "from sortie to alert",
                  },
                  {
                    label: "Location Accuracy",
                    value: "< 0.5m",
                    detail: "GPS-referenced coordinates",
                  },
                  {
                    label: "Estimated Spill Prevention",
                    value: "~12,000 bbl",
                    detail: "vs. next scheduled inspection",
                  },
                  {
                    label: "Remediation Cost Avoided",
                    value: "\u20A64.8B",
                    detail: "environmental + regulatory",
                  },
                ].map((metric, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="p-5 rounded-lg bg-white border border-slate-200 shadow-sm"
                  >
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-2">
                      {metric.label}
                    </div>
                    <div className="text-xl font-bold font-mono text-slate-900">
                      {metric.value}
                    </div>
                    <div className="text-[10px] font-mono text-slate-600 mt-1">
                      {metric.detail}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
