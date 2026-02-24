"use client";

import AnimatedSection from "./AnimatedSection";

const risks = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 9v4m0 4h.01M3.6 19h16.8c1.1 0 1.65-1.35 1.05-2.1L13.05 4.5c-.6-.75-1.5-.75-2.1 0L2.55 16.9C1.95 17.65 2.5 19 3.6 19z" />
      </svg>
    ),
    title: "Corrosion & Material Degradation",
    description:
      "Subsurface and external corrosion accelerated by tropical soil chemistry, mangrove swamp conditions, cathodic protection failures, and environmental stressors across the Niger Delta pipeline network.",
    metric: "68%",
    metricLabel: "of pipeline failures",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0v-6a1 1 0 011-1h2a1 1 0 011 1v6m-6 0h6" />
      </svg>
    ),
    title: "Vandalism & Third-Party Encroachment",
    description:
      "Pipeline vandalism, illegal bunkering, unauthorized excavation, and land-use changes within the right-of-way corridor that compromise pipeline integrity and safety margins.",
    metric: "34%",
    metricLabel: "annual ROW violations",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: "Geohazard Exposure",
    description:
      "Flooding, coastal erosion, subsidence, and terrain deformation threatening buried and above-ground pipeline segments across the Niger Delta, mangrove swamps, and offshore corridors.",
    metric: "2.4x",
    metricLabel: "risk increase in unstable terrain",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Regulatory Non-Compliance",
    description:
      "Evolving NUPRC, NOSDRA, and DPR mandates requiring continuous monitoring documentation, incident reporting, and integrity verification protocols.",
    metric: "₦1.2B",
    metricLabel: "avg. penalty per violation",
  },
];

export default function RiskOverview() {
  return (
    <section className="relative py-28 lg:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f4f5f0] via-[#eef0ea]/50 to-[#f4f5f0]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="max-w-3xl mb-16">
          <span className="inline-block text-xs font-mono text-accent-orange tracking-[0.2em] uppercase mb-4">
            Risk Assessment
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Persistent Threats Demand <span className="text-gradient-orange">Persistent Surveillance</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Nigeria&apos;s pipeline network spans over 5,000 kilometres of critical
            energy infrastructure across the Niger Delta and beyond. Every kilometre faces
            persistent threats from environmental degradation, vandalism, illegal bunkering,
            and evolving regulatory mandates. Passive monitoring is no longer sufficient.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {risks.map((risk, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="group relative h-full p-8 rounded-xl bg-white border border-slate-200 hover:border-accent-orange/30 hover:shadow-md transition-all duration-500">
                {/* Top accent line */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-accent-orange/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent-orange/10 text-accent-orange">
                      {risk.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {risk.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  {risk.description}
                </p>

                <div className="flex items-baseline gap-2 pt-4 border-t border-slate-100">
                  <span className="text-2xl font-bold font-mono text-accent-orange">
                    {risk.metric}
                  </span>
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                    {risk.metricLabel}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
