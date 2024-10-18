"use client";

import { useFormStatus } from "react-dom";
import clsx from "clsx";

interface SubmitProps {
  isSubmitted?: boolean;
}

export function Submit({ isSubmitted }: SubmitProps) {
  const { pending } = useFormStatus();
  let label = "Submit";
  const isDisabled = pending || isSubmitted;

  if (isSubmitted) {
    label = "Submitted";
  } else if (pending) {
    label = "Submitting";
  }
  
  return (
    <button
      className={clsx("bg-primary-text text-[white] uppercase p-3 rounded-md max-w-32 tracking-wide", {
        "opacity-70": isDisabled,
      })}
      type="submit"
      disabled={isDisabled}
    >
      {label}
    </button>
  )
}