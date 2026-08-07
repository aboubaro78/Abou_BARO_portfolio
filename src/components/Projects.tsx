import { ArrowUpRight, CheckCircle2, ExternalLink, Github, Target } from 'lucide-react';
import { projects } from '@/data';
import SectionHeading from './SectionHeading';

export default function Projects() {
  return (
    <section id="projects" className="relative bg-white py-24 dark:bg-primary-dark lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Projects"
          title="Selected"
          highlight="work"
          description="From AI-powered agriculture to electricity market optimization and epidemiological modeling — each project applies advanced methods to a concrete problem."
        />

        <div className="space-y-8">
          {projects.map((p, i) => (
            <article
              key={p.id}
              className="reveal group grid overflow-hidden rounded-3xl border border-black/8 bg-surface shadow-card transition-all duration-500 hover:shadow-card-hover dark:border-white/10 dark:bg-white/5 lg:grid-cols-12"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden lg:col-span-5">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105 ${
                    i === 0 ? 'h-56 lg:h-full' : 'h-56 lg:h-full'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary shadow-sm backdrop-blur dark:bg-primary/90 dark:text-white">
                  Project {String(i + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col p-7 lg:col-span-7 lg:p-9">
                <h3 className="font-display text-xl font-bold text-primary dark:text-white sm:text-2xl">
                  {p.title}
                </h3>

                <div className="mt-4 space-y-4 text-sm leading-relaxed">
                  <div>
                    <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
                      <span className="h-px w-4 bg-accent" /> Context
                    </p>
                    <p className="mt-1 text-text-muted dark:text-gray-400">{p.context}</p>
                  </div>
                  <div>
                    <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
                      <Target size={13} /> Objective
                    </p>
                    <p className="mt-1 text-text-muted dark:text-gray-400">{p.objective}</p>
                  </div>
                </div>

                {/* Contributions */}
                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                    My Contributions
                  </p>
                  <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
                    {p.contributions.map((c, idx) => (
                      <li
                        key={idx}
                        className="flex gap-2 text-sm text-text dark:text-gray-300"
                      >
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech stack */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-black/8 bg-white px-2.5 py-1 text-xs font-medium text-primary dark:border-white/10 dark:bg-white/5 dark:text-gray-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Results */}
                <div className="mt-4 rounded-xl bg-primary/5 p-4 dark:bg-white/5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary dark:text-white">
                    Results
                  </p>
                  <p
                    className={`mt-1 text-sm ${
                      p.results === 'Result to be completed.'
                        ? 'italic text-text-light dark:text-gray-500'
                        : 'text-text dark:text-gray-300'
                    }`}
                  >
                    {p.results}
                  </p>
                </div>

                {/* Links */}
                {(p.demoUrl || p.githubUrl) && (
                  <div className="mt-auto flex flex-wrap gap-3 pt-6">
                    {p.githubUrl && (
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="group/btn inline-flex items-center gap-2 rounded-xl border border-black/10 px-4 py-2.5 text-sm font-semibold text-primary transition-all hover:border-primary hover:bg-primary hover:text-white dark:border-white/15 dark:text-white"
                      >
                        <Github size={16} />
                        GitHub
                        <ArrowUpRight size={14} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </a>
                    )}
                    {p.demoUrl && (
                      <a
                        href={p.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="group/btn inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-accent-dark"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                        <ArrowUpRight size={14} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
