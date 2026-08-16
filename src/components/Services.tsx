"use client";

import { Plus } from "lucide-react";

const menuSections = [
  {
    title: "Branding & Strategy",
    items: [
      { name: "Visual Identity", price: "$2500" },
      { name: "Logo Design", price: "$800" },
      { name: "Brand Guidelines", price: "$1200" },
      { name: "Art Direction", price: "$150/hr" },
    ],
  },
  {
    title: "Web Design",
    items: [
      { name: "Landing Page", price: "$1500" },
      { name: "E-Commerce", price: "$3500" },
      { name: "UI/UX Audit", price: "$900" },
    ],
  },
];

const menuCol2 = [
  {
    title: "Print & Packaging",
    items: [
      { name: "Packaging Design", price: "$2000" },
      { name: "Editorial Layout", price: "$50/pg" },
      { name: "Poster Design", price: "$400" },
      { name: "Stationery Set", price: "$600" },
    ],
  },
];

export default function Services() {
  return (
    <section className="flex flex-col md:flex-row min-h-[500px] relative bg-[#f3efe0] overflow-hidden" id="menu">
      {/* Decorative Elements */}
      <div className="absolute -top-6 left-16 w-12 h-12 bg-[#008f4c] rounded-full flex items-center justify-center z-20 border-4 border-[#1a1a1a] shadow-lg hover:scale-110 transition-transform cursor-pointer">
        <Plus size={24} className="text-[#f3efe0]" />
      </div>
      <div className="absolute -top-6 left-32 w-10 h-10 bg-[#e94e33] rounded-full flex items-center justify-center z-20 border-4 border-[#f3efe0] opacity-90" style={{ animationDelay: "1s" }}>
        <div className="w-full h-full border border-dashed border-white rounded-full" />
      </div>

      {/* Green Sidebar */}
      <div className="w-full md:w-20 bg-[#008f4c] relative flex md:flex-col items-center justify-between py-8 px-4 jagged-right-edge z-10 shrink-0">
        <h2 className="font-[family-name:var(--font-anton)] text-4xl md:text-5xl text-[#f3efe0] md:vertical-text tracking-tight uppercase hover:text-[#fdb913] transition-colors cursor-default">
          Services
        </h2>
        <div className="hidden md:block text-[9px] font-bold text-[#f3efe0] uppercase vertical-text tracking-widest mt-8 animate-pulse">
          Open for work
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-8 md:p-12 relative bg-[#f3efe0]">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "20px 20px" }} />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {/* Column 1 */}
          <div>
            {menuSections.map((section) => (
              <div key={section.title} className="mb-8">
                <h3 className="font-bold text-xs uppercase tracking-widest text-[#008f4c] mb-4 border-b border-[#008f4c]/20 pb-1">
                  {section.title}
                </h3>
                <ul className="space-y-3 text-xs font-bold text-[#1a1a1a]/80 uppercase">
                  {section.items.map((item) => (
                    <li key={item.name} className="menu-item group hover:text-[#e94e33] transition-colors cursor-pointer">
                      <span>{item.name}</span>
                      <span className="menu-dots group-hover:border-[#e94e33]" />
                      <span>{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div>
            {menuCol2.map((section) => (
              <div key={section.title} className="mb-8">
                <h3 className="font-bold text-xs uppercase tracking-widest text-[#008f4c] mb-4 border-b border-[#008f4c]/20 pb-1">
                  {section.title}
                </h3>
                <ul className="space-y-3 text-xs font-bold text-[#1a1a1a]/80 uppercase">
                  {section.items.map((item) => (
                    <li key={item.name} className="menu-item group hover:text-[#e94e33] transition-colors cursor-pointer">
                      <span>{item.name}</span>
                      <span className="menu-dots group-hover:border-[#e94e33]" />
                      <span>{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* CTA Box */}
            <div className="mt-8 bg-[#e94e33] p-4 text-[#f3efe0] transform -rotate-1 shadow-lg hover:rotate-0 hover:shadow-xl transition-all duration-300 cursor-pointer group">
              <p className="font-[family-name:var(--font-anton)] text-xl mb-1 group-hover:scale-105 transition-transform origin-left">
                Need a quote?
              </p>
              <p className="text-[10px] leading-tight opacity-90 group-hover:opacity-100">
                Contact me for a custom package tailored to your specific project needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cheese Wedge Decoration */}
      <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 z-20 hover:translate-y-[-10px] transition-transform duration-300">
        <div className="w-16 h-16 bg-[#fdb913] rotate-45 border-4 border-[#1a1a1a] relative overflow-hidden">
          <div className="absolute top-2 left-2 w-2 h-2 bg-[#1a1a1a] rounded-full" />
          <div className="absolute bottom-4 right-2 w-4 h-4 bg-[#1a1a1a] rounded-full" />
        </div>
      </div>

      {/* Red Half Circle */}
      <div className="absolute bottom-[-15px] right-20 w-12 h-6 bg-[#e94e33] rounded-t-full border-t-2 border-r-2 border-l-2 border-[#1a1a1a] z-20 hover:scale-110 transition-transform origin-bottom" />
    </section>
  );
}