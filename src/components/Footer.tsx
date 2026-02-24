"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Indepth Earth"
                width={160}
                height={34}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Advanced geospatial intelligence for critical energy
              infrastructure protection.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {[
                "Drone Surveillance",
                "Satellite Monitoring",
                "LiDAR Scanning",
                "Leak Detection",
                "ROW Monitoring",
                "Compliance Reporting",
              ].map((item) => (
                <li key={item}>
                  <span className="text-sm text-slate-500 hover:text-slate-700 transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">
              Industries
            </h4>
            <ul className="space-y-2">
              {[
                "Oil & Gas Transmission",
                "Upstream Gathering",
                "Gas Distribution",
                "NLNG & Offshore",
                "Downstream & Refinery",
                "Government & Regulatory",
              ].map((item) => (
                <li key={item}>
                  <span className="text-sm text-slate-500 hover:text-slate-700 transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {[
                "About",
                "Leadership",
                "Careers",
                "Case Studies",
                "News",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <span className="text-sm text-slate-500 hover:text-slate-700 transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-600 font-mono">
            &copy; {new Date().getFullYear()} Indepth Earth Geospatial Services Ltd. All rights
            reserved.
          </div>
          <div className="flex items-center gap-6 text-xs text-slate-600 font-mono">
            <span className="hover:text-slate-700 cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="hover:text-slate-700 cursor-pointer transition-colors">
              Terms of Service
            </span>
            <span className="hover:text-slate-700 cursor-pointer transition-colors">
              Security
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
