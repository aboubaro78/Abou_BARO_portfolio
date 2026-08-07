type Props = {
  label: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: 'left' | 'center';
};

export default function SectionHeading({
  label,
  title,
  highlight,
  description,
  align = 'left',
}: Props) {
  return (
    <div
      className={`reveal mb-14 max-w-2xl ${
        align === 'center' ? 'mx-auto text-center' : ''
      }`}
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        {label}
      </p>
      <h2 className="font-display text-3xl font-bold tracking-tight text-primary dark:text-white sm:text-4xl lg:text-5xl">
        {title} {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-text-muted dark:text-gray-400">
          {description}
        </p>
      )}
    </div>
  );
}
