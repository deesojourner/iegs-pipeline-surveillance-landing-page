"use client";

import AnimatedSection from "./AnimatedSection";

const techCategories = [
  {
    category: "Aerial Platforms",
    items: [
      { name: "Fixed-Wing UAV", spec: "120km range, BVLOS certified" },
      { name: "Multi-Rotor UAV", spec: "45min endurance, precision hover" },
      { name: "Satellite Tasking", spec: "Sub-meter optical, SAR capable" },
    ],
  },
  {
    category: "Sensor Payloads",
    items: [
      { name: "LiDAR Scanner", spec: "300+ pts/m², dual-return" },
      { name: "Thermal Imager", spec: "LWIR/MWIR, 50mK NETD" },
      { name: "Multispectral Camera", spec: "5-band, calibrated radiance" },
      { name: "RGB Mapping Camera", spec: "61MP, 2cm GSD @ 120m AGL" },
    ],
  },
  {
    category: "Processing & Analytics",
    items: [
      { name: "CNN Anomaly Detection", spec: "Custom pipeline-trained models" },
      { name: "Change Detection Engine", spec: "Temporal differencing, SAR InSAR" },
      { name: "Point Cloud Processing", spec: "Classification, segmentation, DEM" },
      { name: "Spectral Analysis", spec: "Gas detection, vegetation indices" },
    ],
  },
  {
    category: "Data Infrastructure",
    items: [
      { name: "Enterprise GIS", spec: "ArcGIS, QGIS, PostGIS" },
      { name: "Cloud Processing", spec: "GPU-accelerated, auto-scaling" },
      { name: "PODS Integration", spec: "Industry-standard data exchange" },
      { name: "API / Dashboard", spec: "Real-time alerts, custom views" },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="relative py-28 lg:py-36">
      <div className="absolute inset-0 bg-[#f4f5f0]" />
      <div className="absolute inset-0 grid-overlay opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-mono text-accent-cyan tracking-[0.2em] uppercase mb-4">
            Technology Stack
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Enterprise-Grade
            <br />
            <span className="text-gradient-cyan">Surveillance Architecture</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Purpose-built technology ecosystem designed for pipeline-specific
            data acquisition, processing, and intelligence delivery at scale.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {techCategories.map((cat, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="p-8 rounded-xl bg-white border border-slate-200 h-full shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 rounded-full bg-accent-cyan" />
                  <h3 className="text-sm font-mono tracking-[0.15em] uppercase text-accent-cyan">
                    {cat.category}
                  </h3>
                </div>
                <div className="space-y-4">
                  {cat.items.map((item, j) => (
                    <div
                      key={j}
                      className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100 last:border-0 last:pb-0"
                    >
                      <div>
                        <div className="text-sm font-medium text-slate-900">
                          {item.name}
                        </div>
                        <div className="text-xs text-slate-500 font-mono mt-0.5">
                          {item.spec}
                        </div>
                      </div>
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-accent-cyan/40 shrink-0" />
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
