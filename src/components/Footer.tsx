import { ArrowUp, Github, Globe, Linkedin, Mail } from 'lucide-react';
import { person } from '@/data';

export default function Footer() {
  return (
    <footer className="border-t border-black/8 bg-white py-10 dark:border-white/10 dark:bg-primary-dark">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white">
              AB
            </span>
            <span className="font-display text-sm font-semibold text-primary dark:text-white">
              {person.name}
            </span>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {[
              { icon: Mail, href: `mailto:${person.email}` },
              { icon: Linkedin, href: person.linkedin },
              { icon: Github, href: person.github },
              { icon: Globe, href: person.portfolio },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-black/10 text-primary transition-all hover:border-accent hover:bg-accent hover:text-white dark:border-white/15 dark:text-white"
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>

          {/* Back to top */}
          <a
            href="#home"
            className="group inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-accent dark:text-gray-400"
          >
            Back to top
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-black/10 transition-colors group-hover:border-accent dark:border-white/15">
              <ArrowUp size={15} />
            </span>
          </a>
        </div>

        <p className="mt-8 border-t border-black/5 pt-6 text-center text-xs text-text-light dark:border-white/10 dark:text-gray-500">
          © {new Date().getFullYear()} {person.name}. Built with React &amp;
          Tailwind CSS. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
