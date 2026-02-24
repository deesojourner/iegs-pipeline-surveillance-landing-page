"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const applications = [
  {
    sector: "Crude Oil Transmission Pipelines",
    description:
      "Long-haul transmission pipeline monitoring across Nigeria's diverse terrain — from the Niger Delta mangrove swamps to northern savannah corridors. Continuous integrity assessment for high-consequence areas and critical crossings.",
    features: [
      "Critical area monitoring & ILI correlation",
      "Valve station surveillance",
      "River & creek crossing inspection",
    ],
  },
  {
    sector: "Upstream Gathering Networks",
    description:
      "High-density gathering network surveillance in active production basins across the Niger Delta. Rapid detection of vandalism, illegal bunkering, and third-party encroachment in high-risk zones.",
    features: [
      "Wellhead encroachment alerts",
      "Gathering line leak surveys",
      "Illegal bunkering detection",
    ],
  },
  {
    sector: "Natural Gas Distribution",
    description:
      "Urban and industrial gas distribution network monitoring. Methane emission detection, excavation damage prevention, and infrastructure mapping for pipeline rehabilitation programmes.",
    features: [
      "Methane emission quantification",
      "Excavation activity verification",
      "Asset condition assessment",
    ],
  },
  {
    sector: "NLNG & Offshore Pipelines",
    description:
      "Specialised surveillance for NLNG terminal approach corridors, offshore pipeline landfalls, and subsea pipeline routes. Thermal monitoring and coastal subsidence tracking across Nigeria's offshore infrastructure.",
    features: [
      "Terminal perimeter security",
      "Coastal erosion monitoring",
      "Thermal anomaly detection",
    ],
  },
  {
    sector: "Downstream & Refinery Networks",
    description:
      "Surveillance of product pipeline networks connecting refineries to depots and distribution centres. Monitoring for illegal tapping, product theft, and pipeline degradation across downstream infrastructure.",
    features: [
      "Product theft detection",
      "Depot perimeter monitoring",
      "Pipeline condition assessment",
    ],
  },
  {
    sector: "Government & Regulatory Bodies",
    description:
      "Independent verification and compliance monitoring services for NUPRC, DPR, NOSDRA, and state environmental agencies requiring third-party integrity assessments.",
    features: [
      "Regulatory compliance audit support",
      "Incident investigation data",
      "Community safety zone analysis",
    ],
  },
];

export default function Applications() {
  return (
    <section id="applications" className="relative py-28 lg:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-[#eef0ea] via-[#f4f5f0] to-[#eef0ea]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-mono text-accent-orange tracking-[0.2em] uppercase mb-4">
            Industry Applications
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Sector-Specific
            <br />
            <span className="text-gradient-orange">Surveillance Solutions</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Tailored surveillance programs for every segment of the pipeline
            value chain — from upstream gathering to downstream distribution.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="group relative h-full flex flex-col p-7 rounded-xl bg-white border border-slate-200 hover:border-accent-orange/30 hover:shadow-md transition-all duration-500"
              >
                <div className="mb-4">
                  <span className="text-[10px] font-mono text-slate-600 tracking-wider uppercase">
                    Sector {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {app.sector}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-5 flex-1">
                  {app.description}
                </p>
                <div className="space-y-2 pt-4 border-t border-slate-100">
                  {app.features.map((feature, j) => (
                    <div
                      key={j}
                      className="flex items-center gap-2 text-xs text-slate-500"
                    >
                      <svg
                        className="w-3.5 h-3.5 text-accent-orange/50 shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <polyline points="9 11 12 14 22 4" />
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                      </svg>
                      {feature}
                    </div>
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
