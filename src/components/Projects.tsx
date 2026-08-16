"use client";

const row1 = [
  {
    title: "THE ROASTERY",
    category: "BRANDING",
    bg: "bg-[#008f4c]",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=500&q=80",
    imgRotation: "rotate-6",
    bottomBg: "group-hover:bg-[#1a1a1a]",
    catBg: "bg-[#1a1a1a] group-hover:bg-[#fdb913] group-hover:text-[#1a1a1a]",
    catText: "text-[#fdb913]",
  },
  {
    title: "COSMIC SOAPS",
    category: "PACKAGING",
    bg: "bg-[#d6cbb2]",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&q=80",
    imgRotation: "-rotate-3",
    bottomBg: "bg-[#c5b99e] group-hover:bg-[#e94e33]",
    titleColor: "text-[#e94e33] group-hover:text-white",
    catBg: "bg-[#e94e33] group-hover:bg-white group-hover:text-[#e94e33]",
    catText: "text-white",
    tag: true,
  },
  {
    title: "NEO-ARCH",
    category: "ZINE",
    bg: "bg-[#005eb8]",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=500&q=80",
    imgRotation: "rotate-2",
    bottomBg: "group-hover:bg-[#fdb913]",
    titleColor: "text-[#fdb913] group-hover:text-blue-900",
    catBg: "bg-[#fdb913] text-blue-900 group-hover:bg-blue-900 group-hover:text-[#fdb913]",
  },
];

const row2 = [
  {
    title: "ARTWORK",
    bg: "bg-[#005eb8]",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&q=80",
    circular: true,
  },
  {
    title: "APPAREL",
    bg: "bg-[#008f4c]",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&q=80",
    grayscale: true,
  },
  {
    title: "DIGITAL",
    bg: "bg-[#e94e33]",
    digital: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#f3efe0] pt-8 pb-16 relative">
      {/* Header */}
      <div className="text-center mb-8 relative">
        <h2
          className="font-[family-name:var(--font-anton)] text-4xl md:text-5xl text-[#fdb913] uppercase tracking-tight hover:text-[#e94e33] transition-colors duration-500 cursor-default"
          style={{ textShadow: "2px 2px 0px #e94e33" }}
        >
          Selected Works
        </h2>
        <div className="absolute top-1/2 right-8 transform -translate-y-1/2 text-[9px] font-bold text-[#e94e33] uppercase hidden md:block group cursor-pointer">
          View All <span className="ml-1 inline-block group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>

      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-full">
        {row1.map((card) => (
          <div key={card.title} className={`group relative ${card.bg} h-64 md:h-72 overflow-hidden border-r border-[#f3efe0] cursor-pointer`}>
            <div className="absolute top-4 left-4 w-2 h-2 bg-[#1a1a1a] rounded-full z-10" />

            <div className="h-4/5 flex items-center justify-center p-6">
              <img
                src={card.image}
                alt={card.title}
                className={`w-40 h-auto shadow-xl transform group-hover:scale-110 transition duration-500 ${card.imgRotation} border-2 border-[#f3efe0] ${card.tag ? "group-hover:border-[#e94e33]" : ""}`}
              />
            </div>

            <div className={`absolute bottom-0 w-full py-2 px-4 flex justify-between items-center transition-colors duration-300 ${card.bottomBg}`}>
              <span className={`font-[family-name:var(--font-anton)] text-xl ${card.titleColor || "text-[#f3efe0]"}`}>
                {card.title}
              </span>
              <span className={`text-[10px] font-bold px-2 py-0.5 ${card.catBg} ${card.catText || "text-[#f3efe0]"}`}>
                {card.category}
              </span>
            </div>

            {card.tag && (
              <div className="absolute top-0 right-8 w-8 h-12 bg-[#e94e33] flex items-end justify-center pb-2 shadow-sm group-hover:h-16 transition-all duration-300">
                <div className="w-4 h-4 rounded-full bg-white" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-full">
        {row2.map((card) => (
          <div key={card.title} className={`group relative ${card.bg} h-64 md:h-64 overflow-hidden border-r border-t border-[#f3efe0] cursor-pointer`}>
            {card.circular && (
              <>
                <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
                  <span className="font-[family-name:var(--font-anton)] text-9xl text-white group-hover:rotate-180 transition-transform duration-700">★</span>
                </div>
                <div className="h-full flex items-center justify-center p-6 relative z-10">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-32 h-32 object-cover shadow-xl transform group-hover:scale-125 transition duration-500 border-4 border-[#1a1a1a] rounded-full"
                  />
                </div>
              </>
            )}

            {card.grayscale && (
              <>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-[#f3efe0] z-10 transition-transform group-hover:-translate-y-2" />
                <div className="h-full flex items-center justify-center p-6">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-32 h-auto shadow-xl transform group-hover:scale-110 transition duration-500 -rotate-6 grayscale group-hover:grayscale-0"
                  />
                </div>
              </>
            )}

            {card.digital && (
              <>
                <div className="absolute top-4 left-4 bg-white text-[#e94e33] text-[10px] font-bold px-2 py-1 transform -rotate-12 group-hover:rotate-0 transition-transform">
                  NEW
                </div>
                <div className="h-full flex items-center justify-center p-6">
                  <div className="w-40 h-24 bg-[#f3efe0] border-2 border-[#1a1a1a] flex items-center justify-center shadow-lg transform group-hover:rotate-3 group-hover:scale-110 transition duration-300">
                    <span className="font-[family-name:var(--font-anton)] text-2xl text-[#1a1a1a]">A</span>
                  </div>
                </div>
              </>
            )}

            <div className="absolute bottom-4 left-4">
              <span className="font-[family-name:var(--font-anton)] text-lg text-[#f3efe0]">{card.title}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Decorative Triangle */}
      <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-full flex justify-center z-10">
        <div className="w-32 h-10 bg-[#f3efe0]" style={{ clipPath: "polygon(50% 100%, 0 0, 100% 0)" }} />
      </div>
    </section>
  );
}