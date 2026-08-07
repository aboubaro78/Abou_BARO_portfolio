import { Globe, Sparkles } from 'lucide-react';
import { about, person } from '@/data';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section id="about" className="relative bg-surface py-24 dark:bg-primary-dark lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="About Me"
          title="Turning data into"
          highlight="decisions that matter"
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Bio */}
          <div className="lg:col-span-7">
            <div className="reveal space-y-5 text-base leading-relaxed text-text dark:text-gray-300">
              {about.bio.map((para, i) => (
                <p key={i} className={i === 0 ? 'text-lg text-primary dark:text-white' : ''}>
                  {para}
                </p>
              ))}
            </div>

            {/* Languages */}
            <div className="reveal delay-200 mt-10">
              <h3 className="mb-4 flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-primary dark:text-white">
                <Globe size={16} className="text-accent" /> Languages
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {about.languages.map((lang) => (
                  <span
                    key={lang.name}
                    className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm shadow-sm dark:border-white/10 dark:bg-white/5"
                  >
                    <span className="font-medium text-primary dark:text-white">{lang.name}</span>
                    <span className="text-text-muted dark:text-gray-400">· {lang.level}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Interests card */}
          <div className="lg:col-span-5">
            <div className="reveal delay-200 sticky top-24 overflow-hidden rounded-3xl border border-black/10 bg-white p-8 shadow-card dark:border-white/10 dark:bg-white/5">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
              <h3 className="relative flex items-center gap-2 font-display text-lg font-bold text-primary dark:text-white">
                <Sparkles size={18} className="text-accent" />
                Research Interests
              </h3>
              <div className="relative mt-6 flex flex-wrap gap-2">
                {about.interests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-xl bg-primary/5 px-3.5 py-2 text-sm font-medium text-primary transition-colors hover:bg-accent/10 hover:text-accent dark:bg-white/5 dark:text-gray-200 dark:hover:bg-accent/10"
                  >
                    {interest}
                  </span>
                ))}
              </div>
              <div className="relative mt-8 space-y-3 border-t border-black/5 pt-6 dark:border-white/10">
                <a
                  href={person.github}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-sm text-text-muted transition-colors hover:text-accent dark:text-gray-400"
                >
                  <span className="font-medium text-primary dark:text-white">GitHub:</span>{' '}
                  {person.github.replace('https://', '')}
                </a>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-sm text-text-muted transition-colors hover:text-accent dark:text-gray-400"
                >
                  <span className="font-medium text-primary dark:text-white">LinkedIn:</span>{' '}
                  {person.linkedin.replace('https://www.', '')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
