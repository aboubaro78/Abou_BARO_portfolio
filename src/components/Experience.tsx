import { Briefcase, MapPin, Microscope } from 'lucide-react';
import { experiences } from '@/data';
import SectionHeading from './SectionHeading';

export default function Experience() {
  return (
    <section id="experience" className="relative bg-surface py-24 dark:bg-primary-dark lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Experience"
          title="Professional &"
          highlight="research journey"
          description="A blend of industry data science and academic research — applying mathematical rigor to real-world systems."
        />

        <div className="relative mx-auto max-w-4xl">
          {experiences.map((exp, i) => {
            const Icon = exp.type === 'research' ? Microscope : Briefcase;
            return (
              <div
                key={exp.id}
                className="reveal relative pb-12 last:pb-0"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Connector line */}
                {i < experiences.length - 1 && (
                  <span className="absolute left-[22px] top-14 bottom-0 w-0.5 bg-gradient-to-b from-primary/40 to-transparent dark:from-white/20" />
                )}

                <div className="flex gap-6">
                  {/* Marker */}
                  <div className="relative z-10 flex-shrink-0">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-white shadow-card dark:bg-white/10">
                      <Icon size={18} />
                    </span>
                  </div>

                  {/* Card */}
                  <div className="flex-1 rounded-2xl border border-black/8 bg-white p-6 shadow-card transition-all duration-500 hover:shadow-card-hover dark:border-white/10 dark:bg-white/5">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-lg font-bold text-primary dark:text-white">
                          {exp.role}
                        </h3>
                        <p className="mt-0.5 text-sm font-semibold text-accent">
                          {exp.company}
                        </p>
                      </div>
                      <span className="rounded-full bg-primary/5 px-3 py-1 text-xs font-medium text-primary dark:bg-white/10 dark:text-gray-200">
                        {exp.dates}
                      </span>
                    </div>
                    <p className="mt-2 flex items-center gap-1.5 text-sm text-text-muted dark:text-gray-400">
                      <MapPin size={14} className="text-accent" />
                      {exp.location}
                    </p>
                    <ul className="mt-5 space-y-2.5">
                      {exp.responsibilities.map((r, idx) => (
                        <li
                          key={idx}
                          className="flex gap-3 text-sm leading-relaxed text-text dark:text-gray-300"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
