import RevealMotion from "./RevealMotion";

export default function Header() {
  return (
    <header className="pt-24 pb-32 relative z-20 overflow-hidden bg-brand-cream">
      {/* Top Decorative Color Bar */}
      <div className="absolute top-0 left-0 w-full h-3 z-30 flex shadow-sm">
        <div className="h-full flex-1 bg-brand-blue" />
        <div className="h-full flex-1 bg-brand-red" />
        <div className="h-full flex-1 bg-brand-yellow" />
        <div className="h-full flex-1 bg-brand-green" />
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-brand-red rounded-full flex items-center justify-center animate-spin-slow">
          <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
            <path
              id="curve"
              d="M 25, 50 a 25,25 0 1,1 50,0 a 25,25 0 1,1 -50,0"
              fill="transparent"
            />
            <text className="text-[12px] font-bold fill-brand-red uppercase tracking-widest">
              <textPath href="#curve">
                Visual Design • Art Direction •
              </textPath>
            </text>
          </svg>
        </div>
        <div className="absolute bottom-10 right-10 transform rotate-12">
          <div className="w-40 h-10 border-2 border-brand-red flex items-center justify-between px-2">
            <div className="h-full w-1 bg-brand-red" />
            <div className="h-full w-2 bg-brand-red" />
            <div className="h-full w-0.5 bg-brand-red" />
            <div className="h-full w-4 bg-brand-red" />
            <div className="h-full w-1 bg-brand-red" />
            <span className="text-[10px] font-bold text-brand-red rotate-90 scale-75">
              1998
            </span>
          </div>
        </div>
      </div>

      {/* Top Nav */}
      <div className="header-animate-in relative z-20 flex justify-between items-start px-8 text-[10px] font-bold tracking-widest text-brand-red uppercase">
        <div className="leading-tight hover:text-brand-black transition-colors cursor-default border-l-2 border-brand-red pl-2">
          Available for
          <br />
          Commissions &amp; Collabs
        </div>
        <div className="flex gap-8">
          <a
            href="#events"
            className="hover:text-brand-black hover:scale-110 transition-all inline-block"
          >
            Exhibitions
          </a>
          <a
            href="#menu"
            className="hover:text-brand-black hover:scale-110 transition-all inline-block"
          >
            Services
          </a>
          <a
            href="#projects"
            className="hover:text-brand-black hover:scale-110 transition-all inline-block"
          >
            Selected Works
          </a>
        </div>
        <div className="flex gap-2">
          <span className="cursor-pointer hover:text-brand-black transition-colors">
            EN
          </span>
          <span className="text-brand-black/50">/</span>
          <span className="text-brand-black/50 cursor-pointer hover:text-black transition-colors">
            HI
          </span>
        </div>
      </div>

      {/* Main Logo Area */}
      <div className="flex justify-center mt-16 mb-24 relative">
        <div className="logo-animate-in relative w-80 h-40 md:w-96 md:h-48 border-2 border-brand-red transform scale-100 hover:scale-105 transition-transform duration-500 cursor-pointer bg-brand-cream z-10 shadow-[10px_10px_0px_rgba(233,78,51,0.2)]">
          {/* Decorative corners */}
          <div className="absolute -top-1 -left-1 w-2 h-2 bg-brand-red" />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-brand-red" />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-brand-red" />
          <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-brand-red" />

          {/* Text Inside */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="w-full h-full relative flex items-center justify-center">
              <div className="absolute inset-0 border border-brand-red rotate-3 opacity-20" />
              <div className="absolute inset-0 border border-brand-red -rotate-2 opacity-20" />

              <div className="relative z-10 text-center flex flex-col items-center">
                <span className="text-[10px] uppercase font-bold text-brand-black tracking-[0.5em] mb-2 bg-brand-red text-brand-cream px-2">
                  Portfolio of
                </span>
                <h1
                  className="font-display text-6xl md:text-7xl text-brand-red tracking-tighter leading-none"
                  style={{ textShadow: "2px 2px 0px rgba(0,0,0,0.1)" }}
                >
                  CREATIVE
                </h1>
                <div className="font-display text-2xl text-brand-black tracking-widest mt-1">
                  2024 COLLECTION
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="header-animate-in absolute bottom-4 right-8 flex gap-2">
        <a
          href="#"
          className="w-6 h-6 bg-brand-red rotate-45 flex items-center justify-center text-brand-cream text-[10px] hover:bg-brand-black transition-colors duration-300 group"
        >
          <span className="-rotate-45 font-bold group-hover:rotate-0 transition-transform duration-300">
            f
          </span>
        </a>
        <a
          href="#"
          className="w-6 h-6 bg-brand-red rotate-45 flex items-center justify-center text-brand-cream text-[10px] hover:bg-brand-black transition-colors duration-300 group"
        >
          <span className="-rotate-45 font-bold group-hover:rotate-0 transition-transform duration-300">
            in
          </span>
        </a>
      </div>
    </header>
  );
}
