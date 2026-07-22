import { experience } from "@/data/content";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-paper py-28 lg:py-36 border-t border-divider"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="font-mono text-accent text-xs tracking-[0.25em] uppercase mb-4">
            Experience
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-ink tracking-tight">
            Where I&apos;ve worked
          </h2>
        </div>

        <div className="max-w-2xl">
          <div className="border-l-2 border-accent pl-8 space-y-12">
            {experience.map((job) => (
              <div key={`${job.company}-${job.period}`}>
                <p className="font-mono text-xs text-muted tracking-widest uppercase mb-1">
                  {job.period}
                </p>
                <h3 className="font-display text-xl font-semibold text-ink mb-0.5">
                  {job.role}
                </h3>
                <p className="text-muted text-sm mb-4">{job.company}</p>
                <ul className="space-y-2">
                  {job.description.map((line, i) => (
                    <li key={i} className="flex gap-2 text-muted text-sm leading-relaxed">
                      <span className="text-accent mt-0.5 shrink-0">▸</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
