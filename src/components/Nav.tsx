import { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { person } from '@/data';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav({
  theme,
  onToggleTheme,
}: {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = links.map((l) => l.href.slice(1));
      const scrollY = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollY) {
          setActive(`#${sections[i]}`);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass border-b border-black/5 shadow-sm dark:border-white/5'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 lg:px-8">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white font-display text-base font-bold shadow-glow transition-transform duration-300 group-hover:scale-105">
            AB
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-tight text-primary dark:text-white sm:block">
            {person.name}
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-0.5 xl:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-300 ${
                  active === l.href
                    ? 'text-accent'
                    : 'text-text-muted hover:text-primary dark:text-gray-300 dark:hover:text-white'
                }`}
              >
                {l.label}
                {active === l.href && (
                  <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-accent" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleTheme}
            aria-label="Toggle dark mode"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 text-primary transition-colors hover:bg-surface dark:border-white/10 dark:text-white dark:hover:bg-white/5"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <a
            href="#contact"
            className="hidden rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-card transition-all duration-300 hover:bg-secondary hover:shadow-card-hover lg:inline-flex"
          >
            Hire Me
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 text-primary dark:border-white/10 dark:text-white xl:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden glass border-t border-black/5 transition-[max-height] duration-500 xl:hidden dark:border-white/5 ${
          open ? 'max-h-[32rem]' : 'max-h-0'
        }`}
      >
        <ul className="grid grid-cols-2 gap-1 px-5 py-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                  active === l.href
                    ? 'bg-accent/10 text-accent'
                    : 'text-text-muted hover:bg-surface dark:text-gray-300 dark:hover:bg-white/5'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="col-span-2 mt-1">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
