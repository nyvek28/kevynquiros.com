import Section from "@/components/Section";
import clsx from "clsx";
import styles from "./DualSection.module.css";
import HalveSection, { HalveSectionProps } from "./HalveSection";

interface DualSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function DualSection({
  children,
  className,
  id,
}: DualSectionProps) {
  const classes = clsx(className, styles["dual-section"]);
  return (
    <Section className={classes} id={id}>
      {children}
    </Section>
  );
}

export function Left({ className, children, ...rest }: HalveSectionProps) {
  const classes = clsx(className, styles.left);
  return (
    <HalveSection className={classes} {...rest}>
      {children}
    </HalveSection>
  );
}

export function Right({ className, children, ...rest }: HalveSectionProps) {
  const classes = clsx(className, styles.right);
  return (
    <HalveSection className={classes} {...rest}>
      {children}
    </HalveSection>
  );
}
