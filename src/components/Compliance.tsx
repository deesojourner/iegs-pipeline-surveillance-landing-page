"use client";

import AnimatedSection from "./AnimatedSection";

const standards = [
  {
    code: "NUPRC",
    title: "Nigerian Upstream Petroleum Regulatory Commission",
    description:
      "Full compliance with NUPRC pipeline safety and integrity management regulations, including upstream petroleum operations monitoring, reporting, and environmental protection requirements.",
  },
  {
    code: "DPR Guidelines",
    title: "Department of Petroleum Resources Standards",
    description:
      "Surveillance data directly supports DPR integrity assessment intervals, risk-based inspection scheduling, and preventive and mitigative measures validation for pipeline operators.",
  },
  {
    code: "NOSDRA",
    title: "National Oil Spill Detection & Response Agency",
    description:
      "Aerial and satellite data integration supporting NOSDRA oil spill detection, environmental impact assessment, and remediation verification across pipeline corridors and host communities.",
  },
  {
    code: "PIA 2021",
    title: "Petroleum Industry Act Compliance",
    description:
      "Supporting compliance with the Petroleum Industry Act provisions for environmental management, host community development, and pipeline infrastructure integrity monitoring.",
  },
  {
    code: "EGASPIN",
    title: "Environmental Guidelines & Standards (EGASPIN)",
    description:
      "Monitoring and reporting aligned with EGASPIN environmental guidelines for petroleum industry operations, including effluent limitations, air quality, and land contamination standards.",
  },
  {
    code: "NCAA RPAS",
    title: "Nigerian Civil Aviation Authority Drone Regulations",
    description:
      "All drone operations conducted under NCAA RPAS regulations with active BVLOS approvals, night operations authorisation, and operations over populated areas certification.",
  },
];

export default function Compliance() {
  return (
    <section id="compliance" className="relative py-28 lg:py-36">
      <div className="absolute inset-0 bg-[#f4f5f0]" />
      <div className="absolute inset-0 grid-overlay opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="max-w-3xl mb-16">
          <span className="inline-block text-xs font-mono text-accent-cyan tracking-[0.2em] uppercase mb-4">
            Compliance & Safety
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Regulatory Alignment
            <br />
            <span className="text-gradient-cyan">Built into Every Survey</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Our surveillance programmes are engineered to generate
            compliance-ready documentation aligned with Nigerian federal
            and industry standards — reducing audit burden and regulatory risk.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {standards.map((std, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="h-full p-6 rounded-xl bg-white border border-slate-200 hover:border-accent-cyan/30 hover:shadow-md transition-all duration-500">
                <div className="inline-block px-3 py-1 rounded bg-accent-cyan/10 text-accent-cyan text-xs font-mono font-bold mb-4">
                  {std.code}
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">
                  {std.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {std.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Certification badges row */}
        <AnimatedSection delay={0.4}>
          <div className="mt-12 p-6 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
              {[
                "ISO 9001:2015",
                "ISO 27001",
                "ISO 14001",
                "NCAA RPAS Certified",
                "NUPRC Registered",
              ].map((cert, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-sm font-mono text-slate-600"
                >
                  <svg
                    className="w-4 h-4 text-emerald-500/60"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
