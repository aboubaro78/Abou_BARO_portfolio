import {
  BarChart3,
  Brain,
  Code2,
  Database,
  Settings2,
  TrendingUp,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import { skillCategories } from '@/data';
import SectionHeading from './SectionHeading';

const icons: Record<string, LucideIcon> = {
  code: Code2,
  brain: Brain,
  'bar-chart': BarChart3,
  'trending-up': TrendingUp,
  settings: Settings2,
  database: Database,
  tool: Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="relative bg-white py-24 dark:bg-primary-dark lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Skills & Tools"
          title="Technical"
          highlight="expertise"
          description="A toolkit spanning statistical theory, machine learning engineering and deployment — built through academic research and hands-on projects."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => {
            const Icon = icons[cat.icon] ?? Code2;
            return (
              <div
                key={cat.category}
                className="reveal group relative overflow-hidden rounded-2xl border border-black/8 bg-surface p-6 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover dark:border-white/8 dark:bg-white/5"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/0 blur-2xl transition-all duration-500 group-hover:bg-accent/15" />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-500 group-hover:bg-accent group-hover:text-white dark:bg-white/10 dark:text-white">
                      <Icon size={20} />
                    </span>
                    <h3 className="font-display text-base font-bold text-primary dark:text-white">
                      {cat.category}
                    </h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-black/8 bg-white px-3 py-1.5 text-xs font-medium text-text-muted transition-colors hover:border-accent/40 hover:text-accent dark:border-white/10 dark:bg-white/5 dark:text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
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
