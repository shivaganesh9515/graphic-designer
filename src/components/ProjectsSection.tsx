"use client";

import RevealMotion from "./RevealMotion";

const projectsRow1 = [
  {
    label: "THE ROASTERY",
    tag: "BRANDING",
    bg: "bg-brand-green",
    img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=500&q=80",
    delay: "100ms",
    hoverBg: "bg-brand-black",
    hoverTag: "group-hover:bg-brand-yellow group-hover:text-brand-black",
  },
  {
    label: "COSMIC SOAPS",
    tag: "PACKAGING",
    bg: "bg-[#d6cbb2]",
    img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&q=80",
    delay: "200ms",
    hoverBg: "group-hover:bg-brand-red",
    hoverTag: "group-hover:bg-white group-hover:text-brand-red",
  },
  {
    label: "NEO-ARCH",
    tag: "ZINE",
    bg: "bg-brand-blue",
    img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=500&q=80",
    delay: "300ms",
    hoverBg: "group-hover:bg-brand-yellow",
    hoverTag: "group-hover:bg-blue-900 group-hover:text-brand-yellow",
  },
];

const projectsRow2 = [
  {
    label: "ARTWORK",
    tag: "",
    bg: "bg-brand-blue",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&q=80",
    delay: "100ms",
    extra: "star",
    price: "$3000",
    imgClass: "w-32 h-32 object-cover rounded-full border-4 border-brand-black",
  },
  {
    label: "APPAREL",
    tag: "",
    bg: "bg-brand-green",
    img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&q=80",
    delay: "200ms",
    extra: "tag",
    imgClass: "w-32 h-auto grayscale group-hover:grayscale-0",
  },
  {
    label: "DIGITAL",
    tag: "",
    bg: "bg-brand-red",
    img: "",
    delay: "300ms",
    extra: "new",
    price: "3000",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-brand-cream pt-8 pb-16 relative">
      {/* Header */}
      <RevealMotion>
        <div className="text-center mb-8 relative">
          <h2
            className="font-display text-4xl md:text-5xl text-brand-yellow uppercase tracking-tight hover:text-brand-red transition-colors duration-500 cursor-default"
            style={{ textShadow: "2px 2px 0px #e94e33" }}
          >
            Selected Works
          </h2>
          <div className="absolute top-1/2 right-8 transform -translate-y-1/2 text-[9px] font-bold text-brand-red uppercase hidden md:block group cursor-pointer">
            View All{" "}
            <span className="ml-1 inline-block group-hover:translate-x-1 transition-transform">
              →
            </span>
          </div>
        </div>
      </RevealMotion>

      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-full">
        {projectsRow1.map((project) => (
          <RevealMotion
            key={project.label}
            className={`group relative ${project.bg} h-64 md:h-72 overflow-hidden border-r border-brand-cream cursor-pointer`}
          >
            <div className="absolute top-4 left-4 w-2 h-2 bg-brand-black rounded-full z-10" />
            <div className="h-4/5 flex items-center justify-center p-6">
              <div className="group-hover:scale-110 transition duration-500"
                style={{
                  rotate: `${
                    project.label === "NEO-ARCH" ? "2" : project.label === "COSMIC SOAPS" ? "-3" : "6"
                  }deg`,
                }}
              >
                <img
                  src={project.img}
                  alt={project.label}
                  className="w-40 h-auto shadow-xl border-2 border-brand-cream"
                />
              </div>
            </div>
            <div
              className={`absolute bottom-0 w-full ${project.bg} brightness-90 py-2 px-4 flex justify-between items-center ${project.hoverBg} transition-colors duration-300`}
            >
              <span className="font-display text-brand-cream text-xl">
                {project.label}
              </span>
              <span
                className={`text-[10px] font-bold text-brand-yellow bg-brand-black px-2 py-0.5 ${project.hoverTag} transition-colors`}
              >
                {project.tag}
              </span>
            </div>
          </RevealMotion>
        ))}
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-full">
        {/* Card 4: Blue - Illustration */}
        <RevealMotion className="group relative bg-brand-blue h-64 md:h-64 overflow-hidden border-r border-t border-brand-cream cursor-pointer">
          <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
            <span className="font-display text-9xl text-white group-hover:rotate-180 transition-transform duration-700">
              ★
            </span>
          </div>
          <div className="h-full flex items-center justify-center p-6 relative z-10">
            <img
              src={projectsRow2[0].img}
              alt="Artwork"
              className="w-32 h-32 object-cover shadow-xl transform group-hover:scale-125 transition duration-500 border-4 border-brand-black rounded-full"
            />
          </div>
          <div className="absolute bottom-4 left-4">
            <span className="font-display text-white text-lg">ARTWORK</span>
          </div>
          <div className="absolute bottom-4 right-4 text-[10px] text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
            {projectsRow2[0].price}
          </div>
        </RevealMotion>

        {/* Card 5: Green - Merch */}
        <RevealMotion className="group relative bg-brand-green h-64 md:h-64 overflow-hidden border-r border-t border-brand-cream cursor-pointer">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-brand-cream z-10 transition-transform group-hover:-translate-y-2" />
          <div className="h-full flex items-center justify-center p-6">
            <img
              src={projectsRow2[1].img}
              alt="Apparel"
              className="w-32 h-auto shadow-xl transform group-hover:scale-110 transition duration-500 -rotate-6 grayscale group-hover:grayscale-0"
            />
          </div>
          <div className="absolute bottom-4 right-4">
            <span className="font-display text-brand-cream text-lg">
              APPAREL
            </span>
          </div>
          <div className="absolute top-4 right-4 text-brand-cream font-bold text-xs bg-brand-black px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            1000
          </div>
        </RevealMotion>

        {/* Card 6: Red - Digital */}
        <RevealMotion className="group relative bg-brand-red h-64 md:h-64 overflow-hidden border-t border-brand-cream cursor-pointer">
          <div className="absolute top-4 left-4 bg-white text-brand-red text-[10px] font-bold px-2 py-1 transform -rotate-12 group-hover:rotate-0 transition-transform">
            NEW
          </div>
          <div className="h-full flex items-center justify-center p-6">
            <div className="w-40 h-24 bg-brand-cream border-2 border-brand-black flex items-center justify-center shadow-lg transform group-hover:rotate-3 group-hover:scale-110 transition duration-300">
              <span className="font-display text-2xl text-brand-black">A</span>
            </div>
          </div>
          <div className="absolute bottom-4 left-4">
            <span className="font-display text-brand-black text-lg">
              DIGITAL
            </span>
          </div>
          <div className="absolute bottom-4 right-4 text-brand-black font-bold text-xs">
            3000
          </div>
        </RevealMotion>
      </div>

      {/* Footer Decorative Triangle */}
      <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-full flex justify-center z-10">
        <div
          className="w-32 h-10 bg-brand-cream"
          style={{ clipPath: "polygon(50% 100%, 0 0, 100% 0)" }}
        />
      </div>
    </section>
  );
}
