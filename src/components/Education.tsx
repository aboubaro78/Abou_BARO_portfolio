import { GraduationCap, MapPin } from 'lucide-react';
import { education } from '@/data';
import SectionHeading from './SectionHeading';

export default function Education() {
  return (
    <section id="education" className="relative bg-surface py-24 dark:bg-primary-dark lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Education"
          title="Academic"
          highlight="foundation"
          description="A progressive journey through mathematics, computer science and data science at leading Senegalese institutions."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {education.map((edu, i) => (
            <div
              key={edu.institution + edu.degree}
              className="reveal group relative overflow-hidden rounded-2xl border border-black/8 bg-white p-7 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover dark:border-white/10 dark:bg-white/5"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/0 blur-2xl transition-all duration-500 group-hover:bg-accent/15" />
              <div className="relative">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-accent group-hover:text-white dark:bg-white/10 dark:text-white">
                  <GraduationCap size={22} />
                </span>
                <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-accent">
                  {edu.dates}
                </p>
                <h3 className="mt-2 font-display text-lg font-bold leading-snug text-primary dark:text-white">
                  {edu.degree} — {edu.field}
                </h3>
                <p className="mt-1.5 text-sm font-medium text-secondary dark:text-blue-200">
                  {edu.institution}
                </p>
                <p className="mt-2 flex items-center gap-1.5 text-sm text-text-muted dark:text-gray-400">
                  <MapPin size={14} className="text-accent" />
                  {edu.location}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-text-muted dark:text-gray-400">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
