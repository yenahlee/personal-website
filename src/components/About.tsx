import { profile, skills } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="bg-paper py-28 lg:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: heading */}
          <div>
            <p className="font-mono text-accent text-xs tracking-[0.25em] uppercase mb-4">
              About
            </p>
            <h2 className="font-display text-5xl lg:text-6xl font-bold text-ink leading-[1.05] tracking-tight">
              Hi, I&apos;m
              <br />
              Yenah.
            </h2>
          </div>

          {/* Right: bio + skills */}
          <div className="space-y-8 lg:pt-14">
            <div className="space-y-5">
              {profile.bio.map((para, i) => (
                <p key={i} className="text-muted text-base leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            <div>
              <p className="font-mono text-xs text-muted tracking-widest uppercase mb-3">
                Skills
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-accentbg text-accent text-sm font-medium rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
