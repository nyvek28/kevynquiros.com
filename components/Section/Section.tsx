import { LegacyRef, PropsWithChildren, forwardRef } from "react";
import clsx from "clsx";

interface SectionProps extends PropsWithChildren {
  id?: string;
  className?: string;
}

export const Section = forwardRef<HTMLDivElement, SectionProps>(function Section({ children, className, id }, ref) {
  return (
    <div ref={ref} id={id} className={clsx("px-section-x md:px-0", className)}>
      {children}
    </div>
  )
})

export default Section;