"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const projectScopes = [
  "Pipeline Integrity Assessment",
  "Right-of-Way Surveillance Program",
  "Leak Detection Survey",
  "Regulatory Compliance Monitoring",
  "Geohazard Assessment",
  "Full-Service Surveillance Contract",
  "Pilot / Proof of Concept",
  "Other",
];

export default function ContactForm() {
  const [formState, setFormState] = useState({
    company: "",
    name: "",
    role: "",
    email: "",
    phone: "",
    scope: "",
    location: "",
    pipelineMiles: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-28 lg:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f4f5f0] via-[#eef0ea]/40 to-[#f4f5f0]" />
      <div className="absolute inset-0 noise-overlay" />

      {/* Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-radial-glow opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: CTA copy */}
          <AnimatedSection>
            <div className="lg:sticky lg:top-32">
              <span className="inline-block text-xs font-mono text-accent-orange tracking-[0.2em] uppercase mb-4">
                Get Started
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
                Schedule a Technical
                <br />
                <span className="text-gradient-orange">Consultation</span>
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed mb-10">
                Connect with our pipeline surveillance engineers to discuss your
                infrastructure monitoring requirements. We&apos;ll assess your
                corridor, define the optimal sensor suite, and design a
                surveillance programme tailored to your operational and regulatory
                needs across Nigeria.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Technical Assessment",
                    desc: "Engineering review of your pipeline corridor, terrain, and threat profile",
                  },
                  {
                    title: "Custom Surveillance Design",
                    desc: "Tailored sensor configuration and flight planning for your specific assets",
                  },
                  {
                    title: "ROI Analysis",
                    desc: "Cost-benefit modeling comparing aerial surveillance to traditional methods",
                  },
                  {
                    title: "Pilot Program Proposal",
                    desc: "Scoped proof-of-concept to validate detection capabilities on your corridor",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded flex items-center justify-center bg-accent-orange/10 shrink-0">
                      <svg
                        className="w-3.5 h-3.5 text-accent-orange"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">
                        {item.title}
                      </div>
                      <div className="text-sm text-slate-500">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact info */}
              <div className="mt-12 pt-8 border-t border-slate-200">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-[10px] font-mono text-slate-600 uppercase tracking-wider mb-1">
                      Phone Number
                    </div>
                    <div className="text-sm text-slate-700 font-mono">
                      +234(90)88800007
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-600 uppercase tracking-wider mb-1">
                      Contact Email
                    </div>
                    <div className="text-sm text-slate-700 font-mono">
                      info@indepthearth.com
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-600 uppercase tracking-wider mb-1">
                      Address
                    </div>
                    <div className="text-sm text-slate-700">
                      3 Dawari Street, Off Ada-George Road, Rivers State, Nigeria
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-600 uppercase tracking-wider mb-1">
                      Working Time
                    </div>
                    <div className="text-sm text-slate-700">
                      Mon &ndash; Fri (8am&ndash;5pm)
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Closed during Holidays
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Form */}
          <AnimatedSection delay={0.2}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 rounded-xl bg-white border-glow-orange text-center shadow-sm"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-emerald-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Inquiry Received
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Our pipeline surveillance engineering team will review your
                  requirements and respond within 24 hours with a preliminary
                  technical assessment and consultation scheduling options.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-xl bg-white border border-slate-200 shadow-sm"
              >
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">
                    Enterprise Inquiry
                  </h3>
                  <p className="text-xs text-slate-500 font-mono">
                    All fields marked with * are required
                  </p>
                </div>

                <div className="space-y-5">
                  {/* Company Name */}
                  <div>
                    <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.company}
                      onChange={(e) =>
                        setFormState({ ...formState, company: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-accent-orange/40 focus:ring-1 focus:ring-accent-orange/20 transition-all"
                      placeholder="e.g., NNPC Ltd"
                    />
                  </div>

                  {/* Name & Role */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-accent-orange/40 focus:ring-1 focus:ring-accent-orange/20 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">
                        Role / Title *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.role}
                        onChange={(e) =>
                          setFormState({ ...formState, role: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-accent-orange/40 focus:ring-1 focus:ring-accent-orange/20 transition-all"
                        placeholder="VP Pipeline Integrity"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-accent-orange/40 focus:ring-1 focus:ring-accent-orange/20 transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={formState.phone}
                        onChange={(e) =>
                          setFormState({ ...formState, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-accent-orange/40 focus:ring-1 focus:ring-accent-orange/20 transition-all"
                        placeholder="+234 (0) 800 000 0000"
                      />
                    </div>
                  </div>

                  {/* Project Scope */}
                  <div>
                    <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">
                      Project Scope *
                    </label>
                    <select
                      required
                      value={formState.scope}
                      onChange={(e) =>
                        setFormState({ ...formState, scope: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded text-sm text-slate-900 focus:outline-none focus:border-accent-orange/40 focus:ring-1 focus:ring-accent-orange/20 transition-all appearance-none"
                    >
                      <option value="" disabled className="bg-white">
                        Select project scope
                      </option>
                      {projectScopes.map((scope) => (
                        <option
                          key={scope}
                          value={scope}
                          className="bg-white"
                        >
                          {scope}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Location & Pipeline Miles */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">
                        Location / Region *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.location}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            location: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-accent-orange/40 focus:ring-1 focus:ring-accent-orange/20 transition-all"
                        placeholder="e.g., Niger Delta, Rivers State"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">
                        Est. Pipeline Kilometres
                      </label>
                      <input
                        type="text"
                        value={formState.pipelineMiles}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            pipelineMiles: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-accent-orange/40 focus:ring-1 focus:ring-accent-orange/20 transition-all"
                        placeholder="e.g., 250"
                      />
                    </div>
                  </div>

                  {/* Additional Details */}
                  <div>
                    <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">
                      Additional Details
                    </label>
                    <textarea
                      rows={4}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-accent-orange/40 focus:ring-1 focus:ring-accent-orange/20 transition-all resize-none"
                      placeholder="Describe your surveillance requirements, timeline, and any specific challenges..."
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-accent-orange text-white font-semibold text-sm tracking-wide rounded hover:bg-accent-orange-light transition-all duration-300 hover:shadow-[0_0_30px_rgba(26,154,0,0.3)]"
                  >
                    Submit Technical Inquiry
                  </button>

                  <p className="text-[10px] text-slate-600 text-center font-mono">
                    Your information is encrypted and handled in accordance with
                    our enterprise data protection policy. We do not share
                    operational details with third parties.
                  </p>
                </div>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
