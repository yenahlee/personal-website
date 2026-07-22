import { profile } from "@/data/content";

export default function Hero() {
  const [first, last] = profile.name.split(" ");

  return (
    <section className="relative min-h-screen bg-canvas flex items-center overflow-hidden">
      {/* Signature element: large outlined YL monogram behind content */}
      <div
        className="absolute inset-y-0 left-0 w-1/2 hidden md:flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <span className="monogram">YL</span>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-screen py-32">
          {/* Left spacer on desktop — monogram fills this space absolutely */}
          <div className="hidden md:block" />

          {/* Right: intro copy */}
          <div className="space-y-7">
            <p className="font-mono text-accent text-xs tracking-[0.25em] uppercase">
              {profile.role}
            </p>

            <h1 className="font-display text-white text-6xl lg:text-7xl font-bold leading-[1.0] tracking-tight">
              {first}
              <br />
              {last}
            </h1>

            <p className="text-white/55 text-lg leading-relaxed max-w-sm">
              {profile.tagline}
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href="#projects"
                className="px-6 py-3 bg-accent text-white font-medium text-sm rounded-full hover:bg-accentdark transition-colors"
              >
                View my work
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="px-6 py-3 text-white/70 font-medium text-sm border border-white/20 rounded-full hover:text-white hover:border-white/50 transition-colors"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll line */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="w-px h-10 bg-gradient-to-b from-white/25 to-transparent" />
      </div>
    </section>
  );
}
