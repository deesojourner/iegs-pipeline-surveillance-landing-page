"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const capabilities = [
  {
    title: "Leak Detection Analytics",
    description:
      "Multispectral and thermal imaging algorithms identify hydrocarbon seepage, methane plumes, and fluid migration patterns invisible to standard inspection methods.",
    tags: ["LWIR Thermal", "Gas Spectroscopy", "ML Classification"],
  },
  {
    title: "Right-of-Way Monitoring",
    description:
      "Continuous surveillance of pipeline corridors detects unauthorized construction, vegetation overgrowth, erosion, and access road degradation within regulated right-of-way zones.",
    tags: ["Change Detection", "Temporal Analysis", "GeoFencing"],
  },
  {
    title: "Encroachment Detection",
    description:
      "AI-driven comparison of temporal imagery identifies new structures, earthmoving activity, and land-use changes within defined buffer zones around pipeline assets.",
    tags: ["Object Detection", "SAR Analysis", "Alert Automation"],
  },
  {
    title: "Terrain Change Analysis",
    description:
      "Differential DEM analysis from repeat LiDAR surveys quantifies soil movement, slope instability, and ground deformation threatening pipeline alignment and burial depth.",
    tags: ["InSAR", "DEM Differencing", "Strain Modeling"],
  },
  {
    title: "Cathodic Protection Assessment",
    description:
      "Indirect survey data integration with aerial inspection identifies coating anomalies, CP system performance gaps, and corrosion-susceptible segments.",
    tags: ["CIS Integration", "Coating Analysis", "Risk Scoring"],
  },
  {
    title: "Environmental Compliance Monitoring",
    description:
      "Vegetation health indices, waterbody proximity analysis, and habitat impact assessment supporting NOSDRA environmental permit requirements and remediation verification.",
    tags: ["NDVI Analysis", "Wetland Mapping", "Impact Reporting"],
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative py-28 lg:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f4f5f0] via-[#eef0ea]/30 to-[#f4f5f0]" />
      <div className="absolute inset-0 noise-overlay" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-mono text-accent-orange tracking-[0.2em] uppercase mb-4">
            Core Capabilities
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Comprehensive Pipeline
            <br />
            <span className="text-gradient-orange">Intelligence Suite</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Purpose-built analytical capabilities addressing every dimension of
            pipeline integrity, security, and regulatory compliance.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="group relative h-full p-7 rounded-xl bg-white border border-slate-200 hover:border-accent-orange/30 hover:shadow-md transition-all duration-500"
              >
                {/* Number indicator */}
                <div className="absolute top-6 right-6 text-4xl font-bold font-mono text-slate-100 group-hover:text-accent-orange/[0.1] transition-colors duration-500">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <h3 className="text-lg font-semibold text-slate-900 mb-3 pr-12">
                  {cap.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-5">
                  {cap.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cap.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-2.5 py-1 text-[10px] font-mono tracking-wider uppercase rounded bg-slate-50 text-slate-500 border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
