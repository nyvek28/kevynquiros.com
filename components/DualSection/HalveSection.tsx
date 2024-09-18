import clsx from "clsx";
import Subsection from "../Subsection";
import styles from "./DualSection.module.css";

import useTheme, { Theme } from "@/hooks/use-theme";

export interface HalveSectionProps {
  children: React.ReactNode;
  className?: string;
  theme?: Theme;
}

export default function HalveSection({
  children,
  className,
  theme = "primary",
}: HalveSectionProps) {
  const { themeClass } = useTheme(theme);
  const classes = clsx(
    className,
    themeClass,
    styles["halve-section"],
    "relative"
  );
  return <Subsection className={classes}>{children}</Subsection>;
}
