'use client';
import { useState, useRef } from "react";
import clsx from "clsx"
import { MdMenu } from '@react-icons/all-files/md/MdMenu';
import { MdClose } from '@react-icons/all-files/md/MdClose';
import { Section } from "@/components/Section";
import useSticky from "@/hooks/use-sticky";
import Link from "next/link";

interface NavigationItem {
  label: string;
  href: string;
}

interface NavigationDropdown {
  id?: string;
  className?: string;
  items: NavigationItem[];
}

export default function NavigationDropdown({ className, id, items }: NavigationDropdown) {
  const stickyRef = useRef<HTMLDivElement>(null);
  const isSticky = useSticky(stickyRef);
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = (newState: boolean) => setIsOpen(newState);
  return (
    <Section ref={stickyRef} id={id} className={clsx("sticky block md:hidden py-6 top-0 bg-secondary-bg col-span-12 rounded-b-3xl", {
      "shadow-sm": isSticky,
    }, className)}>
      <div className={clsx("flex justify-end transition-all duration-75 ease-in-out", {
        "mb-5": isOpen,
        "delay-75": !isOpen,
      })}>
        {isOpen ? 
          <MdClose size={28} onClick={() => setIsOpen(false)} /> :
          <MdMenu size={28} onClick={() => setIsOpen(true)} />
        }
      </div>
      <div className={clsx("block overflow-hidden transition-all duration-75 ease-in-out", {
        "max-h-0": !isOpen,
        "max-h-[120px] delay-75": isOpen,
      })}>
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="block uppercase text-sm mb-5 text-right"
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </Section>
  )
}