import { ArrowDown, ArrowUpRight, Github, Linkedin, MapPin } from 'lucide-react';
import { person } from '@/data';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      {/* Background shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-20 h-[34rem] w-[34rem] rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute -left-40 top-1/3 h-[28rem] w-[28rem] rounded-full bg-secondary/20 blur-[100px]" />
        <svg
          className="absolute right-10 top-32 hidden animate-spin-slow text-primary/10 dark:text-white/10 lg:block"
          width="320"
          height="320"
          viewBox="0 0 100 100"
          fill="none"
        >
          <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="36" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="24" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="12" stroke="currentColor" strokeWidth="0.5" />
          <line x1="2" y1="50" x2="98" y2="50" stroke="currentColor" strokeWidth="0.3" />
          <line x1="50" y1="2" x2="50" y2="98" stroke="currentColor" strokeWidth="0.3" />
        </svg>
        <svg
          className="absolute left-8 bottom-24 hidden animate-float text-accent/30 lg:block"
          width="120"
          height="120"
          viewBox="0 0 100 100"
          fill="none"
        >
          <polygon
            points="50,5 95,75 5,75"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        {/* Text */}
        <div className="lg:col-span-7">
          <div className="reveal mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-medium text-primary shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-gray-200">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for opportunities
          </div>

          <h1 className="reveal delay-100 font-display text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[1.02] tracking-tight text-primary dark:text-white">
            {person.firstName}
            <br />
            <span className="gradient-text">{person.lastName}</span>
          </h1>

          <p className="reveal delay-200 mt-6 max-w-xl text-lg font-medium text-secondary dark:text-blue-200">
            {person.title}
          </p>

          <p className="reveal delay-300 mt-5 max-w-2xl text-base leading-relaxed text-text-muted dark:text-gray-400">
            {person.summary.split('.').slice(0, 2).join('.')}.
          </p>

          <div className="reveal delay-400 mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-card transition-all duration-300 hover:bg-secondary hover:shadow-card-hover"
            >
              View Projects
              <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-2xl border border-black/10 px-6 py-3.5 text-sm font-semibold text-primary transition-all duration-300 hover:border-accent hover:text-accent dark:border-white/15 dark:text-white"
            >
              Contact Me
            </a>
          </div>

          <div className="reveal delay-400 mt-10 flex flex-wrap items-center gap-5 text-sm text-text-muted dark:text-gray-400">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={16} className="text-accent" /> {person.location}
            </span>
            <a href={person.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-primary dark:hover:text-white">
              <Linkedin size={16} className="text-accent" /> LinkedIn
            </a>
            <a href={person.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-primary dark:hover:text-white">
              <Github size={16} className="text-accent" /> GitHub
            </a>
          </div>
        </div>

        {/* Photo */}
        <div className="reveal delay-200 lg:col-span-5">
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent/30 via-secondary/20 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-black/10 shadow-card-hover dark:border-white/10">
              <img
                src={person.photo}
                alt={person.name}
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -left-5 top-1/4 hidden animate-float rounded-2xl glass px-4 py-3 shadow-card sm:block">
              <p className="font-display text-lg font-bold text-primary dark:text-white">M.Sc.</p>
              <p className="text-xs text-text-muted dark:text-gray-400">Big Data, AIMS</p>
            </div>
            <div className="absolute -right-4 bottom-8 hidden animate-float rounded-2xl glass px-4 py-3 shadow-card [animation-delay:1.5s] sm:block">
              <p className="font-display text-lg font-bold text-accent">AI & ML</p>
              <p className="text-xs text-text-muted dark:text-gray-400">Specialist</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-medium uppercase tracking-widest text-text-light hover:text-accent sm:flex"
      >
        Scroll
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 dark:border-white/10">
          <ArrowDown size={14} className="animate-bounce" />
        </span>
      </a>
    </section>
  );
}
