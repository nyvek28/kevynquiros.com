import { PropsWithChildren } from "react";
import clsx from "clsx";

type TextTag = 'p' | 'span';
type TextSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

interface TextProps extends PropsWithChildren {
    as?: TextTag;
    size?: TextSize;
    italic?: boolean;
    bold?: boolean;
    className?: string;
}

export default function Text({
  children,
  as = 'p',
  size = 'md',
  italic = false,
  bold = false,
  className
}: TextProps) {
    const Component = as;

    return (
      <Component className={clsx({
        'text-[14px]': size === 'sm',
        'text-[16px]': size === 'md',
        'text-[24px]': size === 'lg',
        'text-[36px]': size === 'xl',
        'font-bold': bold,
        'italic': italic
      }, className)}>
        {children}
      </Component>
    );
}