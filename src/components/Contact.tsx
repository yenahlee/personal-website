import { profile } from "@/data/content";

export default function Contact() {
  return (
    <section id="contact" className="bg-canvas py-28 lg:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-accent text-xs tracking-[0.25em] uppercase mb-6">
          Contact
        </p>

        <h2 className="font-display text-4xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05] mb-6 max-w-xl">
          Let&apos;s connect.
        </h2>

        <p className="text-white/50 text-base max-w-sm mb-12 leading-relaxed">
          I'm actively looking for new graduate Software Engineering positions.
          Whether you have an opportunity, want to collaborate, or just want to
          chat about tech, my inbox is always open.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="inline-block font-display text-xl lg:text-2xl font-semibold text-white border-b-2 border-accent pb-1 hover:text-accent transition-colors duration-200"
        >
          {profile.email}
        </a>

        <div className="flex gap-6 mt-12">
          {profile.github && (
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-white/40 hover:text-white/80 transition-colors"
            >
              GitHub ↗
            </a>
          )}
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-white/40 hover:text-white/80 transition-colors"
            >
              LinkedIn ↗
            </a>
          )}
        </div>

        <p className="text-white/20 text-xs font-mono mt-20">
          © {new Date().getFullYear()} Yenah Lee
        </p>
      </div>
    </section>
  );
}
