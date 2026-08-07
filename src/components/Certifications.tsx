import { Award, BadgeCheck, Calendar, LinkIcon } from 'lucide-react';
import { certifications } from '@/data';
import SectionHeading from './SectionHeading';

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative bg-white py-24 dark:bg-primary-dark lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Certifications"
          title="Continuous"
          highlight="learning"
          description="Specialized training in data tooling, climate data processing and Bayesian spatial modeling."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <div
              key={cert.name}
              className="reveal group relative overflow-hidden rounded-2xl border border-black/8 bg-surface p-7 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover dark:border-white/10 dark:bg-white/5"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/0 blur-2xl transition-all duration-500 group-hover:bg-accent/15" />
              <div className="relative flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/15 text-accent transition-colors duration-500 group-hover:bg-accent group-hover:text-white">
                    <Award size={20} />
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-text-muted dark:text-gray-400">
                    <Calendar size={13} /> {cert.year}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-base font-bold leading-snug text-primary dark:text-white">
                  {cert.name}
                </h3>
                <p className="mt-2 text-sm font-medium text-secondary dark:text-blue-200">
                  {cert.issuer}
                </p>

                <div className="mt-auto pt-6">
                  {cert.verificationUrl ? (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
                    >
                      <LinkIcon size={14} /> Verify certificate
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs italic text-text-light dark:text-gray-500">
                      <BadgeCheck size={14} /> Verification link unavailable
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
