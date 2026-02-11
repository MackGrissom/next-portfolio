type SectionProps = {
  id?: string;
  label?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, label, title, children, className }: SectionProps) {
  return (
    <section id={id} className={`px-6 py-16 md:py-24 ${className ?? ""}`}>
      <div className="mx-auto max-w-6xl">
        {label && (
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-text-tertiary">
            {label}
          </p>
        )}
        {title && (
          <h2 className="mb-12 text-3xl font-bold tracking-tighter md:text-4xl">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
