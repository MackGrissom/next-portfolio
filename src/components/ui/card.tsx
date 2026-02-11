type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-border bg-white/[0.03] p-6 transition-all duration-300 ${
        hover ? "hover:border-border-hover hover:bg-white/[0.05]" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
