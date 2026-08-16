export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-[#f3efe0] pt-16 pb-8 px-8 md:px-12 relative z-0">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        {/* Left Info */}
        <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest space-y-2 opacity-70">
          <div>Open for Work</div>
          <div>Mon-Fri // 10:00 - 18:00</div>
          <div className="pt-4">Remote / On-Site</div>
          <div>Bandra West</div>
          <div>Mumbai, India</div>
          <div className="pt-4 hover:text-[#e94e33] transition-colors cursor-pointer">
            <a href="mailto:hello@designer.com">hello@designer.com</a>
          </div>
          <div className="hover:text-[#e94e33] transition-colors cursor-pointer">+91 98765 43210</div>
        </div>

        {/* Center Logo */}
        <div className="mx-auto mb-8 md:mb-0">
          <div className="w-32 h-16 border border-[#f3efe0]/30 flex items-center justify-center hover:border-[#f3efe0] hover:bg-white/5 transition-all cursor-pointer">
            <div className="w-24 h-8 border border-[#f3efe0]/30 flex items-center justify-center transform rotate-180">
              <span className="font-[family-name:var(--font-anton)] text-sm tracking-widest">ENTH</span>
            </div>
          </div>
        </div>

        {/* Right Links */}
        <div className="flex flex-col items-end gap-2">
          <div className="flex gap-4 text-[10px] md:text-xs font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-[#e94e33] transition">About</a>
            <a href="#" className="hover:text-[#e94e33] transition">Events</a>
          </div>
          <div className="flex gap-4 text-[10px] md:text-xs font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-[#e94e33] transition">Menu</a>
            <a href="#" className="hover:text-[#e94e33] transition">Merch</a>
          </div>

          <div className="flex gap-3 mt-4">
            {["f", "in"].map((icon) => (
              <div
                key={icon}
                className="w-6 h-6 border border-[#f3efe0] rotate-45 flex items-center justify-center hover:bg-[#f3efe0] hover:text-[#1a1a1a] transition cursor-pointer group"
              >
                <span className="-rotate-45 font-bold text-xs group-hover:rotate-0 transition-transform">
                  {icon}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}