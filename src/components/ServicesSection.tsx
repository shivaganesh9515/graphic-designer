"use client";

import RevealMotion from "./RevealMotion";

export default function ServicesSection() {
  return (
    <section
      id="menu"
      className="flex flex-col md:flex-row min-h-[500px] relative bg-brand-cream overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute -top-6 left-16 w-12 h-12 bg-brand-green rounded-full flex items-center justify-center z-20 border-4 border-brand-black animate-spin-slow shadow-lg hover:scale-110 transition-transform cursor-pointer">
        <svg
          className="w-6 h-6 text-brand-cream"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </div>
      <div
        className="absolute -top-6 left-32 w-10 h-10 bg-brand-red rounded-full flex items-center justify-center z-20 border-4 border-brand-cream opacity-90 animate-bounce-slow"
        style={{ animationDelay: "1s" }}
      >
        <div className="w-full h-full border border-dashed border-white rounded-full" />
      </div>

      {/* Green Sidebar */}
      <RevealMotion className="w-full md:w-20 bg-brand-green relative flex md:flex-col items-center justify-between py-8 px-4 jagged-right-edge z-10 shrink-0">
        <h2 className="font-display text-4xl md:text-5xl text-brand-cream md:vertical-text tracking-tight uppercase hover:text-brand-yellow transition-colors cursor-default">
          Services
        </h2>
        <div className="hidden md:block text-[9px] font-bold text-brand-cream uppercase vertical-text tracking-widest mt-8 animate-pulse">
          Open for work
        </div>
      </RevealMotion>

      {/* Content Area */}
      <div className="flex-1 p-8 md:p-12 relative bg-brand-cream">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {/* Column 1 */}
          <RevealMotion>
            <div>
              <h3 className="font-bold text-xs uppercase tracking-widest text-brand-green mb-4 border-b border-brand-green/20 pb-1">
                Branding &amp; Strategy
              </h3>
              <ul className="space-y-3 text-xs font-bold text-brand-black/80 uppercase">
                {[
                  ["Visual Identity", "$2500"],
                  ["Logo Design", "$800"],
                  ["Brand Guidelines", "$1200"],
                  ["Art Direction", "$150/hr"],
                ].map(([item, price]) => (
                  <li
                    key={item}
                    className="menu-item group hover:text-brand-red transition-colors cursor-pointer"
                  >
                    <span>{item}</span>
                    <span className="menu-dots group-hover:border-brand-red" />
                    <span>{price}</span>
                  </li>
                ))}
              </ul>

              <h3 className="font-bold text-xs uppercase tracking-widest text-brand-green mb-4 mt-8 border-b border-brand-green/20 pb-1">
                Web Design
              </h3>
              <ul className="space-y-3 text-xs font-bold text-brand-black/80 uppercase">
                {[
                  ["Landing Page", "$1500"],
                  ["E-Commerce", "$3500"],
                  ["UI/UX Audit", "$900"],
                ].map(([item, price]) => (
                  <li
                    key={item}
                    className="menu-item group hover:text-brand-red transition-colors cursor-pointer"
                  >
                    <span>{item}</span>
                    <span className="menu-dots group-hover:border-brand-red" />
                    <span>{price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealMotion>

          {/* Column 2 */}
          <RevealMotion>
            <div>
              <h3 className="font-bold text-xs uppercase tracking-widest text-brand-green mb-4 border-b border-brand-green/20 pb-1">
                Print &amp; Packaging
              </h3>
              <ul className="space-y-3 text-xs font-bold text-brand-black/80 uppercase">
                {[
                  ["Packaging Design", "$2000"],
                  ["Editorial Layout", "$50/pg"],
                  ["Poster Design", "$400"],
                  ["Stationery Set", "$600"],
                ].map(([item, price]) => (
                  <li
                    key={item}
                    className="menu-item group hover:text-brand-red transition-colors cursor-pointer"
                  >
                    <span>{item}</span>
                    <span className="menu-dots group-hover:border-brand-red" />
                    <span>{price}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Box */}
              <div className="mt-8 bg-brand-red p-4 text-brand-cream transform -rotate-1 shadow-lg hover:rotate-0 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <p className="font-display text-xl mb-1 group-hover:scale-105 transition-transform origin-left">
                  Need a quote?
                </p>
                <p className="text-[10px] leading-tight opacity-90 group-hover:opacity-100">
                  Contact me for a custom package tailored to your specific
                  project needs.
                </p>
              </div>
            </div>
          </RevealMotion>
        </div>
      </div>

      {/* Bottom decorations */}
      <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 z-20 hover:translate-y-[-10px] transition-transform duration-300">
        <div className="w-16 h-16 bg-brand-yellow rotate-45 border-4 border-brand-black relative overflow-hidden">
          <div className="absolute top-2 left-2 w-2 h-2 bg-brand-black rounded-full" />
          <div className="absolute bottom-4 right-2 w-4 h-4 bg-brand-black rounded-full" />
        </div>
      </div>
      <div className="absolute bottom-[-15px] right-20 w-12 h-6 bg-brand-red rounded-t-full border-t-2 border-r-2 border-l-2 border-brand-black z-20 hover:scale-110 transition-transform origin-bottom" />
    </section>
  );
}
