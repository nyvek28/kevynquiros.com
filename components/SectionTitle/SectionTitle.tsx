import clsx from "clsx";

export interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionTitle({
  children,
  className,
}: SectionTitleProps) {
  const classes = clsx(className, "col-span-3 text-4xl font-bold");
  return <h2 className={classes}>{children}</h2>;
}
