type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-text-secondary ${className}`}
    >
      {children}
    </span>
  );
}
