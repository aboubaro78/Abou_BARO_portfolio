import { useState } from 'react';
import { Check, Github, Globe, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import { person } from '@/data';
import SectionHeading from './SectionHeading';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  const field =
    'w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-text placeholder-text-light/60 outline-none transition-colors duration-300 focus:border-accent focus:ring-2 focus:ring-accent/20 dark:border-white/10 dark:bg-white/5 dark:text-gray-200 dark:placeholder-gray-500';

  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: person.email,
      href: `mailto:${person.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: person.phone,
      href: `tel:${person.phone.replace(/[^+\d]/g, '')}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: person.location,
      href: undefined,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'abou-birane-baro',
      href: person.linkedin,
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'aboubaro78',
      href: person.github,
    },
    {
      icon: Globe,
      label: 'Portfolio',
      value: 'Crop Recommendation App',
      href: person.portfolio,
    },
  ];

  return (
    <section id="contact" className="relative bg-surface py-24 dark:bg-primary-dark lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Contact"
          title="Let's work"
          highlight="together"
          description="Whether you're recruiting, collaborating on research, or exploring a project — I'd love to hear from you."
        />

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Contact details */}
          <div className="lg:col-span-5">
            <div className="reveal grid gap-4 sm:grid-cols-2">
              {contactItems.map((item) => {
                const Inner = (
                  <div className="group flex items-center gap-4 rounded-2xl border border-black/8 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover dark:border-white/10 dark:bg-white/5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-accent group-hover:text-white dark:bg-white/10 dark:text-white">
                      <item.icon size={19} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wider text-text-muted dark:text-gray-400">
                        {item.label}
                      </p>
                      <p className="mt-0.5 truncate text-sm font-medium text-primary dark:text-white">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                  >
                    {Inner}
                  </a>
                ) : (
                  <div key={item.label}>{Inner}</div>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <div className="reveal delay-200 lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-black/8 bg-white p-6 shadow-card dark:border-white/10 dark:bg-white/5 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-primary dark:text-white">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Jane Doe"
                    className={field}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-primary dark:text-white">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="jane@company.com"
                    className={field}
                  />
                </div>
              </div>
              <div className="mt-5">
                <label className="mb-2 block text-sm font-medium text-primary dark:text-white">
                  Subject
                </label>
                <input
                  required
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="Opportunity / Collaboration / Research"
                  className={field}
                />
              </div>
              <div className="mt-5">
                <label className="mb-2 block text-sm font-medium text-primary dark:text-white">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project or opportunity..."
                  className={`${field} resize-none`}
                />
              </div>
              <button
                type="submit"
                disabled={sent}
                className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-sm font-semibold text-white shadow-card transition-all duration-300 hover:bg-secondary hover:shadow-card-hover disabled:bg-emerald-500 dark:disabled:bg-emerald-500"
              >
                {sent ? (
                  <>
                    <Check size={18} /> Message sent — thank you!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
