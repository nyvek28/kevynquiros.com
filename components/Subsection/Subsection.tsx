import clsx from "clsx";

import useTheme, { Theme } from "@/hooks/use-theme";

export interface SubsectionProps {
  children: React.ReactNode;
  className?: string;
  theme?: Theme;
}

export default function Subsection({
  children,
  className,
  theme = "primary",
}: SubsectionProps) {
  const { themeClass } = useTheme(theme);
  const hasColSpan = className && className.includes("col-span-");
  const classes = clsx(className, themeClass, `grid grid-cols-subgrid`, {
    "col-span-12": !hasColSpan,
  });

  return <div className={classes}>{children}</div>;
}
