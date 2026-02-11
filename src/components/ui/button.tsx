import Link from "next/link";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  external?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const variants = {
  primary:
    "bg-text-primary text-background hover:bg-text-secondary",
  outline:
    "border border-border hover:border-border-hover text-text-primary hover:bg-surface",
  ghost:
    "text-text-secondary hover:text-text-primary underline-offset-4 hover:underline",
};

const sizes = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-sm",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  external,
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-full font-medium tracking-tight transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
