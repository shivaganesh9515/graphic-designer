"use client";

import RevealMotion from "./RevealMotion";

const events = [
  {
    date: "04.15",
    time: "18:00",
    title: "TYPE & CHAOS",
    subtitle: "GUEST LECTURE",
    description:
      "Deconstructing grid systems in modern web design. Hosted at the Institute of Contemporary Arts.",
    delay: "100ms",
  },
  {
    date: "05.20",
    time: "10:00",
    title: "INK & PIXEL",
    subtitle: "SOLO EXHIBITION",
    description:
      "A retrospective collection of screen prints and digital artifacts exploring analog textures.",
    delay: "200ms",
  },
  {
    date: "06.15",
    time: "20:30",
    title: "DESIGN WEEK",
    subtitle: "",
    description: "KEYNOTE SPEAKER: THE FUTURE OF FREELANCE",
    delay: "300ms",
  },
];

export default function EventsSection() {
  return (
    <section
      id="events"
      className="bg-brand-blue text-brand-cream relative pb-12 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row h-full">
        {/* Left: List */}
        <div className="w-full md:w-3/5 p-8 md:p-12 space-y-10">
          {events.map((event) => (
            <RevealMotion
              key={event.title}
              className="group cursor-pointer hover:translate-x-2 transition-transform duration-300"
            >
              <div className="flex gap-4 text-[10px] font-bold text-blue-300 mb-1">
                <span className="bg-blue-800 px-1">{event.date}</span>
                <span className="bg-blue-800 px-1">{event.time}</span>
              </div>
              <h3 className="font-display text-2xl text-brand-yellow mb-1 group-hover:text-white transition-colors">
                {event.title}
              </h3>
              {event.subtitle && (
                <h4 className="font-display text-xl opacity-90">
                  {event.subtitle}
                </h4>
              )}
              <p className="text-[11px] uppercase tracking-wide opacity-70 mt-2 max-w-xs leading-relaxed group-hover:opacity-100 transition-opacity">
                {event.description}
              </p>
            </RevealMotion>
          ))}
        </div>

        {/* Right: Poster Visual */}
        <div className="w-full md:w-2/5 p-8 flex items-center justify-center relative">
          <RevealMotion>
            <div className="w-48 aspect-[2/3] bg-brand-red transform rotate-3 shadow-[10px_10px_0px_rgba(0,0,0,0.3)] relative border border-brand-cream group hover:rotate-0 hover:shadow-[15px_15px_0px_rgba(0,0,0,0.2)] hover:scale-105 transition-all duration-500 ease-out cursor-pointer">
              <div className="absolute inset-2 border border-brand-black/20 flex flex-col justify-between p-2">
                <div className="flex justify-between items-start">
                  <span className="vertical-text text-[8px] font-bold text-brand-black/50">
                    LATEST WORK
                  </span>
                  <div className="w-4 h-4 rounded-full border border-brand-black/30 group-hover:bg-brand-black transition-colors" />
                </div>

                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                  <h1
                    className="font-display text-7xl leading-none text-brand-black mix-blend-multiply opacity-80 group-hover:scale-110 transition-transform duration-700"
                    style={{ textShadow: "2px 2px 0px #fff" }}
                  >
                    BO
                    <br />
                    LD
                  </h1>
                </div>

                <div className="flex justify-end">
                  <div className="w-8 h-4 border border-brand-black/30 group-hover:bg-brand-yellow transition-colors" />
                </div>
              </div>
              {/* 3D effect strips */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 pointer-events-none">
                <div className="absolute top-4 left-4 w-4 h-16 bg-brand-blue mix-blend-multiply opacity-80 transform -skew-y-12 group-hover:skew-y-0 transition-transform duration-500" />
                <div className="absolute top-4 right-8 w-4 h-16 bg-brand-green mix-blend-multiply opacity-80 transform skew-y-12 group-hover:skew-y-0 transition-transform duration-500" />
              </div>
            </div>
          </RevealMotion>
        </div>
      </div>

      {/* Bottom decorative jagged edge */}
      <div
        className="absolute bottom-0 left-0 w-full h-4 bg-brand-cream"
        style={{
          clipPath:
            "polygon(0% 100%, 2% 0%, 4% 100%, 6% 0%, 8% 100%, 10% 0%, 12% 100%, 14% 0%, 16% 100%, 18% 0%, 20% 100%, 22% 0%, 24% 100%, 26% 0%, 28% 100%, 30% 0%, 32% 100%, 34% 0%, 36% 100%, 38% 0%, 40% 100%, 42% 0%, 44% 100%, 46% 0%, 48% 100%, 50% 0%, 52% 100%, 54% 0%, 56% 100%, 58% 0%, 60% 100%, 62% 0%, 64% 100%, 66% 0%, 68% 100%, 70% 0%, 72% 100%, 74% 0%, 76% 100%, 78% 0%, 80% 100%, 82% 0%, 84% 100%, 86% 0%, 88% 100%, 90% 0%, 92% 100%, 94% 0%, 96% 100%, 98% 0%, 100% 100%)",
        }}
      />
    </section>
  );
}
