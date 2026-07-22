import { projects } from "@/data/content";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-paper py-28 lg:py-36 border-t border-divider"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="font-mono text-accent text-xs tracking-[0.25em] uppercase mb-4">
            Projects
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-ink tracking-tight">
            Selected work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <article
              key={project.name}
              className="bg-white border border-divider rounded-2xl p-6 flex flex-col gap-4 hover:border-accent transition-colors duration-200 group"
            >
              <div className="flex-1 space-y-3">
                <h3 className="font-display text-lg font-semibold text-ink group-hover:text-accent transition-colors">
                  {project.name}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-accentbg text-accent text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.github && (
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-1 text-xs font-medium text-muted hover:text-accent transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.linkLabel ?? "GitHub"} ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
