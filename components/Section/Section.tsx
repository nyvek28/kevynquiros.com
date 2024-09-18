import clsx from "clsx";

import styles from "./Section.module.css";

import useTheme, { Theme } from "@/hooks/use-theme";

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  paddingY?: boolean;
  paddingX?: boolean;
  theme?: Theme;
}

export default function Section({
  children,
  className,
  id,
  paddingY,
  paddingX = true,
  theme = "primary",
}: SectionProps) {
  const { themeClass } = useTheme(theme);
  const classes = clsx(className, styles.section, themeClass, {
    "py-32": paddingY,
    [styles["x-padding"]]: paddingX,
  });

  return (
    <section id={id} className={classes}>
      {children}
    </section>
  );
}
